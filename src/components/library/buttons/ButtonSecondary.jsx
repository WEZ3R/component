import styles from './Buttons.module.css'

/**
 * Button Secondary - Bouton secondaire outline
 */
export function ButtonSecondary({
  children = 'Learn More',
  size = 'md',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.secondary} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
