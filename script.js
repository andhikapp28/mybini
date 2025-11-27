// ================
// State & config
// ================
const DEFAULT_ITEM_TARGET = 18;
const MIN_CARD_WIDTH_PX = 160;
const GRID_GAP_PX = 18;

let state = {
  alphabet: 'all',
  series: 'all',
  search: '',
  sort: 'name-asc',
  pageSize: DEFAULT_ITEM_TARGET,
  page: 1
};

// DOM references
const alphabetBar = document.getElementById('alphabet-bar');
const seriesSelect = document.getElementById('series-select');
const searchInput = document.getElementById('search-name');
const waifuGrid = document.getElementById('waifu-grid');
const paginationWrap = document.getElementById('pagination');
const totalCountEl = document.getElementById('total-count');
const filteredCountEl = document.getElementById('filtered-count');
const currentPageEl = document.getElementById('current-page');
const sortSelect = document.getElementById('sort-select');

if (sortSelect) {
  sortSelect.value = state.sort;
  sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    state.page = 1;
    renderList();
  });
}

document.getElementById('reset-filter').addEventListener('click', () => {

  // reset state
  state.alphabet = 'all';
  state.series = 'all';
  state.search = '';
  state.sort = 'name-asc';
  state.page = 1;

  // reset UI
  searchInput.value = '';
  seriesSelect.value = 'all';
  sortSelect.value = 'name-asc';

  // reset Alphabet active button
  alphabetBar.querySelectorAll('button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.letter === 'all');
  });

  // render ulang
  renderList();
});


// debounce helper
function debounce(fn, wait = 120) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// Calculate responsive page size
function calculateResponsivePageSize() {
  const gridWidth = waifuGrid.clientWidth || document.documentElement.clientWidth;
  const single = MIN_CARD_WIDTH_PX + GRID_GAP_PX;
  let columns = Math.floor((gridWidth + GRID_GAP_PX) / single);
  if (columns < 1) columns = 1;

  const rows = Math.ceil(DEFAULT_ITEM_TARGET / columns);
  state.pageSize = rows * columns;
}

// resize handling
const handleResize = debounce(() => {
  const prev = state.pageSize;
  calculateResponsivePageSize();
  if (state.pageSize !== prev) {
    state.page = 1;
    renderList();
  }
}, 150);

window.addEventListener('resize', handleResize);
const ro = new ResizeObserver(debounce(() => handleResize(), 120));
ro.observe(waifuGrid);

// init
calculateResponsivePageSize();

// render alphabet buttons
(function renderAlphabet() {
  const letters = ['all', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
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
      renderList();
    });
    alphabetBar.appendChild(btn);
  });
})();

// populate series dropdown
(function populateSeries() {
  const set = new Set(waifus.map(w => w.series));
  const list = Array.from(set).sort((a, b) => a.localeCompare(b));
  list.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    seriesSelect.appendChild(opt);
  });
  seriesSelect.addEventListener('change', () => {
    state.series = seriesSelect.value;
    state.page = 1;
    renderList();
  });
})();

// search handler
searchInput.addEventListener('input', e => {
  state.search = e.target.value.trim().toLowerCase();
  state.page = 1;
  renderList();
});

// helper: filter data
function getFilteredData() {
  let data = waifus.slice();

  // filters
  if (state.alphabet && state.alphabet !== 'all') {
    data = data.filter(w => w.name.charAt(0).toUpperCase() === state.alphabet);
  }

  if (state.series && state.series !== 'all') {
    data = data.filter(w => w.series === state.series);
  }

  if (state.search) {
    data = data.filter(w => w.name.toLowerCase().includes(state.search));
  }

  // sorting based on state.sort
  switch (state.sort) {
    case 'id-asc':
      data.sort((a, b) => a.id - b.id);
      break;
    case 'id-desc':
      data.sort((a, b) => b.id - a.id);
      break;
    case 'name-asc':
      data.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      data.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      data.sort((a, b) => a.id - b.id);
  }

  return data;
}

// ===========================
// render list + pagination
// ===========================
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
    pageItems.forEach(w => {
      const card = document.createElement('article');
      card.className = 'waifu-card';

      // === NEW: ADD ID BADGE HERE ===
      card.innerHTML = `
        <span class="id-badge">${escapeHtml(String(w.id))}</span>
        <img class="waifu-thumb" loading="lazy" src="${w.img}" alt="${escapeHtml(w.name)} — ${escapeHtml(w.series)}">
        <div class="waifu-info">
          <h3>${escapeHtml(w.name)}</h3>
          <p>${escapeHtml(w.series)}</p>
        </div>
      `;

      waifuGrid.appendChild(card);
    });
  }

  renderPagination(filteredCount, state.pageSize, state.page);
}

// ===========================
// pagination UI
// ===========================
function renderPagination(totalItems, pageSize, currentPage) {
  paginationWrap.innerHTML = '';
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const pushBtn = (label, page, cls = '') => {
    const b = document.createElement('button');
    b.className = 'page-btn' + (cls ? ' ' + cls : '');
    b.textContent = label;
    b.disabled = page === currentPage;
    b.addEventListener('click', () => {
      if (page === currentPage) return;
      state.page = page;
      renderList();
    });
    paginationWrap.appendChild(b);
  };

  pushBtn('Prev', Math.max(1, currentPage - 1));

  const range = 2;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - range && i <= currentPage + range)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
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

// escape HTML helper
function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// keyboard nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    state.page = Math.max(1, state.page - 1);
    renderList();
  } else if (e.key === 'ArrowRight') {
    const filteredCount = getFilteredData().length;
    const last = Math.max(1, Math.ceil(filteredCount / state.pageSize));
    state.page = Math.min(last, state.page + 1);
    renderList();
  }
});

// disable drag/focus artifact for new-waifu image
document.querySelectorAll('.nw-character').forEach(img => {
  img.addEventListener('mousedown', e => e.preventDefault());
  img.setAttribute('draggable', 'false');
});

// initial render
renderList();

// expose for dev
window.WaifuState = state;
window.refreshWaifus = renderList;
