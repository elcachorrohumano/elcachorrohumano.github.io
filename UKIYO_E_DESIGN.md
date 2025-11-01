# Ukiyo-e Website Redesign (浮世絵)

## Overview
This website has been redesigned with a Japanese Ukiyo-e (woodblock print) aesthetic, creating a harmonious blend of traditional Japanese art principles and modern web design.

## Design Philosophy

### Visual Elements
- **Ukiyo-e Aesthetic**: Inspired by traditional Japanese woodblock prints
- **Typography**: Japanese serif fonts (Hiragino Mincho, Yu Mincho, Noto Serif JP)
- **Color Palettes**: Four theme options based on classical Japanese art
- **Decorative Elements**: Japanese characters, seals (印), wave patterns, and traditional borders
- **Box Shadows**: Flat, offset shadows reminiscent of woodblock printing layers

### Key Features

#### 1. Home Page (ホーム)
- No photo as requested
- SVG Japanese art illustrations (frog inspired by Matsumoto Hoji, wave patterns)
- Japanese/English bilingual headers
- Traditional seal stamp design
- Three sections: Music (音楽), Ocean (海), Data Science (データサイエンス)

#### 2. Portfolio Page (作品集)
- Project cards with Ukiyo-e style borders and shadows
- Japanese section headers
- Clean, structured layout with decorative corner elements

#### 3. Career Page (経歴)
- Timeline visualization with traditional styling
- Skills categorized with Japanese labels
- CV download button with bilingual text

#### 4. Photo Gallery (画廊)
- Dynamic photo display from `photo_gallery` folder
- Automatically lists all images in the folder
- Ukiyo-e style borders and hover effects
- Empty state with Japanese messaging

#### 5. Blog Page (文章)
- Bilingual introduction
- Traditional Japanese styling for post listings
- Clean, readable layout

## Color Themes

### 1. Hokusai Wave (藍色 - Indigo Blue) [Default]
Inspired by "The Great Wave off Kanagawa"
- Primary: Deep indigo (#1E3A5F)
- Secondary: Terracotta red (#C8503D)
- Tertiary: Forest green (#2B5F4F)

### 2. Crimson Sunset (紅葉 - Autumn Maple)
Inspired by autumn leaves and sunset skies
- Primary: Crimson red (#A8342A)
- Secondary: Burnt orange (#D97C3C)
- Tertiary: Sage green (#5A7765)

### 3. Forest Temple (森の寺 - Moss & Cedar)
Inspired by temple grounds and nature
- Primary: Deep forest (#2E4F3D)
- Secondary: Cedar brown (#9B5635)
- Tertiary: Moss green (#4A6B5E)

### 4. Cherry Blossom (桜 - Sakura)
Inspired by spring cherry blossoms
- Primary: Cherry pink (#B8405E)
- Secondary: Soft coral (#D98A78)
- Tertiary: Bamboo green (#6A8076)

## Usage

### Adding Photos to Gallery
Simply add image files (jpg, jpeg, png, gif, webp) to the `/photo_gallery/` folder. They will automatically appear on the gallery page.

### Switching Themes
Click the theme toggle button in the header to cycle through the four color themes. Your preference is saved in localStorage.

### Navigation
- **Home**: Main introduction with about sections
- **Portfolio**: Projects and technical work
- **Career**: Professional experience and skills
- **Gallery**: Photo collection
- **Blog**: Articles and thoughts
- **CV**: Download PDF resume

## Technical Details

### Fonts
- Japanese: Hiragino Mincho ProN, Yu Mincho, Noto Serif JP
- English: Georgia (serif)
- Monospace: System monospace for code

### Japanese Elements
- Seals (印): Circular stamps with kanji characters
- Wave patterns: SVG illustrations inspired by Hokusai
- Decorative borders: Box shadows creating depth layers
- Typography: Mix of Japanese and English text
- Traditional dividers: Diamond symbols (◆)

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Stackable components on smaller screens
- Touch-friendly interactive elements

## Files Modified
- `index.md` - Home page with new Ukiyo-e design
- `portfolio.md` - Updated with Japanese styling
- `career.md` - Timeline and skills with bilingual headers
- `blog.md` - Blog page with Japanese aesthetic
- `gallery.md` - New photo gallery page
- `_sass/index.sass` - Color themes and variables
- `_sass/classes.sass` - Component styles
- `_sass/layout.sass` - Layout and navigation
- `_sass/basic.sass` - Base typography and elements
- `assets/js/theme-switcher.js` - Theme management
- `_config.yml` - Added gallery navigation

## Inspiration
- Katsushika Hokusai's "The Great Wave off Kanagawa"
- Matsumoto Hoji's frog paintings
- Traditional Japanese woodblock printing techniques
- Edo period art and design
- Modern Japanese minimalism

## Notes
- The design maintains accessibility standards
- All themes have sufficient color contrast
- Typography scales responsively
- Images are lazy-loaded for performance
- Theme preference persists across sessions

