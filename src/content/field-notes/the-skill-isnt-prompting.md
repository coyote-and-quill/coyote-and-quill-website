---
title: "The skill isn't prompting"
description: "AI fills in blanks you didn't know existed. The real skill in vibe coding isn't prompting — it's knowing which assumptions to shape before you type the first message."
pubDate: 2026-06-24
draft: false
tags: ["vibe coding", "ai-assisted development", "requirements"]
# linkedinUrl: ""
---

There is a gap between what the AI app-building ads promise and what actually happens when you sit down to build something real.

Andrej Karpathy — who coined the term "vibe coding" — made an observation that has stayed with me. AI assumes constantly. Every time you prompt a builder, the model is filling in blanks you didn't know existed: how the data should be structured, what the user flow should be, where the logic should live, what edge cases don't need to be handled. If you don't know which blanks are there, you can't fill them intentionally. So the model fills them for you — in ways that make sense to it, not necessarily to your product.

**The skill isn't prompting. It's knowing what assumptions need to be shaped before you ever type the first message.**

That requires some familiarity with how software gets built — not expertise, just enough to know what questions to ask. What are you building and for whom? What does the user experience need to do? What does done look like?

I learned this firsthand building TraceWell — a compliance management platform I built as a solo developer using AI tools. I had spent nearly three years managing software product development before I started. I knew the SDLC. I understood requirements, user stories, test cycles, deployment environments. I knew all of it.

And I still had to relearn it the hard way on my own project.

Here is the most practical thing I can offer. In my first Python course, the professor did not start us with code. He had us draw the experience on paper first. Where does a user land when they log in? What do they see? What can they click on, and where does it take them?

For TraceWell, that looked something like: log in → dashboard showing open stories, in-progress count, overdue items → click a tab → filterable list of user stories. Rough. Back of a napkin. No formal tools required.

The drawing does not need to be detailed or polished. It just needs to capture how you picture the experience going. Trying to build that picture in your head while crafting a prompt on the fly leaves holes you won't notice until the AI fills them for you. And with tools like Claude Code, you can photograph the sketch and drop it in as an attachment. The drawing becomes the prompt.

That sketch — done before writing a single prompt — gives you the blanks to fill intentionally. When you tell an AI builder "I want an app that tracks user stories," the model invents the experience. When you describe the flow first, you are shaping the assumptions before the model can. The first few iterations will be dramatically more useful.

**Vibe coding lowers the floor. Knowing what you want to build before you start raises your ceiling.**

What's the gap you've run into between what AI-assisted building promised and what the experience actually required?
