# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **LizWise Investment CC** (lizwise.online), a Namibian food brand (mahangu/pearl-millet pasta, sauces, mozzarella). Originally scaffolded by [Lovable](https://lovable.dev); changes pushed here sync back to Lovable. It is a **statically pre-rendered React site** deployed to Cloudflare Workers.

## Commands

```bash
bun install            # Install deps (bun.lockb is the committed lockfile; npm i also works)

bun run dev            # Dev server (vite-react-ssg dev)
bun run build          # Production build → SSG pre-render every route to static HTML in dist/
bun run build:spa      # Plain SPA build (no pre-render), for debugging SSG issues
bun run build:dev      # Development-mode build
bun run preview        # Serve the built dist/ locally

bun run lint           # ESLint
bun run format         # Prettier write src/**
bun run check-format   # Prettier check only
```

There is **no configured test runner** — `src/worker.test.js` exists but `package.json` has no `test` script and no test framework is installed. Run it ad hoc only if you add one.

## Deployment

Deployed to **Cloudflare Workers** via `wrangler.toml`. `wrangler` build command is `bun run build`; the `dist/` directory is served as static `[assets]` with the Worker (`src/worker.ts`) as fallback. The Worker:
- Serves `index.html` as the SPA fallback when no static asset matches.
- Auto-purges the Cloudflare cache on first execution after each deploy, and exposes `GET /admin/purge-cache` for manual purges (requires `CF_ACCOUNT_ID`, `CF_API_TOKEN`, `ZONE_ID` env vars set in the Worker).

## Architecture

- **Rendering: `vite-react-ssg`** (not plain Vite/CRA). `src/main.tsx` exports `createRoot = ViteReactSSG({ routes })`. At build time each route is pre-rendered to static HTML for SEO; it hydrates as an SPA in the browser. There is **no separate router setup or `HelmetProvider`** in app code — vite-react-ssg owns both.
- **Routing: `src/routes.tsx`** is the single source of truth. All pages render inside `Layout` (Header / `<Outlet/>` / Footer / WhatsApp button). To add a page: create it in `src/pages/`, add a `RouteObject` child in `routes.tsx`, and add an entry to the `navLinks` array in the same file (Header reads this). The `MrCrackers` page is intentionally commented out in both `routes.tsx` and nav — keep the route definition intact when touching it.
- **SEO: head tags use `vite-react-ssg`'s `<Head>`**, not react-helmet directly. Add SEO to a page by rendering `<Seo title=... description=... canonical=... image=... schemaMarkup=... />` (`src/components/Seo.tsx`). All defaults, Open Graph/Twitter tags, and JSON-LD `schemaMarkup` templates live in `src/lib/seo-metadata.ts`. See `SEO-README.md` and `SEO-STRATEGY.md`.
- **Single source of business data: `src/config/links.ts`** — phone, WhatsApp URL, social links, contact info, company info, product categories. `seo-metadata.ts` imports from it. Change contact/brand details here, not inline in pages.
- **UI: shadcn/ui** (Radix + Tailwind, "default" style, slate base). Components in `src/components/ui/` are generated — prefer regenerating via the shadcn CLI over hand-editing. App components live directly in `src/components/`. Path alias `@/` → `src/` (configured in `vite.config.ts`, `tsconfig`, and `components.json`).
- **Images:** `vite-plugin-image-optimizer` compresses images at build (jpg q70, png q90, webp/avif lossless). Static assets and galleries live in `public/`. Analytics (GA/GTM id `G-RT207G9WPN`) injected via `vite-plugin-radar` in `vite.config.ts`.

## Conventions

- Prettier: single quotes (incl. JSX), semicolons, `printWidth: 120`, `arrowParens: avoid`, 2-space indent. Run `bun run format` before committing.
- TypeScript is **loosely configured** (`strictNullChecks: false`, `noImplicitAny: false`, unused vars allowed). `@typescript-eslint/no-unused-vars` is off.
- `vite.config.ts` strips `console`/`debugger` in production via terser — don't rely on console output in prod.
