import { IconCheck } from '../../ui/Icons'
import styles from './CardPricing.module.css'

/**
 * CardPricing - Carte de tarification
 */
export function CardPricing({
  plan = 'Pro',
  price = '29',
  period = '/mo',
  features = ['10 Projects', 'Unlimited Users', 'Priority Support', 'Custom Domain', 'Analytics'],
  highlight = false,
  badge = null,
  onSelect,
  className = '',
}) {
  return (
    <div className={`${styles.pricing} ${highlight ? styles.pricingHighlight : ''} ${className}`}>
      {badge && <div className={styles.pricingBadge}>{badge}</div>}
      <h3 className={styles.pricingPlan}>{plan}</h3>
      <div className={styles.pricingPrice}>
        <span className={styles.pricingCurrency}>$</span>
        <span className={styles.pricingAmount}>{price}</span>
        <span className={styles.pricingPeriod}>{period}</span>
      </div>
      <ul className={styles.pricingFeatures}>
        {features.map((f, i) => (
          <li key={i} className={styles.pricingFeature}>
            <span className={styles.pricingCheck}><IconCheck size={12} color="white" /></span>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`${styles.pricingBtn} ${highlight ? styles.pricingBtnHighlight : ''}`}
        onClick={onSelect}
      >
        Get Started
      </button>
    </div>
  )
}
