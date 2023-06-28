import { AuthContext } from '../../providers/AuthProvider'
import { useContext } from 'react'

export const useAuth = () => {
  let { token } = useContext(AuthContext)
  const login = () => {
    token = '12'
  }

  const logout = () => {
    console.log(token)
  }

  return {
    login,
    logout,
  }
}
