import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional, but we keep minimal; main styles are in Pages.css

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to ="/" className ="navbar-msichana-logo" onClick={closeMenu} >
        <img src="./images/msichana logo.webp" alt="Msichana Foundation Logo"/>
        </Link>
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Msichana Foundation
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? 'icon-close' : 'icon-hamburger'}>&#9776;</span>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li className="nav-item"><Link to="/programs" onClick={closeMenu}>Programs</Link></li>
          <li className="nav-item"><Link to="/tourism" onClick={closeMenu}>Sports Tourism</Link></li>
          <li className="nav-item"><Link to="/booking" onClick={closeMenu}>Booking</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;