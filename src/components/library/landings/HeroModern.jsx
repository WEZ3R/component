import { TextGradient, TextReveal } from '../effects'
import styles from './HeroModern.module.css'

/**
 * HeroModern Component
 * Landing hero section avec dégradés vibrants et éléments flottants
 */
export function HeroModern({
  badge = { text: 'Nouveau: Version 2.0 disponible', active: true },
  title = { line1: 'Créez des expériences', highlight: 'extraordinaires' },
  description = 'Transformez vos idées en produits exceptionnels grâce à notre plateforme tout-en-un. Simple, puissant, et conçu pour les créateurs modernes.',
  primaryCta = { text: 'Commencer gratuitement', onClick: () => {} },
  secondaryCta = { text: 'Voir la démo', onClick: () => {} },
  stats = [
    { value: '50K+', label: 'Utilisateurs actifs' },
    { value: '99.9%', label: 'Uptime garanti' },
    { value: '4.9/5', label: 'Note moyenne' },
  ],
  className = '',
}) {
  return (
    <section className={`${styles.hero} ${className}`}>
      {/* Background elements */}
      <div className={styles.bgRotate} />
      <div className={styles.floatingShapes}>
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Badge */}
        {badge.active && (
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {badge.text}
          </div>
        )}

        {/* Title */}
        <h1 className={styles.title}>
          <TextReveal mode="words" stagger={80}>
            {title.line1}
          </TextReveal>
          <br />
          <TextGradient
            colors={['#6366f1', '#ec4899', '#06b6d4']}
            animate
            as="span"
          >
            {title.highlight}
          </TextGradient>
        </h1>

        {/* Description */}
        <p className={styles.description}>{description}</p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <button className={styles.btnPrimary} onClick={primaryCta.onClick}>
            {primaryCta.text}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className={styles.btnSecondary} onClick={secondaryCta.onClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            {secondaryCta.text}
          </button>
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroModern
