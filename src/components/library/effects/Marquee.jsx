import { useRef, useEffect, useState, useCallback } from 'react'
import styles from './Marquee.module.css'

export function Marquee({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  gap = 48,
  className = '',
}) {
  const trackRef = useRef(null)
  const [duration, setDuration] = useState(10)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children[0]) return
    const contentWidth = track.children[0].offsetWidth
    setDuration(contentWidth / speed)
  }, [speed])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, children])

  return (
    <div
      className={`${styles.marquee} ${pauseOnHover ? styles.pausable : ''} ${className}`}
    >
      <div
        ref={trackRef}
        className={styles.track}
        style={{
          '--duration': `${duration}s`,
          '--direction': direction === 'right' ? 'reverse' : 'normal',
          '--gap': `${gap}px`,
        }}
      >
        <div className={styles.content}>{children}</div>
        <div className={styles.content} aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}

export default Marquee
