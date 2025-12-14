# SuperSeed Labs Landing Page

A high-end, "Deep Tech" stealth-mode landing page for **SuperSeed Labs** (`superseedlabs.ai`).

## Design Philosophy

> "Apple design meets Alien Biology"

The page embodies a mysterious, expensive, and scientifically rigorous aesthetic—perfect for a cutting-edge AI/autonomous systems startup.

## Features

- **Animated Particle Background** — Subtle, drifting particles representing a sterile cleanroom or Mars atmosphere
- **Bio-mechanical Seed Visualization** — Central floating asset with fiber-optic filament animation
- **Scroll Reveal Animations** — Smooth, cinematic entrance effects for all sections
- **Responsive Design** — Mobile-first approach using Tailwind CSS
- **Dark Mode** — Deep obsidian black aesthetic with champagne gold and bioluminescent cyan accents

## Sections

1. **Hero** — "Intelligence. Superseded." headline with floating seed visualization
2. **Mystery Section** — Three cryptic pillars: Germination, Adaptation, Scale
3. **Call to Action** — Email capture with "Access Protocol" branding
4. **Footer** — Minimalist with "Lomé • Global • Orbit" locations

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Obsidian Black | `#0a0a0a` | Primary background |
| Matte Dark Grey | `#1a1a1a` | Cards, secondary surfaces |
| Champagne Gold | `#d4af37` | Primary accent, headlines |
| Bioluminescent Cyan | `#00f5d4` | Interactive elements, highlights |
| Cool Grey | `#a0a0a0` | Body text |

## Typography

- **Headlines:** Space Grotesk (light weight, tight tracking for futuristic bio-tech feel)
- **Technical/Mono:** JetBrains Mono (code-like precision for "Labs" aesthetic)

The typography pairing balances **biological elegance** with **machine precision** — perfect for the "Apple meets Alien Biology" aesthetic.

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (particles, scroll reveal, form handling)
- Google Fonts

## Getting Started

Simply open `index.html` in a browser. No build process required.

```bash
# Clone and open
open index.html
```

## File Structure

```text
landing-page/
├── index.html              # Main landing page
├── assets/
│   └── images/
│       └── superseed.jpeg   # Logo/brand asset
└── README.md
```

## Customization

### Adding a Backend for Email Collection

Replace the `handleSubmit` function in `index.html` with your preferred email service integration (e.g., Mailchimp, ConvertKit, custom API).

### Replacing the 3D Seed Asset

The current seed visualization is CSS-based. To add a real 3D asset:

1. Use Three.js or Spline for the 3D model
2. Replace the `.seed-container` contents with your 3D embed

---

© 2025 SuperSeed Labs — Lomé • Global • Orbit
