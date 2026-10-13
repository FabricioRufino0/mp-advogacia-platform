# Correções da auditoria SEO

Data local: 12/10/2026. Base: `cbe3d86121e9970fbe9a33ee615fea25937b9c72`. O usuário autorizou corrigir os achados confirmados, confirmou `https://escritoriomp.com.br`, ausência de analytics/pixels/cookies de rastreamento e WhatsApp (61) 98668-4723 para solicitações de privacidade.

## Resultado

SEOmator 5.1.0 na mesma URL HTTP local, com renderização e mobile: **88 → 92/100**, **16 → 8 falhas**, **44 → 29 avisos**. Resultado final: **296 PASS, 29 avisos, 8 falhas e 32 não medidos**. O relatório contém 365 resultados; não presumimos cobertura de todas as regras anunciadas no catálogo. [JSON posterior](seomator-local.json) e [comparação por regra](comparacao.md) preservam a evidência.

As falhas restantes são seis regras de HTTP/TLS/domínio de produção, a detecção de localhost em links relativos e a heurística de proporção texto/HTML. Elas não foram ocultadas por configuração do auditor. O DNS de `escritoriomp.com.br` retornou nome inexistente nesta máquina; o site público não foi validado.

## Alterações

- Origem confirmada em `src/data/site.ts`, canonical, sitemap com home/privacidade, robots e URLs absolutas de compartilhamento. `SITE_URL` opcional normalizado e validado, recusando credenciais, portas, hosts locais e componentes de caminho/query/fragmento.
- Twitter card, Open Graph com preview 1200×630 e texto alternativo. Description reduzida para a largura estimada de 890 px, aprovada pelo auditor. Não há garantia sobre o snippet escolhido pelo buscador.
- JSON-LD Organization, Person e WebSite com marca, advogado, OAB, telefone e região já aprovados. Não foram inventados endereço físico, reviews, avaliações, perfis ou relações societárias.
- Nome acessível da marca inclui “Advocacia”; separação textual entre nome e descritor evita sua concatenação no DOM. A regra de nome acessível passou.
- Privacidade estática em `/privacidade`, com ausência de rastreamento confirmada, limites do contato externo, identificação do responsável, canal para pedidos e orientação da ANPD. Funciona sem JavaScript; está no rodapé e sitemap. Não promete prazos de retenção desconhecidos nem certificação de conformidade.
- 404 estática com recuperação para home, áreas e WhatsApp. Cloudflare Pages usa esse arquivo para evitar fallback SPA. A prévia também devolve status 404 real, oculta `_headers`/`_redirects`, mantém UTF-8 e evita cache das respostas de erro.
- `_headers` com CSP, hashes SHA256 dos scripts inline, nosniff, DENY, Referrer-Policy, Permissions-Policy, COOP e HSTS limitado à origem. `style-src 'unsafe-inline'` permanece necessário para os estilos de Motion; `script-src` não permite unsafe-inline nem unsafe-eval.
- Cache apenas para caminhos exatos existentes na build: assets versionados um ano/immutable; imagens um dia. URLs inexistentes não recebem cache prolongado. Uma falha detectada em revisão foi reproduzida, corrigida e protegida por teste HTTP.
- `@types/node` foi adicionado somente ao desenvolvimento para conferir os tipos do código de prévia; nenhum pacote de processamento de imagem ou serviço remoto foi adicionado ao runtime do site.

## Imagens

Derivados de formato/tamanho feitos localmente com sharp, sem criação de arte. Originais preservados e hashes conferidos. O arquivo de fundo intermediário de 1122 px foi descartado antes do commit; a build exclui originais antigos e registros de geração que não são necessários para servir o site.

| Uso | Original | Derivado publicado |
|---|---:|---:|
| Hero mobile, 640×427 | 249.432 B | 34.204 B, -86,3% |
| Hero tablet, 960×640 | 249.432 B | 72.314 B, -71% |
| Hero desktop, 1536×1024 | 249.432 B | 197.852 B, -20,7% |
| Marca header, 96×96 | 104.811 B | 2.796 B, -97,3% |
| Marca intro, 440×440 | 104.811 B | 20.112 B, -80,8% |
| Fundo decorativo, 640×800 | 495.670 B | 79.492 B, -84% |
| Compartilhamento, 1200×630 | Arte existente | 71.410 B, panorama inteiro com margem de papel |

Preload e imagem do hero compartilham srcset/sizes. Contexto mobile novo, 390 px e DPR 1, escolheu o derivado de 640 px. O desktop pode carregar a versão maior; não reduzimos sua resolução apenas para ficar abaixo do limite arbitrário de 100 KB do auditor. Capturas e comparação na opacidade decorativa preservaram composição e legibilidade.

## Verificação

- PASS: build normal, TypeScript, Vite e pré-renderização.
- PASS: 12 testes, incluindo metadados, schema, CSP/hash, privacidade, 404/cache, MIME e origem inválida.
- PASS: build e mesma suíte com `SITE_URL=https://example.test/`; origem de fixture e build normal restauradas ao fim.
- PASS: teste por mutação da condição HTTPS falhou; restauração fez a suíte passar.
- PASS: testes escritos antes de metadados/schema/404/privacidade e da correção de MIME/cache mostraram as falhas correspondentes.
- PASS: `npm audit`, 0 vulnerabilidades conhecidas reportadas.
- PASS: Playwright, três áreas e contatos, FAQ, teclado, menu mobile/Escape, movimento reduzido, carregamento de fontes/imagens e CSP.
- PASS: 320, 390, 820, 821, 1440 e 1920 px sem overflow; rodada anterior cobre também 360, 768 e 1024 px.
- PASS: home → privacidade → home; mensagem de WhatsApp específica de privacidade; 404 com no-store e recuperação. Home e privacidade sem avisos/erros de console ou respostas HTTP inesperadas. Navegação intencional a URL inexistente produz o 404 esperado.
- PASS: capturas mobile de home, privacidade e 404 inspecionadas, em `.playwright-mcp/seo-after-*.png` local, fora do Git.
- PASS: revisão independente e `git diff --check`.
- Limite: INP de campo, Search Console, indexação, DNS, TLS, redirects e respostas do host público ainda não comprovados. LCP 170 ms/CLS 0.008 da captura local não representam usuários reais.

## Avisos restantes e decisões

- Canonical/sitemap HTTPS no domínio confirmado diferem do localhost auditado: configuração correta para produção; validar quando DNS estiver ativo.
- Cache/Brotli/HTTP2/TLS reais dependem do host. Cloudflare Pages possui compressão automática; não simulamos certificado ou ativação de redirecionamentos da conta.
- Privacidade em português e skip link: presentes e testados, mas heurísticas do CLI não os reconhecem. Não renomeamos navegação para inglês para elevar a nota.
- A regra de imagem responsiva ainda aponta o hero, embora detecte srcset/sizes. Seleção real foi comprovada no navegador.
- Conteúdo/HTML, byline, datas, citações editoriais e quantidade de palavras são heurísticas; não remover schema útil nem acrescentar prosa artificial para subir nota.
- Schema recomenda endereço, perfis, foto do advogado e busca. Não existem dados aprovados para esses campos ou busca no produto; não adicioná-los.
- Trusted Types não foi imposto nesta rodada: não há entradas dinâmicas/HTML externo, e a compatibilidade das bibliotecas não foi estabelecida. CSP com scripts próprios/hash e sem eval está efetiva.
- llms.txt, Markdown, AGENTS público e manifests MCP não são requisitos do site. Não publicar instruções internas ou interfaces inexistentes.

## Pendências de publicação

1. Registrar/configurar o domínio e DNS na conta responsável; cadastrar `escritoriomp.com.br` em Pages.
2. Confirmar certificado HTTPS e redirecionamento HTTP → HTTPS; definir uma origem preferencial para eventual www/pages.dev.
3. Publicar a build e repetir auditoria/crawl no domínio real, validando home, privacidade, 404, cache e headers.
4. Verificar propriedade e enviar sitemap no Search Console, se desejado; monitorar dados de campo.

Não houve deployment nesta rodada. As configurações estão no repositório, e as ações da conta/DNS continuam externas ao código.

## Fontes

[Headers Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/headers/), [rotas/404 e compressão](https://developers.cloudflare.com/pages/configuration/serving-pages/), [Vite appType](https://vite.dev/config/shared-options.html#apptype), [dados estruturados Google](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [Organization Google](https://developers.google.com/search/docs/appearance/structured-data/organization) e [direitos dos titulares ANPD](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares).
