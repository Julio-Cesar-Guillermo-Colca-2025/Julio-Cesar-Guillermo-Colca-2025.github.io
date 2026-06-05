// menu.js
document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const toggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if(toggle) {
    toggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  }
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
  });

  // Resaltar página activa en el menú
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if(href && href !== '#' && currentPath.includes(href.replace(/^\//, ''))) {
      link.style.color = '#2A6DFF';
      if(link.closest('.sub-menu')) {
        const parent = link.closest('.menu-item-has-children');
        if(parent) parent.querySelector('> a').style.color = '#2A6DFF';
      }
    }
  });
});