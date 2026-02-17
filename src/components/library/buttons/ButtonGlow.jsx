import styles from './Buttons.module.css'

/**
 * Button Glow - Bouton avec effet glow neon
 */
export function ButtonGlow({
  children = 'Discover',
  size = 'md',
  color = 'primary',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.glow} ${styles[`glow${color.charAt(0).toUpperCase() + color.slice(1)}`]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
