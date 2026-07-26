const services = [
  { title: 'Planning & design', description: 'Complete event direction with a tailored aesthetic and clear coordination.' },
  { title: 'Styling & decor', description: 'Thoughtful details, florals, rentals, and immersive atmosphere.' },
  { title: 'Budget support', description: 'Structured planning that keeps luxury feeling elegant and intentional.' },
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="section">
        <p className="eyebrow">Services</p>
        <h2>Flexible services shaped around your celebration.</h2>
        <div className="card-grid" style={{ marginTop: 24 }}>
          {services.map((service) => (
            <article key={service.title} className="card product-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
