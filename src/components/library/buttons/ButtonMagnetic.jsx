import { useState, useRef } from 'react'
import styles from './Buttons.module.css'

/**
 * Button Magnetic - Bouton qui suit le curseur au survol
 */
export function ButtonMagnetic({
  children = 'Hover Me',
  size = 'md',
  onClick,
  className = '',
}) {
  const ref = useRef(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTransform({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => setTransform({ x: 0, y: 0 })

  return (
    <button
      ref={ref}
      className={`${styles.btn} ${styles.magnetic} ${styles[size]} ${className}`}
      style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
