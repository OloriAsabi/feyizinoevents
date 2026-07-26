const e = React.createElement;

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

const services = [
  { title: 'Planning & design', description: 'Complete event direction with a tailored aesthetic and clear coordination.' },
  { title: 'Styling & decor', description: 'Thoughtful details, florals, rentals, and immersive atmosphere.' },
  { title: 'Budget support', description: 'Structured planning that keeps luxury feeling elegant and intentional.' },
];

const eventCategories = [
  { title: 'Weddings', detail: 'Romantic, elegant weddings tailored to your story.' },
  { title: 'Corporate Events', detail: 'Professional launch parties, conferences, and awards dinners.' },
  { title: 'Private Celebrations', detail: 'Birthdays, anniversaries, and intimate gatherings with style.' },
];

const testimonials = [
  {
    quote: 'Feyizino Events made our wedding unforgettable — every detail was handled with care, and our guests still talk about the flowers and styling.',
    author: 'Aisha & Tunde',
    role: 'Wedding clients, Lagos',
  },
  {
    quote: 'The team transformed our launch into a beautifully styled event with perfect flow, professional service, and strong vendor support.',
    author: 'Olamide',
    role: 'Corporate client, Abuja',
  },
];

const partners = [
  { name: 'Venue & Co' },
  { name: 'Bloom Studio' },
  { name: 'Luxury Rentals' },
  { name: 'Candlelight Events' },
];

const products = [
  { name: 'Table Covers', description: 'Soft linen-inspired covers in ivory, champagne, and blush for a polished base layer.', category: 'Rental decor', price: '₦12,000 / piece', size: '90" x 156"', quality: 'Premium polyester with a linen hand', quantity: '60+ available', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { name: 'Fresh Flowers', description: 'Garden-style florals, centerpieces, and statement bouquets for every table and entryway.', category: 'Floral styling', price: 'From ₦180,000 / arrangement', size: '10–12 stems', quality: 'Seasonally sourced premium blooms', quantity: 'Available for 30+ tables', image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=900&q=80' },
  { name: 'Dining Tables', description: 'Round and rectangular tables that suit intimate dinners and larger guest lists.', category: 'Furniture', price: '₦48,000 / table', size: '72" x 30"', quality: 'Sturdy wood-look rental tables', quantity: '20 units in stock', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' },
  { name: 'Chair Covers', description: 'Elegant chair wraps and sash details that bring a finished look to each seat.', category: 'Seating', price: '₦4,500 / chair', size: 'Standard banquet fit', quality: 'Stretch satin in neutral shades', quantity: '120 pieces available', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lighting Pieces', description: 'Candles, lanterns, and warm lighting accents that elevate the atmosphere after dark.', category: 'Ambience', price: '₦28,000 / unit', size: '15" height average', quality: 'Warm LED and candlelight options', quantity: '40 pieces ready', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80' },
  { name: 'Backdrop Rentals', description: 'Statement arches and photo-worthy installations for ceremonies and receptions.', category: 'Installations', price: '₦220,000 / set', size: '10ft x 8ft', quality: 'Hand-finished details with soft drape', quantity: '10 sets available', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80' },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
];

const pageIds = ['home', 'portfolio', 'services', 'products', 'contact'];

function getCurrentPage() {
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  return pageIds.includes(hash) ? hash : 'home';
}

function LogoMark({ size = 'sm' }) {
  return e('span', { className: 'logo-mark logo-mark-' + size },
    e('img', { src: 'logo-mark.jpg', alt: 'Feyizino Events' })
  );
}

function Brand({ size = 'sm' }) {
  return e('a', { className: 'brand', href: '#home' },
    e(LogoMark, { size: size }),
    e('span', { className: 'brand-text' },
      e('span', { className: 'brand-name' }, 'Feyizino'),
      e('span', { className: 'brand-sub' }, 'Events & Rentals')
    )
  );
}

function HomePage() {
  return e('div', { className: 'page-shell' },
    e('header', { className: 'hero' },
      e('section', { className: 'hero-content' },
        e('div', null,
          e('p', { className: 'eyebrow' }, 'Sagamu · Lagos · Abuja'),
          e('h1', null, 'Transforming every celebration into a ', e('span', { className: 'gold-text' }, 'signature experience'), '.'),
          e('p', { className: 'lead' }, 'Feyizino Events delivers polished event design, seamless coordination, and premium decor for weddings, corporate launches, and private gatherings across Nigeria.'),
          e('div', { className: 'hero-actions' },
            e('a', { className: 'btn btn-primary', href: '#contact' }, 'Book your event'),
            e('a', { className: 'btn btn-secondary', href: '#portfolio' }, 'View our work')
          ),
          e('div', { className: 'hero-details' },
            e('span', null, 'Based in Sagamu, Ogun'),
            e('span', null, 'Serving Lagos, Abuja, and beyond')
          )
        ),
        e('div', null,
          e('div', { className: 'hero-emblem' }, e(LogoMark, { size: 'lg' })),
          e('aside', { className: 'hero-card', style: { marginTop: '32px' } },
            e('p', { className: 'eyebrow' }, 'Signature service'),
            e('h3', null, 'Full-service styling and coordination'),
            e('ul', null,
              e('li', null, 'Venue styling and decor'),
              e('li', null, 'Guest experience planning'),
              e('li', null, 'Custom rentals and luxury details')
            ),
            e('div', { className: 'pill' }, 'Starting at ₦2,500,000')
          )
        )
      )
    ),
    e('main', null,
      e('section', { className: 'section intro' },
        e('div', null,
          e('p', { className: 'eyebrow' }, 'About the planner'),
          e('h2', null, 'The kind of detail that makes a celebration feel effortless.'),
          e('p', null, 'Feyizino Events brings a calm, refined approach to planning with a strong eye for styling, budgeting, and guest experience.')
        ),
        e('div', { className: 'panel' },
          e('h3', null, 'Why clients choose us'),
          e('ul', null,
            e('li', null, 'Creative concepts tailored to your story'),
            e('li', null, 'Clear pricing and thoughtful budget planning'),
            e('li', null, 'Quality products and trusted vendor support')
          )
        )
      ),
      e('section', { className: 'section' },
        e('div', { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'Service areas'),
          e('h2', null, 'Proudly serving Sagamu, Ogun, Lagos, and Abuja.'),
          e('p', null, 'Feyizino Events brings premium event planning and styling to the South West and the Federal Capital Territory.')
        ),
        e('div', { className: 'card-grid', style: { marginTop: '24px' } },
          eventCategories.map((item) => e('article', { key: item.title, className: 'card product-card' },
            e('h3', null, item.title),
            e('p', null, item.detail)
          ))
        )
      ),
      e('section', { className: 'section' },
        e('div', { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'Featured work'),
          e('h2', null, 'Recent celebrations with a refined, personal touch.')
        ),
        e('div', { className: 'card-grid' },
          featuredWorks.map((work) => e('article', { key: work.title, className: 'card' },
            e('img', { src: work.image, alt: work.title }),
            e('div', { className: 'card-body' },
              e('h3', null, work.title),
              e('p', null, work.description)
            )
          ))
        )
      ),
      e('section', { className: 'section testimonials-section' },
        e('div', { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'Testimonials'),
          e('h2', null, 'Loved by clients and trusted by event partners.')
        ),
        e('div', { className: 'testimonial-grid' },
          testimonials.map((item) => e('article', { key: item.author, className: 'card testimonial-card' },
            e('p', { className: 'testimonial-quote' }, `"${item.quote}"`),
            e('div', { className: 'testimonial-author' },
              e('strong', null, item.author),
              e('span', null, item.role)
            )
          ))
        ),
        e('div', { className: 'partners-panel' },
          e('h3', null, 'Our trusted partners'),
          e('div', { className: 'partner-grid' },
            partners.map((partner) => e('span', { key: partner.name, className: 'partner-pill' }, partner.name))
          )
        )
      ),
      e('section', { className: 'section' },
        e('div', { className: 'section-heading' },
          e('p', { className: 'eyebrow' }, 'Product demo'),
          e('h2', null, 'A quick look at the styled pieces available for your event.')
        ),
        e('div', { className: 'product-demo' },
          e('div', { className: 'card product-demo-card' },
            e('h3', null, 'Signature setup'),
            e('p', null, 'Soft table covers, fresh florals, warm lighting, and elegant seating come together in a polished, balanced look.'),
            e('div', { className: 'demo-list' },
              e('div', { className: 'demo-item' },
                e('strong', null, 'Table covers'),
                e('span', null, 'Ivory, blush, and champagne tones for a refined base layer.')
              ),
              e('div', { className: 'demo-item' },
                e('strong', null, 'Florals'),
                e('span', null, 'Garden-inspired arrangements with texture and movement.')
              ),
              e('div', { className: 'demo-item' },
                e('strong', null, 'Lighting'),
                e('span', null, 'Candles and lanterns that soften the evening atmosphere.')
              )
            )
          ),
          e('div', { className: 'card product-demo-card' },
            e('h3', null, 'Ideal for'),
            e('div', { className: 'demo-list' },
              e('div', { className: 'demo-item' },
                e('strong', null, 'Weddings'),
                e('span', null, 'Romantic, airy styling with timeless details.')
              ),
              e('div', { className: 'demo-item' },
                e('strong', null, 'Birthdays'),
                e('span', null, 'Playful setups with a polished finish.')
              ),
              e('div', { className: 'demo-item' },
                e('strong', null, 'Corporate events'),
                e('span', null, 'Elegant decor that feels clean and elevated.')
              )
            )
          )
        )
      )
    )
  );
}

function PortfolioPage() {
  return e('div', { className: 'page-shell' },
    e('section', { className: 'section' },
      e('p', { className: 'eyebrow' }, 'Portfolio'),
      e('h2', null, 'A closer look at the work behind the experience.'),
      e('div', { className: 'card-grid', style: { marginTop: '24px' } },
        featuredWorks.map((item) => e('article', { key: item.title, className: 'card' },
          e('img', { src: item.image, alt: item.title }),
          e('div', { className: 'card-body' },
            e('h3', null, item.title),
            e('p', null, item.description)
          )
        ))
      )
    )
  );
}

function ServicesPage() {
  return e('div', { className: 'page-shell' },
    e('section', { className: 'section' },
      e('p', { className: 'eyebrow' }, 'Services'),
      e('h2', null, 'Flexible services shaped around your celebration.'),
      e('div', { className: 'card-grid', style: { marginTop: '24px' } },
        services.map((service) => e('article', { key: service.title, className: 'card product-card' },
          e('h3', null, service.title),
          e('p', null, service.description)
        ))
      )
    )
  );
}

function ProductsPage() {
  return e('div', { className: 'page-shell' },
    e('section', { className: 'section' },
      e('p', { className: 'eyebrow' }, 'Products catalog'),
      e('h2', null, 'Decor, rentals, and styling pieces curated for every celebration.'),
      e('p', null, 'From table covers and flowers to tables, chair covers, and lighting, every item is chosen to create a cohesive look.'),
      e('div', { className: 'card-grid products-grid', style: { marginTop: '24px' } },
        products.map((item) => e('article', { key: item.name, className: 'card product-card' },
          item.image ? e('img', { src: item.image, alt: item.name }) : null,
          e('div', { className: 'card-body' },
            e('span', null, item.category),
            e('h3', null, item.name),
            e('p', null, item.description),
            e('div', { className: 'product-meta' },
              e('div', null,
                e('strong', null, 'Price'),
                e('span', null, item.price)
              ),
              e('div', null,
                e('strong', null, 'Size'),
                e('span', null, item.size)
              ),
              e('div', null,
                e('strong', null, 'Quality'),
                e('span', null, item.quality)
              ),
              e('div', null,
                e('strong', null, 'Quantity'),
                e('span', null, item.quantity)
              )
            )
          )
        ))
      )
    )
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = React.useState('');
  const [budget, setBudget] = React.useState('500000');
  const [guestCount, setGuestCount] = React.useState('80');
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted('Thank you — your inquiry has been received. We will be in touch shortly.');
  };

  const estimate = Math.max(1800, Math.round(Number(budget) * 0.45 + Number(guestCount) * 18));

  return e('div', { className: 'page-shell' },
    e('section', { className: 'section booking-section' },
      e('div', null,
        e('p', { className: 'eyebrow' }, 'Book your celebration'),
        e('h2', null, 'Let’s create something memorable together.'),
        e('p', null, 'Share a little about your date, style, and vision and we will send a tailored proposal your way.'),
        e('div', { className: 'panel', style: { marginTop: '20px' } },
          e('h3', null, 'Budget-friendly planning'),
          e('p', null, 'We can work around your budget and shape a plan that feels elevated without overspending.'),
          e('p', { className: 'pill' }, 'Estimated starting point: ₦' + estimate.toLocaleString('en-NG'))
        ),
        e('div', { className: 'contact-info' },
          e('span', null, 'hello@feyizinoevents.com'),
          e('span', null, '+234 810 000 0000'),
          e('span', null, 'Plot 8, Freedom Estate, Sagamu, Ogun State'),
          e('span', null, 'Serving Sagamu, Abeokuta, Lagos, and Abuja')
        )
      ),
      e('form', { className: 'booking-form', onSubmit: handleSubmit },
        e('input', { type: 'text', placeholder: 'Your name', required: true }),
        e('input', { type: 'email', placeholder: 'Your email', required: true }),
        e('input', { type: 'text', placeholder: 'Event date' }),
        e('label', { className: 'field-label' },
          'Budget range (₦)',
          e('input', { type: 'number', value: budget, onChange: (event) => setBudget(event.target.value), style: { marginTop: '8px' } })
        ),
        e('label', { className: 'field-label' },
          'Expected guests',
          e('input', { type: 'number', value: guestCount, onChange: (event) => setGuestCount(event.target.value), style: { marginTop: '8px' } })
        ),
        e('textarea', { rows: '4', placeholder: 'Tell us about your celebration' }),
        e('button', { className: 'btn btn-primary', type: 'submit' }, 'Send inquiry'),
        submitted ? e('p', { className: 'success' }, submitted) : null
      )
    )
  );
}

function Footer() {
  return e('footer', { className: 'footer' },
    e('div', { className: 'footer-inner' },
      e('div', null,
        e('div', { className: 'footer-brand' },
          e(LogoMark, { size: 'sm' }),
          e('span', { className: 'brand-text' },
            e('span', { className: 'brand-name' }, 'Feyizino'),
            e('span', { className: 'brand-sub' }, 'Events & Rentals')
          )
        ),
        e('p', null, 'Elegant event planning, styling, and premium decor rentals for weddings, corporate launches, and private celebrations across Nigeria.')
      ),
      e('div', null,
        e('h4', null, 'Explore'),
        e('div', { className: 'footer-links' },
          navItems.map((item) => e('a', { key: item.id, href: '#' + item.id }, item.label)),
          e('a', { href: '#contact' }, 'Book your event')
        )
      ),
      e('div', null,
        e('h4', null, 'Get in touch'),
        e('div', { className: 'footer-links' },
          e('a', { href: 'mailto:hello@feyizinoevents.com' }, 'hello@feyizinoevents.com'),
          e('a', { href: 'tel:+2348100000000' }, '+234 810 000 0000'),
          e('span', null, 'Plot 8, Freedom Estate, Sagamu, Ogun State')
        )
      )
    ),
    e('div', { className: 'footer-bottom' },
      e('span', null, '© ' + new Date().getFullYear() + ' Feyizino Events & Rentals. All rights reserved.'),
      e('span', null, 'Sagamu · Abeokuta · Lagos · Abuja')
    )
  );
}

function App() {
  const [page, setPage] = React.useState(getCurrentPage);

  React.useEffect(() => {
    const handleHashChange = () => {
      setPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const pages = {
    home: e(HomePage),
    portfolio: e(PortfolioPage),
    services: e(ServicesPage),
    products: e(ProductsPage),
    contact: e(ContactPage),
  };

  return e('div', null,
    e('nav', { className: 'topbar topbar-inline' },
      e(Brand),
      e('div', { className: 'nav-links' },
        navItems.map((item) => e('a', {
          key: item.id,
          href: '#' + item.id,
          className: page === item.id ? 'is-active' : undefined,
        }, item.label)),
        e('a', { href: '#contact', className: 'nav-cta' }, 'Book')
      )
    ),
    pages[page] || pages.home,
    e(Footer)
  );
}

function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  loader.style.transition = 'opacity 0.35s ease';
  loader.style.opacity = '0';
  setTimeout(() => loader.remove(), 420);
}

window.onerror = function (message, source, lineno, colno, error) {
  console.error('Feyizino Events:', message, 'at', source + ':' + lineno + ':' + colno, error);
  // A broken render must never trap the visitor behind the loader.
  hideLoader();
};

// Hide the loader once the first render is committed, whether or not it succeeded.
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(React.StrictMode, null, e(App)));
} finally {
  requestAnimationFrame(hideLoader);
}
