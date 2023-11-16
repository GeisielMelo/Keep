import React from 'react'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import LabelIcon from '@mui/icons-material/Label'
import UnarchiveIcon from '@mui/icons-material/Unarchive'

export const NotesButton = ({ onClick, isTextVisible }) => {
  return (
    <button onClick={onClick}>
      {isTextVisible ? (
        <span>
          <TipsAndUpdatesIcon />
          <p>Notes</p>
        </span>
      ) : (
        <span>
          <TipsAndUpdatesIcon />
          <p></p>
        </span>
      )}
    </button>
  )
}

export const LabelsButton = ({ onClick, isTextVisible }) => {
  return (
    <button onClick={onClick}>
      {isTextVisible ? (
        <span>
          <LabelIcon />
          <p>Labels</p>
        </span>
      ) : (
        <span>
          <LabelIcon />
          <p></p>
        </span>
      )}
    </button>
  )
}

export const ArchiveButton = ({ onClick, isTextVisible }) => {
  return (
    <button onClick={onClick}>
      {isTextVisible ? (
        <span>
          <UnarchiveIcon />
          <p>Archive</p>
        </span>
      ) : (
        <span>
          <UnarchiveIcon />
          <p></p>
        </span>
      )}
    </button>
  )
}
