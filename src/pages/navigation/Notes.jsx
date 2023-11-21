import React, { useState, useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import { useAlert } from '../../context/AlertContext'
import { Note } from '../../components/Note'
import { Container, NewNoteContainer } from '../../styles/StyledNotes'
import AddIcon from '@mui/icons-material/Add'

const Notes = () => {
  const { editorMode, notes, addNote } = useContext(NotesContext)
  const showAlert = useAlert()
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')

  const handleAddNote = () => {
    if (noteTitle === '' && noteDescription === '') {
      return showAlert('Nothing to add...')
    }

    if (/(\S)\1{2,}/.test(noteTitle)) {
      return showAlert('Invalid note title type (repeated characters).')
    }

    if (/(\S)\1{2,}/.test(noteDescription)) {
      return showAlert('Invalid note description type (repeated characters).')
    }

    addNote(noteTitle, noteDescription)
    setNoteTitle('')
    setNoteDescription('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddNote()
    }
  }

  return (
    <Container>
      <NewNoteContainer>
        <div>
          <input
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Title'
          />
          <textarea
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Take a note...'
          />
          <button disabled={editorMode} onClick={() => handleAddNote()}>
            <AddIcon />
          </button>
        </div>
      </NewNoteContainer>

      {notes.map(
        (note, index) =>
          !note.archived && (
            <Note
              key={index}
              index={index}
              title={note.title}
              description={note.description}
              labels={note.labels}
              archived={note.archived}
              archivable={true}
            />
          ),
      )}
    </Container>
  )
}

export default Notes
