# Comparação por regra

Mesma URL HTTP local; antes sem metadados do domínio, depois com domínio confirmado. Algumas falhas novas representam essa diferença de ambiente. Não é comparação de deploy público.

| Regra | Antes | Depois | Mensagem posterior |
|---|---|---|---|
| core-canonical-present | fail | pass | Canonical URL tag is present |
| core-canonical-valid | warn | pass | Canonical URL is a valid absolute URL |
| core-canonical-http-mismatch | pass | fail | Protocol mismatch: page is HTTP but canonical points to HTTPS ("https://escritoriomp.com.br/") |
| core-canonical-loop | pass | warn | Canonical points to a different URL ("https://escritoriomp.com.br/"); verify the target does not canonicalize back to this page |
| technical-sitemap-valid | fail | pass | Sitemap has valid XML structure (2 URLs) |
| technical-404-page | fail | pass | Site has a custom 404 page with proper navigation and content |
| perf-brotli | warn | warn | Using gzip but not Brotli — Brotli gives ~15-20% better compression for text assets |
| perf-asset-cache-policy | warn | pass | All 9 static asset(s) are cacheable for at least 1h |
| perf-http2 | warn | warn | No alt-svc header found — server may not support HTTP/2 or HTTP/3 (informational) |
| perf-image-encoding | warn | warn | 1 image(s) transferred over 100KB: http://localhost:4323/images/brasilia-justica-1536.webp (193KB) |
| links-internal-present | warn | pass | Found 1 internal link(s) on this page |
| links-dead-end-pages | warn | pass | Page has 1 outgoing internal link(s) |
| links-localhost | fail | fail | Found 12 localhost/development URL reference(s) |
| images-modern-format | warn | pass | Good modern format usage (100.0% WebP/AVIF/SVG) |
| images-responsive | warn | warn | Found 1 image(s) not using responsive techniques (33.3%) |
| security-https | fail | fail | Page is served over HTTP instead of HTTPS |
| security-https-redirect | fail | fail | HTTP version is accessible without redirecting to HTTPS |
| security-hsts | warn | warn | HSTS only applies to HTTPS URLs; site is currently served over HTTP |
| security-csp | warn | pass | Content-Security-Policy is properly configured with 10 directives |
| security-x-frame-options | fail | pass | X-Frame-Options is set to DENY |
| security-x-content-type-options | fail | pass | X-Content-Type-Options is correctly set to nosniff |
| security-permissions-policy | warn | pass | Permissions-Policy header is set with 4 feature(s) |
| security-referrer-policy | warn | pass | Referrer-Policy is set to "strict-origin-when-cross-origin" (recommended) |
| security-ssl-expiry | fail | fail | Page is served over HTTP; no SSL certificate in use |
| security-ssl-protocol | fail | fail | Page is served over HTTP; TLS configuration check not applicable |
| security-coop | warn | pass | Cross-Origin-Opener-Policy is "same-origin" |
| security-csp-xss | not-measured | pass | Content-Security-Policy meaningfully restricts script execution |
| security-trusted-types | not-measured | warn | Content-Security-Policy does not set require-trusted-types-for 'script', which would block DOM-based XSS sinks. |
| crawl-sitemap-domain | warn | fail | 2 of 2 sitemap URLs (100.0%) have incorrect domain |
| crawl-canonical-redirect | warn | warn | Could not verify canonical URL: fetch failed |
| crawl-sitemap-in-robotstxt | warn | pass | robots.txt references 1 sitemap(s) |
| schema-present | warn | pass | Structured data found: JSON-LD, RDFa |
| schema-valid | warn | pass | All 1 JSON-LD script(s) contain valid JSON |
| schema-type | warn | pass | All 1 JSON-LD script(s) have @type: Organization, Person, WebSite |
| schema-required-fields | warn | warn | All required fields present, but 6 recommended field(s) missing |
| schema-organization | pass | warn | Organization schema valid with suggestions |
| schema-website-search | warn | warn | WebSite found but no SearchAction for sitelinks searchbox |
| a11y-skip-link | warn | warn | No skip link found for keyboard navigation |
| a11y-label-name-mismatch | warn | pass | Accessible names contain their visible labels |
| content-word-count | warn | warn | Thin content detected: 222 words (300+ recommended) |
| content-reading-level | warn | warn | Content may be too complex: 31.9 (Difficult (college level)) |
| content-article-links | warn | warn | Link density too high: 7.66 links per 100 words (maximum 5) |
| content-mime-type | warn | pass | Content-Type header is correctly configured |
| content-text-html-ratio | warn | fail | Very low text-to-HTML ratio: 9.8% (1746 text bytes / 17813 HTML bytes) |
| content-description-pixel-width | fail | pass | Meta description fits within SERP display: estimated 890px |
| social-og-image | fail | pass | Open Graph image tag is present with a valid URL |
| social-og-image-size | fail | pass | og:image has optimal dimensions (1200x630) |
| social-twitter-card | fail | pass | Twitter card tag is present with a valid type |
| social-og-url | fail | pass | Open Graph URL tag is present with a valid URL |
| social-og-url-canonical | warn | pass | og:url matches canonical URL |
| social-share-buttons | warn | warn | Only found share button for WhatsApp. Consider adding more platforms (Facebook, Twitter/X, LinkedIn) |
| social-profiles | warn | warn | No social media profile links found. Add links to your social profiles in header/footer |
| eeat-about-page | warn | warn | No about page link found - important for trust and E-E-A-T |
| eeat-author-byline | warn | warn | No author byline found |
| eeat-author-expertise | warn | warn | No author present - expertise check not applicable |
| eeat-citations | warn | warn | 5 external links found, but none to recognized authoritative sources |
| eeat-contact-page | warn | pass | 2 contact methods found on page |
| eeat-content-dates | warn | warn | No content date signals found |
| eeat-privacy-policy | warn | warn | No privacy policy link found - important for trust and legal compliance |
| url-http-https-duplicate | pass | warn | Canonical protocol (https://) differs from page protocol (http://) |
| mobile-horizontal-scroll | warn | warn | Found 2 potential horizontal scroll issue(s) |
| js-rendered-canonical | fail | pass | Canonical link tag is present in the rendered DOM |
| geo-llms-txt | warn | warn | No llms.txt reference found - consider adding for AI discoverability |
| geo-agents-md | warn | warn | No AGENTS.md at the usual paths |
| geo-well-known | warn | warn | No MCP or agent-card manifest under .well-known |
| geo-markdown-response | warn | warn | The origin does not serve a Markdown representation of / |
