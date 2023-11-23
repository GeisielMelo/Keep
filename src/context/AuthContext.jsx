import React, { useState, useEffect, createContext } from 'react'
import { api, createUserData, signIn, signOut } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (user && token) {
      setUser(JSON.parse(user))
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const { data : { user, token }  } = await signIn(email, password)

    localStorage.setItem('user', JSON.stringify(user.id))
    localStorage.setItem('token', token)

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setUser(user.id)
    navigate('/')
  }

  const register = async (email, password) => {
    await createUserData(email, password)
    await login(email, password)
  }

  const logout = async () => {
    try {
      await signOut()
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      api.defaults.headers.common.Authorization = null
      setUser(null)
      navigate('/')
    } catch (error) {
      console.error('Error on logout.')
    }
  }

  const contextData = {
    authenticated: !!user,
    user,
    loading,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading</p> : children}
    </AuthContext.Provider>
  )
}
