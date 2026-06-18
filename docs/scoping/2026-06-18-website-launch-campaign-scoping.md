# Scoping Interview: Coyote & Quill Website Launch Campaign
Date: 2026-06-18 · Status: complete · Brief: docs/briefs/2026-06-18-website-launch-campaign.md

## Document Inventory
| Document | Status | Action |
|---|---|---|
| CLAUDE.md | ✅ Exists (thorough — stack, conventions, brand, workflow, launch gate, do-nots) | Read; propose updates only if interview surfaces gaps |
| README.md | ✅ Exists (concise, accurate) | Read |
| docs/ARCHITECTURE.md | ❌ Missing | Decide if a 6-page static site warrants one (CLAUDE.md already covers structure) |
| Project auto-memory | ⚠️ No website-specific entry in MEMORY.md | Add a project memory at the end |
| .env reference | N/A | Static site, no secrets — none expected |

## Recon Findings
- **Stack**: Astro 5, fully static, hand-written CSS (`src/styles/global.css`, brand tokens locked), one vanilla JS file (`public/js/main.js`), Inter via Google Fonts CDN, Georgia stack for display. pnpm. Node 20+. Hosted on **Vercel** (auto-deploy on push to `main`). CI = gitleaks + `pnpm build` (no Pages workflow). Repo is **public**.
- **Pages present & their real state**:
  - `index.astro` — complete. Hero ("Est. 2025"), 3-service grid ("Three service lines. One mandate: outcomes."), why-us + TraceWell card, CTA.
  - `services.astro` — complete. 3 services (AI Adoption, Thought Leadership & Exec Comms, Custom App Dev) with included-lists + engagement ranges. No Vibe Coding section yet.
  - `about.astro` — complete copy (founder bio, 4 pillars, mission/values). **Only placeholder = founder photo card.**
  - `tracewell.astro` — complete copy; intentional "Coming Soon" block for product details/screenshots.
  - `case-studies.astro` — intentional "Coming — Phase 2" placeholder + 3 "in preparation" topic cards.
  - `contact.astro` — full styled form + good copy; `action="#"` with JS **fake-submit**; `mailto:hello@coyoteandquill.com` fallback present.
  - `field-notes/` — index + `[...slug]` route live; 1 post (`welcome-...md`); content collection schema defined (title/description/pubDate/draft/tags/linkedinUrl). Cadence intended Mon/Wed/Fri, mirrored to LinkedIn, site-canonical.
- **BaseLayout** — fixed nav with `.nav-logo-mark` C&Q **text placeholder** + adjacent text wordmark + descriptor; nav links (About, Services, TraceWell, Case Studies, Field Notes, Contact CTA); footer "© 2025"; loads `/js/main.js`. **No favicon link, no OG/Twitter meta tags, no canonical, no sitemap/robots** — SEO/social gaps.
- **Brand assets (as of 2026-06-18, full pack delivered)**: 3 variants (01/02/03), each with `SOURCE FILE*.ai` (vector), `VECTOR FILE*.eps` (vector), `TRANSPARENCY*.png` (= `cq-logo*.png`, transparent seal), `COVER IMAGE*.jpg`/`cq-cover*.jpg` (~850×313 banner), `PRNT RS FILE*.jpg` (print), `PROFILE PIC*.jpg` (~1022² square), `3D MOCK UP*.jpg` + `MOCK UP.jpg` (renders). All seals are **full lockups** (contain "COYOTE & QUILL / ADVISORY · STRATEGY · BUILD"), not emblem-only marks.
- **Git**: on `main`; untracked `public/assets/` (logos) + stray `kairachel451-attachments 2/` (do NOT commit — public repo). Workflow mandatory: issue → branch → PR, no direct commits to `main`; close issues explicitly with `refs #N`.

## Decisions already locked (pre-interview)
- **Deploy**: keep **Vercel**; handoff's "GitHub Pages" note is out-of-date. No infra change.
- **Logo preference**: Glen likes the **light-blue seal variant** = `cq-logo-02.png` / `TRANSPARENCY 02.png` (ice-blue disc). Will still preview in-nav before finalizing.
- **Vector launch-gate item**: now SATISFIED (AI + EPS vector delivered).

## Working Hypothesis
Glen wants a foundational SMEAC brief that establishes the website as a **credibility anchor** — a believable, polished presence that closes the "are these people real?" question for warm intros, prospects, and partners — and locks both the path to a **public launch by end of June 2026** AND the **ongoing operating rhythm** (Field Notes cadence, case-study pipeline, SEO/social, iteration) so every future website task traces back to one document.
CONFIDENCE: 85% — Outcome, date, scope, format, launch gates, contact backend, analytics, and brand-asset pipeline all fixed. Remaining unknowns are content/IA: how case study #1 gets authored (now a hard gate), realistic Field Notes cadence, Vibe Coding placement, and whether to create ARCHITECTURE.md.

## Interview Record
### Round 1 — 2026-06-18
| # | Question | Answer | Implication |
|---|---|---|---|
| 1 | Single defining outcome of launch? | **Credibility anchor** | Believability > lead volume. No aggressive funnel/SEO push needed; polish, proof, and trust signals are the priority. Contact path can stay low-friction. |
| 2 | Real public-launch timeline? | **End of June 2026** | ~2-week runway. Launch gate must be cleared in that window. Thursday's build is push #1. |
| 3 | Brief scope horizon? | **Launch-ready + ongoing program** | Brief must cover the recurring rhythm (Field Notes, case studies, SEO/social, iteration), not just the launch gate — it's the foundation for all future work. |
| 4 | Output format? | **Markdown only** | Scoping doc + SMEAC brief stay .md in `docs/`; feed directly into execution sessions. No .docx export. |

### Round 2 — 2026-06-18
| # | Question | Answer | Implication |
|---|---|---|---|
| 5 | Hard launch gates (beyond logo/contact/Vibe)? | **Favicon + OG card; SEO meta; ≥1 published case study** (founder photo NOT a gate) | Case study is now a HARD gate — Glen overrode my "defer" recommendation. Content authorship becomes the critical-path/risk item. Favicon+OG+SEO meta are in-scope build tasks (all currently absent). Founder photo deferred → keep placeholder at launch. |
| 6 | Contact backend? | **Formspree** | Wire existing form to a Formspree endpoint; keep mailto fallback. No backend code; endpoint ID safe for public repo. Update `main.js` handler to do a real POST. Honors "no backend" rule. |
| 7 | Analytics posture? | **Vercel Web Analytics** | Cookie-free, no consent banner, one-line enable. This IS the documented "explicit decision" CLAUDE.md requires. Add `@vercel/analytics` + component. |
| 8 | Brand-asset end state? | **Full pipeline + repo hygiene** | Generate optimized SVG (nav) from vector, favicon (from PROFILE PIC square), 1200×630 OG card; MOVE ~22MB source files (.ai/.eps/3D mockups) OUT of `public/` into a non-served `brand/` dir. SVG conversion may need Inkscape/Illustrator; fallback = high-res transparent PNG. |

### Round 3 — 2026-06-18
| # | Question | Answer | Implication |
|---|---|---|---|
| 9 | Case study #1 authorship? | **I draft, you approve** | I interview Glen / take bullet notes on the healthcare-startup AI-integration engagement → write an ANONYMIZED draft (no Propel/Providence/client names) → Glen edits & signs off. Critical-path content task; needs a short input session from Glen early in the window. |
| 10 | Field Notes cadence? | **Weekly, steady** | Document weekly cadence (not M/W/F). Update CLAUDE.md's "Mon/Wed/Fri" references to weekly. Seed at least 1–2 posts beyond the existing welcome post before launch so the section isn't bare. |
| 11 | Vibe Coding IA? | **4th card + /services section** | Add Vibe Coding section to `/services` (handoff copy); add a 4th homepage card; reframe homepage heading → "Three service lines. One workshop. One mandate: outcomes." No new nav link/page. |
| 12 | ARCHITECTURE.md? | **Skip — fold into CLAUDE.md** | No standalone doc. Add a short content-model + asset-pipeline + brand-asset-hygiene note to CLAUDE.md. |

## Confirmed Restate (Confirmation Gate)
- **Outcome:** A credible, polished public website that closes the "are these people real?" question for warm intros, prospects, and partners.
- **User:** Mid-market AI adopters and founders in regulated/defense-adjacent industries (+ leaders needing exec comms, and investors/partners via TraceWell).
- **Why now:** Coyote & Quill LLC launches end of June 2026; the site must be live and credible to match.
- **Success:** Public on coyoteandquill.com by end of June 2026 with: real logo, working Formspree contact, ≥1 anonymized case study, Vibe Coding workshop, favicon + OG social card, per-page SEO meta, clean `pnpm build`.
- **Constraint:** ~2-week solo runway; static-only (no backend); public repo (no secrets/client names); brand tokens + voice locked.
- **Out of scope:** Founder headshot (placeholder OK), TraceWell product deep-dive (stays "coming soon"), GitHub Pages migration, any backend/DB/auth, paid ads.
- _Status: **CONFIRMED — explicit yes, 2026-06-18.**_

## Assumptions Carried Into the Brief
1. Glen creates the Formspree account + provides the endpoint ID; Glen enables Vercel Web Analytics in the dashboard (Claude cannot create third-party accounts).
2. Glen provides ~15 min of case-study input early in the window (critical-path content).
3. `coyoteandquill.com` DNS → Vercel and LLC formation are tracked outside this brief (CLAUDE.md launch gate).
4. "Est. 2025" / "© 2025" → **2026** everywhere, matching the logo seal's "EST. 2026".
5. Audience priority (from existing copy): mid-market AI adopters + regulated/defense-adjacent founders primary; exec-comms leaders + investors/partners secondary.

## Synthesis (living)
- **Situation**: Well-scaffolded Astro static site, mostly content-complete, never publicly launched; brand identity just finalized (logo pack in hand). Repo public, Vercel-deployed, disciplined issue→branch→PR workflow.
- **Mission**: TBD — pin the single launch outcome + definition of done.
- **Execution**: Known immediate tasks (logo, Vibe Coding, footer/Est. year, placeholder verify, contact backend, smoke+build) + emerging (SVG/favicon/og-image from new assets, asset hygiene moving source files out of `public/`, SEO/social meta). Frontend only; no backend beyond a form handler service.
- **Security**: Minimal — static marketing site; only live surface is the contact form (spam/abuse, third-party form service trust, no PII storage). Public repo → no secrets, ever.
- **Admin/Logistics**: Vercel deploy on merge; CI gitleaks+build; test = `pnpm build` clean + manual smoke; docs to touch = CLAUDE.md launch-gate, maybe new ARCHITECTURE.md.
- **Command/Signal**: Glen approves merges; work lands as GitHub issues → branches → PRs → explicit issue close.

## Open Questions
- ~~Single defining outcome?~~ → **Credibility anchor** (R1)
- ~~Hard public-launch date?~~ → **End of June 2026** (R1)
- ~~Scope horizon?~~ → **Launch-ready + ongoing program** (R1)
- ~~Output format?~~ → **Markdown only** (R1)
- Definition of "launch-ready": which items are HARD gates to flip public (logo, contact backend, ≥1 case study, founder photo, favicon+social card, SEO meta)?
- Contact backend choice (Formspree vs Vercel function vs mailto-only)?
- Analytics/measurement — Vercel Web Analytics vs privacy-friendly (Plausible/Fathom) vs none vs GA4?
- Brand-asset pipeline: generate optimized SVG (from .ai/.eps) for nav + favicon + og:image (from PROFILE PIC)? Move heavy source files OUT of `public/`?
- Vibe Coding homepage treatment (4th card vs separate callout) + own nav link/page?
- Case study: is ≥1 published study a hard launch gate, or stay "coming soon"? Who writes it?
- Founder photo for About at launch, or keep placeholder / use a brand cover render?
- Field Notes realism — is Mon/Wed/Fri sustainable solo, and who/what feeds it?
- Create docs/ARCHITECTURE.md, or is CLAUDE.md sufficient for a 6-page static site?
- Target audience priority order (mid-market AI adopters / regulated-industry founders / DoD-adjacent / investors)?
