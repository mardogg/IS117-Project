/* DEVELOPER: Marwa Monsour, IS117-XXX, Spring 2024 */

// Get the toggle button
const toggleModeButton = document.getElementById('toggle-mode');

// Check if the user has a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

// Add event listener to toggle the theme
toggleModeButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Toggle dark mode class on body
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', ''); // Remove theme preference
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save theme preference
  }
});
