import styles from './Buttons.module.css'

/**
 * Button Primary - Bouton principal avec gradient
 */
export function ButtonPrimary({
  children = 'Get Started',
  size = 'md',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.primary} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
