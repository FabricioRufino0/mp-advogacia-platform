import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';
import react from '@vitejs/plugin-react';

await build({ configFile: false, plugins: [react()], build: { ssr: 'src/entry-server.tsx', outDir: '.prerender', emptyOutDir: true } });
const { render } = await import(pathToFileURL(resolve('.prerender/entry-server.js')).href);
let html = await readFile('dist/index.html', 'utf8');
html = html.replace('<!--app-html-->', render());
let urlMetadata = '';
let robots = 'User-agent: *\nAllow: /\n';
if (process.env.SITE_URL) {
  const url = new URL(process.env.SITE_URL);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || ['localhost', '127.0.0.1'].includes(url.hostname)) throw new Error('SITE_URL must be the public HTTPS origin, without a path, query or fragment.');
  const canonical = url.origin + '/';
  urlMetadata = `<link rel="canonical" href="${canonical}" /><meta property="og:url" content="${canonical}" /><meta property="og:image" content="${url.origin}/images/brasilia-justica.webp" />`;
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url></urlset>`);
  robots += `Sitemap: ${url.origin}/sitemap.xml\n`;
}
await writeFile('dist/index.html', html.replace('<!--site-url-->', urlMetadata));
await writeFile('dist/robots.txt', robots);
await rm('.prerender/entry-server.js', { force: true });
for (const unusedImage of ['joao-pedro.jpg', 'institucional.jpg']) await rm(`dist/images/${unusedImage}`, { force: true });
console.log('Home pre-rendered. ' + (process.env.SITE_URL ? 'Canonical and sitemap generated.' : 'Set SITE_URL when the public domain is confirmed.'));
