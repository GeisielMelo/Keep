import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";

import Index from "./pages/Index"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Workbench from "./pages/Workbench"

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    return loading ? <span>Loading...</span> : authenticated ? children : <Navigate to="/sign-in" />;
  };

  const Public = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    return loading ? <span>Loading...</span> : authenticated ? <Navigate to="/" /> : children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="*" element={<Login />}/>
          <Route path="/sign-in" element={<Public><Login /></Public>} />
          <Route path="/sign-up" element={<Public><Register /></Public>} />
          <Route path="/home" element={<Private><NotesProvider><Workbench/></NotesProvider></Private>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes;
