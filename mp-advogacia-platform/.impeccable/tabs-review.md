# Watermelon Tabs 1 adaptation

User approved the bounded design with “ok”: remove the middle building image, compact the introduction and replace pillars with three text tabs above the wider area panel.

Retrieved and compared Tabs 1, Tabs 10, Continuous Tabs and Discrete Tabs. Selected [Tabs 1](https://ui.watermelon.sh/components/tabs), registry https://registry.watermelon.sh/r/tabs-1.json. Adapted its segmented list, distinct active surface and content-below-list structure to existing native React tab controls and CSS. No new dependency.

## Antislop AFTER: scoped review

- PASS: building and column imagery removed from rendered JSX; associated decorative CSS removed.
- PASS: visible area labels explain the control directly. No icons, invented statistics, testimonials or additional claims.
- PASS: tab roles, selected state, roving focus, ArrowLeft/Right, Home/End and matching panel labels remain in source.
- PASS: WhatsApp retains area-specific messages; all three panels retain existing real descriptions and topics.
- PASS: palette retains paper/blue contrast; active tab also has a gold bottom accent. Focus is visible; keyboard selection disables transition. Reduced motion disables transitions.
- PASS: 1440px and 320px screenshots visually inspected. Tab labels fit a single row and the content occupies the available panel width.
- PASS: explicit user-approved composition; source written with apply_patch. No template data or extra library installed.

Evidence: screenshots/tabs-desktop.png and screenshots/tabs-mobile.png. Review was visual and source-based; no automated tests, interaction test run or production build performed for this request.
