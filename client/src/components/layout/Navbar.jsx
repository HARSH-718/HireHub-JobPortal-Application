import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <NavLink to="/" className="logo">

          <div className="logo-icon">

            <FaBriefcase />

          </div>

          <h2>
            Hire<span>Hub</span>
          </h2>

        </NavLink>

        {/* Navigation */}

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/jobs"
              onClick={() => setMenuOpen(false)}
            >
              Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Buttons */}

        <div className="nav-buttons">

          <NavLink
            to="/login"
            className="login-btn"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="signup-btn"
          >
            Register
          </NavLink>

        </div>

        {/* Mobile Menu */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <HiOutlineX />
              : <HiOutlineMenuAlt3 />
          }

        </button>

      </div>

    </header>
  );
}

export default Navbar;