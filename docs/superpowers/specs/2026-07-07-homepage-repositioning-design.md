# Homepage Repositioning: Client-Landing Consultancy Page

> Date: 2026-07-07
> Status: Approved by Zack (brainstorming session)
> Inspiration: Fletch PMM "run the sales call from the homepage" model

## Goal

Rework zackgilbert.com from a personal/portfolio site into a client-landing
consultancy homepage. The site's actual job — validated against the last five
paid engagements — is to **close warm referrals**, not attract cold traffic.
Every recent client came through relationships (family friend, friend-of-
friend, LinkedIn ex-coworker, and two referrals from a past client). The
homepage must answer, before the first call: is this for me, what does it
cost, what do I get, and how does it work.

## Positioning (Approach A: the "almost-software" umbrella)

Four of the last five engagements involved a domain expert arriving with a
rough artifact — a spreadsheet, a vibecoded app, a stalled prototype — and
needing it taken to production. Cleanup work and 0-1 buildouts are the same
market: one story, two entry points.

**Core positioning statement:** I help domain experts turn their
almost-software (spreadsheets, AI-built apps, prototypes) into production
software people can rely on.

## Offer Stack & Pricing

Published prices. Discounts for friends/family/referrals are handled
privately on the call and never advertised on the site.

| Package | Price | Shape |
|---|---|---|
| Roadmap & Risk Audit | $1,500 fixed | 1 week. Plain-English report on the client's spreadsheet/app: what's solid, what's dangerous (security, data loss, billing), prioritized next steps. Fee credits toward a sprint. |
| Build Sprint | $5,000/month | Full-speed build. Most v1s ship in ~2 months. Weekly Friday demo. Client owns everything. |
| Partnership | $2,500/month | Month-to-month cruising speed after launch (or standalone fractional CTO): fixes, improvements, monitoring, "first call" access. |

Rationale: sprint pricing stays monthly (not fixed-bid) to avoid eating
overruns; $5k/month is the deliberate list-price anchor. The audit is the
low-risk entry product a referrer can confidently recommend — it productizes
the pattern that generated the most referrals.

## Homepage Structure (in order)

1. **Hero** — positioning + one CTA pair
2. **Self-qualification** — "Is this you?" checklist
3. **Packages & pricing** — the three tiers above, real numbers visible
4. **Deliverables** — tangible artifacts per package
5. **Process** — week-by-week view of a sprint
6. **Proof** — curated testimonials + client-story projects
7. **FAQ + final CTA**

### 1. Hero

Headline: **"You built the first version. Let's make it real."**

Subhead: "You know your business cold — and you've already built the rough
version. A spreadsheet the whole operation runs on. An app you vibecoded that
works… mostly. A prototype that proved the idea. I'm a 20-year product
engineer who turns almost-software into production software — for a price
that's right on this page."

One line of credibility (4 exits; Foursquare/Able) — no more. CTAs: "See
pricing ↓" (anchor link) and "Book a 30-min call" (Calendly).

### 2. Self-qualification checklist

Visual checkboxes (static, no interactivity required):

- Your business runs on a spreadsheet only you fully understand
- You built something with AI tools (Lovable, Replit, Cursor) and it works — but you're afraid to touch it
- Real customers or real money now depend on it, and that's starting to scare you
- An agency quoted you $50k+ and six months
- You know exactly what the software should do — you just can't build it yourself

Closer: "If you checked two or more, we should talk." Doubles as a polite
filter for bad-fit leads (cofounder-seekers, enterprises).

### 3. Pricing & packages

Three cards using the table above. Each card: name, price, duration/cadence,
3-5 bullet summary, and which situation it's for. Audit card notes the
sprint credit.

### 4. Deliverables

Per package, concrete artifacts:

- **Audit:** the written report (show a redacted screenshot of a real one),
  prioritized fix list, 30-min walkthrough call.
- **Sprint:** live production app at the client's domain; code in the
  client's GitHub; hosting/deploy in the client's accounts; plain-English
  handbook + Loom walkthroughs; security & backup baseline.
- **Partnership:** weekly ship log, same-week bug turnaround, quarterly
  roadmap chat.

**Emphasize visually:** "Everything lives in your accounts. You're never
hostage." This is the trust differentiator vs. agencies and freelancers.

### 5. Process

Week-by-week strip for the sprint:

- **Before we start:** 30-min call → I look at your spreadsheet/app → audit
  or straight to sprint → fixed v1 scope, in writing.
- **Weeks 1–8:** build in your accounts from day one; **demo every Friday**
  (15-min Loom or live); course-correct weekly.
- **Launch:** deploy, handbook, walkthrough. Then partnership or ride solo —
  no lock-in either way.

### 6. Proof

- Curate to ~5 testimonials. Lead: Emily Nejad (domain expert + business
  outcome) and Seth Kravitz. Keep: Vince, KP, Mallory. Move résumé-flavored
  ones (e.g., Foursquare manager) to /about.
- Prefer placing testimonials adjacent to relevant sections (Emily near
  pricing, Vince near partnership) over one monolithic wall.
- Projects section becomes 3-4 client stories framed as evidence
  ("Bon Vivant Cakes — spreadsheet scheduling → checkout flow"), not a
  portfolio grid.

### 7. FAQ + final CTA

Short FAQ: stack choice; what if the build runs past 2 months; working with
existing teams; what happens if we stop working together (nothing bad — it's
all in your accounts). Single repeated CTA: book the 30-min call.

## Site Restructure

- **/** — the sales page above. Bio paragraphs, career history, Technori/
  community content, and the articles feed are removed from the homepage.
- **/about** — current bio, career history, community involvement, full
  testimonial set, staff/headshot photo.
- **/work** — full project list (recent + past + link to the spreadsheet).
- **/articles** — unchanged.
- The stale $5k/month "Let's Build Something" section is replaced entirely
  by the new pricing section.

## Out of Scope (for now)

- Interactive self-diagnostic tool (static checklist ships first)
- Speaking page, staff photos (2 Bobs ideas — future iteration)
- Blog/content strategy changes
- Visual redesign of the overall theme (reuse existing Tailwind components
  and design language; this is a content/structure rework)

## Success Criteria

- A referred prospect can answer "is this for me / what does it cost / what
  do I get / how does it work" without a call.
- Zack can screen-share the homepage during a sales call and walk through
  pricing, deliverables, and process live (the Fletch test).
- Published prices match what a cold referral is actually quoted.
