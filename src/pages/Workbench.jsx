import { useState, useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloudIcon from '@mui/icons-material/Cloud'
import PersonIcon from '@mui/icons-material/Person'
import { Nav, Section, Menu, Content, Container } from '../styles/StyledWorkbench'
import { NotesButton, ArchiveButton, LabelsButton } from '../components/MenuButtons'
import Notes from './navigation/Notes'
import Archived from './navigation/Archived'
import Labels from './navigation/Labels'


const Workbench = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTextVisible, setTextVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [page, setPage] = useState('notes')

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

  const handleRenderPage = () => {
    if (page === 'notes') {
      return <Notes />
    }
    if (page === 'labels') {
      return <Labels />
    }
    if (page === 'archived') {
      return <Archived />
    }
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
          <button>
            <CloudIcon />
          </button>
          <button>
            <PersonIcon />
          </button>
        </div>
      </Nav>

      <Container>
        <Menu data-open={isOpen}>
          <NotesButton isTextVisible={isTextVisible} onClick={() => setPage('notes')} />
          <LabelsButton isTextVisible={isTextVisible} onClick={() => setPage('labels')} />
          <ArchiveButton isTextVisible={isTextVisible} onClick={() => setPage('archived')} />
        </Menu>

        <Content>{handleRenderPage()}</Content>
      </Container>
    </Section>
  )
}

export default Workbench
