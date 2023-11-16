import React, { useState, useContext } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import { NotesContext } from '../../context/NotesContext'
import { useAlert } from '../../context/AlertContext'
import { Container, LabelContainer, Input } from '../../styles/StyledLabels'

const Labels = () => {
  const { labels, addLabel, removeLabel } = useContext(NotesContext)
  const showAlert = useAlert()
  const [label, setLabel] = useState('')

  const handleNewLabel = (label) => {
    if (label.length === 0) {
      return showAlert('Label cannot be empty.', 'info')
    }

    if (label.length > 50) {
      return showAlert('Label cannot exceed 50 characters.', 'info')
    }

    if (labels.length >= 35) {
      return showAlert('Maximum label limit reached.', 'info')
    }

    if (labels.includes(label)) {
      return showAlert('Label already exists.', 'info')
    }

    addLabel(label.toLowerCase())
    setLabel('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNewLabel(label)
    }
  }

  return (
    <Container>
      <LabelContainer>
        {labels.map((label, index) => (
          <div key={index}>
            <p>{label}</p>
            <button onClick={() => removeLabel(label)}>
              <ClearIcon style={{ fontSize: '10px' }} />
            </button>
          </div>
        ))}
      </LabelContainer>

      <Input>
        <input
          placeholder='label'
          onChange={(e) => setLabel(e.target.value)}
          value={label}
          onKeyDown={handleKeyDown}
          maxLength={50}
        />
        <button onClick={() => handleNewLabel(label)}>
          <AddIcon />
        </button>
      </Input>
    </Container>
  )
}

export default Labels
