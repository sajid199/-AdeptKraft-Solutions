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
    '--accent-color': '#1bbd36',
    '--surface-color': '#ffffff',
    '--contrast-color': '#ffffff',
    '--nav-color': '#444444',
    '--nav-hover-color': '#1bbd36',
    '--nav-mobile-background-color': '#ffffff',
    '--nav-dropdown-background-color': '#ffffff',
    '--nav-dropdown-color': '#444444',
    // Add services section light theme colors
    '--service-background': '#ffffff',
    '--service-text': '#444444',
    '--service-icon': '#1bbd36',
    '--service-title': '#111111',
    '--service-link': '#1bbd36',
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

      localStorage.setItem('site-theme', 'light');
      document.body.classList.remove('dark-background');
      document.body.classList.add('light-background');
    }
  }

  // Improved theme toggle positioning and styling
  function createProfessionalThemeToggle() {
    // Remove existing theme toggle if it exists
    const existingToggle = document.querySelector('.theme-toggle-container');
    if (existingToggle) {
      existingToggle.remove();
    }

    // Create a more professional theme toggle container
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'theme-toggle-container';
    toggleContainer.innerHTML = `
      <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle Dark/Light Mode">
        <svg id="theme-toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
          <path id="theme-icon-path" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    `;

    // Position the toggle in the top-right corner of the header
    const header = document.getElementById('header');
    if (header) {
      toggleContainer.style.position = 'absolute';
      toggleContainer.style.top = '15px';
      toggleContainer.style.right = '15px';
      header.appendChild(toggleContainer);
    }

    // Add event listener to the new toggle button
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const themeIconPath = document.getElementById('theme-icon-path');

    // Function to update icon based on theme
    function updateThemeIcon(theme) {
      if (theme === 'dark') {
        // Moon icon for dark mode
        themeIconPath.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
        themeToggleIcon.setAttribute('fill', 'currentColor');
      } else {
        // Sun icon for light mode
        themeIconPath.setAttribute('d', 'M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42');
        themeToggleIcon.setAttribute('fill', 'none');
      }
    }

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.classList.contains('dark-theme') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme
      setTheme(newTheme);
      
      // Update icon
      updateThemeIcon(newTheme);
    });

    // Initial icon setup based on current theme
    const initialTheme = htmlRoot.classList.contains('dark-theme') ? 'dark' : 'light';
    updateThemeIcon(initialTheme);
  }

  // Call the function to create professional theme toggle
  createProfessionalThemeToggle();

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

  // Listen for system theme changes
  prefersDarkScheme.addListener((e) => {
    if (!localStorage.getItem('site-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
});