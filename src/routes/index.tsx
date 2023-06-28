import { Route, Routes } from 'react-router'
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
          <Route index element={<Dashboard />}/>
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
export default RouterPage