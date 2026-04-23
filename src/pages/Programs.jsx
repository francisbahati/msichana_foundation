import { Link } from 'react-router-dom';
import './Pages.css';

const programsDetailed = [
  {
    icon: '⚽',
    title: 'Sports Empowerment',
    description: 'We use sports to build confidence, discipline, and leadership.',
    details: [
      'Weekly training camps with certified coaches',
      'Inter‑school leagues and talent identification',
      'Athlete scholarships for advanced development',
      'Leadership workshops through team sports'
    ]
  },
  {
    icon: '📚',
    title: 'Education & Mentorship',
    description: 'We support girls to stay in school and achieve their goals.',
    details: [
      'After‑school tutoring and academic support',
      'Career guidance and university preparation',
      'One‑on‑one mentorship with female role models',
      'Scholarships for secondary and vocational education'
    ]
  },
  {
    icon: '💼',
    title: 'Economic Empowerment',
    description: 'We provide skills for financial independence and entrepreneurship.',
    details: [
      'Entrepreneurship bootcamps and business planning',
      'Digital literacy and financial management courses',
      'Income‑generating project grants',
      'Job placement and internship connections'
    ]
  }
];

function Programs() {
  return (
    <div className="page-container">
      {/* Hero with neutral white background – no awkward color */}
      <div className="page-hero" style={{ background: '#FFFFFF', borderBottom: `3px solid #FF4C91` }}>
        <h1 style={{ color: '#4E2A1E' }}>Our Programs</h1>
        <p style={{ color: '#8B5E3C' }}>Designed to empower girls and build future leaders across Africa.</p>
      </div>

      <div className="container" style={{ padding: '2rem' }}>
        {/* Introduction – darker text for readability */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#3A2015' }}>
            Our holistic approach combines sports, education, and economic skills to create lasting change. 
            Each program is tailored to the needs of the girls we serve and is delivered in partnership with local communities.
          </p>
        </div>

        {/* Three detailed program cards – clean white background, good contrast */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {programsDetailed.map((program, idx) => (
            <div key={idx} style={{ 
              background: '#FFFFFF', 
              borderRadius: '16px', 
              padding: '1.8rem',
              boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              borderTop: `5px solid #FF4C91`
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#FFB81C' }}>{program.icon}</div>
              <h2 style={{ color: '#4E2A1E', fontSize: '1.6rem', marginBottom: '0.5rem' }}>{program.title}</h2>
              <p style={{ color: '#FF4C91', fontWeight: '600', marginBottom: '1rem' }}>{program.description}</p>
              <ul style={{ textAlign: 'left', listStyle: 'none', paddingLeft: 0 }}>
                {program.details.map((item, i) => (
                  <li key={i} style={{ margin: '0.75rem 0', color: '#3A2015', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: '#FFB81C', fontWeight: 'bold' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <Link to="/booking" className="btn-primary" style={{ backgroundColor: '#FF4C91', padding: '12px 32px', border: 'none' }}>Join a Program</Link>
        </div>
      </div>
    </div>
  );
}

export default Programs;