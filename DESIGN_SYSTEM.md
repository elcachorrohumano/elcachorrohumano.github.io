# Ukiyo-e Design System
## 浮世絵デザインシステム

A modern web design system inspired by traditional Japanese woodblock prints (Ukiyo-e), featuring the playful Chōjū-giga frog scroll as a background motif and colors drawn from Hokusai's "The Great Wave."

---

## Color Palette

### Default Theme: Sumi (墨 - Ink)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-paper` | `#F8F5ED` | Main background, warm paper |
| `--bg-primary` | `#F5F2E8` | Primary surface |
| `--bg-secondary` | `#EDE9DD` | Secondary surface, subtle contrast |
| `--bg-elevated` | `#FDFBF6` | Cards, elevated elements |
| `--bg-accent` | `#E5E0D2` | Highlighted backgrounds |
| `--text-primary` | `#1A1814` | Main text, headings |
| `--text-secondary` | `#3A3630` | Body text |
| `--text-tertiary` | `#625D54` | Captions, metadata |
| `--text-muted` | `#8A857C` | Placeholders, disabled |
| `--accent-indigo` | `#1B3A4B` | Primary accent (Prussian blue) |
| `--accent-vermillion` | `#C45B3E` | Secondary accent (persimmon) |
| `--accent-moss` | `#4A6B5D` | Tertiary accent (moss green) |
| `--accent-gold` | `#B89B5A` | Gold highlights |

### Additional Themes

- **Nami (波 - Wave)**: Deep blues inspired by Hokusai
- **Sakura (桜)**: Soft pink and warm tones
- **Matsu (松 - Forest)**: Deep greens and natural tones
- **Yoru (夜 - Night)**: Dark mode with warm undertones

---

## Typography

### Font Stack

```css
/* Body text */
--font-family: "DM Sans", "Noto Sans JP", system-ui, -apple-system, sans-serif;

/* Headings */
--heading-font: "DM Sans", "Noto Sans JP", system-ui, sans-serif;

/* Display / Japanese accents */
--display-font: "Shippori Mincho", "Noto Serif JP", "Hiragino Mincho ProN", serif;
```

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Body | `calc(1rem + 0.12vw)` | 400 | 1.75 |
| H1 | `clamp(2rem, 5vw, 2.75rem)` | 600 | 1.25 |
| H2 | `clamp(1.5rem, 4vw, 2rem)` | 600 | 1.25 |
| H3 | `clamp(1.25rem, 3vw, 1.5rem)` | 600 | 1.25 |
| H4 | `1.125rem` | 600 | 1.25 |
| Small / Caption | `0.875rem` | 400 | 1.5 |

---

## Spacing Scale

Based on an 8px grid:

| Token | Value | Pixels |
|-------|-------|--------|
| `$space-xs` | `0.25rem` | 4px |
| `$space-sm` | `0.5rem` | 8px |
| `$space-md` | `1rem` | 16px |
| `$space-lg` | `1.5rem` | 24px |
| `$space-xl` | `2rem` | 32px |
| `$space-2xl` | `3rem` | 48px |
| `$space-3xl` | `4rem` | 64px |
| `$space-4xl` | `6rem` | 96px |

---

## Key Components

### 1. Ukiyo-e Buttons (`.ukiyo-button`)

Japanese-style buttons with ink wash hover effect.

```html
<a href="/portfolio/" class="ukiyo-button primary">
  作品集
  <span class="button-en">Portfolio</span>
</a>
```

Variants: `.primary`, `.secondary`, `.tertiary`

### 2. Project Cards (`.project-card`)

Cards with corner accent and lift hover effect.

```html
<div class="project-card">
  <div class="date">March 2025</div>
  <h3>Project Title</h3>
  <p>Description...</p>
  <div class="tech-stack">
    <span class="tech-tag">Python</span>
  </div>
  <a href="#" class="project-link">View on GitHub →</a>
</div>
```

### 3. Passion Blocks (`.passion-block`)

Sidebar-accented content blocks with Japanese title accents.

```html
<div class="passion-block">
  <h3 class="passion-title">
    <span class="jp-accent">音楽</span>
    <span>Music</span>
  </h3>
  <p>Content...</p>
</div>
```

### 4. Section Headers (`.section-header`)

Centered headers with Japanese/English dual titles and wave decoration.

```html
<div class="section-header">
  <p class="section-title-jp">作品集</p>
  <h2 class="section-title-en">Portfolio</h2>
</div>
```

### 5. Photo Gallery (`.photo-gallery`)

Responsive 3-column grid (3→2→1 columns).

```html
<div class="photo-gallery">
  <div class="gallery-item">
    <img src="photo.jpg" alt="Description" loading="lazy">
  </div>
</div>
```

### 6. Timeline (`.timeline`)

Vertical timeline for career/experience sections.

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3>Company Name</h3>
      <div class="position">Title</div>
      <div class="location">📍 Location · Dates</div>
      <p>Description...</p>
    </div>
  </div>
</div>
```

### 7. Wave Dividers

Seigaiha-inspired decorative dividers.

```html
<div class="wave-divider"></div>
<div class="line-wave"><span>◆</span></div>
```

### 8. Frames (`.frame`, `.frame-scroll`)

Content blocks with mounted print aesthetic.

```html
<div class="frame">Content...</div>
<div class="frame-scroll">Scroll-style content...</div>
```

---

## Motion & Animation

### Timing Functions

```scss
$transition-fast: 0.2s ease;
$transition-speed: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
$transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
$transition-organic: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
```

### Scroll Reveal

Add `.reveal` class to elements for scroll-triggered animation:

```html
<div class="reveal">Content appears on scroll</div>
<div class="reveal-left">Slides in from left</div>
<div class="reveal-right">Slides in from right</div>
```

Stagger delays for grid items:

```html
<div class="gallery-item reveal reveal-delay-1">...</div>
<div class="gallery-item reveal reveal-delay-2">...</div>
```

### Accessibility

All animations respect `prefers-reduced-motion: reduce`.

---

## Background Integration

The site uses `/assets/frogwallpaper1.jpg` (Chōjū-giga frog scroll) as a layered background:

1. **Layer 1**: Frog wallpaper at low opacity (4-6%)
2. **Layer 2**: Paper texture gradient overlay
3. **Layer 3**: Page content on paper-colored surface

Dark mode inverts and dims the background appropriately.

---

## Page Layout

### Content Width

- **Mobile**: Full width with 16-24px padding
- **Tablet (768px+)**: 1000px max-width
- **Desktop (1200px+)**: 1160px max-width
- **Large (1440px+)**: 1280px max-width

### Page Structure

```html
<article>
  <header class="page-header">
    <p class="page-title-jp">日本語タイトル</p>
    <h1 class="page-title">English Title</h1>
    <p class="page-subtitle">Optional subtitle</p>
  </header>
  <!-- Content -->
</article>
```

---

## Usage Guidelines

1. **Color**: Use accent colors sparingly. Primary (indigo) for links and key actions, secondary (vermillion) for emphasis and Japanese accents.

2. **Typography**: Reserve `Shippori Mincho` (display font) for Japanese text and decorative elements only. Use `DM Sans` for all body content.

3. **Spacing**: Use consistent spacing tokens. Prefer `$space-lg` and `$space-xl` for section separations.

4. **Animation**: Keep motion subtle and purposeful. The goal is "crafted paper" feel, not "tech demo."

5. **Japanese Text**: Always pair with English translation for accessibility. Use `.jp-accent` styling for inline Japanese labels.

---

## Files Changed

| File | Purpose |
|------|---------|
| `_sass/index.sass` | Color palette, CSS variables, themes |
| `_sass/basic.sass` | Base styles, background layers, typography |
| `_sass/layout.sass` | Page layout, header, footer, page headers |
| `_sass/classes.sass` | All components, photo gallery, animations |
| `_sass/font.sass` | Font loading configuration |
| `assets/css/index.sass` | Container widths, imports |
| `_layouts/default.html` | Google Fonts, scroll reveal JS |
| `_layouts/page.html` | Page header with Japanese title support |
| `index.md` | Home page with hero and about sections |
| `portfolio.md` | Portfolio with project cards (no duplicate title) |
| `gallery.md` | Photo gallery with 3-column grid |
| `blog.md` | Blog listing (no duplicate title) |
| `career.md` | Career timeline and skills |

---

*Last updated: December 2024*

