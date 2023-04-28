import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/jobList";
import AddJob from "./pages/addJob";
import Header from "./components/Header";

import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
