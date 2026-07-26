import { Link } from 'react-router-dom';

const featuredWorks = [
  {
    title: 'Garden Wedding',
    description: 'Soft florals, candlelight, and a timeless palette that felt intimate and refined.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Birthday Soirée',
    description: 'A playful yet polished celebration with layered textures and warm lighting.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Corporate Gala',
    description: 'A refined setup focused on elegance, flow, and a memorable guest experience.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <Link className="brand" to="/">Feyizino Events</Link>
          <div className="nav-links">
            <Link to="/portfolio">Works</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Book</Link>
          </div>
        </nav>

        <section className="hero-content">
          <div>
            <p className="eyebrow">Elegant event planning</p>
            <h1>Thoughtful celebrations with a clean, timeless feel.</h1>
            <p className="lead">
              We create polished events that feel personal, warm, and beautifully considered — from intimate gatherings to grand-scale celebrations.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Book your event</Link>
              <Link className="btn btn-secondary" to="/portfolio">View our work</Link>
            </div>
          </div>

          <aside className="hero-card">
            <p className="eyebrow">Signature service</p>
            <h3>Full-service styling and coordination</h3>
            <ul>
              <li>Venue styling and decor</li>
              <li>Guest experience planning</li>
              <li>Custom rentals and luxury details</li>
            </ul>
            <div className="pill">Starting at $2,500</div>
          </aside>
        </section>
      </header>

      <main>
        <section className="section intro">
          <div>
            <p className="eyebrow">About the planner</p>
            <h2>The kind of detail that makes a celebration feel effortless.</h2>
            <p>Feyizino Events brings a calm, refined approach to planning with a strong eye for styling, budgeting, and guest experience.</p>
          </div>
          <div className="panel">
            <h3>Why clients choose us</h3>
            <ul>
              <li>Creative concepts tailored to your story</li>
              <li>Clear pricing and thoughtful budget planning</li>
              <li>Quality products and trusted vendor support</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Recent celebrations with a refined, personal touch.</h2>
          </div>
          <div className="card-grid">
            {featuredWorks.map((work) => (
              <article key={work.title} className="card">
                <img src={work.image} alt={work.title} />
                <div className="card-body">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
