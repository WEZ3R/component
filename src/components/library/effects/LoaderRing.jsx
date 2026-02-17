import styles from './LoaderRing.module.css'

/**
 * LoaderRing - Animation de chargement avec anneau rotatif
 * @param {'sm'|'md'|'lg'} size
 * @param {'primary'|'secondary'|'accent'|'white'} color
 */
export function LoaderRing({
  size = 'md',
  color = 'primary',
  className = '',
}) {
  return (
    <div className={`${styles.loader} ${styles[size]} ${styles[`color_${color}`]} ${className}`}>
      <div className={styles.ring}>
        <div className={styles.ringCircle} />
      </div>
    </div>
  )
}
