import styles from './Buttons.module.css'

/**
 * Button Ghost - Bouton transparent avec border subtil
 */
export function ButtonGhost({
  children = 'Explore',
  size = 'md',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.ghost} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
