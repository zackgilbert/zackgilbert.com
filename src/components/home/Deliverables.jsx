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
            Your GitHub. Your hosting. Your domain. It&apos;s your software
            from day one, and it stays yours — with everything you need to
            carry it forward, with or without me.
          </p>
        </div>
      </div>
    </section>
  )
}
