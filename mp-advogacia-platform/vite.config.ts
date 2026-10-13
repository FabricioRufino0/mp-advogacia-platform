import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';

export default defineConfig({
  appType: 'mpa',
  plugins: [react(), {
    name: 'static-publication-preview',
    configurePreviewServer(server) {
      const output = resolve(server.config.root, server.config.build.outDir);
      const rules = readFileSync(resolve(output, '_headers'), 'utf8').trim().split(/\n(?=\/)/).map(block => {
        const [pattern, ...lines] = block.split('\n');
        return { pattern, headers: lines.map(line => { const split = line.indexOf(':'); return [line.slice(0, split).trim(), line.slice(split + 1).trim()]; }) };
      });
      server.middlewares.use((request, response, next) => {
        const setHeader = response.setHeader.bind(response);
        response.setHeader = (name, value) => setHeader(name, name.toLowerCase() === 'content-type' && typeof value === 'string' && value.startsWith('text/') && !value.includes('charset=') ? value + '; charset=utf-8' : value);
        let pathname;
        try { pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname); }
        catch { response.statusCode = 400; response.setHeader('Cache-Control', 'no-store'); response.end('Endereço inválido'); return; }
        for (const rule of rules) {
          const [prefix, suffix] = rule.pattern.split('*');
          if (suffix !== undefined ? pathname.startsWith(prefix) && pathname.endsWith(suffix) : pathname === rule.pattern) {
            for (const [name, value] of rule.headers) response.setHeader(name, value);
          }
        }
        const file = resolve(output, '.' + pathname);
        const inOutput = file === output || file.startsWith(output + sep);
        const isPrivate = ['/_headers', '/_redirects'].includes(pathname);
        const exists = inOutput && !isPrivate && existsSync(file) && (statSync(file).isFile() || existsSync(resolve(file, 'index.html')));
        if (exists) { next(); return; }
        if (inOutput && !isPrivate && !pathname.endsWith('/') && existsSync(file + '.html')) {
          request.url = pathname + '.html'; next(); return;
        }
        response.statusCode = 404;
        response.setHeader('Cache-Control', 'no-store');
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(request.method === 'HEAD' ? undefined : readFileSync(resolve(output, '404.html')));
      });
    },
  }],
});
