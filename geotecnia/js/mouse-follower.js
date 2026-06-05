// mouse-follower.js - versión definitiva
(function() {
  function createFollower() {
    let follower = document.getElementById('mouseFollower');
    if (!follower) {
      follower = document.createElement('div');
      follower.id = 'mouseFollower';
      document.body.appendChild(follower);
    }
    return follower;
  }

  function moveFollower(e) {
    const follower = document.getElementById('mouseFollower');
    if (follower) {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    }
  }

  function init() {
    createFollower();
    document.addEventListener('mousemove', moveFollower);
    const interactive = document.querySelectorAll('a, button, .service-card, .btn, .staff-card, .cliente-item, .contact-info li');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', () => {
        const f = document.getElementById('mouseFollower');
        if (f) f.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        const f = document.getElementById('mouseFollower');
        if (f) f.classList.remove('hover');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();