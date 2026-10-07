(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const photos = [...document.querySelectorAll('.pl-e-photo--hero, .pl-e-photo--story, .pl-e-choice__image img, .pl-product-visual img, .pl-shop__hero img, .pl-shop__card-image img, .pl-info-hero img, .pl-info-steps article img, .pl-contact-hero img')];
  if (!photos.length) return;
  photos.forEach((photo) => photo.setAttribute('data-pl-parallax', ''));
  let frame = 0;
  const update = () => {
    frame = 0;
    const viewport = window.innerHeight;
    const mobile = window.innerWidth < 750;
    photos.forEach((photo) => {
      const rect = photo.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > viewport + 100) return;
      const distance = rect.top + rect.height / 2 - viewport / 2;
      const maxShift = mobile ? 18 : 55;
      const depth = Number(photo.getAttribute('data-pl-depth') || 1);
      const shift = Math.max(-maxShift, Math.min(maxShift, -distance * (mobile ? .06 : .105) * depth));
      photo.style.setProperty('--pl-parallax-y', `${shift.toFixed(1)}px`);
    });
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  schedule();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('load', schedule, { once: true });
})();
