import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { AlertProvider } from './context/AlertContext'
import { NotesProvider } from './context/NotesContext'

import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import Workbench from './pages/Workbench'

import Notes from './pages/navigation/Notes'
import Archived from './pages/navigation/Archived'
import Labels from './pages/navigation/Labels'

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)
    return loading ? (
      <span>Loading...</span>
    ) : authenticated ? (
      children
    ) : (
      <Navigate to='/sign-in' />
    )
  }

  const Public = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)
    return loading ? (
      <span>Loading...</span>
    ) : authenticated ? (
      <Navigate to='/' />
    ) : (
      children
    )
  }

  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='*' element={<Login />} />

            <Route
              path='/sign-in'
              element={
                <Public>
                  <Login />
                </Public>
              }
            />
            <Route
              path='/sign-up'
              element={
                <Public>
                  <Register />
                </Public>
              }
            />

            <Route
              path='/home'
              element={
                <Private>
                  <NotesProvider>
                    <Workbench>
                      <Notes />
                    </Workbench>
                  </NotesProvider>
                </Private>
              }
            />
            <Route
              path='/labels'
              element={
                <Private>
                  <NotesProvider>
                    <Workbench>
                      <Labels />
                    </Workbench>
                  </NotesProvider>
                </Private>
              }
            />
            <Route
              path='/archive'
              element={
                <Private>
                  <NotesProvider>
                    <Workbench>
                      <Archived />
                    </Workbench>
                  </NotesProvider>
                </Private>
              }
            />
          </Routes>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
