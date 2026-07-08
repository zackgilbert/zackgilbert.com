import Head from 'next/head'

import { Container } from '@/components/Container'
import { Hero } from '@/components/home/Hero'
import { SelfQualification } from '@/components/home/SelfQualification'
import { Pricing } from '@/components/home/Pricing'
import { Deliverables } from '@/components/home/Deliverables'
import { Process } from '@/components/home/Process'
import { Proof } from '@/components/home/Proof'
import { Faq } from '@/components/home/Faq'
import { Testimonial } from '@/components/home/Testimonial'
import { emily, seth, vince } from '@/data/testimonials'
import { generateRssFeed } from '@/lib/generateRssFeed'

function AdjacentTestimonial({ testimonial }) {
  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <Testimonial testimonial={testimonial} featured />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zack Gilbert - You built the first version. Let&apos;s make it real.
        </title>
        <meta
          name="description"
          content="I help domain experts turn their almost-software (spreadsheets, AI-built apps, prototypes) into production software people can rely on. Pricing, process, and deliverables right on this page."
        />
      </Head>
      <Container className="mt-9">
        <Hero />
        <SelfQualification />
        <Pricing />
        <AdjacentTestimonial testimonial={emily} />
        <Deliverables />
        <AdjacentTestimonial testimonial={seth} />
        <Process />
        <AdjacentTestimonial testimonial={vince} />
        <Proof />
        <Faq />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // RSS generation intentionally stays on the homepage build even though
  // articles no longer render here (see spec: Technical notes).
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return { props: {} }
}
