// Ukiyo-e Theme Switcher (浮世絵)
// Manages Japanese woodblock print inspired themes with localStorage persistence

const themes = ['hokusai', 'crimson', 'forest', 'sakura'];
const themeNames = {
  'hokusai': 'Hokusai Wave (藍色)',
  'crimson': 'Crimson Sunset (紅葉)',
  'forest': 'Forest Temple (森の寺)',
  'sakura': 'Cherry Blossom (桜)'
};

// Get current theme from localStorage or default to 'hokusai'
function getCurrentTheme() {
  return localStorage.getItem('theme') || 'hokusai';
}

// Set theme on document element
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
  
  // Update button text if it exists
  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    const currentIndex = themes.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    themeButton.setAttribute('aria-label', `Switch to ${themeNames[nextTheme]} theme`);
  }
}

// Cycle to next theme
function cycleTheme() {
  const currentTheme = getCurrentTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  
  setTheme(nextTheme);
}

// Initialize theme on page load
function initTheme() {
  const savedTheme = getCurrentTheme();
  setTheme(savedTheme);
  
  // Add click listener to theme toggle button
  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', cycleTheme);
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

