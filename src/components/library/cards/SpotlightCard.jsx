import { useRef, useState, useCallback } from 'react'
import styles from './SpotlightCard.module.css'

export function SpotlightCard({
  children,
  icon,
  title,
  description,
  spotlightColor = 'rgba(99, 102, 241, 0.15)',
  className = '',
}) {
  const cardRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight */}
      <div
        className={styles.spotlight}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Border glow */}
      <div
        className={styles.borderGlow}
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className={styles.inner}>
        {children || (
          <>
            {icon && <div className={styles.icon}>{icon}</div>}
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
          </>
        )}
      </div>
    </div>
  )
}

export default SpotlightCard
