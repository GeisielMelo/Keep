import React, { useState, useEffect, createContext } from 'react'
import lodash from 'lodash'
import { createRepository, fetchRepository, updateRepository } from '../services/api'

export const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [labels, setLabels] = useState([])
  const [notes, setNotes] = useState([])
  const [syncing, setSyncing] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user')
      if (!user) {
        return
      }

      try {
        setSyncing(true)
        const response = await fetchRepository(JSON.parse(user))
        setData(response.data)
        setNotes(response.data.notes)
        setLabels(response.data.labels)
      } catch (error) {
        if (error.response.status === 404) {
          const response = await createRepository(JSON.parse(user))
          setData(response.data)
        } else {
          console.error('Internal server error.')
        }
      } finally {
        setSyncing(false)
      }
    }

    const syncData = async () => {
      try {
        setSyncing(true)
        if (!lodash.isEqual(notes, data.notes) || !lodash.isEqual(labels, data.labels)) {
          const user = localStorage.getItem('user')
          if (!user) {
            return
          } else {
            await updateRepository(JSON.parse(user), notes, labels)
          }
        }
      } catch (error) {
        console.error(error)
      } finally {
        setSyncing(false)
      }
    }

    if (!data) {
      fetchData()
    }

    if (notes.length > 0 || labels.length > 0) {
      syncData()
    }
  }, [data, notes, labels])

  const addLabel = (label) => {
    setLabels((prevLabels) => [...prevLabels, label])
  }

  const removeLabel = (label) => {
    setLabels((prevLabels) => prevLabels.filter((l) => l !== label))
  }

  const addNote = (title, description, labels = [], archived = false) => {
    setNotes((prevNotes) => [...prevNotes, { title, description, labels, archived }])
  }

  const removeNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index))
  }

  const updateNote = (index, title, description, labels, archived = false) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note, i) => {
        if (i === index) {
          return {
            title: title,
            description: description,
            labels: labels,
            archived: archived,
          }
        } else {
          return note
        }
      })
    })
  }

  const contextData = {
    notes,
    labels,
    search,
    syncing,
    addLabel,
    removeLabel,
    addNote,
    removeNote,
    updateNote,
    setSearch,
  }

  return <NotesContext.Provider value={contextData}>{children}</NotesContext.Provider>
}
