import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">
            <NavLink to="/" onClick={closeMenu}>
              <img
                className="logo-image"
                src="/images/logo.png"
                alt="Msichana foundation logo"
              />
            </NavLink>
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* LINKS */}
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/programs" onClick={closeMenu}>Programs</NavLink>
            <NavLink to="/tourism" onClick={closeMenu}>Tourism</NavLink>
            <NavLink to="/booking" onClick={closeMenu}>Booking</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </div>

        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`nav-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Navbar;