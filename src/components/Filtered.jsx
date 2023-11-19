import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import { Note } from '../components/Note'
import { Container } from '../styles/StyledNotes'

export const Filtered = () => {
  const { notes, search } = useContext(NotesContext)

  return (
    <Container>
      {notes.map((note, index) => {
        const { title, description, labels } = note
        const searchValue = search.toLowerCase()

        // Render a card if match.
        if (
          title.toLowerCase().includes(searchValue) ||
          description.toLowerCase().includes(searchValue) ||
          labels.some((item) => item.toLowerCase().includes(search))
        ) {
          return (
            <Note
              key={index}
              index={index}
              title={note.title}
              description={note.description}
              labels={note.labels}
              archivable={false}
            />
          )
        }

        // Return null if has no match.
        return null
      })}
    </Container>
  )
}
