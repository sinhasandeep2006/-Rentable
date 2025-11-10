import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindPage from "./pages/FindPage";
import AddPage from "./pages/AddPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </Router>
  );
};

export default App;
