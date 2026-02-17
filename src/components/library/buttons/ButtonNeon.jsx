import styles from './Buttons.module.css'

/**
 * Button Neon - Bouton style enseigne neon retro
 */
export function ButtonNeon({
  children = 'NEON',
  size = 'md',
  color = 'pink',
  onClick,
  className = '',
}) {
  return (
    <button
      className={`${styles.btn} ${styles.neon} ${styles[`neon${color.charAt(0).toUpperCase() + color.slice(1)}`]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
