import { useEffect, useState } from 'react'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Apps', href: '#apps' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-2xl italic tracking-tight">
          aa.
        </a>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <li key={link.href} className={link.href === '#contact' ? '' : 'hidden sm:block'}>
              <a
                href={link.href}
                className={
                  link.href === '#contact'
                    ? 'ml-2 rounded-full bg-fg px-4 py-2 font-medium text-bg transition-opacity hover:opacity-80'
                    : 'rounded-full px-3 py-2 text-muted transition-colors hover:text-fg'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
