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
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "76px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0"
  title:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "33px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "Source Sans 3, Arial, sans-serif"
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

## Current composition update, 2026-10-04

The user rejected the middle architectural portrait and illustrated pillars. Both are removed from the page. The office introduction is a compact text column capped at 880px, with inline lawyer identification on desktop and stacked identification on mobile. Areas adapt [Watermelon Tabs 1](https://ui.watermelon.sh/components/tabs): a segmented list with 44px minimum controls, paper selected surface, gold bottom accent, and a full-width paper content panel below. At mobile widths the list uses three equal tracks, 14px labels (13px below 360px) and compact padding. Existing native React tab semantics and keyboard navigation remain. Earlier references to illustrated columns and portrait layout describe the superseded iteration. Current review: [.impeccable/tabs-review.md](.impeccable/tabs-review.md).

# Design System: Marques Pimenta

## Overview

**Creative North Star: "Engraved Brasilia"**

The engraved architectural world ties Marques Pimenta to Brasilia through blue ink, antique gold and near-white paper. Libre Baskerville gives the brand and headings a measured literary voice; Source Sans 3 keeps practical information and controls direct.

The built page varies a panoramic hero, portrait introduction, architectural selector and paper reading panel, and generous single-column FAQ. Its expression is restrained (ENERGY 2 / RHYTHM 4 / MOTION 2): illustration carries identity, color carries hierarchy, and motion acknowledges interaction. Taste settings are DESIGN_VARIANCE 5 / MOTION_INTENSITY 3 / VISUAL_DENSITY 4.

**Key Characteristics:**

- Blue ink and antique gold on near-white paper.
- Serif brand and headings with sans-serif body and controls.
- Flat bands, fine dividers and desktop pillar-shaped area tabs.
- Compact mobile pillars and native FAQ disclosures.
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

**The Contact Gold Rule.** Gold marks contact actions, focus on blue surfaces and the pillar initials; blue remains the structural ink.

## Typography

Libre Baskerville is self-hosted and backed by Georgia and serif; Source Sans 3 is self-hosted and backed by Arial and sans-serif. Headings are regular-weight and balanced. The entire brand name is upright. Hero and closing wordmark tracking is -0.025em; other roles use zero tracking.

The desktop display is 76px, area heading 52px and panel heading 32px. Other section headings use 40px (office and FAQ) and 42px (footer contact). Office and panel copy use 17px; mobile copy uses 16px. The hero steps to 54px on mobile, 47px below 359px, and 48px on short mobile viewports. Mobile section headings use 28–32px. Area copy has a maximum measure of 65ch. Only actual loaded weights are used: serif 400, sans-serif 400 and 700. The decorative footer signature scales from 44px to 96px on desktop and uses two 60px lines on mobile.

**The Two Voices Rule.** Use Libre Baskerville for brand and headings, Source Sans 3 for body and operational controls. Mobile area tabs switch to Source Sans 3 for compact scanning.

## Layout

The desktop content frame caps at (1120px) with total outer subtraction (80px). The subtraction becomes (64px) at (1100px), (40px) at (820px), and (32px) below (359px). Section backgrounds span the viewport; the shared frame aligns their contents.

The office uses .9fr / 1fr tracks with an 88px gap: a portrait architectural illustration and a stacked introduction with the lawyer's identification. Area selection uses the same tracks for a column gallery and a paper reading panel. Gaps compress to 48px on smaller desktop. Office content becomes one column at 820px; area content becomes one column at 960px, with tabs above the panel. The FAQ always uses a single reading column capped at 880px. Footer contact changes from horizontal to stacked at the small-mobile breakpoint; footer information adapts from three columns to two, with lawyer identification spanning the first row.

The hero is full-width with centered copy over the architectural engraved raster, with modernist columns replacing the botanical framing. Art uses cover sizing and centers on desktop, displaying the complete panorama below the copy on small mobile. Desktop minimum height is (660px), rising to (700px) at (1600px). Mobile minimum height is (584px), or (560px) on short mobile viewports. Generous bottom padding protects the architectural image from the text.

Desktop sections use varied vertical spacing: 100px for the office introduction, 72px/80px for areas, 96px for FAQ and 64px/24px for the footer. Mobile sections use 40px to 56px. The header is 82px minimum on desktop and 72px on tablet/mobile. It remains in normal page flow. Menu navigation unfolds immediately below it on tablet/mobile.

## Elevation & Depth

Depth is conveyed by alternating paper, royal-blue and deep-blue bands, fine borders and the illustrated architecture. There are no box shadows. Selected pillars use paper-colored shafts and capitals with blue lettering; inactive pillars retain the blue surface.

**The Flat Band Rule.** Use surface color and fine dividers to separate sections. The implemented system has no box-shadow vocabulary.

## Shapes

Controls have lightly softened corners. Pillars are engraved architectural images with dimensional capitals, fluted shafts and stone bases. The circular client-supplied brand artwork is preserved. The office illustration has a partial offset rule; the selected area has a paper reading surface. FAQ rows remain unframed.

## Components

### Contact Buttons

Firm, compact contact actions combine an outlined Lucide message icon (18px) and a sentence-case label. Primary buttons use gold with deep-blue text, a 48px minimum height and 10px icon gap. Header contact uses a 44px minimum target and 14px text; below 821px it becomes a 44px icon button with a visually hidden accessible label. Outline contact uses a gold border on blue and swaps colors immediately on hover. Primary backgrounds transition over 200ms. Pointer presses give 160ms feedback at scale .98; focus-visible activation retains the static control. Focus uses a 3px outline with 5px offset, gold ink on light surfaces and gold on dark surfaces.

### Navigation

Header grouping adapts [Watermelon Navigation 1](https://ui.watermelon.sh/block/navigation-1), with the compact mobile action group informed by [Navigation 2](https://ui.watermelon.sh/block/navigation-2). The brand and three navigation links form the desktop left group; WhatsApp is separated at the right. Links use 14px text and 44px minimum targets, with subtle paper-blue hover backgrounds over 200ms and immediate keyboard focus. Below 821px, WhatsApp and menu occupy an action group with 44px square targets and an 8px gap. Navigation becomes a paper-colored dropdown; Escape closes it and returns focus to the toggle. Below 360px, the brand uses 16px text and bounded wrapping to leave room for both actions. Existing React, CSS and Lucide provide the implementation.

### Area Tabs

Tabs use an original transparent engraved Doric column asset with the area label above it. Images are 272px tall on desktop, 220px on tablet and 164px on mobile. Mobile labels use the body face for legibility. Selected images rise 6px and their underline spans the target; inactive fine-pointer hover rises 3px. Pointer transitions take 200ms; keyboard selection is immediate. Arrow keys, Home and End select and focus a tab; only the selected tab participates in the tab sequence. Reduced motion keeps the selection marker without moving the images.

### Area Panel

Panels present a 32px serif heading, 17px supporting text, a wrapping topic list and a gold contact action on paper. Minimum panel space stabilizes switching. Pointer selection gives a progressive-enhancement 180ms opacity transition using CSS @starting-style; keyboard selection is immediate. Contact messages retain the selected area.

### Authored Motion

One initial sequence belongs to the hero: the engraving arrives over 700ms, the full upright name over 640ms with a short translation and clipping reveal, then practical copy and controls over 480ms with 60ms stagger steps. Content is already visible at the start. No repeating, parallax or section-by-section entrance effects. Feedback uses --motion-fast (160ms), --motion-ui (200ms) and --ease-out (cubic-bezier(.23, 1, .32, 1)). Reduced motion disables animations, translations and smooth scrolling, retaining readable content and color-selected states.

### Editorial Footer

The closing composition adapts Watermelon's [Footer 12](https://ui.watermelon.sh/block/footer-12), whose registry source was retrieved before implementation. Its contact/navigation groups and large closing brand signature are translated into the site's serif typography and deep-blue palette. Real contact actions replace the example newsletter. Lawyer identification, navigation and online region form the information row. The signature is decorative and hidden from assistive technology to avoid repeating the brand; the final row carries copyright, brand clarification and back-to-top navigation. The implementation uses native React, CSS and the installed Lucide icons.

### FAQ Disclosures

Native details/summary rows form a flat question ledger. Summary text uses blue ink, generous vertical padding and a Lucide chevron (20px); the chevron rotates when open over (200ms). Answer copy uses muted ink and an inset right edge. Browser disclosure markers are suppressed in favor of the drawn icon. Focus remains visible.

### Browser Surfaces

Selection uses gold with deep-blue text. Scrollbars use blue on paper. The skip link becomes visible when focused. Phone and exploration links reveal underlines on hover with an intentional offset.

## Do's and Don'ts

### Do:

- Do use the existing blue, gold and paper roles for new elements.
- Do keep headings in Libre Baskerville and readable copy and controls in Source Sans 3.
- Do preserve visible focus, keyboard area selection and reduced-motion behavior.
- Do adapt pillar tabs into compact pillars on narrow screens.

### Don't:

- Don't introduce shadows as a substitute for the current flat band structure.
- Don't add card grids, inputs or form styles to this record: none are implemented.
- Don't use fluid reading text as decoration; only the closing signature scales within bounded sizes.
