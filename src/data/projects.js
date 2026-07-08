import projectWPComplete from '@/images/logos/wpcomplete.png'
import projectFixtail from '@/images/logos/fixtail.jpg'
import projectBillQ from '@/images/logos/billq.png'
import projectAugustaPlanner from '@/images/logos/augustaplanner.png'
import projectJustSendIt from '@/images/logos/justsendit.png'
import projectEventuallyTicketing from '@/images/logos/eventuallyticketing.png'

// Homepage Proof section — evidence, not portfolio.
export const clientStories = [
  {
    name: 'Bon Vivant Cakes',
    story:
      'A Chicago cake shop drowning in back-and-forth scheduling emails. Now: online scheduling and checkout that cut admin time and lifted sales.',
    link: { href: 'https://bonvivantcakes.com', label: 'bonvivantcakes.com' },
  },
  {
    name: 'Augusta Planner',
    story:
      'A tax expert who knew Section 280A cold. Now: compliance software that documents tax-free rental income for business owners.',
    link: { href: 'https://augustaplanner.com', label: 'augustaplanner.com' },
  },
  {
    name: 'CPA Connect',
    story:
      'An accounting firm running its practice on spreadsheets and email. Now: a platform for client management, workflows, and billing.',
    link: { href: 'https://mycpaconnect.com', label: 'mycpaconnect.com' },
  },
  {
    name: 'Eventually Ticketing',
    story:
      'Event organizers stuck bolting external ticket checkouts onto Squarespace. Now: ticketing that lives natively in Squarespace Commerce.',
    link: { href: 'https://eventuallyticketing.com', label: 'eventuallyticketing.com' },
  },
  // PENDING NAMING PERMISSION — Marion's build sprint. Flip on when approved;
  // it replaces the weakest story above (per spec §6).
  // {
  //   name: '[Marion project name]',
  //   story: '[domain problem → shipped software one-liner]',
  //   link: { href: '[url]', label: '[label]' },
  // },
]

// /work page — the full record.
export const recentProjects = [
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
      'Dead-simple email marketing for creators. Send emails to your list straight from your favorite email client. No templates, no logins, no fuss.',
    link: { href: 'https://justsendit.email', label: 'justsendit.email' },
    logo: projectJustSendIt,
  },
  {
    name: 'CPA Connect',
    description:
      'Practice management platform for accounting firms, streamlining client management, project workflows, team coordination, and billing.',
    link: { href: 'https://mycpaconnect.com', label: 'mycpaconnect.com' },
  },
  {
    name: 'Eventually Ticketing',
    description:
      'Event ticketing that integrates natively with Squarespace Commerce. No external checkouts or workarounds needed.',
    link: { href: 'https://eventuallyticketing.com', label: 'eventuallyticketing.com' },
    logo: projectEventuallyTicketing,
  },
]

export const pastProjects = [
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
    link: {
      href: 'https://web.archive.org/web/20200511225258/https:/www.fixtail.com/',
      label: 'fixtail.com',
    },
    logo: projectFixtail,
  },
]
