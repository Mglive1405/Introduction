document.addEventListener("DOMContentLoaded", function() {
  const themeButton = document.getElementById('theme-button');
  const body = document.body;

  // Check the user's preference on initial load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
      body.classList.add(currentTheme);
  }

  themeButton.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
      
      // Save the preference in localStorage
      let theme = 'light-theme';
      if (body.classList.contains('dark-theme')) {
          theme = 'dark-theme';
      }
      localStorage.setItem('theme', theme);
  });
});
