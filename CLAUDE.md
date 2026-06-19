# CLAUDE.md — Coyote & Quill Website

Operating instructions for Claude Code sessions in this repo.
Last verified: 2026-06-04

## What this is

The public marketing site for **Coyote & Quill LLC** at `coyoteandquill.com`. Six pages (home, about, services, tracewell, case-studies, contact). Hosted on Vercel.

This site is **not** a product or platform — it is the firm's primary market-facing asset. Everything here is in service of credibility, conversion, and brand discipline.

Copyright (c) 2026 Glen Lewis. All Rights Reserved. Proprietary license.

## Regulatory Scope

Scope: none — public marketing site, no user data beyond the contact form. **Merge tier: auto** — green CI auto-merges to `main` (which deploys production via Vercel; the CI build gate is the protection).

## Workflow Rules

1. **Issue first** — create a GitHub issue before starting any work (title, description, acceptance criteria, labels).
2. **Branch always** — `feat/...`, `fix/...`, `chore/...`. Direct pushes to `main` are rejected by ruleset.
3. **PR to merge** — summary + test plan. This repo is Regulatory Scope: none → green CI auto-merges.
4. **Close explicitly** — never auto-close keywords (closes/fixes #N); reference as `refs #N`; close the issue as a separate step with a summary comment.
5. **Serial GitHub ops** — never run issue/milestone operations in parallel.
6. **Commit identity** — `glen@coyoteandquill.com` (set per-repo).

## Quality Gates

Run before every push: `pnpm build` completes cleanly. CI runs build + gitleaks; a PR cannot merge red (enforced by ruleset).

## MCP & Agent Tooling

No MCP servers configured in-repo. Skills from `coyote-and-quill/skills` assumed installed: `scoping`, `closeout`.

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

## Content model & asset pipeline

- **Content:** Field Notes is the only content collection (`src/content/field-notes/`, schema in `src/content.config.ts`). Pages are hand-authored `.astro`. Site is canonical for all written content; LinkedIn gets a hook + link.
- **Web assets** live in `public/` and **deploy publicly** — keep this folder lean (optimized SVG/PNG/ICO/OG-image only). **Source/vector files (`.ai`, `.eps`, print renders, 3D mockups) must NOT live in `public/`** — keep them in a non-served `brand/` dir (or outside the repo). The light-blue seal is the canonical brand mark; favicon + OG card derive from the square PROFILE PIC asset.
- **Analytics:** Vercel Web Analytics only (cookie-free, no consent banner) — the one approved third-party script.

## Do NOT

1. Add a backend, database, or auth layer — this is a marketing site.
2. Add Tailwind, CSS-in-JS, or a UI component library — hand-written CSS is the standard.
3. Add tracking scripts, chatbots, or third-party widgets without an explicit decision.
4. Touch the brand palette or voice rules without referencing the business plan.
5. Push to `main` without verifying `pnpm build` completes cleanly (CI enforces this on every PR).
6. Delete the `C&Q` placeholder logo until the vector logo is committed.
7. **This repo is PUBLIC** — never commit anything not meant for the world: secrets, client names, unreleased product details, internal docs. Secret scanning + push protection + gitleaks CI are on; a key has leaked in this org before (org audit 2026-06-04).
8. **If a key ever reaches a commit anyway: ROTATE it immediately; do not just remove it** — git history keeps it forever, and this history is publicly cloneable.
