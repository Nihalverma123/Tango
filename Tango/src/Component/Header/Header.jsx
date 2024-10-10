import React, { useState } from "react";
import { HashRouter as Router, Link } from 'react-router-dom'; // Import HashRouter
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../assets/logo.png";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  return (
    <Router>
      <div className="Headmain">
        <div className="blank"></div>

        {/* First Navbar */}
        <div className="nav1">
          <div className="container g-2 align-items-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-white">
              <div className="container-fluid">
                <ul>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <img src={logo} alt="Logo" style={{ width: '150px' }} />
                    </Link>
                  </li>
                </ul>

                <button
                  className="navbar-toggler bg-black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav1"
                  aria-controls="navbarNav1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav1">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <input
                        type="search"
                        placeholder="Search Product"
                        className="bg-body-secondary rounded-2 border-1 border-success"
                        style={{ width: '30vw', padding: '6px' }}
                      />
                      <span>
                        <button className="btn btn-outline-success text-dark mx-2">Search</button>
                      </span>
                    </li>
                  </ul>

                  <form className="d-flex justify-content-between">
                    <i
                      className="bi bi-cart"
                      style={{ color: 'green', fontSize: '30px' }}
                    ></i>

                    <button
                      className="btn btn-outline-success text-dark mx-2"
                      type="button"
                      onClick={handleLoginClick}
                    >
                      Login
                    </button>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={handleSignUpClick}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Second Navbar */}
        <div className="nav3">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav2" 
                aria-controls="navbarNav2" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav2">
                <ul className="navbar-nav d-flex flex-wrap gap-3 gap-lg-5 justify-content-center justify-content-lg-start align-items-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/event">Events</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Login Form Modal */}
      {showLogin && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Form</h5>
                <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign-Up Form Modal */}
      {showSignUp && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign Up Form</h5>
                <button type="button" className="btn-close" onClick={() => setShowSignUp(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default Header;
