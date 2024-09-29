import { useState } from "react";
import FileUpload from "./pages/Home/DataManagement/existingdata/FileUpload";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Part1 from "./pages/Home/DataManagement/newdata/Part1";
import Part2 from "./pages/Home/DataManagement/newdata/Part2";
import Part3 from "./pages/Home/DataManagement/newdata/Part3";
import Part4 from "./pages/Home/DataManagement/newdata/Part4";
import Part5 from "./pages/Home/DataManagement/newdata/Part5";

import HomePage from "./pages/Home/HomPage";
import Signin from "./pages/auth/SIgnin";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import Register from "./pages/auth/Register";
import DataManagementPage from "./pages/Home/DataManagement/DataManagementPage";
import DownloadDataPage from "./pages/Home/DataManagement/DownloadData/DownloadDataPage";

import Admin from "./pages/Home/ProcessMonatring/Admin";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/">
            <Home />
          </Route> */}
        <Route
          path="/datamanagement/newdata/part1"
          element={<ProtectedRoute element={<Part1 />} />}
        />
        <Route
          path="/datamanagement/newdata/part2"
          element={<ProtectedRoute element={<Part2 />} />}
        />
        <Route
          path="/datamanagement/newdata/part3"
          element={<ProtectedRoute element={<Part3 />} />}
        />
        <Route
          path="/datamanagement/newdata/part4"
          element={<ProtectedRoute element={<Part4 />} />}
        />
        <Route
          path="/datamanagement/newdata/part5"
          element={<ProtectedRoute element={<Part5 />} />}
        />
        <Route
          path="/datamanagement/existingdata"
          element={<ProtectedRoute element={<FileUpload />} />}
        />

        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        {/* //? data management section */}
        <Route
          path="/datamanagement"
          element={<ProtectedRoute element={<DataManagementPage />} />}
        />
        <Route
          path="/datamanagement/downloaddata"
          element={<ProtectedRoute element={<DownloadDataPage />} />}
        />


        {/* //? process monitoring section */}
        <Route
          path="/admin"
          element={<ProtectedRoute element={<Admin />} />}
        />
        
      </Routes>
    </Router>
  );
}

export default App;
