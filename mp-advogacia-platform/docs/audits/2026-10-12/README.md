# Auditoria SEO e testes de publicação

Data local: 12/10/2026, America/Sao_Paulo. Código auditado: `f7b5f36533929ee4dd8b08e653997c47c0aca24c`.

O SEOmator 5.1.0 atribuiu **88/100 (B)** à build local: **271 aprovações, 44 avisos, 16 falhas e 34 regras não medidas**. A execução terminou com código 0. A nota é um diagnóstico automatizado de localhost, não uma aprovação do deploy público nem uma medida de posicionamento no Google.

Este é o registro anterior às correções. O [registro posterior](remediation/README.md) contém o domínio confirmado, as alterações implementadas e a situação atual das pendências.

## Ambiente e reprodução

Node 24.21.0, npm 11.19.0, React 19, Vite 8 e TypeScript. O projeto é uma home institucional pré-renderizada, sem formulário, blog ou busca interna. Não foi informado domínio público. Por pedido explícito de auditoria no código, foi usada a build local, apesar da preferência da skill e do vault por auditar produção.

```powershell
npm run build
npm test
npm run preview
# Em outro terminal, na pasta mp-advogacia-platform:
seomator audit http://localhost:4323/ --mobile --format llm --no-save
seomator audit http://localhost:4323/ --mobile --format json --output docs/audits/2026-10-12/seomator-local.json --no-save
```

`seomator.toml` foi criado por `seomator init -y --name 'Marques Pimenta'`. Não foi usado `--no-cwv`: renderização, console, recursos e paridade mobile permaneceram habilitados. Não foi usado crawl, pois a navegação conhecida da home consiste em âncoras; regras de grafo entre páginas permanecem fora da cobertura. As duas execuções são capturas independentes da mesma build, não comparação antes/depois.

Artefatos: [XML para agentes](seomator-local.llm.xml), [JSON completo](seomator-local.json) e [triagem de todos os avisos/falhas](triagem.md). O timestamp bruto usa UTC e pode indicar 13/10; a data desta nota usa o fuso do usuário.

`seomator self doctor` foi tentado, ficou em “Checking system setup...” e foi interrompido. Portanto o diagnóstico não passou. A instalação e a renderização foram comprovadas pelos comandos de auditoria, versão do pacote e resultados do browser; isso não equivale a um resultado verde do doctor.

## Achados confirmados e prioridades

| Prioridade | Achado | Evidência e próximo passo |
|---|---|---|
| Antes de publicar | Falta configurar `SITE_URL` real | Sem a variável, canonical, og:url, og:image absoluto e sitemap são omitidos deliberadamente. Build de teste com `https://example.test` gerou os quatro corretamente; esse domínio é apenas fixture e não foi persistido. |
| Antes de publicar | Resposta 404 precisa ser validada no host | Vite preview devolve a home com 200 para rota inexistente e para `/sitemap.xml` ausente. O aviso de XML inválido é consequência desse fallback, não um sitemap XML existente e malformado. |
| Antes de publicar | HTTPS, cabeçalhos e cache dependem do host | HTTP local não comprova TLS, HSTS, CSP, proteção de frame, nosniff, Referrer-Policy, Permissions-Policy, COOP, Brotli ou cache de produção. Conferir no domínio final e definir políticas adequadas ao site. |
| Próxima correção de código | Nome acessível da marca omite “Advocacia” | Texto visível “Marques Pimenta / Advocacia”; aria-label “Marques Pimenta, início”. Incluir o texto visível no nome acessível para controle por voz. |
| Próxima correção de metadados | Twitter card ausente | `index.html` não declara `twitter:card`. Adicionar metadados coerentes com a imagem e o domínio aprovados. |
| Revisão editorial | Description pode ser truncada | 145 caracteres passam na regra por tamanho, mas a estimativa do CLI é 1029 px. Revisar concisão; a estimativa não garante o snippet exibido pelo buscador. |
| Melhoria opcional | JSON-LD ausente | Não há script de dados estruturados. Avaliar entidade do escritório e advogado usando apenas fatos confirmados; não inventar endereço físico, avaliações ou perfis. O indicador RDFa do CLI não prova Schema.org completo. |
| Melhoria opcional | Imagens e transferência | `justica-colunata.webp` ~484 KB, hero ~244 KB e marca ~102 KB. Avaliar derivados responsivos e compressão preservando a arte; não lazy-load a imagem principal. |
| Conteúdo a confirmar | Privacidade e perfis | Sem página de privacidade ou perfis sociais confirmados. Confirmar o tratamento de dados e os dados reais antes de escrever política ou inserir links. O aviso não é parecer jurídico. |

Nenhuma correção de produto foi aplicada nesta rodada de auditoria. Os resultados e propostas são registrados para uma próxima implementação; a nota bruta não foi “melhorada” por inventar conteúdo, domínio ou dados estruturados.

## Avisos que exigem interpretação

- `links-localhost`: as 11 referências são âncoras resolvidas pelo auditor contra localhost. O HTML fonte usa `href="#..."`, não URLs de desenvolvimento publicadas.
- `a11y-skip-link`: falso positivo. Existe `.skip-link` para `#conteudo`; alvo, foco e navegação foram verificados no browser.
- `mobile-horizontal-scroll`: falso positivo nas larguras verificadas. O CLI usa o atributo intrínseco `width="1536"`; CSS aplica `max-width: 100%` e dimensiona a imagem. `scrollWidth === innerWidth` em 320, 390, 820, 821 e 1440 px nesta rodada; a rodada anterior também cobriu 360, 768, 1024 e 1920 px.
- Ausência de links entre páginas: a home usa navegação por seções. Não criar páginas artificiais para satisfazer uma heurística de grafo.
- Byline, datas, citações, densidade de links e quantidade de palavras: várias regras assumem artigo editorial. A home já identifica advogado e OAB. Não aumentar texto apenas para atingir uma contagem.
- Readability: o score do CLI deve ser tratado como heurística; não é uma avaliação validada de linguagem jurídica em português.
- “Share buttons”: o WhatsApp é contato, não compartilhamento. Não adicionar botões sociais sem necessidade do produto.
- `llms.txt`, Markdown, AGENTS público e manifests MCP: são sugestões opcionais de descoberta para agentes, não requisitos comprovados de indexação. Não publicar instruções internas do projeto.

## Testes e limites

| Verificação | Resultado |
|---|---|
| Build normal, TypeScript e pré-renderização | PASS |
| `npm test` | PASS, 1 teste de publicação, 0 falhas |
| Build com `SITE_URL=https://example.test` | PASS: canonical, og:url/og:image, XML sitemap e diretiva robots; build normal restaurada ao fim |
| HTML importante sem depender de JS | PASS: título, identificação, primeira área e contato pré-renderizados |
| Console e recursos na auditoria | PASS pelas regras `js-console-errors` e `js-failed-requests` |
| Paridade mobile de conteúdo, título, canonical, schema e links | PASS no CLI; igualdade de canonical/schema ausentes não comprova presença desses metadados |
| Browser: skip link, nome da marca e overflow | Verificado em cinco larguras; marca confirma aviso, skip e overflow contradizem heurísticas |
| `git diff --check` | PASS |
| Lint | Não existe comando configurado; não executado |
| Deploy público, Search Console e indexação real | Não verificados |
| INP de campo | Não medido; requer CrUX/RUM ou usuários reais |

Na captura JSON, LCP 128 ms, CLS 0.008, FCP 128 ms e TTFB 5 ms. São medições de laboratório em localhost, sem representar rede, cache, dispositivo ou usuários de produção. As 34 regras não medidas permanecem explicitamente fora da aprovação.

A rodada funcional anterior, no mesmo commit, testou três áreas, quatro FAQs, menu mobile, Escape, setas/Home/End, contato por área e movimento reduzido. Corrigiu contraste de foco dos CTAs: áreas 13.78:1 e rodapé 10.10:1. URLs de contato foram conferidas sem enviar mensagens ou iniciar chamadas.

## Skill e marketplace local

`seo-audit@codex-local-skills` 5.1.0 foi instalado e habilitado via `codex plugin add seo-audit@codex-local-skills --json`. `codex plugin list --marketplace codex-local-skills --json` confirmou `installed=true`, `enabled=true` e preservou os 11 plugins anteriores.

- Fonte: `C:\Users\fabri\.codex\skills\seo-audit`.
- Wrapper: `C:\Users\fabri\.codex\plugins\codex-local-skills\seo-audit`.
- Marketplace: `C:\Users\fabri\.agents\plugins\marketplace.json`.
- Cache: `C:\Users\fabri\.codex\plugins\cache\codex-local-skills\seo-audit\5.1.0`.
- `SKILL.md`, `README.md` e `references/rules.md` têm SHA256 iguais entre fonte, wrapper e cache. Skill original preservada; sem MCP adicional.
- Exibição no seletor visual não verificada; se necessário, reabrir o app. Atualizações da origem exigem sincronizar a cópia do wrapper.

Formato verificado na [documentação oficial de plugins](https://developers.openai.com/plugins/build/plugins). Fonte MIT: [SEO Audit Skill](https://github.com/seo-skills/seo-audit-skill).

## Segundo Cérebro consultado

Roteador de Skills do Codex, Índice Hermes, VibeCoding - MOC, Testes, SEO e Metadados, Mapa - Projetos e seção Auditoria SEO e GEO do catálogo. Aplicado o protocolo de separar fatos, hipóteses e pendências, manter dados específicos na nota do projeto e registrar conhecimento reutilizável nas notas de método. A orientação de validar produção permanece pendente até existir um domínio confirmado.
