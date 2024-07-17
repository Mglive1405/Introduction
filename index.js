// index.js
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = '🌙';
  
    // Previously selected theme (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
  
    // Obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.textContent === iconTheme ? '🌞' : '🌙';
  
    // Validate if the user previously chose a theme
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.textContent = selectedTheme === 'dark' ? '🌞' : '🌙';
    }
  
    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.textContent = getCurrentIcon();
  
      // Save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  
    // Add tooltips to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = link.getAttribute('aria-label');
        link.appendChild(tooltip);
      });
  
      link.addEventListener('mouseleave', () => {
        const tooltip = link.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  
    // Form validation feedback
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      if (!name.value || !email.value || !message.value) {
        alert('Please fill in all fields');
        return;
      }
      alert('Message sent successfully');
      form.reset();
    });
  });
  