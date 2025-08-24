import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold fs-4 text-warning" to="/">
          🎥 MovieHub
        </Link>

        {/* Hamburger menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-semibold">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/add-movie">
                Add Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
