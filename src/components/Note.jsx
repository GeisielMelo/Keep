import React, { useState, useContext, useEffect } from 'react'
import { NotesContext } from '../context/NotesContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import LabelIcon from '@mui/icons-material/Label'
import ArchiveIcon from '@mui/icons-material/Archive'
import { Container } from '../styles/StyledNote'
import { useDivFocus } from '../hook/useDivFocus'
import { LabelSelector } from './LabelSelector'

export const Note = ({ index, title, description, labels }) => {
  const { updateNote, removeNote } = useContext(NotesContext)
  const { isFocused, focus } = useDivFocus()
  const [selectedLabels, setSelectedLabels] = useState(labels)
  const [titleValue, setTitleValue] = useState(title)
  const [descriptionValue, setDescriptionValue] = useState(description)

  useEffect(() => {
    const handleCloseEditor = async () => {
      await updateNote(index, titleValue, descriptionValue, selectedLabels, false)
    }

    if (
      (!isFocused && titleValue !== title) ||
      (!isFocused && descriptionValue !== description) ||
      (!isFocused && selectedLabels !== labels)
    ) {
      handleCloseEditor()
    }
  }, [isFocused])

  const handleArchiveNote = async () => {
    await updateNote(index, titleValue, descriptionValue, labels, true)
  }

  const handleDeleteNote = async () => {
    await removeNote(index)
  }

  return (
    <Container id={index} ref={focus}>
      {isFocused ? (
        <>
          <textarea
            className='textarea-title'
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <textarea
            className='textarea-description'
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />

          <LabelSelector
            selectedLabels={selectedLabels}
            setSelectedLabels={setSelectedLabels}
          />

          <div className='buttons'>
            <button onClick={() => handleDeleteNote(index)}>
              <DeleteForeverIcon style={{ fontSize: '18px' }} />
            </button>
            <button>
              <LabelIcon style={{ fontSize: '18px' }} />
            </button>
            <button onClick={() => handleArchiveNote()}>
              <ArchiveIcon style={{ fontSize: '18px' }} />
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>
            {title} {index}
          </h1>
          <p>{description}</p>

          <ul>
            {labels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </>
      )}
    </Container>
  )
}
