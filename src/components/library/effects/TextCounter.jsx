import { useState, useEffect, useRef } from 'react'

/**
 * TextCounter Component
 * Compteur animé qui s'incrémente jusqu'à la valeur cible
 */
export function TextCounter({
  end = 100,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  as: Tag = 'span',
}) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const animate = (now) => {
          const progress = Math.min((now - startTime) / (duration * 1000), 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(start + (end - start) * eased))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [start, end, duration])

  return (
    <Tag ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </Tag>
  )
}

export default TextCounter
