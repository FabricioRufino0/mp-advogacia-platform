# Publicação e auditoria em Cloudflare Pages

Data: 14/10/2026, horário de Brasília. Repositório `FabricioRufino0/mp-advogacia-platform`, branch `main`.

## Publicação

O projeto Pages `mp-advogacia-platform` foi criado na conta Cloudflare já conectada ao GitHub. A integração usa o repositório público `FabricioRufino0/mp-advogacia-platform`, publica commits de `main` automaticamente e manteve o endereço permanente [https://mp-advogacia-platform.pages.dev](https://mp-advogacia-platform.pages.dev/).

| Configuração | Valor confirmado |
|---|---|
| Diretório raiz | `mp-advogacia-platform` |
| Comando | `npm run build && npm test` |
| Saída | `dist` |
| Build | Node 22.22.0, npm 10.9.2, Vite 8.3.2 |
| Código do site | `e07256923065c9706784babb0f00b219b7b3dcd3` (`fix(seo): refine privacy page metadata`) |
| Endereço publicado | `https://mp-advogacia-platform.pages.dev/` |

O deploy acionado pelo push de `e072569` concluiu e serviu a nova página de privacidade. A mesma build e a suíte foram executadas localmente antes do push. O deploy inicial e o commit aparecem no painel Cloudflare Pages. Commits futuros em `main` continuam disparando build e publicação automáticas.

O domínio solicitado `https://escritoriomp.com.br` continua sendo a origem de canonical, Open Graph, JSON-LD, sitemap e robots. O painel não permitiu associá-lo diretamente: informou que é preciso transferir a gestão DNS para a Cloudflare. A consulta DNS de 14/10/2026 retornou `O nome DNS não existe`. Não alteramos nameservers nem registros DNS: isso pode interromper outros serviços do domínio, e a transferência precisa ser autorizada e planejada pelo responsável pelo domínio. Enquanto isso, `pages.dev` serve a versão pública, mas os sinais de indexação continuam apontando para o domínio aprovado, ainda indisponível.

## Testes em produção

O comando de produção no Cloudflare executa `npm run build && npm test`. A build remota usou Node 22.22.0, npm 10.9.2 e Vite 8.3.2. Localmente, em 14/10, `npm run build` passou e `npm test` passou com **12 testes, 0 falhas**. A suíte protege metadados, página de privacidade, schema, CSP, cabeçalhos, cache, MIME, origem e 404.

| URL | HTTP | Tipo e cache observados |
|---|---:|---|
| `/` | 200 | `text/html; charset=utf-8`, CSP presente |
| `/privacidade` | 200 | `text/html; charset=utf-8`, CSP presente |
| `/nao-existe` | 404 | `text/html; charset=utf-8`, `Cache-Control: no-store` |
| `/robots.txt` | 200 | `text/plain; charset=utf-8`; declara sitemap em `escritoriomp.com.br` |
| `/sitemap.xml` | 200 | `application/xml`; inclui home e privacidade no domínio aprovado |
| `/_headers` | 404 | configuração interna não é servida como arquivo |
| HTTP em `pages.dev` | 301 | redireciona para HTTPS |

A resposta pública também incluiu CSP com hashes de scripts, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` e HSTS com `max-age=31536000`. Os assets de build e imagens seguem as regras de cache definidas no projeto. O 404 real foi confirmado com `no-store`.

No browser público, a home, troca de área e expansão de FAQ funcionaram; `/privacidade` e uma URL inexistente mostraram suas páginas próprias. Não houve avisos ou erros de console. Os scripts, imagens, fontes e folhas de estilo observados vieram da própria origem, com scripts inline cobertos pelos hashes da CSP. A consulta de cookies do navegador para a origem não encontrou cookies. O site não usa formulário, analytics, pixels ou cookies de rastreamento, conforme confirmado pelo responsável. A política explica que a hospedagem pode processar IP e dados técnicos da requisição. Os links de WhatsApp/telefone foram verificados sem iniciar contato.

## Auditoria SEO pública

SEOmator 5.1.0 auditou a URL Pages pública com renderização, Core Web Vitals de laboratório, viewport mobile e crawl limitado a 5 páginas. Foram alcançadas **2 páginas** (`/` e `/privacidade`), com **95/100**, 636 aprovações, 60 avisos, 3 falhas e 31 regras não medidas no conjunto por categoria/página. JSON bruto antes e depois dos últimos ajustes: [inicial](seomator-pagesdev-initial.json) e [final](seomator-pagesdev-final.json). Reproduza com:

```powershell
seomator audit https://mp-advogacia-platform.pages.dev/ --mobile --crawl --max-pages 5 --format json --output docs/audits/2026-10-14/seomator-pagesdev-final.json --no-save
```

A auditoria confirmou metadados e estrutura técnica; o score permaneceu 95 após três ajustes específicos na página de privacidade: título mais descritivo, description mais curta e dimensões `1200×630` declaradas para a imagem Open Graph. A suíte recebeu asserts para impedir regressão.

As falhas restantes são duas ocorrências de sitemap/canonical no domínio: o crawl partiu de `pages.dev`, enquanto ambos os URLs no sitemap e as canonical apontam corretamente para `escritoriomp.com.br`. Como esse domínio ainda não resolve e não pode ser associado a Pages sem transferir DNS, o auditor não consegue comparar os hosts. A terceira falha é o indicador heurístico de proporção texto/HTML (9,8%) da home; não acrescentamos texto artificial para elevá-lo.

Avisos a interpretar: métricas E-E-A-T e contagem de palavras refletem uma home institucional, não artigo; não acrescentamos endereço, avaliações, perfis sociais, autoria editorial, busca ou citações sem dados confirmados ou função no produto. O auditor ainda aponta uma imagem desktop de 193 KB como grande, apesar dos derivados responsivos já publicados; essa versão é a variante de maior resolução. Skip link e texto em português tiveram falsos negativos em regras automatizadas, cobertos pela inspeção funcional. Não habilitamos `includeSubDomains`/`preload` para HSTS no hostname compartilhado `pages.dev`, nem Trusted Types sem compatibilidade estabelecida com as bibliotecas; a CSP atual usa hashes e não permite `unsafe-eval` ou scripts `unsafe-inline`.

## Privacidade e limites

A página de privacidade está em `https://mp-advogacia-platform.pages.dev/privacidade`, publicada e incluída no sitemap. A auditoria de cookies ocorreu em uma sessão limpa do browser; ela não é afirmação de ausência de logs operacionais do provedor. A Cloudflare também acrescentou cabeçalhos de relatório de erros de rede, e a página de privacidade informa o processamento técnico da hospedagem. O contato confirmado para solicitações de titulares é WhatsApp `+55 61 98668-4723`.

Ainda não foram comprovados DNS/TLS/redirects, Search Console, indexação ou métricas de campo no domínio próprio. A validação de HTTPS e redirect refere-se ao hostname `pages.dev`. `INP` de campo não é medido pelo crawler de laboratório. A nota SEO é um diagnóstico automatizado desta publicação temporária, não uma garantia de posicionamento nem aprovação do domínio final.
