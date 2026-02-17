import styles from './LoaderSpinner.module.css'

/**
 * LoaderSpinner - Animation de chargement circulaire
 * @param {'sm'|'md'|'lg'} size
 * @param {'primary'|'secondary'|'accent'|'white'} color
 */
export function LoaderSpinner({
  size = 'md',
  color = 'primary',
  className = '',
}) {
  return (
    <div className={`${styles.loader} ${styles[size]} ${styles[`color_${color}`]} ${className}`}>
      <div className={styles.spinner} />
    </div>
  )
}
