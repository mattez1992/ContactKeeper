import React, { Fragment } from "react";
import "./App.css";
import PrivateRoute from "./Components/routing/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";

import ContactState from "./Context/contact/ContactState";
import AuthState from "./Context/auth/AuthState";
import AlertState from "./Context/alert/AlertState";

import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alerts from "./Components/Layout/Alerts";
import setAuthToken from "./Components/utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <div className="app">
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<PrivateRoute component={Home} />}
                  />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
