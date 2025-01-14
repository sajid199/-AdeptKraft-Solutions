document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlRoot = document.documentElement;

  // Dark theme color variables
  const darkThemeColors = {
    '--background-color': '#121212',
    '--default-color': '#e0e0e0',
    '--heading-color': '#ffffff',
    '--accent-color': '#4CAF50',
    '--surface-color': '#1e1e1e',
    '--contrast-color': '#000000',
    '--nav-color': '#e0e0e0',
    '--nav-hover-color': '#4CAF50',
    '--nav-mobile-background-color': '#121212',
    '--nav-dropdown-background-color': '#1e1e1e',
    '--nav-dropdown-color': '#e0e0e0'
  };

  // Light theme color variables (default from CSS)
  const lightThemeColors = {
    '--background-color': '#ffffff',
    '--default-color': '#444444',
    '--heading-color': '#111111',
    '--accent-color': '#1bbd36',
    '--surface-color': '#ffffff',
    '--contrast-color': '#ffffff',
    '--nav-color': '#444444',
    '--nav-hover-color': '#1bbd36',
    '--nav-mobile-background-color': '#ffffff',
    '--nav-dropdown-background-color': '#ffffff',
    '--nav-dropdown-color': '#444444'
  };

  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('site-theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    if (theme === 'dark') {
      // Apply dark theme colors
      Object.entries(darkThemeColors).forEach(([key, value]) => {
        htmlRoot.style.setProperty(key, value);
      });
      
      htmlRoot.classList.add('dark-theme');
      htmlRoot.classList.remove('light-theme');
      
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
      
      localStorage.setItem('site-theme', 'dark');
      document.body.classList.add('dark-background');
      document.body.classList.remove('light-background');
    } else {
      // Apply light theme colors
      Object.entries(lightThemeColors).forEach(([key, value]) => {
        htmlRoot.style.setProperty(key, value);
      });
      
      htmlRoot.classList.remove('dark-theme');
      htmlRoot.classList.add('light-theme');
      
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
      
      localStorage.setItem('site-theme', 'light');
      document.body.classList.remove('dark-background');
      document.body.classList.add('light-background');
    }
  }

  // Initial theme setup
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDarkScheme.matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlRoot.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Listen for system theme changes
  prefersDarkScheme.addListener((e) => {
    if (!localStorage.getItem('site-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
});
