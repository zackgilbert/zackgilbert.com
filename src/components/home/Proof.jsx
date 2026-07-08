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
                className="mt-4 inline-block text-sm font-medium text-zinc-500 underline hover:text-teal-500 hover:no-underline dark:text-zinc-400"
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
