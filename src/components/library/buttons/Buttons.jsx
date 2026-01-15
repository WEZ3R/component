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

/**
 * Button Glow - Bouton avec effet glow néon
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

/**
 * Button Icon Only - Bouton avec icône seulement
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

export default {
  ButtonPrimary,
  ButtonSecondary,
  ButtonGhost,
  ButtonGlow,
  ButtonOutlineGradient,
  ButtonPill,
  Button3D,
  ButtonIcon,
}
