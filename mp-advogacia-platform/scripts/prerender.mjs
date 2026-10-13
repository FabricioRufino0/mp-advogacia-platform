import { readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import { resolveSiteOrigin } from './site-url.mjs';

await build({ configFile: false, plugins: [react()], build: { ssr: 'src/entry-server.tsx', outDir: '.prerender', emptyOutDir: true } });
const { render, renderPrivacy, site } = await import(pathToFileURL(resolve('.prerender/entry-server.js')).href);
let html = await readFile('dist/index.html', 'utf8');
html = html.replace('<!--app-html-->', render());
const origin = resolveSiteOrigin(process.env.SITE_URL || site.url);
const canonical = origin + '/';
const shareImage = origin + '/images/share-brasilia.webp';
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': origin + '/#escritorio', name: site.name, url: canonical, telephone: site.phone,
      description: 'Marca de atendimento jurídico online em Brasília e no Distrito Federal. Advogado responsável: ' + site.person + ', ' + site.registration + '.',
      logo: origin + '/images/marca-440.webp', areaServed: [{ '@type': 'City', name: 'Brasília' }, { '@type': 'AdministrativeArea', name: 'Distrito Federal' }],
      contactPoint: { '@type': 'ContactPoint', telephone: site.phone, contactType: 'Atendimento jurídico', availableLanguage: 'pt-BR', url: site.whatsapp } },
    { '@type': 'Person', '@id': origin + '/#advogado', name: site.person, jobTitle: 'Advogado', identifier: site.registration },
    { '@type': 'WebSite', '@id': origin + '/#website', name: site.name, url: canonical, inLanguage: 'pt-BR', publisher: { '@id': origin + '/#escritorio' } },
  ],
};
const urlMetadata = `<link rel="canonical" href="${canonical}" /><meta property="og:url" content="${canonical}" /><meta property="og:image" content="${shareImage}" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Gravura de Brasília com a estátua da Justiça e arquitetura da cidade" /><meta name="twitter:image" content="${shareImage}" /><meta name="twitter:image:alt" content="Gravura de Brasília com a estátua da Justiça e arquitetura da cidade" /><script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`;
html = html.replace('<!--site-url-->', urlMetadata);
await writeFile('dist/index.html', html);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url><url><loc>${origin}/privacidade</loc></url></urlset>`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
const scriptHashes = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(match => "'sha256-" + createHash('sha256').update(match[1]).digest('base64') + "'");
const policy = `default-src 'self'; script-src 'self' ${scriptHashes.join(' ')}; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'`;
for (const unusedImage of ['joao-pedro.jpg', 'institucional.jpg', 'marca.jpg', 'brasilia-justica.webp', 'justica-colunata.webp', 'justica-colunata-1122.webp', 'brasilia-gravura.webp', 'brasilia-arquitetura.webp', 'pilar-gravura.webp', 'brasilia-justica.webp.json', 'brasilia-gravura.webp.json', 'brasilia-arquitetura.webp.json']) await rm(`dist/images/${unusedImage}`, { force: true });
const cacheRules = [];
for (const directory of ['assets', 'images']) {
  for (const name of await readdir(`dist/${directory}`)) {
    cacheRules.push(`/${directory}/${name}\n  Cache-Control: public, max-age=${directory === 'assets' ? '31536000, immutable' : '86400'}`);
  }
}
await writeFile('dist/_headers', `/*
  Content-Security-Policy: ${policy}
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Cross-Origin-Opener-Policy: same-origin
  Strict-Transport-Security: max-age=31536000
${cacheRules.join('\n')}
/
  Content-Type: text/html; charset=utf-8
/*.html
  Content-Type: text/html; charset=utf-8
/privacidade
  Content-Type: text/html; charset=utf-8
/404.html
  Cache-Control: no-store
`);
const styles = '<link rel="icon" type="image/webp" href="/images/marca-96.webp" />' + (html.match(/<link[^>]+rel="stylesheet"[^>]*>/g)?.join('') || '');
const privacyDescription = 'Privacidade ao navegar no site da Marques Pimenta e entrar em contato pelo WhatsApp. Informações sobre dados e canais de atendimento.';
await writeFile('dist/privacidade.html', `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="description" content="${privacyDescription}" /><link rel="canonical" href="${origin}/privacidade" /><meta property="og:type" content="website" /><meta property="og:locale" content="pt_BR" /><meta property="og:title" content="Privacidade | Marques Pimenta" /><meta property="og:description" content="${privacyDescription}" /><meta property="og:url" content="${origin}/privacidade" /><meta property="og:image" content="${shareImage}" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Privacidade | Marques Pimenta" /><meta name="twitter:description" content="${privacyDescription}" /><meta name="twitter:image" content="${shareImage}" /><title>Privacidade | Marques Pimenta</title>${styles}</head><body>${renderPrivacy()}</body></html>`);
await writeFile('dist/404.html', `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="robots" content="noindex, follow" /><title>Página não encontrada | Marques Pimenta</title>${styles}</head><body><header class="container error-brand"><a href="/">Marques Pimenta Advocacia</a></header><main class="container error-page"><h1>Página não encontrada</h1><p>O endereço pode ter mudado ou não existir. Volte ao início para conhecer o escritório e as áreas de atuação, ou entre em contato para obter informações sobre o atendimento.</p><nav class="error-navigation" aria-label="Navegação da página não encontrada"><a class="button button-primary" href="/">Voltar ao início</a><a href="/#areas">Áreas de atuação</a><a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a></nav></main></body></html>`);
await rm('.prerender/entry-server.js', { force: true });
console.log('Home pre-rendered with canonical, sitemap, structured data and security headers for ' + origin + '.');
