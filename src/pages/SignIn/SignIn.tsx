import React from 'react'
import GuestLayout from '../../layouts/GuestLayout/GuestLayout'

class SignIn extends React.Component {
  constructor(props: any) {
    super(props)
    // Don't do this!
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    this.renderClass()
  }

  renderClass() {
    document.body.className = ''
    document.body.classList.add('login-page')
  }

  render(): React.ReactNode {
    return (
      <GuestLayout>
        <div className="login-box">
          <div className="card card-outline card-dark">
            <div className="card-header text-center">
              <a href="#" className="h1"><b>Login Page</b></a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form>
                <div className="form-group mb-3">
                  <input v-model="email" className="form-control" placeholder="Email" />
                  <p v-if="errorEmail" className="error-message mt-1"></p>
                </div>
                <div className="form-group mb-3">
                  <input
                    v-model="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <p className="error-message mt-1"></p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="btn btn-dark btn-block">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </GuestLayout>
    )
  }
}

export default SignIn
