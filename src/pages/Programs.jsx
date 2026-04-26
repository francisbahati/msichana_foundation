import { Link } from 'react-router-dom';
import './Programs.css'; // import the dedicated styles

const programsData = [
  {
    id: 1,
    title: 'SPORTS TOURISM',
    icon: '⚽',
    color: '#2E7D32', // green
    description: 'Combine professional sports training with unforgettable safari adventures, all while supporting girls’ empowerment.',
    subPrograms: [
      {
        name: 'DISCOVERY EYES',
        details: [
          'Soccer with Safari',
          'Netball with Safari',
          'Basketball / Volleyball with Safari'
        ],
        description: 'Train in your favourite sport and then explore Tanzania’s iconic wildlife parks.'
      },
      {
        name: 'Suzuki Kilimanjaro Ride & Mountain Biking',
        details: [
          'Road biking safari',
          'Mountain biking on Kilimanjaro slopes'
        ],
        description: 'Cycling adventures for all levels – from paved roads to rugged mountain trails.'
      },
      {
        name: 'Migration Walk',
        details: [
          'Northern Circuit (Serengeti, Ngorongoro)',
          'Nyerere National Park with Usambara Mountain trek'
        ],
        description: 'Walk alongside the great migration and discover hidden landscapes.'
      }
    ]
  },
  {
    id: 2,
    title: 'VOLUNTOURISM',
    icon: '🌍',
    color: '#F9A825', // yellow/gold
    description: 'Travel with purpose – volunteer in community development and sports coaching while experiencing authentic African life.',
    subPrograms: [
      {
        name: 'Community Impact Safari Program (CISP)',
        details: [
          'Assist in coaching girls’ sports teams',
          'Help build and renovate school sports facilities',
          'Teach life skills and leadership workshops'
        ],
        description: 'Empowering communities. Transforming lives. Experiencing Africa.'
      },
      {
        name: 'Hash Run (Marathon Experience)',
        details: [
          'Run in national parks',
          'Highland trail running',
          'Beach and sand runs'
        ],
        description: 'A unique running adventure – from game park trails to ocean shores.'
      }
    ]
  },
  {
    id: 3,
    title: 'AGROBUSINESS - BIA',
    icon: '🌱',
    color: '#8B5E3C', // warm brown
    description: 'Empower rural communities through sustainable farming and business training. High ROI projects for women and youth.',
    subPrograms: [
      {
        name: 'Msichana Agri‑Empowerment Projects',
        details: [
          'Growing Food. Growing Futures. Empowering Women.'
        ],
        description: 'SMART HORTICULTURE PROJECT (HIGH ROI) – Vegetables & Fruits for Urban Markets'
      },
      {
        name: 'Project 1: Intensive Farming',
        details: [
          'High‑demand crops using modern techniques (drip irrigation, greenhouses)',
          'Access to micro‑grants and market linkages'
        ],
        description: 'Transform small plots into profitable agribusinesses.'
      }
    ]
  }
];

function Programs() {
  return (
    <div className="programs-page">
      {/* Hero section */}
      <div className="programs-hero">
        <h1>Our Programs</h1>
        <p>Transform lives through sport, volunteering, and sustainable agriculture.</p>
      </div>

      <div className="container">
        <div className="programs-intro">
          Choose your path to make a lasting impact – whether on the field, in the community, or on the farm.
        </div>

        {/* Loop main programs */}
        {programsData.map((program) => (
          <div key={program.id} className="program-section">
            <div className="program-header" style={{ borderLeftColor: program.color }}>
              <span className="program-icon">{program.icon}</span>
              <h2 className="program-title" style={{ color: program.color }}>{program.title}</h2>
            </div>
            <p className="program-description">{program.description}</p>

            {/* Sub-programs – stacked vertically, no boxes */}
            {program.subPrograms.map((sub, idx) => (
              <div key={idx} className="sub-program">
                <h3 className="sub-program-name" style={{ color: program.color }}>
                  {sub.name}
                </h3>
                <p className="sub-program-desc">{sub.description}</p>
                <ul className="sub-program-list">
                  {sub.details.map((item, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Call to action */}
        <div className="programs-cta">
          <Link to="/booking" className="btn-programs">
            Join a Program
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Programs;