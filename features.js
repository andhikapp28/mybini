/* ============================================================
   FEATURES.JS — Favorites, Pity, WOTD, Series Drawer, Tier List
   Load AFTER waifu.js, BEFORE script.js.
   ============================================================ */

/* shared HTML escaper (hoisted — used by IIFEs below) */
function escHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, ch =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

/* ═══════════════════════════════════════════════════════════
   1. FAVORITES
   ══════════════════════════════════════════════════════════= */
const _favorites = (function () {
  const KEY = 'waifu_favorites';
  const favSet = new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));

  function persist() {
    localStorage.setItem(KEY, JSON.stringify([...favSet]));
    const el = document.getElementById('fav-count');
    if (el) el.textContent = favSet.size;
    if (typeof window.onFavoritesChange === 'function') window.onFavoritesChange();
  }

  window.isFavorite = (id) => favSet.has(id);
  window.getFavoriteIds = () => [...favSet];

  document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('fav-count');
    if (el) el.textContent = favSet.size;
  });

  return {
    toggle(id, btn) {
      if (favSet.has(id)) {
        favSet.delete(id);
        if (btn) { btn.classList.remove('active'); btn.setAttribute('aria-label', 'Add to favorites'); }
      } else {
        favSet.add(id);
        if (btn) { btn.classList.add('active'); btn.setAttribute('aria-label', 'Remove from favorites'); }
      }
      persist();
    }
  };
})();

/* ═══════════════════════════════════════════════════════════
   2. PITY SYSTEM
   ══════════════════════════════════════════════════════════= */
(function () {
  const KEY = 'waifu_pity';
  let pity = { ssr: 0, sr: 0 };
  try { pity = JSON.parse(localStorage.getItem(KEY) || '{"ssr":0,"sr":0}'); } catch (e) {}

  function save() { localStorage.setItem(KEY, JSON.stringify(pity)); }

  function updateUI() {
    const ssrFill  = document.getElementById('pity-ssr-fill');
    const srFill   = document.getElementById('pity-sr-fill');
    const ssrCount = document.getElementById('pity-ssr-count');
    const srCount  = document.getElementById('pity-sr-count');
    if (ssrFill)  ssrFill.style.width  = Math.min(100, (pity.ssr / 90) * 100) + '%';
    if (srFill)   srFill.style.width   = Math.min(100, (pity.sr  / 10) * 100) + '%';
    if (ssrCount) ssrCount.textContent = pity.ssr + '/90';
    if (srCount)  srCount.textContent  = pity.sr  + '/10';
  }

  window.pickRarityWithPity = function () {
    pity.ssr++;
    pity.sr++;
    let rarity;
    if      (pity.ssr >= 90) rarity = 'SSR';
    else if (pity.sr  >= 10) rarity = 'SR';
    else {
      const r = Math.random() * 100;
      rarity = r < 5 ? 'SSR' : r < 30 ? 'SR' : 'R';
    }
    if (rarity === 'SSR') { pity.ssr = 0; pity.sr = 0; }
    else if (rarity === 'SR') pity.sr = 0;
    save();
    updateUI();
    return rarity;
  };

  document.addEventListener('DOMContentLoaded', updateUI);
})();

/* ═══════════════════════════════════════════════════════════
   3. WAIFU OF THE DAY
   ══════════════════════════════════════════════════════════= */
(function () {
  function seededRandom(seed) {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof waifus === 'undefined' || !waifus.length) return;
    const d    = new Date();
    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    const wotd = waifus[Math.floor(seededRandom(seed) * waifus.length)];

    const img    = document.getElementById('wotd-img');
    const name   = document.getElementById('wotd-name');
    const series = document.getElementById('wotd-series');
    const dateEl = document.getElementById('wotd-date');
    const btn    = document.getElementById('wotd-view-btn');

    if (img)    { img.src = wotd.img; img.alt = wotd.name; }
    if (name)   name.textContent   = wotd.name;
    if (series) series.textContent = wotd.series;
    if (dateEl) dateEl.textContent = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    if (btn)    btn.addEventListener('click', () => {
      if (typeof window.openWaifuById === 'function') window.openWaifuById(wotd.id);
    });
  });
})();

/* ═══════════════════════════════════════════════════════════
   4. SERIES DRAWER
   ══════════════════════════════════════════════════════════= */
const _seriesDrawer = (function () {
  function open(seriesName) {
    if (typeof waifus === 'undefined') return;
    const list   = waifus.filter(w => w.series === seriesName);
    const drawer = document.getElementById('series-drawer');
    const title  = document.getElementById('series-drawer-title');
    const count  = document.getElementById('series-drawer-count');
    const grid   = document.getElementById('series-drawer-grid');
    if (!drawer || !grid) return;

    if (title) title.textContent = seriesName;
    if (count) count.textContent = list.length + ' karakter';

    grid.innerHTML = '';
    list.forEach(w => {
      const card = document.createElement('div');
      card.className = 'sdrawer-card';
      card.innerHTML = `<img src="${escHtml(w.img)}" alt="${escHtml(w.name)}" loading="lazy"><div class="sdrawer-name">${escHtml(w.name)}</div>`;
      card.addEventListener('click', () => {
        close();
        setTimeout(() => { if (typeof window.openWaifuById === 'function') window.openWaifuById(w.id); }, 340);
      });
      grid.appendChild(card);
    });

    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = drawer.querySelector('.series-drawer-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
  }

  function close() {
    const drawer = document.getElementById('series-drawer');
    if (!drawer) return;
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.series-drawer-close');
    const overlay  = document.querySelector('.series-drawer-overlay');
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay)  overlay.addEventListener('click', close);
  });

  document.addEventListener('keydown', e => {
    const drawer = document.getElementById('series-drawer');
    if (e.key === 'Escape' && drawer && drawer.getAttribute('aria-hidden') === 'false') close();
  });

  return { open, close };
})();

/* ═══════════════════════════════════════════════════════════
   5. TIER LIST
   ══════════════════════════════════════════════════════════= */
(function () {
  const KEY   = 'waifu_tierlist';
  const TIERS = ['S', 'A', 'B', 'C', 'D'];
  let tierData = {};
  let dragId   = null;

  function loadData() {
    try { tierData = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { tierData = {}; }
    TIERS.forEach(t => { if (!Array.isArray(tierData[t])) tierData[t] = []; });
  }

  function saveData() { localStorage.setItem(KEY, JSON.stringify(tierData)); }

  function getUnrankedIds() {
    const ranked = new Set(TIERS.flatMap(t => tierData[t] || []));
    return (typeof waifus !== 'undefined' ? waifus : []).filter(w => !ranked.has(w.id)).map(w => w.id);
  }

  /* tier-picker popup (touch / click alternative to drag) */
  function showTierPicker(id, anchorEl) {
    document.getElementById('tier-picker-popup') && document.getElementById('tier-picker-popup').remove();

    const waifu = (typeof waifus !== 'undefined') ? waifus.find(w => w.id === id) : null;
    const popup = document.createElement('div');
    popup.id = 'tier-picker-popup';
    popup.className = 'tier-picker-popup';
    popup.innerHTML = `
      <div class="tier-picker-label">${waifu ? escHtml(waifu.name) : 'Move to tier'}</div>
      <div class="tier-picker-btns">
        ${TIERS.map(t => `<button class="tpp-btn tpp-${t.toLowerCase()}" data-tier="${t}">${t}</button>`).join('')}
        <button class="tpp-btn tpp-rm" data-tier="unranked">✕</button>
      </div>`;

    popup.querySelectorAll('[data-tier]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const tier = btn.dataset.tier;
        TIERS.forEach(t => { tierData[t] = (tierData[t] || []).filter(x => x !== id); });
        if (tier !== 'unranked' && !tierData[tier].includes(id)) tierData[tier].push(id);
        saveData();
        renderTierList();
        popup.remove();
      });
    });

    const rect = anchorEl.getBoundingClientRect();
    popup.style.cssText = `position:fixed;left:${Math.min(rect.left, window.innerWidth - 230)}px;top:${Math.min(rect.bottom + 6, window.innerHeight - 80)}px;z-index:99999;`;
    document.body.appendChild(popup);

    function onOutside(e) {
      if (!popup.contains(e.target)) { popup.remove(); document.removeEventListener('click', onOutside, true); }
    }
    setTimeout(() => document.addEventListener('click', onOutside, true), 0);
  }

  function makeThumb(w) {
    const el = document.createElement('div');
    el.className = 'tier-thumb';
    el.draggable = true;
    el.dataset.id = String(w.id);
    el.title = w.name;
    el.innerHTML = `<img src="${escHtml(w.img)}" alt="${escHtml(w.name)}" loading="lazy"><div class="tier-thumb-name">${escHtml(w.name)}</div>`;

    el.addEventListener('dragstart', e => {
      dragId = w.id;
      el.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(w.id));
    });
    el.addEventListener('dragend', () => { el.classList.remove('dragging'); dragId = null; });
    el.addEventListener('click', () => showTierPicker(w.id, el));
    return el;
  }

  function setupDrop(zone, tierId) {
    zone.addEventListener('dragover', e => {
      e.preventDefault(); e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', e => {
      if (!zone.contains(e.relatedTarget)) zone.classList.remove('drag-over');
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = Number(e.dataTransfer.getData('text/plain'));
      if (!id) return;
      TIERS.forEach(t => { tierData[t] = (tierData[t] || []).filter(x => x !== id); });
      if (tierId !== 'unranked' && !tierData[tierId].includes(id)) tierData[tierId].push(id);
      saveData();
      renderTierList();
    });
  }

  function renderTierList() {
    if (typeof waifus === 'undefined') return;
    const wmap = new Map(waifus.map(w => [w.id, w]));

    TIERS.forEach(t => {
      const zone = document.getElementById('tier-' + t);
      if (!zone) return;
      zone.innerHTML = '';
      (tierData[t] || []).forEach(id => { const w = wmap.get(id); if (w) zone.appendChild(makeThumb(w)); });
      setupDrop(zone, t);
    });

    const unranked = document.getElementById('tier-unranked');
    if (unranked) {
      unranked.innerHTML = '';
      getUnrankedIds().forEach(id => { const w = wmap.get(id); if (w) unranked.appendChild(makeThumb(w)); });
      setupDrop(unranked, 'unranked');
    }

    const label = document.querySelector('.tierlist-unranked-label');
    if (label) {
      const n = getUnrankedIds().length;
      label.textContent = `Unranked (${n}) — drag atau tap kartu untuk assign tier`;
    }
  }

  function openTierList() {
    loadData();
    const modal = document.getElementById('tierlist-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('is-open')));
    renderTierList();
    document.body.style.overflow = 'hidden';
    setTimeout(() => { const cb = document.getElementById('tierlist-close'); if (cb) cb.focus(); }, 80);
  }

  function closeTierList() {
    const modal = document.getElementById('tierlist-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.style.display = 'none';
      const ob = document.getElementById('open-tierlist');
      if (ob) ob.focus();
    }, 200);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const openBtn  = document.getElementById('open-tierlist');
    const closeBtn = document.getElementById('tierlist-close');
    const resetBtn = document.getElementById('tierlist-reset');
    if (openBtn)  openBtn.addEventListener('click', openTierList);
    if (closeBtn) closeBtn.addEventListener('click', closeTierList);
    if (resetBtn) resetBtn.addEventListener('click', () => {
      tierData = { S: [], A: [], B: [], C: [], D: [] };
      saveData(); renderTierList();
    });
  });

  document.addEventListener('keydown', e => {
    const modal = document.getElementById('tierlist-modal');
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') closeTierList();
  });
})();

/* ── DELEGATED CLICK HANDLER ─────────────────────────────── */
/* Registered last so _favorites and _seriesDrawer are defined  */
/* Uses stopImmediatePropagation to prevent script.js card-open */
document.addEventListener('click', function (e) {
  const favBtn = e.target.closest && e.target.closest('.fav-btn');
  if (favBtn) {
    e.stopImmediatePropagation();
    const card = favBtn.closest('.waifu-card');
    if (card) _favorites.toggle(Number(card.dataset.id), favBtn);
    return;
  }
  const seriesTag = e.target.closest && e.target.closest('.waifu-series-tag');
  if (seriesTag) {
    e.stopImmediatePropagation();
    _seriesDrawer.open(seriesTag.dataset.series);
    return;
  }
});
