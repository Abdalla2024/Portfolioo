import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { apps, type App } from '../data'
import { Lightbox } from './Lightbox'
import { SectionHeading } from './SectionHeading'

const INITIAL_COUNT = 4

export function Apps() {
  const [showAll, setShowAll] = useState(false)
  const [viewer, setViewer] = useState<{ app: App; index: number } | null>(null)
  const visible = showAll ? apps : apps.slice(0, INITIAL_COUNT)

  return (
    <section id="apps" className="scroll-mt-16 border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="Apps" subtitle="Native iOS apps I’ve designed, built, and shipped to the App Store." />

        <div className="space-y-16 sm:space-y-20">
          {visible.map((app) => (
            <article key={app.slug} className="reveal grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
              <header className="flex items-center gap-4 md:flex-col md:items-start md:pt-2">
                <img
                  src={app.icon}
                  alt=""
                  className="h-16 w-16 rounded-[22%] shadow-sm ring-1 ring-line md:h-20 md:w-20"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{app.name}</h3>
                  <p className="text-sm text-muted">{app.tagline}</p>
                  <p className="mt-2 hidden text-xs text-muted md:block">
                    {app.screenshots.length} screenshots
                  </p>
                </div>
              </header>

              <ul
                className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:thin] md:mx-0 md:px-0"
                aria-label={`${app.name} screenshots`}
              >
                {app.screenshots.map((src, i) => (
                  <li key={src} className="flex-none snap-start">
                    <button
                      onClick={() => setViewer({ app, index: i })}
                      className="block overflow-hidden rounded-[1.6rem] border border-line bg-surface transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-accent"
                      aria-label={`Open ${app.name} screenshot ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-[380px] w-auto sm:h-[420px]"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {apps.length > INITIAL_COUNT && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-fg/30"
            >
              {showAll ? 'Show fewer apps' : `Show all ${apps.length} apps`}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>

      {viewer && (
        <Lightbox
          title={viewer.app.name}
          images={viewer.app.screenshots}
          index={viewer.index}
          onChange={(index) => setViewer({ ...viewer, index })}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  )
}
