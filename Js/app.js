const light = document.getElementById('light');

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Mueve la luz a la posición del ratón
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
  });