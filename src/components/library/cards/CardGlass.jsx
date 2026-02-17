import { IconSparkle } from '../../ui/Icons'
import styles from './CardGlass.module.css'

/**
 * CardGlass - Carte style glassmorphisme
 */
export function CardGlass({
  title = 'Glass Card',
  description = 'A beautiful glassmorphism card with frosted background effect.',
  icon = <IconSparkle size={24} />,
  className = '',
}) {
  return (
    <div className={`${styles.glass} ${className}`}>
      <div className={styles.glassIcon}>{icon}</div>
      <h3 className={styles.glassTitle}>{title}</h3>
      <p className={styles.glassDesc}>{description}</p>
    </div>
  )
}
