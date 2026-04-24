import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem 1rem' }}>
        <div className="about-section" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem' }}>
          <h2 className="section-title" style={{ color: '#4E2A1E' }}>Who We Are</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4E2A1E', marginBottom: '1.5rem' }}>
            Msichana Foundation Africa is a youth‑driven organization creating opportunities for girls to grow, lead, and succeed through sport, education, and leadership development across Africa.
          </p>
          <p style={{ fontSize: '1rem', color: '#3d2b1f' }}>
            Founded in Tanzania, we work directly with local communities to break down barriers. Our programs use sports as an entry point to build confidence and discipline, while also providing academic support, mentorship, and practical skills for financial independence.
          </p>
          <p style={{ marginTop: '1rem' }}>Our name, <strong>"Msichana"</strong> (meaning "girl" in Swahili), reflects our commitment to every girl's right to dream, learn, and lead.</p>
        </div>

        <div className="vision-mission-grid">
          <div className="stat-card"><h3 style={{ color: '#FF4C91' }}>Our Vision</h3><p>An Africa where every girl has the opportunity to thrive and lead.</p></div>
          <div className="stat-card"><h3 style={{ color: '#FF4C91' }}>Our Mission</h3><p>To empower girls through sports, mentorship, and life‑skills programs.</p></div>
        </div>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
        </div>
      </div>
    </div>
  );
}

export default About;