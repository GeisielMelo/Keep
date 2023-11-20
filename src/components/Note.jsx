import React, { useState, useContext, useEffect } from 'react'
import { NotesContext } from '../context/NotesContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ArchiveIcon from '@mui/icons-material/Archive'
import { EditMode, Container, NormalMode } from '../styles/StyledNote'
import { useDivFocus } from '../hook/useDivFocus'
import { LabelSelector } from './LabelSelector'

export const Note = ({ index, title, description, labels, archivable }) => {
  const { updateNote, removeNote, setSearch } = useContext(NotesContext)
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

  const handleFilterLongStrings = (str) => {
    return str.replace(/\b\w{13,}\b/g, function (match) {
      return match.substring(0, 10) + '...'
    })
  }

  return (
    <Container>
      <EditMode id={index} ref={focus}>
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

            <LabelSelector selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels} />
          </>
        ) : (
          <>
            <h1>{title}</h1>
            <p>{handleFilterLongStrings(description)}</p>
          </>
        )}
      </EditMode>

      <NormalMode>
        {!isFocused && (
          <>
            <ul>
              {labels.map((label, index) => (
                <li key={index} onClick={() => setSearch(label)}>
                  {label}
                </li>
              ))}
            </ul>

            <div className='buttons'>
              <button onClick={() => handleDeleteNote(index)}>
                <DeleteForeverIcon style={{ fontSize: '18px' }} />
              </button>
              {archivable && (
                <button onClick={() => handleArchiveNote()}>
                  <ArchiveIcon style={{ fontSize: '18px' }} />
                </button>
              )}
            </div>
          </>
        )}
      </NormalMode>
    </Container>
  )
}
