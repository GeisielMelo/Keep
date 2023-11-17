import React, { useState, useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import { useAlert } from '../../context/AlertContext'
import { Note } from '../../components/Note'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: calc(100vh - 70px);
  overflow: auto;
`

const NewNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
  }
  input {
    border: 1px solid black;
  }
`

const Notes = () => {
  const { editorMode, notes, addNote } = useContext(NotesContext)
  const showAlert = useAlert()
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')

  const handleAddNote = () => {
    if (/(\S)\1{2,}/.test(noteTitle)) {
      return showAlert('Invalid note title type (repeated characters).');
    }
  
    if (/(\S)\1{2,}/.test(noteDescription)) {
      return showAlert('Invalid note description type (repeated characters).');
    }
  
    addNote(noteTitle, noteDescription);
    setNoteTitle('');
    setNoteDescription('');
  };

  return (
    <Container>
      <NewNoteContainer>
        <div>
          <input
            type='text'
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <input
            type='text'
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
          />
          <button disabled={editorMode} onClick={() => handleAddNote()}>
            New Note
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
              archiveMode={false}
            />
          ),
      )}
    </Container>
  )
}

export default Notes
