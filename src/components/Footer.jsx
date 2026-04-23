import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Msichana Foundation Africa</h3>
          <p>Unlocking Potential Through Sports</p>
          <p>© 2026 All Rights Reserved</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/flagship">Flagship Program</Link>
          <Link to="/programs">Programs</Link>
        </div>
        
        <div className="footer-section">
          <h4>Get Involved</h4>
          <Link to="/tourism">Sports Tourism</Link>
          <Link to="/partnership">Partner With Us</Link>
          <Link to="/booking">Book Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 info@msichanafoundation.org</p>
          <p>📞 +255 764 157 295</p>
          <p>📍 Arusha, Tanzania</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;