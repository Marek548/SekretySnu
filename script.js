// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Animacja gwiazd
  const stars = document.createElement('div');
  stars.className = 'background-stars';
  document.body.appendChild(stars);

  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = Math.random();
    star.style.animationDelay = `${Math.random() * 5}s`;
    stars.appendChild(star);
  }

  // Księżyc
  const moon = document.createElement('div');
  moon.className = 'moon';
  document.body.appendChild(moon);

  // Dodatkowe efekty
  const tablet = document.querySelector('.tablet');
  tablet.addEventListener('mouseenter', () => {
    document.querySelector('.glow').style.opacity = 1;
  });

  tablet.addEventListener('mouseleave', () => {
    document.querySelector('.glow').style.opacity = 0;
  });
});
