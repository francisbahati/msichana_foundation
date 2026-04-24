import { Link } from 'react-router-dom';

const programsDetailed = [
  {
    icon: '⚽',
    title: 'Sports Empowerment',
    description: 'We use sports to build confidence, discipline, and leadership.',
    details: ['Weekly training camps with certified coaches', 'Inter‑school leagues and talent identification', 'Athlete scholarships', 'Leadership workshops through team sports']
  },
  {
    icon: '📚',
    title: 'Education & Mentorship',
    description: 'We support girls to stay in school and achieve their goals.',
    details: ['After‑school tutoring', 'Career guidance and university preparation', 'One‑on‑one mentorship', 'Scholarships for secondary education']
  },
  {
    icon: '💼',
    title: 'Economic Empowerment',
    description: 'We provide skills for financial independence and entrepreneurship.',
    details: ['Entrepreneurship bootcamps', 'Digital literacy & financial courses', 'Income‑generating project grants', 'Job placement connections']
  }
];

function Programs() {
  return (
    <div className="page-container">
      <div className="page-hero" style={{ background: '#FFFFFF', borderBottom: `3px solid #FF4C91` }}>
        <h1 style={{ color: '#4E2A1E' }}>Our Programs</h1>
        <p style={{ color: '#8B5E3C' }}>Designed to empower girls and build future leaders across Africa.</p>
      </div>
      <div className="container" style={{ padding: '2rem 1rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#3A2015' }}>Our holistic approach combines sports, education, and economic skills to create lasting change.</p>
        </div>
        <div className="programs-detailed">
          {programsDetailed.map((program, idx) => (
            <div key={idx} className="program-card" style={{ borderTop: `5px solid #FF4C91`, textAlign: 'left' }}>
              <div className="program-icon">{program.icon}</div>
              <h2 style={{ color: '#4E2A1E' }}>{program.title}</h2>
              <p style={{ color: '#FF4C91', fontWeight: '600' }}>{program.description}</p>
              <ul style={{ marginTop: '1rem', listStyle: 'none', paddingLeft: 0 }}>
                {program.details.map((item, i) => (
                  <li key={i} style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#FFB81C' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <Link to="/booking" className="btn-primary">Join a Program</Link>
        </div>
      </div>
    </div>
  );
}

export default Programs;