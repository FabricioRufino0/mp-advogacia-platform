# Marques Pimenta

Site institucional de pagina unica em React 19, Vite 8 e TypeScript. Inspirado na composicao do Engraved Illustration Landing Page Template, com azul, dourado e gravura original de Brasilia. Areas em pilares selecionaveis, FAQ expansivel e WhatsApp com a area escolhida na mensagem. Sem formulario.

## Desenvolvimento

Node.js 22.12 ou superior. `.nvmrc` indica a linha 22.

```sh
npm ci
npm run dev
```

Servidor local: http://localhost:4322 . `npm run build` verifica tipos, compila os assets e pre-renderiza a home com React. `npm test` verifica o resultado de `dist/`; execute depois do build. `npm run preview` serve a build em http://localhost:4323 .

## Publicacao

No Cloudflare Pages, usar `npm run build`, diretorio `dist` e Node >=22.12. A producao e estatica, sem servidor Node. O dominio publico ainda nao foi confirmado: definir `SITE_URL` com a origem HTTPS real no ambiente de build para emitir canonical, Open Graph absoluto e `sitemap.xml`. Sem essa variavel, o build deixa esses campos ausentes e nao inventa um dominio.

## Conteudo e identidade

- `src/data/site.ts`: contato, advogado responsavel, areas e FAQ.
- `src/App.tsx`: pagina e interacoes.
- `src/styles/global.css`: tokens, estilos e breakpoints.
- `scripts/prerender.mjs`: HTML estatico e metadados de publicacao.
- `PRODUCT.md`, `DESIGN.md` e `.impeccable/surface.md`: briefing e direcao visual.

Marques Pimenta e o nome da marca. Halson Hugo Pimenta, OAB/DF 69.858, e o advogado responsavel confirmado pelo cliente. Atendimento online em Brasilia e no Distrito Federal. A marca e as imagens originais do cliente nao sao assets livres. As fotos antigas permanecem no repositorio, mas nao sao usadas nem copiadas para a build publicada.

## Referencias e assets

Referencia aprovada: https://21st.dev/@kedhareswer/templates/engraved-illustration-landing-page-template . O endpoint de instalacao retornou Component not found; a implementacao adapta sua composicao visual, com codigo e ilustracao proprios, sem incorporar o SVG ou o conteudo ficticio do demo.

`public/images/brasilia-justica.webp` foi editada com o image_gen integrado para incluir uma interpretacao da Justica de Brasilia, sentada com a espada no colo. A gravura foi exportada para WebP (1536 x 1024). O prompt e a origem constam em `.impeccable/assets.md` e no arquivo JSON junto ao asset. As versoes anteriores foram preservadas. `marca.jpg` e o asset pre-existente fornecido pelo cliente. Marcellus 400 e DM Sans 400/600 sao servidas localmente via Fontsource.

O rodape adapta o [Footer 12 do Watermelon](https://ui.watermelon.sh/block/footer-12), com o codigo do registry consultado antes da implementacao. O fechamento editorial usa os contatos e a identificacao reais do escritorio. Motion e CSS concentram a entrada no topo e respostas curtas nos controles; teclado e movimento reduzido preservam os estados acessiveis.

## Auditoria e testes

O [registro de 12/10/2026](docs/audits/2026-10-12/README.md) inclui auditoria SEOmator 5.1.0 com renderizacao e paridade mobile, artefatos brutos, triagem de falsos positivos, testes de SITE_URL e pendencias antes da publicacao. A nota de localhost nao comprova o comportamento do dominio publico.
