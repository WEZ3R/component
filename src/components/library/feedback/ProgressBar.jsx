import { useState, useEffect, useRef } from 'react'
import styles from './ProgressBar.module.css'

export function ProgressBar({
  value = 0,
  max = 100,
  variant = 'default',
  color = 'primary',
  size = 'md',
  label,
  showValue = false,
  animate = true,
  className = '',
}) {
  const [width, setWidth] = useState(animate ? 0 : (value / max) * 100)
  const ref = useRef(null)

  useEffect(() => {
    if (!animate) {
      setWidth((value / max) * 100)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setWidth((value / max) * 100)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, max, animate])

  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={`${styles.track} ${styles[size]} ${styles[variant]}`}>
        <div
          className={`${styles.fill} ${styles[color]} ${variant === 'striped' ? styles.stripedFill : ''}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
