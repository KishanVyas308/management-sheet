import { useState } from "react";
import FileUpload from "./pages/Home/DataManagement/existingdata/FileUpload";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Part1 from "./pages/Home/DataManagement/newdata/ShippingBill/Part1";
import Part2 from "./pages/Home/DataManagement/newdata/ShippingBill/Part2";
import Part3 from "./pages/Home/DataManagement/newdata/ShippingBill/Part3";
import Part4 from "./pages/Home/DataManagement/newdata/ShippingBill/Part4";
import Part5 from "./pages/Home/DataManagement/newdata/ShippingBill/Part5";

import HomePage from "./pages/Home/HomPage";
import Signin from "./pages/auth/SIgnin";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import Register from "./pages/auth/Register";
import DataManagementPage from "./pages/Home/DataManagement/DataManagementPage";
import DownloadDataPage from "./pages/Home/DataManagement/DownloadData/DownloadDataPage";

import Admin from "./pages/Home/ProcessMonatring/Admin";
import NewDataAnalytics from "./pages/Home/DataManagement/newdata/Analytics/NewDataAnalytics";
import DirectExport from "./pages/Home/DataManagement/newdata/DirectExport/DirectExport";
import IndirectExport from "./pages/Home/DataManagement/newdata/IndirectExport/IndirectExport";
import EWayBillDetails from "./pages/Home/DataManagement/newdata/EWayBillDetails";
import Invoice from "./pages/Home/DataManagement/newdata/Invoice";

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
          path="/datamanagement/newdata/dataanalytics"
          element={<ProtectedRoute element={<NewDataAnalytics />} />}
        />
        <Route
          path="/datamanagement/directExport"
          element={<ProtectedRoute element={<DirectExport />} />}
        />
        <Route
          path="/datamanagement/indirectExport"
          element={<ProtectedRoute element={<IndirectExport />} />}
        />
        <Route
          path="/datamanagement/existingdata"
          element={<ProtectedRoute element={<FileUpload />} />}
        />

        />
        <Route
          path="/datamanagement/invoice"
          element={<ProtectedRoute element={<Invoice />} />}
        />
        <Route
          path="/datamanagement/e-way-bill"
          element={<ProtectedRoute element={<EWayBillDetails />} />}
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
        <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
      </Routes>
    </Router>
  );
}

export default App;
