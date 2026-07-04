# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing landing page for **SuperSeed Labs** (`superseedlabs.ai`), a deep-tech AI
startup focused on Recursive General Intelligence (RGI). Aesthetic: high-end, stealth-mode,
"Apple design meets alien biology" — a near-black canvas with a champagne-gold σ (sigma)
brand mark and bioluminescent-cyan accents.

## Tech Stack

- **Pure static HTML/CSS/JS** — no build step, no bundler, no framework, no Tailwind.
- **External assets** — CSS split across three files in `css/`; JS in `main.js`.
- **Fonts** — Google Fonts: Syne (display), Space Grotesk (titles), IBM Plex Mono (labels).
- Open `index.html` directly, or serve locally: `python3 -m http.server 8000`.

## Deployment

Auto-deploys to **GitHub Pages** via `.github/workflows/static.yml` on push to `main`
(uploads the whole directory). Custom domain `superseedlabs.ai` is set by `CNAME`.

## File Structure

```text
landing-page/
├── index.html            # Page markup + the inline animated hero σ SVG
├── main.js               # All interactivity
├── css/
│   ├── core.css          # :root tokens, reset, keyframes, shared components, reduced-motion
│   ├── desktop.css       # Default/desktop styles for every component
│   └── mobile.css        # Responsive overrides (@media 1024 / 768 / 380px)
├── assets/images/        # σ marks, favicon set, og-image.png (social card)
├── .github/workflows/static.yml
├── CNAME                 # superseedlabs.ai
└── README.md
```

### CSS architecture

All three stylesheets load unconditionally in `<head>`, in order: `core` → `desktop` →
`mobile`. `desktop.css` holds the base (unscoped) layout; `mobile.css` is **overrides only**,
inside `max-width` media queries, and loads last so those overrides win. When changing a
component, edit its desktop rule and, if it needs to differ on small screens, its mobile rule.

### JavaScript (`main.js`)

- Dynamic copyright year (`#copyright-year`): shows `2025` or `2025-YYYY`.
- Nav gains `.scrolled` (blur + border) past 50px.
- Scroll reveal: `.reveal` elements gain `.active` when scrolled into view.
- Smooth in-page anchor scrolling (respects `scroll-padding-top` for the fixed nav).
- Orb parallax on mousemove — uses the independent `translate` property so it composes
  with each orb's keyframe animation; **skipped under `prefers-reduced-motion`**.
- Mobile menu: toggle + `aria-expanded`, closes on link click / outside click / Escape,
  locks body scroll while open.
- Hero σ: desktop 3D tilt (needs `perspective` on `#hero-seed-container`) and a click/tap
  pulse via `.pulse-ring`.
- Nav σ mark hand-off: an IntersectionObserver on `#hero-seed` swaps the nav `<img>` between
  the static and animated marks — static while the hero loop is on screen, animated once it
  scrolls out of view (so only one σ animates at a time; skipped under reduced-motion).

## Design System (tokens in `css/core.css` `:root`)

- Backgrounds: `--void #050505`, `--obsidian #0a0a0a`, `--carbon`, `--graphite`, `--steel`.
- Accents: `--electric #00e5cc` (primary/interactive), `--gold #c9a227` (brand/σ),
  `--crimson #ff3366` (urgent).
- Fonts: `--font-display` Syne, `--font-angular` Space Grotesk, `--font-mono` IBM Plex Mono.

## Sections (in `index.html`)

Hero → Thesis → Mission → Master Plan (3 phases) → Research (4 cards) → Why Us (3 cards)
→ CTA (`#access`) → Footer. Nav/mobile-menu/footer link to `#thesis`, `#masterplan`,
`#research`, `#access`.

## The σ brand mark

Five overlapping lowercase sigmas that grow and solidify white → `#c9a227`, each glyph
"unwinding" through rotations **−90 / −72 / −54 / −36 / −18** about (32,27) in a 76×54
viewBox (bowl circle r=22 @ (27,27); arm y=5 from x=27→64; stroke 10, round caps). Concept:
recursion — each generation supersedes the last.

- `assets/images/sigma-mark.svg` — static mark (footer).
- `assets/images/sigma-mark-animated.svg` — self-animating standalone mark; `main.js` swaps
  it into the nav `<img>` only while the hero σ is scrolled out of view. Has its own
  `@keyframes` + a `prefers-reduced-motion` guard so it falls back to the static trail.
- Hero mark is an **inline** `<svg>` in `index.html` (so its keyframes reliably run).
- Favicons: `favicon.svg` / `favicon-32.png` / `favicon-16.png` / `apple-touch-icon.png`.
- If you regenerate any mark, keep the −90/−72/−54/−36/−18 rotation progression consistent
  across all copies (a prior handoff shipped several with −90/−18/−18/−36/−18 by mistake).

## Common tasks

- **Copy/content**: edit `index.html` (sections marked with `<!-- ... -->`).
- **Colors/fonts**: edit the `:root` tokens in `css/core.css`.
- **CTA**: the "Fuel the Flywheel" CTA and footer "Partner" link point to a Calendly URL —
  there is no email form or backend. Update the `href` to change the booking target.
- **Social card**: `assets/images/og-image.png` (1200×630) is referenced by absolute URL in
  the OG/Twitter meta tags. Regenerate it if the branding changes.
