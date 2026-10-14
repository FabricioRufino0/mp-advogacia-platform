import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolveSiteOrigin } from '../scripts/site-url.mjs';

test('the static build contains the approved content and working contact links', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  for (const content of ['Halson Hugo Pimenta', 'OAB/DF 69.858', 'Trabalhista', 'Empresarial', 'Cível', 'Brasília', 'tab-trabalhista', 'panel-empresarial', 'panel-civel']) assert.ok(html.includes(content), `Missing ${content}`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.ok(html.includes('https://wa.me/5561986684723?text='));
  assert.ok(!/João Pedro|noindex|<form[ >]|<!--app-html-->/.test(html));
  assert.ok(!html.includes('href="http://localhost'));
  const assetPaths = [...html.matchAll(/(?:src|href)="(\/assets\/[^" ]+|\/images\/[^" ]+)"/g)].map(match => match[1]);
  for (const path of assetPaths) await access('dist' + path);
  assert.ok((await readFile('dist/robots.txt', 'utf8')).includes('Allow: /'));
  await assert.rejects(access('dist/images/joao-pedro.jpg'));
});

test('publication metadata consistently uses the confirmed HTTPS domain', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  const origin = resolveSiteOrigin(process.env.SITE_URL || 'https://escritoriomp.com.br');
  assert.ok(html.includes(`<link rel="canonical" href="${origin}/"`));
  for (const [property, content] of [
    ['og:url', `${origin}/`], ['og:image', `${origin}/images/share-brasilia.webp`],
  ]) assert.ok(html.includes(`property="${property}" content="${content}"`));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
  assert.ok(html.includes(`name="twitter:image" content="${origin}/images/share-brasilia.webp"`));
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));
  assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${origin}/sitemap.xml`));
});

test('privacy page explains the confirmed tracking and contact choices', async () => {
  const html = await readFile('dist/privacidade.html', 'utf8');
  assert.ok(html.includes('Privacidade'));
  assert.ok(html.includes('<title>Privacidade | Marques Pimenta Advocacia</title>'));
  assert.ok(html.includes('cookies de rastreamento'));
  assert.ok(html.includes('https://wa.me/5561986684723?text='));
  assert.ok(html.includes('property="og:image:width" content="1200"'));
  assert.ok(html.includes('property="og:image:height" content="630"'));
  assert.ok(html.includes('rel="canonical"'));
  assert.ok((await readFile('dist/index.html', 'utf8')).includes('href="/privacidade"'));
  assert.ok((await readFile('dist/sitemap.xml', 'utf8')).includes('/privacidade</loc>'));
});

test('structured data identifies only the approved brand and responsible lawyer', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, 'Missing JSON-LD');
  const data = JSON.parse(match[1]);
  const organization = data['@graph'].find(entity => entity['@type'] === 'Organization');
  const person = data['@graph'].find(entity => entity['@type'] === 'Person');
  assert.equal(organization.name, 'Marques Pimenta');
  assert.equal(organization.telephone, '+55 61 98668-4723');
  assert.equal(person.name, 'Halson Hugo Pimenta');
  assert.equal(person.identifier, 'OAB/DF 69.858');
  assert.ok(!organization.address && !organization.aggregateRating && !organization.sameAs);
});

test('security policy allows the actual inline scripts without allowing arbitrary scripts', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  const headers = await readFile('dist/_headers', 'utf8');
  const policy = headers.match(/Content-Security-Policy: (.+)/)?.[1];
  assert.ok(policy, 'Missing CSP');
  const scriptPolicy = policy.match(/script-src ([^;]+)/)?.[1];
  assert.ok(scriptPolicy.includes("'self'"));
  assert.ok(!scriptPolicy.includes('unsafe-inline') && !scriptPolicy.includes('unsafe-eval'));
  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    const hash = createHash('sha256').update(match[1]).digest('base64');
    assert.ok(scriptPolicy.includes(`'sha256-${hash}'`), 'Inline script hash does not match');
  }
  for (const header of ['X-Content-Type-Options: nosniff', 'X-Frame-Options: DENY', 'Referrer-Policy: strict-origin-when-cross-origin', 'Permissions-Policy:', 'Strict-Transport-Security:']) assert.ok(headers.includes(header));
  assert.ok(headers.includes('max-age=31536000, immutable'));
  assert.ok(!headers.includes('/assets/*') && !headers.includes('/images/*'), 'Cache rules must match published files, not missing URLs');
  assert.ok(headers.split('\n').every(line => line.length < 2000));
});

test('404 page offers recovery without copying the indexable home', async () => {
  const html = await readFile('dist/404.html', 'utf8');
  assert.ok(html.includes('Página não encontrada'));
  assert.ok(html.includes('href="/"'));
  assert.ok(html.includes('noindex'));
  assert.ok(!html.includes('rel="canonical"'));
});
