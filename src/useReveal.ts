import { useEffect } from 'react'

// Adds `is-visible` to every `.reveal` element once it scrolls into view,
// including elements rendered later (e.g. after "Show all").
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    const observeAll = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))

    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
