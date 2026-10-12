import type { CSSProperties } from 'react'
import { ArrowDown, FileText, MapPin } from 'lucide-react'
import { contact, hero, profileImage, stats } from '../data'

const delay = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="rise flex items-center gap-3" style={delay(0)}>
          <img
            src={profileImage}
            alt={hero.name}
            className="h-12 w-12 rounded-full object-cover object-left ring-2 ring-surface"
          />
          <div className="text-sm leading-tight">
            <p className="font-medium">{hero.name}</p>
            <p className="text-muted">{hero.role}</p>
          </div>
        </div>

        <h1
          className="rise mt-10 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          style={delay(1)}
        >
          I design, build, and ship apps people <em className="text-accent">actually</em> use.
        </h1>

        <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted" style={delay(2)}>
          {hero.bio}
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={delay(3)}>
          <a
            href="#apps"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-80"
          >
            See my work <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-fg/30"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4" /> {hero.location}
          </span>
        </div>

        <dl
          className="rise mt-20 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8"
          style={delay(4)}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
