/**
 * Everything a search engine or a social card reads about this site, in one
 * place.
 *
 * The site is a single HTML file driven by a client-side router, so without
 * help every URL would share one title and one description — and WhatsApp,
 * Facebook, and X never run the router, so every shared link would preview as
 * the home page. build.js closes that gap: it renders the block below into a
 * real <head> for each route, writes a prerendered file per page, and derives
 * the sitemap, the robots file, and the routing rules from the same data.
 *
 * This is a Node module. It never ships to the browser as its own request —
 * build.js inlines the part app.js needs as `window.siteMeta`.
 */

/**
 * Change this the day the domain moves, then rebuild. Every canonical URL,
 * sitemap entry, and share-card URL is derived from it, so a stale value here
 * quietly misreports the whole site to Google.
 */
export const origin = 'https://feyizinoevents.com';

export const site = {
  name: 'Feyizino Event & Rentals',
  shortName: 'Feyizino Events',
  // en_NG tells Facebook the audience is Nigerian; lang="en" stays in the HTML.
  locale: 'en_NG',
  logo: '/logo.jpeg',

  /**
   * 1200x630 is the one size Facebook, WhatsApp, X, and LinkedIn all crop
   * cleanly from. A portrait photo handed to them gets centre-cropped into
   * something unrecognisable, which is why this is its own file.
   */
  shareImage: {
    src: '/media/og-share.jpg',
    width: 1200,
    height: 630,
    alt: 'A reception laid with white linen, gold chiavari chairs, and tall floral centrepieces',
  },

  business: {
    telephone: '+2348023190408',
    officeTelephone: '+2348024754605',
    email: 'FEYIZINOevents&rentals@gmail.com',
    street: '9, Abiodun Ogunyanwo Street, Off Ewusi Street, Makun',
    city: 'Sagamu',
    region: 'Ogun State',
    country: 'NG',
    instagram: 'https://www.instagram.com/feyizino_events/',
    /** The towns we travel to. Each becomes an areaServed entry. */
    areaServed: ['Ibadan', 'Osogbo', 'Sagamu', 'Ijebu Ode', 'Abeokuta', 'Lagos', 'Osun'],
    /**
     * Decor, styling, and rentals — deliberately not planning or coordination,
     * which Feyizino does not sell and should not be found for.
     */
    services: ['Event decor and design', 'Venue styling and florals', 'Decor and equipment rentals'],
  },
};

/**
 * One entry per route, in sitemap order.
 *
 * Titles run to roughly 60 characters and descriptions to roughly 155, which
 * is where Google starts truncating each. Both are written for a person
 * reading a result, not for a keyword count: the towns appear because they are
 * how someone actually searches for this service, not to pad the string.
 */
export const pages = [
  {
    id: 'home',
    path: '/',
    priority: '1.0',
    title: 'Feyizino Event & Rentals | Event Decor & Rentals Nigeria',
    description:
      'Bespoke event decor, styling, and premium rentals for weddings and celebrations across Ibadan, Osogbo, Sagamu, Ijebu Ode, Abeokuta, Lagos, and Osun.',
  },
  {
    id: 'about',
    path: '/about',
    priority: '0.7',
    title: 'About Feyizino Event & Rentals | Sagamu, Ogun State',
    description:
      'An event decor studio working out of Sagamu, Ogun State. Meet the team behind the styling, florals, and rental pieces we bring to celebrations nationwide.',
  },
  {
    id: 'portfolio',
    path: '/portfolio',
    priority: '0.9',
    title: 'Our Work | Wedding & Event Decor Portfolio | Feyizino',
    description:
      'Real Feyizino rooms: wedding receptions, traditional weddings, and celebrations of life, with video walkthroughs and a gallery of finished setups.',
  },
  {
    id: 'services',
    path: '/services',
    priority: '0.8',
    title: 'Event Decor, Styling & Rental Services | Feyizino',
    description:
      'Complete decor direction, styling and florals, and premium decor rentals from our own catalog — installed on the day and shaped around your budget.',
  },
  {
    id: 'rentals',
    path: '/rentals',
    priority: '0.9',
    title: 'Decor Rentals | Chairs, Tables, Linen & Florals Nigeria',
    description:
      'Rent table covers in twenty-five colours, silk florals, chiavari chairs, tables, props, and installation frames. Build a request and we confirm your date.',
  },
  {
    id: 'contact',
    path: '/contact',
    priority: '0.8',
    title: 'Contact & Book | Feyizino Event & Rentals, Sagamu',
    description:
      'Book Feyizino for your wedding, launch, or celebration. Call +234 802 319 0408, message us on WhatsApp, or send your date, style, and budget for a proposal.',
  },
];

/** Absolute URL for a site-root path. `/` must keep its slash to stay canonical. */
export function absolute(path) {
  return origin + path;
}

/** Escapes text going into an HTML attribute. The business name and email both carry a bare `&`. */
function attr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Escapes JSON for a <script> body. A literal `</script>` anywhere inside —
 * today impossible, tomorrow one copy edit away — would close the tag early
 * and spill the rest of the payload into the page as markup.
 */
function json(value) {
  return JSON.stringify(value, null, 2).replace(/</g, '\\u003c');
}

/**
 * schema.org markup, identical on every page.
 *
 * Repeating the business on each URL is deliberate: it is the same business
 * whichever page Google lands on first, and the shared `@id` lets it collapse
 * the repeats into one entity. Opening hours, coordinates, and a price range
 * are all absent rather than guessed — an invented detail in structured data
 * is worse than a missing one.
 */
function structuredData() {
  const { business } = site;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': absolute('/#business'),
        name: site.name,
        alternateName: site.shortName,
        url: absolute('/'),
        image: absolute(site.shareImage.src),
        logo: absolute(site.logo),
        description: pages[0].description,
        telephone: business.telephone,
        email: business.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.street,
          addressLocality: business.city,
          addressRegion: business.region,
          addressCountry: business.country,
        },
        areaServed: business.areaServed.map((name) => ({ '@type': 'City', name })),
        sameAs: [business.instagram],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Event decor and rentals',
          itemListElement: business.services.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, provider: { '@id': absolute('/#business') } },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': absolute('/#website'),
        url: absolute('/'),
        name: site.name,
        publisher: { '@id': absolute('/#business') },
        inLanguage: 'en-NG',
      },
    ],
  };
}

/** The subset app.js needs to retitle the document on a client-side navigation. */
function clientMeta() {
  return {
    origin,
    pages: Object.fromEntries(
      pages.map((page) => [page.id, { path: page.path, title: page.title, description: page.description }])
    ),
  };
}

/**
 * The generated <head> for one page, indented to sit inside index.html.
 *
 * og: and twitter: tags are spelled out rather than left to the crawlers'
 * fallbacks: a link pasted into WhatsApp is often the first thing anyone sees
 * of this business, and a preview with no image is a preview nobody taps.
 */
export function headFor(pageId) {
  const page = pages.find((entry) => entry.id === pageId);
  if (!page) throw new Error(`site-meta: no page named "${pageId}"`);

  const url = absolute(page.path);
  const image = absolute(site.shareImage.src);

  return `    <title>${attr(page.title)}</title>
    <meta name="description" content="${attr(page.description)}" />
    <link rel="canonical" href="${url}" />
    <meta name="author" content="${attr(site.name)}" />
    <!-- max-image-preview:large is what lets our own photography show as a
         full-width thumbnail in search rather than a postage stamp. -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

    <meta property="og:site_name" content="${attr(site.name)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${site.locale}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${attr(page.title)}" />
    <meta property="og:description" content="${attr(page.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${site.shareImage.width}" />
    <meta property="og:image:height" content="${site.shareImage.height}" />
    <meta property="og:image:alt" content="${attr(site.shareImage.alt)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${attr(page.title)}" />
    <meta name="twitter:description" content="${attr(page.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${attr(site.shareImage.alt)}" />

    <script type="application/ld+json">
${json(structuredData())}
    </script>
    <script>
      window.siteMeta = ${json(clientMeta())};
    </script>
`;
}

export function sitemapXml(lastmod) {
  const entries = pages
    .map(
      (page) => `  <url>
    <loc>${absolute(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${absolute('/sitemap.xml')}
`;
}

/**
 * Netlify routing.
 *
 * Every page now has a prerendered file carrying its own head, so each route
 * is served that file instead of falling through to the SPA shell — a crawler
 * that does not run JavaScript still gets the right title and description.
 * Anything unlisted is a client-side route and gets the shell.
 */
export function redirects() {
  const routes = pages
    .filter((page) => page.id !== 'home')
    .map((page) => `${page.path.padEnd(12)} ${(page.path + '.html').padEnd(20)} 200`)
    .join('\n');

  return `# Generated by build.js from site-meta.js. Edit that file, not this one.

# The catalog used to live at /products. A permanent redirect hands the old
# URL's standing to the new one instead of leaving two URLs for one page.
/products    /rentals             301

# Prerendered pages, each with its own metadata.
${routes}

# Everything else is a client-side route.
/*           /index.html          200
`;
}
