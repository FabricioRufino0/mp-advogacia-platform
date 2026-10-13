---
name: Marques Pimenta
description: Engraved architectural identity in blue ink, antique gold and near-white paper.
colors:
  blue: "#203b7e"
  deep-blue: "#13294f"
  paper: "#fafaf7"
  white: "#ffffff"
  gold: "#e2c48c"
  gold-ink: "#8f692d"
  gold-hover: "#f0d6a6"
  text: "#253754"
  muted: "#536382"
  light-text: "#d1dcef"
  line: "#d5dbe4"
  dark-line: "#536a91"
typography:
  display:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "68px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0"
  title:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "33px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  control: "3px"
  pillar: "0"
  brand-image: "50%"
spacing:
  tight: "8px"
  compact: "10px"
  related: "16px"
  group: "20px"
  block: "24px"
  heading: "32px"
  section-small: "40px"
  column-medium: "48px"
  section-large: "72px"
  column-large: "88px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.deep-blue}"
  button-header:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep-blue}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
  button-outline-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep-blue}"
  navigation:
    textColor: "{colors.text}"
  area-tab:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.pillar}"
    padding: "0"
  area-tab-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
  faq-disclosure:
    textColor: "{colors.blue}"
    padding: "20px 0"
---

## Current composition update, 2026-10-10

The homepage uses an editorial composition in blue, antique gold and paper. Practice selection is a vertical list of large serif labels beside a paper reading panel on desktop. At 820px and below the controls become three horizontal tracks with sans-serif labels. A gold selected surface moves with a spring adapted from [Watermelon Continuous Tabs](https://ui.watermelon.sh/animated-components/continuous-tabs); source was retrieved through its MCP. Tab orientation follows the layout, and arrow keys, Home and End preserve focus and immediate selection.

Buttons have a sliding deep-blue fill and directional arrow, with keyboard focus and reduced-motion alternatives. The header is sticky. FAQ uses two columns on desktop and stacks below 820px. The hero engraving settles once after the logo intro; the footer signature reveals once when it enters view. Typography is self-hosted through Fontsource packages for Marcellus and DM Sans.

References reviewed: [21st engraved illustration template](https://21st.dev/@kedhareswer/templates/engraved-illustration-landing-page-template), [Skiper catalogue](https://skiper-ui.com/components?source=free), and [Motion accessibility](https://motion.dev/docs/react-accessibility). 21st and Skiper were reference research; no source or paid assets from those catalogues were copied.

# Design System: Marques Pimenta

## Overview

**Creative North Star: "Engraved Brasilia"**

The engraved architectural world ties Marques Pimenta to Brasilia through blue ink, antique gold and near-white paper. Marcellus gives the brand and headings a measured literary voice; DM Sans keeps practical information and controls direct.

The built page varies a panoramic hero, asymmetrical office introduction, blue area-selector band with paper reading panel, and generous FAQ ledger. Its expression is restrained (ENERGY 2 / RHYTHM 4 / MOTION 2): one engraving carries the opening, architectural texture anchors the blue band, and paper sections prioritize reading. Motion acknowledges interaction. Taste settings are DESIGN_VARIANCE 5 / MOTION_INTENSITY 3 / VISUAL_DENSITY 4.

**Key Characteristics:**

- Blue ink and antique gold on near-white paper.
- Serif brand and headings with sans-serif body and controls.
- Flat bands, fine dividers and three text-based practice tabs.
- Paper-clear reading surfaces and an accessible FAQ ledger with restrained motion.
- An engraved interpretation of Brasilia's seated Justice statue with a sword across her lap, explicitly requested by the user, anchors the left foreground of the hero.

## Colors

Blue ink gives the page its structure; gold is a warm contact accent against the quiet paper surface. Frontmatter values are normative and map to the stylesheet's custom properties, except gold-hover, which is the implemented literal hover color.

### Primary

- **Royal Blue Ink:** brand, hero heading, section headings and the area-selector band.
- **Deep Blue Ink:** contact band, hero lead, contact button text and inactive-tab hover.
- **Light Blue Text:** supporting copy on blue bands.
- **Blue Rule:** fine dividers on the area-selector band.

### Secondary

- **Antique Gold:** primary contact actions, outline actions and pillar initials.
- **Gold Ink:** focus outlines on light surfaces, selected pillar initials and navigation hover rule.
- **Soft Gold Hover:** primary and header contact hover background.

### Neutral

- **Near-White Paper:** page canvas and selected tabs.
- **White:** lawyer identification band.
- **Body Ink:** default body and navigation color.
- **Muted Ink:** supporting copy on light surfaces.
- **Paper Rule:** light-surface section and FAQ dividers.

**The Contact Gold Rule.** Gold marks contact actions, focus on blue surfaces and the selected tab's surface; blue remains the structural ink.

## Typography

Marcellus is self-hosted and backed by Georgia and serif; DM Sans is self-hosted and backed by Arial and sans-serif. Headings are regular-weight and balanced. The entire brand name is upright. Hero tracking is .035em on desktop and .025em on mobile; the closing wordmark uses -0.025em.

The hero display scales from 38px to 54px on desktop, uses 38px on tablet and 27px to 38px on mobile (25px below 360px). Section headings share a 44px desktop, 34px tablet and 30px mobile scale with 1.25 line height and -0.02em tracking. Practice-panel titles use 36px desktop and 28px mobile. Reading copy is 17px desktop and 16px mobile, with 1.65 line height and a 65ch maximum. Supporting section prose is 17px desktop and 16px mobile. Body text uses pretty wrapping; the main title retains balanced wrapping. Loaded weights are Marcellus 400 normal and DM Sans 400 and 600; navigation, buttons and FAQ questions use 600.

The header wordmark is 24px desktop, 18px tablet, 19px mobile and 16px below 360px, paired with the factual descriptor “Advocacia” in small uppercase sans-serif. The header uses an 88px desktop and 76px mobile height; its mobile menu starts below the actual header boundary. Contact is an outlined control. Office, practice and FAQ desktop columns share the .85fr / 1.4fr grid and 48px gap; office stacks below 820px. Lawyer identification is a vertically aligned group.

**The Two Voices Rule.** Use Marcellus for brand and headings, DM Sans for body and operational controls. Mobile area tabs switch to DM Sans for compact scanning.

## Layout

The desktop content frame caps at (1120px) with total outer subtraction (80px). The subtraction becomes (64px) at (1100px), (40px) at (820px), and (32px) below (359px). Section backgrounds span the viewport; the shared frame aligns their contents.

The office introduction spans the 1120px content frame in two asymmetric columns: the statement and area link sit left; copy and lawyer identification align to the shared right column. At 820px and below it stacks with a horizontal divider. Area selection pairs a vertical selector with the paper reading panel on desktop, becoming three equal tabs above the panel at 820px. FAQ pairs its heading with the question ledger across the 1120px frame; below 820px it stacks. Opening a question gives its row a paper surface and a 1px antique-gold rule. Footer contact changes from horizontal to stacked at the small-mobile breakpoint; footer information adapts from three columns to two, with lawyer identification spanning the first row.

The hero centers upright, uppercase text over the panoramic engraving. The headline reads: Antes de decidir, entenda seus direitos. The image keeps its original aspect ratio and anchors to the bottom; minimum height is 840px, rising to 960px at 1600px. At 820px and below the text spans the available width and the panorama sits beneath it. Bottom padding of 280px on tablet and 210px on mobile protects the engraving from the text.

Desktop sections use varied vertical spacing: 100px for the office introduction, 72px/80px for areas, 96px for FAQ and 64px/24px for the footer. Mobile sections use 40px to 56px. The header is 88px on desktop and 76px on tablet/mobile. It is sticky and reserves its height in page flow. Menu navigation unfolds immediately below it on tablet/mobile.

## Elevation & Depth

Depth is conveyed by alternating paper, royal-blue and deep-blue bands, fine borders and the illustrated architecture. There are no box shadows. The selected tab uses a gold surface; inactive tabs remain transparent against the blue band.

**The Flat Band Rule.** Use surface color and fine dividers to separate sections. The implemented system has no box-shadow vocabulary.

## Shapes

Controls have lightly softened corners. The circular client-supplied brand artwork is preserved. The blue practice section uses architectural engraving as atmosphere; white reading surfaces have no decorative photo. FAQ rows remain unframed.

## Components

### Contact Buttons

Firm, compact contact actions combine an outlined Lucide message icon (18px) and a sentence-case label. Primary buttons use gold with deep-blue text, a 48px minimum height and 10px icon gap. Header contact uses a 44px minimum target and 14px text; below 821px it becomes a 44px icon button with a visually hidden accessible label. Outline contact uses a gold border on blue and swaps colors immediately on hover. Primary backgrounds transition over 200ms. Pointer presses give 160ms feedback at scale .98; focus-visible activation retains the static control. Focus uses a 3px outline with 5px offset, gold ink on light surfaces and gold on dark surfaces.

### Navigation

Header grouping adapts [Watermelon Navigation 1](https://ui.watermelon.sh/block/navigation-1), with the compact mobile action group informed by [Navigation 2](https://ui.watermelon.sh/block/navigation-2). The brand and three navigation links form the desktop left group; WhatsApp is separated at the right. Links use 14px text and 44px minimum targets, with subtle paper-blue hover backgrounds over 200ms and immediate keyboard focus. Below 821px, WhatsApp and menu occupy an action group with 44px square targets and an 8px gap. Navigation becomes a paper-colored dropdown; Escape closes it and returns focus to the toggle. Below 360px, the brand uses 16px text and bounded wrapping to leave room for both actions. Existing React, CSS and Lucide provide the implementation.

### Area Tabs

Desktop controls form a vertical list, using 28px serif labels and 14px descriptions. On tablet, labels use 18px sans-serif; mobile uses 14px labels and 12px descriptions. The selected gold surface uses a shared Motion layoutId with spring stiffness 380, damping 30 and mass 0.9. Reduced motion and keyboard selection are immediate. Directional arrows rotate to indicate the active panel.

### Area Panel

The paper panel has a 36px serif title (28px on mobile), 17px copy (16px on mobile), topic list and contact link. Pointer selection uses a brief opacity and 14px horizontal transition; keyboard and reduced-motion selection is immediate. Contact messages retain the selected area.

### Authored Motion

The hero illustration reveals its bottom edge through a 6% clip over 1.2 seconds; copy settles 12px over 800ms. Both begin from visible content. The footer signature reveals once on entering view. Hover and tap feedback uses the installed Motion package; button fills and arrows use CSS transitions. Reduced motion removes transforms, clipping and CSS transitions, while keeping content readable and interaction states distinct.

### Editorial Footer

The closing composition adapts Watermelon's [Footer 12](https://ui.watermelon.sh/block/footer-12), whose registry source was retrieved before implementation. Its contact/navigation groups and large closing brand signature are translated into the site's serif typography and deep-blue palette. Real contact actions replace the example newsletter. Lawyer identification, navigation and online region form the information row. The signature is decorative and hidden from assistive technology to avoid repeating the brand; the final row carries copyright, brand clarification and back-to-top navigation. The implementation uses native React, CSS and the installed Lucide icons.

### FAQ Disclosures

Accessible React buttons with `aria-expanded` form a flat question ledger; Motion opens the answer panel with a brief height and opacity transition. Summary text uses blue ink, generous vertical padding and a Lucide chevron (20px); the chevron rotates when open over 200ms. The open row receives a paper surface and 1px antique-gold left rule; answer copy uses muted ink and an inset edge. Focus remains visible, and reduced motion removes the transition.

### Browser Surfaces

Selection uses gold with deep-blue text. Scrollbars use blue on paper. The skip link becomes visible when focused. Phone and exploration links reveal underlines on hover with an intentional offset.

## Do's and Don'ts

### Do:

- Do use the existing blue, gold and paper roles for new elements.
- Do keep headings in Marcellus and readable copy and controls in DM Sans.
- Do preserve visible focus, keyboard area selection and reduced-motion behavior.
- Do keep the three text tabs readable in equal-width mobile tracks.
- Do reserve illustration for the hero and blue architectural section; keep white reading areas clear.

### Don't:

- Don't introduce shadows as a substitute for the current flat band structure.
- Don't add card grids, inputs or form styles to this record: none are implemented.
- Don't use fluid reading text as decoration; only the closing signature scales within bounded sizes.

## Hero restored, 2026-10-10

The user chose to restore the engraving integrated across the full background. The hero now centers the headline, supporting text, gold contact action and discreet practice-area link above the panorama. Marcellus and DM Sans remain. The image retains its original aspect ratio and anchors to the bottom, with reserved space below the copy on mobile. The split image panel and paired rectangular actions have been removed.

## Uniform typography, 2026-10-11

Current authority: Marcellus 400 for the hero, section titles, practice headings, brand and signature; DM Sans 400 for prose and supporting text, 600 for navigation, buttons, tabs and disclosure questions. All fonts are self-hosted. The hero uses uppercase upright lettering, 38–54px desktop, 38px tablet and 27–38px mobile (25px below 360px), with positive tracking. The former italic treatment is removed. Colors, imagery, layout and content are preserved.

## SEO publication, 2026-10-12

The hero uses 640/960/1536px WebP derivatives selected by srcset, with a matching responsive preload. Header and intro use 96px and 440px WebP brand derivatives; the decorative practice background uses a 640px derivative at its established .12 opacity. Original artwork remains in the repository. The sharing preview contains the full panorama on paper at 1200×630.

Privacy and 404 reuse blue headings, paper surfaces, self-hosted fonts and visible focus. Privacy is a calm reading column with section headings and a specific WhatsApp contact action; 404 provides home, practice-area and contact navigation. The footer adds a factual privacy link. No new brand direction or ornamental assets were introduced.
