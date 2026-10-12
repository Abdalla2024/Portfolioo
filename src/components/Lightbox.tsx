import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type Props = {
  title: string
  images: string[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

export function Lightbox({ title, images, index, onChange, onClose }: Props) {
  const prev = () => onChange((index - 1 + images.length) % images.length)
  const next = () => onChange((index + 1) % images.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Previous screenshot"
        className="absolute left-3 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-8"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="max-h-[82vh] w-auto rounded-3xl shadow-2xl"
        />
        <figcaption className="mt-4 text-sm text-white/70">
          {title} · {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Next screenshot"
        className="absolute right-3 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-8"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
