
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Api from "./components/api";
import Calculator from "./components/calculator";

function App() {
  return (
    <Router>
      <div id="root">
      <div className="container">
              <div className="col-md-6">
                <h2><strong> District </strong><br /></h2>
                <h6>ASTRIAN BAKERY </h6>
              </div>
            </div>
            <div className="container-fluid bg-white">
              <div className="col-md-12 text-center">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Products</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Menu</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Gallery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Catering</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Contact</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/calculator">Calculate</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/api" element={<Api />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      
    </Router>
  );
}
export default App;

