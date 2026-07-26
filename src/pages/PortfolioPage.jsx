const portfolioItems = [
  {
    title: 'Garden Wedding',
    description: 'Romantic florals, candlelight, and a timeless palette.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Birthday Soirée',
    description: 'Playful styling with warm lighting and layered textures.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Corporate Gala',
    description: 'A polished, high-impact setup with refined guest flow.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
  },
];

export default function PortfolioPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="eyebrow">Portfolio</p>
        <h2>A closer look at the work behind the experience.</h2>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {portfolioItems.map((item) => (
            <article key={item.title} className="card">
              <img src={item.image} alt={item.title} />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
