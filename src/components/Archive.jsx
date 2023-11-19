import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import UnarchiveIcon from '@mui/icons-material/Unarchive'
import { Container } from '../styles/StyledAchive'

export const Archive = ({ id, title, description, labels }) => {
  const { updateNote, removeNote, setSearch } = useContext(NotesContext)

  const handleUnArchiveNote = async () => {
    await updateNote(id, title, description, labels, false)
  }

  return (
    <Container id={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {labels.map((label, index) => (
          <li key={index} onClick={() => setSearch(label)}>
            {label}
          </li>
        ))}
      </ul>

      <div className='buttons'>
        <button onClick={() => removeNote(id)}>
          <DeleteForeverIcon style={{ fontSize: '18px' }} />
        </button>
        <button onClick={() => handleUnArchiveNote()}>
          <UnarchiveIcon style={{ fontSize: '18px' }} />
        </button>
      </div>
    </Container>
  )
}
