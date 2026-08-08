/**
 * Builds the static site into dist/.
 *
 * Two jobs. It copies the site over so the deploy is correct no matter which
 * publish directory Netlify ends up using — the repo root and dist/ hold the
 * same files — and it renders the per-page metadata from site-meta.js into a
 * real HTML file for every route. That second job is what lets a crawler or a
 * WhatsApp preview see the page it asked for: they never run the client-side
 * router, so without a file per route every URL would describe the home page.
 */
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { headFor, pages, redirects, robotsTxt, sitemapXml } from './site-meta.js';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

/** The region of index.html that site-meta.js owns. Kept, not consumed, so rebuilds are idempotent. */
const seoBlock = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

const assets = [
  'index.html',
  'app.js',
  'styles.css',
  'vendor',
  'media',
  'logo.jpeg',
  'logo-mark.jpg',
  'favicon.jpg',
  '_redirects',
];

const template = readFileSync(join(root, 'index.html'), 'utf8');
if (!seoBlock.test(template)) {
  throw new Error('index.html has lost its <!-- seo:start --> / <!-- seo:end --> markers');
}

function render(pageId) {
  // The replacement is a function so a `$&` in any title or description is
  // taken literally rather than read as a backreference.
  return template.replace(seoBlock, () => `<!-- seo:start -->\n${headFor(pageId)}    <!-- seo:end -->`);
}

// Rewrite the two generated files that live in the repo root, so the checked-in
// copies never drift from site-meta.js.
writeFileSync(join(root, 'index.html'), render('home'));
writeFileSync(join(root, '_redirects'), redirects());

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const asset of assets) {
  cpSync(join(root, asset), join(dist, asset), { recursive: true });
}

// One file per route. Netlify serves dist/about.html for /about (see _redirects),
// which is how the page's own title and description reach a crawler.
const routed = pages.filter((page) => page.id !== 'home');
for (const page of routed) {
  writeFileSync(join(dist, `${page.id}.html`), render(page.id));
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(dist, 'sitemap.xml'), sitemapXml(today));
writeFileSync(join(dist, 'robots.txt'), robotsTxt());

console.log(`Copied ${assets.length} entries and rendered ${routed.length + 1} pages to dist/`);
