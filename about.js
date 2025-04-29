// about.js

// Simple scroll effect to animate elements when they appear in the viewport
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
  
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    }
  
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on initial load
  });