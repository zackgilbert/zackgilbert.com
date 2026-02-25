import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  BlueskyIcon,
} from '@/components/SocialIcons'
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
import projectAugustaPlanner from '@/images/logos/augustaplanner.png'
import projectJustSendIt from '@/images/logos/justsendit.png'
import projectEventuallyTicketing from '@/images/logos/eventuallyticketing.png'

import paulJarvisPhoto from '@/images/photos/pauljarvis.jpg'
import kpPhoto from '@/images/photos/kp.jpg'
import allenPennPhoto from '@/images/photos/allenpenn.jpg'
import malloryPhoto from '@/images/photos/mallory.jpg'
import miguelPhoto from '@/images/photos/miguel.jpg'
import emilyPhoto from '@/images/photos/emily.jpg'
import sethKravitzPhoto from '@/images/photos/sethkravitz.jpg'
import jessePhoto from '@/images/photos/jesse.jpg'
import meiPhoto from '@/images/photos/mei.jpg'
import lauradPhoto from '@/images/photos/laurad.jpg'
import vincePhoto from '@/images/photos/vince.jpg'
import gpjPhoto from '@/images/photos/gpj.jpg'


const recentProjects = [
  {
    name: 'Augusta Planner',
    description:
      'Compliance automation for the Augusta Rule (Section 280A), helping business owners document tax-free rental income from their property.',
    link: { href: 'https://augustaplanner.com', label: 'augustaplanner.com' },
    logo: projectAugustaPlanner,
  },
  {
    name: 'Just Send It',
    description:
      'Dead-simple email marketing for creators. Send emails to your list straight from your favorite email client — no templates, no logins, no fuss.',
    link: { href: 'https://justsendit.email', label: 'justsendit.email' },
    logo: projectJustSendIt,
  },
  {
    name: 'CPA Connect',
    description:
      'Practice management platform for accounting firms — streamlining client management, project workflows, team coordination, and billing.',
    link: { href: 'https://mycpaconnect.com', label: 'mycpaconnect.com' },
  },
  {
    name: 'Eventually Ticketing',
    description:
      'Event ticketing that integrates natively with Squarespace Commerce — no external checkouts or workarounds needed.',
    link: { href: 'https://eventuallyticketing.com', label: 'eventuallyticketing.com' },
    logo: projectEventuallyTicketing,
  },
]

const pastProjects = [
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
]

const featured = {
  body: "Working with Zack was an absolute dream. He took my idea and vision for a new online scheduling tool for my cake shop and turned it into an easy-to-use solution that was exactly what I needed. Less friction at checkout led to higher sales, and his streamlined scheduling system saved me stress AND administrative costs. Total game changer for my business!",
  author: {
    name: 'Emily Nejad',
    title: 'Owner',
    website: 'BonVivantCakes.com',
    imageUrl: emilyPhoto
  }
}
const highlights = [
  {
    body: "I am lucky enough to work with Zack Gilbert as our own fractional CTO resource for software and coding at Week of the Website - he's taking on new projects and I couldn't recommend a better partner for success!",
    author: {
      name: 'Mallory Ulaszek',
      title: 'Former CEO',
      website: 'WeekOfTheWebsite.com',
      handle: '',
      imageUrl: malloryPhoto
    },
  },
  {
    body: 'Working with Zack has been a true pleasure. His deep technical expertise is matched by high levels of collaboration and results. Under his guidance, we delivered several high-stakes projects at Foursquare. His pragmatic approach, coupled with an ability to foster a cooperative work environment, made him a key asset to our organization.',
    author: {
      name: 'Gareth Paul Jones',
      context: 'Manager at Foursquare',
      imageUrl: gpjPhoto
    },
  }
]

const featured2 = {
  body: "Zack is the first call when I need anything built, period. He is an amazingly talented, yet humble individual who listens more than he speaks and guides more than he corrects. He is able to get out of you what you want even when you can't quite tell him what it is. He is also extremely flexible and able to adapt and change at the drop of a hat, which if you have built anything from scratch you will know how often that can happen. Lastly, Zack is an amazing father and husband too which may be the only thing more impressive than his ability to build!",
  author: {
    name: 'Vince Cortese',
    title: 'CEO',
    context: 'Able.com',
    imageUrl: vincePhoto
  }
}

const testimonials = [
  {
    body: 'just saying, @zackgilbert is the best cofounder a boy could have.',
    author: {
      name: 'Paul Jarvis',
      title: 'Cofounder',
      context: 'WPComplete & Fixtail',
      handle: '',
      imageUrl: paulJarvisPhoto
    },
  },
  {
    body: "Zack's an incredibly talented developer but what makes him stand out is his hyper collaborative DNA, high velocity of shipping and a strong sense of design. I loved working with Zack on the SaaS app he built for me so I could get to revenue very quickly. I'd 100% recommend him to any other ambitious founder.",
    author: {
      name: 'KP',
      context: '',
      handle: 'thisiskp_',
      imageUrl: kpPhoto,
    },
  },
  {
    body: "I couldn't imagine a better person to partner with if you want to test bringing an idea to life...trying to come up with something we can work on together!",
    author: {
      name: 'Allen Penn',
      context: '',
      handle: 'allenpenn',
      imageUrl: allenPennPhoto
    }
  },
  {
    body: "Anyone getting Zack for a month is lucky. He's the unaffordable and unhirable combo of talented designer meets talented engineer meets experienced entrepreneur.",
    author: {
      name: 'Seth Kravitz',
      context: '',
      handle: 'sethkravitz',
      imageUrl: sethKravitzPhoto
    },
  },
  /*{
    body: 'For anyone who is looking to spin up a high quality mvp super quick @zackgilbert is your guy! He's been doing this for 20 years....and now he's sharing his talents with you.',
    author: {
      name: 'Jesse Link 💭',
      context: '',
      handle: 'jesselinkthinks',
      imageUrl: jessePhoto
    }
  },
  {
    body: 'Stop thinking. Get your MVP out there. @zackgilbert is incredible if you're looking to get shit done.',
    author: {
      name: '⚡️Mei',
      context: '',
      handle: 'thisismeihere',
      imageUrl: meiPhoto
    }
  },
  {
    body: 'Having used @leaderbirdco as a customer I'd say @zackgilbert is a pretty talented guy 👀',
    author: {
      name: 'Laura is building 🚀🧪💯',
      context: '',
      handle: 'Iam_LauraD',
      imageUrl: lauradPhoto
    }
  },*/
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Testimonials() {
  return (
    <div className="mt-20 py-20 border-t border-zinc-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 id="testimonials" className="text-lg font-semibold leading-8 tracking-tight text-zinc-900 dark:text-zinc-100">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            What people say about working with me
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div key={featured.author.handle ? featured.author.handle : featured.author.name} className="mb-0 sm:inline-block sm:w-full">
            <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
              <blockquote className="text-gray-900">
                <p>{`"${featured.body}"`}</p>
              </blockquote>
              <figcaption className="mt-6 mx-auto place-content-center flex items-center gap-x-4">
                <Image
                  src={featured.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                  unoptimized
                />
                <div>
                  <div className="font-semibold text-gray-900">{featured.author.name}</div>
                  {featured.author.context ? (
                  <div className="text-gray-600">{featured.author.title ? `${featured.author.title} of ${featured.author.context}` : featured.author.context}</div>
                  ) : (
                    (featured.author.website) ? 
                    <div className="text-gray-600"><a href={`https://${featured.author.website}`}>{featured.author.title ? `${featured.author.title} of ${featured.author.website}` : featured.author.website}</a></div>
                  : (
                  <div className="text-gray-600"><a href={`https://twitter.com/${featured.author.handle}`}>{`@${featured.author.handle}`}</a></div>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="sm:-mx-4 sm:columns-2 sm:text-[0]">
            {highlights.map((testimonial) => (
              <div key={testimonial.author.handle} className="mb-8 pt-8 sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      src={testimonial.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                      unoptimized
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      {testimonial.author.context ? (
                      <div className="text-gray-600">{testimonial.author.title ? `${testimonial.author.title} of ${testimonial.author.context}` : testimonial.author.context}</div>
                      ) : (
                        (testimonial.author.website) ? 
                        <div className="text-gray-600"><a href={`https://${testimonial.author.website}`}>{testimonial.author.title ? `${testimonial.author.title} of ${testimonial.author.website}` : testimonial.author.website}</a></div>
                      : (
                      <div className="text-gray-600"><a href={`https://twitter.com/${testimonial.author.handle}`}>{`@${testimonial.author.handle}`}</a></div>
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <div key={featured2.author.name} className="pt-8 sm:inline-block sm:w-full">
            <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
              <blockquote className="text-gray-900">
                <p>{`"${featured2.body}"`}</p>
              </blockquote>
              <figcaption className="mt-6 mx-auto place-content-center flex items-center gap-x-4">
                <Image
                  src={featured2.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                  unoptimized
                />
                <div>
                  <div className="font-semibold text-gray-900">{featured2.author.name}</div>
                  {featured2.author.context ? (
                  <div className="text-gray-600">{featured2.author.title ? `${featured2.author.title} of ${featured2.author.context}` : featured2.author.context}</div>
                  ) : (
                    (featured2.author.website) ?
                    <div className="text-gray-600"><a href={`https://${featured2.author.website}`}>{featured2.author.title ? `${featured2.author.title} of ${featured2.author.website}` : featured2.author.website}</a></div>
                  : (
                  <div className="text-gray-600"><a href={`https://twitter.com/${featured2.author.handle}`}>{`@${featured2.author.handle}`}</a></div>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="pt-8 sm:-mx-4 sm:columns-2 lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle || testimonial.author.name} className="mb-8 break-inside-avoid sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      src={testimonial.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                      unoptimized
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      {testimonial.author.context ? (
                      <div className="text-gray-600">{testimonial.author.title ? `${testimonial.author.title} of ${testimonial.author.context}` : testimonial.author.context}</div>
                      ) : (
                        (testimonial.author.website) ? 
                        <div className="text-gray-600"><a href={`https://${testimonial.author.website}`}>{testimonial.author.title ? `${testimonial.author.title} of ${testimonial.author.website}` : testimonial.author.website}</a></div>
                      : (
                      <div className="text-gray-600"><a href={`https://twitter.com/${testimonial.author.handle}`}>{`@${testimonial.author.handle}`}</a></div>
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CTA() {
  return (
    <div className="pt-32 border-t border-zinc-300 px-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Interested in working together?
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://calendly.com/zackgilbert/30-min"
            className="rounded-md bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-600 dark:hover:bg-gray-300 px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Let's talk!
          </a>
          {/*<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>*/}
        </div>
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Zack Gilbert - I help people build the tools they've always wanted.
        </title>
        <meta
          name="description"
          content="I'm Zack, a builder, engineering lead, and father, based in Chicago, IL. I'm a business savvy, customer centric, product engineer that is a hard working, adaptable, and growth minded team player. It's very important to me to be a good listener and foster communication so I can help build strong relationships with customers, community, and team members."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I help people with deep industry knowledge build the tools they've always wanted.
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            You know your business inside and out. You've been sketching ideas on napkins for years. I'm the technical partner who makes them real.
          </p>
          <div className="mt-6 flex gap-6">
            <div className="bluesky-flutter w-6 h-6">
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
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I like to think of myself as a business-savvy, customer-centric, product engineer with soft skills. That's just a long-winded way of saying I help bridge technical and non-technical worlds to make sure that the end user's experience is always top of mind. I love building projects that help solve real problems.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I've had successful exits from 4 of my projects and was previously a Solutions Engineer in <a href="https://foursquare.com" className="underline hover:no-underline">Foursquare</a>'s Chicago office where I helped enterprise companies integrate and optimize their geo-location needs. Most recently I was the engineering lead at <a href="https://able.com" className="underline hover:no-underline">Able.com</a>, where I was primarily responsible for the planning and execution of mobile and server development.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            As one of the founding members of <a href="https://technori.com" className="underline hover:no-underline">Technori</a> and Chicago.concat(), I've been involved with the Chicago tech and developer communities since 2010.
          </p>
          {/*<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            My passion for blending technology with creativity always keeps the end user's experience top of mind. As one of the founding members of both Technori and Chicago.concat(), and as a mentor at 1871, I've been involved with the Chicago tech and developer communities since 2010. I've had successful exits from 4 of my (SaaS) projects, was previously an Enterprise Solutions Engineer at Foursquare, where I helped . I most recently worked as Engineering Lead at Able.com, where I built and managed an engineering team of full-time and contractor-based developers from around the world to build while helping independent workers manage their finances and taxes.
          </p>*/}
        </div>
        <div className="mt-20 py-20 border-t border-zinc-300">
          <div className="mx-auto max-w-2xl">
            <h2 id="work-with-me" className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Let's Build Something
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I work with business owners and domain experts who have ideas for software that would transform how they work — but aren't technical enough to build it themselves.
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Together, we go from idea to working product. I handle the architecture, the code, and the production details. You bring the expertise and vision.
            </p>
            <p className="mt-6 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              What this looks like:
            </p>
            <ul className="mt-4 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
              <li><span className="font-semibold text-zinc-900 dark:text-zinc-100">Monthly partnership ($5k/month)</span> — ongoing collaboration, building and iterating together</li>
              <li><span className="font-semibold text-zinc-900 dark:text-zinc-100">Project-based work</span> — for well-defined builds with clear scope</li>
            </ul>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              If you've got an idea you've been sitting on, let's talk.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/zackgilbert/30-min"
                className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 py-20 border-t border-zinc-300 mx-auto text-center">
          <h2 id="projects" className="text-lg font-semibold leading-8 tracking-tight text-zinc-900 dark:text-zinc-100">Recent Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Here's what I've been building lately.
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
        >
          {recentProjects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8 rounded-full"
                    unoptimized
                  />
                ) : (
                  <span className="text-lg font-bold text-zinc-600 dark:text-zinc-300">
                    {project.name.charAt(0)}
                  </span>
                )}
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
        <div className="mt-20 pt-20 border-t border-zinc-300 mx-auto text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-900 dark:text-zinc-100">Past Projects</h2>
          <p className="mt-2 text-xl tracking-tight text-gray-600 dark:text-gray-400">
            A few older projects — some sold, some still running.
          </p>
        </div>
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pastProjects.map((project) => (
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
        <p className="mt-20 text-center"><a href="https://docs.google.com/spreadsheets/d/12vxRYLiDF-cSlhvIf2hHiJ6oE1ZQD79s41yMkZIYIS0/edit?usp=sharing" className="underline hover:no-underline px-10 py-3 dark:text-gray-100">Full list of projects</a></p>
      </Container>
      <Container>
        <Testimonials />
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mt-20 py-20 border-t border-zinc-300 mx-auto text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-900 dark:text-zinc-100">Articles</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Recent writing and notes.
          </p>
        </div>
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <CTA />
      </Container>
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
