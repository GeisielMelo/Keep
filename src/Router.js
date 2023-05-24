import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";

function RouterApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default RouterApp;
