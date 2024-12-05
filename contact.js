/* DEVELOPER: Marwa Monsour, IS117-001, Fall 2024 */

// Handle form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display an alert (in a real app, you would send this data to a server)
  alert(`Thank you for reaching out, ${name}!\n\nWe have received your message:\n"${message}"\n\nWe will get back to you at ${email} shortly.`);
  
  // Reset the form
  contactForm.reset();
});
