# Vibe Coding Reposition — Proposed Services Page Copy
> Prepared 2026-07-02 · Status: DRAFT — awaiting Glen's approval before editing services.astro
> Direction: teach non-technical people to translate workflows into apps. Keep the deliverable. Speak to the exec buyer. Preempt shadow IT.

## Service question (the H2 pull-quote)

**Before:**
> "How do I build something real — fast, without hiring developers?"

**After:**
> "How do I make my team more capable — without hiring developers?"

*Why: the before speaks to the builder; the after speaks to the exec signing the check.*

## Body paragraph 1

**Before:**
> You have the ideas and the backlog. Building them means hiring developers or waiting months you don't have. AI collapsed that distance — and most teams haven't caught up to what that means.

**After:**
> Your people already know exactly what needs building — the workflows they grind through every day are the backlog. Turning those workflows into tools used to mean hiring developers or waiting months you don't have. AI collapsed that distance — and most teams haven't caught up to what that means.

*Why: relocates the ideas from leadership to the operators — sets up "translation" as the skill being taught.*

## Body paragraph 2

**Before:**
> In **five days**, your team ships a real, deployed internal tool — and installs **SMEAC**, a briefing doctrine that lets technical and non-technical people direct AI to production-quality work long after we leave. Not a course. Not a sandbox demo. A tool they keep, and the discipline to build the next one.

**After:**
> In **five days**, we teach your non-technical people to translate their own workflows into working software. They ship a real, deployed internal tool — built by them, not for them — and install **SMEAC**, a briefing doctrine that lets anyone direct AI to production-quality work long after we leave. Not a course. Not a sandbox demo. A tool they keep, the skill to build the next one, and the guardrails to do it without creating shadow IT.

*Why: teaching becomes the product, tool stays as proof-of-learning, compliance objection preempted in one clause.*

## "What you leave with" card

**Before (4 bullets):**
- A real, deployed internal tool — built by your team, in five days
- SMEAC — a briefing doctrine for directing AI to production-quality work
- The discipline to build the next one without us
- Technical and non-technical people, both able to ship

**After (5 bullets):**
- A real, deployed internal tool — built by your team, in five days
- The skill to translate everyday workflows into working apps
- SMEAC — a briefing doctrine for directing AI to production-quality work
- Guardrails — so team-built tools never become shadow IT
- The discipline to build the next one without us

*Why: "translation" and "guardrails" are the two new differentiators; "both able to ship" folds into the translation bullet.*

## Unchanged
- Proof note (TraceWell story) — stays as-is; it's the evidence for the whole reposition
- Format / pricing card — unchanged
- JSON-LD `description` (line ~55 + service list) — needs the same reframe once copy is approved; flag for the implementation pass

## Also touched when approved
1. `services.astro` §vibe-coding (above changes)
2. `services.astro` JSON-LD description strings (lines ~14–17, ~55)
3. `index.astro` homepage card 02: question + one-liner ("Five days to a deployed tool your team built — and the doctrine to build the next one without us" → "We teach your team to turn their own workflows into working apps — deployed in five days, with the doctrine to build the next one without us.")
4. Meta description on /services if it references the old framing
