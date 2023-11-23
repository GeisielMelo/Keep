import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Section, Footer } from '../styles/StyledSign'
import { AuthContext } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'
import { Loading } from '../components/animated/Loading'

const Register = () => {
  const navigate = useNavigate()
  const showAlert = useAlert()
  const { user, register } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleRegister = async () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!email || !password) {
      showAlert('Email or password not provided.', 'info')
      return
    }

    if (!validEmail) {
      showAlert('Invalid email.', 'warning')
      return
    }

    try {
      setLoading(true)
      await register(email, password)
    } catch (error) {
      showAlert('Email already taken.', 'error')
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRegister()
    }
  }

  return (
    <Section>
      <Container>
        <h1>Sign up with email</h1>
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

        <button disabled={loading} onClick={() => handleRegister()}>
          {loading ? <Loading size='22px' /> : 'Register'}
        </button>

        {!loading && (
          <p>
            Already have an account?{' '}
            <span onClick={() => !loading && navigate('/sign-in')}>
              Sign in
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

export default Register
