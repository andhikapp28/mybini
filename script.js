/* CONFIG */
const DEFAULT_ITEM_TARGET = 18;
const MIN_CARD_WIDTH_PX = 160;
const GRID_GAP_PX = 18;

/* Default  */
let USE_INFINITE_SCROLL = true;

/* STATE */
let state = {
  alphabet: 'all',
  series: 'all',
  search: '',
  sort: 'name-asc',
  pageSize: DEFAULT_ITEM_TARGET,
  page: 1,
  loading: false
};

/* DOM */
const alphabetBar = document.getElementById('alphabet-bar');
const seriesSelect = document.getElementById('series-select');
const searchInput = document.getElementById('search-name');
const sortSelect = document.getElementById('sort-select');
const resetBtn = document.getElementById('reset-filter');
const loadModeSelect = document.getElementById('load-mode');

const waifuGrid = document.getElementById('waifu-grid');
const paginationWrap = document.getElementById('pagination');
const totalCountEl = document.getElementById('total-count');
const filteredCountEl = document.getElementById('filtered-count');
const currentPageEl = document.getElementById('current-page');

const heroBtn = document.getElementById('scroll-to-waifu');
const backBtn = document.getElementById('back-to-top');
const targetEl = document.getElementById('waifu-grid');
const SCROLL_OFFSET = 110;
const SHOW_AFTER = 600;

/* Modal helper */
function modalRefs() {
  return {
    modal: document.getElementById('waifu-modal'),
    modalImg: document.getElementById('modal-img'),
    modalTitle: document.getElementById('waifu-modal-title'),
    modalSeries: document.getElementById('waifu-modal-series'),
    modalId: document.getElementById('waifu-modal-id')
  };
}

/* utils */
function debounce(fn, wait = 120) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}
function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", "&#39;");
}

/* pagesize calc */
function calculateResponsivePageSize() {
  const width = waifuGrid.clientWidth || document.documentElement.clientWidth;
  const single = MIN_CARD_WIDTH_PX + GRID_GAP_PX;
  let cols = Math.floor((width + GRID_GAP_PX) / single);
  if (cols < 1) cols = 1;
  const rows = Math.ceil(DEFAULT_ITEM_TARGET / cols);
  state.pageSize = rows * cols;
}
window.addEventListener('resize', debounce(() => {
  const prev = state.pageSize;
  calculateResponsivePageSize();
  if (prev !== state.pageSize) {
    state.page = 1;
    waifuGrid.innerHTML = '';
    if (USE_INFINITE_SCROLL) loadNextPage(true);
    else renderList();
  }
}, 160));
new ResizeObserver(debounce(() => calculateResponsivePageSize(), 120)).observe(waifuGrid);
calculateResponsivePageSize();

/* alphabet  */
(function initAlphabet() {
  const letters = ['all', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  letters.forEach(letter => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = letter === 'all' ? 'All' : letter;
    btn.dataset.letter = letter;
    btn.classList.toggle('active', letter === 'all');
    btn.addEventListener('click', () => {
      state.alphabet = letter;
      state.page = 1;
      alphabetBar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      waifuGrid.innerHTML = '';
      if (USE_INFINITE_SCROLL) loadNextPage(true); else renderList();
    });
    alphabetBar.appendChild(btn);
  });
})();

/* jumlah series */
(function populateSeries() {
  const set = new Set(waifus.map(w => w.series));
  Array.from(set).sort((a, b) => a.localeCompare(b)).forEach(s => {
    const o = document.createElement('option'); o.value = s; o.textContent = s; seriesSelect.appendChild(o);
  });
})();

/* event listeners */
seriesSelect.addEventListener('change', () => {
  state.series = seriesSelect.value; state.page = 1; waifuGrid.innerHTML = '';
  if (USE_INFINITE_SCROLL) loadNextPage(true); else renderList();
});
searchInput.addEventListener('input', debounce((e) => {
  state.search = e.target.value.trim().toLowerCase(); state.page = 1; waifuGrid.innerHTML = '';
  if (USE_INFINITE_SCROLL) loadNextPage(true); else renderList();
}, 220));
sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value; state.page = 1; waifuGrid.innerHTML = '';
  if (USE_INFINITE_SCROLL) loadNextPage(true); else renderList();
});

/* reset */
resetBtn.addEventListener('click', () => {
  state.alphabet = 'all'; state.series = 'all'; state.search = ''; state.sort = 'name-asc'; state.page = 1;
  searchInput.value = ''; seriesSelect.value = 'all'; sortSelect.value = 'name-asc';
  alphabetBar.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.letter === 'all'));
  waifuGrid.innerHTML = '';
  if (USE_INFINITE_SCROLL) loadNextPage(true); else renderList();
});

/* load-mode select */
if (loadModeSelect) {
  USE_INFINITE_SCROLL = loadModeSelect.value === 'infinite';
  loadModeSelect.addEventListener('change', () => {
    USE_INFINITE_SCROLL = loadModeSelect.value === 'infinite';
    waifuGrid.innerHTML = '';
    state.page = 1;
    paginationWrap.style.display = USE_INFINITE_SCROLL ? 'none' : 'flex';
    if (USE_INFINITE_SCROLL) loadNextPage(true); else renderList();
  });
}

/* filter dan sort */
function getFilteredData() {
  let data = waifus.slice();
  if (state.alphabet && state.alphabet !== 'all') {
    data = data.filter(w => w.name.charAt(0).toUpperCase() === state.alphabet);
  }
  if (state.series && state.series !== 'all') {
    data = data.filter(w => w.series === state.series);
  }
  if (state.search) {
    data = data.filter(w => w.name.toLowerCase().includes(state.search));
  }
  switch (state.sort) {
    case 'id-asc': data.sort((a, b) => a.id - b.id); break;
    case 'id-desc': data.sort((a, b) => b.id - a.id); break;
    case 'name-asc': data.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'name-desc': data.sort((a, b) => b.name.localeCompare(a.name)); break;
    default: data.sort((a, b) => a.id - b.id);
  }
  return data;
}

/* card */
function createCard(w) {
  const card = document.createElement('article');
  card.className = 'waifu-card';
  card.dataset.id = w.id;
  card.innerHTML = `
    <span class="id-badge">${escapeHtml(String(w.id))}</span>
    <img class="waifu-thumb" loading="lazy" src="${w.img}" alt="${escapeHtml(w.name)} — ${escapeHtml(w.series)}">
    <div class="waifu-info">
      <h3>${escapeHtml(w.name)}</h3>
      <p>${escapeHtml(w.series)}</p>
    </div>`;
  attachParallax(card);
  return card;
}

/* parallax */
function attachParallax(card) {
  if (card.__parallaxAttached) return;
  const img = card.querySelector('.waifu-thumb');
  if (!img) return;
  card.__parallaxAttached = true;
  function onMove(e) {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform = `translate(${x * 12}px, ${y * 10}px) scale(1.05)`;
  }
  function onLeave() {
    img.style.transition = 'transform 240ms cubic-bezier(.2,.9,.2,1)';
    img.style.transform = '';
    setTimeout(() => img.style.transition = '', 260);
  }
  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseleave', onLeave);
}

/* pagination mode */
function renderPagination(totalItems, pageSize, currentPage) {
  paginationWrap.innerHTML = '';
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  function pushBtn(label, page, cls = '') {
    const b = document.createElement('button');
    b.className = 'page-btn' + (cls ? ' ' + cls : '');
    b.textContent = label;
    b.disabled = page === currentPage;
    b.addEventListener('click', () => {
      if (page === currentPage) return;
      state.page = page;
      renderList();
      window.scrollTo({ top: waifuGrid.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    });
    paginationWrap.appendChild(b);
  }

  pushBtn('Prev', Math.max(1, currentPage - 1));
  const range = 2;
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - range && i <= currentPage + range)) pages.push(i);
    else if (pages[pages.length - 1] !== '...') pages.push('...');
  }
  pages.forEach(p => {
    if (p === '...') {
      const span = document.createElement('span');
      span.style.padding = '8px 10px';
      span.style.color = 'var(--muted)';
      span.textContent = '...';
      paginationWrap.appendChild(span);
    } else {
      pushBtn(p, p, p === currentPage ? 'active' : '');
    }
  });
  pushBtn('Next', Math.min(totalPages, currentPage + 1));
}


function renderList() {
  const filtered = getFilteredData();
  const total = waifus.length;
  const filteredCount = filtered.length;

  totalCountEl.textContent = total;
  filteredCountEl.textContent = filteredCount;

  const lastPage = Math.max(1, Math.ceil(filteredCount / state.pageSize));
  if (state.page > lastPage) state.page = lastPage;
  currentPageEl.textContent = `${state.page} / ${lastPage}`;

  const start = (state.page - 1) * state.pageSize;
  const pageItems = filtered.slice(start, start + state.pageSize);

  waifuGrid.innerHTML = '';
  if (pageItems.length === 0) {
    waifuGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:28px; color:var(--muted)">Tidak ada waifu ditemukan.</div>`;
  } else {
    pageItems.forEach(w => waifuGrid.appendChild(createCard(w)));
  }

  renderPagination(filteredCount, state.pageSize, state.page);
  paginationWrap.style.display = 'flex';
}


function loadNextPage(reset = false) {
  if (!USE_INFINITE_SCROLL) return;
  if (state.loading) return;

  const filtered = getFilteredData();
  const total = waifus.length;


  totalCountEl.textContent = total;
  filteredCountEl.textContent = filtered.length;

  const lastPage = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  if (reset) {
    state.page = 1;
    waifuGrid.innerHTML = '';
  }
  if (state.page > lastPage) return;
  state.loading = true;

  const start = (state.page - 1) * state.pageSize;
  const pageItems = filtered.slice(start, start + state.pageSize);

  pageItems.forEach(w => waifuGrid.appendChild(createCard(w)));

  currentPageEl.textContent = `${state.page} / ${lastPage}`;

  state.page += 1;
  state.loading = false;
  paginationWrap.style.display = 'none';
  paginationWrap.innerHTML = '';
}


window.addEventListener('scroll', debounce(() => {
  if (!USE_INFINITE_SCROLL) return;
  const nearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800);
  if (nearBottom && !state.loading) loadNextPage();
}, 120));


function openModal(w) {
  const refs = modalRefs();
  if (!refs.modal) return;


  document.body.style.overflow = 'hidden';

  refs.modal.style.display = 'block';
  refs.modal.setAttribute('aria-hidden', 'false');

  if (refs.modalImg) { refs.modalImg.src = w.img || ''; refs.modalImg.alt = `${w.name} — ${w.series}`; }
  if (refs.modalTitle) refs.modalTitle.textContent = w.name || '';
  if (refs.modalSeries) refs.modalSeries.textContent = w.series || '';
  if (refs.modalId) refs.modalId.textContent = String(w.id || '');
}

function closeModal() {
  const refs = modalRefs();
  if (!refs.modal) return;

  document.body.style.overflow = '';

  refs.modal.style.display = 'none';
  refs.modal.setAttribute('aria-hidden', 'true');

  if (refs.modalImg) refs.modalImg.src = '';
}

document.addEventListener('click', (e) => {
  if (e.target.closest && e.target.closest('[data-action="close"]')) { closeModal(); return; }
  const card = e.target.closest && e.target.closest('.waifu-card');
  if (card) {
    const id = Number(card.dataset.id);
    const w = waifus.find(x => x.id === id);
    if (w) openModal(w);
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

if (USE_INFINITE_SCROLL) {
  paginationWrap.style.display = 'none';
  paginationWrap.innerHTML = '';
  waifuGrid.innerHTML = '';
  state.page = 1;
  loadNextPage(true);
} else {
  renderList();
}

/* -----------------------
  Scroll-to-waifu & Back-to-top behaviour
  ----------------------- */
(function () {
  function scrollToTargetSmooth(el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const targetY = Math.max(0, absoluteTop - SCROLL_OFFSET);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  if (heroBtn && targetEl) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTargetSmooth(targetEl);
    });
  }
})();


(function () {
  let backBtn = document.getElementById('back-to-top');
  if (!backBtn) {
    backBtn = document.createElement('button');
    backBtn.id = 'back-to-top';
    backBtn.className = 'back-to-top';
    backBtn.setAttribute('aria-hidden', 'true');
    backBtn.title = 'Back to top';
    backBtn.innerHTML = '▲';
    document.body.appendChild(backBtn);
  }

  const getTarget = () => {
    return document.getElementById('waifu-grid') ||
      document.querySelector('.waifu-grid') ||
      document.querySelector('#waifu-section') ||
      document.querySelector('main') ||
      document.body;
  };

  function scrollToTarget() {
    const el = getTarget();
    if (!el) return window.scrollTo({ top: 0, behavior: 'smooth' });
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const targetY = Math.max(0, absoluteTop - SCROLL_OFFSET);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  function updateVisibility() {

    const infiniteActive = (typeof loadModeSelect !== 'undefined' && loadModeSelect !== null)
      ? (loadModeSelect.value === 'infinite')
      : (typeof USE_INFINITE_SCROLL !== 'undefined' ? USE_INFINITE_SCROLL : true);

    if (!infiniteActive) {
      backBtn.classList.remove('visible');
      backBtn.setAttribute('aria-hidden', 'true');
      return;
    }

    const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > SHOW_AFTER) {
      backBtn.classList.add('visible');
      backBtn.setAttribute('aria-hidden', 'false');
    } else {
      backBtn.classList.remove('visible');
      backBtn.setAttribute('aria-hidden', 'true');
    }
  }

  const onScroll = (typeof debounce === 'function') ? debounce(updateVisibility, 80) : updateVisibility;
  window.addEventListener('scroll', onScroll);

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTarget();
  });

  if (typeof loadModeSelect !== 'undefined' && loadModeSelect !== null) {
    loadModeSelect.addEventListener('change', () => {
      setTimeout(updateVisibility, 100);
    });
  }

  window.addEventListener('load', () => {
    setTimeout(updateVisibility, 120);
  });
  setTimeout(updateVisibility, 80);
})();

/* ===== GACHA ===== */
(function () {
  const stage = document.getElementById('gacha-stage');
  const btn1x = document.getElementById('gacha-1x') || document.getElementById('gacha-btn-large');
  const btn10x = document.getElementById('gacha-10x');
  if (!stage || !btn1x || !btn10x) return;

  const FALLBACK_IMG = 'src/img/waifu/placeholder.jpg';

  function escapeHtml(s) { if (s == null) return ''; return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])); }
  function randInt(max) { return Math.floor(Math.random() * max); }

  function synthPop() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      const now = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(700, now);
      o.frequency.exponentialRampToValueAtTime(1100, now + 0.05);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.5, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o.connect(g); g.connect(ctx.destination); o.start(now); o.stop(now + 0.32);
    } catch (e) { }
  }

  function pickRarity() {
    const r = Math.random() * 100;
    if (r < 5) return 'SSR';
    if (r < 30) return 'SR';
    return 'R';
  }
  function capsuleClassFor(r) { return `rarity-${r}`; }

  function renderIdle() {
    stage.classList.remove('gacha-stage-rolling');
    stage.innerHTML = `<div class="gacha-stage-inner"><div style="font-weight:700">Gacha Bini</div><div style="font-size:13px;opacity:.86">Klik tombol untuk mencoba keberuntungan</div></div>`;
  }

  function renderRolling(n, rarities) {
    stage.classList.add('gacha-stage-rolling');
    stage.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'gacha-capsule-wrap';
    for (let i = 0; i < n; i++) {
      const c = document.createElement('div');
      c.className = 'gacha-capsule bob';
      if (Array.isArray(rarities) && rarities[i]) c.classList.add(capsuleClassFor(rarities[i]));
      wrap.appendChild(c);
    }
    const info = document.createElement('div');
    info.style.marginLeft = '12px';
    info.innerHTML = `<div style="font-weight:700">${n === 1 ? 'Menggacha...' : 'Menggacha ' + n + '×...'}</div><div style="font-size:13px;opacity:.86">${n === 1 ? 'Kapsul berputar' : 'Menarik kapsul'}</div>`;
    stage.appendChild(wrap);
    stage.appendChild(info);
    requestAnimationFrame(() => { if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: (wrap.scrollWidth - wrap.clientWidth) / 2, behavior: 'smooth' }); });
    synthPop();
    return wrap;
  }

  function revealCapsules(wrap, cb) {
    const caps = Array.from(wrap.querySelectorAll('.gacha-capsule'));
    caps.forEach((cap, i) => setTimeout(() => {
      cap.classList.remove('bob');
      cap.classList.add('reveal', 'gacha-shake');
      synthPop();
      setTimeout(() => cap.classList.remove('gacha-shake'), 700);
    }, i * 110));
    const total = caps.length * 110 + 300;
    setTimeout(() => { if (cb) cb(); }, total);
  }

  function renderSingle(w, rarity) {
    stage.classList.remove('gacha-stage-rolling');
    const thumb = (w && w.img) ? w.img : FALLBACK_IMG;
    const name = (w && w.name) ? w.name : 'Unknown';
    const series = (w && w.series) ? w.series : 'Unknown Series';
    stage.innerHTML = `
      <article class="gacha-inline-card gacha-fade-in">
        <img class="gacha-inline-thumb ${rarity === 'SSR' ? 'gacha-ssr-glow' : ''}" src="${escapeHtml(thumb)}" alt="${escapeHtml(name)}">
        <div class="gacha-inline-main">
          <p class="gacha-inline-name">${escapeHtml(name)} <span class="rarity-badge ${capsuleClassFor(rarity)}">${escapeHtml(rarity)}</span></p>
          <p class="gacha-inline-series">${escapeHtml(series)}</p>
          <div class="gacha-inline-meta">ID: ${escapeHtml(String(w && w.id != null ? w.id : '—'))}</div>
        </div>
      </article>
    `;
    requestAnimationFrame(() => { const el = stage.querySelector('.gacha-fade-in'); if (el) el.classList.add('show'); });
    const t = stage.querySelector('.gacha-inline-thumb');
    if (t) {
      t.classList.add('gacha-shake');
      setTimeout(() => t.classList.remove('gacha-shake'), 700);
    }
    synthPop();
    stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function renderTen(results) {
    stage.classList.remove('gacha-stage-rolling');
    const resultsWrap = document.createElement('div');
    resultsWrap.className = 'gacha-stage-results';
    const grid = document.createElement('div'); grid.className = 'gacha-ten-wrap';
    results.forEach((it, idx) => {
      const card = document.createElement('div'); card.className = 'gacha-ten-card gacha-fade-in';
      const imgSrc = (it.w && it.w.img) ? it.w.img : FALLBACK_IMG;
      const name = (it.w && it.w.name) ? it.w.name : 'Unknown';
      const series = (it.w && it.w.series != null) ? it.w.series : '—';
      const imgHtml = `<img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(name)}" class="${it.r === 'SSR' ? 'gacha-ssr-glow' : ''}">`;
      card.innerHTML = `${imgHtml}<div class="gacha-ten-badge ${capsuleClassFor(it.r)}">${escapeHtml(it.r)}</div><div class="gacha-ten-info">${escapeHtml(name)} • ${escapeHtml(String(series))}</div>`;
      grid.appendChild(card);
      setTimeout(() => card.classList.add('show'), 90 * idx);
    });
    resultsWrap.appendChild(grid);
    stage.innerHTML = '';
    stage.appendChild(resultsWrap);
    stage.scrollIntoView({ behavior: 'smooth', block: 'center' });


  }

  let rolling = false;
  function do1x() {
    if (rolling) return;
    rolling = true; btn1x.disabled = true; btn1x.classList.add('gacha-shake');
    setTimeout(() => btn1x.classList.remove('gacha-shake'), 700); btn10x.disabled = true;
    btn10x.classList.add('gacha-shake');
    setTimeout(() => btn10x.classList.remove('gacha-shake'), 700);
    const rarity = pickRarity();
    const wrap = renderRolling(1, [rarity]);
    revealCapsules(wrap, () => {
      const idx = (Array.isArray(waifus) && waifus.length) ? randInt(waifus.length) : -1;
      const w = idx >= 0 ? waifus[idx] : { name: 'Unknown', series: 'Unknown', img: FALLBACK_IMG, id: '—' };
      renderSingle(w, rarity);
      rolling = false; btn1x.disabled = false; btn10x.disabled = false;
    });
  }

  function do10x() {
    if (rolling) return;
    rolling = true; btn1x.disabled = true; btn10x.disabled = true;
    const rarities = Array.from({ length: 10 }, () => pickRarity());
    const wrap = renderRolling(10, rarities);
    revealCapsules(wrap, () => {
      const results = rarities.map(r => {
        const idx = (Array.isArray(waifus) && waifus.length) ? randInt(waifus.length) : -1;
        const w = idx >= 0 ? waifus[idx] : { name: 'Unknown', series: 'Unknown', img: FALLBACK_IMG, id: '—' };
        return { r, w };
      });
      setTimeout(() => { renderTen(results); rolling = false; btn1x.disabled = false; btn10x.disabled = false; }, 240);
    });
  }

  btn1x.addEventListener('click', do1x);
  btn10x.addEventListener('click', do10x);
  btn1x.addEventListener('keyup', (e) => { if (e.key === 'Enter') do1x(); });
  btn10x.addEventListener('keyup', (e) => { if (e.key === 'Enter') do10x(); });

  renderIdle();
  window.doGacha1x = do1x; window.doGacha10x = do10x;

})();


(function () {
  if (typeof waifus === 'undefined' || !Array.isArray(waifus)) {
    return;
  }
  const elTotalSeries = document.getElementById('stat-total-series');
  const elTopSeries = document.getElementById('stat-top-series');
  const elTopThumb = document.getElementById('stat-top-thumb-inline');

  function seriesCounts(list) {
    const map = new Map();
    for (const w of list) {
      const s = (w && w.series) ? String(w.series).trim() : 'Unknown';
      const cur = map.get(s) || 0;
      map.set(s, cur + 1);
    }
    return map;
  }

  function pickRandom(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function updateSeriesStats(list) {
    const data = Array.isArray(list) ? list : waifus;
    const counts = seriesCounts(data);

    const totalSeries = counts.size;
    if (elTotalSeries) elTotalSeries.textContent = totalSeries;

    let topSeries = null;
    let topCount = 0;
    for (const [seriesName, cnt] of counts.entries()) {
      if (cnt > topCount) { topCount = cnt; topSeries = seriesName; }
    }

    if (elTopSeries) {
      if (topSeries) {
        elTopSeries.textContent = `${topSeries} (${topCount})`;
        elTopSeries.title = `Series: ${topSeries} — ${topCount} character(s)`;
      } else {
        elTopSeries.textContent = '—';
        elTopSeries.title = '';
      }
    }
    if (elTopThumb) {
      if (topSeries) {
        const pool = data.filter(w => ((w && w.series) ? String(w.series).trim() : 'Unknown') === topSeries);
        const pick = pickRandom(pool) || null;
        if (pick && pick.img) {
          elTopThumb.src = pick.img;
          elTopThumb.alt = (pick.name ? pick.name : topSeries);
        } else {
          elTopThumb.src = 'src/img/waifu/placeholder.jpg';
          elTopThumb.alt = topSeries;
        }
        elTopThumb.onclick = function () {
          const newPick = pickRandom(pool);
          if (newPick && newPick.img) {
            elTopThumb.src = newPick.img;
            elTopThumb.alt = newPick.name || topSeries;
          }
        };

      } else {
        elTopThumb.src = 'src/img/waifu/placeholder.jpg';
        elTopThumb.alt = '—';
        elTopThumb.onclick = null;
      }
    }

    return { totalSeries, topSeries, topCount };
  }

  try { updateSeriesStats(); } catch (e) { /* ignore */ }
  window.updateSeriesStats = updateSeriesStats;

})();