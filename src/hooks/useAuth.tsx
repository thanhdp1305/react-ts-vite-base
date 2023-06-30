import { AuthContext } from '../providers/AuthProvider'
import { useContext } from 'react'
import { uuidv4 } from '../utils/app'
import { useNavigate } from 'react-router'
import { get, noop } from 'lodash'
import { useAuthAPI } from '../api/useAuthAPI'

export const useAuth = () => {
  const navigate = useNavigate()
  const authAPI = useAuthAPI()
  const authContext = useContext(AuthContext)
  const login = ({ username }: { username: any }) => {
    authContext.username = username
    localStorage.setItem('token', uuidv4())
  }

  const getToken = () => {
    return localStorage.getItem('token')
  }

  const isLoggedIn = () => {
    return localStorage.getItem('token') ? true : false
  }

  const logout = () => {
    localStorage.clear()
    navigate('/sign-in')
  }

  const getData = async ({ callback }: { callback: App.Callback }): Promise<void> => {
    const onSuccess = get(callback, 'onSuccess', noop)
    const onFailure = get(callback, 'onFailure', noop)
    const onFinish = get(callback, 'onFinish', noop)

    try {
      const response = await authAPI.getDataTest()
      onSuccess(response)
    } catch (error) {
      onFailure(error)
    } finally {
      onFinish()
    }
  }

  return {
    login,
    logout,
    username: authContext.username,
    getToken,
    isLoggedIn,
    getData
  }
}
