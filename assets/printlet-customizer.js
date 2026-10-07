(() => {
  const SAFE_WIDTH_MM = 190;
  const SAFE_HEIGHT_MM = 277;
  const GAP_MM = 5;
  const fit = (width, height) => Math.floor((SAFE_WIDTH_MM + GAP_MM) / (width + GAP_MM)) * Math.floor((SAFE_HEIGHT_MM + GAP_MM) / (height + GAP_MM));

  document.querySelectorAll('[data-printlet-customizer]').forEach((customizer) => {
    const form = customizer.querySelector('form');
    if (!form) return;
    const equal = form.querySelector('[data-size-group="equal"]');
    const wide = form.querySelector('[data-size-group="wide"]');
    const countDisplay = form.querySelector('[data-sticker-count]');
    const countProperty = form.querySelector('[data-count-property]');
    const artwork = form.querySelector('[data-artwork]');
    const preview = form.querySelector('[data-artwork-preview]');
    let previewUrl;

    function update() {
      const shape = form.querySelector('[data-shape]:checked').dataset.shape;
      const isWide = shape === 'rectangle' || shape === 'oval';
      equal.hidden = isWide;
      wide.hidden = !isWide;
      equal.querySelectorAll('input').forEach((input) => { input.disabled = isWide; });
      wide.querySelectorAll('input').forEach((input) => { input.disabled = !isWide; });
      const active = isWide ? wide : equal;
      if (!active.querySelector('input:checked')) active.querySelector('input').checked = true;
      const selected = active.querySelector('input:checked');
      const width = Number(selected.dataset.width);
      const height = Number(selected.dataset.height);
      const count = Math.max(fit(width, height), fit(height, width));
      countDisplay.textContent = String(count);
      countProperty.value = `${customizer.dataset.verified === 'true' ? 'Minimum' : 'Planning estimate'}: ${count}`;
    }

    form.addEventListener('change', (event) => {
      if (event.target.matches('[data-shape], [data-width]')) update();
      if (event.target === artwork) {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        const file = artwork.files[0];
        preview.removeAttribute('src');
        if (file && file.type.startsWith('image/')) {
          previewUrl = URL.createObjectURL(file);
          preview.src = previewUrl;
        }
      }
    });
    form.addEventListener('submit', (event) => {
      const file = artwork.files[0];
      if (!file) return;
      if (file.size > 20 * 1024 * 1024) {
        event.preventDefault();
        artwork.setCustomValidity('Please choose a file smaller than 20 MB.');
        artwork.reportValidity();
      }
    });
    artwork.addEventListener('change', () => artwork.setCustomValidity(''));
    update();
  });
})();
