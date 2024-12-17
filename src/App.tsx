import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router"; // Import from react-router
import Portfolio from "./pages/Portfolio";
import Expertise from "./pages/Expertise";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio/expertise" element={<Expertise />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
