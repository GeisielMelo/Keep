import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import LabelIcon from '@mui/icons-material/Label'
import ArchiveIcon from '@mui/icons-material/Archive'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloudIcon from '@mui/icons-material/Cloud';
import PersonIcon from '@mui/icons-material/Person';
import { Nav, Section, Menu, Content, Container } from '../styles/StyledWorkbench'

const Workbench = ({ children }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isTextVisible, setTextVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleButtonClick = (internalUrl) => {
    navigate(internalUrl)
  }

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
          <button><CloudIcon/></button>
          <button><PersonIcon/></button>
        </div>
      </Nav>

      <Container>
        <Menu data-isOpen={isOpen}>
          <button onClick={() => handleButtonClick('/notes')}>
            {isTextVisible ? (
              <span>
                <TipsAndUpdatesIcon />
                <p>Notes</p>
              </span>
            ) : (
              <span>
                <TipsAndUpdatesIcon />
                <p></p>
              </span>
            )}
          </button>
          <button>
            {isTextVisible ? (
              <span>
                <LabelIcon />
                <p>Labels</p>
              </span>
            ) : (
              <span>
                <LabelIcon />
                <p></p>
              </span>
            )}
          </button>
          <button onClick={() => handleButtonClick('/archived')}>
            {isTextVisible ? (
              <span>
                <ArchiveIcon />
                <p>Archive</p>
              </span>
            ) : (
              <span>
                <ArchiveIcon />
                <p></p>
              </span>
            )}
          </button>
        </Menu>

        <Content>{children}</Content>
      </Container>
    </Section>
  )
}

export default Workbench
