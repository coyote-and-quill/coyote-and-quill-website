---
title: "What Jev's wrong answers told me about my own records"
description: "Jev scored 44% on my work items. Twenty of its 27 misses were the same mistake, caused by category definitions that lived only in my head."
pubDate: 2026-10-22
draft: false
tags: ["ai adoption", "data quality", "governance"]
# linkedinUrl: "" # TODO — add the plain LinkedIn post URL to render the "Discuss on LinkedIn" button
---

Jev can't write a sentence. It answers yes or no, picks one option from a list, or gives a rating, each with a probability of how sure it is. That's the whole capability.

So it's easy to take its answers at face value: right or wrong, move on. I nearly did.

When Jev launched, my feeds filled with people pairing it with Claude and other frontier models to automate things. I used the pairing to test Jev, then to read why Jev answered the way it did.

The test: sort 48 pre-categorized work items into five classes: compliance, safety, product, ops or other. First run, 44% right. 20 of its 27 misses were the same mistake. Items my AI assistant filed as ops, Jev called product.

19 of those 20 were work on my own internal tools. Why had my AI assistant called them ops?

Because the categories I'd told it to use had no definitions behind them. I'd been forcing it to sort by feel, and it was consistent enough that I never made the connection: the true definitions lived only in my head.

Jev couldn't see what was in my head. It only had the definitions I wrote for the test, and one of them fit both answers.

Ops, first run: "Running the business day to day: admin, finance, planning, marketing, sales, hiring, tooling."

Product, first run: "Building, shipping or improving a product, offer or client deliverable."

So why did Jev pick product? Both definitions covered internal tool work, but not equally:

- Product starts with "Building." All 19 items described building, fixing or improving something, a direct match.
- Ops covered tool work only with "tooling," the last word in a long list.

Jev picked the strong match.

Ops, second run: "Running Coyote & Quill itself, including building, fixing or improving its own internal tools, admin, finance, marketing and job search."

Product, second run: "Work on something sold to, or delivered for, a client or customer."

The line is now who the work is for. Same model, same items: 81%. And its confidence started to mean something. When it was at least 80% sure, it was right 93% of the time. Under 60%, a person should decide.

The honest part. It's a small test, and I wrote the new definitions after seeing the misses. 41 of the 48 items are ops, so answering "ops" every time would have scored 85%. The accuracy number isn't the result. The gap it found is.

That's the takeaway. A model that can only pick from a list found an error in my AI assistant, which runs on a frontier model. It was a gap I hadn't thought to look for.

If you're experimenting with Jev, don't just score its answers. Ask why it gave them. It can show you problems in your data that you've stopped seeing.

When did a tool's wrong answer last tell you something about your own process? [Start a conversation](/contact) and tell me.

Part one: [The use case picks the model](/field-notes/the-use-case-picks-the-model).

---

_Sources: my test, 7 Oct 2026 (no client data)_
