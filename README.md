# Adarsh Electronics — Landing Page

Premium, dark-themed, bilingual (English/Hindi) landing page for a lighting
showroom. Built with React (Vite), Tailwind CSS, and Framer Motion. Ships as
a 100% static build — no server, no API routes — ready for Cloudflare Pages.

## Stack

- **React 18** via **Vite** (static build, not Next.js — Vite's static
  output maps directly to Cloudflare Pages with zero config)
- **Tailwind CSS** for styling (custom tokens in `tailwind.config.js`)
- **Framer Motion** for scroll reveals, hover states, and the animated
  language toggle
- **react-icons** (Heroicons + Font Awesome sets)

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a fully static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, pick the repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. No environment variables or server functions are needed — the
   whole site is static HTML/CSS/JS.

## Customizing content

- **Product photos:** open `src/products.js` and replace each `image` URL
  with your own photo (upload to `/public` and reference as `/your-file.jpg`,
  or use any hosted image URL). Each product also needs a `category` of
  `living`, `outdoor`, or `chandeliers` to appear under the matching filter.
- **Hero background image:** in `src/components/Hero.jsx`, replace the
  `backgroundImage` URL with your own showroom photo.
- **Text (English & Hindi):** all copy lives in `src/i18n.js` under the `en`
  and `hi` objects — edit both so the toggle stays in sync.
- **WhatsApp number:** in `src/components/WhatsAppFAB.jsx`, set
  `WHATSAPP_NUMBER` to your real number (country code + number, digits only,
  e.g. `91XXXXXXXXXX`). The pre-filled message text is set in `src/i18n.js`
  under `whatsapp.message` for both languages.
- **Google Maps:** the footer has a placeholder box
  (`src/components/Footer.jsx`, look for "Map placeholder"). Swap it for an
  `<iframe>` with your embedded Google Maps link.
- **Colors:** the palette (deep charcoal + warm gold "filament" accent) is
  defined in `tailwind.config.js` under `theme.extend.colors` — change
  `filament`, `filament2`, `brass`, `void`, `panel` to restyle the whole
  site.

## Notes on the design

- The signature visual motif is the **filament divider** — a hand-drawn SVG
  line (`src/components/Filament.jsx`) that draws itself in on scroll,
  echoing a glowing bulb filament. It separates major sections instead of a
  plain rule.
- Hindi copy uses the **Hind** typeface (loaded in `index.html`); English
  copy uses **Fraunces** for display text and **Inter** for body text, so
  both languages keep their own appropriate rhythm rather than forcing one
  font to do both jobs.
- Respects `prefers-reduced-motion` and includes visible keyboard focus
  states throughout.
