import styles from './Skeleton.module.css'

/**
 * Skeleton - Placeholder de chargement animé
 * @param {'text'|'circle'|'card'|'image'} variant
 */
export function Skeleton({
  variant = 'text',
  width,
  height,
  lines = 3,
  className = '',
}) {
  if (variant === 'circle') {
    return (
      <div
        className={`${styles.skeleton} ${styles.circle} ${className}`}
        style={{ width: width || 48, height: height || 48 }}
      />
    )
  }

  if (variant === 'card') {
    return (
      <div className={`${styles.card} ${className}`} style={{ width: width || 300 }}>
        <div className={`${styles.skeleton} ${styles.cardImage}`} />
        <div className={styles.cardBody}>
          <div className={`${styles.skeleton} ${styles.cardTitle}`} />
          <div className={`${styles.skeleton} ${styles.cardLine}`} />
          <div className={`${styles.skeleton} ${styles.cardLineShort}`} />
        </div>
      </div>
    )
  }

  if (variant === 'image') {
    return (
      <div
        className={`${styles.skeleton} ${styles.image} ${className}`}
        style={{ width: width || '100%', height: height || 200 }}
      />
    )
  }

  // Default: text lines
  return (
    <div className={`${styles.textBlock} ${className}`} style={{ width: width || '100%' }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${styles.skeleton} ${styles.textLine}`}
          style={{
            width: i === lines - 1 ? '60%' : '100%',
            height: height || 16,
          }}
        />
      ))}
    </div>
  )
}
