import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { AlertProvider } from './context/AlertContext'

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
    return loading ? <span>Loading...</span> : authenticated ? children : <Navigate to='/sign-in' />
  }

  const Public = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)
    return loading ? <span>Loading...</span> : authenticated ? <Navigate to='/' /> : children
  }

  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='*' element={<Login />} />

            <Route path='/sign-in' element={<Public><Login /></Public>}/>
            <Route path='/sign-up' element={<Public><Register /></Public>}/>

            <Route path='/home' element={<Private><Workbench><Notes /></Workbench></Private>}/>
            <Route path='/labels' element={<Private><Workbench><Labels /></Workbench></Private>}/>
            <Route path='/archive' element={<Private><Workbench><Archived /></Workbench></Private>}/>
          </Routes>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  )
}

export default AppRoutes
