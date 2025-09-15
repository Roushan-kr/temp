// Mobile navbar toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      // Name validation
      const name = document.getElementById('name');
      const nameError = document.getElementById('nameError');
      if (!name.value.trim()) {
        nameError.textContent = 'Name is required.';
        valid = false;
      } else {
        nameError.textContent = '';
      }

      // Email validation
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        emailError.textContent = 'Email is required.';
        valid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Enter a valid email.';
        valid = false;
      } else {
        emailError.textContent = '';
      }

      // Message validation
      const message = document.getElementById('message');
      const messageError = document.getElementById('messageError');
      if (!message.value.trim()) {
        messageError.textContent = 'Message is required.';
        valid = false;
      } else {
        messageError.textContent = '';
      }

      // Show success message if valid
      if (valid) {
        contactForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }
    });
  }
});
