(() => {
  const overlay = document.getElementById('sheetOverlay');
  const closeBtn = document.getElementById('sheetClose');
  const docs = Array.from(document.querySelectorAll('.sheet-doc'));
  const openers = Array.from(document.querySelectorAll('[data-sheet]'));

  function docFor(key) {
    return docs.find((d) => d.dataset.doc === key) || null;
  }

  function openSheet(key, { pushHash = true } = {}) {
    const doc = docFor(key);
    if (!doc) return;
    docs.forEach((d) => d.classList.toggle('is-active', d === doc));
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
    if (pushHash) {
      history.replaceState(null, '', `#${key}`);
    }
    closeBtn.focus();
  }

  function closeSheet() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (location.hash) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  openers.forEach((btn) => {
    btn.addEventListener('click', () => openSheet(btn.dataset.sheet));
  });

  closeBtn.addEventListener('click', closeSheet);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSheet();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeSheet();
  });

  const initialKey = location.hash.replace('#', '');
  if (initialKey && docFor(initialKey)) {
    openSheet(initialKey, { pushHash: false });
  }
})();
