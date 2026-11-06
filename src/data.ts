import profile from './assets/profile.jpg'
import bookdLogo from './assets/logos/bookd.png'
import justVenturesLogo from './assets/logos/justventures.jpg'
import ekibenLogo from './assets/logos/ekiben.png'

const icons = import.meta.glob<string>('./assets/apps/*.jpg', { eager: true, import: 'default' })
const shots = import.meta.glob<string>('./assets/shots/*/*.jpg', { eager: true, import: 'default' })

function screenshotsFor(slug: string) {
  return Object.entries(shots)
    .filter(([path]) => path.includes(`/shots/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src)
}

export const profileImage = profile

export const hero = {
  name: 'Abdalla Abdelmagid',
  role: 'AI Builder Fellow · Software Engineer',
  location: 'Baltimore, MD',
  bio: 'I work with teams to understand operational challenges and build practical AI applications and automations, including tools for inventory ordering, product pricing, store operations, and management reporting.',
}

export const stats = [
  { value: '14', label: 'Apps shipped' },
  { value: '7K+', label: 'Downloads' },
  { value: '4.6★', label: 'Average rating' },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  logo: string | null
  points: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: 'AI Builder Fellow',
    company: 'Ekiben',
    location: 'Baltimore, MD',
    period: 'Oct 2026 — Present',
    logo: ekibenLogo,
    points: [
      'Collaborate directly with the Chief of Staff and managers to understand operational challenges, gather requirements, and identify opportunities for technical solutions.',
      'Build internal applications and automation tools based on stakeholder needs, including operational dashboards, project tracking systems, and interactive employee training platforms.',
      'Develop data-driven workflows to streamline inventory ordering, product pricing, store operations, and management reporting.',
    ],
    tech: ['AI Workflows', 'Automation', 'Requirements Gathering', 'Internal Tools', 'Data-driven Workflows'],
  },
  {
    role: 'AI Builder Fellow',
    company: 'Just Ventures',
    location: 'Baltimore, MD',
    period: 'Sep 2026 — Present',
    logo: justVenturesLogo,
    points: [
      'Interviewed business owners to identify operational bottlenecks and prioritize opportunities for AI automation.',
      'Translated stakeholder requirements into AI workflows with validation rules and human approval checkpoints.',
      'Designed multi-step workflows that tracked evidence and flagged missing or conflicting information before decisions.',
      'Tested workflow outputs against defined scenarios, identifying failure cases and improving reliability through iterative refinement.',
    ],
    tech: ['AI Workflows', 'Automation', 'Prompt Engineering', 'Stakeholder Requirements Gathering', 'Workflow Design & Validation'],
  },
  {
    role: 'Independent iOS Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2025 — Apr 2026',
    logo: bookdLogo,
    points: [
      'Shipped 14 native iOS apps to the App Store, reaching over 7,000 downloads and maintaining a 4.6 average rating.',
      'Managed the full product lifecycle, from concept and Figma design through development, testing, and App Store launch.',
      'Generated over $1,500 in revenue through app subscriptions and in-app purchases.',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'StoreKit', 'MVVM', 'Combine', 'Async/Await'],
  },
]

export type App = {
  slug: string
  name: string
  tagline: string
  icon: string
  screenshots: string[]
}

const appList: Omit<App, 'icon' | 'screenshots'>[] = [
  { slug: 'journal', name: 'Journal App', tagline: 'Diary with Lock' },
  { slug: 'bookd', name: 'Bookd', tagline: 'Reading Tracker & TBR' },
  { slug: 'fokis', name: 'Fokis', tagline: 'Pomodoro Timer' },
  { slug: 'homedesign', name: 'AI Home Design', tagline: 'Interior Design & Planner' },
  { slug: 'penmo', name: 'Penmo', tagline: 'Expense Tracker' },
  { slug: 'party', name: 'Game Night', tagline: 'Party Games' },
  { slug: 'invoice', name: 'Invoice Maker', tagline: 'Easy Estimate' },
  { slug: 'weightlog', name: 'WeightLog', tagline: 'Weight Loss Tracker' },
  { slug: 'homework', name: 'AI Scanner', tagline: 'AI Homework Helper' },
  { slug: 'topdf', name: 'Convert to PDF', tagline: 'Image to PDF' },
]

export const apps: App[] = appList.map((app) => ({
  ...app,
  icon: icons[`./assets/apps/${app.slug}.jpg`],
  screenshots: screenshotsFor(app.slug),
}))

export type Project = {
  name: string
  date: string
  github: string
  summary: string
  tech: string[]
}

export const projects: Project[] = [
  {
    name: 'University Marketplace',
    date: 'Feb 2025',
    github: 'https://github.com/Abdalla2024/COSC484_Project',
    summary:
      'A secure campus marketplace with verified .edu sign-ups, real-time chat, and Stripe-powered payments, backed by flexible MongoDB schemas and optimized queries.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'Stripe'],
  },
  {
    name: 'nVolve',
    date: 'Nov 2024',
    github: 'https://github.com/Abdalla2024/nVolve',
    summary:
      'An event discovery app that shows geolocated events on a MapKit interface, with filtering and favorites to help people find and bookmark what’s nearby.',
    tech: ['Swift', 'SwiftUI', 'Alamofire', 'CoreLocation', 'MapKit'],
  },
  {
    name: 'Movie Recommender',
    date: 'May 2024',
    github: 'https://github.com/Abdalla2024/Movie_Recommender',
    summary:
      'A web app built by a team of four that suggests films with OpenAI GPT-3, featuring a Spring REST backend, MySQL, JWT auth, and a Dockerized deployment.',
    tech: ['Java', 'Spring', 'MySQL', 'JavaScript', 'OpenAI', 'Docker'],
  },
]

export const contact = {
  email: 'abdallaa2024@gmail.com',
  phone: '+1 (443) 640-8169',
  location: 'Baltimore, MD',
  linkedin: 'https://www.linkedin.com/in/abdalla-abdelmagid-4b763b29b/',
  github: 'https://github.com/Abdalla2024',
  resume: '/resume.pdf',
}
