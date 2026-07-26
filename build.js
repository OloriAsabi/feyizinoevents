/**
 * Copies the static site into dist/.
 *
 * This exists so the deploy is correct no matter which publish directory
 * Netlify ends up using: the repo root and dist/ hold the same files.
 */
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

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

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const asset of assets) {
  cpSync(join(root, asset), join(dist, asset), { recursive: true });
}

console.log(`Copied ${assets.length} entries to dist/`);
