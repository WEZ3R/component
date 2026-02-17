import { TextGradient } from './TextGradient'
import { TextReveal } from './TextReveal'
import { TextTypewriter } from './TextTypewriter'
import { TextGlitch } from './TextGlitch'
import { TextShimmer } from './TextShimmer'
import { TextWave } from './TextWave'
import { TextCounter } from './TextCounter'
import { ImageGridFlip } from './ImageGridFlip'
import { LoaderSpinner } from './LoaderSpinner'
import { LoaderDots } from './LoaderDots'
import { LoaderBars } from './LoaderBars'
import { LoaderRing } from './LoaderRing'
import { LoaderPulse } from './LoaderPulse'
import { Skeleton } from './Skeleton'
import { Marquee } from './Marquee'
import styles from './EffectPreviews.module.css'

/**
 * Preview components for text effects
 */

export function PreviewTextGradient() {
  return (
    <div className={styles.previewDark}>
      <h1 className={styles.heroText}>
        <TextGradient colors={['#6366f1', '#ec4899', '#06b6d4']} animate>
          Gradient Text
        </TextGradient>
      </h1>
      <p className={styles.subText}>
        <TextGradient colors={['#f59e0b', '#ef4444']} animate>
          With animated colors
        </TextGradient>
      </p>
    </div>
  )
}

export function PreviewTextReveal() {
  return (
    <div className={styles.previewDark}>
      <h1 className={styles.heroText}>
        <TextReveal mode="words" stagger={100} direction="up">
          Words reveal one by one
        </TextReveal>
      </h1>
    </div>
  )
}

export function PreviewTextTypewriter() {
  return (
    <div className={styles.previewDark}>
      <h1 className={styles.monoText}>
        <TextTypewriter
          texts={['Hello World', 'Bienvenue', 'Welcome', 'Willkommen']}
          typingSpeed={80}
          deletingSpeed={40}
        />
      </h1>
    </div>
  )
}

export function PreviewTextGlitch() {
  return (
    <div className={styles.previewBlack}>
      <h1 className={styles.glitchText}>
        <TextGlitch intensity="heavy" continuous color1="#00ffff" color2="#ff00ff">
          GLITCH
        </TextGlitch>
      </h1>
    </div>
  )
}

export function PreviewTextShimmer() {
  return (
    <div className={styles.previewLight}>
      <h1 className={styles.heroText}>
        <TextShimmer baseColor="#1e293b" shimmerColor="#6366f1" duration={2.5}>
          Shimmer Effect
        </TextShimmer>
      </h1>
    </div>
  )
}

export function PreviewImageGridFlip() {
  return (
    <div style={{ width: '100%', height: '480px', background: '#0f172a' }}>
      <ImageGridFlip
        src="/R35.jpg"
        alt="Nissan R35 GTR"
        columns={8}
        gap={3}
        backColor="#ccff00"
      />
    </div>
  )
}

export function PreviewTextWave() {
  return (
    <div className={styles.previewDark}>
      <h1 className={styles.heroText}>
        <TextWave speed={2}>
          Wave Effect
        </TextWave>
      </h1>
    </div>
  )
}

export function PreviewTextCounter() {
  return (
    <div className={styles.previewDark}>
      <div style={{ display: 'flex', gap: '3rem', color: 'white', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 800 }}>
            <TextCounter end={1250} duration={2} />
          </div>
          <div style={{ fontSize: '0.875rem', opacity: 0.6, marginTop: '0.25rem' }}>Utilisateurs</div>
        </div>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 800 }}>
            <TextCounter end={99} duration={1.5} suffix="%" />
          </div>
          <div style={{ fontSize: '0.875rem', opacity: 0.6, marginTop: '0.25rem' }}>Uptime</div>
        </div>
      </div>
    </div>
  )
}

export function PreviewLoaderSpinner() {
  return (
    <div className={styles.previewDark}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <LoaderSpinner size="sm" color="white" />
        <LoaderSpinner size="md" color="primary" />
        <LoaderSpinner size="lg" color="secondary" />
      </div>
    </div>
  )
}

export function PreviewLoaderDots() {
  return (
    <div className={styles.previewDark}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <LoaderDots size="sm" color="white" />
        <LoaderDots size="md" color="primary" />
        <LoaderDots size="lg" color="secondary" />
      </div>
    </div>
  )
}

export function PreviewLoaderBars() {
  return (
    <div className={styles.previewDark}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <LoaderBars size="sm" color="white" />
        <LoaderBars size="md" color="accent" />
        <LoaderBars size="lg" color="primary" />
      </div>
    </div>
  )
}

export function PreviewLoaderRing() {
  return (
    <div className={styles.previewDark}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <LoaderRing size="sm" color="white" />
        <LoaderRing size="md" color="primary" />
        <LoaderRing size="lg" color="accent" />
      </div>
    </div>
  )
}

export function PreviewLoaderPulse() {
  return (
    <div className={styles.previewDark}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <LoaderPulse size="sm" color="white" />
        <LoaderPulse size="md" color="secondary" />
        <LoaderPulse size="lg" color="primary" />
      </div>
    </div>
  )
}

export function PreviewSkeleton() {
  return (
    <div className={styles.previewLight}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Skeleton variant="card" width={260} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: 300 }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Skeleton variant="circle" width={48} height={48} />
            <Skeleton variant="text" lines={2} width={200} />
          </div>
          <Skeleton variant="text" lines={4} />
          <Skeleton variant="image" height={120} />
        </div>
      </div>
    </div>
  )
}

export function PreviewMarquee() {
  const logos = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Astro', 'Remix']
  return (
    <div className={styles.previewDark} style={{ flexDirection: 'column', gap: '2rem' }}>
      <Marquee speed={30} gap={48}>
        {logos.map((name) => (
          <span key={name} style={{ fontSize: '1.2rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {name}
          </span>
        ))}
      </Marquee>
      <Marquee speed={25} direction="right" gap={32}>
        {logos.map((name) => (
          <span key={name} style={{ padding: '8px 20px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  )
}
