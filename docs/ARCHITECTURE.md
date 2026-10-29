# Architecture — Coyote & Quill Website

The map of the site. The rules are in [AGENTS.md](../AGENTS.md). Moved here from `CLAUDE.md` on 29 Oct 2026, when the repo came onto the kit; the content is unchanged.

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

Adding a framework or backend layer is a stop-and-ask: see `AGENTS.md`, Do NOT.

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

## Field Notes — weekly thought leadership

The site has a content collection at `src/content/field-notes/` rendered to `/field-notes` (listing) and `/field-notes/<slug>` (post). Posts cadence: **weekly** (steady, solo-sustainable — was Mon/Wed/Fri; revised in the 2026-06-18 launch-campaign brief), mirrored to LinkedIn.

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

> **Since 29 Oct 2026, step 4 above no longer works as written:** `main` rejects direct pushes, and every merge needs Glen's approval. A post reaches the site through a PR he approves; merging it deploys.

## Status as last verified on 2026-06-04

The two sections below are the June launch plan and its open items, kept as written. They haven't been re-verified since; check the code and the issues before acting on either.

## Launch gate (target: public by end of June 2026)

Governing brief: `docs/briefs/2026-06-18-website-launch-campaign.md` (full Definition of Done there).
Do **not** push the site to a production domain until:

- [ ] LLC is formed and registered
- [x] Vector logo files in hand — `.ai` + `.eps` + transparent PNG delivered 2026-06-18 (light-blue seal is the lead). Still TODO: optimized **SVG** for nav + swap out the `C&Q` text placeholder in `BaseLayout.astro`.
- [ ] `coyoteandquill.com` DNS is configured to Vercel
- [ ] ≥1 **anonymized** case study published (no client/product names) — Claude drafts from Glen's input, Glen approves
- [ ] Contact form wired to **Formspree** (decided) — real POST + success/error states; mailto fallback retained (`main.js` + `contact.astro` currently fake-submit)
- [ ] Favicon + OG social card + per-page SEO meta + sitemap/robots (all currently absent)
- [ ] Vibe Coding Workshop section on `/services` + 4th homepage card
- [ ] **Vercel Web Analytics** enabled (the documented analytics decision; cookie-free)
- [ ] Brand-asset hygiene — source `.ai`/`.eps`/mockups moved OUT of `public/` (it deploys publicly)
- [ ] "Est."/"©" year → 2026 site-wide

Staging on Vercel preview URLs is fine before all gates are met.

## Pending work (visible in code)

| Where | What |
|---|---|
| `BaseLayout.astro` | `.nav-logo-mark` is a `C&Q` text placeholder — swap for the light-blue seal as optimized SVG (PNG fallback); remove `.nav-logo-mark` CSS after |
| `BaseLayout.astro` | No favicon, OG/Twitter meta, canonical, or sitemap/robots — add for launch (SEO/social gate item) |
| `about.astro` | Founder photo is a placeholder card — **post-launch** (not a launch gate); keep placeholder |
| `tracewell.astro` | "Coming Soon" placeholder section — stays "coming soon" through launch (out of scope) |
| `case-studies.astro` | Publish **≥1 anonymized** study for launch (CS-01, healthcare AI integration); CS-02/03 are post-launch |
| `contact.astro` + `main.js` | Form fake-submits — wire to **Formspree** (real POST + states); keep `mailto:hello@coyoteandquill.com` fallback |
