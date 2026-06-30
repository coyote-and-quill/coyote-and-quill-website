# Website Relaunch Plan — Coyote & Quill

**Date:** 2026-06-29 · **Status:** in progress · **Trigger:** site taken offline 2026-06-29 (too many issues at first launch). Domains unassigned from the Vercel project; public stays dark until the Part 4 gate is green and Phase 5 re-adds the domains.

This is the governing reference for getting the site genuinely launch-ready. It supersedes ad-hoc fixes. Backed by best-practice research (branding/trust, conversion, UX/accessibility, SEO/GEO) conducted 2026-06-29.

---

## Guiding outcome

The site is a **credibility anchor** — believability for warm intros, prospects, and partners. The metric is *conversion-to-a-conversation*, not traffic volume. Most visitors arrive via warm intro or LinkedIn.

Three lessons drive the work:
- **A — Trust:** for a solo/boutique firm, **proof beats polish**. Named case studies with measurable outcomes, real testimonials, a visible methodology, and the founder's earned credentials are what convert. Differentiator: the honest "you may not need AI" stance.
- **B — Conversion:** the homepage is a conversion tool, not a catalog. Narrative = **problem → risk → solution → proof**. Value props are outcomes, not features. The site *is* the sales call.
- **D — AI search is now material:** AI-referred sessions grew ~527% YoY in 2025 and convert 4–5× better. Win citations via direct-answer copy (first 40–60 words), `FAQPage`/`Person`/`Organization` schema, and freshness (weekly Field Notes → 3.2× more AI citations).

---

## Phased plan (each step → issue → branch → PR; auto-merges to main; public stays dark)

**Phase 1 — Content truth.** Implement the finalized problem-led services copy on home + `/services` + contact; ensure CS-01 reads with a concrete outcome.

**Phase 2 — Brand & UX polish.** Accessibility/contrast fixes (highest-risk; see gate §2); homepage conversion structure (problem→risk→solution→proof, one CTA path); performance/CWV; mobile pass.

**Phase 3 — SEO & GEO.** JSON-LD structured data (`Organization` + `Person` + `Service` + `FAQPage` + `BreadcrumbList`/`Article`); per-page titles/descriptions; Field Notes content engine; direct-answer formatting for AI citation.

**Phase 4 — Pre-launch QA gate (blocking).** Work the checklist below on a preview deployment. Nothing re-launches until it's green.

**Phase 5 — Relaunch.** Re-add `coyoteandquill.com` + `www` to the Vercel project; recreate apex→www redirect; **verify the live production page** (deploy ≠ done); submit sitemap to Search Console; watch analytics + Formspree 24h.

---

## Pre-launch gate checklist (the anti-broken-launch gate)

> No domain is re-added to Vercel until every box is checked on a preview deployment.

### 1. Content & proof
- [ ] New services copy live on home + `/services` + contact; no stale "Communications"/"executive communications"/"AI Adoption & Integration" wording (grep the build).
- [ ] CS-01 reads with a concrete outcome; no client/Propel/Providence names.
- [ ] Proofread every page; year = 2026 sitewide.
- [ ] All internal links resolve; external links correct.

### 2. Accessibility & dark-theme contrast (today's likely culprit)
- [ ] Test exact pairs at 4.5:1 (body) / 3:1 (large/UI): `ice-blue #8AAAC8` on `#1B1F28`; **`slate-grey #4A6080` on `#1B1F28` (suspect — likely FAILS)**; `off-white #E8EDF2` on `#1B1F28`; **`coyote-orange #C4621A` as link/CTA text on dark (suspect)**.
- [ ] All images have `alt`; decorative SVGs (nib/seal) `aria-hidden`.
- [ ] Keyboard-navigable; visible focus states; mobile body font ≥16px.

### 3. Performance (Core Web Vitals)
- [ ] PageSpeed mobile + desktop on home + services: **LCP < 2.5s · INP < 200ms · CLS < 0.1**.
- [ ] Hero seal optimized/sized; fonts not render-blocking LCP.

### 4. Functional & cross-device
- [ ] Contact form: real Formspree submit succeeds; success + error states; honeypot; mailto fallback; test incomplete/weird inputs.
- [ ] Nav + mobile toggle work on Chrome, Safari, Firefox, Edge + iOS + Android.
- [ ] Every page renders at 320 / 768 / 1280px.

### 5. SEO & social
- [ ] Unique title (<60) + description (<160) per page; canonical correct; OG card previews correctly (test a real link paste).
- [ ] `sitemap.xml` + `robots.txt` valid; JSON-LD validates (Rich Results Test).

### 6. Analytics & ops
- [ ] Vercel Web Analytics firing; Search Console verified.
- [ ] `pnpm build` clean + CI green before merge (auto-merge-to-prod → the PR gate IS the protection).

### 7. Final live verification (post-deploy)
- [ ] After re-adding domains: load the real production URL, click every nav item, submit the form once, confirm OG card. Deploy ≠ fixed.

---

## Relaunch ops reference

- **Vercel:** project `coyote-and-quill-website`, team `coyote-and-quill` (`team_9icNPfLaVcPEjgr32XUvja9p`), plan = Pro. Domains were removed via project-domain unassign (registration/DNS/MX intact). Re-add via dashboard → Settings → Domains, or API `POST /v10/projects/.../domains`. Recreate apex→www redirect.
- **Note:** managed password/auth gates need the paid *Advanced Deployment Protection* add-on (not enabled), so we can't gate prod behind a login on the current plan.
