import { useState } from 'react'
import styles from './Buttons.module.css'

/**
 * Button Ripple - Bouton avec effet ripple au clic
 */
export function ButtonRipple({
  children = 'Click Me',
  size = 'md',
  color = 'indigo',
  onClick,
  className = '',
}) {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples(prev => [...prev, { x, y, id }])
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600)
    onClick?.()
  }

  return (
    <button
      className={`${styles.btn} ${styles.ripple} ${styles[`ripple${color.charAt(0).toUpperCase() + color.slice(1)}`]} ${styles[size]} ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map(r => (
        <span key={r.id} className={styles.rippleWave} style={{ left: r.x, top: r.y }} />
      ))}
    </button>
  )
}
