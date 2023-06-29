import { createContext, useState } from 'react'
import { AuthContextProps } from '../types/auth'

export const AuthContext = createContext<AuthContextProps>({
  username: ''
})

export const AuthProvider = (props: ICommonProps) => {
  const [username, setUsername] = useState('')

  const store: any = {
    username: username,
  }

  return (
    <AuthContext.Provider value={store}>
      {props?.children}
    </AuthContext.Provider>
  )
}
