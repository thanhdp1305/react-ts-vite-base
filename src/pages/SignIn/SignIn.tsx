import React from 'react'
import GuestLayout from '../../layouts/GuestLayout/GuestLayout'

export default class SignIn extends React.Component<ICommonProps> {

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

  goToDashboard() {
    // this.props.history.push('/')
    console.log(this.props)
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
                    <button type='button' className="btn btn-dark btn-block" onClick={this.goToDashboard}>Sign In</button>
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

