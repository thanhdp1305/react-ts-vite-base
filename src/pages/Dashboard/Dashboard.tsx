import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button, Modal } from 'react-bootstrap'

function Dashboard() {
  const auth = useAuth()
  const [userInfo, setUserInfo] = useState('')
  const [show, setShow] = useState(false)

  const getUserInfor = () => {
    setUserInfo(auth.username || '');
  }

  const signOut = () => {
    auth.logout()
  }

  const handleClose = () => setShow(false);

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

          <button type='button' className="btn btn-primary mb-3" onClick={() => {setShow(true)}}>Open Modal</button>

          <Modal 
            show={show} 
            onHide={handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
