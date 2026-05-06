# CLAUDE.md — Coyote & Quill Website

Operating instructions for Claude Code sessions in this repo.

## What this is

The public marketing site for **Coyote & Quill LLC** at `coyoteandquill.com`. Six pages (home, about, services, tracewell, case-studies, contact). Hosted on Vercel.

This site is **not** a product or platform — it is the firm's primary market-facing asset. Everything here is in service of credibility, conversion, and brand discipline.

## Quick reference

```bash
pnpm install      # First-time setup
pnpm dev          # Local dev server at http://localhost:4321
pnpm build        # Static build → dist/
pnpm preview      # Preview the production build
```

## Tech stack

| Concern | Choice |
|---|---|
| Framework | **Astro 5** |
| Output | Static HTML/CSS/JS (no SSR) |
| Hosting | **Vercel** (auto-deploys on push to `main`) |
| Package manager | pnpm |
| Node | 20+ |
| Styling | Hand-written CSS (`src/styles/global.css`) — no Tailwind, no preprocessor |
| Client JS | One vanilla file (`public/js/main.js`) — no framework runtime |

### Why Astro and not Next.js

TraceWell uses Next.js. This site uses Astro. The split is intentional — match the framework to the workload, don't standardize for its own sake.

- **Astro** is purpose-built for content/marketing sites. Zero JS by default, file-based routing, content collections for posts when we add them, fast builds.
- **Next.js** earns its weight when you need a real backend, server components, dynamic rendering, RSC streaming. None of which a marketing site needs.
- Vercel deploys both identically — no operational cost to the split.

If you're tempted to add a framework or backend layer, stop and ask first. The default answer is "no — keep this site static."

## Directory structure

```
coyote-and-quill-website/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared shell: head, nav, footer, global CSS, client JS
│   ├── pages/
│   │   ├── index.astro         # /
│   │   ├── about.astro         # /about
│   │   ├── services.astro      # /services
│   │   ├── tracewell.astro     # /tracewell
│   │   ├── case-studies.astro  # /case-studies
│   │   └── contact.astro       # /contact (scoped form styles)
│   └── styles/
│       └── global.css          # All site styles, brand tokens at top
├── public/
│   └── js/
│       └── main.js             # Mobile nav, active link, form handler, scroll shadow
├── astro.config.mjs            # Site URL only — keep minimal
├── tsconfig.json               # Extends astro/tsconfigs/strict
└── package.json
```

## Brand — locked

Pulled from the Coyote & Quill business plan, Section 6. Do not deviate without an explicit decision.

### Palette (CSS custom properties in `src/styles/global.css`)

| Token | Hex | Use |
|---|---|---|
| `--night-field` | `#1B1F28` | Background |
| `--ttecg-blue` | `#1B3A6B` | Structure (headings, borders) |
| `--slate-grey` | `#4A6080` | Secondary text, dividers |
| `--ice-blue` | `#8AAAC8` | Primary body text on dark |
| `--coyote-orange` | `#C4621A` | Accent — use sparingly |
| `--off-white` | `#E8EDF2` | Headings on dark |

### Typography
- **Display** (`--font-display`): Italic serif (Georgia stack) — titles, hero, logo wordmark
- **Body** (`--font-body`): Inter (loaded from Google Fonts) — all running text
- **Tagline**: "Observe. Assess. Advise." — always in full, always in this order

### Voice — "Benchmade meets McKinsey"
- Direct — say the thing, then stop
- Earned — every claim is grounded in demonstrated experience
- No fluff — remove adjectives that don't carry weight
- Dark humor permitted — sparingly, only when it lands
- Never contractor-generic

If you write or rewrite copy, it must read like someone who has been in the fight, not someone who read about it.

## Conventions

- **Internal links use clean URLs** (`/about`, not `/about.html`). Astro file-based routing handles the rest.
- **No hardcoded color values** in pages — always reference the CSS custom properties.
- **Inline `style="..."`** is acceptable for one-off layout tweaks; promote to `global.css` if reused 2+ times.
- **Page-specific styles** go in a scoped `<style>` block at the bottom of the page's `.astro` file (see `contact.astro` for example).
- **Pages should not import other pages** — shared chrome lives in `BaseLayout.astro`.

## Field Notes — Mon/Wed/Fri thought leadership

The site has a content collection at `src/content/field-notes/` rendered to `/field-notes` (listing) and `/field-notes/<slug>` (post). Posts cadence: Mon/Wed/Fri, mirrored to LinkedIn.

### Workflow (site-first)

1. `pnpm new-post "Title of the post"` — scaffolds a markdown file with today's date, slugified filename, and `draft: true`.
2. Write the post in the new file. Set `draft: false` when ready.
3. Optional: add `linkedinUrl` to frontmatter once the LinkedIn version is published — renders a "Discuss on LinkedIn →" CTA at the bottom of the post.
4. `git commit && git push` → Vercel auto-deploys → live at `/field-notes/<slug>`.
5. Post a teaser + link to the live URL on LinkedIn.

**Site is canonical.** The full piece lives here; LinkedIn gets the hook + link. This protects SEO and drives traffic to the website (the goal).

### Frontmatter schema (`src/content.config.ts`)

```yaml
title: "..."           # required
description: "..."     # required — used for listing preview + meta description
pubDate: 2026-05-06    # required — drives sort order
draft: false           # default false; true hides from listing + routes
tags: []               # optional
linkedinUrl: "..."     # optional — renders "Discuss on LinkedIn" link
```

### Where the post styling lives

Prose styles (h2/h3/p/blockquote/code/links/etc.) are scoped in `src/pages/field-notes/[...slug].astro` via `:global()` selectors inside `<style>`. Brand palette tokens still come from `global.css`. If we later add prose elsewhere, promote those styles to a `.prose` class in `global.css`.

## Launch gate (from business plan, Section 12)

Do **not** push the site to a production domain until:

- [ ] LLC is formed and registered
- [ ] Vector logo files in hand (SVG, AI, PNG) — currently using `C&Q` text placeholder in `BaseLayout.astro`
- [ ] `coyoteandquill.com` DNS is configured to Vercel
- [ ] At least one case study or service page is publication-ready
- [ ] Contact form has a real backend (Formspree, Vercel Function, etc.) — currently fake-submits

Staging on Vercel preview URLs is fine before all gates are met.

## Pending work (visible in code)

| Where | What |
|---|---|
| `BaseLayout.astro` | `.nav-logo-mark` is a `C&Q` text placeholder — swap for `<img src="/assets/logo/cq-logo.svg" />` when vector logo arrives |
| `about.astro` | Founder photo is a placeholder card — swap when image is in hand |
| `tracewell.astro` | "Coming Soon" placeholder section — flesh out before launch |
| `case-studies.astro` | All three case studies are stubs — write at least one before launch |
| `contact.astro` | Form `action="#"` and JS handler in `main.js` are fakes — wire to a real form service |
| `contact.astro` | `mailto:hello@coyoteandquill.com` — confirm address is operational |

## Do NOT

1. Add a backend, database, or auth layer — this is a marketing site.
2. Add Tailwind, CSS-in-JS, or a UI component library — hand-written CSS is the standard.
3. Add tracking scripts, chatbots, or third-party widgets without an explicit decision.
4. Touch the brand palette or voice rules without referencing the business plan.
5. Push to `main` without verifying `pnpm build` completes cleanly.
6. Delete the `C&Q` placeholder logo until the vector logo is committed.
