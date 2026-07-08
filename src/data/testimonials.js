import allenPennPhoto from '@/images/photos/allenpenn.jpg'
import paulJarvisPhoto from '@/images/photos/pauljarvis.jpg'
import kpPhoto from '@/images/photos/kp.jpg'
import malloryPhoto from '@/images/photos/mallory.jpg'
import emilyPhoto from '@/images/photos/emily.jpg'
import sethKravitzPhoto from '@/images/photos/sethkravitz.jpg'
import vincePhoto from '@/images/photos/vince.jpg'
import gpjPhoto from '@/images/photos/gpj.jpg'

// Placed immediately after the Pricing section — domain expert + business outcome.
export const emily = {
  body: "Working with Zack was an absolute dream. He took my idea and vision for a new online scheduling tool for my cake shop and turned it into an easy-to-use solution that was exactly what I needed. Less friction at checkout led to higher sales, and his streamlined scheduling system saved me stress AND administrative costs. Total game changer for my business!",
  author: {
    name: 'Emily Nejad',
    title: 'Owner',
    website: 'BonVivantCakes.com',
    imageUrl: emilyPhoto,
  },
}

// Placed after the Deliverables section.
export const seth = {
  body: "Anyone getting Zack for a month is lucky. He's the unaffordable and unhirable combo of talented designer meets talented engineer meets experienced entrepreneur.",
  author: {
    name: 'Seth Kravitz',
    handle: 'sethkravitz',
    imageUrl: sethKravitzPhoto,
  },
}

// Placed after the Process section — the "first call" partnership quote.
// Intentionally shortened; see task note above.
export const vince = {
  body: "Zack is the first call when I need anything built, period. He is an amazingly talented, yet humble individual who listens more than he speaks and guides more than he corrects. He is able to get out of you what you want even when you can't quite tell him what it is. He is also extremely flexible and able to adapt and change at the drop of a hat, which if you have built anything from scratch you will know how often that can happen.",
  author: {
    name: 'Vince Cortese',
    title: 'CEO',
    context: 'Able.com',
    imageUrl: vincePhoto,
  },
}

// Shown in the Proof section grid.
export const proofTestimonials = [
  {
    body: "Zack's an incredibly talented developer but what makes him stand out is his hyper collaborative DNA, high velocity of shipping and a strong sense of design. I loved working with Zack on the SaaS app he built for me so I could get to revenue very quickly. I'd 100% recommend him to any other ambitious founder.",
    author: {
      name: 'KP',
      handle: 'thisiskp_',
      imageUrl: kpPhoto,
    },
  },
  {
    body: "I am lucky enough to work with Zack Gilbert as our own fractional CTO resource for software and coding at Week of the Website - he's taking on new projects and I couldn't recommend a better partner for success!",
    author: {
      name: 'Mallory Ulaszek',
      title: 'Former CEO',
      website: 'WeekOfTheWebsite.com',
      imageUrl: malloryPhoto,
    },
  },
  {
    body: 'just saying, @zackgilbert is the best cofounder a boy could have.',
    author: {
      name: 'Paul Jarvis',
      title: 'Cofounder',
      context: 'WPComplete & Fixtail',
      imageUrl: paulJarvisPhoto,
    },
  },
  // PENDING CLIENT APPROVAL — flip on when Will approves final copy.
  // Place next to Partnership tier once live (move to its own named export);
  // add imageUrl (photo import) before enabling.
  // {
  //   body: '[Will testimonial — draft under review]',
  //   author: { name: 'Will [last name]', title: '[title]', context: '[company]' },
  // },
  // PENDING CLIENT APPROVAL — flip on when Socrates approves final copy.
  // Place next to Build Sprint / pricing once live;
  // add imageUrl (photo import) before enabling.
  // {
  //   body: '[Socrates testimonial — draft under review]',
  //   author: { name: 'Socrates [last name]', title: '[title]', context: '[company]' },
  // },
]

// Demoted from homepage — résumé-flavored; shown on /about.
export const aboutTestimonials = [
  {
    body: 'Working with Zack has been a true pleasure. His deep technical expertise is matched by high levels of collaboration and results. Under his guidance, we delivered several high-stakes projects at Foursquare. His pragmatic approach, coupled with an ability to foster a cooperative work environment, made him a key asset to our organization.',
    author: {
      name: 'Gareth Paul Jones',
      context: 'Manager at Foursquare',
      imageUrl: gpjPhoto,
    },
  },
  {
    body: "I couldn't imagine a better person to partner with if you want to test bringing an idea to life...trying to come up with something we can work on together!",
    author: {
      name: 'Allen Penn',
      handle: 'allenpenn',
      imageUrl: allenPennPhoto,
    },
  },
]
