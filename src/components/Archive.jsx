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

  const handleFilterLongStrings = (str) => {
    return str.replace(/\b\w{13,}\b/g, function (match) {
      return match.substring(0, 10) + '...'
    })
  }

  return (
    <Container id={id}>
      <h1>{title}</h1>
      <p>{handleFilterLongStrings(description)}</p>
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
