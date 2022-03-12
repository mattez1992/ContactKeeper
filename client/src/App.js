import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";
import ContactState from "./Context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Router>
        <div className="app">
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ContactState>
  );
};

export default App;
