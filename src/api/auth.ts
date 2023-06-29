import httpRequest from '../utils/httpRequest'

export const refreshToken = async (params: any): Promise<any> => httpRequest.post<any, any>('/token', params)
