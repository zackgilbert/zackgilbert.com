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
  if (author.handle) {
    return (
      <div className="text-gray-600 dark:text-gray-400">
        <a href={`https://twitter.com/${author.handle}`}>{`@${author.handle}`}</a>
      </div>
    )
  }
  return null
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
        {testimonial.author.imageUrl && (
          <Image
            src={testimonial.author.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
            unoptimized
          />
        )}
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
