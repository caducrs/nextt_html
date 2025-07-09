document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 900;
  const modulos = document.querySelectorAll('.modulo');


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });
  modulos.forEach(modulo => observer.observe(modulo));


  let current = 0;


  modulos.forEach(mod => {
    mod.classList.remove('active', 'exit-up', 'exit-down');
    mod.style.opacity = '';
    mod.style.pointerEvents = '';
  });


  modulos[current].classList.add('active');

  let isAnimating = false;


  function showModulo(newIndex, direction) {
    if (isAnimating) return;

    if (newIndex >= modulos.length) newIndex = 0;
    if (newIndex < 0) newIndex = modulos.length - 1;
    if (newIndex === current) return;

    isAnimating = true;
    const currentModulo = modulos[current];
    const nextModulo = modulos[newIndex];

    currentModulo.classList.remove('active', 'exit-up', 'exit-down');
    nextModulo.classList.remove('active', 'exit-up', 'exit-down');

    if (direction === 'down') {
      currentModulo.classList.add('exit-up');
    } else {
      currentModulo.classList.add('exit-down');
    }

    nextModulo.classList.add('active');

    setTimeout(() => {
      currentModulo.classList.remove('exit-up', 'exit-down');
      current = newIndex;
      isAnimating = false;
    }, 800);
  }

  let scrollTimeout = null;
  window.addEventListener('wheel', (e) => {
    if (scrollTimeout) return;
    if (e.deltaY > 0) showModulo(current + 1, 'down');
    else if (e.deltaY < 0) showModulo(current - 1, 'up');
    scrollTimeout = setTimeout(() => scrollTimeout = null, 800);
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (isAnimating) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      showModulo(current + 1, 'down');
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      showModulo(current - 1, 'up');
    }
  });

  let touchStartY = null;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (touchStartY === null) return;
    let touchEndY = e.changedTouches[0].clientY;
    let diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showModulo(current + 1, 'down');
      } else {
        showModulo(current - 1, 'up');
      }
    }
    touchStartY = null;
  }, { passive: true });
});
