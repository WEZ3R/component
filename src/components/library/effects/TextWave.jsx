import styles from './TextEffects.module.css'

/**
 * TextWave Component
 * Animation de vague sur chaque lettre du texte
 */
export function TextWave({
  children,
  speed = 2,
  className = '',
  as: Tag = 'span',
}) {
  const text = typeof children === 'string' ? children : ''

  return (
    <Tag className={`${styles.waveContainer} ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={styles.waveChar}
          style={{ animationDelay: `${i * (speed / text.length)}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  )
}

export default TextWave
