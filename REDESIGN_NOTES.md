# Website Redesign - Implementation Notes

## Overview
Complete redesign of Jorge Esteban Ramírez Sashida's personal GitHub Pages website with a modern, Spotify-inspired aesthetic.

## Design System

### Color Palette
- **Dark Navy**: #0a0e27 (primary background)
- **Dark Charcoal**: #1a1e3a (secondary background, cards)
- **Teal**: #4ECDC4 (primary accent, links)
- **Coral**: #FF6B6B (secondary accent, CTAs)
- **Purple**: #A06CD5 (tertiary accent, tech tags)
- **Light Text**: #e8eaed (main text color)
- **Mid Gray**: #8a8d93 (secondary text)

### Features Implemented

#### 1. Landing Page (index.md)
- Hero section with profile image
- Gradient text title effect
- Quick stats (Companies, Projects, Instruments)
- CTA buttons to Portfolio and Career
- About Me section with music, ocean, and data science passions
- Smooth scroll behavior

#### 2. Portfolio Page (portfolio.md)
- 5 projects in grid layout:
  - Last.fm MCP Server (Aug 2025)
  - Music ML Classifier (Mar 2025)
  - LanceDB Workshop (May 2024)
  - Spotify ETL Pipeline (Jun 2024)
  - Domino AI (Nov 2023)
- Tech stack tags for each project
- Hover effects with elevation
- Direct GitHub links

#### 3. Career Page (career.md)
- Timeline layout with alternating sides
- 3 work experiences:
  - deep_dive (Data Scientist Jr., Mar 2025 - Present)
  - Palenca (ML Intern, Nov 2024 - Feb 2025)
  - SonsUK (Data Science Intern, Mar 2024 - Oct 2024)
- Company logos
- Skills tags
- Technical skills section
- CV download button

#### 4. Blog Page (blog.md)
- Updated to use page layout
- Maintained existing post structure
- Styled to match new design

#### 5. Navigation & Footer
- Sticky header with blur effect
- Navigation: Home, Portfolio, Career, Blog, CV
- Social links with icons:
  - Email
  - LinkedIn
  - GitHub
  - Spotify
  - Tidal
  - Last.fm
  - Instagram
- Enhanced icon hover effects
- Copyright footer

### Technical Implementation

#### Files Modified
- `_config.yml` - Updated navigation and social links
- `_sass/index.sass` - New color variables and design system
- `_sass/basic.sass` - Dark theme, smooth scrolling, improved typography
- `_sass/layout.sass` - Responsive layouts, sticky header, footer styling
- `_sass/classes.sass` - Component styles (cards, buttons, timeline, hero)
- `_layouts/default.html` - Updated header/footer structure
- `index.md` - Complete redesign as landing page
- `blog.md` - Style updates

#### Files Created
- `portfolio.md` - New portfolio showcase
- `career.md` - New career timeline
- `assets/MyCVJorgeEstebanRamirezSashidaFeb2025.pdf` - Updated CV
- `assets/deep_dive.png` - Company logo
- `assets/palenca_logo.png` - Company logo
- `assets/sons_uk_logo.png` - Company logo

#### Files Deleted
- `assets/MyCV_JorgeEstebanRamirezSashida.pdf` - Old CV
- `about.md` - Replaced by integrated About section
- `work.md` - Replaced by career.md

### Key Features
✅ Smooth animations and transitions
✅ Hover effects on all interactive elements
✅ Fully responsive (mobile, tablet, desktop)
✅ Dark theme with vibrant accents
✅ Gradient text effects
✅ Card-based layouts
✅ Timeline visualization
✅ Enhanced social media links
✅ CV download functionality
✅ Smooth scroll behavior

### Testing Locally
To test the site locally:
```bash
bundle install
bundle exec jekyll serve
```
Then navigate to `http://localhost:4000`

### Deployment
Push changes to GitHub and the site will automatically deploy via GitHub Pages.

## Color Usage Guide
- **Teal (#4ECDC4)**: Links, section titles, skill tags, primary accent
- **Coral (#FF6B6B)**: CTAs, stats, career timeline markers
- **Purple (#A06CD5)**: Tech tags, code elements, secondary gradients
- **Dark Charcoal (#1a1e3a)**: Cards, code blocks, footer background
- **Dark Navy (#0a0e27)**: Main background

## Typography
- System fonts for fast loading
- Font weight 400 for body, 700 for headings
- Line height 1.7 for readability
- Responsive font sizing

---

Redesign completed: October 29, 2025

