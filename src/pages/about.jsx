import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/headshot.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Zack Gilbert</title>
        <meta
          name="description"
          content="I’m Zack Gilbert. I live in Chicago, where I build the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Zack Gilbert. I live in Chicago, where I build the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a business savvy, customer centric, product engineer and lead that is a hard working, adaptable, and growth minded team player. It’s very important to me to be a good listener and foster communication so I can help build strong relationships with customers, community, and team members.
              </p>
              <p>
                My passion for blending technology with creativity always keeps the end user’s experience top of mind. As one of the founding members of both Technori and Chicago.concat(), and as a mentor at 1871, I’ve been involved with the Chicago tech and developer communities since 2010. I’ve had successful exits from 4 of my (SaaS) projects, was previously an Enterprise Solutions Engineer at Foursquare, where I helped . I most recently worked as Engineering Lead at Able.com, where I built and managed an engineering team of full-time and contractor-based developers from around the world to build while helping independent workers manage their finances and taxes.
              </p>
              <p>For more about what it’s like working with me, check refer to my <a href="/manual" className="underline hover:no-underline">User Manual</a>.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/zackgilbert" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/zackgilbert" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/zackgilbert" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/zackgilbert" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:zack@zackgilbert.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                zack@zackgilbert.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
