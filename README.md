# 💖 My Bini List — Dipa's Waifu Collection

> Daftar koleksi bini Dipa — personal waifu list website built with pure vanilla HTML, CSS, and JavaScript. No frameworks, no build tools.

---

## ✨ Features

### Core
- **Waifu Grid** — Browse 332+ waifus with lazy-loaded images and spring-physics hover parallax
- **Filter & Search** — Filter by alphabet, series, or search by name; sort by name or ID
- **Pagination & Infinite Scroll** — Toggle between paginated view and infinite scroll
- **Waifu Modal** — Click any card to open a full detail modal with focus trap

### Gacha System
- **Gacha 1× / 10×** — Pull waifus with SSR / SR / R rarity pools
- **Pity System** — SSR guaranteed at pull 90, SR guaranteed at pull 10; progress bars shown live
- **Ripple & Sound Effects** — Click ripple animation + synthesised pop sound on pull

### New Features
- **Waifu of the Day** — Daily spotlight picked by date-seeded deterministic random
- **Favorites** — Heart-toggle any waifu; filter to "Favorit" view; count tracked in stats
- **Series Drawer** — Click a series name on any card to slide open a panel with all characters from that series
- **Tier List** — Full-screen S/A/B/C/D drag-and-drop ranking board (tap-to-assign on mobile); saved to localStorage
- **Animated Banner** — Aurora gradient overlay, pulsing pink orb, and title glow on the hero section

---

## 🗂 Project Structure

```
/
├── index.html       # Main page (sections: hero, WOTD, new waifu, gacha, stats, filter, grid)
├── style.css        # All styles — dark theme design system, animations, new feature styles
├── script.js        # Core logic — filtering, pagination, gacha, modal, back-to-top
├── features.js      # Feature layer — favorites, pity, WOTD, series drawer, tier list
├── waifu.js         # Waifu data array (332 entries: id, name, series, img)
└── src/
    └── img/
        ├── banner.png
        ├── Lynae_Full_Sprite.png
        └── waifu/   # Individual waifu images (1.jpg … n.jpg)
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| `--bg` | `#0f0f0f` |
| `--card` | `#161616` |
| `--accent` | `#ff557a` |
| `--muted` | `rgba(255,255,255,0.55)` |

Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` is used throughout for "alive" interactions.

---

## 💾 localStorage Keys

| Key | Content |
|---|---|
| `waifu_favorites` | Array of favorited waifu IDs |
| `waifu_pity` | `{ ssr: number, sr: number }` pull counters |
| `waifu_tierlist` | `{ S: [], A: [], B: [], C: [], D: [] }` tier assignments |

---

## 🚀 Usage

No build step needed — open `index.html` directly in a browser or serve with any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

---

© 2025 Dipa — Bini Dipa
