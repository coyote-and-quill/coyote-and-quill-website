---
title: "Doctrine, Not Permission"
description: "The person who does the work can now build the tool that fixes it. When something goes wrong, the instinct is to lock it down. The military solved this a long time ago — and the answer wasn't permission. It was doctrine."
pubDate: 2026-07-10
draft: false
tags: ["vibe coding", "governance", "leadership", "ai adoption"]
---

The most exciting shift I've seen in years: the person who does the work can now build the tool that fixes it. No developer. No waiting six months in someone's queue. They describe what they need in plain language — and build it themselves.

That's a powerful thing to put in someone's hands. It's also brand new for most teams — and the first time something goes wrong, the instinct is to take the keys back. Lock it down. Add approvals. Route everything through the one person who "knows how."

That's the wrong move. You'd trade the whole opportunity to dodge a problem that has a much better fix.

The military solved this a long time ago, and the answer wasn't permission. It was doctrine — the right way to do something, written down once, so the newest person does it right without becoming the expert first.

Here's what that looks like at my bench. When I'm ready to wrap up a piece of work, I don't trust myself to remember every check — under pressure I'll cut a corner like anyone else. So I built a small tool I call closeout. It runs the same standard every time before anything is called done:

- it's actually been tested — not just "looks right to me"
- there's a plain record of what changed and why
- every step is finished in order, with nothing quietly skipped

And it doesn't just wave the work through. My rule is nothing goes final on its own — so simple work it closes straight through, but anything involved, it stops and shows me exactly what changed before I sign off. The doctrine doesn't remove my judgment; it hands me the right call at the right moment — the same for me at 2pm as for someone who started last week.

That's the whole idea behind what's now called a skill: a reusable set of instructions that carries the standard with it, so you can give people permission to build instead of gatekeeping them. And hardly anyone has built that layer yet. Researchers combed through 2,853 open-source projects this year — only 158 used skills at all, and most of the skills that did exist were static notes, not procedures that actually run.

Letting people build is the easy part now. Letting them build safely — and repeatably — is the job. That's what you bring to the table: not the tool, but the doctrine that makes it safe to hand out.

This is one thread in a book I'm writing on military readiness models for enterprise AI adoption.

Letting your people build with AI? [Start a conversation](/contact) — tell me the one step they always skip when they rush something out the door: the test, the second look, the "what if this is wrong" question. That's the first thing worth writing into doctrine.

---

_Sources: Galster et al., "Configuring Agentic AI Coding Tools: An Exploratory Study" (arXiv, 2026) — of 2,853 open-source repositories, only 158 used skills at all; most skills had no executable component._
