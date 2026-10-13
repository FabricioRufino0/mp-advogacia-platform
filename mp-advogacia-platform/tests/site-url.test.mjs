import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveSiteOrigin } from '../scripts/site-url.mjs';

test('publication origin normalizes HTTPS roots', () => {
  assert.equal(resolveSiteOrigin('https://escritoriomp.com.br/'), 'https://escritoriomp.com.br');
  assert.equal(resolveSiteOrigin('https://example.test'), 'https://example.test');
});

test('publication origin rejects credentials, development hosts and non-root URLs', () => {
  for (const origin of ['http://escritoriomp.com.br', 'https://user:secret@escritoriomp.com.br', 'https://localhost', 'https://127.0.0.1', 'https://[::1]', 'https://example.test:4323', 'https://example.test/path', 'https://example.test?query=1', 'https://example.test/#fragment']) {
    assert.throws(() => resolveSiteOrigin(origin), /SITE_URL/, origin);
  }
});
