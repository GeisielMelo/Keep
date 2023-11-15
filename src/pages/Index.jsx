import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  const { logout, user } = useContext(AuthContext)

  return (
    <div>
      <p>Index</p>
      <button onClick={() => navigate('/notes')}>Notes</button>
      {user && <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}

export default Index
