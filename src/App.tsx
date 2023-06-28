import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='sign-in' element={<SignIn />} />
        <Route  path='' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
