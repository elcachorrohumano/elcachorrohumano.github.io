// Japanese Minimalist Theme Switcher
// Manages 4 color themes with localStorage persistence

const themes = ['sumi-e', 'hokusai', 'zen', 'sunset'];
const themeNames = {
  'sumi-e': 'Sumi-e',
  'hokusai': 'Hokusai Wave',
  'zen': 'Modern Zen',
  'sunset': 'Sunset Tea'
};

// Get current theme from localStorage or default to 'sumi-e'
function getCurrentTheme() {
  return localStorage.getItem('theme') || 'sumi-e';
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

