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
  serving: 'Serving Ibadan, Osogbo, Sagamu, Ijebu Ode, Abeokuta, Lagos, and Osun',
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
    poster: '/media/works/candelabra-reception.jpg',
    alt: 'A reception hall with tall floral centrepieces, gold chiavari chairs, and lights suspended overhead',
    // Matches the clip length, so it advances on a clean loop point.
    duration: 10000,
  },
  {
    type: 'image',
    src: '/media/works/ceremony-aisle.jpg',
    alt: 'An outdoor ceremony aisle with a blush floral arch, white runner, and a welcome sign',
    duration: 6500,
  },
  {
    type: 'image',
    src: '/media/works/gobo-hall.jpg',
    alt: 'A darkened hall with patterned light projected across the floor and chandeliers overhead',
    duration: 6500,
  },
  {
    type: 'image',
    src: '/media/works/arch-high-table.jpg',
    alt: 'A high table set between twin arched backdrops hung with chandeliers, on a gold carpet',
    duration: 6500,
  },
];

/* ------------------------------------------------------------------------
 * OUR WORK — real Feyizino events
 *
 * The client's own photographs, from the drop in assets/our works/
 * (gitignored). Web copies live in media/works/, resized to 1400px; the
 * phone screenshots among them were carrying black letterbox bars, which
 * are trimmed off in the copies that ship.
 *
 * Titles describe the event and its palette rather than naming the couple.
 * Some of the signage in frame does carry client names, but that is their
 * decision to publish, not ours — if Feyizino wants the events credited by
 * name, the titles below are the place to do it.
 * ---------------------------------------------------------------------- */
const featuredWorks = [
  {
    title: 'Blush Garden Ceremony',
    description: 'An outdoor ceremony on the lawn — a blush and ivory floral arch over a white aisle, with a hand-lettered welcome sign at the entrance.',
    image: '/media/works/ceremony-aisle.jpg',
    alt: 'An outdoor ceremony aisle with a blush floral arch, white runner, and a welcome sign',
  },
  {
    title: 'Candlelit Reception',
    description: 'Tall floral centrepieces, gold chiavari seating, and a suspended installation of lights and glass over the whole room.',
    image: '/media/works/candelabra-reception.jpg',
    alt: 'A reception hall with tall floral centrepieces, gold chiavari chairs, and lights suspended overhead',
  },
  {
    title: 'Milestone Birthday',
    description: 'A balloon numeral centrepiece, printed standees, and a patterned lit dance floor under chandeliers.',
    image: '/media/works/dance-floor.jpg',
    alt: 'A birthday reception with balloon numerals, chandeliers, and a patterned lit dance floor',
  },
];

/* Decor and rentals only — Feyizino does not plan or coordinate events, so
   nothing here should offer to run the day. */
const services = [
  { title: 'Decor & design', description: 'Complete decor direction with a tailored aesthetic, styled and installed on the day.' },
  { title: 'Styling & florals', description: 'Thoughtful details, florals, and immersive atmosphere across the room.' },
  { title: 'Decor rentals', description: 'Premium pieces from our own catalog, at a level that suits your budget.' },
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
    role: 'Corporate client, Ibadan',
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

/* ------------------------------------------------------------------------
 * COLOURWAYS — real stock, photographed on site
 *
 * Unlike `photo` above, everything here is Feyizino's own inventory. The
 * source frames are the WhatsApp drop in assets/ (gitignored, full
 * resolution); the copies under media/rentals/ are resized to 900px and are
 * what ships.
 *
 * `hex` is the chip shown in the swatch row. Each one was read off the
 * photograph it sits beside — sampling the frame automatically kept picking
 * the branded backdrop behind a table, or the shadow between two blooms,
 * rather than the product. If you add a colour, set its hex by looking at
 * the fabric or the petals, and check it against the photo afterwards.
 * ---------------------------------------------------------------------- */
const tableCoverColors = [
  { name: 'White', hex: '#d0d9dc' },
  { name: 'White Damask', hex: '#dce1eb' },
  { name: 'Champagne', hex: '#e0e0d7' },
  { name: 'Antique Gold', hex: '#d7b77f' },
  { name: 'Taupe', hex: '#c6a077' },
  { name: 'Blush', hex: '#efa6b4' },
  { name: 'Dusty Rose', hex: '#e8aaaa' },
  { name: 'Fuchsia', hex: '#fd5991' },
  { name: 'Red', hex: '#ca445f' },
  { name: 'Apricot', hex: '#eab06f' },
  { name: 'Amber', hex: '#d29847' },
  { name: 'Marigold', hex: '#ebcb67' },
  { name: 'Yellow', hex: '#e1cb2e' },
  { name: 'Olive', hex: '#a3b661' },
  { name: 'Sage', hex: '#8bbca8' },
  { name: 'Emerald', hex: '#5aa88c' },
  { name: 'Sea Green', hex: '#62b3a8' },
  { name: 'Teal', hex: '#2f8f80' },
  { name: 'Teal Blue', hex: '#2b87a4' },
  { name: 'Powder Blue', hex: '#cfe3e0' },
  { name: 'Cornflower Blue', hex: '#6fb3f9' },
  { name: 'Royal Blue', hex: '#035fea' },
  { name: 'Lilac', hex: '#e1bef2' },
  { name: 'Orchid', hex: '#d575d8' },
  { name: 'Black', hex: '#2c2c30' },
];

const flowerColors = [
  { name: 'White', hex: '#f2efe8' },
  { name: 'Ivory', hex: '#ece0cd' },
  { name: 'Champagne', hex: '#e6c9a8' },
  { name: 'Blush', hex: '#f4b9bd' },
  { name: 'Pink', hex: '#e87ba6' },
  { name: 'Dusty Rose', hex: '#c69099' },
  { name: 'Fuchsia', hex: '#d5187a' },
  { name: 'Red', hex: '#b81f2e' },
  { name: 'Coral', hex: '#e2724f' },
  { name: 'Terracotta', hex: '#c2643c' },
  { name: 'Orange', hex: '#e2711d' },
  { name: 'Apricot', hex: '#f0a765' },
  { name: 'Mustard', hex: '#e0a93a' },
  { name: 'Olive', hex: '#9aa04a' },
  { name: 'Green', hex: '#4f9e3f' },
  { name: 'Dusty Blue', hex: '#93a8b4' },
  { name: 'Sky Blue', hex: '#4fa8d8' },
  { name: 'Royal Blue', hex: '#2340c0' },
  { name: 'Lilac', hex: '#b192cf' },
  { name: 'Purple', hex: '#8b2fb5' },
  { name: 'Silver', hex: '#9a9a96' },
  { name: 'Black', hex: '#2a2a2e' },
  { name: 'Dried Naturals', hex: '#d9b98a' },
];

function colorSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/** Fills in the slug and image path so each colour is declared once, by name. */
function colorway(folder, subject) {
  return (color) => ({
    name: color.name,
    hex: color.hex,
    slug: colorSlug(color.name),
    image: '/media/rentals/' + folder + '/' + colorSlug(color.name) + '.jpg',
    alt: color.name + ' ' + subject,
  });
}

/* ------------------------------------------------------------------------
 * THE CATALOG
 *
 * These are the categories Feyizino actually rents. Two of them — table
 * covers and flowers — have been photographed and priced; the rest are
 * listed with a placeholder tile and "Price on request" until their photos
 * and rates come in.
 *
 * Do not invent a price, a size, or a stock count to fill a gap. A card
 * renders only the `meta` rows it is given, so leaving one out is fine.
 * ---------------------------------------------------------------------- */
const products = [
  {
    id: 'table-covers',
    name: 'Table Covers',
    category: 'Table linen',
    description: 'Full-drop covers for round banquet tables, in a satin finish with a few damask weaves.',
    price: '₦1,000 each',
    colors: tableCoverColors.map(colorway('table-covers', 'table cover draped over a round banquet table')),
    // The swatch row runs pale to dark so the range reads as a chart. That
    // puts white first, which is the dullest frame to open on, hence the
    // separate opening colour.
    defaultColor: 'Fuchsia',
    meta: { Colours: '25 available', Fit: 'Round banquet, full drop' },
  },
  {
    id: 'flowers',
    name: 'Flowers',
    category: 'Florals',
    description: 'Silk blooms, fillers, and foliage sold by the strand or the bunch, for centrepieces, garlands, and installations.',
    price: '₦250 – ₦600 per strand / bunch',
    colors: flowerColors.map(colorway('flowers', 'silk flowers')),
    defaultColor: 'Pink',
    meta: { Colours: '23 available', Sold: 'By the strand or bunch' },
  },
  {
    id: 'centre-pieces',
    name: 'Centre Pieces',
    category: 'Florals',
    description: 'Table centrepieces built to your palette, from low arrangements to raised stands.',
  },
  {
    id: 'iron-vases',
    name: 'Iron Vases',
    category: 'Decor',
    description: 'Metal vases and stands for florals, at a range of heights.',
  },
  {
    id: 'vip-tables',
    name: 'VIP Tables',
    category: 'Tables',
    description: 'Feature tables for the couple, the high table, and reserved guests.',
  },
  {
    id: 'vip-chairs',
    name: 'VIP Chairs',
    category: 'Seating',
    description: 'Statement seating for the couple and the high table.',
  },
  {
    id: 'chairs',
    name: 'Chairs',
    category: 'Seating',
    description: 'Guest seating for the main floor, in quantity.',
  },
  {
    id: 'kids-chairs',
    name: 'Kids Chairs',
    category: 'Seating',
    description: 'Smaller seating for children’s tables and family celebrations.',
  },
  {
    id: 'chair-covers',
    name: 'Chair Covers',
    category: 'Seating',
    description: 'Covers and sashes that finish each seat to match the table linen.',
  },
  {
    id: 'velvets',
    name: 'Velvets',
    category: 'Table linen',
    description: 'Velvet drapes and covers for a heavier, deeper finish.',
  },
  {
    id: 'spandex',
    name: 'Spandex',
    category: 'Table linen',
    description: 'Stretch covers that pull tight to the frame for a clean, fitted line.',
  },
  {
    id: 'sofas',
    name: 'Sofas',
    category: 'Seating',
    description: 'Lounge seating for the parents’ section and relaxed corners.',
  },
  {
    id: 'candles',
    name: 'Candles',
    category: 'Decor',
    description: 'Candles and holders for tables and walkways.',
  },
  {
    id: 'installation-irons',
    name: 'Installation Irons',
    category: 'Installations',
    description: 'Metal frames and stands that carry backdrops, arches, and floral installations.',
  },
  {
    id: 'rugs-astro-turf',
    name: 'Rugs / Astro Turf',
    category: 'Installations',
    description: 'Floor covering for aisles, stages, and photo areas.',
  },
  {
    id: '3d-props',
    name: '3D Props',
    category: 'Decor',
    description: 'Standing props and sculpted pieces for entrances and photo moments.',
  },
  {
    id: 'tables',
    name: 'Tables',
    category: 'Tables',
    description: 'Round and rectangular guest tables, in quantity.',
  },
  {
    id: 'boards',
    name: 'Boards',
    category: 'Decor',
    description: 'Signage and display boards for welcome points, seating plans, and menus.',
  },
];

/**
 * Collections for the home page carousel. `tag` is the short label that sits
 * on the card image, mirroring the reference layout. Each one groups the
 * catalog below it; the two we have photographed carry a real frame, and the
 * rest fall back to the placeholder tile rather than a borrowed stock photo.
 */
const rentalCategories = [
  { name: 'Table Covers', tag: 'Table linen', detail: 'Full-drop satin and damask covers for round banquet tables, in twenty-five colours.', image: { src: '/media/rentals/table-covers/fuchsia.jpg', alt: 'Fuchsia table cover draped over a round banquet table' } },
  { name: 'Flowers', tag: 'Florals', detail: 'Silk blooms, fillers, and foliage by the strand or the bunch, in twenty-three colourways.', image: { src: '/media/rentals/flowers/range.jpg', alt: 'Silk flowers in every colour laid out together' } },
  { name: 'Seating', tag: 'Chairs', detail: 'VIP chairs, guest chairs, kids chairs, chair covers, and lounge sofas for the parents.' },
  { name: 'Tables', tag: 'Furniture', detail: 'Guest tables and VIP tables for the couple, the high table, and reserved seating.' },
  { name: 'Decor & Props', tag: 'Styling', detail: 'Iron vases, candles, 3D props, and signage boards for entrances and photo moments.' },
  { name: 'Installations', tag: 'Build', detail: 'Installation irons that carry backdrops and arches, plus rugs and astro turf underfoot.' },
];

/**
 * Walkthroughs of finished rooms, cut from the client's phone footage.
 *
 * The originals are 70–86s portrait clips at around 120MB each; these are
 * 20-second highlights at 540p. They are shipped `preload="none"` behind a
 * poster, so a visit costs one JPEG and the 12MB only downloads if someone
 * presses play — this site is read on Nigerian mobile data.
 *
 * The middle one is a funeral, not a party. It arrived filed beside the
 * weddings and the signage only reads "Celebration of Life — 1958-2025" a
 * few seconds in. Keep the wording as it is.
 */
const galleryVideos = [
  {
    slug: 'wedding-walkthrough',
    title: 'Wedding reception',
    detail: 'Round tables in ivory and gold, chiavari seating, and a lit installation the length of the room.',
  },
  {
    slug: 'celebration-of-life-walkthrough',
    title: 'Celebration of life',
    detail: 'Burgundy and ivory florals through a champagne-draped marquee, with a garlanded high table.',
  },
  {
    slug: 'reception-walkthrough',
    title: 'Traditional wedding',
    detail: 'A lilac and gold hall — floral arches over the aisle, crystal drops overhead, and a tiered cake.',
  },
].map((video) => ({
  title: video.title,
  detail: video.detail,
  src: '/media/works/' + video.slug + '.mp4',
  poster: '/media/works/' + video.slug + '-poster.jpg',
}));

/* Real work, ordered so the grid opens on the brightest frames. The first
   six are what the home page shows; the portfolio page shows all nine. */
const galleryImages = [
  { src: '/media/works/candelabra-reception.jpg', alt: 'A reception hall with tall floral centrepieces, gold chiavari chairs, and lights suspended overhead' },
  { src: '/media/works/ceremony-aisle.jpg', alt: 'An outdoor ceremony aisle with a blush floral arch, white runner, and a welcome sign' },
  { src: '/media/works/arch-high-table.jpg', alt: 'A high table set between twin arched backdrops hung with chandeliers, on a gold carpet' },
  { src: '/media/works/violet-aisle.jpg', alt: 'A draped hall in white and lilac, with chandeliers over a magenta-lit aisle' },
  { src: '/media/works/ceremony-lawn.jpg', alt: 'Rows of white ceremony chairs on a lawn facing a draped backdrop' },
  { src: '/media/works/dance-floor.jpg', alt: 'A birthday reception with balloon numerals, chandeliers, and a patterned lit dance floor' },
  { src: '/media/works/portrait-wall.jpg', alt: 'Large printed portraits of a couple mounted on an uplit marbled wall' },
  { src: '/media/works/portrait-backdrop.jpg', alt: 'A printed couple portrait framed by florals above a purple carpeted lounge setting' },
  { src: '/media/works/gobo-hall.jpg', alt: 'A darkened hall with patterned light projected across the floor and chandeliers overhead' },
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
    'Add a second paragraph on how they work with clients: how a decor brief is approached, what they care about most, and what a couple or company can expect from the first meeting onward.',
  ],
  quote: 'Add a line the founder would actually say about the work.',
  focus: [
    'Event design direction',
    'Client and guest experience',
    'Vendor and venue partnerships',
  ],
};

const aboutStats = [
  { value: '10+', label: 'Years styling celebrations' },
  { value: '250+', label: 'Events delivered' },
  { value: '7', label: 'Cities served' },
  { value: '40+', label: 'Vendor partners' },
];

const aboutValues = [
  {
    title: 'Design with intent',
    detail: 'Every palette, table, and light is chosen to serve one clear idea rather than a collection of trends.',
  },
  {
    title: 'Calm setup',
    detail: 'Deliveries, setup, and breakdown are settled well before the day, so the celebration itself feels unhurried.',
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
          category.image
            ? e('img', { src: category.image.src, alt: category.image.alt, loading: 'lazy' })
            : e(ProductPlaceholder),
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

/**
 * The walkthrough clips. Native `controls` rather than a custom player: the
 * browser's own poster-and-play affordance is already keyboard reachable and
 * screen-reader labelled, and `preload="none"` keeps the bytes on the shelf
 * until someone actually asks for them.
 */
function WalkthroughGrid() {
  return e('div', { className: 'walkthrough-grid' },
    galleryVideos.map((video) => e('figure', { key: video.src, className: 'walkthrough' },
      e('video', {
        className: 'walkthrough-media',
        src: video.src,
        poster: video.poster,
        controls: true,
        preload: 'none',
        // iOS otherwise takes the clip fullscreen the moment it starts.
        playsInline: true,
        'aria-label': video.title + ' walkthrough',
      }),
      e('figcaption', null,
        e('h3', null, video.title),
        e('p', null, video.detail)
      )
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
          e('p', { className: 'eyebrow' }, 'Ibadan · Sagamu · Lagos · Abeokuta'),
          e('h1', null, 'Transforming every celebration into a ', e('span', { className: 'gold-text' }, 'signature experience'), '.'),
          e('p', { className: 'lead' }, 'Feyizino Events delivers polished event decor, styling, and premium rental pieces for weddings, corporate launches, and private gatherings across Nigeria.'),
          e('div', { className: 'hero-actions' },
            e('a', {
              className: 'btn btn-whatsapp',
              href: whatsappHref('Hello Feyizino Events, I would like to talk about decor for my event.'),
              target: '_blank',
              rel: 'noopener noreferrer',
            }, e(WhatsAppIcon), 'Send us a DM on WhatsApp'),
            e('a', { className: 'btn btn-secondary', href: pageHref('rentals') }, 'View our rental catalog')
          ),
          e('div', { className: 'hero-details' },
            e('span', null, 'Based in Sagamu, Ogun'),
            e('span', null, 'Serving Ibadan, Ijebu Ode, Lagos, Osun, and beyond')
          )
        )
      )
    ),
    e('main', null,
      e('section', { className: 'section intro' },
        e('div', null,
          e('p', { className: 'eyebrow' }, 'About the studio'),
          e('h2', null, 'The kind of detail that makes a celebration feel effortless.'),
          e('p', null, 'Feyizino Events brings a calm, refined approach to decor and rentals, with a strong eye for styling, budgeting, and guest experience.'),
          e('a', { className: 'btn btn-secondary', href: pageHref('about'), style: { marginTop: '8px' } }, 'About us and our CEO')
        ),
        e('div', { className: 'intro-panels' },
          e('div', { className: 'panel' },
            e('div', { className: 'hero-card-head' },
              e(LogoMark, { size: 'md' }),
              e('p', { className: 'eyebrow', style: { margin: 0 } }, 'Signature service')
            ),
            e('h3', null, 'Full-service styling and decor'),
            e('ul', null,
              e('li', null, 'Venue styling and decor'),
              e('li', null, 'Florals and table styling'),
              e('li', null, 'Custom rentals and luxury details')
            ),
            e('div', { className: 'pill' }, 'Starting at ₦2,500,000')
          ),
          e('div', { className: 'panel' },
            e('h3', null, 'Why clients choose us'),
            e('ul', null,
              e('li', null, 'Creative concepts tailored to your story'),
              e('li', null, 'Clear pricing and honest budget advice'),
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
          e('h2', null, 'Proudly serving Ibadan, Osogbo, Sagamu, Ijebu Ode, Abeokuta, Lagos, and Osun.'),
          e('p', null, 'Feyizino Events brings premium event decor, styling, and rentals across the South West.')
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
        e('p', { className: 'lead' }, 'Feyizino Events styles and equips celebrations across Nigeria. We work from Sagamu, Ogun State, and travel to Ibadan, Osogbo, Ijebu Ode, Abeokuta, Lagos, and Osun for weddings, corporate launches, and private gatherings.')
      ),
      e('div', { className: 'about-story' },
        e('div', { className: 'panel' },
          e('h3', null, 'What we do'),
          e('p', null, 'Decor and design, venue styling, and premium decor rentals — from the first concept through to the last table setting on the day.'),
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
            e('a', { className: 'btn btn-primary', href: pageHref('contact') }, 'Talk to us'),
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
      e(SectionBar, {
        eyebrow: 'Walkthroughs',
        title: 'Step through a finished room.',
      }),
      e(WalkthroughGrid)
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

/**
 * The tile that stands in for a category we have not photographed yet. It
 * borrows the logo monogram rather than a stock photo of someone else's
 * event, so nothing on the catalog claims to be stock we do not own.
 */
function ProductPlaceholder() {
  // The monogram is a background rather than an <img>, so it stays clear of
  // the `.card img` / `.category-media img` sizing rules it would otherwise
  // inherit. It is decorative either way, so it needs no alt text.
  return e('div', { className: 'product-placeholder' },
    e('span', { className: 'product-placeholder-mark' }),
    e('span', { className: 'product-placeholder-note' }, 'Photo coming soon')
  );
}

/**
 * Colour chips for a product's range. Chips are flat colour rather than
 * thumbnails: at swatch size a photograph of a draped table reads mostly as
 * the backdrop behind it, while a chip reads instantly as the colour.
 *
 * Arrow keys move between chips, so the row behaves like the radio group it
 * is announced as.
 */
function ColorSwatches({ colors, selected, onSelect, label }) {
  const onKeyDown = (event, index) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + colors.length) % colors.length;
    onSelect(colors[next]);
    // The chips share a roving tabindex, so focus has to follow the selection.
    const row = event.currentTarget.parentNode;
    if (row.children[next]) row.children[next].focus();
  };

  return e('div', { className: 'swatch-row', role: 'radiogroup', 'aria-label': label },
    colors.map((color, index) => e('button', {
      key: color.slug,
      type: 'button',
      role: 'radio',
      'aria-checked': color.slug === selected.slug ? 'true' : 'false',
      'aria-label': color.name,
      title: color.name,
      tabIndex: color.slug === selected.slug ? 0 : -1,
      className: 'swatch' + (color.slug === selected.slug ? ' is-active' : ''),
      style: { background: color.hex },
      onClick: () => onSelect(color),
      onKeyDown: (event) => onKeyDown(event, index),
    }))
  );
}

function ProductCard({ item }) {
  const cart = useCart();
  const [color, setColor] = React.useState(() => {
    if (!item.colors) return null;
    return item.colors.find((c) => c.name === item.defaultColor) || item.colors[0];
  });

  // A colour is part of what is being requested, so each one is its own basket
  // line — two covers in fuchsia and four in sage have to survive as two rows.
  const lineId = color ? item.id + ':' + color.slug : item.id;
  const lineName = color ? item.name + ' — ' + color.name : item.name;
  const inBasket = cart.items.some((line) => line.id === lineId);

  const shown = color || item.hero;
  const meta = item.meta || {};
  const rows = Object.keys(meta);

  return e('article', { className: 'card product-card' },
    shown
      ? e('img', { src: shown.image, alt: shown.alt, loading: 'lazy' })
      : e(ProductPlaceholder),
    e('div', { className: 'card-body' },
      e('span', null, item.category),
      e('h3', null, item.name),
      e('p', null, item.description),

      color ? e('div', { className: 'swatch-block' },
        e('p', { className: 'swatch-label' },
          'Colour: ',
          e('strong', null, color.name)
        ),
        e(ColorSwatches, {
          colors: item.colors,
          selected: color,
          onSelect: setColor,
          label: item.name + ' colour',
        })
      ) : null,

      e('div', { className: 'product-meta' },
        e('div', null,
          e('strong', null, 'Price'),
          e('span', null, item.price || 'On request')
        ),
        rows.map((key) => e('div', { key: key },
          e('strong', null, key),
          e('span', null, meta[key])
        ))
      ),
      e('button', {
        type: 'button',
        className: 'btn btn-primary btn-block',
        onClick: () => cart.add({ id: lineId, name: lineName, price: item.price || 'On request' }),
      }, inBasket ? 'Add another' : 'Add to request')
    )
  );
}

function RentalsPage() {
  return e('div', { className: 'page-shell' },
    e('section', { className: 'section' },
      e('p', { className: 'eyebrow' }, 'Rentals catalog'),
      e('h2', null, 'Decor, rentals, and styling pieces curated for every celebration.'),
      e('p', { className: 'lead' }, 'Table covers in twenty-five colours, silk flowers by the strand, seating, tables, props, and the irons that hold an installation up. Add what you need to your request and we will confirm availability and pricing for your date.'),
      e('div', { className: 'card-grid products-grid', style: { marginTop: '24px' } },
        products.map((item) => e(ProductCard, { key: item.id, item: item }))
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
          e('h3', null, 'Budget-friendly decor'),
          e('p', null, 'We can work around your budget and shape a look that feels elevated without overspending.'),
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
        e('p', null, 'Elegant event decor, styling, and premium rentals for weddings, corporate launches, and private celebrations across Nigeria.')
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
      e('span', null, 'Ibadan · Osogbo · Sagamu · Ijebu Ode · Abeokuta · Lagos · Osun')
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
