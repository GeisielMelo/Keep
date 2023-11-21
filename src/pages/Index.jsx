import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Section, Hero, Technologies, Cards, Footer } from '../styles/StyledIndex'

const Index = () => {
  const navigate = useNavigate()
  const { logout, user } = useContext(AuthContext)

  return (
    <Section>
      <Hero>
        <h1>Reminders</h1>
        <p>
          Reminders is a user-friendly note-taking app inspired by Google Keep. Developed using MERN
          stack, it highlights my dedication to creating efficient solutions and improving my
          technical expertise in React, database management, and authentication.
        </p>
        {!user ? (
          <div>
            <button className='btn-1' onClick={() => navigate('/sign-in')}>
              Sign in
            </button>
            <button className='btn-2' onClick={() => navigate('/sign-up')}>
              Sign Up
            </button>
          </div>
        ) : (
          <div>
            <button className='btn-1' onClick={() => navigate('/home')}>
              Notes
            </button>
            <button className='btn-2' onClick={() => logout()}>
              Logout
            </button>
          </div>
        )}
      </Hero>

      <Technologies>
        <h2>Technologies used to build this app.</h2>
      </Technologies>

      <Cards>
        <a href='https://www.mongodb.com/' target='blank'>
          <img src='./svg/mongodb.svg' alt='MongoDB' />
          <span>MongoDB</span>
        </a>
        <a href='https://expressjs.com/' target='blank'>
          <img src='./svg/express.svg' alt='Express' />
          <span>Express</span>
        </a>
        <a href='https://react.dev/' target='blank'>
          <img src='./svg/react.svg' alt='React' />
          <span>React</span>
        </a>
        <a href='https://nodejs.org/' target='blank'>
          <img src='./svg/node.svg' alt='Node' />
          <span>Node</span>
        </a>
      </Cards>

      <Footer>
        <p>
          © Designed & Built by{' '}
          <a href='https://github.com/GeisielMelo' target='blank'>
            Geisiel Melo
          </a>
        </p>
      </Footer>
    </Section>
  )
}

export default Index
