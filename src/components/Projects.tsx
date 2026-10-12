import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { GithubIcon } from './BrandIcons'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="Projects" subtitle="Full-stack and mobile projects, with the source on GitHub." />

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fg/20 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
              style={{ '--i': i } as CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg">
                  <GithubIcon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight">{project.name}</h3>
              <p className="text-sm text-muted">{project.date}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-fg/80">{project.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-md bg-bg px-2 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
