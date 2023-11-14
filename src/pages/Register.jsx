import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Section, Footer } from '../styles/StyledSign'
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const navigate = useNavigate()
  const { user, register } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const handleRegister = async () => {
    try {
      await register(email, password)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Section>
      <Container>
        <h1>Cadastre-se com e-mail</h1>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => handleRegister()}>Cadastrar</button>
        <p>
          Já possui uma conta? <span onClick={() => navigate('/sign-in')}>Entrar</span>
        </p>
      </Container>
      <Footer>
        <p>
          Ao se cadastrar no aplicativo, você concorda com nossos <a href='#'>termos de serviço.</a>
        </p>
      </Footer>
    </Section>
  )
}

export default Register
