import { Navigate, Outlet } from 'react-router'

function PrivateRoute(props: any) {
  const logged = true

  return (
    logged
      ? <Outlet />
      : <Navigate to="/sign-in" />
  )
}

export default PrivateRoute