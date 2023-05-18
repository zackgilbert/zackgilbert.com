import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAble from '@/images/logos/able.svg'
import logoCloudbot from '@/images/logos/cloudbot.jpg'
import logoFoursquare from '@/images/logos/foursquare.svg'
import logoHighrise from '@/images/logos/highrise.png'
import image1 from '@/images/photos/billq-logo.png'
import image2 from '@/images/photos/ofcoursebooks.png'
import image3 from '@/images/photos/fixtail.png'
import image4 from '@/images/photos/wpcomplete.svg'
import image5 from '@/images/photos/able.png'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

import { SimpleLayout } from '@/components/SimpleLayout'
import projectWPComplete from '@/images/logos/wpcomplete.png'
import projectAble from '@/images/logos/able.png'
import projectFixtail from '@/images/logos/fixtail.jpg'
import projectLeaderBird from '@/images/logos/leaderbird.svg'
import projectBillQ from '@/images/logos/billq.png'
import projectProjectGarden from '@/images/logos/projectgarden.svg'


const FATHOM_ID = process.env.NEXT_PUBLIC_FATHOM_ID
const projects = [
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
    link: { href: 'https://web.archive.org/web/20200511225258/https://www.fixtail.com/', label: 'fixtail.com' },
    logo: projectFixtail,
  },
  {
    name: 'Able',
    description:
      'Mobile and web based tools that helped independent workers and freelancers manage their money and taxes. Built in Ruby on Rails, native iOS and Android.',
    link: { href: 'https://able.com', label: 'able.com' },
    logo: projectAble,
  },
  {
    name: 'LeaderBird',
    description:
      'A Twitter based leaderboard competition and accountability SaaS. Has paying customers. Built in 2 weeks, in Sinatra (Ruby).',
    link: { href: 'https://leaderbird.co', label: 'leaderbird.co' },
    logo: projectLeaderBird,
  },
  {
    name: 'ProjectGarden',
    description:
      'A place for makers to showcase and grow their projects from idea to launch. Built in 2 weeks, in Sinatra (Ruby).',
    link: { href: 'https://projectgarden.co/zackgilbert', label: 'projectgarden.co' },
    logo: projectProjectGarden,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="https://zackgilbert.substack.com/api/v1/free?nojs=true"
      method="post"
      className="form rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      noValidate=""
    >
      <input type="hidden" name="first_url" value="https://zackgilbert.substack.com/publish?utm_source=user-menu"/>
      <input type="hidden" name="first_referrer" value="https://substack.com/"/>
      <input type="hidden" name="current_url" value="https://zackgilbert.substack.com/embed"/>
      <input type="hidden" name="current_referrer" value="https://zackgilbert.com/"/>
      <input type="hidden" name="referral_code"/>
      <input type="hidden" name="source" value="embed"/>
      <input type="hidden" name="referring_pub_id"/>
      <input type="hidden" name="additional_referring_pub_ids"/>

      <input type="email" name="fake_email" placeholder="email" style={{ position: 'absolute', top: '-10000px', left: '-10000px' }} />
      <input type="password" name="fake_password" placeholder="password" style={{ position: 'absolute', top: '-10000px', left: '-10000px' }} />
    
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Able.com',
      title: 'Engineering Lead',
      logo: logoAble,
      start: 'Nov 2020',
      end: 'Mar 2023',
    },
    {
      company: 'Foursquare',
      title: 'Enterprise Solutions Engineer',
      logo: logoFoursquare,
      start: 'Mar 2018',
      end: 'Sep 2022',
    },
    {
      company: 'Highrise',
      title: 'Software Engineer',
      logo: logoHighrise,
      start: 'Sep 2014',
      end: 'May 2015',
    },
    {
      company: 'Cloudbot',
      title: 'Software Engineer & Product Manager',
      logo: logoCloudbot,
      start: 'Jan 2011',
      end: 'Apr 2012',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/*<Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>*/}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Zack Gilbert - Builder, engineering lead, and father.
        </title>
        <meta
          name="description"
          content="I’m Zack, a builder, engineering lead, and father, based in Chicago, IL. I'm a business savvy, customer centric, product engineer that is a hard working, adaptable, and growth minded team player. It's very important to me to be a good listener and foster communication so I can help build strong relationships with customers, community, and team members."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            👋 Hi! I’m Zack Gilbert –
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a builder, engineering lead, and father, based in Chicago, IL.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a business savvy, customer centric, product engineer that is a hard working, adaptable, and growth minded team player. It’s very important to me to be a good listener and foster communication so I can help build strong relationships with customers, community, and team members.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/zackgilbert"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/zackgilbert"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
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
        <ul
          role="list"
          className="mt-20 pt-20 border-t border-zinc-300 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
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
        <p className="mt-20 text-center"><a href="https://projectgarden.co/zackgilbert" className="underline hover:no-underline px-10 py-3">Full list of projects</a></p>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
      <script src="https://cdn.usefathom.com/script.js" data-site={FATHOM_ID} defer></script>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
