import { useState, type ComponentType } from 'react'
import { ArrowUpRight, Check, Copy, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '../data'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

type Link = {
  label: string
  value: string
  href: string
  icon: ComponentType<{ className?: string }>
  external?: boolean
}

const links: Link[] = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`, icon: Phone },
  { label: 'LinkedIn', value: 'abdalla-abdelmagid', href: contact.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: 'Abdalla2024', href: contact.github, icon: GithubIcon, external: true },
  { label: 'Resume', value: 'Download PDF', href: contact.resume, icon: FileText, external: true },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="scroll-mt-16 px-4 pb-6 sm:px-6">
      <div className="reveal mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0c0a09] px-6 py-20 text-[#fafaf9] ring-1 ring-white/10 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-widest text-white/50 uppercase">04 — Contact</p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Let’s build something <em className="text-[#a5b4fc]">together.</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/60">
            I’m open to new roles, freelance work, and interesting ideas. The fastest way to reach me is email.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
            >
              <Mail className="h-4 w-4" /> Say hello
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:border-white/40"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>

          <ul className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {links.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center gap-4 py-5 transition-colors"
                >
                  <Icon className="h-5 w-5 flex-none text-white/50 transition-colors group-hover:text-white" />
                  <span className="hidden w-24 flex-none text-sm text-white/50 sm:block">{label}</span>
                  <span className="min-w-0 flex-1 truncate text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                    {value}
                  </span>
                  <ArrowUpRight className="h-5 w-5 flex-none text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#a5b4fc]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-2 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Abdalla Abdelmagid</p>
        <p className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4" /> {contact.location}
        </p>
      </footer>
    </section>
  )
}
