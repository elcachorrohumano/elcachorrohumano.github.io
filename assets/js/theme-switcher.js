// ===========================================
// UKIYO-E THEME SWITCHER (浮世絵)
// Japanese Woodblock Print Inspired Themes
// ===========================================

const themes = ['sumi', 'wave', 'sakura', 'forest', 'night'];
const themeNames = {
  'sumi': 'Sumi Ink (墨)',
  'wave': 'Hokusai Wave (波)',
  'sakura': 'Cherry Blossom (桜)',
  'forest': 'Forest Moss (森)',
  'night': 'Night Moon (夜)'
};

// Get current theme from localStorage or default to 'sumi'
function getCurrentTheme() {
  return localStorage.getItem('ukiyo-theme') || 'sumi';
}

// Set theme on document element
function setTheme(themeName) {
  // Remove all theme attributes first
  document.documentElement.removeAttribute('data-theme');
  
  // Set new theme (sumi is default, no attribute needed)
  if (themeName !== 'sumi') {
    document.documentElement.setAttribute('data-theme', themeName);
  }
  
  localStorage.setItem('ukiyo-theme', themeName);
  
  // Update button aria-label
  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    const currentIndex = themes.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    themeButton.setAttribute('aria-label', `Current: ${themeNames[themeName]}. Click to switch to ${themeNames[nextTheme]}`);
    themeButton.title = `Theme: ${themeNames[themeName]}`;
  }
}

// Cycle to next theme
function cycleTheme() {
  const currentTheme = getCurrentTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  
  setTheme(nextTheme);
  
  // Add subtle animation feedback (respects prefers-reduced-motion via CSS)
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.style.transform = 'rotate(180deg)';
    setTimeout(() => {
      button.style.transform = '';
    }, 200);
  }
}

// Initialize theme on page load (run immediately to prevent flash)
(function initTheme() {
  const savedTheme = getCurrentTheme();
  
  // Apply theme immediately (before DOM is ready) to prevent flash
  if (savedTheme !== 'sumi') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  
  // Set up button listener when DOM is ready
  function setupButton() {
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
      themeButton.addEventListener('click', cycleTheme);
      // Update aria-label
      const currentIndex = themes.indexOf(savedTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      const nextTheme = themes[nextIndex];
      themeButton.setAttribute('aria-label', `Current: ${themeNames[savedTheme]}. Click to switch to ${themeNames[nextTheme]}`);
      themeButton.title = `Theme: ${themeNames[savedTheme]}`;
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupButton);
  } else {
    setupButton();
  }
})();
