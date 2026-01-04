# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for SuperSeed Labs (`superseedlabs.ai`) - a Deep Tech AI startup focused on Recursive General Intelligence (RGI). The page features a high-end, stealth-mode aesthetic combining "Apple design meets Alien Biology."

## Tech Stack

- **Pure Static HTML** - Single `index.html` file with embedded CSS and JavaScript
- **No build process** - Direct browser rendering, no compilation or bundling
- **Tailwind CSS** - Loaded via CDN (but most styling is custom CSS in `<style>` tags)
- **Vanilla JavaScript** - No frameworks or libraries
- **Fonts** - Google Fonts: Space Grotesk, Syne, IBM Plex Mono

## Development Commands

### Local Development
```bash
# Simply open index.html in a browser
open index.html

# Or serve with a local server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment
The site auto-deploys to GitHub Pages via `.github/workflows/static.yml` on pushes to `main` branch.

## Architecture

### File Structure
```
landing-page/
├── index.html              # Complete single-page application
├── assets/
│   └── images/
│       ├── superseed.jpeg  # Logo (used in nav and footer)
│       └── superseed.png   # Hero seed image
├── .github/
│   └── workflows/
│       └── static.yml      # GitHub Pages deployment workflow
├── CNAME                   # Custom domain configuration
└── README.md               # Design philosophy and customization guide
```

### Code Organization in index.html

The entire application is contained in a single HTML file with three main sections:

1. **CSS (lines 25-1163)** - Embedded in `<style>` tag
   - CSS custom properties define color palette and fonts (`:root`)
   - Component-specific styles for nav, hero, thesis, mission, masterplan, research, why-us, cta, footer
   - Animation keyframes for floating, pulsing, revealing effects
   - Responsive breakpoints at 768px and 1024px

2. **HTML (lines 1165-1447)** - Page structure
   - Background elements (grid, gradient orbs)
   - Navigation with scroll effects
   - Hero section with animated seed visualization
   - Content sections: Thesis, Mission, Master Plan (3 phases), Research (4 cards), Why Us (3 cards), CTA
   - Footer with dynamic copyright year

3. **JavaScript (lines 1449-1541)** - Embedded in `<script>` tag
   - Dynamic copyright year calculation
   - Navigation scroll effects (add `scrolled` class after 50px)
   - Scroll reveal animations (Intersection Observer pattern)
   - Email form handling (visual feedback only, no backend)
   - Smooth anchor scrolling
   - Parallax mouse effects for background orbs

### Key Interactive Features

- **Scroll Animations**: Elements with `.reveal` class fade in when scrolled into view
- **Navigation State**: Nav bar gains backdrop blur and border when scrolled past 50px
- **Floating Seed**: Hero image has continuous floating animation with rotating gradient border
- **Form Submission**: Email form provides visual feedback but doesn't send data (placeholder for backend integration)
- **Parallax Orbs**: Background gradient orbs follow mouse movement at different speeds

### Design System

**Color Variables** (in `:root`):
- `--void`, `--obsidian`, `--carbon`, `--graphite` - Dark backgrounds
- `--electric` (#00e5cc) - Primary accent, interactive elements
- `--gold` (#c9a227) - Secondary accent, highlights
- `--crimson` (#ff3366) - Urgent/special indicators

**Typography Variables**:
- `--font-display`: Syne - Headlines and body
- `--font-angular`: Space Grotesk - Titles
- `--font-mono`: IBM Plex Mono - Technical labels, code-like text

### Critical Implementation Details

1. **Dynamic Copyright Year** (lines 1450-1459)
   - Shows "2025" if current year is 2025
   - Shows "2025-YYYY" for years beyond 2025
   - Updates on page load via JavaScript

2. **Email Collection** (lines 1418-1421, 1494-1514)
   - Form is a placeholder requiring backend integration
   - Current `handleSubmit()` only provides visual feedback
   - To integrate: Replace the function with API call to email service (Mailchimp, ConvertKit, etc.)

3. **Asset Paths**
   - Logo: `assets/images/superseed.jpeg` (used in nav and footer)
   - Hero: `assets/images/superseed.png` (main hero image)
   - Both must exist for proper rendering

4. **Mobile Responsiveness**
   - Mobile menu button exists in HTML but functionality not implemented
   - Nav links hidden on mobile (<768px)
   - Grid layouts collapse to single column on tablet (<1024px)

## Common Modifications

### Updating Content
- All text content is directly in `index.html`
- Sections are clearly marked with `<!-- Section Name -->`
- To add/remove sections: Update HTML, ensure styles exist, add to nav links if needed

### Styling Changes
- Colors: Modify CSS custom properties in `:root`
- Typography: Update font imports and `--font-*` variables
- Animations: Keyframes defined at component level (search for `@keyframes`)

### Adding Backend for Email
Replace `handleSubmit()` function (line 1495) with actual API integration:
```javascript
function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    // Add your API call here
    fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email })
    });
}
```

### Replacing 3D Seed Asset
The current seed is a 2D image with CSS effects. To add real 3D:
1. Add Three.js or Spline script
2. Replace `.hero-seed` content (lines 1197-1199)
3. Maintain animation container structure for consistency
