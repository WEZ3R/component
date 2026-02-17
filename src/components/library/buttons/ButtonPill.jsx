import styles from './Buttons.module.css'

/**
 * Button Pill - Bouton arrondi style pill
 */
export function ButtonPill({
  children = 'Subscribe',
  size = 'md',
  variant = 'filled',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.pill} ${styles[`pill${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
