(() => {
  const overlay = document.getElementById('sheetOverlay');
  const closeBtn = document.getElementById('sheetClose');
  const docs = Array.from(document.querySelectorAll('.sheet-doc'));
  const openers = Array.from(document.querySelectorAll('[data-sheet]'));
  const shareToggle = document.getElementById('shareToggle');
  const shareMenu = document.getElementById('shareMenu');
  const shareUrl = document.getElementById('shareUrl');
  const shareCopy = document.getElementById('shareCopy');
  const shareNative = document.getElementById('shareNative');
  let currentKey = null;

  // Share links are the generated /<key>/ pages (scripts/share_pages.py),
  // which carry link-preview tags; /#<key> would preview as the whole site.
  const shareTargets = {
    whatsapp: (u, t) => `https://wa.me/?text=${encodeURIComponent(`${t} ${u}`)}`,
    x: (u, t) => `https://x.com/intent/post?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`,
    bluesky: (u, t) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${t} ${u}`)}`,
    reddit: (u, t) => `https://www.reddit.com/submit?url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`,
    facebook: (u) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`,
    email: (u, t) => `mailto:?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(u)}`,
  };

  function shareInfo() {
    const doc = docFor(currentKey);
    const title = doc.querySelector('h1').textContent.trim();
    return { url: new URL(`${currentKey}/`, new URL('./', location.href)).href, title };
  }

  function openShare() {
    const { url, title } = shareInfo();
    shareUrl.value = url;
    shareMenu.querySelectorAll('[data-share]').forEach((a) => {
      a.href = shareTargets[a.dataset.share](url, title);
    });
    shareNative.hidden = !navigator.share;
    shareCopy.textContent = 'Copy';
    shareCopy.classList.remove('is-done');
    shareMenu.hidden = false;
    shareToggle.setAttribute('aria-expanded', 'true');
  }

  function closeShare() {
    shareMenu.hidden = true;
    shareToggle.setAttribute('aria-expanded', 'false');
  }

  function docFor(key) {
    return docs.find((d) => d.dataset.doc === key) || null;
  }

  function openSheet(key, { pushHash = true } = {}) {
    const doc = docFor(key);
    if (!doc) return;
    currentKey = key;
    closeShare();
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
    closeShare();
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
    if (e.key !== 'Escape' || overlay.hidden) return;
    if (!shareMenu.hidden) {
      closeShare();
      shareToggle.focus();
    } else {
      closeSheet();
    }
  });

  shareToggle.addEventListener('click', () => {
    if (shareMenu.hidden) openShare();
    else closeShare();
  });

  document.addEventListener('click', (e) => {
    if (!shareMenu.hidden && !e.target.closest('.share')) closeShare();
  });

  shareCopy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(shareUrl.value);
    } catch {
      shareUrl.select();
      document.execCommand('copy');
    }
    shareCopy.textContent = 'Copied';
    shareCopy.classList.add('is-done');
  });

  shareUrl.addEventListener('focus', () => shareUrl.select());

  shareNative.addEventListener('click', () => {
    const { url, title } = shareInfo();
    navigator.share({ title, url }).catch(() => {});
  });

  const initialKey = location.hash.replace('#', '');
  if (initialKey && docFor(initialKey)) {
    openSheet(initialKey, { pushHash: false });
  }
})();
