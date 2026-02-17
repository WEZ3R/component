import { CardGlass } from './CardGlass'
import { CardPricing } from './CardPricing'
import { CardTestimonial } from './CardTestimonial'
import { CardProduct } from './CardProduct'
import { SpotlightCard } from './SpotlightCard'
import { IconBolt, IconShield, IconPalette } from '../../ui/Icons'
import styles from './CardPreviews.module.css'

export function PreviewCardGlass() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.glassRow}>
        <CardGlass icon={<IconBolt size={24} />} title="Lightning Fast" description="Optimized for speed with sub-second load times." />
        <CardGlass icon={<IconShield size={24} />} title="Secure" description="Enterprise-grade security built right in." />
        <CardGlass icon={<IconPalette size={24} />} title="Customizable" description="Full control over every aspect of the design." />
      </div>
    </div>
  )
}

export function PreviewCardPricing() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.pricingRow}>
        <CardPricing
          plan="Starter"
          price="9"
          features={['3 Projects', '1 User', 'Email Support']}
        />
        <CardPricing
          plan="Pro"
          price="29"
          features={['10 Projects', 'Unlimited Users', 'Priority Support', 'Custom Domain', 'Analytics']}
          highlight
          badge="Popular"
        />
        <CardPricing
          plan="Enterprise"
          price="99"
          features={['Unlimited', 'Dedicated Support', 'SLA 99.9%', 'Custom Integrations', 'Audit Logs']}
        />
      </div>
    </div>
  )
}

export function PreviewCardTestimonial() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.testimonialRow}>
        <CardTestimonial
          quote="Incredible product! Saved us hours every week."
          author="Marc D."
          role="CTO at StartupX"
          rating={5}
        />
        <CardTestimonial
          quote="The best tool we've integrated this year. Our team loves it."
          author="Sophie L."
          role="Design Lead at Agency"
          rating={5}
        />
      </div>
    </div>
  )
}

export function PreviewCardProduct() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.productRow}>
        <CardProduct
          image="/R35.jpg"
          title="GT-R Nismo"
          subtitle="Nissan"
          price="$212,000"
        />
        <CardProduct
          image="/R35.jpg"
          title="GT-R Premium"
          subtitle="Nissan"
          price="$115,000"
        />
      </div>
    </div>
  )
}

export function PreviewSpotlightCard() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.glassRow}>
        <SpotlightCard icon={<IconBolt size={24} />} title="Lightning Fast" description="Optimized for speed with sub-second load times." spotlightColor="rgba(99, 102, 241, 0.12)" />
        <SpotlightCard icon={<IconShield size={24} />} title="Secure by Default" description="Enterprise-grade security built right in." spotlightColor="rgba(236, 72, 153, 0.12)" />
        <SpotlightCard icon={<IconPalette size={24} />} title="Customizable" description="Full control over every aspect of the design." spotlightColor="rgba(6, 182, 212, 0.12)" />
      </div>
    </div>
  )
}
