import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth'

function PublicRoute(props: any) {
  const auth = useAuth()
  const logged = auth.isLoggedIn()

  return !logged ? <Outlet /> : <Navigate to={'/dashboard'} />
}

export default PublicRoute
