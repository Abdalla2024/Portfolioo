type Props = {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <div className="reveal mb-14 sm:mb-20">
      <p className="font-mono text-xs tracking-widest text-muted uppercase">
        {index} — {title}
      </p>
      {subtitle && (
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {subtitle}
        </h2>
      )}
    </div>
  )
}
