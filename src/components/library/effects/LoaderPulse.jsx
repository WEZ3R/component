import styles from './LoaderPulse.module.css'

/**
 * LoaderPulse - Animation de chargement avec cercles pulsants
 * @param {'sm'|'md'|'lg'} size
 * @param {'primary'|'secondary'|'accent'|'white'} color
 */
export function LoaderPulse({
  size = 'md',
  color = 'primary',
  className = '',
}) {
  return (
    <div className={`${styles.loader} ${styles[size]} ${styles[`color_${color}`]} ${className}`}>
      <div className={styles.pulse}>
        <div className={styles.pulseCircle} />
        <div className={styles.pulseCircle} />
      </div>
    </div>
  )
}
