import styles from './LoaderBars.module.css'

/**
 * LoaderBars - Animation de chargement avec barres oscillantes
 * @param {'sm'|'md'|'lg'} size
 * @param {'primary'|'secondary'|'accent'|'white'} color
 */
export function LoaderBars({
  size = 'md',
  color = 'primary',
  className = '',
}) {
  return (
    <div className={`${styles.loader} ${styles[size]} ${styles[`color_${color}`]} ${className}`}>
      <div className={styles.bars}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
    </div>
  )
}
