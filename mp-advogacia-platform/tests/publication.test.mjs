import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

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
