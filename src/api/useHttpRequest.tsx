import { forEach, get } from 'lodash'
import {
  getAccessToken,
  getRefreshToken,
  getUserInfo,
  revokeUser,
  setAccessToken,
  setRefreshToken,
} from '../utils/cache/cookies'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { StatusCode } from '../constants/statusCode'
import { API_URL } from '../constants/envKey'
import axios from 'axios'
import { shouldRefreshToken } from '../utils/token'
import { useNavigate } from 'react-router'

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
}

const AxiosRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  try {
    const token = getAccessToken()

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`
    }

    config.headers.Accept = 'application/json'

    return config
  } catch (error) {
    throw new Error(error as string)
  }
}

const ForceLogoutRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config
}


export const useHttpRequest = () => {
  const navigate = useNavigate()
  let instance: AxiosInstance | null = null
  let isRefreshing = false
  let refreshSubscribers: App.RequestCallback[] = []

  const http = () => {
    return instance ? instance : initHttp()
  }

  const initHttp = (): AxiosInstance => {
    const http = axios.create({
      baseURL: API_URL,
      headers,
    })

    http.interceptors.request.use(AxiosRequest, (error) => Promise.reject(error))

    http.interceptors.request.use(ForceLogoutRequest, (error) => Promise.reject(error))

    http.interceptors.request.use(refreshTokenRequest, (error) => Promise.reject(error))

    http.interceptors.response.use(
      (response) => {
        navigate('/')
        return response.data?.data || response.data
      },
      (error) => {
        const status = get(error, 'response.status')
        const errorData = get(error, 'response.data')
        switch (status) {
          case StatusCode.Unauthorized : {
            const userInfo = getUserInfo()
            if (userInfo) {
              revokeUser()
              navigate('/sign-in')
            }
            break
          }
          case StatusCode.ValidationFailed :
          case StatusCode.NotFound :
          case StatusCode.BadRequest : {
            return Promise.reject({ ...errorData, status })
          }
          case StatusCode.Forbidden :
          case StatusCode.InternalServerError :
          case StatusCode.TooManyRequests :
            break
          default :
            break
        }
        return Promise.reject(errorData)
      },
    )

    instance = http
    return http
  }

  const refreshTokenRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const isRefreshToken = shouldRefreshToken()
    if (isRefreshToken && !isRefreshing) {
      handleRefreshToken()
    }
    return config
  }

  const handleRefreshToken = (callback?: App.Callback): void => {
    const oldRefreshToken = getRefreshToken()
    isRefreshing = true
    refreshToken({ refreshToken: oldRefreshToken, email: '' }) // auth.user.email
      .then((res: any) => {
        const newToken = res.token
        const newRefreshToken = res.refreshToken
        const onSuccess = get(callback, 'onSuccess')
        if (onSuccess) {
          onSuccess(newToken)
        }
        setAccessToken(newToken)
        setRefreshToken(newRefreshToken)
      })
      .catch(() => {
        revokeUser()
        // navigate('/sign-in')
      })
      .finally(() => {
        isRefreshing = false
      })
  }

  const handleAccessTokenError = (originalRequest: InternalAxiosRequestConfig): Promise<AxiosInstance> => {
    if (!isRefreshing) {
      handleRefreshToken({
        onSuccess: (newToken) => {
          onRefreshed(newToken)
          refreshSubscribers = []
        },
      })
    }
    return new Promise((resolve, reject) => {
      subscribeTokenRefresh((token: string) => {
        originalRequest.headers.Authorization = `Bearer ${token}`
        return axios(originalRequest)
          .then((response) => resolve(response.data?.data || response.data))
          .catch((error) => {
            const errorData = get(error, 'response.data')
            reject(errorData)
          })
      })
    })
  }

  const subscribeTokenRefresh = (cb: App.RequestCallback): void => {
    refreshSubscribers.push(cb)
  }

  const onRefreshed = (token: string): void => {
    forEach(refreshSubscribers, (cb: any) => {
      cb(token)
    })
  }

  const REQUEST = <T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> => {
    return http().request(config)
  }

  const GET = <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return http().get<T, R>(url, config)
  }

  const POST = <T, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> => {
    return http().post<T, R>(url, data, config)
  }

  const PATCH = <T, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> => {
    return http().patch<T, R>(url, data, config)
  }

  const PUT = <T, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> => {
    return http().put<T, R>(url, data, config)
  }

  const DELETE = <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return http().delete<T, R>(url, config)
  }

  const refreshToken = async (params: any): Promise<any> =>
    POST<any, any>('/token', params);

  return {
    REQUEST,
    GET,
    POST,
    PATCH,
    PUT,
    DELETE
  }
}
