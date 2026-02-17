import styles from './Buttons.module.css'

/**
 * Button 3D - Bouton avec effet 3D/push
 */
export function Button3D({
  children = 'Press Me',
  size = 'md',
  color = 'primary',
  icon,
  iconPosition = 'right',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.btn3d} ${styles[`btn3d${color.charAt(0).toUpperCase() + color.slice(1)}`]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
