---
title: "A skill isn't a document. It's a drill."
description: "Researchers catalogued how developers configure their AI coding agents across 2,853 repositories. The most neglected mechanism — skills — is also the most misunderstood: almost all of them are static notes. The leverage is in the ones that actually run."
pubDate: 2026-06-29
draft: false
tags: ["vibe coding", "ai-assisted development", "skills"]
# linkedinUrl: ""
---

Researchers recently catalogued how developers actually configure their AI coding agents — eight mechanisms across 2,853 open-source repositories.¹ The headline finding is a quiet indictment: most people configure almost nothing. One context file, and that's it.

The mechanism they found most neglected is the one I've become most interested in: **skills**. Of those 2,853 repositories, just **158** used skills at all — and of the skills that did exist, **85.5% had no executable component.** Notes pinned up for the model to read. Almost nobody builds the other kind.

I'm just starting to use skills myself. But the distinction that made them click is this: **a static skill is a note to the AI. An executable skill is a procedure the AI runs.** One reminds. The other does.

Here's a real one. I have a skill called `scoping`. It doesn't say "remember to scope the project." It *runs* the scoping — an adaptive interview that grills me question by question, saves my answers after every round, and ends by generating the project's foundational documents. I don't re-improvise that procedure every time I start something. I invoke it, and it executes the same disciplined drill — whether I'm sharp that day or not.

That's the difference between a checklist taped to the wall and a checklist someone actually runs before takeoff.

The reason most skills stay static is that the static version is easy and the executable one takes work — you have to *encode* the procedure, not just describe it. But that work is where the leverage is. A documented procedure depends on a human remembering to follow it. An executed procedure doesn't. In a regulated build, that's the difference between "we have a process" and "the process ran."

Here's what's faintly embarrassing about that. I've been building software and managing content across a stack of projects for a while now — the exact repeated, multi-project work that skills exist to streamline. And I only just built my first set. Not because I didn't know they existed. Because the static version — write yourself a note — is always the easy thing in front of you, and you don't reach for the executable one until you've re-run the same procedure by hand enough times to resent it. That's the trap the numbers describe. Not ignorance. Inertia.

The point is the one I keep coming back to: the value in AI-assisted work isn't the model. It's everything you build around it so the model does the right thing *every* time — not just the time you happened to be paying attention. Skills turn a procedure you keep repeating into one you never have to repeat again.

I'm early in this. But I already know which way the leverage runs.

---

*¹ Galster, Mohsenimofidi, Lulla, Abubakar, Treude & Baltes. "Configuring Agentic AI Coding Tools: An Exploratory Study." arXiv:2602.14690.*
