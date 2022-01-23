import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logonu from 'src/assets/images/logonu.jpg'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState } from 'react'
import axios from 'axios'
import ErrorMessage from 'src/components/custom/ErrorMessage'
import { useEffect } from 'react'
import { isLogin } from 'src/util/Auth'
import { Redirect } from 'react-router-dom'
import { httpClient } from 'src/util/Api'
import { useUser } from 'src/context/UserContext'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsgPass, setErrorMsgPass] = useState('')
  const [errorMsgUsername, setErrorMsgUsername] = useState('')
  const { state: userState, setUser } = useUser()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password, process.env.REACT_APP_DEV_API_URL)
    httpClient.post(
      '/users/login', 
      {
        email: username,
        password: password
      }
    ).then(res => {
      console.log(res.data.data)
      cleanError()
      localStorage.setItem('token', res.data.data.token)
      setUser({
        id: res.data.data.id,
        name: res.data.data.name,
        email: res.data.data.email,
        role: res.data.data.role,
        avatar: res.data.data.avatar,
      })
    }).catch(err => {
      if (err.response.data.meta.message == 'Email not found') {
        cleanError()
        setErrorMsgUsername('Username/email salah')
      }

      if (err.response.data.meta.message == 'Wrong password') {
        cleanError()
        setErrorMsgPass('Password salah')
      }
    })
  }

  const cleanError = () => {
    setErrorMsgPass('')
    setErrorMsgUsername('')
  }

  if(isLogin()){
    console.log(isLogin())
    return <Redirect to='/dashboard' />
  }
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <img
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${logonu})`,
          filter: 'brightness(50%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard style={{ filter: 'brightness(100%)', opacity: '0.95' }} styleclassName="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Username" 
                        autoComplete="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                      />
                    </CInputGroup>
                    <ErrorMessage text={errorMsgUsername} visible={errorMsgUsername}/>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <ErrorMessage text={errorMsgPass} visible={errorMsgPass}/>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit'>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
