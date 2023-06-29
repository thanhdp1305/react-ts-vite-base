import { useHttpRequest } from './useHttpRequest';

export const useAuthAPI = () => {
  const httpRequest = useHttpRequest()

  const refreshToken = async (params: any): Promise<any> => httpRequest.POST<any, any>('/token', params)
  const getDataTest = async (): Promise<any> => httpRequest.GET<any, any>('/api/activity')

  return {
    refreshToken,
    getDataTest
  }
}