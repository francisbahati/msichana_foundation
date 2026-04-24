import { Link } from 'react-router-dom';

const tourismPackages = [
  { name: 'Soccer Experience', price: '$1,200', days: '7 days', icon: '⚽', description: 'Train with local coaches + safari' },
  { name: 'Marathon Experience', price: '$1,500', days: '10 days', icon: '🏃‍♀️', description: 'High-altitude training + wildlife tour' },
  { name: 'Cycling Tour', price: '$1,800', days: '12 days', icon: '🚴', description: 'Kilimanjaro cycling + cultural visits' },
  { name: 'Mountain Biking', price: '$1,600', days: '9 days', icon: '🚵', description: 'Off-road biking & crater tour' },
  { name: 'Walking Safari', price: '$1,000', days: '5 days', icon: '🦁', description: 'Guided bush walks & camping' },
  { name: 'Netball', price: '$1,100', days: '7 days', icon: '🏐', description: 'Tournament play + leadership camps' },
  { name: 'Volleyball', price: '$1,100', days: '7 days', icon: '🏐', description: 'Beach & court volleyball' },
];

function Tourism() {
  return (
    <div>
      <div className="tourism-hero">
        <h1>Experience Sports Tourism in Tanzania</h1>
        <p>Combine sports training, cultural immersion, and safari adventure while supporting girls’ empowerment.</p>
      </div>
      <div className="packages-grid">
        {tourismPackages.map((pkg, idx) => (
          <div key={idx} className="package-card">
            <div className="package-icon">{pkg.icon}</div>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <div className="package-price">{pkg.price}</div>
            <div className="package-days">{pkg.days}</div>
            <Link to="/booking" className="btn-select">Select Program</Link>
          </div>
        ))}
      </div>
      <div className="container" style={{ textAlign: 'center', margin: '3rem auto' }}>
        <h2>Why Choose Us</h2>
        <div className="stats-grid" style={{ marginTop: '2rem' }}>
          <div className="stat-card">🏆 Unique sports + safari experience</div>
          <div className="stat-card">🎓 Professional coaching</div>
          <div className="stat-card">🌍 Authentic African culture</div>
          <div className="stat-card">❤️ Direct social impact</div>
        </div>
        <div className="cta-buttons" style={{ marginTop: '2rem' }}>
          <Link to="/booking" className="btn-primary">Book Now</Link>
          <Link to="/contact" className="btn-secondary">Request Information</Link>
        </div>
      </div>
    </div>
  );
}

export default Tourism;