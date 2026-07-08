import Link from 'next/link'

const stages = [
  {
    label: 'Before we start',
    body: 'A 30-minute call, then I look at your spreadsheet or app. Every engagement starts with the audit, so we both know exactly what we’re working with. The v1 scope gets fixed in writing before any money moves.',
  },
  {
    label: 'Weeks 1–8',
    body: 'I build in your accounts from day one. You see a demo every Friday: 15 minutes, Loom or live. You course-correct weekly, not at the end.',
  },
  {
    label: 'Launch',
    body: 'Deploy, handbook, walkthrough videos. Then you choose: Partnership, or ride solo. No lock-in either way.',
  },
]

export function Process() {
  return (
    <section id="process" className="mt-20 scroll-mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
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
