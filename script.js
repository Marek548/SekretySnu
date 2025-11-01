// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Inicjalizacja AOS (animacje przy scrollowaniu)
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true
  });

  // Delikatne migotanie tła (opcjonalnie)
  const body = document.body;
  setInterval(() => {
    body.style.background = body.style.background === 'linear-gradient(135deg, #0b0c2a, #1a1f4b)'
      ? 'linear-gradient(135deg, #0c0d35, #1c2155)'
      : 'linear-gradient(135deg, #0b0c2a, #1a1f4b)';
  }, 8000);
});
