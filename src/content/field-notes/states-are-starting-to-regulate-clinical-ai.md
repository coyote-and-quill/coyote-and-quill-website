---
title: "States are starting to regulate clinical AI. Who on the building team notices?"
description: "California's clinical-AI laws take effect 1 January 2027, and Texas has its own. More and more, the teams building health tools make the compliance calls."
pubDate: 2026-11-05
draft: false
tags: ["healthcare ai", "ai governance", "compliance", "regulation"]
# linkedinUrl: "" # TODO — add the plain LinkedIn post URL to render the "Discuss on LinkedIn" button
---

On 1 January 2027, California's new rules for clinical AI take effect. Texas already has rules of its own. More states will follow.

AB 1979 covers hospitals, clinics and physician offices using clinical decision support. They have to take reasonable steps so a licensed clinician keeps independent judgment. They also can't use AI to independently do clinical work that requires a license, or to direct unlicensed staff doing it. If your own app uses AI, make sure it can't do either, and be able to show how.

SB 503 covers whoever builds and deploys those tools. They have to find, reduce and monitor the risk of biased impacts. One organization can be both, so a tool your own team built still counts. An internal tool can skip the developer documentation only if the same information is on hand: what data trained it, how it was tested for bias, how it's monitored.

Texas requires providers to tell patients when AI is used in their care.

These laws are about AI that shapes clinical care, not about how an app was built.

More and more, the people who have to notice these laws are the teams building the tools. Health organizations are building their own software, often with the people closest to the work doing it, and compliance decisions are moving to those teams.

I'm watching this happen at a client now. Their compliance department has said it will work more like a legal review. Most compliance decisions now fall to the teams doing the building. Those teams don't have compliance people, and can't afford a full-time one.

So how does a team like that learn a law like AB 1979 passed? How does it know whether the tool it shipped last spring is covered? Often, nobody knows to look.

So far it's California and Texas. As more states pass their own versions, a team that tracks them by catching the news will miss some.

So I'm building a tool that checks an app's logic against laws like these as the code is written.

I'm not a lawyer, and these laws are new. What I want to understand is the practice.

If you lead compliance, legal, IT or clinical informatics: how does your organization find out a new state law applies to a tool it already built? [Start a conversation](/contact) and tell me.

If you'd like to see what my tool flags in a sample clinic app, [get in touch](/contact).

Not legal advice. Talk to counsel about what applies to you.

---

_Sources: California [AB 1979](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1979) and [SB 503](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB503); Texas [HB 149](https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB149) and [SB 1188](https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1188)_
