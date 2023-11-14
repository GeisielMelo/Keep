import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Workbench from "./pages/Workbench"

import Archived from "./pages/navigation/Archived"
import Notes from "./pages/navigation/Notes"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Login />} />

        <Route path="/home" element={<Workbench><Notes /></Workbench>}/>
        <Route path="/archived"element={<Workbench><Archived /></Workbench>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
