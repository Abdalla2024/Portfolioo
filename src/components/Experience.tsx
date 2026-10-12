import type { CSSProperties } from 'react'
import { experience } from '../data'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="Experience" subtitle="Where I’ve worked and what I’ve built along the way." />

        <ol className="relative">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-5 w-px -translate-x-1/2 bg-gradient-to-b from-accent via-line to-transparent md:left-[224px]"
          />

          {experience.map((job, i) => {
            const isCurrent = job.period.includes('Present')
            return (
              <li
                key={job.role + job.company}
                className="reveal relative grid grid-cols-[40px_1fr] gap-x-4 sm:gap-x-6 pb-14 last:pb-0 md:grid-cols-[180px_40px_1fr]"
                style={{ '--i': i } as CSSProperties}
              >
                {/* Period (desktop) */}
                <p className="hidden pt-2.5 text-right text-sm text-muted md:block">{job.period}</p>

                {/* Node */}
                <div className="relative z-10 flex justify-center">
                  <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-surface shadow-sm">
                    <img src={job.logo} alt="" className="h-7 w-7 rounded-full object-contain" />
                  </span>
                  {isCurrent && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-bg bg-accent" />
                    </span>
                  )}
                </div>

                {/* Content */}
                <article className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] sm:p-7">
                  <p className="mb-2 text-sm text-muted md:hidden">{job.period}</p>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                    {isCurrent && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-muted">
                    {job.company} · {job.location}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-fg/80">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[11px] h-1 w-1 flex-none rounded-full bg-muted" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <li key={t} className="rounded-md bg-bg px-2 py-1 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
