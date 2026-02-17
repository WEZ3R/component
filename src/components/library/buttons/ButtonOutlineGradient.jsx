import styles from './Buttons.module.css'

/**
 * Button Outline Gradient - Bouton avec border gradient
 */
export function ButtonOutlineGradient({
  children = 'Join Now',
  size = 'md',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.outlineGradient} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      <span className={styles.outlineGradientInner}>
        {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      </span>
    </button>
  )
}
