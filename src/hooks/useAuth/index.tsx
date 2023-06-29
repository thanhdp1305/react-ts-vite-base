import { AuthContext } from '../../providers/AuthProvider'
import { useContext } from 'react'
import { uuidv4 } from '../../utils/app'
import { useNavigate } from 'react-router'

export const useAuth = () => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const login = ({username}: {username: any}) => {
    authContext.username = username
    localStorage.setItem('token', uuidv4())
  }

  const getToken = () => {
    return localStorage.getItem('token');
  }

  const isLoggedIn = () => {
    return localStorage.getItem('token') ? true : false
  }

  const logout = () => {
    localStorage.clear()
    navigate('/sign-in')
  }

  return {
    login,
    logout,
    username: authContext.username,
    getToken,
    isLoggedIn
  }
}
