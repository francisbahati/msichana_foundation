import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookingContact.css';

function Contact() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const handleContactChange = (e) => setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <div>
      <div className="page-hero">
        <h1>Contact & Partner With Us</h1>
        <p>Let’s work together to empower girls across Africa.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card"><h3>📧 Email</h3><p>hello@msichanafoundation.org</p></div>
          <div className="info-card"><h3>📞 Phone</h3><p>+255 764 157 295</p></div>
          <div className="info-card"><h3>📍 Location</h3><p>Arusha, Tanzania</p></div>
          <div className="partner-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>Partner With Us</h2>
            <p>We collaborate with organizations, teams, and investors to expand our impact.</p>
            <Link to="/contact" className="btn-primary" onClick={() => alert('Partnership inquiry: please email us directly at partnerships@msichanafoundation.org')}>Become a Partner →</Link>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleContactSubmit}>
            <div className="form-group"><label>Name</label><input type="text" name="name" value={contactForm.name} onChange={handleContactChange} required /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" value={contactForm.email} onChange={handleContactChange} required /></div>
            <div className="form-group"><label>Message</label><textarea name="message" rows="5" value={contactForm.message} onChange={handleContactChange} required></textarea></div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;