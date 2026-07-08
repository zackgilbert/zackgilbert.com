import { CALENDLY_URL } from '@/data/site'

const faqs = [
  {
    question: 'What if my build takes longer than two months?',
    answer:
      'Most v1s ship in about two months. If yours is running long, you’ll know weeks ahead, because we fix the v1 scope in writing before we start and you see a demo every Friday. Billing is monthly, so there’s never a surprise invoice, and you can stop at any month boundary and keep everything built so far.',
  },
  {
    question: 'What do you build with?',
    answer:
      'Boring, proven technology: Ruby on Rails or Next.js, Postgres, and standard hosting. The kind of stack any competent developer can pick up after me. No exotic frameworks you’ll be stuck maintaining.',
  },
  {
    question: 'Do you work with existing developers or teams?',
    answer:
      'Yes. Cleanup engagements often mean building on whatever (or whoever) came before. And no judgment about what I find: getting a first version working at all is the hard part. My job is making it solid.',
  },
  {
    question: 'What happens if we stop working together?',
    answer:
      'Nothing bad. Everything already lives in your accounts: code, hosting, domain, documentation. You keep it all and any developer can pick up where I left off. That’s by design.',
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
