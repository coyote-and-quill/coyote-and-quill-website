---
title: "The use case picks the model"
description: "A model's published numbers tell you what it does. Only your own data tells you whether it gets your decision right. So I tested Jev on 48 of my work items."
pubDate: 2026-10-20
draft: false
tags: ["ai adoption", "model selection", "readiness"]
# linkedinUrl: "" # TODO — add the plain LinkedIn post URL to render the "Discuss on LinkedIn" button
---

In mid-September a new AI model launched that can't write a sentence.

Jev only picks from a fixed set of answers: yes or no, one option from a list, or a rating on a scale. Each answer comes with a probability, which says how sure it is. Within a week it was all over my feeds.

The reflex is familiar: a new model gets attention, so we look for somewhere to use it. That's the tool choosing the problem.

The use case picks the model, not the feed.

The military has two measures for this. A measure of performance (MOP) tells you what a system does. A measure of effectiveness (MOE) tells you whether it achieves the effect you need.

Jev's MOPs are worth knowing. It costs $0.042 per million input tokens. In one independent test it caught 98.3% of spam, about as well as a classic spam filter. The vendor publishes its own limitations page: multi-step reasoning, double negatives, numbers and dates.

None of those numbers tells you whether it will get your decision right.

So I tested it on mine. I gave Jev 48 items from my own work records and asked it to sort each into one of five categories, like "ops" (running my business) or "product" (work for a customer). I already knew each right answer, so I could score it. No client data.

For the first run I wrote a one-line description of each category, the generic kind most people write. Jev got 21 of 48 right: 44%.

The misses had a pattern, and it came from my descriptions. They were loose enough that tools I was building for internal use only fit both "product" and "ops." Jev mostly picked product.

For the second run I tightened the descriptions so each item fit one category. Same model, same 48 items: 39 right, 81%.

Its probabilities got useful too. When it was at least 80% sure, it was right 93% of the time. Under 60%, only 44%. Let it handle the sure ones and pass the rest to a person.

It may look like I rewrote the descriptions to get a better score. It's not cheating. It's what you do when you want a model to automate a process: you make sure your prompt lets the model reach your MOE.

The model's MOPs were the same in both runs. What improved was the MOE: whether it got my decision right. I got there by changing my inputs.

A model's MOPs are on its website. Your MOE is only in your own data.

Five questions before you build on any model:

1. Is the decision narrow enough to be a yes/no or a short list?
2. Do you have examples of the right answer?
3. Which error costs more, a miss or a false alarm?
4. How much can it handle alone before errors cost too much?
5. Where does the data go? For regulated data, that's the first gate.

Which decision would you test first? [Start a conversation](/contact) and tell me.

Part two: [What Jev's wrong answers told me about my own records](/field-notes/what-jevs-wrong-answers-told-me-about-my-own-records).

---

_Sources: TypeSafe docs (docs.typesafe.ai) · xbill's independent tests (DEV Community) · my test, 7 Oct 2026_
