import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Footer } from '../styles/StyledSign';
import { AuthContext } from '../context/AuthContext';
import { GlobalMessage } from '../components/GlobalMessage';

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Fill all fields.');
      return;
    }

    try {
      await login(email, password);
    } catch (error) {
      setErrorMessage('Wrong password or email.');
    }
  };

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
      {errorMessage && <GlobalMessage message={errorMessage} type={'error'} />}
    </Section>
  );
};

export default Login;
