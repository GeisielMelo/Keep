import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import { List } from '../styles/StyledLabelSelector'

export const LabelSelector = ({ selectedLabels, setSelectedLabels }) => {
  const { labels } = useContext(NotesContext)

  const handleSelect = (label) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels((selectedLabels) => selectedLabels.filter((l) => l !== label))
    } else {
      setSelectedLabels((selectedLabels) => [...selectedLabels, label])
    }
  }

  return (
    <List>
      {labels.map((label, index) =>
        selectedLabels.includes(label) ? (
          <li key={index} className='selected' onClick={() => handleSelect(label)}>
            {label}
          </li>
        ) : (
          <li key={index} className='unselected' onClick={() => handleSelect(label)}>
            {label}
          </li>
        ),
      )}
    </List>
  )
}
