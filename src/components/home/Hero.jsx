import Link from 'next/link'

import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  BlueskyIcon,
} from '@/components/SocialIcons'
import { CALENDLY_URL } from '@/data/site'

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
      <p className="mt-4 text-sm text-zinc-500">
        4 startup exits. Previously engineering lead at Able.com and solutions
        engineer at Foursquare.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#pricing"
          className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          See pricing <span aria-hidden="true">↓</span>
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
