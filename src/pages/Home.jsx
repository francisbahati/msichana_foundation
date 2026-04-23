import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Pages.css';
 

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
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentIndex, images, isActiveA]);

  return { currentIndex, setCurrentIndex, imageA, imageB, isActiveA };
}

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    animationFrameId = requestAnimationFrame(step);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);
  return count;
}

function HeroSection({ images }) {
  const { currentIndex, setCurrentIndex, imageA, imageB, isActiveA } = useCrossfadeCarousel(images, 5000);
  return (
    <section className="hero">
      <div className="hero-background-container">
        <div className={`hero-bg ${isActiveA ? 'active' : 'inactive'}`} style={{ backgroundImage: `url("${imageA}")` }} />
        <div className={`hero-bg ${!isActiveA ? 'active' : 'inactive'}`} style={{ backgroundImage: `url("${imageB}")` }} />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content animated-content">
        <h1 className="slide-up">Empowering Girls.<br />Transforming Futures.</h1>
        <p className="hero-subtext fade-in-delay">
          We unlock the potential of girls and young women through sports, education, and leadership opportunities across Africa.
        </p>
        <div className="hero-buttons scale-in">
          <Link to="/programs" className="btn-primary pulse-animation">Explore Programs</Link>
          <Link to="/booking" className="btn-primary pulse-animation">Book Experience</Link>
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

// Impact Stats – moved directly after hero
function ImpactStats() {
  const girlsCount = useCountUp(1000, 2000);
  const mentorshipCount = useCountUp(100, 2000);
  const athletesCount = useCountUp(50, 2000);
  return (
    <section className="stats animated-stats impact-after-hero">
      <div className="container">
        <h2 className="section-title reveal-text">Your Experience Creates Impact</h2>
        <p className="impact-subtext" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Every program you join directly supports girls’ empowerment, education, and community development.
        </p>
        <div className="stats-grid">
          <div className="stat-card hover-float">
            <div className="stat-number">{girlsCount}+</div>
            <div className="stat-label">Girls Supported</div>
          </div>
          <div className="stat-card hover-float">
            <div className="stat-number">{mentorshipCount}+</div>
            <div className="stat-label">Mentorship Opportunities</div>
          </div>
          <div className="stat-card hover-float">
            <div className="stat-number">{athletesCount}+</div>
            <div className="stat-label">Athletes Developed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Us Section
function AboutUsPreview() {
  return (
    <section className="about-preview" style={{ padding: '4rem 2rem', backgroundColor: '#fff9f7' }}>
      <div className="container">
        <div className="about-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title reveal-text">About Us</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#4E2A1E' }}>
            Msichana Foundation Africa is a youth-driven organization creating opportunities for girls to grow, lead, and succeed through sport and education.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#5a3a2a' }}>
            Founded in Tanzania, we believe that every girl deserves the chance to discover her potential. 
            Through sports, mentorship, and economic empowerment, we are building a generation of confident, 
            educated, and financially independent young women who will transform their communities.
          </p>
          <Link to="/about" className="btn-about">Read More →</Link>
        </div>
      </div>
    </section>
  );
}

// Core Focus with description
function CoreFocus() {
  return (
    <section className="programs-overview core-focus-section">
      <div className="container">
        <h2 className="section-title reveal-text">Our Core Focus</h2>
        <p className="core-description" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto', color: '#4E2A1E', fontSize: '1.05rem' }}>
          We tackle the root causes of gender inequality through three interconnected pillars that build confidence, knowledge, and financial independence.
        </p>
        <div className="programs-grid">
          {corePrograms.map((program, idx) => (
            <div key={idx} className="program-card animated-card">
              <div className="program-icon-wrapper"><div className="program-icon">{program.icon}</div></div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const corePrograms = [
  { icon: '⚽', title: 'Sports Empowerment', description: 'We use sports to build confidence, discipline, and leadership.' },
  { icon: '📚', title: 'Education & Mentorship', description: 'We support girls to stay in school and achieve their goals.' },
  { icon: '💼', title: 'Economic Empowerment', description: 'We provide skills for financial independence and entrepreneurship.' },
];

// Sports Tourism Preview (same as before)
const tourismProgramsPreview = [
  { name: 'Soccer', icon: '⚽' },
  { name: 'Marathon', icon: '🏃‍♀️' },
  { name: 'Cycling', icon: '🚴' },
  { name: 'Safari Walk', icon: '🦒' },
];

function SportsTourismPreview() {
  return (
    <section className="sports-tourism-preview" style={{ padding: '4rem 2rem', background: '#FEF5E7' }}>
      <div className="container">
        <h2 className="section-title">Experience Sports. Discover Africa. Create Impact.</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto', color: '#4E2A1E' }}>
          Join our unique sports tourism programs that combine professional training with unforgettable safari experiences in Tanzania.
        </p>
        <div className="programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {tourismProgramsPreview.map((item, idx) => (
            <div key={idx} className="program-card" style={{ textAlign: 'center' }}>
              <div className="program-icon" style={{ fontSize: '3rem' }}>{item.icon}</div>
              <h3>{item.name}</h3>
              <Link to="/tourism" className="btn-select" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More</Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/tourism" className="btn-primary">View All Programs →</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Be Part of the Change</h2>
        <div className="cta-buttons">
          <Link to="/booking" className="btn-primary">Book Your Experience</Link>
          <Link to="/contact" className="btn-secondary">Become a Partner</Link>
        </div>
      </div>
    </section>
  );
}

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
      <ImpactStats />            {/* moved right after hero */}
      <AboutUsPreview />
      <CoreFocus />
      <SportsTourismPreview />
      <FinalCTA />
    </div>
  );
}

export default Home;