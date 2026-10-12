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
    showSheetVideos(doc);
    syncCardVideos();
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
    hideSheetVideos();
    syncCardVideos();
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

  // ---------- project videos (manifests written by scripts/videos.py) ----------
  // The first wide, tall and square video in a project's list are its covers:
  // the card plays the one that best fits the tile, the sheet the one that best
  // fits the screen. Every other video sits behind a "More videos" button.

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const videoSets = new Map();
  const cardVideos = [];

  function shapeOf(v) {
    const ratio = v.width / v.height;
    if (ratio > 1.15) return 'wide';
    if (ratio < 0.87) return 'tall';
    return 'square';
  }

  function sortVideos(folder, list) {
    const covers = {};
    const extras = [];
    list.forEach((v) => {
      const item = { ...v, url: `${folder}/${v.src}`, poster: v.poster ? `${folder}/${v.poster}` : null };
      const shape = shapeOf(v);
      if (covers[shape]) extras.push(item);
      else covers[shape] = item;
    });
    return { covers: Object.values(covers), extras };
  }

  function fit(covers, width, height) {
    const off = (v) => Math.abs(Math.log(v.width / v.height) - Math.log(width / height));
    return covers.reduce((best, v) => (off(v) < off(best) ? v : best));
  }

  function load(el, v) {
    el.src = v.url;
    if (v.poster) el.poster = v.poster;
    else el.removeAttribute('poster');
    el.style.setProperty('--ratio', v.width / v.height);
  }

  function play(el) {
    if (!reducedMotion) el.play().catch(() => {});
  }

  function syncCardVideos() {
    cardVideos.forEach((el) => {
      if (el.inView && overlay.hidden) play(el);
      else el.pause();
    });
  }

  const cardWatcher = new IntersectionObserver((entries) => {
    entries.forEach((e) => { e.target.inView = e.isIntersecting; });
    syncCardVideos();
  });

  function setupCard(card, set) {
    const el = document.createElement('video');
    el.className = 'card__video';
    el.muted = true;
    el.loop = true;
    el.playsInline = true;
    el.preload = 'metadata';
    el.setAttribute('aria-hidden', 'true');
    card.prepend(el);
    card.classList.add('has-video');
    let current = null;
    new ResizeObserver(() => {
      const { width, height } = card.getBoundingClientRect();
      if (!width || !height) return;
      const pick = fit(set.covers, width, height);
      if (pick === current) return;
      current = pick;
      load(el, pick);
      syncCardVideos();
    }).observe(card);
    cardVideos.push(el);
    cardWatcher.observe(el);
  }

  function buildSheetMedia(doc, set) {
    const wrap = document.createElement('div');
    wrap.className = 'sheet-media';
    const hero = document.createElement('video');
    hero.className = 'sheet-media__hero';
    hero.controls = true;
    hero.muted = true;
    hero.loop = true;
    hero.playsInline = true;
    hero.preload = 'metadata';
    wrap.append(hero);

    if (set.extras.length) {
      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'btn btn--soft sheet-media__more';
      more.setAttribute('aria-expanded', 'false');
      const label = `More videos (${set.extras.length})`;
      more.textContent = label;
      const grid = document.createElement('div');
      grid.className = 'sheet-media__extras';
      grid.hidden = true;
      set.extras.forEach((v) => {
        const el = document.createElement('video');
        el.controls = true;
        el.playsInline = true;
        el.preload = v.poster ? 'none' : 'metadata';
        load(el, v);
        grid.append(el);
      });
      more.addEventListener('click', () => {
        grid.hidden = !grid.hidden;
        more.setAttribute('aria-expanded', String(!grid.hidden));
        more.textContent = grid.hidden ? label : 'Hide videos';
        if (grid.hidden) grid.querySelectorAll('video').forEach((el) => el.pause());
      });
      wrap.append(more, grid);
    }

    const lede = doc.querySelector('.sheet-doc__lede');
    if (lede) lede.after(wrap);
    else doc.prepend(wrap);
    return hero;
  }

  function fitSheetVideo(doc) {
    const set = videoSets.get(doc.dataset.doc);
    const hero = doc.querySelector('.sheet-media__hero');
    if (!set || !hero) return false;
    const pick = fit(set.covers, window.innerWidth, window.innerHeight);
    if (hero.currentPick === pick) return false;
    hero.currentPick = pick;
    load(hero, pick);
    return true;
  }

  function showSheetVideos(doc) {
    const set = videoSets.get(doc.dataset.doc);
    if (!set) return;
    const hero = doc.querySelector('.sheet-media__hero') || buildSheetMedia(doc, set);
    fitSheetVideo(doc);
    play(hero);
  }

  function hideSheetVideos() {
    docs.forEach((d) => d.querySelectorAll('.sheet-media video').forEach((el) => el.pause()));
  }

  window.addEventListener('resize', () => {
    const doc = docFor(currentKey);
    if (overlay.hidden || !doc) return;
    if (fitSheetVideo(doc)) play(doc.querySelector('.sheet-media__hero'));
  });

  docs.filter((d) => d.dataset.videos).forEach(async (doc) => {
    const folder = doc.dataset.videos;
    let list;
    try {
      const res = await fetch(`${folder}/videos.json`);
      if (!res.ok) return;
      list = (await res.json()).videos;
    } catch {
      return;
    }
    if (!list || !list.length) return;
    const key = doc.dataset.doc;
    const set = sortVideos(folder, list);
    videoSets.set(key, set);
    openers.filter((b) => b.dataset.sheet === key && b.classList.contains('card')).forEach((card) => setupCard(card, set));
    if (currentKey === key && !overlay.hidden) showSheetVideos(doc);
  });

  const initialKey = location.hash.replace('#', '');
  if (initialKey && docFor(initialKey)) {
    openSheet(initialKey, { pushHash: false });
  }
})();
