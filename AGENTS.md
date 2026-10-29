# AGENTS.md — Coyote & Quill Website

Instructions for any agent working in this repo (Claude Code, Codex, Copilot, Cursor). The map is [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).
Last reviewed: 2026-10-29.
Follows the C&Q agentic SDLC kit v1 (coyote-and-quill/skills templates/agentic-sdlc).

## What you are building

The public marketing site for **Coyote & Quill LLC** at `coyoteandquill.com`. Six pages (home, about, services, tracewell, case-studies, contact). Hosted on Vercel.

This site is **not** a product or platform — it is the firm's primary market-facing asset. Everything here is in service of credibility, conversion, and brand discipline.

Copyright (c) 2026 Glen Lewis. All Rights Reserved. Proprietary license.

Regulatory scope: none — public marketing site, no user data beyond the contact form. **Merging to `main` deploys production via Vercel**, so every merge is Glen's: since 29 Oct 2026 (when this repo came onto the kit) green CI no longer auto-merges.

## Commands

```bash
pnpm install      # First-time setup
pnpm dev          # Local dev server at http://localhost:4321
pnpm build        # Static build → dist/
pnpm preview      # Preview the production build
```

## Quality gates

Run every gate in this block before every push; all must be green. Gate checkers such as `cq-tools:run-gates` read this block, so it holds every gate and nothing else. Add or remove a gate here, not in a second list.

```bash
pnpm build
gitleaks detect --source . --no-banner --redact
```

## Required checks on `main`

`build` and `gitleaks`, from `.github/workflows/ci.yml`. A PR cannot merge red. Don't weaken, skip or rename a check to get green. Fix the cause or stop and ask. `kit-check` runs too, but it isn't required.

## Git workflow

1. **Issue first** — create a GitHub issue before starting any work (title, description, acceptance criteria, labels).
2. **Branch always** — `feat/...`, `fix/...`, `chore/...`, `docs/...`. Direct pushes to `main` are rejected by ruleset.
3. **Commits and PRs say `refs #N`** — never auto-close keywords (closes/fixes #N); close the issue as a separate step with a summary comment.
4. **Open the PR and stop.** Glen reviews, approves and merges it with a merge commit, and the merge deploys. Never merge, enable auto-merge, approve or review a PR, by any route. Glen's own edits come in the same way: he pushes a branch, and the bot opens the PR for him to approve.
5. **Serial GitHub ops** — never run issue/milestone operations in parallel.
6. **Agents work as `cq-agent[bot]`, the org's agent app, never as Glen.** The bot can't push `.github/workflows/`; Glen pushes CI changes.

## Do NOT

1. Add a backend, database, or auth layer — this is a marketing site.
2. Add Tailwind, CSS-in-JS, or a UI component library — hand-written CSS is the standard.
3. Add tracking scripts, chatbots, or third-party widgets without an explicit decision.
4. Touch the brand palette or voice rules without referencing the business plan.
5. Push to `main` without verifying `pnpm build` completes cleanly (CI enforces this on every PR).
6. Delete the `C&Q` placeholder logo until the vector logo is committed.
7. **This repo is PUBLIC** — never commit anything not meant for the world: secrets, client names, unreleased product details, internal docs. Secret scanning + push protection + gitleaks CI are on; a key has leaked in this org before (org audit 2026-06-04).
8. **If a key ever reaches a commit anyway: ROTATE it immediately; do not just remove it** — git history keeps it forever, and this history is publicly cloneable.

If you're tempted to add a framework or backend layer, stop and ask first. The default answer is "no — keep this site static." (From the stack's rationale, `docs/ARCHITECTURE.md`.)

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

## Content model & asset pipeline

- **Content:** Two content collections in `src/content.config.ts` — **Field Notes** (`src/content/field-notes/`, short/from-the-bench, weekly) and **Dispatches** (`src/content/dispatches/`, long-form issues ~2×/mo, adds required `subtitle` + optional `substackUrl`). Pages are hand-authored `.astro`. Site is canonical for all written content; LinkedIn/Substack get a hook + link. Substack subscribe URL lives in `src/consts.ts` (`SUBSTACK_URL`) and gates the subscribe CTA — empty = hidden.
- **Web assets** live in `public/` and **deploy publicly** — keep this folder lean (optimized SVG/PNG/ICO/OG-image only). **Source/vector files (`.ai`, `.eps`, print renders, 3D mockups) must NOT live in `public/`** — keep them in a non-served `brand/` dir (or outside the repo). The light-blue seal is the canonical brand mark; favicon + OG card derive from the square PROFILE PIC asset.
- **Third-party scripts:** adding one to a public site is a consent and privacy decision, not a
  build decision — Glen's call, recorded as a `decision`. What is installed today lives in
  `note:website-third-party-scripts` in the CCL store, not here.

## Decision rights

- **You decide:** code structure within the conventions above, and how work splits into issues.
- **Glen approves first:** every merge (each one deploys); any copy, brand or voice change; any third-party script; anything that changes what the site claims; and changes to this file.
