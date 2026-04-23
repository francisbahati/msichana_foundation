import { Link } from 'react-router-dom';
import './Pages.css';

function About() {
  return (
    <div className="page-container">
      <div className="container" style={{ padding: '2rem' }}>
        {/* Who We Are – expanded explanation */}
        <div className="about-section" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem auto' }}>
          <h2 className="section-title" style={{ color: '#4E2A1E' }}>Who We Are</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4E2A1E', marginBottom: '1.5rem' }}>
            Msichana Foundation Africa is a youth‑driven organization creating opportunities for girls to grow, lead, and succeed through sport, education, and leadership development across Africa.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#5a3a2a' }}>
            Founded in Tanzania, we work directly with local communities to break down barriers that keep girls from reaching their full potential. 
            Our programs use sports as an entry point to build confidence and discipline, while also providing academic support, mentorship, and practical skills for financial independence. 
            We believe that when a girl is empowered, she transforms not only her own life but also her family and her community.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#5a3a2a', marginTop: '1rem' }}>
            Our name, <strong>"Msichana"</strong> (meaning "girl" in Swahili), reflects our commitment to every girl's right to dream, learn, and lead. 
            We are a team of young leaders, coaches, educators, and advocates who are passionate about creating lasting change.
          </p>
        </div>

        {/* Vision & Mission side by side */}
        <div className="vision-mission-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div className="stat-card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#FF4C91' }}>Our Vision</h3>
            <p>An Africa where every girl has the opportunity to thrive and lead.</p>
          </div>
          <div className="stat-card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#FF4C91' }}>Our Mission</h3>
            <p>To empower girls through sports, mentorship, and life‑skills programs.</p>
          </div>
        </div>

        {/* Simple CTA button */}
        <div style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#FF4C91' }}>Partner With Us</Link>
        </div>
      </div>
    </div>
  );
}

export default About;