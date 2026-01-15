import styles from './TextEffects.module.css'

/**
 * TextGlitch Component
 * Effet glitch/distortion sur le texte
 */
export function TextGlitch({
  children,
  intensity = 'medium', // 'light' | 'medium' | 'heavy'
  color1 = '#00ffff',
  color2 = '#ff00ff',
  continuous = false,
  className = '',
  as: Tag = 'span'
}) {
  return (
    <Tag
      className={`${styles.glitch} ${styles[intensity]} ${continuous ? styles.continuous : ''} ${className}`}
      data-text={children}
      style={{
        '--glitch-color-1': color1,
        '--glitch-color-2': color2,
      }}
    >
      {children}
    </Tag>
  )
}

export default TextGlitch
