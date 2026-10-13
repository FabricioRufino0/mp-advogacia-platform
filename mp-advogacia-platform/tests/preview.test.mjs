import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { preview } from 'vite';
import { resolveSiteOrigin } from '../scripts/site-url.mjs';

let server;
let origin;
before(async () => {
  server = await preview({ preview: { host: '127.0.0.1', port: 0, strictPort: false } });
  origin = `http://127.0.0.1:${server.httpServer.address().port}`;
});
after(() => server?.httpServer.close());

test('preview serves the home with production security headers', async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('x-frame-options'), 'DENY');
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  assert.match(response.headers.get('content-type'), /^text\/html;\s*charset=utf-8$/);
  assert.ok(response.headers.get('content-security-policy').includes("frame-ancestors 'none'"));
  assert.ok((await response.text()).includes('Marques Pimenta'));
});

test('unknown URLs and private hosting files return a genuine recoverable 404', async () => {
  for (const path of ['/pagina-que-nao-existe', '/missing.js', '/assets/missing.js', '/images/missing.webp', '/_headers', '/_redirects']) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 404, path);
    assert.equal(response.headers.get('cache-control'), 'no-store', path);
    assert.ok((await response.text()).includes('Página não encontrada'), path);
  }
});

test('published sitemap and static assets have the expected MIME and cache policy', async () => {
  const sitemap = await fetch(origin + '/sitemap.xml');
  assert.equal(sitemap.status, 200);
  assert.ok((await sitemap.text()).includes(`<loc>${resolveSiteOrigin(process.env.SITE_URL || 'https://escritoriomp.com.br')}/</loc>`));
  const image = await fetch(origin + '/images/marca-96.webp');
  assert.equal(image.headers.get('content-type'), 'image/webp');
  assert.equal(image.headers.get('cache-control'), 'public, max-age=86400');
  await image.arrayBuffer();
  const html = await (await fetch(origin)).text();
  const script = html.match(/src="(\/assets\/[^" ]+\.js)"/)[1];
  const asset = await fetch(origin + script);
  assert.equal(asset.status, 200);
  assert.equal(asset.headers.get('cache-control'), 'public, max-age=31536000, immutable');
  await asset.arrayBuffer();
});

test('privacy is reachable by its published extensionless URL', async () => {
  const response = await fetch(origin + '/privacidade');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /^text\/html;\s*charset=utf-8$/);
  const html = await response.text();
  assert.ok(html.includes('cookies de rastreamento'));
  assert.ok(!/<script\b/.test(html), 'Privacy content must work without JavaScript');
});
