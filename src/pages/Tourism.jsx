import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tourism.css';

// Placeholder images from Envato Elements (replace with your actual licensed image URLs)
const discoveryEyesImages = [
  'https://placehold.co/1200x600/2E7D32/white?text=Envato:Soccer+Safari',
  'https://placehold.co/1200x600/FFB81C/white?text=Envato:Netball+Safari',
  'https://placehold.co/1200x600/8B5E3C/white?text=Envato:Basketball+Safari',
];
const suzukiRideImages = [
  'https://placehold.co/1200x600/2E7D32/white?text=Envato:Suzuki+Kilimanjaro',
  'https://placehold.co/1200x600/FFB81C/white?text=Envato:Mountain+Biking',
  'https://placehold.co/1200x600/8B5E3C/white?text=Envato:Road+Biking+Safari',
];
const migrationWalkImages = [
  'https://placehold.co/1200x600/2E7D32/white?text=Envato:Northern+Circuit',
  'https://placehold.co/1200x600/FFB81C/white?text=Envato:Nyerere+Park',
  'https://placehold.co/1200x600/8B5E3C/white?text=Envato:Usambara+Mountain',
];

// Reusable carousel component
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button className="carousel-btn carousel-prev" onClick={prevSlide}>❮</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <button className="carousel-btn carousel-next" onClick={nextSlide}>❯</button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Tourism() {
  return (
    <div className="tourism-page">
      {/* Hero section */}
      <div className="tourism-hero">
        <h2>Experience Sports Tourism in Tanzania</h2>
        <p>Combine sports training, cultural immersion, and safari adventure while supporting girls’ empowerment.</p>
      </div>

      {/* Elegant explanation section – no box, just styled text */}
      <div className="explanation-section">
        <div className="explanation-text">
          <span className="explanation-highlight">Enjoy a special trip</span> where you can play sports, explore nature, and learn about local culture. 
          You will train with coaches, play with local teams, and improve your skills. At the same time, you will visit beautiful places, 
          see wildlife, and experience life in Tanzania. This is more than just a trip. Every time you join, you help support girls through 
          sports, education, and leadership programs. <strong>Your experience helps create a better future for young girls.</strong>
        </div>
      </div>

      <div className="tourism-container">
        {/* Program 1: DISCOVERY EYES */}
        <div className="tourism-program">
          <div className="program-title">
            <span className="program-icon-large">⚽</span>
            <span>DISCOVERY EYES</span>
          </div>
          <div className="program-subtitle">Soccer with Safari | Netball with Safari | Basketball/Volleyball with Safari</div>
          <p className="program-description">
            Train in your favorite sport – soccer, netball, or basketball/volleyball – with professional coaches. 
            Then embark on an unforgettable safari to see Tanzania’s iconic wildlife. This program builds athletic 
            skills while connecting you with nature and local communities.
          </p>
          <ul className="program-details">
            <li><span className="program-check">✓</span> Professional coaching sessions (5 days)</li>
            <li><span className="program-check">✓</span> 3-day safari in national parks</li>
            <li><span className="program-check">✓</span> Cultural exchange with local youth teams</li>
            <li><span className="program-check">✓</span> All meals, accommodation, and transport included</li>
          </ul>
          <div className="program-meta">
            <span className="program-price">From $1,200</span>
            <span className="program-days">10 days / 9 nights</span>
          </div>
          <ImageCarousel images={discoveryEyesImages} />
          <div style={{ textAlign: 'center' }}>
            <Link to="/booking" className="book-button">Book This Program</Link>
          </div>
        </div>

        {/* Program 2: Suzuki Kilimanjaro Ride & Mountain Biking */}
        <div className="tourism-program">
          <div className="program-title">
            <span className="program-icon-large">🚴</span>
            <span>Suzuki Kilimanjaro Ride & Mountain Biking</span>
          </div>
          <div className="program-subtitle">Road Biking Safari | Mountain Biking on Kilimanjaro Slopes</div>
          <p className="program-description">
            Experience the thrill of cycling through diverse landscapes – from paved roads to rugged mountain trails. 
            The Suzuki Kilimanjaro Ride takes you around Africa’s highest peak, while mountain biking offers off‑road 
            adventures with breathtaking views. Perfect for cyclists of all levels.
          </p>
          <ul className="program-details">
            <li><span className="program-check">✓</span> Guided road cycling safari (support vehicle included)</li>
            <li><span className="program-check">✓</span> Mountain biking on Kilimanjaro’s forested slopes</li>
            <li><span className="program-check">✓</span> Visits to local Maasai villages</li>
            <li><span className="program-check">✓</span> Bike rentals and safety gear provided</li>
          </ul>
          <div className="program-meta">
            <span className="program-price">From $1,800</span>
            <span className="program-days">12 days / 11 nights</span>
          </div>
          <ImageCarousel images={suzukiRideImages} />
          <div style={{ textAlign: 'center' }}>
            <Link to="/booking" className="book-button">Book This Program</Link>
          </div>
        </div>

        {/* Program 3: Migration Walk */}
        <div className="tourism-program">
          <div className="program-title">
            <span className="program-icon-large">🦒</span>
            <span>Migration Walk</span>
          </div>
          <div className="program-subtitle">Northern Circuit | Nyerere National Park with Usambara Mountain</div>
          <p className="program-description">
            Walk alongside the Great Migration in the Serengeti and Ngorongoro, then explore Nyerere National Park 
            (formerly Selous) and hike the Usambara Mountains. This walking safari combines wildlife tracking with 
            breathtaking mountain scenery – an immersive nature experience.
          </p>
          <ul className="program-details">
            <li><span className="program-check">✓</span> Guided walking safaris in the Northern Circuit</li>
            <li><span className="program-check">✓</span> Boat safari in Nyerere National Park</li>
            <li><span className="program-check">✓</span> Usambara Mountain trek with local guides</li>
            <li><span className="program-check">✓</span> Camping under the stars & eco‑lodges</li>
          </ul>
          <div className="program-meta">
            <span className="program-price">From $1,500</span>
            <span className="program-days">14 days / 13 nights</span>
          </div>
          <ImageCarousel images={migrationWalkImages} />
          <div style={{ textAlign: 'center' }}>
            <Link to="/booking" className="book-button">Book This Program</Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div className="why-choose-us">
        <h2 style={{ color: '#4E2A1E' }}>Why Choose Us</h2>
        <div className="stats-grid">
          <div className="stat-card">🏆 Unique sports + safari experience</div>
          <div className="stat-card">🎓 Professional coaching</div>
          <div className="stat-card">🌍 Authentic African culture</div>
          <div className="stat-card">❤️ Direct social impact</div>
        </div>
        <div className="cta-buttons">
          <Link to="/booking" className="btn-primary">Book Now</Link>
          <Link to="/contact" className="btn-secondary">Request Information</Link>
        </div>
      </div>
    </div>
  );
}

export default Tourism;