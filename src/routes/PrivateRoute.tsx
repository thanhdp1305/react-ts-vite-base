import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth'

function PrivateRoute(props: any) {
  const auth = useAuth()
  const logged = auth.isLoggedIn()

  return (
    logged
      ? <Outlet />
      : <Navigate to="/sign-in" />
  )
}

export default PrivateRoute