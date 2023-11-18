import React, { useState, useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import { useNavigate } from 'react-router-dom'
import { Nav, Section, Menu, Content, Container } from '../styles/StyledWorkbench'
import { MenuButton } from '../components/MenuButton'
import { Profile } from '../components/Profile'
import { Sync } from '../components/animated/Sync'

import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import LabelIcon from '@mui/icons-material/Label'
import UnarchiveIcon from '@mui/icons-material/Unarchive'

const Workbench = ({ children }) => {
  const navigate = useNavigate()
  const { syncing } = useContext(NotesContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isTextVisible, setTextVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleMenuOpen = () => {
    setIsDisabled(true)

    if (!isOpen) {
      setIsOpen(true)
      setTimeout(() => setTextVisible(true), 500)
    } else {
      setIsOpen(false)
      setTextVisible(false)
    }

    setTimeout(() => setIsDisabled(false), 500)
  }

  const handleButtonClick = (page) => {
    navigate(page)
  }

  return (
    <Section>
      <Nav>
        <div className='left-container'>
          <button disabled={isDisabled} onClick={() => handleMenuOpen()}>
            {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </button>
          <div>
            <img src='./svg/logo.svg' alt='' />
            <h1>Reminders</h1>
          </div>
        </div>

        <div className='middle-container'>
          <input type='text' placeholder='Search' />
        </div>

        <div className='right-container'>
          <Sync play={syncing} />
          <Profile />
        </div>
      </Nav>

      <Container>
        <Menu data-open={isOpen}>
          <MenuButton
            onClick={() => handleButtonClick('/home')}
            isTextVisible={isTextVisible}
            text={'Notes'}
            icon={<TipsAndUpdatesIcon />}
          />
          <MenuButton
            onClick={() => handleButtonClick('/labels')}
            isTextVisible={isTextVisible}
            text={'Labels'}
            icon={<LabelIcon />}
          />
          <MenuButton
            onClick={() => handleButtonClick('/archive')}
            isTextVisible={isTextVisible}
            text={'Archive'}
            icon={<UnarchiveIcon />}
          />
        </Menu>
        <Content>{children}</Content>
      </Container>
    </Section>
  )
}

export default Workbench
