import { Navigate, Route, Routes } from 'react-router'
import PrivateRoute from './PrivateRoute'
import SignIn from '../pages/SignIn/SignIn'
import Dashboard from '../pages/Dashboard/Dashboard'
import ConsoleLayout from '../layouts/ConsoleLayout/ConsoleLayout'
import ErrorPage from '../components/ErrorPage/ErrorPage'

const RouterPage = () => {
  return (
    <Routes>  
      <Route path={'/sign-in'} element={<SignIn/>} />
      <Route path='/' element={<ConsoleLayout/>}>
        <Route element={<PrivateRoute />}>
          <Route index Component={
            () => {
              return (
                <Navigate to={'/dashboard'} />
              )
            }
          } />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage type='404' />} />
    </Routes>
  )
}

export default RouterPage