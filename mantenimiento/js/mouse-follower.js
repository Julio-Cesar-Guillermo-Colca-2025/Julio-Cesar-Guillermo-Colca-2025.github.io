(function() {
  const follower = document.getElementById('mouseFollower');
  if (!follower) return;
  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  });
  const interactive = document.querySelectorAll('a, button, .service-card, .btn, .staff-card, .cliente-item');
  interactive.forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
  });
})();