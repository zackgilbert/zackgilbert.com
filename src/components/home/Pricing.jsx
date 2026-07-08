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
          Real prices, listed up front — so you can think it over before we
          ever talk.
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
