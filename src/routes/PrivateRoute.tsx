import { useNavigate } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router'

function PrivateRoute(props: any) {
  const logged = true
  const history = useNavigate()

  return (
    logged
      ? <Outlet />
      : <Navigate to="/sign-in" />
  )
}
export default PrivateRoute