import React, { useState, useEffect, createContext } from 'react'
import lodash from 'lodash'
import { createRepository, fetchRepository, updateRepository } from '../services/api'

export const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [labels, setLabels] = useState([])
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem('user')
      if (!user) {
        return
      }

      try {
        const response = await fetchRepository(JSON.parse(user))
        setData(response.data)
        setNotes(response.data.notes)
        setLabels(response.data.labels)
      } catch (error) {
        if (error.response.status === 404) {
          const response = await createRepository(JSON.parse(user))
          setData(response.data)
        } else {
          console.error(error)
          console.error('Internal server error.')
        }
      }
    }

    const syncData = async () => {
      try {
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
      }
    }

    if (!data) {
      fetchData()
    }

    if (notes.length > 0 || labels.length > 0) {
      syncData()
    }
  }, [data, notes, labels])

  const refreshData = async () => {
    const user = localStorage.getItem('user')
    if (!user) {
      return
    }

    try {
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
    }
  }

  const addLabel = (label) => {
    setLabels((prevLabels) => [...prevLabels, label])
  }

  const removeLabel = (label) => {
    setLabels((prevLabels) => prevLabels.filter((l) => l !== label))
  }

  const contextData = {
    notes,
    labels,
    addLabel,
    removeLabel,
    refreshData,
  }

  return <NotesContext.Provider value={contextData}>{children}</NotesContext.Provider>
}
