const checklist = [
  'Your business runs on a spreadsheet only you fully understand',
  'You built something with AI tools (Lovable, Replit, Cursor) and it works — but you’re afraid to touch it',
  'Real customers or real money now depend on it, and that’s starting to scare you',
  'An agency quoted you $50k+ and six months',
  'You know exactly what the software should do — you just can’t build it yourself',
]

function CheckboxIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded border border-zinc-300 dark:border-zinc-600"
    />
  )
}

export function SelfQualification() {
  return (
    <section className="mt-20 border-t border-zinc-300 py-16 dark:border-zinc-700">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Is this you?
        </h2>
        <ul className="mt-8 space-y-4">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3 text-base text-zinc-600 dark:text-zinc-400">
              <CheckboxIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          If you checked two or more, we should talk.
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
