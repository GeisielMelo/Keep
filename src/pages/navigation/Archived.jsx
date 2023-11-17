import React, { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import { Archive } from '../../components/Archive'
import { Container } from '../../styles/StyledArchived'

const Archived = () => {
  const { notes } = useContext(NotesContext)
  return (
    <Container>
      {notes.map(
        (note, index) =>
          note.archived && (
            <Archive
              key={index}
              id={index}
              title={note.title}
              description={note.description}
              labels={note.labels}
              archived={note.archived}
            />
          ),
      )}
    </Container>
  )
}

export default Archived
