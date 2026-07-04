# SuperSeed Labs Landing Page

A high-end, deep-tech landing page for **SuperSeed Labs** (`superseedlabs.ai`) — a startup
engineering **Recursive General Intelligence (RGI)**.

## Design Philosophy

> "Apple design meets alien biology."

A near-black canvas, a champagne-gold **σ (sigma) brand mark** whose five glyphs unwind and
solidify (recursion — each generation supersedes the last), and bioluminescent-cyan accents.

## Features

- **Animated σ hero** — an inline SVG of five sigmas fading in sequence, on a 3.2s loop
- **Ambient background** — drifting gradient orbs + a fine grid, with subtle mouse parallax
- **Scroll-reveal animations** — sections fade/rise into view
- **Fully responsive** — desktop, tablet (≤1024px), and mobile (≤768px / ≤380px) with a
  slide-in mobile menu
- **Accessible motion** — honors the OS `prefers-reduced-motion` setting

## Sections

Hero · Thesis · Mission · Master Plan (3 phases) · Research (4 cards) · Why Us (3 cards) ·
CTA (Calendly booking) · Footer (*Lomé • Global • Orbit*)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Void | `#050505` | Primary background |
| Obsidian | `#0a0a0a` | Secondary surfaces |
| Champagne Gold | `#c9a227` | Brand σ mark, highlights |
| Electric Cyan | `#00e5cc` | Interactive elements, accents |
| Crimson | `#ff3366` | Urgent indicators |

## Typography

- **Syne** — display / wordmark
- **Space Grotesk** — titles and taglines
- **IBM Plex Mono** — technical labels and overlines

## Tech Stack

Pure static **HTML5 + CSS + vanilla JavaScript** — no build step, no framework, no Tailwind.
CSS is split into `css/core.css`, `css/desktop.css`, and `css/mobile.css`; interactivity
lives in `main.js`. Fonts via Google Fonts.

## Getting Started

No build process required.

```bash
open index.html
# or serve locally:
python3 -m http.server 8000   # then visit http://localhost:8000
```

## File Structure

```text
landing-page/
├── index.html            # Markup + inline animated hero σ SVG
├── main.js               # Interactivity
├── css/                  # core.css, desktop.css, mobile.css
├── assets/images/        # σ marks, favicons, og-image.png
├── CNAME                 # superseedlabs.ai
└── .github/workflows/    # GitHub Pages deploy
```

See [CLAUDE.md](CLAUDE.md) for architecture and contributor notes.

## Deployment

Auto-deploys to **GitHub Pages** on every push to `main` via `.github/workflows/static.yml`.

---

© 2025 SuperSeed Labs — Lomé • Global • Orbit
