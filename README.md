# Campaign Website — Demo

Official campaign / digital portfolio website for a political candidate.

> **All content in `data/` is clearly marked placeholder / demo content.**
> Replace with real, verified information before publishing.

## Stack

- Next.js 15 (App Router) — **JavaScript only, no TypeScript**
- Tailwind CSS 3 with centralized design tokens (`app/globals.css`)
- Framer Motion (subtle animation only)
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

## Theming

Every color, radius and shadow is a CSS variable in `app/globals.css`
(`:root` + dark-mode block). Change the palette there once and the whole
site updates.

## Content architecture

- All demo content lives in `data/*.js`.
- Components import content **only** through `lib/content.js` (the data-access
  layer), never directly from `data/`.
- To connect a CMS/backend later, reimplement the functions in `lib/content.js`
  with `fetch()` calls — no component changes required.

## Status

Phase 1 delivered: global layout (Header, MobileNav, Footer) + Homepage.
Remaining pages pending design review.
