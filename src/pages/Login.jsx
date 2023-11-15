import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Section, Footer } from '../styles/StyledSign'
import { AuthContext } from '../context/AuthContext'
import { useAlert } from '../hook/useAlert'

const Login = () => {
  const navigate = useNavigate()
  const showAlert = useAlert()
  const { user, login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleLogin = async () => {
    if (!email || !password) {
      showAlert('Email or password not provided.', 'error')
      return
    }

    try {
      await login(email, password)
    } catch (error) {
      showAlert('Wrong email or password.', 'error')
    }
  }

  return (
    <Section>
      <Container>
        <h1>Entrar</h1>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => handleLogin()}>Entrar</button>
        <p>
          Ainda não tem uma conta? <span onClick={() => navigate('/sign-up')}>Cadastre-se</span>
        </p>
        {/* <span onClick={() => navigate("/login/recuperar-senha")}>
          <a>Esqueceu a senha?</a>
        </span> */}
      </Container>
      <Footer>
        <p>
          Ao entrar no aplicativo, você concorda com nossos <a href='#'>termos de serviço.</a>
        </p>
      </Footer>
    </Section>
  )
}

export default Login
