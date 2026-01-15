import { TextGradient } from './TextGradient'
import { TextReveal } from './TextReveal'
import { TextTypewriter } from './TextTypewriter'
import { TextGlitch } from './TextGlitch'
import { TextShimmer } from './TextShimmer'
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
