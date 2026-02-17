import styles from './LoaderDots.module.css'

/**
 * LoaderDots - Animation de chargement avec points rebondissants
 * @param {'sm'|'md'|'lg'} size
 * @param {'primary'|'secondary'|'accent'|'white'} color
 */
export function LoaderDots({
  size = 'md',
  color = 'primary',
  className = '',
}) {
  return (
    <div className={`${styles.loader} ${styles[size]} ${styles[`color_${color}`]} ${className}`}>
      <div className={styles.dots}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}
