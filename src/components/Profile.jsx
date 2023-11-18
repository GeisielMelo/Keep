import React, { useContext } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import { Wrapper, Container, Line } from '../styles/StyledProfile'
import { useDivFocus } from '../hook/useDivFocus'
import { AuthContext } from '../context/AuthContext'

export const Profile = () => {
  const { focus, isFocused } = useDivFocus()
  const { userData, logout } = useContext(AuthContext)

  return (
    <Wrapper ref={focus}>
      <button>
        <PersonIcon />
      </button>
      {isFocused && (
        <Container>
          <h1>{userData ? 'Welcome!' : 'Oh no :('}</h1>
          <h2>{userData ? userData.email : 'Offline'}</h2>
          <Line />
          <p onClick={() => logout()}>Logout</p>
        </Container>
      )}
    </Wrapper>
  )
}
