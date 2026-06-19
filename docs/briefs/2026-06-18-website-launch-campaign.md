# SMEAC Brief: Coyote & Quill Website Launch Campaign
Date: 2026-06-18 · Author: scoping interview · Status: ready for execution
Scoping record: `docs/scoping/2026-06-18-website-launch-campaign-scoping.md`

---

## Situation

Coyote & Quill LLC is an AI-native advisory + build firm (consulting across AI adoption, executive communications, and custom app development) with a flagship owned product, **TraceWell** (healthcare compliance SaaS, patent filed). The LLC launches **end of June 2026**. The public marketing site exists but has never gone live publicly.

**Current state of the site (`coyote-and-quill/coyote-and-quill-website`):**
- **Stack:** Astro 5, fully static, hand-written CSS (`src/styles/global.css`, brand tokens locked), one vanilla JS file (`public/js/main.js`), Inter via Google Fonts, Georgia stack for display. pnpm, Node 20+. Hosted on **Vercel** (auto-deploy on push to `main`). CI = gitleaks + `pnpm build`. **Repo is public.**
- **Pages:** `index`, `services`, `about`, `tracewell`, `case-studies`, `contact`, `field-notes/` (index + dynamic route, 1 post). Most are content-complete in locked brand voice.
- **Known gaps / placeholders:**
  - Nav shows a `C&Q` **text placeholder**, not the real logo.
  - `services.astro` has 3 service lines but **no Vibe Coding workshop** section.
  - Homepage grid is 3 cards ("Three service lines. One mandate: outcomes.").
  - `contact.astro` form **fake-submits** (JS stub) — has a `hello@coyoteandquill.com` mailto fallback.
  - `case-studies.astro` is an intentional "Coming — Phase 2" placeholder.
  - `about.astro` founder bio is complete; **founder photo is a placeholder card**.
  - `tracewell.astro` has a "Coming Soon" product-detail block.
  - `BaseLayout.astro`: **no favicon, no OG/Twitter meta, no canonical, no sitemap/robots.**
  - Footer "© 2025" and homepage hero "Est. 2025" contradict the logo seal's "EST. 2026".
- **Brand assets (full pack delivered 2026-06-18):** 3 seal variants (01/02/03), each with vector source (`SOURCE FILE*.ai`, `VECTOR FILE*.eps`), transparent PNG (`TRANSPARENCY*.png` = `cq-logo*.png`), banner cover (`COVER IMAGE*`/`cq-cover*.jpg`), print (`PRNT RS FILE*`), square (`PROFILE PIC*.jpg` ~1022²), and renders (`3D MOCK UP*`, `MOCK UP.jpg`). All seals are **full lockups** (contain the wordmark). **~22 MB of source files currently sit in `public/`, which deploys everything publicly.**
- **Decided pre-build:** keep **Vercel** (handoff's GitHub Pages note is stale); preferred logo = **light-blue seal variant** (`cq-logo-02.png` / `TRANSPARENCY 02.png`).

**Prior attempts / constraints:** Disciplined `issue → branch → PR` workflow is mandatory; no direct commits to `main`; public repo with secret-scanning + gitleaks (a key leaked in this org before — never commit secrets/client names). Brand palette + voice are locked per `CLAUDE.md`.

---

## Mission

**Make coyoteandquill.com a credible, polished public presence — live by end of June 2026 — that closes the "are these people real?" question for warm intros, prospects, and partners, and stands as the foundation for all ongoing website work.**

### Definition of Done (launch gate — all required to flip the domain public)
- [ ] Real logo (light-blue seal) in the nav, rendered as an optimized **SVG** (PNG fallback acceptable if vector→SVG conversion blocks).
- [ ] **Favicon** (from the square PROFILE PIC asset) + **1200×630 OG social card** + per-page Open Graph/Twitter meta.
- [ ] **Per-page SEO meta** (unique titles + descriptions), `sitemap`, `robots.txt`, canonical URLs.
- [ ] **Working contact form** via **Formspree** (real POST, success/error states), mailto fallback retained.
- [ ] **≥1 anonymized case study** published (no client/product names) — drafted by Claude from Glen's input, approved by Glen.
- [ ] **Vibe Coding Workshop** section on `/services` + 4th homepage card + reframed homepage heading.
- [ ] **Vercel Web Analytics** enabled (the documented "explicit decision").
- [ ] Year alignment: "Est." / "©" → **2026** site-wide.
- [ ] Brand-asset hygiene: source files (.ai/.eps/mockups) **moved out of `public/`**; only optimized web assets ship.
- [ ] `pnpm build` clean (0 errors); manual smoke test passes (logo, nav, mobile hamburger, all links, form, four service sections).

### Explicitly OUT of scope
- Founder headshot (keep placeholder card; swap later).
- TraceWell product deep-dive (stays "Coming Soon").
- GitHub Pages migration (staying on Vercel).
- Any backend, database, or auth layer beyond the Formspree form handler.
- Paid ads / aggressive lead-gen funnels (outcome is credibility, not volume).
- Founder-photo, additional case studies (2 & 3), and TraceWell screenshots — **post-launch backlog**.

---

## Execution

**Intent:** Ship the launch gate in a ~2-week solo window across small, reviewable PRs, sequenced so the highest-credibility / lowest-risk items land first and the one content-risk item (case study) starts early. Keep the site static and minimal; every addition must survive the "does this make the firm more believable?" test. After launch, run a lightweight recurring program (weekly Field Notes, case-study pipeline) against this same brief.

**Frontend:**
- **Logo:** Convert the light-blue seal vector → optimized SVG; place in nav (`BaseLayout.astro`, replacing `.nav-logo-mark`). Because the seal is a full lockup containing the wordmark, decide nav treatment during preview — likely seal-as-emblem beside the existing text wordmark, OR seal alone if legible. Remove the `.nav-logo-mark` CSS once swapped. Preview all three variants in-nav before finalizing (Glen leaning light-blue).
- **Vibe Coding:** Add the handoff's `<section id="vibe-coding">` to `/services` between Service 03 and the CTA; add a 4th homepage card; reframe heading → "Three service lines. One workshop. One mandate: outcomes." No new nav link/page.
- **SEO/social:** Add favicon link + OG/Twitter meta + canonical to `BaseLayout.astro` (per-page title/description already passed as props). Generate OG card image (1200×630, brand-styled). Add `@astrojs/sitemap` or a static sitemap + `robots.txt`.
- **Contact:** Point `<form action>` at the Formspree endpoint; update `main.js` handler to do a real `fetch` POST with success/error UI; keep mailto fallback.
- **Case study:** Build/refine the case-study page layout; publish the one anonymized study.
- **Year fix:** `index.astro` hero eyebrow + `BaseLayout.astro` footer → 2026.
- Responsive + a11y: preserve existing mobile nav; ensure logo `alt`, form labels, and OG image all set.

**Backend:** None beyond Formspree (third-party hosted form). No server, DB, or auth. Vercel Web Analytics is a host feature, not app backend.

**Security:**
- **Access:** Fully public, read-only marketing site. No authn/authz, no roles, no tenancy.
- **Data sensitivity:** Only the contact form collects data (name, email, org, message) — **no PII beyond contact details, no PHI ever**. Data leaves to Formspree; acceptable for this use. Privacy note/expectations already set in copy.
- **Input/abuse surface:** The form is the only live input. Use Formspree's built-in spam filtering (honeypot/captcha as needed). Worst credible abuse case = form spam → mitigated by Formspree; no injection surface (static site, no DB).
- **Secrets:** **Public repo.** Formspree endpoint IDs are safe to commit (they're public by design). Never commit API keys, client names (no "Propel"/"Providence"), or unreleased product detail. Secret-scanning + push protection + gitleaks remain on. If anything leaks: rotate, don't just delete.
- **Third-party scripts:** Only Vercel Analytics (cookie-free) added — the explicit, documented decision. No other trackers/widgets.

**Phases / Tasks** (each sized for one GitHub issue → branch → PR):

| # | Task | Notes / risk |
|---|---|---|
| **T1** | Logo swap + preview all 3 variants in nav (light-blue lead); SVG from vector, PNG fallback | Thursday priority. SVG conversion may need Inkscape/Illustrator — fallback to high-res transparent PNG if blocked. |
| **T2** | Vibe Coding section on `/services` + 4th homepage card + heading reframe | Copy provided in handoff. Mechanical. |
| **T3** | Year alignment 2025→2026 (hero + footer) | Trivial; bundle with T2 or T1. |
| **T4** | Brand-asset hygiene — move .ai/.eps/mockups out of `public/` into non-served `brand/`; keep only web assets | Prevents 22 MB public deploy. Update any references. |
| **T5** | Favicon + OG card + OG/Twitter/canonical meta in BaseLayout | Build favicon from PROFILE PIC; design 1200×630 card. |
| **T6** | SEO: sitemap + robots.txt + per-page meta audit | Add `@astrojs/sitemap`. |
| **T7** | Contact form → Formspree (real POST, success/error states) + mailto fallback | **Depends on Glen supplying the Formspree endpoint ID.** |
| **T8** | Vercel Web Analytics enable (`@vercel/analytics`) | **Depends on Glen enabling it in the Vercel dashboard.** |
| **T9** | Case study #1 — interview Glen, draft anonymized study, publish | **Critical path / highest risk.** Start input session early. |
| **T10** | Launch verification: smoke test + `pnpm build` clean + confirm DNS→Vercel | Final gate. |

**Suggested sequencing:** Thursday build session → T1, T2, T3 (visible wins). Parallel-start T9 (case-study input) immediately. Then T4, T5, T6 (polish/SEO), T7+T8 (integrations, gated on Glen), T10 last.

**Ongoing program (post-launch, governed by this brief):**
- **Field Notes:** **weekly** cadence (revise CLAUDE.md's Mon/Wed/Fri → weekly). Site is canonical; LinkedIn gets hook + link. Seed 1–2 posts beyond the welcome post before launch.
- **Case studies:** pipeline of 2 more (compliance architecture; requirements→UAT tooling) as content allows — all anonymized.
- **Post-launch backlog:** founder headshot, TraceWell detail/screenshots, additional case studies, iteration on conversion paths.

---

## Administration & Logistics

- **Environments:** Vercel preview URLs (per-PR) for staging; production = `coyoteandquill.com` on push/merge to `main`.
- **Dependencies:**
  - Glen: Formspree account + endpoint ID; enable Vercel Web Analytics; case-study input; confirm DNS→Vercel; LLC formation.
  - Dev: possibly Inkscape/Illustrator for vector→SVG (else PNG fallback); ImageMagick/`sips` for favicon/OG image generation; `@astrojs/sitemap`, `@vercel/analytics` packages.
- **Migrations:** none (no DB).
- **Env vars:** none required (Formspree endpoint is a public URL in markup).
- **Test strategy:** `pnpm build` must complete with 0 errors (CI-enforced) + manual smoke checklist (logo render, nav desktop+mobile, all internal links, form submit success/error, four service sections, favicon, OG preview via a share-debugger).
- **Docs to update:** `CLAUDE.md` — launch gate (vector logo now in hand; Formspree + Vercel Analytics decisions; case-study gate), Field Notes cadence (→ weekly), pending-work table, plus a short content-model + asset-pipeline + brand-asset-hygiene note. Keep `docs/scoping/...` + this brief as the record.
- **Rollback:** Vercel keeps prior deployments — instant rollback to the last good build from the dashboard if a deploy regresses.

---

## Command & Signal

- **Approval gates (require Glen's explicit sign-off):**
  - Logo variant + nav treatment (after in-nav preview).
  - Case study #1 final copy (anonymization + accuracy).
  - Merge of every PR to `main` (Glen approves; green CI is the build protection).
  - Flipping DNS / declaring public launch.
- **Escalation / stop-and-ask triggers:** any client/product name risk in copy; any third-party script beyond the agreed Formspree + Vercel Analytics; any temptation to add a backend; vector→SVG conversion failing (fall back to PNG and flag); the case study slipping the window.
- **Reporting:** per-PR summaries + a running launch-gate checklist; flag blockers (Glen-dependencies) early.
- **Where work lands:** GitHub issues (one per task T1–T10) → feature branches (`feat/`, `fix/`, `chore/`, `docs/`) → PRs (summary + test plan) → green CI → Glen-approved merge → issue closed explicitly (`refs #N`, never auto-close keywords). Serial GitHub ops only.

---

## Assumptions & Open Questions

**Assumptions (confirmed or low-risk):**
1. Glen supplies the Formspree endpoint ID and enables Vercel Analytics (Claude can't create third-party accounts).
2. Glen provides ~15 min of case-study input early in the window.
3. DNS→Vercel and LLC formation are tracked outside this brief.
4. "Est."/"©" → 2026 site-wide.
5. Audience priority (from copy): mid-market AI adopters + regulated/defense-adjacent founders primary; exec-comms leaders + investors/partners secondary.
6. Light-blue seal is the leading logo choice, confirmed after in-nav preview.

**Open / to resolve during execution:**
- Vector→SVG conversion tooling availability (else PNG fallback).
- Exact OG card composition (seal + wordmark + tagline on night-field).
- Whether the existing `case-studies.astro` 3-card "in preparation" layout stays (with CS-01 now real) or is restructured.
