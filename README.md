# Abdul Haseeb — Portfolio

A modern, dark-themed personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Design direction: *Midnight Cobalt* — sleek, engineer-confident, with mono accents and a restrained cobalt glow.

## Tech

- [Next.js 15](https://nextjs.org) — App Router, React 19
- [Tailwind CSS 3](https://tailwindcss.com)
- [Geist](https://vercel.com/font) font (Sans + Mono), self-hosted
- Scroll-reveal via a small `IntersectionObserver` component (no animation library, respects `prefers-reduced-motion`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset **Next.js** is detected automatically — no configuration needed. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — profile, stats, experience, projects, and skills. Update it there and every section reflects the change. The résumé PDF is served from [`public/Abdul-Haseeb-Resume.pdf`](public/).
