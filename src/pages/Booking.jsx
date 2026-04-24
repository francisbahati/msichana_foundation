import { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', country: '', program: '', dates: '', participants: 1, message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request sent! You will receive confirmation & payment details within 24 hours.');
  };

  return (
    <div>
      <div className="booking-hero">
        <h1>Reserve Your Spot</h1>
        <p>Start your journey of sport, safari, and social impact.</p>
      </div>
      <div className="booking-grid">
        <div className="booking-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label>Full Name</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
            <div className="form-group"><label>Country</label><input type="text" name="country" value={formData.country} onChange={handleChange} required /></div>
            <div className="form-group"><label>Program</label>
              <select name="program" value={formData.program} onChange={handleChange} required>
                <option value="">Select a program</option>
                <option>Soccer Experience</option><option>Marathon Experience</option><option>Cycling Tour</option>
                <option>Mountain Biking</option><option>Walking Safari</option><option>Netball</option><option>Volleyball</option>
              </select>
            </div>
            <div className="form-group"><label>Preferred Dates</label><input type="text" name="dates" placeholder="e.g., June 2026" value={formData.dates} onChange={handleChange} required /></div>
            <div className="form-group"><label>Number of Participants</label><input type="number" name="participants" min="1" value={formData.participants} onChange={handleChange} required /></div>
            <div className="form-group"><label>Message / Special Requests</label><textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea></div>
            <button type="submit" className="btn-primary btn-block">Confirm Booking</button>
          </form>
        </div>
        <div className="booking-info">
          <div className="payment-info">
            <h3>Payment & After Booking</h3>
            <ul><li>💰 30% deposit required</li><li>🔒 Secure international payments (Visa, Mastercard, PayPal)</li><li>📧 Confirmation within 24h</li><li>📋 Travel details & preparation guide sent after deposit</li></ul>
            <p>You will receive confirmation, travel details, and preparation guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;