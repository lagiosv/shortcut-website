# Shortcut Website

## Project Overview

Minimal single-page Astro site for shortcut.gr. Features animated gradient background with large outlined "Shortcut" typography.

**Live URLs:**
- https://www.shortcut.gr (production)
- https://shortcut-website.info-c75.workers.dev (workers.dev fallback)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 5 |
| Hosting | Cloudflare Workers |
| Styling | Tailwind CSS v3 |
| Analytics | Plausible (self-hosted) |
| Font | Roboto Serif 700 |

---

## Project Structure

```
shortcut-website/
├── astro.config.ts         # Astro config with Plausible script ID
├── wrangler.jsonc          # Workers deployment config
├── tailwind.config.js
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.astro  # Gradient blob animation
│   │   └── PlausibleAnalytics.astro  # Analytics script
│   ├── layouts/
│   │   └── Base.astro      # Base HTML layout
│   └── pages/
│       └── index.astro     # Main page with typography
└── public/
    ├── _headers            # Security headers
    └── favicon.svg
```

---

## Design Specifications

### Typography
- **Font**: Roboto Serif, weight 700 (bold)
- **Size**: `calc((100vw - 40px) / 5)` - responsive with 20px margins
- **Style**: Outlined text (transparent fill, 1px white stroke at 60% opacity)
- **Line-height**: 0.42 (tight overlap)
- **Letter-spacing**: -0.025em
- **Repetitions**: 3 stacked lines
- **Position**: Center-bottom aligned, 3rd line 50% visible

### Background
- Animated gradient blobs (indigo, violet, cyan)
- Dark slate base (#1e293b)
- Smooth drift animations

---

## Deployment

### Manual Deploy

```bash
npm run build && wrangler deploy
```

### Environment

No secrets required. Plausible script ID is hardcoded in `astro.config.ts`.

**Plausible Script ID**: `pa-jq8pOq83bDgBTsfR2u6fJ`

---

## DNS Configuration

| Record | Type | Target |
|--------|------|--------|
| www.shortcut.gr | AAAA (proxied) | Worker custom domain |
| shortcut.gr | Redirect Rule | → www.shortcut.gr |

Subdomains (*.shortcut.gr) point to Hetzner server (65.21.178.58) for self-hosted services.

---

## Resources

| Resource | URL |
|----------|-----|
| GitHub Repo | https://github.com/lagiosv/shortcut-website |
| Workers Dashboard | Cloudflare Dashboard → Workers |
| Plausible Analytics | https://analytics.shortcut.gr |
