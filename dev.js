/**
 * Dev server for the static site.
 *
 * Exists because the site is path-routed: /products and /about are real URLs,
 * not files on disk. Netlify falls back to index.html for those (see _redirects)
 * and this mirrors that locally, so a refresh on a deep link behaves the same
 * in dev as it does in production.
 */
import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
};

function resolve(pathname) {
  // normalize() collapses any ../ before it can escape the project directory.
  const target = join(root, normalize(decodeURIComponent(pathname)));
  if (!target.startsWith(root)) return null;
  try {
    return statSync(target).isDirectory() ? join(target, 'index.html') : target;
  } catch {
    return null;
  }
}

createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  // Anything that is not a file on disk is a client-side route.
  const file = resolve(pathname) ?? join(root, 'index.html');

  res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Serving ${root} on http://localhost:${port}`);
});
