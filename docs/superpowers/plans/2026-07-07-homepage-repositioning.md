# Homepage Repositioning Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework zackgilbert.com's homepage into a Fletch-style sales page (positioning → self-qualification → pricing → deliverables → process → proof → FAQ), with bio moved to /about and projects to a new /work page.

**Architecture:** The 600-line `src/pages/index.jsx` is replaced by a thin composer importing seven focused section components from `src/components/home/`. Shared data (testimonials, projects) moves to `src/data/` because it's consumed by multiple pages. Existing design language (Container, Card, Tailwind zinc/teal palette) is reused throughout — this is a content/structure rework, not a visual redesign.

**Tech Stack:** Next.js 16 (pages router), Tailwind CSS, MDX articles, static export via gh-pages. No test framework exists; verification is `npm run build` + browser checks (Playwright MCP per user preference).

**Spec:** `docs/superpowers/specs/2026-07-07-homepage-repositioning-design.md`

**Verification commands:**
- Build: `npm run build` — must exit 0
- Dev server: `npm run dev` (port 8080)

**File structure (locked in):**

| File | Responsibility |
|---|---|
| `src/data/testimonials.js` | Create. All testimonial objects + photo imports, exported by name. Consumed by home sections and /about. |
| `src/data/projects.js` | Create. Client stories (with story framing) + past projects + logo imports. Consumed by home Proof and /work. |
| `src/components/home/Hero.jsx` | Create. Positioning headline, subhead, credibility line, CTA pair, social icons. |
| `src/components/home/SelfQualification.jsx` | Create. "Is this you?" static checklist. |
| `src/components/home/Pricing.jsx` | Create. Three package cards. `id="pricing"`. |
| `src/components/home/Deliverables.jsx` | Create. Per-package deliverables + "your accounts" callout. |
| `src/components/home/Process.jsx` | Create. Week-by-week strip + /manual callout. `id="process"`. |
| `src/components/home/Proof.jsx` | Create. Client stories grid + remaining testimonials (incl. commented Will/Socrates/Marion slots). |
| `src/components/home/Faq.jsx` | Create. Four Q&As + final CTA. |
| `src/components/home/Testimonial.jsx` | Create. Single reusable testimonial figure (replaces 4x duplicated markup). |
| `src/pages/index.jsx` | Rewrite. Thin composer; keeps `generateRssFeed()` in `getStaticProps`. |
| `src/pages/work.jsx` | Create. Full project list (recent + past + spreadsheet link). |
| `src/pages/about.jsx` | Modify. Add "Kind words" section with demoted testimonial(s). |
| `src/components/Header.jsx` | Modify. Re-enable nav (currently commented out at lines 411-412), new nav items. |
| `src/components/Footer.jsx` | Modify. New nav items (lines 24-27) + keep User Manual. |

---

## Chunk 1: Data modules and homepage sections

### Task 0: Branch setup

- [ ] **Step 0.1: Ensure you're on the feature branch**

The `homepage-repositioning` branch already exists (spec + plan committed and pushed; draft PR #1 open). Do not create it.

```bash
cd /Users/zackgilbert/Developer/zackgilbert.com
git checkout homepage-repositioning
```

- [ ] **Step 0.2: Verify clean baseline build**

Run: `npm run build`
Expected: exits 0. If it fails before any changes, stop and report — the baseline is broken.

### Task 1: Testimonials data module

**Files:**
- Create: `src/data/testimonials.js`

All photo imports and testimonial text move verbatim from `src/pages/index.jsx:30-203` (do not rewrite quotes) — with **one deliberate exception**: Vince's quote is intentionally shortened for the sales-page context; it ends at "…how often that can happen." (the original's closing sentence about family is trimmed). Structure groups by intended placement.

- [ ] **Step 1.1: Create `src/data/testimonials.js`**

```js
import allenPennPhoto from '@/images/photos/allenpenn.jpg'
import paulJarvisPhoto from '@/images/photos/pauljarvis.jpg'
import kpPhoto from '@/images/photos/kp.jpg'
import malloryPhoto from '@/images/photos/mallory.jpg'
import emilyPhoto from '@/images/photos/emily.jpg'
import sethKravitzPhoto from '@/images/photos/sethkravitz.jpg'
import vincePhoto from '@/images/photos/vince.jpg'
import gpjPhoto from '@/images/photos/gpj.jpg'

// Placed immediately after the Pricing section — domain expert + business outcome.
export const emily = {
  body: "Working with Zack was an absolute dream. He took my idea and vision for a new online scheduling tool for my cake shop and turned it into an easy-to-use solution that was exactly what I needed. Less friction at checkout led to higher sales, and his streamlined scheduling system saved me stress AND administrative costs. Total game changer for my business!",
  author: {
    name: 'Emily Nejad',
    title: 'Owner',
    website: 'BonVivantCakes.com',
    imageUrl: emilyPhoto,
  },
}

// Placed after the Deliverables section.
export const seth = {
  body: "Anyone getting Zack for a month is lucky. He's the unaffordable and unhirable combo of talented designer meets talented engineer meets experienced entrepreneur.",
  author: {
    name: 'Seth Kravitz',
    handle: 'sethkravitz',
    imageUrl: sethKravitzPhoto,
  },
}

// Placed after the Process section — the "first call" partnership quote.
// Intentionally shortened; see task note above.
export const vince = {
  body: "Zack is the first call when I need anything built, period. He is an amazingly talented, yet humble individual who listens more than he speaks and guides more than he corrects. He is able to get out of you what you want even when you can't quite tell him what it is. He is also extremely flexible and able to adapt and change at the drop of a hat, which if you have built anything from scratch you will know how often that can happen.",
  author: {
    name: 'Vince Cortese',
    title: 'CEO',
    context: 'Able.com',
    imageUrl: vincePhoto,
  },
}

// Shown in the Proof section grid.
export const proofTestimonials = [
  {
    body: "Zack's an incredibly talented developer but what makes him stand out is his hyper collaborative DNA, high velocity of shipping and a strong sense of design. I loved working with Zack on the SaaS app he built for me so I could get to revenue very quickly. I'd 100% recommend him to any other ambitious founder.",
    author: {
      name: 'KP',
      handle: 'thisiskp_',
      imageUrl: kpPhoto,
    },
  },
  {
    body: "I am lucky enough to work with Zack Gilbert as our own fractional CTO resource for software and coding at Week of the Website - he's taking on new projects and I couldn't recommend a better partner for success!",
    author: {
      name: 'Mallory Ulaszek',
      title: 'Former CEO',
      website: 'WeekOfTheWebsite.com',
      imageUrl: malloryPhoto,
    },
  },
  {
    body: 'just saying, @zackgilbert is the best cofounder a boy could have.',
    author: {
      name: 'Paul Jarvis',
      title: 'Cofounder',
      context: 'WPComplete & Fixtail',
      imageUrl: paulJarvisPhoto,
    },
  },
  // PENDING CLIENT APPROVAL — flip on when Will approves final copy.
  // Place next to Partnership tier once live (move to its own named export).
  // {
  //   body: '[Will testimonial — draft under review]',
  //   author: { name: 'Will [last name]', title: '[title]', context: '[company]' },
  // },
  // PENDING CLIENT APPROVAL — flip on when Socrates approves final copy.
  // Place next to Build Sprint / pricing once live.
  // {
  //   body: '[Socrates testimonial — draft under review]',
  //   author: { name: 'Socrates [last name]', title: '[title]', context: '[company]' },
  // },
]

// Demoted from homepage — résumé-flavored; shown on /about.
export const aboutTestimonials = [
  {
    body: 'Working with Zack has been a true pleasure. His deep technical expertise is matched by high levels of collaboration and results. Under his guidance, we delivered several high-stakes projects at Foursquare. His pragmatic approach, coupled with an ability to foster a cooperative work environment, made him a key asset to our organization.',
    author: {
      name: 'Gareth Paul Jones',
      context: 'Manager at Foursquare',
      imageUrl: gpjPhoto,
    },
  },
  {
    body: "I couldn't imagine a better person to partner with if you want to test bringing an idea to life...trying to come up with something we can work on together!",
    author: {
      name: 'Allen Penn',
      handle: 'allenpenn',
      imageUrl: allenPennPhoto,
    },
  },
]
```

**Verification note:** there is no standalone check for this module — image imports only compile under webpack, and `next lint` no longer exists in Next 16 (the repo's `"lint"` script is also broken under ESLint 10; see Out of plan). The module gets its first real compile at Step 6.2's `npm run build`, which fails loudly on any syntax or bad-import error here.

- [ ] **Step 1.2: Commit**

```bash
git add src/data/testimonials.js
git commit -m "Extract testimonials to data module with placement grouping"
```

### Task 2: Projects data module

**Files:**
- Create: `src/data/projects.js`

- [ ] **Step 2.1: Create `src/data/projects.js`**

Client stories reframe existing descriptions as "domain problem → shipped software" (per spec §6). Past projects move verbatim from `index.jsx:74-96`.

```js
import projectWPComplete from '@/images/logos/wpcomplete.png'
import projectFixtail from '@/images/logos/fixtail.jpg'
import projectBillQ from '@/images/logos/billq.png'
import projectAugustaPlanner from '@/images/logos/augustaplanner.png'
import projectJustSendIt from '@/images/logos/justsendit.png'
import projectEventuallyTicketing from '@/images/logos/eventuallyticketing.png'

// Homepage Proof section — evidence, not portfolio.
export const clientStories = [
  {
    name: 'Bon Vivant Cakes',
    story:
      'A Chicago cake shop drowning in back-and-forth scheduling emails. Now: online scheduling and checkout that cut admin time and lifted sales.',
    link: { href: 'https://bonvivantcakes.com', label: 'bonvivantcakes.com' },
  },
  {
    name: 'Augusta Planner',
    story:
      'A tax expert who knew Section 280A cold. Now: compliance software that documents tax-free rental income for business owners.',
    link: { href: 'https://augustaplanner.com', label: 'augustaplanner.com' },
  },
  {
    name: 'CPA Connect',
    story:
      'An accounting firm running its practice on spreadsheets and email. Now: a platform for client management, workflows, and billing.',
    link: { href: 'https://mycpaconnect.com', label: 'mycpaconnect.com' },
  },
  {
    name: 'Eventually Ticketing',
    story:
      'Event organizers stuck bolting external ticket checkouts onto Squarespace. Now: ticketing that lives natively in Squarespace Commerce.',
    link: { href: 'https://eventuallyticketing.com', label: 'eventuallyticketing.com' },
  },
  // PENDING NAMING PERMISSION — Marion's build sprint. Flip on when approved;
  // it replaces the weakest story above (per spec §6).
  // {
  //   name: '[Marion project name]',
  //   story: '[domain problem → shipped software one-liner]',
  //   link: { href: '[url]', label: '[label]' },
  // },
]

// /work page — the full record.
export const recentProjects = [
  {
    name: 'Augusta Planner',
    description:
      'Compliance automation for the Augusta Rule (Section 280A), helping business owners document tax-free rental income from their property.',
    link: { href: 'https://augustaplanner.com', label: 'augustaplanner.com' },
    logo: projectAugustaPlanner,
  },
  {
    name: 'Just Send It',
    description:
      'Dead-simple email marketing for creators. Send emails to your list straight from your favorite email client — no templates, no logins, no fuss.',
    link: { href: 'https://justsendit.email', label: 'justsendit.email' },
    logo: projectJustSendIt,
  },
  {
    name: 'CPA Connect',
    description:
      'Practice management platform for accounting firms — streamlining client management, project workflows, team coordination, and billing.',
    link: { href: 'https://mycpaconnect.com', label: 'mycpaconnect.com' },
  },
  {
    name: 'Eventually Ticketing',
    description:
      'Event ticketing that integrates natively with Squarespace Commerce — no external checkouts or workarounds needed.',
    link: { href: 'https://eventuallyticketing.com', label: 'eventuallyticketing.com' },
    logo: projectEventuallyTicketing,
  },
]

export const pastProjects = [
  {
    name: 'billQ',
    description:
      'A simple bill tracking and reminder tool. Still has paying customers. Built in PHP.',
    link: { href: 'https://mybillq.com', label: 'mybillq.com' },
    logo: projectBillQ,
  },
  {
    name: 'WPComplete',
    description:
      'A Wordpress plugin that adds completability to your course. Sold to iThemes.',
    link: { href: 'https://wpcomplete.co/', label: 'wpcomplete.co' },
    logo: projectWPComplete,
  },
  {
    name: 'Fixtail',
    description:
      'A newsletter segmentation SaaS that connected Stripe sales to Mailchimp subscribers. Sold. Built in Ruby on Rails.',
    link: {
      href: 'https://web.archive.org/web/20200511225258/https://www.fixtail.com/',
      label: 'fixtail.com',
    },
    logo: projectFixtail,
  },
]
```

(Client-story cards render no logos — `Proof.jsx` deliberately shows name/story/link only — so `clientStories` entries carry no `logo` fields. The logo imports at the top are used by `recentProjects`/`pastProjects` for /work.)

**Verification note:** like Task 1, this module gets its first compile at the build in Step 10.2.

- [ ] **Step 2.2: Verify the Bon Vivant Cakes URL resolves**

Run: `curl -sIL -o /dev/null -w "%{http_code}" https://bonvivantcakes.com`
Expected: `200`. If non-200, retry with GET before concluding it's dead (some hosts reject HEAD): `curl -s -o /dev/null -w "%{http_code}" -L https://bonvivantcakes.com`. Only if both fail, remove the `link` field from that story — the Proof card renders fine without one.

- [ ] **Step 2.3: Commit**

```bash
git add src/data/projects.js
git commit -m "Extract projects to data module; add client-story framings"
```

### Task 3: Reusable Testimonial component

**Files:**
- Create: `src/components/home/Testimonial.jsx`

Replaces the 4x-duplicated figure markup in current `index.jsx:277-388`. Attribution logic (context → website → handle) is preserved exactly. First compiled at Step 6.2's build, when Emily's quote is wired into the homepage.

- [ ] **Step 3.1: Create `src/components/home/Testimonial.jsx`**

```jsx
import Image from 'next/image'

function Attribution({ author }) {
  if (author.context) {
    return (
      <div className="text-gray-600 dark:text-gray-400">
        {author.title ? `${author.title} of ${author.context}` : author.context}
      </div>
    )
  }
  if (author.website) {
    return (
      <div className="text-gray-600 dark:text-gray-400">
        <a href={`https://${author.website}`}>
          {author.title ? `${author.title} of ${author.website}` : author.website}
        </a>
      </div>
    )
  }
  return (
    <div className="text-gray-600 dark:text-gray-400">
      <a href={`https://twitter.com/${author.handle}`}>{`@${author.handle}`}</a>
    </div>
  )
}

export function Testimonial({ testimonial, featured = false }) {
  return (
    <figure
      className={
        featured
          ? 'rounded-2xl bg-gray-50 p-8 text-base leading-7 dark:bg-zinc-800/50'
          : 'rounded-2xl bg-gray-50 p-8 text-sm leading-6 dark:bg-zinc-800/50'
      }
    >
      <blockquote className="text-gray-900 dark:text-gray-100">
        <p>{`"${testimonial.body}"`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image
          src={testimonial.author.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
          unoptimized
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            {testimonial.author.name}
          </div>
          <Attribution author={testimonial.author} />
        </div>
      </figcaption>
    </figure>
  )
}
```

- [ ] **Step 3.2: Commit**

```bash
git add src/components/home/Testimonial.jsx
git commit -m "Add reusable Testimonial component"
```

### Task 4: Hero section

**Files:**
- Create: `src/components/home/Hero.jsx`

- [ ] **Step 4.1: Create `src/components/home/Hero.jsx`**

Copy is final per spec §1. Social icons carry over from the current hero.

```jsx
import Link from 'next/link'

import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  BlueskyIcon,
} from '@/components/SocialIcons'

const CALENDLY_URL = 'https://calendly.com/zackgilbert/30-min'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Hero() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        You built the first version. Let&apos;s make it real.
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        You know your business cold — and you&apos;ve already built the rough
        version. A spreadsheet the whole operation runs on. An app you
        vibecoded that works&hellip; mostly. A prototype that proved the idea.
      </p>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        I&apos;m a 20-year product engineer who turns almost-software into
        production software — for a price that&apos;s right on this page.
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
        4 startup exits. Previously engineering lead at Able.com and solutions
        engineer at Foursquare.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#pricing"
          className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          See pricing ↓
        </a>
        <a
          href={CALENDLY_URL}
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:text-zinc-100 dark:ring-zinc-600 dark:hover:bg-zinc-800"
        >
          Book a 30-min call
        </a>
      </div>
      <div className="mt-8 flex gap-6">
        <div className="bluesky-flutter h-6 w-6">
          <SocialLink
            href="https://bsky.app/profile/zackgilbert.com"
            aria-label="Follow on Bluesky"
            icon={BlueskyIcon}
          />
        </div>
        <SocialLink
          href="https://twitter.com/zackgilbert"
          aria-label="Follow on Twitter"
          icon={TwitterIcon}
        />
        <SocialLink
          href="https://github.com/zackgilbert"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://linkedin.com/in/zackgilbert"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </div>
  )
}
```

- [ ] **Step 4.2: Rewrite `src/pages/index.jsx` as a minimal composer**

This replaces the old homepage NOW so that every subsequent section gets real build verification the moment it lands (there is no working lint in this repo — the build is the only automated check). Sections are appended in Tasks 5–11; Task 12 holds the final authoritative listing.

```jsx
import Head from 'next/head'

import { Container } from '@/components/Container'
import { Hero } from '@/components/home/Hero'
import { generateRssFeed } from '@/lib/generateRssFeed'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zack Gilbert - You built the first version. Let&apos;s make it real.
        </title>
        <meta
          name="description"
          content="I help domain experts turn their almost-software — spreadsheets, AI-built apps, prototypes — into production software people can rely on. Pricing, process, and deliverables right on this page."
        />
      </Head>
      <Container className="mt-9">
        <Hero />
        {/* Sections land here one task at a time; final order in Task 12 */}
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // RSS generation intentionally stays on the homepage build even though
  // articles no longer render here (see spec: Technical notes).
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return { props: {} }
}
```

- [ ] **Step 4.3: Build**

Run: `npm run build`
Expected: exits 0. First verification of Hero, the SocialIcons imports, and the articles-free `getStaticProps`.

- [ ] **Step 4.4: Commit**

```bash
git add src/components/home/Hero.jsx src/pages/index.jsx
git commit -m "Add Hero section; rewrite homepage as incremental composer"
```

### Task 5: SelfQualification section

**Files:**
- Create: `src/components/home/SelfQualification.jsx`

- [ ] **Step 5.1: Create `src/components/home/SelfQualification.jsx`**

Interactive checkboxes — client-side state only, purely tactile, no data
collected or sent (per amended spec §2). Uses real `<input type="checkbox">`
elements styled via Tailwind's built-in `accent-*` utility (CSS
`accent-color`) — `@tailwindcss/forms` is NOT installed in this repo and we
don't add a dependency for one input. When two or more are checked, the
closer line switches to an affirmative.

```jsx
import { useState } from 'react'

const checklist = [
  'Your business runs on a spreadsheet only you fully understand',
  'You built something with AI tools (Lovable, Replit, Cursor) and it works — but you’re afraid to touch it',
  'Real customers or real money now depend on it, and that’s starting to scare you',
  'An agency quoted you $50k+ and six months',
  'You know exactly what the software should do — you just can’t build it yourself',
]

export function SelfQualification() {
  const [checked, setChecked] = useState(() => checklist.map(() => false))
  const count = checked.filter(Boolean).length

  function toggle(index) {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)))
  }

  return (
    <section className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Is this you?
        </h2>
        <ul className="mt-8 space-y-4">
          {checklist.map((item, index) => (
            <li key={item}>
              <label className="flex cursor-pointer gap-3 text-base text-zinc-600 dark:text-zinc-400">
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggle(index)}
                  className="mt-1 h-5 w-5 flex-none cursor-pointer accent-teal-600"
                />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
        <p
          className={
            count >= 2
              ? 'mt-8 text-base font-semibold text-teal-600 dark:text-teal-400'
              : 'mt-8 text-base font-semibold text-zinc-900 dark:text-zinc-100'
          }
        >
          {count >= 2
            ? 'That’s a match — we should talk.'
            : 'If you checked two or more, we should talk.'}
        </p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
          Looking for a technical cofounder or a full dev team? I&apos;m
          probably not your guy — but book a call anyway and I&apos;ll point
          you in the right direction.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 5.2: Wire into homepage and build**

In `src/pages/index.jsx`: add `import { SelfQualification } from '@/components/home/SelfQualification'` and render `<SelfQualification />` after `<Hero />`.

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 5.3: Commit**

```bash
git add src/components/home/SelfQualification.jsx src/pages/index.jsx
git commit -m "Add self-qualification checklist section"
```

### Task 6: Pricing section

**Files:**
- Create: `src/components/home/Pricing.jsx`

- [ ] **Step 6.1: Create `src/components/home/Pricing.jsx`**

Prices are final and published deliberately (spec: Offer Stack). Do not soften, hide, or add "starting at" language. No mention of discounts anywhere.

```jsx
const packages = [
  {
    name: 'Roadmap & Risk Audit',
    price: '$1,500',
    cadence: 'fixed, one week',
    blurb:
      'Send me your spreadsheet, your vibecoded app, or both. You get a plain-English report: what’s solid, what’s dangerous, and what to do next — whether or not you hire me to do it.',
    bullets: [
      'Security, data-loss, and billing-bug review',
      'Prioritized fix list in plain English',
      '30-minute walkthrough call',
      'Fee credits toward a Build Sprint',
    ],
    bestFor: 'Best first step if you already have something built.',
  },
  {
    name: 'Build Sprint',
    price: '$5,000',
    cadence: 'per month · most v1s ship in ~2 months',
    blurb:
      'Full speed, spreadsheet or rough app in, production software out. We fix the v1 scope in writing before we start.',
    bullets: [
      'Demo every Friday — course-correct weekly',
      'Built in your accounts from day one',
      'Launch: deploy, handbook, walkthroughs',
      'Stop at any month boundary, keep everything',
    ],
    bestFor: 'The flagship. This is how ideas become products.',
    featured: true,
  },
  {
    name: 'Partnership',
    price: '$2,500',
    cadence: 'per month · month-to-month',
    blurb:
      'After launch (or standalone): I stay on as your technical partner, keeping your software alive and improving at cruising speed.',
    bullets: [
      'Weekly ship log',
      'Same-week bug turnaround',
      'Quarterly “what’s next” roadmap chat',
      'The first call when you need anything built',
    ],
    bestFor: 'For software that has to keep working.',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Pricing &amp; packages
        </h2>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          No &quot;contact us for pricing.&quot; This is what it costs.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              pkg.featured
                ? 'rounded-2xl p-8 ring-2 ring-zinc-900 dark:ring-zinc-100'
                : 'rounded-2xl p-8 ring-1 ring-zinc-200 dark:ring-zinc-700'
            }
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {pkg.name}
            </h3>
            <p className="mt-4">
              <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {pkg.price}
              </span>
              <span className="ml-2 text-sm text-zinc-500">{pkg.cadence}</span>
            </p>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{pkg.blurb}</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {pkg.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="text-teal-500">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {pkg.bestFor}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 6.2: Wire into homepage and build**

In `src/pages/index.jsx`:

1. Add imports:

```jsx
import { Pricing } from '@/components/home/Pricing'
import { Testimonial } from '@/components/home/Testimonial'
import { emily } from '@/data/testimonials'
```

2. Add the adjacent-testimonial helper above `Home` (used for Seth and Vince in later tasks too):

```jsx
function AdjacentTestimonial({ testimonial }) {
  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <Testimonial testimonial={testimonial} featured />
    </div>
  )
}
```

3. Render after `<SelfQualification />`:

```jsx
<Pricing />
<AdjacentTestimonial testimonial={emily} />
```

Run: `npm run build`
Expected: exits 0. First compile of `src/data/testimonials.js` and `Testimonial.jsx`.

- [ ] **Step 6.3: Commit**

```bash
git add src/components/home/Pricing.jsx src/pages/index.jsx
git commit -m "Add pricing section with three published packages"
```

### Task 7: Chunk 1 verification checkpoint

- [ ] **Step 7.1: Visual checkpoint of the partial page**

Run `npm run dev`, open `http://localhost:8080` (Playwright MCP browser tools per user preference). Verify: hero headline renders, checklist shows all five items and the checkboxes actually toggle (checking two switches the closer line to "That's a match — we should talk."), three price cards show $1,500 / $5,000 / $2,500, Emily's quote appears after pricing, and the `#pricing` anchor from the hero CTA scrolls. Check dark mode.

---

## Chunk 2: Remaining sections, pages, nav, and verification

### Task 8: Deliverables section

**Files:**
- Create: `src/components/home/Deliverables.jsx`

- [ ] **Step 8.1: Create `src/components/home/Deliverables.jsx`**

**Deliberate scope call:** the spec's fallback (a stylized mock of the audit report's table of contents) is deferred along with the real screenshot to "Out of plan" — this task ships text-only. The grouped-list structure below leaves an obvious slot for the visual later.

```jsx
const groups = [
  {
    package: 'From the Audit',
    items: [
      'The written report itself — plain English, no jargon',
      'A prioritized fix list you can hand to any developer',
      'A 30-minute walkthrough call',
    ],
  },
  {
    package: 'From a Build Sprint',
    items: [
      'A live production app at your domain',
      'The code — in your GitHub account',
      'Hosting and deployment set up in your accounts',
      'A plain-English handbook + Loom walkthroughs',
      'Security and backup baseline',
    ],
  },
  {
    package: 'From the Partnership',
    items: [
      'A weekly ship log of what changed and why',
      'Same-week turnaround on bugs',
      'A quarterly “what’s next” roadmap conversation',
    ],
  },
]

export function Deliverables() {
  return (
    <section className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          What you actually get
        </h2>
        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <div key={group.package}>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {group.package}
              </h3>
              <ul className="mt-3 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-teal-500">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-zinc-900 p-8 text-center dark:bg-zinc-100">
          <p className="text-lg font-semibold text-white dark:text-zinc-900">
            Everything lives in your accounts.
          </p>
          <p className="mt-2 text-sm text-zinc-300 dark:text-zinc-600">
            Your GitHub. Your hosting. Your domain. If we ever part ways, you
            lose nothing. You&apos;re never hostage.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 8.2: Wire into homepage and build**

In `src/pages/index.jsx`: add imports for `Deliverables` and `seth` (from `@/data/testimonials`), then render after Emily's testimonial:

```jsx
<Deliverables />
<AdjacentTestimonial testimonial={seth} />
```

Run: `npm run build` — exits 0.

- [ ] **Step 8.3: Commit**

```bash
git add src/components/home/Deliverables.jsx src/pages/index.jsx
git commit -m "Add deliverables section with ownership callout"
```

### Task 9: Process section

**Files:**
- Create: `src/components/home/Process.jsx`

- [ ] **Step 9.1: Create `src/components/home/Process.jsx`**

```jsx
import Link from 'next/link'

const stages = [
  {
    label: 'Before we start',
    body: 'A 30-minute call. I look at your spreadsheet or app. We decide: audit first, or straight to a sprint. Either way, the v1 scope gets fixed in writing before any money moves.',
  },
  {
    label: 'Weeks 1–8',
    body: 'I build in your accounts from day one. You see a demo every Friday — 15 minutes, Loom or live. You course-correct weekly, not at the end.',
  },
  {
    label: 'Launch',
    body: 'Deploy, handbook, walkthrough videos. Then you choose: Partnership, or ride solo. No lock-in either way.',
  },
]

export function Process() {
  return (
    <section id="process" className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          What working with me looks like
        </h2>
        <ol className="mt-10 space-y-8">
          {stages.map((stage, index) => (
            <li key={stage.label} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {stage.label}
                </h3>
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  {stage.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 rounded-2xl bg-gray-50 p-6 text-sm text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400">
          Want the fine print on how I work?{' '}
          <Link href="/manual" className="font-medium underline hover:no-underline">
            I keep a user manual.
          </Link>
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 9.2: Wire into homepage and build**

In `src/pages/index.jsx`: add imports for `Process` and `vince`, then render after Seth's testimonial:

```jsx
<Process />
<AdjacentTestimonial testimonial={vince} />
```

Run: `npm run build` — exits 0.

- [ ] **Step 9.3: Commit**

```bash
git add src/components/home/Process.jsx src/pages/index.jsx
git commit -m "Add process section with Friday demos and manual callout"
```

### Task 10: Proof section

**Files:**
- Create: `src/components/home/Proof.jsx`

- [ ] **Step 10.1: Create `src/components/home/Proof.jsx`**

```jsx
import { Testimonial } from '@/components/home/Testimonial'
import { proofTestimonials } from '@/data/testimonials'
import { clientStories } from '@/data/projects'

export function Proof() {
  return (
    <section className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          People I&apos;ve built for
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {clientStories.map((project) => (
          <div key={project.name} className="rounded-2xl p-8 ring-1 ring-zinc-200 dark:ring-zinc-700">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.story}
            </p>
            {project.link && (
              <a
                href={project.link.href}
                className="mt-4 inline-block text-sm font-medium text-zinc-400 hover:text-teal-500 dark:text-zinc-500"
              >
                {project.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
        {proofTestimonials.map((testimonial) => (
          <Testimonial key={testimonial.author.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 10.2: Wire into homepage and build**

In `src/pages/index.jsx`: add the `Proof` import, render `<Proof />` after Vince's testimonial.

Run: `npm run build` — exits 0. First compile of `src/data/projects.js`.

- [ ] **Step 10.3: Commit**

```bash
git add src/components/home/Proof.jsx src/pages/index.jsx
git commit -m "Add proof section with client stories and testimonials"
```

### Task 11: FAQ + final CTA section

**Files:**
- Create: `src/components/home/Faq.jsx`

- [ ] **Step 11.1: Create `src/components/home/Faq.jsx`**

The overrun answer is final copy from the spec. Other answers drafted to the same altitude.

```jsx
const CALENDLY_URL = 'https://calendly.com/zackgilbert/30-min'

const faqs = [
  {
    question: 'What if my build takes longer than two months?',
    answer:
      'Most v1s ship in about two months. If yours is running long, you’ll know weeks ahead — we fix the v1 scope in writing before we start and you see a demo every Friday. Billing is monthly, so there’s never a surprise invoice, and you can stop at any month boundary and keep everything built so far.',
  },
  {
    question: 'What do you build with?',
    answer:
      'Boring, proven technology — Ruby on Rails or Next.js, Postgres, and standard hosting. The kind of stack any competent developer can pick up after me. No exotic frameworks you’ll be stuck maintaining.',
  },
  {
    question: 'Do you work with existing developers or teams?',
    answer:
      'Yes. Cleanup engagements often mean working alongside whoever (or whatever AI tool) built the first version. I’m rude to code, never to people.',
  },
  {
    question: 'What happens if we stop working together?',
    answer:
      'Nothing bad. Everything already lives in your accounts — code, hosting, domain, documentation. You keep it all and any developer can pick up where I left off. That’s by design.',
  },
]

export function Faq() {
  return (
    <section className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Questions you might have
        </h2>
        <dl className="mt-10 space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Ready when you are.
          </h2>
          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Book a 30-min call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 11.2: Wire into homepage and build**

In `src/pages/index.jsx`: add the `Faq` import, render `<Faq />` after `<Proof />`, and delete the placeholder comment (`{/* Sections land here ... */}`).

Run: `npm run build` — exits 0.

- [ ] **Step 11.3: Commit**

```bash
git add src/components/home/Faq.jsx src/pages/index.jsx
git commit -m "Add FAQ and final CTA section"
```

### Task 12: Verify final homepage composition

**Files:**
- Verify (and reconcile if needed): `src/pages/index.jsx`

- [ ] **Step 12.1: Confirm `src/pages/index.jsx` matches this final listing**

After the incremental wiring in Tasks 4–11, the file should match the listing below exactly (section order: Hero → SelfQualification → Pricing → Emily → Deliverables → Seth → Process → Vince → Proof → Faq). Reconcile any drift.

```jsx
import Head from 'next/head'

import { Container } from '@/components/Container'
import { Hero } from '@/components/home/Hero'
import { SelfQualification } from '@/components/home/SelfQualification'
import { Pricing } from '@/components/home/Pricing'
import { Deliverables } from '@/components/home/Deliverables'
import { Process } from '@/components/home/Process'
import { Proof } from '@/components/home/Proof'
import { Faq } from '@/components/home/Faq'
import { Testimonial } from '@/components/home/Testimonial'
import { emily, seth, vince } from '@/data/testimonials'
import { generateRssFeed } from '@/lib/generateRssFeed'

function AdjacentTestimonial({ testimonial }) {
  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <Testimonial testimonial={testimonial} featured />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zack Gilbert - You built the first version. Let&apos;s make it real.
        </title>
        <meta
          name="description"
          content="I help domain experts turn their almost-software — spreadsheets, AI-built apps, prototypes — into production software people can rely on. Pricing, process, and deliverables right on this page."
        />
      </Head>
      <Container className="mt-9">
        <Hero />
        <SelfQualification />
        <Pricing />
        <AdjacentTestimonial testimonial={emily} />
        <Deliverables />
        <AdjacentTestimonial testimonial={seth} />
        <Process />
        <AdjacentTestimonial testimonial={vince} />
        <Proof />
        <Faq />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // RSS generation intentionally stays on the homepage build even though
  // articles no longer render here (see spec: Technical notes).
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return { props: {} }
}
```

- [ ] **Step 12.2: Build**

Run: `npm run build`
Expected: exits 0, `/` page generated.

- [ ] **Step 12.3: Visual check**

Run `npm run dev`, open `http://localhost:8080` (Playwright MCP browser tools per user preference). Verify: hero headline renders, `#pricing` and `#process` anchors scroll correctly, three price cards show $1,500 / $5,000 / $2,500, Emily/Seth/Vince quotes appear between sections, dark mode looks sane (toggle it).

- [ ] **Step 12.4: Commit reconciliation diffs (if any)**

```bash
git add src/pages/index.jsx
git commit -m "Reconcile homepage composition with plan"
```

Skip the commit if Step 12.1 found no drift.

### Task 13: /work page

**Files:**
- Create: `src/pages/work.jsx`

- [ ] **Step 13.1: Create `src/pages/work.jsx`**

Reuses the exact Card grid pattern from the old homepage (old `index.jsx:512-573`), including the `LinkIcon` svg — copy that svg function verbatim from the old file.

```jsx
import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { recentProjects, pastProjects } from '@/data/projects'

function LinkIcon(props) {
  /* copy the LinkIcon svg verbatim from the pre-rewrite homepage:
     `git show master:src/pages/index.jsx` lines 205-214
     (anchored to master, not HEAD~N, so interposed commits can't shift it) */
}

function ProjectGrid({ projects, columns }) {
  return (
    <ul role="list" className={`grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 ${columns}`}>
      {projects.map((project) => (
        <Card as="li" key={project.name}>
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            {project.logo ? (
              <Image src={project.logo} alt="" className="h-8 w-8 rounded-full" unoptimized />
            ) : (
              <span className="text-lg font-bold text-zinc-600 dark:text-zinc-300">
                {project.name.charAt(0)}
              </span>
            )}
          </div>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <Card.Link href={project.link.href}>{project.name}</Card.Link>
          </h2>
          <Card.Description>{project.description}</Card.Description>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        </Card>
      ))}
    </ul>
  )
}

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Zack Gilbert</title>
        <meta
          name="description"
          content="Things I've shipped — client builds, my own products, and a few that sold."
        />
      </Head>
      <SimpleLayout
        title="Things I've shipped."
        intro="Client builds, my own products, and a few that sold along the way."
      >
        <ProjectGrid projects={recentProjects} columns="lg:grid-cols-2" />
        <h2 className="mt-24 text-lg font-semibold leading-8 tracking-tight text-zinc-900 dark:text-zinc-100">
          Past projects
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          A few older projects — some sold, some still running.
        </p>
        <div className="mt-10">
          <ProjectGrid projects={pastProjects} columns="lg:grid-cols-3" />
        </div>
        <p className="mt-20 text-center">
          <a
            href="https://docs.google.com/spreadsheets/d/12vxRYLiDF-cSlhvIf2hHiJ6oE1ZQD79s41yMkZIYIS0/edit?usp=sharing"
            className="px-10 py-3 underline hover:no-underline dark:text-gray-100"
          >
            Full list of projects
          </a>
        </p>
      </SimpleLayout>
    </>
  )
}
```

- [ ] **Step 13.2: Build and check /work renders**

Run: `npm run build`
Expected: exits 0, `/work` in the page list. Then verify in browser: both grids render with logos.

- [ ] **Step 13.3: Commit**

```bash
git add src/pages/work.jsx
git commit -m "Add /work page with full project list"
```

### Task 14: /about additions

**Files:**
- Modify: `src/pages/about.jsx`

- [ ] **Step 14.1: Add "Kind words" section to /about**

After the closing `</div>` of the two-column grid (inside the `<Container>`), append a section rendering `aboutTestimonials` using the `Testimonial` component:

```jsx
import { Testimonial } from '@/components/home/Testimonial'
import { aboutTestimonials } from '@/data/testimonials'
```

```jsx
<div className="mt-24 border-t border-zinc-100 pt-16 dark:border-zinc-700/40">
  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
    Kind words from people I&apos;ve worked with
  </h2>
  <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
    {aboutTestimonials.map((testimonial) => (
      <Testimonial key={testimonial.author.name} testimonial={testimonial} />
    ))}
  </div>
</div>
```

- [ ] **Step 14.2: Build, verify /about renders with new section, commit**

```bash
npm run build
git add src/pages/about.jsx
git commit -m "Add demoted testimonials to /about"
```

### Task 15: Navigation

**Files:**
- Modify: `src/components/Header.jsx` (nav lists + re-enable commented block at lines 410-413)
- Modify: `src/components/Footer.jsx` (nav list at lines 24-27)

- [ ] **Step 15.1: Update Header nav items**

In `MobileNavigation` (lines 124-127) and `DesktopNavigation` (lines 164-168), replace the item lists with:

```jsx
<MobileNavItem href="/#pricing">Pricing</MobileNavItem>
<MobileNavItem href="/#process">How it works</MobileNavItem>
<MobileNavItem href="/work">Work</MobileNavItem>
<MobileNavItem href="/articles">Articles</MobileNavItem>
<MobileNavItem href="/about">About</MobileNavItem>
```

(and the same five as `<NavItem>` in `DesktopNavigation`; delete the commented-out Articles NavItem and the `/manual`, `/#projects`, `/#testimonials`, and `Home` items — the avatar links home).

- [ ] **Step 15.2: Re-enable the nav render**

Uncomment lines 411-412 so both navs actually render:

```jsx
<div className="flex flex-1 justify-end md:justify-center">
  <MobileNavigation className="pointer-events-auto md:hidden" />
  <DesktopNavigation className="pointer-events-auto hidden md:block" />
</div>
```

- [ ] **Step 15.3: Update Footer nav**

Replace the `NavLink` list in `Footer.jsx:24-27` with:

```jsx
<NavLink href="/#pricing">Pricing</NavLink>
<NavLink href="/#process">How it works</NavLink>
<NavLink href="/work">Work</NavLink>
<NavLink href="/articles">Articles</NavLink>
<NavLink href="/about">About</NavLink>
<NavLink href="/manual">User Manual</NavLink>
```

(`/manual` stays footer-only per spec.)

Known cosmetic behavior, not a bug: `NavItem` computes active state via `useRouter().pathname === href`, which never matches hash hrefs — "Pricing" and "How it works" will never show the active underline. Expected; don't chase it during verification.

- [ ] **Step 15.4: Build, verify nav on desktop + mobile widths, commit**

Verify: nav visible on all pages; anchor links from a non-home page (e.g. `/about` → `/#pricing`) navigate home and scroll; mobile menu opens.

```bash
npm run build
git add src/components/Header.jsx src/components/Footer.jsx
git commit -m "Re-enable site nav with sales-page destinations"
```

### Task 16: Final verification sweep

- [ ] **Step 16.1: Full build**

Run: `npm run build`
Expected: exits 0; pages `/`, `/about`, `/work`, `/articles`, `/manual`, `/thank-you`, article slugs all present.

- [ ] **Step 16.2: RSS check**

Run: `npm run build && ls public/rss/feed.xml`
Expected: feed file exists (`generateRssFeed.js` writes `./public/rss/feed.xml` and `feed.json`; `next build` already sets production mode).

- [ ] **Step 16.3: Browser walkthrough (the Fletch test)**

With dev server running, walk the page top to bottom as a prospect: hero → is-this-you → pricing (numbers legible) → deliverables → process → proof → FAQ → CTA. Check dark mode. Check a mobile viewport (375px). Check `/work`, `/about`, `/articles` from the nav. Check no orphaned links to `/#projects` or `/#testimonials` remain anywhere: `grep -rn "#projects\|#testimonials" src/`.

- [ ] **Step 16.4: Commit any fixes; do NOT deploy**

Deployment (`npm run deploy`) is explicitly the user's call after reviewing the branch.

---

## Out of plan (tracked, not built now)

- Will/Socrates testimonials: drafts awaiting client approval; slots exist commented out in `src/data/testimonials.js`.
- Marion client story: commented out in `src/data/projects.js` until naming permission.
- Audit-report screenshot/mock for Deliverables.
- Interactive self-diagnostic, speaking page, staff photos (spec Out of Scope).
- `package.json`'s `"lint": "next lint"` script is broken under Next 16 (`next lint` removed) and ESLint 10 dropped `.eslintrc.json` support — needs an `eslint.config.js` migration as a separate fix.
- levels.io / joshpigford-style full projects dashboard: evolve `/work` + `src/data/projects.js` with status/year/outcome fields into a complete, self-maintained project list, replacing the stale Google Sheets link.
