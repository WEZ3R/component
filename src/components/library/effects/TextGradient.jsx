import styles from './TextEffects.module.css'

/**
 * TextGradient Component
 * Applique un dégradé animé ou statique au texte
 */
export function TextGradient({
  children,
  colors = ['#6366f1', '#ec4899', '#06b6d4'],
  animate = false,
  direction = '135deg',
  className = '',
  as: Tag = 'span'
}) {
  const gradientStyle = {
    background: `linear-gradient(${direction}, ${colors.join(', ')})`,
    backgroundSize: animate ? '200% 200%' : '100% 100%',
  }

  return (
    <Tag
      className={`${styles.textGradient} ${animate ? styles.animated : ''} ${className}`}
      style={gradientStyle}
    >
      {children}
    </Tag>
  )
}

export default TextGradient
