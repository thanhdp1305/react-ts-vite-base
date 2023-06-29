import { useEffect, useState } from 'react'
import GuestLayout from '../../layouts/GuestLayout/GuestLayout'
import { useNavigate } from 'react-router'
import { useAuth } from '../../hooks/useAuth'
import { valiator } from '../../utils/validator'

function SignIn() {
  const navigate = useNavigate()
  const auth = useAuth()
  const [firstRender, setFirstRender] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<any>({
    email: '',
    password: ''
  })

  useEffect(() => {
    // did mount or update mount
    if (firstRender == false) {
      renderClass()
    }

    return () => {
      // unmount
    }
  })

  const renderClass = () => {
    document.body.className = ''
    document.body.classList.add('login-page')
    setFirstRender(true)
  }

  const onChangeEmail = (e: any) => {
    setForm((form: any) => { return { ...form, email: e.target.value } })
  }

  const onChangePassword = (e: any) => {
    setForm((form: any) => { return { ...form, password: e.target.value } })
  }

  const validateEmail = (): string => {
    const err = valiator.validate(form.email, {
      required: true,
      errorsMessage: { required: 'Complete this field.' },
    })
    setErrors((errors: any) => { return { ...errors, email: err || '' }})

    return err
  }

  const validatePassword = (): string => {
    const err = valiator.validate(form.password, {
      required: true,
      errorsMessage: { required: 'Complete this field.' },
    })
    setErrors((errors: any) => { return { ...errors, password: err || '' }})

    return err
  }

  const validateForm = (): boolean => {
    const arrRes = [];
    arrRes.push(validateEmail());
    arrRes.push(validatePassword());

    return arrRes.findIndex((x) => x && x.length > 0) < 0;
  }

  const submitForm = () => {
    if (!validateForm()) return

    requestLogin();
  }

  const requestLogin = () => {
    auth.login({
      username: form.email
    })
    navigate('/')
  }

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
                <input 
                  className={
                    [
                      'form-control',
                      errors.email ? 'is-invalid' : ''
                    ].filter(Boolean).join(' ')
                  }
                  placeholder="Email" 
                  value={form.email || ''}
                  onChange={onChangeEmail}
                  onBlur={validateEmail}
                />
                <p className="error-message mt-1">{errors.email}</p>
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className={
                    [
                      'form-control',
                      errors.password ? 'is-invalid' : ''
                    ].filter(Boolean).join(' ')
                  }
                  placeholder="Password"
                  value={form.password || ''}
                  onChange={onChangePassword}
                  onBlur={validatePassword}
                />
                <p className="error-message mt-1">{errors.password}</p>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type='button' className="btn btn-dark btn-block" onClick={submitForm}>Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  )
}

export default SignIn

