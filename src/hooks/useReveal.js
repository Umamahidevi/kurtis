import { useEffect, useRef, useState } from 'react'

// Adds a graceful fade-up the first time an element scrolls into view.
export default function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShown(true); return }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            if (once) io.unobserve(e.target)
          } else if (!once) {
            setShown(false)
          }
        })
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])

  return [ref, shown]
}
