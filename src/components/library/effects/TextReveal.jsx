import { useEffect, useRef, useState } from 'react'
import styles from './TextEffects.module.css'

/**
 * TextReveal Component
 * Animation de révélation du texte (lettre par lettre ou mot par mot)
 */
export function TextReveal({
  children,
  mode = 'words', // 'words' | 'letters' | 'lines'
  delay = 0,
  stagger = 50,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade'
  trigger = 'mount', // 'mount' | 'inView'
  className = '',
  as: Tag = 'div'
}) {
  const [isVisible, setIsVisible] = useState(trigger === 'mount')
  const ref = useRef(null)

  useEffect(() => {
    if (trigger !== 'inView') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [trigger])

  const splitContent = () => {
    const text = typeof children === 'string' ? children : ''

    if (mode === 'letters') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          className={`${styles.revealItem} ${styles[direction]} ${isVisible ? styles.visible : ''}`}
          style={{ transitionDelay: `${delay + i * stagger}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    }

    if (mode === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} className={styles.wordWrapper}>
          <span
            className={`${styles.revealItem} ${styles[direction]} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${delay + i * stagger}ms` }}
          >
            {word}
          </span>
          {i < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ))
    }

    if (mode === 'lines') {
      return text.split('\n').map((line, i) => (
        <span
          key={i}
          className={`${styles.revealItem} ${styles.line} ${styles[direction]} ${isVisible ? styles.visible : ''}`}
          style={{ transitionDelay: `${delay + i * stagger}ms` }}
        >
          {line}
        </span>
      ))
    }

    return children
  }

  return (
    <Tag ref={ref} className={`${styles.textReveal} ${className}`}>
      {splitContent()}
    </Tag>
  )
}

export default TextReveal
