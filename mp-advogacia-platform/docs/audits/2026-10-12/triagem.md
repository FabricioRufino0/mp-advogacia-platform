# Triagem das falhas e avisos do SEOmator

Diagnóstico bruto preservado; as classificações abaixo não alteram a nota. Contexto e próximos passos estão no README desta auditoria.

| Regra | Status CLI | Interpretação | Mensagem original |
|---|---|---|---|
| core-canonical-present | fail | Depende de SITE_URL/domínio; validar produção | No <link rel="canonical"> tag found in the document |
| core-canonical-valid | warn | Depende de SITE_URL/domínio; validar produção | No <link rel="canonical"> tag found in the document |
| technical-sitemap-valid | fail | Depende de SITE_URL/domínio; validar produção | Sitemap has invalid XML structure |
| technical-404-page | fail | Infraestrutura/host; localhost não comprova produção | Non-existent page returned 200 instead of 404 (soft 404 issue) |
| perf-brotli | warn | Infraestrutura/host; localhost não comprova produção | Using gzip but not Brotli — Brotli gives ~15-20% better compression for text assets |
| perf-asset-cache-policy | warn | Infraestrutura/host; localhost não comprova produção | 8 of 8 static asset(s) lack an efficient cache policy: http://localhost:4323/images/brasilia-justica.webp (no cache-control), http://localhost:4323/images/marca.jpg (no cache-control), http://localhost:4323/assets/index-DV5twYQr.css (no cache-control), http://localhost:4323/images/justica-colunata.webp (no cache-control), http://localhost:4323/assets/index-Bn2UCNw0.js (no cache-control), and 3 more |
| perf-http2 | warn | Infraestrutura/host; localhost não comprova produção | No alt-svc header found — server may not support HTTP/2 or HTTP/3 (informational) |
| perf-image-encoding | warn | Melhoria opcional, sem mudança automática | 3 image(s) transferred over 100KB: http://localhost:4323/images/justica-colunata.webp (484KB), http://localhost:4323/images/brasilia-justica.webp (244KB), http://localhost:4323/images/marca.jpg (102KB) |
| links-internal-present | warn | Heurística/opcional; interpretar conforme home institucional | No internal links found on this page |
| links-dead-end-pages | warn | Heurística/opcional; interpretar conforme home institucional | Page is a dead-end with no outgoing internal links |
| links-localhost | fail | Falso positivo ou classificação inadequada; conferido no código/browser | Found 11 localhost/development URL reference(s) |
| images-modern-format | warn | Melhoria opcional, sem mudança automática | Partial modern format adoption (33.3% WebP/AVIF) |
| images-responsive | warn | Melhoria opcional, sem mudança automática | No responsive image techniques detected (33.3% of images could benefit) |
| security-https | fail | Infraestrutura/host; localhost não comprova produção | Page is served over HTTP instead of HTTPS |
| security-https-redirect | fail | Infraestrutura/host; localhost não comprova produção | HTTP version is accessible without redirecting to HTTPS |
| security-hsts | warn | Infraestrutura/host; localhost não comprova produção | HSTS only applies to HTTPS URLs; site is currently served over HTTP |
| security-csp | warn | Infraestrutura/host; localhost não comprova produção | Content-Security-Policy header is missing. Consider adding CSP to prevent XSS attacks. |
| security-x-frame-options | fail | Infraestrutura/host; localhost não comprova produção | Neither X-Frame-Options nor CSP frame-ancestors is set. Site is vulnerable to clickjacking. |
| security-x-content-type-options | fail | Infraestrutura/host; localhost não comprova produção | X-Content-Type-Options header is missing. Add "nosniff" to prevent MIME type sniffing attacks. |
| security-permissions-policy | warn | Infraestrutura/host; localhost não comprova produção | Permissions-Policy header is missing. Consider adding to control browser features. |
| security-referrer-policy | warn | Infraestrutura/host; localhost não comprova produção | Referrer-Policy is not set. Consider adding to control referrer information. |
| security-ssl-expiry | fail | Infraestrutura/host; localhost não comprova produção | Page is served over HTTP; no SSL certificate in use |
| security-ssl-protocol | fail | Infraestrutura/host; localhost não comprova produção | Page is served over HTTP; TLS configuration check not applicable |
| security-coop | warn | Infraestrutura/host; localhost não comprova produção | Missing Cross-Origin-Opener-Policy header. Pages that open this one keep a reference to its window. |
| crawl-sitemap-domain | warn | Depende de SITE_URL/domínio; validar produção | Sitemap contains no page URLs |
| crawl-canonical-redirect | warn | Depende de SITE_URL/domínio; validar produção | No canonical tag found |
| crawl-sitemap-in-robotstxt | warn | Depende de SITE_URL/domínio; validar produção | robots.txt does not reference a sitemap |
| schema-present | warn | Melhoria opcional, sem mudança automática | Structured data found (RDFa), but consider using JSON-LD for better compatibility |
| schema-valid | warn | Melhoria opcional, sem mudança automática | No JSON-LD scripts found to validate |
| schema-type | warn | Melhoria opcional, sem mudança automática | No JSON-LD scripts found to check for @type |
| schema-required-fields | warn | Melhoria opcional, sem mudança automática | No JSON-LD scripts found to check for required fields |
| schema-website-search | warn | Melhoria opcional, sem mudança automática | Homepage missing WebSite schema |
| a11y-skip-link | warn | Falso positivo ou classificação inadequada; conferido no código/browser | No skip link found for keyboard navigation |
| a11y-label-name-mismatch | warn | Achado de código confirmado; próxima correção | 1 control(s) have an accessible name that omits their visible text, breaking voice control |
| content-word-count | warn | Heurística/opcional; interpretar conforme home institucional | Thin content detected: 222 words (300+ recommended) |
| content-reading-level | warn | Heurística/opcional; interpretar conforme home institucional | Content may be too complex: 31.9 (Difficult (college level)) |
| content-article-links | warn | Heurística/opcional; interpretar conforme home institucional | Link density too high: 7.21 links per 100 words (maximum 5) |
| content-mime-type | warn | Infraestrutura/host; localhost não comprova produção | Content-Type header missing charset specification |
| content-text-html-ratio | warn | Heurística/opcional; interpretar conforme home institucional | Low text-to-HTML ratio: 11.5% (1734 text bytes / 15115 HTML bytes) |
| content-description-pixel-width | fail | Metadados: revisão recomendada | Meta description will be truncated in SERP: estimated 1029px (max ~920px) |
| social-og-image | fail | Depende de SITE_URL/domínio; validar produção | No <meta property="og:image"> tag found in the document |
| social-og-image-size | fail | Depende de SITE_URL/domínio; validar produção | No og:image found - cannot check dimensions |
| social-twitter-card | fail | Metadados: revisão recomendada | No <meta name="twitter:card"> tag found in the document |
| social-og-url | fail | Depende de SITE_URL/domínio; validar produção | No <meta property="og:url"> tag found in the document |
| social-og-url-canonical | warn | Depende de SITE_URL/domínio; validar produção | Neither og:url nor canonical URL found - add both for consistent SEO signals |
| social-share-buttons | warn | Falso positivo ou classificação inadequada; conferido no código/browser | Only found share button for WhatsApp. Consider adding more platforms (Facebook, Twitter/X, LinkedIn) |
| social-profiles | warn | Depende de conteúdo/dados aprovados pelo responsável | No social media profile links found. Add links to your social profiles in header/footer |
| eeat-about-page | warn | Heurística/opcional; interpretar conforme home institucional | No about page link found - important for trust and E-E-A-T |
| eeat-author-byline | warn | Heurística/opcional; interpretar conforme home institucional | No author byline found |
| eeat-author-expertise | warn | Heurística/opcional; interpretar conforme home institucional | No author present - expertise check not applicable |
| eeat-citations | warn | Heurística/opcional; interpretar conforme home institucional | 5 external links found, but none to recognized authoritative sources |
| eeat-contact-page | warn | Heurística/opcional; interpretar conforme home institucional | Only 1 contact method found (phone) - add more for better trust signals |
| eeat-content-dates | warn | Heurística/opcional; interpretar conforme home institucional | No content date signals found |
| eeat-privacy-policy | warn | Depende de conteúdo/dados aprovados pelo responsável | No privacy policy link found - important for trust and legal compliance |
| mobile-horizontal-scroll | warn | Falso positivo ou classificação inadequada; conferido no código/browser | Found 2 potential horizontal scroll issue(s) |
| js-rendered-canonical | fail | Depende de SITE_URL/domínio; validar produção | Canonical link tag is missing in the rendered DOM after JavaScript execution |
| geo-llms-txt | warn | Heurística/opcional; interpretar conforme home institucional | No llms.txt reference found - consider adding for AI discoverability |
| geo-agents-md | warn | Heurística/opcional; interpretar conforme home institucional | /AGENTS.md returned an HTML document instead of the instructions file |
| geo-well-known | warn | Heurística/opcional; interpretar conforme home institucional | No MCP or agent-card manifest under .well-known |
| geo-markdown-response | warn | Heurística/opcional; interpretar conforme home institucional | The origin does not serve a Markdown representation of / |
