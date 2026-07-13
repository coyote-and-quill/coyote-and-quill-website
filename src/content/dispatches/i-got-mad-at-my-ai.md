---
title: "I Got Mad at My AI. The Failure Was Mine."
subtitle: "An AI does the work. It's blind at both ends — and those two blind spots are the one thing you can't hand it."
description: "For six months I got mad at my AI for missing. The failure was mine. An AI is blind at both ends — and those two blind spots are the one thing you can't hand it."
pubDate: 2026-07-13
draft: false
tags: ["AI adoption", "readiness", "governance"]
# substackUrl: ""   # add once cross-posted to Substack (renders a "Read on Substack →" link)
---

For six months I've been building an executive assistant that runs on an AI agent — a tool to plan my days: prioritize the work, protect the prep time before meetings, tell me what "done" looks like on a block of deep work.

For most of those six months, it was bad at all of it. And every time it handed me a plan that missed, I got mad at *it*. If it had been a junior employee, I'd have fired it every other week.

Four weeks ago I worked out who I should have been mad at. Me. And once I saw it, I couldn't unsee the second version of the same mistake — the one I've been quietly making with every capable model I touch.

Here's the hypothesis I backed into the hard way. An AI does the work in the middle, but it's **blind at both ends.** Going in, it can't see the workflow in your head — the part you never wrote down. Coming out, it can't see the edge of its own competence — the places it's confidently wrong. Those two blind spots are the whole of what you own — and you own them differently. The sight going in you supply once: write down what you know, and the gap closes. The sight coming out you supply for as long as you use the tool: a model won't reliably flag its own edge, so someone has to watch for it. What never transfers is the responsibility for either. And the better it gets, the easier it is to believe it can see for itself. It can't — and the one being fooled is you, not the machine.

I fumbled both. Here they are.

## Half one: the sight going in

Here's what I never did for six months: explain how I work.

Not the tasks — the *workflow*. How I decide what earns a deep-work block and what gets triaged. What actually counts as a deliverable. How I guard the thirty minutes before a meeting so I walk in ready. To me all of that is innate; I've done it long enough that it doesn't feel like knowledge, it feels like breathing.

But an agent can't act on what you never say. It looks like it remembers, like it understands the shape of your day — but underneath, between turns, it doesn't. I'd handed it a job without ever handing it the context that makes the job doable, then resented it for guessing.

The fix wasn't a smarter model. It was writing the innate part down — capturing the actual workflow of my day. First thing I made explicit: every deep-work block gets a named deliverable and a time, so the agent knows what "done" even means. That's when it started to work.

The tool took days. The integration took six months — because the integration was me. That's the sight going in: the workflow only you can see, that the model needs and cannot get on its own.

## Half two: the sight coming out

Supervision is the last of the Marine troop-leading steps — and the one they'll tell you matters most, because it's what turns a plan into a result, and it's the first thing to slide when the work keeps coming back good. That's the second blind spot, and the one I'm still fighting: with AI, it hides behind the model getting *better*.

Picture the best hire you ever made — aggressive, takes initiative you didn't ask for. For four, five, six months the work comes back outstanding, faster and cleaner than you'd have managed yourself. So you relax. You skim where you used to scrutinize. You approve on reputation. Then one day, one deliverable, they're confidently, catastrophically wrong — and because you'd stopped looking, it's out the door before you catch it. That bad day is usually the first time you notice how far your supervision had slid. The trust doesn't erode; it shatters, all at once.

I'd started living that with my AI — and the pull is stronger, because the model keeps earning it. It gets better, more consistent; when a tool is right nine times running, you stop bracing for the tenth. And you're told, constantly, that it's trained on *everything* — so it's easy to assume there's no edge at all. So you do the efficient thing: you hand it the checking too, on the quiet assumption that it's mostly right.

But "mostly right" has a shape, and neither of you can see it. At Sequoia's AI Ascent this year, Andrej Karpathy told the story of chess: model chess ability jumped sharply between releases, and the field read it as the model getting generally smarter. It hadn't. Someone had fed its training a pile of chess games; the spike was local to that data — nothing beyond it. A brilliant game told you nothing about the task one square over.

Here's why that should worry a manager. With a person, you can find the edge of what they know — they hesitate, they say "that's not my lane" — and *finding* that edge is what lets you safely trust everything inside it. A model rarely gives you the edge. It runs off the end of its competence at nearly full confidence, with none of the hesitation a person would show — and no way for you to tell, in the moment, which side of the edge you're on. So you can't trust it to check its own work: the place it's least reliable is the place it's least likely to flag. And you won't reliably catch it either — you follow it over the edge. The field experiment that gave this its name, the "jagged frontier," handed 758 consultants a problem set just past what the AI could do. On their own, they got it right about 84% of the time. With the AI, they did *worse*: 19 points less likely to land the right answer — because a confident output carried nothing in it to tell them they'd crossed the line.

Which is why the checking never transfers. Someone has to hold the sight the model doesn't have, and that someone is you. I used to file this under "autonomy ladder" — more rope as the agent proves itself. I still believe it, for scoping *what* it may touch. But proven reliability earns a model wider scope; it never earns it your absence.

## The line I already knew

None of this should have surprised me. I spent years being trained on it, in a setting where the cost of getting it wrong wasn't a missed deadline.

A commander doesn't hand responsibility for an operation to the operations officer who planned it. The OPSO designs the op; the commander owns what happens when it meets the enemy. You can delegate the *task*. You never delegate the *outcome*. HBR put a number on it: in a study of 1,200-plus managers this year, framing an agent as an "employee" led them to catch **18% fewer** of its errors and to blame the model when it failed. But blame doesn't move; it stays with whoever deployed the thing. When its work ships under your name, it's your work.

I forgot that — not in a briefing tent, but at my own desk, with a tool I built myself. When it failed, I got mad at the assistant. I should have gotten mad at the manager who never gave it the sight going in, then stopped supplying the sight coming out.

That manager was me.

## Onboard like a hire. Own like a commander.

So here's where I've landed, sharper than the advice I've been giving.

Onboard your AI like a junior hire: give it the context, scope its access, keep a record. That's the sight going in. Then own it like a commander: the judgment is yours, the review is yours, most of all in the places the model is confident and wrong and you're tired and it's late. That's the sight coming out — and it's the half that gets *harder to hold* as the model gets better, not easier.

Here's the catch. The sight going in has to come from *you* — no vendor can see the workflow in your head; your domain knowledge is the asset, the AI only the instrument. But getting it out of your head, building the tool around it, and standing up the loop that watches the output is its own discipline — the part I kept getting wrong on my own. That's the work I do with operators now: not sell them a model, but pull their workflow into the open and build the ownership, both ends, around it.

That's the part that's actually hard — and the part worth getting right. So if you've got an AI tool that half-works and you can't tell whether the problem is the model or the way it was never built into how you operate: that's the conversation worth having.

You can hand an AI the work. You can't hand it the sight at either end — the context going in or the judgment coming out. And the better it gets, the more that's worth remembering — because the better it gets, the more it tempts you to forget.

---

*This is the thread I pull on here — running AI like a readiness problem instead of a magic button. It's the throughline of a book I'm writing on applying military readiness models to enterprise AI adoption, worked out in the open, one issue at a time. If that's your thread, subscribe.*

*Sources: Andrej Karpathy, Sequoia AI Ascent 2026 ("From Vibe Coding to Agentic Engineering") — jagged intelligence and the chess example (capability local to added training data, not general). Dell'Acqua, McFowland, Mollick, et al., "Navigating the Jagged Technological Frontier" (Organization Science, 2025; field experiment with 758 consultants) — on a task set beyond the AI's frontier, those using AI were 19 percentage points less likely to reach a correct answer than those without it. Harvard Business Review, "Research: Why You Shouldn't Treat AI Agents Like Employees" (Kropp et al., BCG, May 2026) — accountability does not transfer to the model.*
