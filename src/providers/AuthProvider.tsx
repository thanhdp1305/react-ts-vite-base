import { createContext, useState } from 'react'
import { AuthContextValue } from '../types/auth'

export const AuthContext = createContext<AuthContextValue>({
  token: ''
})

export function AuthProvider(props: ICommonProps) {
  let [token, setToken] = useState('')

  let ctxValue: any = {
    token: [token, setToken],
  }

  return (
    <AuthContext.Provider value={ctxValue}>
      {props?.children}
    </AuthContext.Provider>
  )
}
