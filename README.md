# Kurtis Classroom — Landing Page

A pixel-faithful, fully responsive recreation of the **Kurtis Classroom** landing
page, built with **Vite + React + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**

```bash
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## What's inside

| Section | Component |
|---|---|
| Sticky navbar + mobile drawer | `src/components/Navbar.jsx` |
| Hero — "Make learning fun!" | `src/components/Hero.jsx` |
| Who is Kurtis for? (4 cards) | `src/components/WhoFor.jsx` |
| Amazing things are happening (carousel) | `src/components/Happening.jsx` |
| Game code (yellow section) | `src/components/GameCode.jsx` |
| How does Kurtis work? | `src/components/HowItWorks.jsx` |
| Our best customers (testimonials) | `src/components/Customers.jsx` |
| Stats + Ready CTA | `src/components/Stats.jsx` |
| Footer | `src/components/Footer.jsx` |
| Shared UI (badges, icons, reveal) | `src/components/ui.jsx` |
| Scroll-reveal hook | `src/hooks/useReveal.js` |

## Design tokens

Defined in `tailwind.config.js`:

- **Colors** — brand blue `#3D5AFE`, sun `#FFC629`, sky `#2DC7F4`, coral `#FF3D5A`, ink `#16161D`
- **Fonts** — Poppins (display), Nunito Sans (body), Caveat (script logo)

## Features

- Pixel-aligned layout matching the prototype
- Fully responsive (mobile / tablet / desktop)
- Smooth animations: scroll-reveal (IntersectionObserver), floating illustrations,
  hover micro-interactions, autoplay carousels
- Accessible: visible keyboard focus, `prefers-reduced-motion` respected
- Clean, reusable component structure

## Assets & notes

- Illustrations and the testimonial avatar live in `public/assets/`.
- The bottom "Ready" CTA currently reuses the *Play* illustration — swap in the
  original face-and-brush artwork when available (`public/assets/ready.png`).
- The App Store / Google Play / AppGallery badges are clean look-alikes, not the
  official branded logos.
