import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// ----- custom hooks (same as original but cleaned) -----
function useCrossfadeCarousel(images, intervalMs = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageA, setImageA] = useState(images[0]);
  const [imageB, setImageB] = useState(images[0]);
  const [isActiveA, setIsActiveA] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(intervalId);
  }, [images.length, intervalMs]);

  useEffect(() => {
    const newImage = images[currentIndex];
    let timeoutId;
    if (isActiveA) {
      setImageB(newImage);
      timeoutId = setTimeout(() => setIsActiveA(false), 50);
    } else {
      setImageA(newImage);
      timeoutId = setTimeout(() => setIsActiveA(true), 50);
    }
    return () => clearTimeout(timeoutId);
  }, [currentIndex, images, isActiveA]);

  return { currentIndex, setCurrentIndex, imageA, imageB, isActiveA };
}

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    let frame;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setCount(target);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return count;
}

// ----- Hero Component -----
function HeroSection({ images }) {
  const { currentIndex, setCurrentIndex, imageA, imageB, isActiveA } = useCrossfadeCarousel(images, 5000);
  return (
    <section className="hero">
      <div className="hero-background-container">
        <div className={`hero-bg ${isActiveA ? 'active' : 'inactive'}`} style={{ backgroundImage: `url("${imageA}")` }} />
        <div className={`hero-bg ${!isActiveA ? 'active' : 'inactive'}`} style={{ backgroundImage: `url("${imageB}")` }} />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="slide-up">Empowering Girls.<br />Transforming Futures.</h1>
        <p className="hero-subtext fade-in-delay">
          We unlock the potential of girls and young women through sports, education, and leadership opportunities across Africa.
        </p>
        <div className="hero-buttons scale-in">
          <Link to="/booking" className="btn-secondary">Book Experience</Link>
          <Link to="/contact" className="btn-secondary">Partner With Us</Link>
        </div>
      </div>
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <button key={idx} className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} aria-label={`View image ${idx + 1}`} />
        ))}
      </div>
      <div className="scroll-indicator" aria-label="Scroll down"><div className="scroll-arrow" /></div>
    </section>
  );
}

// ----- Stats Section -----
function ImpactStats() {
  const girlsCount = useCountUp(1250, 2000);
  const mentorshipCount = useCountUp(110, 2000);
  const athletesCount = useCountUp(65, 2000);
  return (
    <section className="stats">
      <div className="container">
        <h2 className="section-title">Your Experience Creates Impact</h2>
        <p className="impact-subtext">
          Every program you join directly supports girls’ empowerment, education, and community development.
        </p>
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-number">{girlsCount}+</div><div className="stat-label">Girls Supported</div></div>
          <div className="stat-card"><div className="stat-number">{mentorshipCount}+</div><div className="stat-label">Mentorship Opportunities</div></div>
          <div className="stat-card"><div className="stat-number">{athletesCount}+</div><div className="stat-label">Athletes Developed</div></div>
        </div>
      </div>
    </section>
  );
}

// ----- About Preview -----
function AboutUsPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p>Msichana Foundation Africa is a youth-driven organization creating opportunities for girls to grow, lead, and succeed through sport and education.</p>
          <p>Founded in Tanzania, we believe that every girl deserves the chance to discover her potential. Through sports, mentorship, and economic empowerment, we are building a generation of confident, educated, and financially independent young women who will transform their communities.</p>
          <Link to="/about" className="btn-about">Read More →</Link>
        </div>
      </div>
    </section>
  );
}

// ----- Core Focus -----
const corePrograms = [
  { icon: '⚽', title: 'Sports Empowerment', description: 'We use sports to build confidence, discipline, and leadership.' },
  { icon: '📚', title: 'Education & Mentorship', description: 'We support girls to stay in school and achieve their goals.' },
  { icon: '💼', title: 'Economic Empowerment', description: 'We provide skills for financial independence and entrepreneurship.' },
];

function CoreFocus() {
  return (
    <section className="core-focus-section" style={{ padding: '4rem 1.5rem' }}>
      <div className="container">
        <h2 className="section-title">Our Core Focus</h2>
        <p className="core-description">We tackle the root causes of gender inequality through three interconnected pillars that build confidence, knowledge, and financial independence.</p>
        <div className="programs-grid">
          {corePrograms.map((p, idx) => (
            <div key={idx} className="program-card animated-card">
              <div className="program-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Sports Tourism Preview -----
const tourismPreview = [
  { name: 'Soccer', icon: '⚽' }, { name: 'Marathon', icon: '🏃‍♀️' },
  { name: 'Cycling', icon: '🚴' }, { name: 'Safari Walk', icon: '🦒' }
];

function SportsTourismPreview() {
  return (
    <section className="sports-tourism-preview">
      <div className="container">
        <h2 className="section-title">Experience Sports. Discover Africa. Create Impact.</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: '#4E2A1E' }}>
          Join our unique sports tourism programs that combine professional training with unforgettable safari experiences in Tanzania.
        </p>
        <div className="programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {tourismPreview.map((item, idx) => (
            <div key={idx} className="program-card">
              <div className="program-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <Link to="/tourism" className="btn-select" style={{ marginTop: '1rem' }}>Learn More</Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/tourism" className="btn-secondary">View All Programs →</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="section-title">
        <h2>Be Part of the Change</h2>
        
        
      </div>
    </section>
  );
}

// ----- MAIN HOME COMPONENT -----
function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const heroImages = [
    "/images/adorable-african-black-little-girl.webp",
    "/images/african-american-sisters-park.webp",
    "/images/group-friends-out-bicycling-together.webp",
    "/images/couple-trekking-forest-together.webp",
  ];
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <HeroSection images={heroImages} />
      <ImpactStats />
      <AboutUsPreview />
      <CoreFocus />
      <SportsTourismPreview />
      <FinalCTA />
    </div>
  );
}

export default Home;