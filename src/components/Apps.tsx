import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { apps } from '../data'
import { Lightbox } from './Lightbox'
import { SectionHeading } from './SectionHeading'

export function Apps() {
  const [selected, setSelected] = useState(0)
  const [viewerIndex, setViewerIndex] = useState<number | null>(null)
  const app = apps[selected]

  return (
    <section id="apps" className="scroll-mt-16 border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="Apps" subtitle="Native iOS apps I’ve designed, built, and shipped to the App Store." />

        {/* Home-screen style app picker */}
        <ul className="reveal grid grid-cols-5 gap-x-3 gap-y-6 sm:gap-x-6 md:grid-cols-10" aria-label="Choose an app">
          {apps.map((a, i) => {
            const active = i === selected
            return (
              <li key={a.slug}>
                <button
                  onClick={() => setSelected(i)}
                  aria-pressed={active}
                  className="group flex w-full flex-col items-center gap-2 focus-visible:outline-none"
                >
                  <img
                    src={a.icon}
                    alt=""
                    className={`aspect-square w-full max-w-16 rounded-[22%] shadow-sm ring-1 ring-line transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-accent ${
                      active
                        ? 'scale-105 ring-2 ring-accent ring-offset-2 ring-offset-bg'
                        : 'opacity-55 group-hover:-translate-y-0.5 group-hover:opacity-100'
                    }`}
                  />
                  <span
                    className={`line-clamp-2 w-full text-center text-[11px] leading-tight transition-colors sm:text-xs ${
                      active ? 'font-medium text-fg' : 'text-muted'
                    }`}
                  >
                    {a.name}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Showcase for the selected app */}
        <div className="reveal mt-10 overflow-hidden rounded-3xl border border-line bg-surface sm:mt-14">
          <ScreenshotStrip key={app.slug} app={app} onOpen={setViewerIndex} />
        </div>
      </div>

      {viewerIndex !== null && (
        <Lightbox
          title={app.name}
          images={app.screenshots}
          index={viewerIndex}
          onChange={setViewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </section>
  )
}

function ScreenshotStrip({ app, onOpen }: { app: (typeof apps)[number]; onOpen: (index: number) => void }) {
  const stripRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)
  const [edges, setEdges] = useState({ start: true, end: false })

  const update = () => {
    const el = stripRef.current
    if (!el) return
    const first = el.firstElementChild as HTMLElement | null
    const step = first ? first.offsetWidth + 16 : 1
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    setActive(atEnd ? app.screenshots.length - 1 : Math.round(el.scrollLeft / step))
    setEdges({ start: el.scrollLeft < 8, end: atEnd })
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    const el = stripRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const scrollTo = (i: number) => {
    const el = stripRef.current
    const item = el?.children[i] as HTMLElement | undefined
    if (el && item) el.scrollTo({ left: item.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }

  return (
    <div className="rise">
      <header className="flex items-center gap-4 border-b border-line px-5 py-5 sm:px-8">
        <img src={app.icon} alt="" className="h-12 w-12 rounded-[22%] ring-1 ring-line" />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold tracking-tight">{app.name}</h3>
          <p className="truncate text-sm text-muted">{app.tagline}</p>
        </div>
        <p className="font-mono text-xs text-muted tabular-nums">
          {active + 1} / {app.screenshots.length}
        </p>
      </header>

      <div className="relative">
        <ul
          ref={stripRef}
          onScroll={update}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-px-5 px-5 py-8 sm:scroll-px-8 sm:px-8"
          aria-label={`${app.name} screenshots`}
        >
          {app.screenshots.map((src, i) => (
            <li key={src} className="flex-none snap-start">
              <button
                onClick={() => onOpen(i)}
                className="block overflow-hidden rounded-[1.75rem] border border-line shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-accent"
                aria-label={`Open ${app.name} screenshot ${i + 1}`}
              >
                <img src={src} alt="" loading="lazy" className="h-[400px] w-auto sm:h-[460px]" />
              </button>
            </li>
          ))}
        </ul>

        {/* Edge fades */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent transition-opacity duration-300 ${
            edges.start ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-surface to-transparent transition-opacity duration-300 ${
            edges.end ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Scroll arrows: the right one nudges to hint at more screenshots */}
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous screenshots"
          tabIndex={edges.start ? -1 : 0}
          className={`absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 ${
            edges.start ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="More screenshots"
          tabIndex={edges.end ? -1 : 0}
          className={`absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg shadow-lg transition-all duration-300 hover:scale-105 ${
            edges.end ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <ChevronRight className={`h-5 w-5 ${edges.start ? 'animate-nudge' : ''}`} />
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 pb-6">
        {app.screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => scrollTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-fg' : 'w-1.5 bg-line hover:bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
