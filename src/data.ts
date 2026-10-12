import profile from './assets/profile.jpg'
import bookdLogo from './assets/logos/bookd.png'
import hqLogo from './assets/logos/hq.png'
import nsfLogo from './assets/logos/nsf.png'
import revatureLogo from './assets/logos/revature.png'
import tuLogo from './assets/logos/tu.png'

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
  role: 'Software Engineer & iOS Developer',
  oneLiner: 'I design, build, and ship apps people actually use.',
  location: 'Baltimore, MD',
  bio: 'Computer Science graduate from Towson University. I’ve shipped 14 native iOS apps to the App Store and build full-stack systems with Swift, React, and modern backend tools.',
}

export const stats = [
  { value: '14', label: 'Apps shipped' },
  { value: '10K+', label: 'Downloads' },
  { value: '4.6★', label: 'Average rating' },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  logo: string
  points: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: 'Independent iOS Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2025 — Present',
    logo: bookdLogo,
    points: [
      'Shipped 14 native iOS apps to the App Store, reaching over 10,000 downloads and maintaining a 4.6 average rating',
      'Took apps through the entire lifecycle, from concept and Figma design to development, testing, and successful App Store launches',
      'Monetized apps through subscriptions and in-app purchases, generating over $1,000 of monthly recurring revenue',
    ],
    tech: ['Swift', 'SwiftUI', 'UIKit', 'StoreKit', 'MVVM', 'Combine', 'Async/Await'],
  },
  {
    role: 'Computer Science Tutor',
    company: 'Towson University',
    location: 'Towson, MD',
    period: 'Sep 2024 — May 2025',
    logo: tuLogo,
    points: [
      'Tutored university students in Object-Oriented Programming and Data Structures & Algorithms, simplifying complex concepts',
      'Provided personalized guidance and problem-solving strategies to strengthen students’ coding and logical thinking',
      'Assisted with coding assignments, exam preparation, and debugging, leading to improved academic performance',
    ],
    tech: ['Java', 'Python', 'Data Structures', 'Algorithms', 'OOP'],
  },
  {
    role: 'Data Science Research Fellow',
    company: 'National Science Foundation',
    location: 'Baltimore, MD',
    period: 'Sep 2024 — Dec 2024',
    logo: nsfLogo,
    points: [
      'Analyzed Baltimore City crime and resource datasets with Python (pandas) and SQL, applying regression and clustering to uncover correlations',
      'Built interactive Tableau dashboards and Matplotlib visualizations to highlight key trends',
      'Presented insights and policy recommendations to NSF and university stakeholders',
    ],
    tech: ['Python', 'Pandas', 'SQL', 'Tableau', 'Matplotlib'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Revature',
    location: 'Remote',
    period: 'May 2024 — Aug 2024',
    logo: revatureLogo,
    points: [
      'Engineered 6 RESTful API endpoints in Java/Spring Boot with JWT authentication, securing data for 1,000+ users',
      'Optimized database queries with Spring Data JPA, reducing latency by 30%',
      'Authored 15+ unit and integration tests with JUnit 5 and Mockito, catching recurring bugs before they shipped',
    ],
    tech: ['Java', 'Spring Boot', 'JWT', 'Spring Data JPA', 'JUnit 5', 'Mockito'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'HQLABS',
    location: 'Columbia, MD',
    period: 'May 2023 — Aug 2023',
    logo: hqLogo,
    points: [
      'Developed responsive front-end features in React and TypeScript for a real-time financial transaction monitoring dashboard',
      'Built and integrated RESTful services to process financial transaction data, improving reliability and performance',
      'Collaborated in an Agile environment using Git and CI/CD pipelines to streamline delivery',
    ],
    tech: ['React', 'TypeScript', 'REST APIs', 'CI/CD'],
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
