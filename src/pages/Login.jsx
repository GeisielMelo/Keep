import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Section, Footer } from '../styles/StyledSign'
import { AuthContext } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'
import { Loading } from '../components/animated/Loading'

const Login = () => {
  const navigate = useNavigate()
  const showAlert = useAlert()
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleLogin = async () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!email || !password) {
      showAlert('Email or password not provided.', 'info')
      return
    }

    if (!validEmail) {
      showAlert('Invalid email.', 'warning')
      return
    }

    if (email)
      try {
        setLoading(true)
        await login(email, password)
      } catch (error) {
        showAlert('Wrong email or password.', 'error')
        setLoading(false)
      }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <Section>
      <Container>
        <h1>Sign in</h1>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={!loading ? handleKeyDown : null}
          disabled={loading}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={!loading ? handleKeyDown : null}
          disabled={loading}
        />

        <button disabled={loading} onClick={() => handleLogin()}>
          {loading ? <Loading size='22px' /> : 'Login'}
        </button>

        {!loading && (
          <p>
            Not have an account yet?{' '}
            <span onClick={() => !loading && navigate('/sign-up')}>
              Sign up
            </span>
          </p>
        )}
      </Container>
      <Footer>
        <p>
          By logging into the application, you agree to our{' '}
          <a href='#'>terms of service.</a>
        </p>
      </Footer>
    </Section>
  )
}

export default Login
