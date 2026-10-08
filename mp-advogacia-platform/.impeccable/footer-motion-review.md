# Editorial refinement and motion: review

Date: 2026-10-04. The user approved the bounded in-chat design with “ISSO”. Footer 12 source was retrieved through Watermelon and compared with Footer 10 before implementation. Final result uses the source layout's contact/navigation hierarchy and large brand close, adapted to native React/CSS and the existing brand palette.

## Changes and motion contract

- Full upright brand lettering; real italic import removed.
- Office heading at left, concise introduction offset below at right.
- Shorter area titles; duplicate closing notes removed; equal treatment of workers and companies preserved.
- Contact integrated into a deep-blue editorial footer with real lawyer identification, section links and online region. Decorative repeated wordmark is aria-hidden.
- Rare first-visit entrance: hero ink 700ms, full name 640ms, supporting copy 480ms with 60ms stagger. Purpose: introduce the architectural visual world. Content begins visible.
- Pointer feedback: buttons 160ms, pillars 200ms, area content opacity 180ms. Keyboard selection is immediate.
- CSS transform, opacity and title clip-path; cubic-bezier(.23, 1, .32, 1). No motion dependency or continuous scroll effect. Fine-pointer hover gating and reduced-motion override ship with the implementation.

## Antislop AFTER: Hard Gate

- R-02 PASS: browser found no em dash in page copy.
- R-03 PASS: no horizontal overflow or clipped headings/body/labels at 320, 768, 1024 and 1440px; desktop and mobile captures inspected.
- R-17 PASS: no statistics introduced; page contains none.
- R-18 PASS: no testimonials or fictional profiles.
- R-23 PASS: footer, motion and visual refinement explicitly approved; existing artwork preserved.
- R-24 PASS: every section anchor resolves; three footer navigation links and back-to-top clicked successfully.
- R-25 PASS: palette keeps normal text above 4.5:1; muted text on paper is 5.78:1, and animation begins at .9 opacity for supporting copy.
- R-26 PASS: tab handlers, menu handlers, section links, tel and WhatsApp hrefs are real; no inert controls added.
- R-27 PASS: static page has no asynchronous forms or collection states; artwork dimensions preserve layout and all useful content remains HTML.
- R-28 PASS: all four native FAQ answers address region, scope, attendance and responsible lawyer.
- R-32 PASS: ArrowRight selected and focused Cível instantly; Escape closed the mobile menu and returned focus; all footer links have targets of at least 44px.
- R-33 PASS: product code and CSS written directly with apply_patch; no runtime code patching.
- R-34 PASS: no theme toggle; existing paper, royal-blue and deep-blue surfaces preserved.
- R-35 PASS: fresh build exit 0; live page navigated and local controls exercised; external contact hrefs inspected without sending a message.
- R-36 PASS: no security, compliance, performance or customer claims introduced.
- R-37 PASS: recorded direction ENERGY 2 / RHYTHM 3 / MOTION 1 preserved.
- R-38 PASS: responsible lawyer and registration retained from approved data; decorative architecture remains documented as artwork.

## Purpose Gate

- R-01 PASS: no decorative gradient or glow added; opacity/clip-path serve the one-time entrance.
- R-04 PASS: existing Lucide icons denote WhatsApp, menu state, disclosures and return navigation.
- R-06 PASS: upright Libre Baskerville connects the brand, architecture and closing signature; Source Sans 3 carries practical content.
- R-07 PASS: no background grid or blueprint added.
- R-08 PASS: no arrow appended to every action; the back-to-top arrow indicates its direction.
- R-09 PASS: no capsule badges or promotional labels.
- R-13 PASS: no shadows or glow; bands and color carry hierarchy.
- R-14 PASS: no card grid; existing pillars remain area selectors requested by the user.

## Liveliness

- Dials PASS: the restrained 2/3/1 design read is recorded in surface.md.
- Levers PASS: local architectural engraving and deliberate serif/sans roles carry identity; asymmetric introduction, pillar band, FAQ and closing signature vary the rhythm.
- Contrast PASS: gold marks contact actions; blue carries structure; paper supports reading.
- Motif PASS: Brasília architecture, seated Justice and column-shaped tabs remain the specific visual world.
- Design Read PASS: existing page/source reviewed before the proposal, and the proposal approved before implementation.

## Craftsmanship and consistency

- C-1 PASS: each visual change follows the approved design; no ornamental extras added.
- C-2 PASS: all new footer controls are working links; no newsletter/theme/language placeholder controls.
- C-3 PASS: footer groups contain only actual contact, navigation and lawyer facts.
- C-4 PASS: normal/reduced-motion states verified; keyboard changes stay immediate; four widths inspected without clipping.
- C-5 PASS: no fabricated social proof or claims.
- R-05 PASS: office, practice, FAQ and footer have distinct compositions documented in DESIGN.md.
- R-11 PASS: small contact-control radii and circular original logo remain distinct; footer is unframed.
- R-15 PASS: contact and navigation labels name their actions.
- R-16 PASS: no AI marketing language added; redundant practice notes removed.
- R-20 PASS: existing Brasília visual identity and local contact scope retained.
- R-21 PASS: deep-blue footer extends the brand's existing palette.
- R-29 PASS: palette unchanged; no new accent colors.
- R-30 PASS: registry structure adapted to project-owned content, typography and CSS; example product branding excluded.
- R-31 PASS: the large closing name acts as the firm's signature; the lone entrance introduces the engraving; other motion answers input.

## Verification evidence

- npm run build: exit 0, TypeScript/client/SSR build and static prerender completed.
- npm test: existing publication check passed, 1 test and zero failures.
- Impeccable detect src/App.tsx: exit 0, [].
- 320/768/1024/1440px: horizontal overflow false, clipped-text list empty, upright h1 font style normal.
- Pointer selected Empresarial with panel-in; decoded WhatsApp message retained Direito Empresarial.
- ArrowRight selected/focused Cível; panel animation none and pillar transition 0s.
- All four FAQ answers opened and rendered as block.
- Mobile Escape: aria-expanded false; focus returned to menu toggle.
- Reduced motion: zero document animations, h1 opacity 1, clip-path none, button transition 0s, scroll auto.
- Browser console: zero errors and warnings. No broken anchors, forms or unnamed controls.
- Measured contrast: footer supporting text 10.42:1; paper wordmark 13.78:1; contact gold 8.58:1. Muted text during the .9-opacity entrance remains 4.63:1.
- Captures: screenshots/refinement-desktop.png and screenshots/refinement-mobile.png.

Reference: https://ui.watermelon.sh/block/footer-12. The Watermelon registry source was adapted without adding dependencies. The result is ready for local review; perceived visual character remains a design judgment.
