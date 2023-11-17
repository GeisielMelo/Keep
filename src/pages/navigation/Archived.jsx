import React, { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext'
import { Archive } from '../../components/Archive'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: calc(100vh - 70px);
  overflow: auto;
`

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
