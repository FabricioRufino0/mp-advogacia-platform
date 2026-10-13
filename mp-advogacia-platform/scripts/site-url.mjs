export function resolveSiteOrigin(value) {
  let url;
  try { url = new URL(value); } catch { throw new Error('SITE_URL must be a public HTTPS origin.'); }
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.pathname !== '/' || url.search || url.hash || !url.hostname.includes('.') || url.hostname.endsWith('.localhost') || /^(?:\d+\.){3}\d+$/.test(url.hostname)) {
    throw new Error('SITE_URL must be a public HTTPS origin without credentials, port, path, query or fragment.');
  }
  return url.origin;
}
