document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      "particles": {
          "number": {
              "value": 80
          },
          "size": {
              "value": 3
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  });
});
const light = document.getElementById('light');

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Mueve la luz a la posición del ratón
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
  });