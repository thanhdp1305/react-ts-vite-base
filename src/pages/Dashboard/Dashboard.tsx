import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

function Dashboard() {
  const auth = useAuth()
  const [userInfo, setUserInfo] = useState('')

  const getUserInfor = () => {
    setUserInfo(auth.username || '');
  }

  const signOut = () => {
    auth.logout()
  }

  return (
    <>
      <div className='content-header'>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            {/* <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div> */}
          </div>
        </div>
      </div>
      <div className='content'>
        <div className="container-fluid">
          <button type='button' className="btn btn-dark" onClick={getUserInfor}>Get user information </button>
          <button type='button' className="btn btn-dark ml-3" onClick={signOut}>Sign out</button>
          <p className='mt-2 mb-1'>
            <label>Email: </label> {userInfo}
          </p>
          <p>
            <label>Token: </label> {auth.getToken()}
          </p>
        </div>
      </div>
    </>
  )
}

export default Dashboard
