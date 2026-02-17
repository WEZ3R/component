import { TextWave, TextCounter } from '../effects'
import { ButtonRipple } from '../buttons'
import styles from './HeroSplit.module.css'

/**
 * HeroSplit Component
 * Landing page en écran partagé : contenu à gauche, visuel à droite
 */
export function HeroSplit({
  tag = 'SaaS Platform',
  title = 'Build faster,',
  titleHighlight = 'ship smarter',
  description = "Plateforme tout-en-un pour créer, déployer et scaler vos applications. De l'idée au produit en un temps record.",
  ctaText = 'Commencer',
  ctaOnClick = () => {},
  stats = [
    { value: 12000, suffix: '+', label: 'Développeurs' },
    { value: 99, suffix: '%', label: 'Satisfaction' },
    { value: 50, suffix: 'ms', label: 'Latence moy.' },
  ],
  className = '',
}) {
  return (
    <section className={`${styles.hero} ${className}`}>
      <div className={styles.left}>
        <span className={styles.tag}>{tag}</span>

        <h1 className={styles.title}>
          {title}
          <br />
          <TextWave speed={2.5} as="span">
            {titleHighlight}
          </TextWave>
        </h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.ctas}>
          <ButtonRipple size="lg" color="indigo" onClick={ctaOnClick}>
            {ctaText}
          </ButtonRipple>
        </div>

        {stats.length > 0 && (
          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statValue}>
                  <TextCounter
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix || ''}
                    prefix={stat.prefix || ''}
                  />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.right}>
        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.codeLine}><span className={styles.keyword}>const</span> app = <span className={styles.func}>createApp</span>()</div>
              <div className={styles.codeLine}></div>
              <div className={styles.codeLine}>app.<span className={styles.func}>deploy</span>({'{'}</div>
              <div className={styles.codeLine}>&nbsp;&nbsp;region: <span className={styles.string}>'eu-west'</span>,</div>
              <div className={styles.codeLine}>&nbsp;&nbsp;scale: <span className={styles.string}>'auto'</span>,</div>
              <div className={styles.codeLine}>{'}'}) </div>
            </div>
          </div>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>
      </div>
    </section>
  )
}

export default HeroSplit
