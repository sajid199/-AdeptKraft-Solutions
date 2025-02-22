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
    '--contrast-color': '#ffffff',
    '--nav-color': '#f0f0f0',
    '--nav-hover-color': '#4CAF50',
    '--nav-mobile-background-color': '#121212',
    '--nav-dropdown-background-color': '#1e1e1e',
    '--nav-dropdown-color': '#f0f0f0',
    // Add services section dark theme colors
    '--service-background': '#1e1e1e',
    '--service-text': '#e0e0e0',
    '--service-icon': '#4CAF50',
    '--service-title': '#ffffff',
    '--service-link': '#4CAF50',
    '--service-item-bg': '#2d2d2d'
  };

  // Light theme color variables
  const lightThemeColors = {
    '--background-color': '#ffffff',
    '--default-color': '#444444',
    '--heading-color': '#111111',
    '--accent-color': '#c7a536',
    '--surface-color': '#ffffff',
    '--contrast-color': '#ffffff',
    '--nav-color': '#444444',
    '--nav-hover-color': '#c7a536',
    '--nav-mobile-background-color': '#ffffff',
    '--nav-dropdown-background-color': '#ffffff',
    '--nav-dropdown-color': '#444444',
    // Add services section light theme colors
    '--service-background': '#ffffff',
    '--service-text': '#444444',
    '--service-icon': '#c7a536',
    '--service-title': '#111111',
    '--service-link': '#c7a536',
    '--service-item-bg': '#ffffff'
  };

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

      // Apply dark theme to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.style.backgroundColor = 'var(--service-background)';
        servicesSection.style.color = 'var(--service-text)';
      }

      // Update service items
      document.querySelectorAll('.service-item').forEach(item => {
        item.style.backgroundColor = 'var(--service-item-bg)';
        item.style.color = 'var(--service-text)';
      });

      document.querySelectorAll('.service-icon i').forEach(icon => {
        icon.style.color = 'var(--service-icon)';
      });

      document.querySelectorAll('.service-title').forEach(title => {
        title.style.color = 'var(--service-title)';
      });

      document.querySelectorAll('.service-link').forEach(link => {
        link.style.color = 'var(--service-link)';
      });

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

      // Reset services section to light theme
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.style.backgroundColor = 'var(--service-background)';
        servicesSection.style.color = 'var(--service-text)';
      }

      // Reset service items
      document.querySelectorAll('.service-item').forEach(item => {
        item.style.backgroundColor = 'var(--service-item-bg)';
        item.style.color = 'var(--service-text)';
      });

      document.querySelectorAll('.service-icon i').forEach(icon => {
        icon.style.color = 'var(--service-icon)';
      });

      document.querySelectorAll('.service-title').forEach(title => {
        title.style.color = 'var(--service-title)';
      });

      document.querySelectorAll('.service-link').forEach(link => {
        link.style.color = 'var(--service-link)';
      });
    }
  }

  // Initial theme setup
  const savedTheme = localStorage.getItem('site-theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

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