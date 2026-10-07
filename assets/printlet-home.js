(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const reveals = document.querySelectorAll('.pl-e-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('pl-e-wait');
      entry.target.classList.add('pl-e-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.11, rootMargin: '0px 0px -25px 0px' });
  reveals.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * .85) return;
    item.classList.add('pl-e-wait');
    observer.observe(item);
  });

  const process = document.querySelector('.pl-e-process');
  if (!process) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    const box = process.getBoundingClientRect();
    const progress = Math.max(.08, Math.min(1, (window.innerHeight * .7 - box.top) / Math.max(1, box.height * .75)));
    process.style.setProperty('--pl-progress', progress.toFixed(3));
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  schedule();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
})();
