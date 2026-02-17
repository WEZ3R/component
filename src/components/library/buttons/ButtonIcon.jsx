import styles from './Buttons.module.css'

/**
 * Button Icon Only - Bouton avec icone seulement
 */
export function ButtonIcon({
  icon = '→',
  size = 'md',
  variant = 'filled',
  onClick,
  className = '',
  ariaLabel = 'Button',
}) {
  return (
    <button
      className={`${styles.btnIcon} ${styles[`btnIcon${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${styles[`btnIcon${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}
