// contact.js
// Simple validation for the contact form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const messageInput = form.querySelector("textarea[name='message']");
  
    form.addEventListener("submit", function (event) {
        let valid = true;
  
        if (!nameInput.value.trim()) {
            valid = false;
            alert("Please enter your name.");
        }

  
        if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
            valid = false;
            alert("Please enter a valid email address.");
        }
  
        if (!messageInput.value.trim()) {
            valid = false;
            alert("Please enter your message.");
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
  });