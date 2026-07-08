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

Interactive checkboxes (client-side state only — toggling is purely tactile,
no data is collected or sent). When two or more are checked, the closer line
switches to an affirmative "That's a match — we should talk." The full
self-diagnostic tool (scoring, routing, email capture) remains out of scope.

Checklist items:

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

At the end of the process strip, a small callout: "Want the fine print on
how I work? I keep a user manual." → links to `/manual`. This rewards the
diligent prospect and shows working style transparently.

### 6. Proof

- Curate to ~7 testimonials. Lead: Emily Nejad (domain expert + business
  outcome) and Seth Kravitz. Keep: Vince, KP, Mallory. Move résumé-flavored
  ones (e.g., Gareth Paul Jones / Foursquare manager) to /about.
- **Two new testimonials, pending client approval:** Will (fractional-CTO
  retainer — placed next to the Partnership tier) and Socrates (spreadsheet/
  vibecode buildout — placed next to the Build Sprint / pricing). Drafts
  exist; final copy, names, titles, and one concrete specific each are
  awaiting client review. Implementation should build the slots and ship
  without them if approval hasn't landed.
- Prefer placing testimonials adjacent to relevant sections (Emily near
  pricing, Vince/Will near partnership, Socrates near the sprint) over one
  monolithic wall.
- Projects section becomes 3-4 client stories framed as evidence, not a
  portfolio grid. Initial set, reusing existing descriptions reframed as
  "domain problem → shipped software":
  - **Bon Vivant Cakes** — cake-shop scheduling: spreadsheet → checkout flow
    (pairs with Emily's testimonial)
  - **Augusta Planner** — Section 280A tax expertise → compliance SaaS
  - **CPA Connect** — accounting-firm operations → practice management platform
  - **Eventually Ticketing** — Squarespace-native event ticketing
  - Socrates' and Marion's projects were both real build sprints worth
    highlighting. Socrates' story goes live once his testimonial/naming
    approval lands. Marion's story ships **in the code but commented out**
    (same pattern as the pending testimonials) — ready to flip on when Zack
    gets the nod. Each replaces the weakest of the four above when enabled.

### 7. FAQ + final CTA

Short FAQ: stack choice; what if the build runs past 2 months; working with
existing teams; what happens if we stop working together (nothing bad — it's
all in your accounts). Single repeated CTA: book the 30-min call.

Draft answer for the overrun question (the objection the monthly-billing
model hinges on): "Most v1s ship in about two months. If yours is running
long, you'll know weeks ahead — we fix the v1 scope in writing before we
start and you see a demo every Friday. Billing is monthly, so there's never
a surprise invoice, and you can stop at any month boundary and keep
everything built so far."

## Site Restructure

- **/** — the sales page above. Bio paragraphs, career history, Technori/
  community content, and the articles feed are removed from the homepage.
- **/about** — current bio, career history, community involvement, and the
  demoted/overflow testimonials. Uses the existing headshot already on the
  page (new staff-style photography remains out of scope).
- **/work** — new page: full project list (recent + past + link to the
  spreadsheet).
- **/articles** — page content unchanged, but it must regain a navigation
  link (see nav spec below) since the homepage feed goes away.
- The stale $5k/month "Let's Build Something" section is replaced entirely
  by the new pricing section.

### Navigation

Header nav (currently links to `/#projects` and `/#testimonials`, both of
which this spec removes/restructures) becomes:

- **Pricing** → `/#pricing`
- **How it works** → `/#process`
- **Work** → `/work`
- **Articles** → `/articles`
- **About** → `/about`

Footer mirrors the same set. The Calendly CTA stays visually distinct from
nav links (button in header or hero only).

The existing "User Manual" link (`/manual`) drops out of the header — it's
not part of the sales narrative — but stays in the footer: it's a useful
"how to work with me" artifact for clients who have already engaged.

### Technical notes

- `generateRssFeed()` currently runs in the homepage's `getStaticProps`
  (src/pages/index.jsx). Removing the articles feed from the homepage must
  not drop RSS generation — keep the call there or relocate it to
  `/articles`' `getStaticProps`.
- The audit-report screenshot in Deliverables does not exist yet as an
  asset. Fallback: a stylized mock of the report's table of contents in the
  site's existing design language; swap in a redacted real report later.

## Out of Scope (for now)

- Full self-diagnostic tool (scoring, routing, email capture) — the checklist
  ships with simple toggleable checkboxes only
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
