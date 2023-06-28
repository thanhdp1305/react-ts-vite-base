import { useContext } from 'react'
import { useAuth } from '../../uses/useAuth/useAuth'
import { AuthContext } from '../../providers/AuthProvider'

function Dashboard() {

  const { token } = useContext(AuthContext)
  const showLog = () => {
    console.log(token)
  }

  return (
    <>
      <div className='content-header'>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className="container-fluid">
          Dashboard
          <button type='button' className="btn btn-dark btn-block" onClick={showLog}>Log</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
