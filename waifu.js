/* waifu.js — async loader
   Fetches waifu.json, falls back to inline data if running on file:// protocol
   where fetch() would fail due to CORS/security restrictions.
   window._waifuReady resolves with the array when data is ready.
*/
window.waifus = [];

(function () {
  function loadInline() {
    /* Inline fallback — only used when fetch is unavailable (file://) */
    /* This is a minimal stub; the real data is in waifu.json */
    return Promise.resolve(window._waifuInline || []);
  }

  var canFetch = (
    typeof fetch === 'function' &&
    (location.protocol === 'http:' || location.protocol === 'https:')
  );

  if (canFetch) {
    window._waifuReady = fetch('waifu.json')
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        window.waifus = data;
        return data;
      })
      .catch(function (err) {
        console.warn('[waifu] fetch failed, using inline fallback:', err);
        return loadInline().then(function (data) {
          window.waifus = data;
          return data;
        });
      });
  } else {
    /* file:// or fetch unavailable — load inline data */
    window._waifuReady = loadInline().then(function (data) {
      window.waifus = data;
      return data;
    });
  }
})();
