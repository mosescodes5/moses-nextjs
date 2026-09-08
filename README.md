# Moses Iyamo — Official Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub and import into Vercel, or run `npm run build && npm start`.

## Stack notes

- **Fonts:** Fraunces (display) + Manrope (body), loaded via `next/font/google` — no layout shift, no external font requests at runtime.
- **Animation:** Framer Motion. One orchestrated hero entrance sequence; scroll-triggered reveals on section content; the hero waveform is tied to real playback state (`isPlaying` from `PlayerContext`), not a decorative loop.
- **Data:** everything lives in `lib/data.ts` as typed mock arrays (`releases`, `videos`, `eventsUpcoming`, `eventsPast`, `galleryImages`). This is the seam to swap for Supabase.
- **Player:** `lib/PlayerContext.tsx` holds a single shared `<audio>` element and playback state so the persistent bottom bar and the release rail stay in sync across the whole page.
- **Logo:** `public/logo.png` — swap this file to update the mark everywhere (nav + footer both read from it).

## Wiring up Supabase (not included in this pass)

This was intentionally scoped out — it's a real backend build, not a front-end tweak. When you're ready:

1. `npx supabase init` and set up tables for `releases`, `videos`, `events`, `gallery_images`, roughly matching the shapes in `lib/data.ts`.
2. Add Supabase Auth for a single admin user (or a `role` column if more than one).
3. Use Supabase Storage buckets for audio files and cover art instead of hotlinked URLs.
4. Replace the arrays in `lib/data.ts` with `async` functions that query Supabase, and make the pages that consume them Server Components where they don't need client interactivity.
5. Build `/admin` as a separate route group with its own layout, gated behind auth middleware.

Claude Code is the better tool for that phase — it can run migrations, test against a real database, and iterate on the admin UI with a live dev server.
