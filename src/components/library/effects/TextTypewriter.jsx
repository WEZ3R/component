import { useEffect, useState } from 'react'
import styles from './TextEffects.module.css'

/**
 * TextTypewriter Component
 * Effet machine à écrire avec curseur clignotant
 */
export function TextTypewriter({
  texts = ['Hello World'],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  cursor = true,
  cursorChar = '|',
  className = '',
  as: Tag = 'span'
}) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
        if (!loop && textIndex === texts.length - 1) return
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText === currentText) {
        if (texts.length === 1 && !loop) return
        setIsPaused(true)
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText, isDeleting, isPaused, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop])

  return (
    <Tag className={`${styles.typewriter} ${className}`}>
      {displayText}
      {cursor && (
        <span className={styles.cursor}>{cursorChar}</span>
      )}
    </Tag>
  )
}

export default TextTypewriter
