import { useState } from "react";
import FileUpload from "./pages/existingdata/FileUpload";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Part1 from "./pages/newdata/Part1";
import Part2 from "./pages/newdata/Part2";
import Part3 from "./pages/newdata/Part3";
import Part4 from "./pages/newdata/Part4";
import Part5 from "./pages/newdata/Part5";
import HomePage from "./pages/Home/HomPage";
import Signin from "./pages/auth/SIgnin";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import Register from "./pages/auth/Register";


function App() {
 
  return (
    <Router>
      <Routes>
        {/* <Route path="/">
            <Home />
          </Route> */}
        <Route path="/newdata/part1" element={<ProtectedRoute element={<Part1 />} />} />
        <Route path="/newdata/part2" element={<ProtectedRoute element={<Part2 />} />} /> 
        <Route path="/newdata/part3" element={<ProtectedRoute element={<Part3 />} />} /> 
        <Route path="/newdata/part4" element={<ProtectedRoute element={<Part4 />} />} /> 
        <Route path="/newdata/part5" element={<ProtectedRoute element={<Part5 />} />} />
        <Route path="/existingdata" element={<ProtectedRoute element={<FileUpload  />} />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;




