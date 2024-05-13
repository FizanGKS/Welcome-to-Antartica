// animations.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.option-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        button.classList.add('fancy-animation');
        setTimeout(() => {
          button.classList.remove('fancy-animation');
        }, 1000); // Adjust the duration as needed
      });
    });
  });
  