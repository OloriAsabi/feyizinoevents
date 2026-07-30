const e = React.createElement;

/**
 * The real business details, in one place so the contact page, the footer, and
 * anywhere else that quotes them can never drift apart.
 *
 * `emailHref` percent-encodes the `&`: in a mailto: URL a bare ampersand starts
 * a header field, which would truncate the address at "FEYIZINOevents".
 */
const contact = {
  name: 'Feyizino Event & Rentals',
  phone: '+234 802 319 0408',
  phoneHref: 'tel:+2348023190408',
  office: '+234 802 475 4605',
  officeHref: 'tel:+2348024754605',
  email: 'FEYIZINOevents&rentals@gmail.com',
  emailHref: 'mailto:FEYIZINOevents%26rentals@gmail.com',
  instagram: '@FEYIZINO_Events',
  instagramHref: 'https://www.instagram.com/feyizino_events/',
  // wa.me wants the number in full international form with no punctuation.
  whatsapp: '2348023190408',
  address: '9, Abiodun Ogunyanwo Street, Off Ewusi Street, Makun, Sagamu, Ogun State',
  addressNote: 'Directly beside the AUD Central Mosque building, Awolowo Market',
  serving: 'Serving Sagamu, Abeokuta, Lagos, and Abuja',
};

/**
 * Hero banner slides. Mix video and stills freely.
 *
 * A video slide always carries a `poster`: it shows while the video buffers,
 * and stays put if the file is missing, so the banner never renders empty.
 * Drop your own footage in media/ and point `src` at it.
 *
 * Local paths are root-absolute: the site is path-routed, so a relative src on
 * /rentals would resolve against /rentals/ and miss the file.
 */
const heroSlides = [
  {
    type: 'video',
    src: '/media/hero.mp4',
    poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80',
    alt: 'A couple holding a bouquet in warm, low light',
    // Matches the clip length, so it advances on a clean loop point.
    duration: 10000,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=80',
    alt: 'Long banquet tables laid with linen, glassware, and centrepieces',
    duration: 6500,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=80',
    alt: 'A floral ceremony backdrop framed by garlanded pillars',
    duration: 6500,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80',
    alt: 'A banquet table with layered florals, glassware, and place settings',
    duration: 6500,
  },
];

const featuredWorks = [
  {
    title: 'Garden Wedding',
    description: 'Soft florals, candlelight, and a timeless palette that felt intimate and refined.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    alt: 'Two ceremony chairs dressed with florals on a lawn',
  },
  {
    title: 'Birthday Soirée',
    description: 'A playful yet polished celebration with layered textures and warm lighting.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    alt: 'A long table set with bud vases and folded linen',
  },
  {
    title: 'Corporate Gala',
    description: 'A refined setup focused on elegance, flow, and a memorable guest experience.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    alt: 'A banquet table with layered florals, glassware, and place settings',
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

/* ------------------------------------------------------------------------
 * PLACEHOLDER IMAGERY
 *
 * Every photograph on the site is stock, and the six below are the only stock
 * frames in use. They were each opened and checked against what they actually
 * depict — an earlier set had a bedroom filed under "Table Covers", a fruit
 * flatlay under "Fresh Flowers", and a kitchen under "Backdrop Rentals".
 *
 * If you add to this list, LOOK at the image first. Alt text has to describe
 * the frame that loads, not the product it is standing in for.
 *
 * All six should be replaced with real Feyizino photography before launch.
 * ---------------------------------------------------------------------- */
const photo = {
  couple: { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80', alt: 'A couple holding a bouquet in warm, low light' },
  banquet: { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=80', alt: 'Long banquet tables laid with linen, glassware, and centrepieces' },
  arch: { src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=80', alt: 'A floral ceremony backdrop framed by garlanded pillars' },
  chairs: { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80', alt: 'Two ceremony chairs dressed with florals on a lawn' },
  longTable: { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80', alt: 'A long table set with bud vases and folded linen' },
  tabletop: { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80', alt: 'A banquet table with layered florals, glassware, and place settings' },
};

const products = [
  { id: 'table-covers', name: 'Table Covers', description: 'Soft linen-inspired covers in ivory, champagne, and blush for a polished base layer.', category: 'Rental decor', price: '₦12,000 / piece', size: '90" x 156"', quality: 'Premium polyester with a linen hand', quantity: '60+ available', image: photo.banquet.src, alt: photo.banquet.alt },
  { id: 'fresh-flowers', name: 'Fresh Flowers', description: 'Garden-style florals, centerpieces, and statement bouquets for every table and entryway.', category: 'Floral styling', price: 'From ₦180,000 / arrangement', size: '10–12 stems', quality: 'Seasonally sourced premium blooms', quantity: 'Available for 30+ tables', image: photo.tabletop.src, alt: photo.tabletop.alt },
  { id: 'dining-tables', name: 'Dining Tables', description: 'Round and rectangular tables that suit intimate dinners and larger guest lists.', category: 'Furniture', price: '₦48,000 / table', size: '72" x 30"', quality: 'Sturdy wood-look rental tables', quantity: '20 units in stock', image: photo.longTable.src, alt: photo.longTable.alt },
  { id: 'chair-covers', name: 'Chair Covers', description: 'Elegant chair wraps and sash details that bring a finished look to each seat.', category: 'Seating', price: '₦4,500 / chair', size: 'Standard banquet fit', quality: 'Stretch satin in neutral shades', quantity: '120 pieces available', image: photo.chairs.src, alt: photo.chairs.alt },
  { id: 'lighting-pieces', name: 'Lighting Pieces', description: 'Candles, lanterns, and warm lighting accents that elevate the atmosphere after dark.', category: 'Ambience', price: '₦28,000 / unit', size: '15" height average', quality: 'Warm LED and candlelight options', quantity: '40 pieces ready', image: photo.couple.src, alt: photo.couple.alt },
  { id: 'backdrop-rentals', name: 'Backdrop Rentals', description: 'Statement arches and photo-worthy installations for ceremonies and receptions.', category: 'Installations', price: '₦220,000 / set', size: '10ft x 8ft', quality: 'Hand-finished details with soft drape', quantity: '10 sets available', image: photo.arch.src, alt: photo.arch.alt },
];

/**
 * Catalog categories for the "Rental Services" carousel. `tag` is the short
 * label that sits on the card image, mirroring the reference layout.
 */
const rentalCategories = [
  { name: 'Luxury Chairs', tag: 'Seating', detail: 'Chiavari, ghost, and upholstered dining chairs in gold, blush, and clear finishes.', image: photo.chairs },
  { name: 'Speciality Furniture', tag: 'Tables', detail: 'Round, rectangular, and cocktail tables, plus lounge sets for relaxed corners.', image: photo.longTable },
  { name: 'Linen Collections', tag: 'Table linen', detail: 'Covers, runners, napkins, and sashes in ivory, champagne, blush, and deep tones.', image: photo.banquet },
  { name: 'Lighting & Effects', tag: 'Ambience', detail: 'Candles, lanterns, uplighting, and warm washes that carry the room after dark.', image: photo.couple },
  { name: 'Florals & Backdrops', tag: 'Installations', detail: 'Statement arches, centerpieces, and photo-worthy installations built to your palette.', image: photo.arch },
  { name: 'Full Table Settings', tag: 'Tabletop', detail: 'Charger plates, glassware, and cutlery styled as one coordinated setting.', image: photo.tabletop },
];

const galleryImages = [
  photo.chairs,
  photo.arch,
  photo.longTable,
  photo.banquet,
  photo.tabletop,
  photo.couple,
];

/* ------------------------------------------------------------------------
 * PLACEHOLDER — the founder profile and the counters below are invented.
 * Replace every value in `ceo` and `aboutStats` with the real details before
 * this page goes live; the rest of the About copy only restates what the site
 * already says elsewhere and is safe as written.
 * ---------------------------------------------------------------------- */
const ceo = {
  name: 'Add founder name',
  role: 'Founder & Chief Executive Officer',
  // Leave empty until there is a real portrait. The photo slot falls back to
  // the logo monogram rather than borrowing a stock stranger's face.
  photo: '',
  bio: [
    'Add a short paragraph on how Feyizino Events started — what the founder was doing before, and the moment the business began.',
    'Add a second paragraph on how they work with clients: the planning approach, what they care about most, and what a couple or company can expect from the first meeting onward.',
  ],
  quote: 'Add a line the founder would actually say about the work.',
  focus: [
    'Event design direction',
    'Client and guest experience',
    'Vendor and venue partnerships',
  ],
};

const aboutStats = [
  { value: '10+', label: 'Years planning celebrations' },
  { value: '250+', label: 'Events delivered' },
  { value: '4', label: 'Cities served' },
  { value: '40+', label: 'Vendor partners' },
];

const aboutValues = [
  {
    title: 'Design with intent',
    detail: 'Every palette, table, and light is chosen to serve one clear idea rather than a collection of trends.',
  },
  {
    title: 'Calm coordination',
    detail: 'Timelines, vendors, and logistics are handled well before the day, so the celebration itself feels unhurried.',
  },
  {
    title: 'Honest budgeting',
    detail: 'Clear pricing and early trade-offs, so the spend lands where guests will actually notice it.',
  },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Works' },
  { id: 'services', label: 'Services' },
  { id: 'rentals', label: 'Rentals' },
];

/**
 * One line-art glyph per destination, drawn on a 24x24 grid. Stroked in
 * `currentColor` so a single colour rule covers the icon and its label.
 */
const navIcons = {
  home: 'M3 10.8 12 3.2l9 7.6M5.6 9.6V20.8h12.8V9.6',
  about: 'M12 12.4a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.6 20.4c1.4-3.4 4.2-5.2 7.4-5.2s6 1.8 7.4 5.2',
  portfolio: 'M4 5h16v14H4V5Zm0 10.6 4.5-4.5 4 4 3-3L20 16',
  services: 'M12 3.4 13.9 9l5.7 1.9-5.7 1.9L12 18.5l-1.9-5.7L4.4 10.9 10.1 9 12 3.4Z',
  rentals: 'M12 3.4 20.2 7.7v8.6L12 20.6 3.8 16.3V7.7L12 3.4Zm8.2 4.3L12 12 3.8 7.7M12 12v8.6',
  contact: 'M4.6 6.6h14.8v12.8H4.6V6.6Zm4-3v4m6.8-4v4M4.6 11h14.8',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
};

function NavIcon({ name }) {
  return e('svg', {
    className: 'nav-icon',
    viewBox: '0 0 24 24',
    width: '20',
    height: '20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
  }, e('path', { d: navIcons[name] }));
}

const pageIds = ['home', 'about', 'portfolio', 'services', 'rentals', 'contact'];

// Paths, not hashes. Netlify rewrites every request to index.html (see _redirects),
// so the History API can own the URL and /rentals stays /rentals.
function pageHref(id) {
  return id === 'home' ? '/' : '/' + id;
}

// The catalog used to live at /products. Anything already linking there —
// a bookmark, a search result, a post — should still land on the catalog
// rather than being dropped back on the home page.
const legacyPaths = { products: 'rentals' };

function pathToPage(pathname) {
  const slug = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const resolved = legacyPaths[slug] || slug;
  return pageIds.includes(resolved) ? resolved : 'home';
}

function getCurrentPage() {
  return pathToPage(window.location.pathname);
}

function LogoMark({ size = 'sm' }) {
  return e('span', { className: 'logo-mark logo-mark-' + size },
    e('img', { src: '/logo-mark.jpg', alt: 'Feyizino Events' })
  );
}

function Brand({ size = 'sm' }) {
  return e('a', { className: 'brand', href: pageHref('home') },
    e(LogoMark, { size: size }),
    e('span', { className: 'brand-text' },
      e('span', { className: 'brand-name' }, 'Feyizino'),
      e('span', { className: 'brand-sub' }, 'Event & Rentals')
    )
  );
}

function prefersReducedMotion() {
  return typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ------------------------------------------------------------------------
 * WhatsApp
 * ---------------------------------------------------------------------- */

/** wa.me link, optionally pre-filled with a message. */
function whatsappHref(message) {
  const base = 'https://wa.me/' + contact.whatsapp;
  return message ? base + '?text=' + encodeURIComponent(message) : base;
}

function WhatsAppIcon() {
  return e('svg', {
    viewBox: '0 0 24 24',
    width: '22',
    height: '22',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
  }, e('path', {
    d: 'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24Zm-4.5 4.4c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.19 3.34 5.3 4.56 2.59 1.02 3.12.82 3.68.77.56-.05 1.81-.74 2.07-1.46.26-.72.26-1.33.18-1.46-.08-.13-.29-.21-.6-.36-.31-.16-1.81-.9-2.09-1-.28-.1-.49-.16-.7.16-.2.31-.79 1-.97 1.2-.18.21-.36.24-.66.08-.31-.16-1.29-.48-2.46-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.6Z',
  }));
}

function CartIcon() {
  return e('svg', {
    viewBox: '0 0 24 24',
    width: '22',
    height: '22',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
  },
    e('path', { d: 'M3 4h2.2l2.1 10.4a1.8 1.8 0 0 0 1.8 1.4h7.9a1.8 1.8 0 0 0 1.8-1.4L20.5 7H6' }),
    e('circle', { cx: '9.5', cy: '19.5', r: '1.4' }),
    e('circle', { cx: '17', cy: '19.5', r: '1.4' })
  );
}

/* ------------------------------------------------------------------------
 * Quote basket
 *
 * Rental pricing depends on dates, quantities, and logistics, so this is a
 * request basket rather than a checkout: it collects items and hands them to
 * WhatsApp as a written enquiry. Nothing is charged and no money total is shown.
 * ---------------------------------------------------------------------- */

const CART_KEY = 'feyizino-cart';

const CartContext = React.createContext(null);

function useCart() {
  return React.useContext(CartContext);
}

function readStoredCart() {
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    // Anything hand-edited or left by an older build is discarded rather than
    // trusted, so a bad entry can never break the drawer.
    return Array.isArray(parsed)
      ? parsed.filter((item) => item && typeof item.id === 'string' && Number(item.qty) > 0)
      : [];
  } catch (error) {
    return [];
  }
}

function CartProvider({ children }) {
  const [items, setItems] = React.useState(readStoredCart);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (error) {
      /* Private browsing and full quotas are not worth failing a render over. */
    }
  }, [items]);

  const add = React.useCallback((product) => {
    setItems((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return prev.concat([{ id: product.id, name: product.name, price: product.price, qty: 1 }]);
    });
    setOpen(true);
  }, []);

  const setQty = React.useCallback((id, qty) => {
    setItems((prev) => (qty <= 0
      ? prev.filter((item) => item.id !== id)
      : prev.map((item) => (item.id === id ? { ...item, qty: qty } : item))));
  }, []);

  const remove = React.useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clear = React.useCallback(() => setItems([]), []);

  const count = items.reduce((total, item) => total + item.qty, 0);

  const value = { items, count, add, setQty, remove, clear, open, setOpen };
  return e(CartContext.Provider, { value: value }, children);
}

/** The enquiry text handed to WhatsApp when the basket is submitted. */
function buildOrderMessage(items) {
  const lines = items.map((item, i) => `${i + 1}. ${item.name} — qty ${item.qty} (${item.price})`);
  return [
    'Hello Feyizino Events, I would like to request the following rental items:',
    '',
    lines.join('\n'),
    '',
    'Please confirm availability and pricing for my event date.',
  ].join('\n');
}

function CartFab() {
  const cart = useCart();
  return e('button', {
    type: 'button',
    className: 'fab fab-cart',
    'aria-label': `Open rental basket, ${cart.count} item${cart.count === 1 ? '' : 's'}`,
    'aria-expanded': cart.open ? 'true' : 'false',
    onClick: () => cart.setOpen(true),
  },
    e(CartIcon),
    e('span', { className: 'fab-count' }, cart.count)
  );
}

function WhatsAppFab() {
  return e('a', {
    className: 'fab fab-whatsapp',
    href: whatsappHref('Hello Feyizino Events, I would like to enquire about your event services.'),
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Chat with us on WhatsApp',
  }, e(WhatsAppIcon));
}

function CartDrawer() {
  const cart = useCart();
  // 'submit' and 'clear' each raise their own confirm step, so neither action
  // can be triggered by a single stray tap.
  const [confirming, setConfirming] = React.useState('');
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    if (!cart.open) return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') cart.setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [cart.open, cart]);

  // Reopening starts clean rather than resuming a half-finished confirmation.
  React.useEffect(() => {
    if (!cart.open) {
      setConfirming('');
      setSent(false);
    }
  }, [cart.open]);

  if (!cart.open) return null;

  const submitOrder = () => {
    window.open(whatsappHref(buildOrderMessage(cart.items)), '_blank', 'noopener,noreferrer');
    setConfirming('');
    setSent(true);
  };

  const confirmBar = (question, onYes) => e('div', { className: 'cart-confirm' },
    e('p', null, question),
    e('div', { className: 'cart-confirm-actions' },
      e('button', { type: 'button', className: 'btn btn-primary btn-sm', onClick: onYes }, 'Yes'),
      e('button', { type: 'button', className: 'btn btn-ghost btn-sm', onClick: () => setConfirming('') }, 'No')
    )
  );

  return e('div', { className: 'cart-layer' },
    e('div', { className: 'cart-backdrop', onClick: () => cart.setOpen(false) }),
    e('aside', {
      className: 'cart-drawer',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Rental request basket',
    },
      e('div', { className: 'cart-head' },
        e('h3', null, 'Your rental request'),
        e('button', {
          type: 'button',
          className: 'cart-close',
          'aria-label': 'Close basket',
          onClick: () => cart.setOpen(false),
        }, e(NavIcon, { name: 'close' }))
      ),

      cart.items.length === 0
        ? e('div', { className: 'cart-empty' },
            e('p', null, sent ? 'Request sent. We will confirm availability shortly.' : 'Your basket is empty.'),
            e('a', { className: 'btn btn-primary', href: pageHref('rentals'), onClick: () => cart.setOpen(false) }, 'Browse the catalog')
          )
        : e(React.Fragment, null,
            e('ul', { className: 'cart-list' },
              cart.items.map((item) => e('li', { key: item.id, className: 'cart-item' },
                e('div', { className: 'cart-item-copy' },
                  e('strong', null, item.name),
                  e('span', null, item.price)
                ),
                e('div', { className: 'cart-qty' },
                  e('button', {
                    type: 'button',
                    'aria-label': 'Decrease quantity of ' + item.name,
                    onClick: () => cart.setQty(item.id, item.qty - 1),
                  }, '−'),
                  e('span', { 'aria-label': 'Quantity' }, item.qty),
                  e('button', {
                    type: 'button',
                    'aria-label': 'Increase quantity of ' + item.name,
                    onClick: () => cart.setQty(item.id, item.qty + 1),
                  }, '+')
                ),
                e('button', {
                  type: 'button',
                  className: 'cart-remove',
                  'aria-label': 'Remove ' + item.name,
                  onClick: () => cart.remove(item.id),
                }, '×')
              ))
            ),
            e('div', { className: 'cart-total' },
              e('span', null, 'Total items'),
              e('strong', null, cart.count)
            ),
            confirming === 'submit'
              ? confirmBar('Send this request on WhatsApp?', submitOrder)
              : null,
            confirming === 'clear'
              ? confirmBar('Remove everything from the basket?', () => { cart.clear(); setConfirming(''); })
              : null,
            confirming === ''
              ? e('div', { className: 'cart-actions' },
                  e('button', {
                    type: 'button',
                    className: 'btn btn-primary',
                    onClick: () => setConfirming('submit'),
                  }, 'Request order'),
                  e('button', {
                    type: 'button',
                    className: 'btn btn-ghost',
                    onClick: () => setConfirming('clear'),
                  }, 'Clear')
                )
              : null,
            e('p', { className: 'cart-note' }, 'Nothing is charged here — we confirm availability and pricing before anything is booked.')
          )
    )
  );
}

/* ------------------------------------------------------------------------
 * Shared section pieces
 * ---------------------------------------------------------------------- */

/** Section title on the left, "view all" link on the right. */
function SectionBar({ eyebrow, title, href, linkLabel }) {
  return e('div', { className: 'section-bar' },
    e('div', null,
      eyebrow ? e('p', { className: 'eyebrow' }, eyebrow) : null,
      e('h2', null, title)
    ),
    href ? e('a', { className: 'section-link', href: href }, linkLabel, e('span', { 'aria-hidden': 'true' }, '›')) : null
  );
}

/**
 * Horizontal category rail. Scroll-snapping keeps it usable as a plain swipe on
 * touch, and the arrows page it by one card for pointer users.
 */
function CategoryCarousel() {
  const trackRef = React.useRef(null);

  const page = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.category-card');
    // Falls back to most of the visible width when the rail is empty.
    const step = card ? card.getBoundingClientRect().width + 22 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return e('div', { className: 'carousel' },
    e('div', { className: 'carousel-track', ref: trackRef },
      rentalCategories.map((category) => e('article', { key: category.name, className: 'category-card' },
        e('div', { className: 'category-media' },
          e('img', { src: category.image.src, alt: category.image.alt, loading: 'lazy' }),
          e('span', { className: 'category-tag' }, category.tag)
        ),
        e('div', { className: 'category-body' },
          e('h3', null, category.name),
          e('p', null, category.detail),
          e('a', { className: 'category-link', href: pageHref('rentals') }, 'Visit section', e('span', { 'aria-hidden': 'true' }, '›'))
        )
      ))
    ),
    e('div', { className: 'carousel-controls' },
      e('button', {
        type: 'button',
        className: 'carousel-arrow',
        'aria-label': 'Previous categories',
        onClick: () => page(-1),
      }, '‹'),
      e('button', {
        type: 'button',
        className: 'carousel-arrow',
        'aria-label': 'Next categories',
        onClick: () => page(1),
      }, '›')
    )
  );
}

function GalleryGrid({ limit }) {
  const shown = limit ? galleryImages.slice(0, limit) : galleryImages;
  return e('div', { className: 'gallery-grid' },
    shown.map((image, i) => e('figure', { key: image.src + i, className: 'gallery-tile' },
      e('img', { src: image.src, alt: image.alt, loading: 'lazy' })
    ))
  );
}

function HeroSlider() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [failed, setFailed] = React.useState({});
  const videoRefs = React.useRef({});
  const count = heroSlides.length;

  const go = React.useCallback((next) => setIndex(((next % count) + count) % count), [count]);

  const isPlayableVideo = (slide, i) => slide.type === 'video' && !failed[i];

  // Advance on a timer. Reduced-motion visitors keep whichever slide they are on.
  React.useEffect(() => {
    if (paused || prefersReducedMotion()) return undefined;
    const slide = heroSlides[index];
    // A video that failed to load is showing its poster, so it holds for as
    // long as any other still rather than for the clip's length.
    const delay = isPlayableVideo(slide, index) ? slide.duration
      : (slide.type === 'video' ? 6500 : slide.duration);
    const timer = window.setTimeout(() => go(index + 1), delay);
    return () => window.clearTimeout(timer);
  }, [index, paused, failed, go]);

  // Only the visible video should ever be playing.
  React.useEffect(() => {
    Object.keys(videoRefs.current).forEach((key) => {
      const node = videoRefs.current[key];
      if (!node) return;
      if (Number(key) === index && !paused && !prefersReducedMotion()) {
        const attempt = node.play();
        if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
      } else {
        node.pause();
      }
    });
  }, [index, paused, failed]);

  const renderMedia = (slide, i) => {
    if (isPlayableVideo(slide, i)) {
      return e('video', {
        ref: (node) => {
          videoRefs.current[i] = node;
          // React does not reliably set `muted` as a property, and autoplay
          // is blocked without it.
          if (node) node.muted = true;
        },
        src: slide.src,
        poster: slide.poster,
        loop: true,
        playsInline: true,
        preload: i === 0 ? 'auto' : 'metadata',
        'aria-label': slide.alt,
        onError: () => setFailed((prev) => ({ ...prev, [i]: true })),
      });
    }
    return e('img', {
      src: slide.type === 'video' ? slide.poster : slide.src,
      alt: slide.alt,
      loading: i === 0 ? 'eager' : 'lazy',
    });
  };

  return e('div', {
    className: 'hero-slider',
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  },
    e('div', { className: 'hero-slides' },
      heroSlides.map((slide, i) => e('div', {
        key: i,
        className: 'hero-slide' + (i === index ? ' is-active' : ''),
        'aria-hidden': i === index ? undefined : 'true',
      }, renderMedia(slide, i)))
    ),
    e('div', { className: 'hero-scrim' }),
    e('div', { className: 'hero-slider-controls' },
      e('button', {
        type: 'button',
        className: 'slider-arrow',
        onClick: () => go(index - 1),
        'aria-label': 'Previous slide',
      }, '‹'),
      e('div', { className: 'slider-dots', role: 'tablist', 'aria-label': 'Banner slides' },
        heroSlides.map((slide, i) => e('button', {
          key: i,
          type: 'button',
          role: 'tab',
          className: 'slider-dot' + (i === index ? ' is-active' : ''),
          'aria-selected': i === index ? 'true' : 'false',
          'aria-label': 'Slide ' + (i + 1),
          onClick: () => go(i),
        }))
      ),
      e('button', {
        type: 'button',
        className: 'slider-arrow',
        onClick: () => go(index + 1),
        'aria-label': 'Next slide',
      }, '›')
    )
  );
}

function HomePage() {
  return e('div', { className: 'page-shell' },
    e('header', { className: 'hero' },
      e(HeroSlider),
      e('section', { className: 'hero-content' },
        e('div', { className: 'hero-copy' },
          e('p', { className: 'eyebrow' }, 'Sagamu · Lagos · Abuja'),
          e('h1', null, 'Transforming every celebration into a ', e('span', { className: 'gold-text' }, 'signature experience'), '.'),
          e('p', { className: 'lead' }, 'Feyizino Events delivers polished event design, seamless coordination, and premium decor for weddings, corporate launches, and private gatherings across Nigeria.'),
          e('div', { className: 'hero-actions' },
            e('a', {
              className: 'btn btn-whatsapp',
              href: whatsappHref('Hello Feyizino Events, I would like to plan an event with you.'),
              target: '_blank',
              rel: 'noopener noreferrer',
            }, e(WhatsAppIcon), 'Send us a DM on WhatsApp'),
            e('a', { className: 'btn btn-secondary', href: pageHref('rentals') }, 'View our rental catalog')
          ),
          e('div', { className: 'hero-details' },
            e('span', null, 'Based in Sagamu, Ogun'),
            e('span', null, 'Serving Lagos, Abuja, and beyond')
          )
        )
      )
    ),
    e('main', null,
      e('section', { className: 'section intro' },
        e('div', null,
          e('p', { className: 'eyebrow' }, 'About the planner'),
          e('h2', null, 'The kind of detail that makes a celebration feel effortless.'),
          e('p', null, 'Feyizino Events brings a calm, refined approach to planning with a strong eye for styling, budgeting, and guest experience.'),
          e('a', { className: 'btn btn-secondary', href: pageHref('about'), style: { marginTop: '8px' } }, 'About us and our CEO')
        ),
        e('div', { className: 'intro-panels' },
          e('div', { className: 'panel' },
            e('div', { className: 'hero-card-head' },
              e(LogoMark, { size: 'md' }),
              e('p', { className: 'eyebrow', style: { margin: 0 } }, 'Signature service')
            ),
            e('h3', null, 'Full-service styling and coordination'),
            e('ul', null,
              e('li', null, 'Venue styling and decor'),
              e('li', null, 'Guest experience planning'),
              e('li', null, 'Custom rentals and luxury details')
            ),
            e('div', { className: 'pill' }, 'Starting at ₦2,500,000')
          ),
          e('div', { className: 'panel' },
            e('h3', null, 'Why clients choose us'),
            e('ul', null,
              e('li', null, 'Creative concepts tailored to your story'),
              e('li', null, 'Clear pricing and thoughtful budget planning'),
              e('li', null, 'Quality rental pieces and trusted vendor support')
            )
          )
        )
      ),
      e('section', { className: 'section' },
        e(SectionBar, {
          eyebrow: 'Rental services',
          title: 'A wide variety of luxury pieces for your next event.',
          href: pageHref('rentals'),
          linkLabel: 'View more',
        }),
        e(CategoryCarousel)
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
            e('img', { src: work.image, alt: work.alt }),
            e('div', { className: 'card-body' },
              e('h3', null, work.title),
              e('p', null, work.description)
            )
          ))
        )
      ),
      e('section', { className: 'section' },
        e(SectionBar, {
          eyebrow: 'Gallery',
          title: 'Browse gallery',
          href: pageHref('portfolio'),
          linkLabel: 'See more',
        }),
        e(GalleryGrid, { limit: 6 })
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
          e('p', { className: 'eyebrow' }, 'Rentals preview'),
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

/* The portrait falls back to the logo monogram whenever `ceo.photo` is empty
   or fails to load, so the block never renders a broken image. */
function CeoPortrait() {
  const [broken, setBroken] = React.useState(false);
  const showPhoto = Boolean(ceo.photo) && !broken;
  return e('div', { className: 'ceo-portrait' },
    showPhoto
      ? e('img', { src: ceo.photo, alt: ceo.name, onError: () => setBroken(true) })
      : e('div', { className: 'ceo-portrait-fallback' },
          e(LogoMark, { size: 'md' }),
          e('span', null, 'Portrait coming soon')
        )
  );
}

function AboutPage() {
  return e('div', { className: 'page-shell' },
    e('section', { className: 'section' },
      e('div', { className: 'section-heading' },
        e('p', { className: 'eyebrow' }, 'About us'),
        e('h2', null, 'An event studio built on ', e('span', { className: 'gold-text' }, 'detail'), ', not noise.'),
        e('p', { className: 'lead' }, 'Feyizino Events plans, styles, and equips celebrations across Nigeria. We work from Sagamu, Ogun State, and travel to Lagos, Abuja, and beyond for weddings, corporate launches, and private gatherings.')
      ),
      e('div', { className: 'about-story' },
        e('div', { className: 'panel' },
          e('h3', null, 'What we do'),
          e('p', null, 'Full-service planning and design, venue styling, and premium decor rentals — from the first concept through to the last table setting on the day.'),
          e('p', null, 'Because we own much of what we style with, the look you agree on is the look that arrives.')
        ),
        e('div', { className: 'panel' },
          e('h3', null, 'How we work'),
          e('p', null, 'We start with the shape of your day and the people in the room, then build the design and the budget around it together.'),
          e('p', null, 'One point of contact, a clear timeline, and vendors we have worked with before.')
        )
      ),
      e('div', { className: 'stat-grid' },
        aboutStats.map((stat) => e('div', { key: stat.label, className: 'stat-card' },
          e('strong', null, stat.value),
          e('span', null, stat.label)
        ))
      )
    ),
    e('div', { className: 'section-divider' }, e('span', null)),
    e('section', { className: 'section' },
      e('div', { className: 'section-heading' },
        e('p', { className: 'eyebrow' }, 'Leadership'),
        e('h2', null, 'Meet our CEO.')
      ),
      e('div', { className: 'ceo-layout' },
        e(CeoPortrait),
        e('div', { className: 'ceo-copy' },
          e('h3', { className: 'ceo-name' }, ceo.name),
          e('p', { className: 'ceo-role' }, ceo.role),
          ceo.bio.map((paragraph, i) => e('p', { key: i }, paragraph)),
          e('blockquote', { className: 'ceo-quote' }, ceo.quote),
          e('div', { className: 'ceo-focus' },
            e('h4', null, 'Leads on'),
            e('ul', null, ceo.focus.map((item) => e('li', { key: item }, item)))
          ),
          e('div', { className: 'ceo-actions' },
            e('a', { className: 'btn btn-primary', href: pageHref('contact') }, 'Plan with us'),
            e('a', { className: 'btn btn-secondary', href: contact.emailHref }, 'Email the team')
          )
        )
      )
    ),
    e('div', { className: 'section-divider' }, e('span', null)),
    e('section', { className: 'section' },
      e('div', { className: 'section-heading' },
        e('p', { className: 'eyebrow' }, 'What guides us' ),
        e('h2', null, 'Three things we will not compromise on.')
      ),
      e('div', { className: 'card-grid' },
        aboutValues.map((value) => e('article', { key: value.title, className: 'card product-card' },
          e('h3', null, value.title),
          e('p', null, value.detail)
        ))
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
          e('img', { src: item.image, alt: item.alt }),
          e('div', { className: 'card-body' },
            e('h3', null, item.title),
            e('p', null, item.description)
          )
        ))
      )
    ),
    e('div', { className: 'section-divider' }, e('span', null)),
    e('section', { className: 'section' },
      e(SectionBar, { eyebrow: 'Gallery', title: 'Browse gallery' }),
      e(GalleryGrid)
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

function RentalsPage() {
  const cart = useCart();
  const inBasket = (id) => cart.items.some((item) => item.id === id);

  return e('div', { className: 'page-shell' },
    e('section', { className: 'section' },
      e('p', { className: 'eyebrow' }, 'Rentals catalog'),
      e('h2', null, 'Decor, rentals, and styling pieces curated for every celebration.'),
      e('p', { className: 'lead' }, 'From table covers and flowers to tables, chair covers, and lighting, every item is chosen to create a cohesive look. Add what you need to your request and we will confirm availability for your date.'),
      e('div', { className: 'card-grid products-grid', style: { marginTop: '24px' } },
        products.map((item) => e('article', { key: item.id, className: 'card product-card' },
          item.image ? e('img', { src: item.image, alt: item.alt || item.name }) : null,
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
            ),
            e('button', {
              type: 'button',
              className: 'btn btn-primary btn-block',
              onClick: () => cart.add(item),
            }, inBasket(item.id) ? 'Add another' : 'Add to request')
          )
        ))
      )
    ),
    e('div', { className: 'section-divider' }, e('span', null)),
    e('section', { className: 'section' },
      e(SectionBar, {
        eyebrow: 'Browse by category',
        title: 'Explore the collections.',
      }),
      e(CategoryCarousel)
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
          e('span', null, e('a', { href: contact.emailHref }, contact.email)),
          e('span', null, e('a', { href: contact.phoneHref }, contact.phone)),
          e('span', null, e('a', { href: contact.officeHref }, contact.office + ' (office)')),
          e('span', null, e('a', { href: contact.instagramHref, target: '_blank', rel: 'noopener noreferrer' }, 'Instagram ' + contact.instagram)),
          e('span', null, contact.address),
          e('span', null, contact.addressNote),
          e('span', null, contact.serving)
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
            e('span', { className: 'brand-sub' }, 'Event & Rentals')
          )
        ),
        e('p', null, 'Elegant event planning, styling, and premium decor rentals for weddings, corporate launches, and private celebrations across Nigeria.')
      ),
      e('div', null,
        e('h4', null, 'Explore'),
        e('div', { className: 'footer-links' },
          navItems.map((item) => e('a', { key: item.id, href: pageHref(item.id) }, item.label)),
          e('a', { href: pageHref('contact') }, 'Book your event')
        )
      ),
      e('div', null,
        e('h4', null, 'Get in touch'),
        e('div', { className: 'footer-links' },
          e('a', { href: contact.emailHref }, contact.email),
          e('a', { href: contact.phoneHref }, contact.phone),
          e('a', { href: contact.officeHref }, contact.office + ' (office)'),
          e('a', { href: whatsappHref(''), target: '_blank', rel: 'noopener noreferrer' }, 'WhatsApp us'),
          e('a', { href: contact.instagramHref, target: '_blank', rel: 'noopener noreferrer' }, contact.instagram),
          e('span', null, contact.address),
          e('span', null, contact.addressNote)
        )
      )
    ),
    e('div', { className: 'footer-bottom' },
      e('span', null, '© ' + new Date().getFullYear() + ' ' + contact.name + '. All rights reserved.'),
      e('span', null, 'Sagamu · Abeokuta · Lagos · Abuja')
    )
  );
}

function App() {
  const [page, setPage] = React.useState(getCurrentPage);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handlePopState = () => {
      setPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Escape closes the drawer, and so does growing past the breakpoint — a menu
  // left open while the layout switches back to the inline nav would otherwise
  // hang over the page with no visible way to dismiss it.
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const wide = window.matchMedia('(min-width: 821px)');
    const handleWide = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    wide.addEventListener('change', handleWide);
    return () => {
      window.removeEventListener('keydown', handleKey);
      wide.removeEventListener('change', handleWide);
    };
  }, [menuOpen]);

  // One delegated handler lets every in-app link stay a real <a href="/page">,
  // so it is crawlable and opens in a new tab, yet routes without a reload.
  const handleNavClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a');
    if (!link || link.target || link.hasAttribute('download')) return;
    // Leaves mailto:, tel:, and any outbound link to the browser.
    if (link.origin !== window.location.origin) return;

    // Any in-app link ends the visit to the drawer, including a tap on the
    // page the visitor is already on.
    setMenuOpen(false);

    const next = pathToPage(link.pathname);
    if (link.pathname.replace(/^\/+|\/+$/g, '') && next === 'home') return;

    event.preventDefault();
    if (window.location.pathname !== pageHref(next)) {
      window.history.pushState({}, '', pageHref(next));
    }
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = {
    home: e(HomePage),
    about: e(AboutPage),
    portfolio: e(PortfolioPage),
    services: e(ServicesPage),
    rentals: e(RentalsPage),
    contact: e(ContactPage),
  };

  const drawerItems = navItems.concat([{ id: 'contact', label: 'Book your event' }]);

  return e(CartProvider, null, e('div', { onClick: handleNavClick },
    e('nav', { className: 'topbar topbar-inline' },
      e(Brand),
      e('div', { className: 'nav-links' },
        navItems.map((item) => e('a', {
          key: item.id,
          href: pageHref(item.id),
          className: page === item.id ? 'is-active' : undefined,
        }, item.label)),
        e('a', { href: pageHref('contact'), className: 'nav-cta' }, 'Book')
      ),
      // Phones get the icon toggle instead of the inline links; CSS decides
      // which of the two is on screen.
      e('button', {
        type: 'button',
        className: 'nav-toggle' + (menuOpen ? ' is-open' : ''),
        'aria-label': menuOpen ? 'Close menu' : 'Open menu',
        'aria-expanded': menuOpen ? 'true' : 'false',
        'aria-controls': 'nav-drawer',
        onClick: () => setMenuOpen((open) => !open),
      }, e(NavIcon, { name: menuOpen ? 'close' : 'menu' })),
      e('div', {
        id: 'nav-drawer',
        className: 'nav-drawer' + (menuOpen ? ' is-open' : ''),
        hidden: !menuOpen,
      },
        drawerItems.map((item) => e('a', {
          key: item.id,
          href: pageHref(item.id),
          className: 'nav-drawer-item' + (page === item.id ? ' is-active' : ''),
        },
          e(NavIcon, { name: item.id }),
          e('span', null, item.label)
        ))
      )
    ),
    pages[page] || pages.home,
    e(Footer),
    e('div', { className: 'fab-stack' },
      e(WhatsAppFab),
      e(CartFab)
    ),
    e(CartDrawer)
  ));
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
