import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonGhost,
  ButtonGlow,
  ButtonOutlineGradient,
  ButtonPill,
  Button3D,
  ButtonIcon,
} from './Buttons'
import styles from './ButtonPreviews.module.css'

/**
 * Preview components for the gallery
 * Each shows a nice showcase of the button
 */

export function PreviewButtonPrimary() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <ButtonPrimary size="sm">Small</ButtonPrimary>
        <ButtonPrimary size="md">Medium</ButtonPrimary>
        <ButtonPrimary size="lg">Large</ButtonPrimary>
      </div>
      <ButtonPrimary size="md" icon="→">
        With Icon
      </ButtonPrimary>
    </div>
  )
}

export function PreviewButtonSecondary() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <ButtonSecondary size="sm">Small</ButtonSecondary>
        <ButtonSecondary size="md">Medium</ButtonSecondary>
        <ButtonSecondary size="lg">Large</ButtonSecondary>
      </div>
    </div>
  )
}

export function PreviewButtonGhost() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.buttonGroup}>
        <ButtonGhost size="sm">Small</ButtonGhost>
        <ButtonGhost size="md">Medium</ButtonGhost>
        <ButtonGhost size="lg">Large</ButtonGhost>
      </div>
    </div>
  )
}

export function PreviewButtonGlow() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.buttonGroup}>
        <ButtonGlow color="primary">Primary</ButtonGlow>
        <ButtonGlow color="secondary">Secondary</ButtonGlow>
        <ButtonGlow color="cyan">Cyan</ButtonGlow>
        <ButtonGlow color="green">Green</ButtonGlow>
      </div>
    </div>
  )
}

export function PreviewButtonOutlineGradient() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.buttonGroup}>
        <ButtonOutlineGradient size="sm">Small</ButtonOutlineGradient>
        <ButtonOutlineGradient size="md">Medium</ButtonOutlineGradient>
        <ButtonOutlineGradient size="lg">Large</ButtonOutlineGradient>
      </div>
    </div>
  )
}

export function PreviewButtonPill() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <ButtonPill variant="filled">Filled</ButtonPill>
        <ButtonPill variant="outline">Outline</ButtonPill>
        <ButtonPill variant="soft">Soft</ButtonPill>
      </div>
    </div>
  )
}

export function PreviewButton3D() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <Button3D color="primary">Primary</Button3D>
        <Button3D color="secondary">Secondary</Button3D>
        <Button3D color="success">Success</Button3D>
        <Button3D color="dark">Dark</Button3D>
      </div>
    </div>
  )
}

export function PreviewButtonIcon() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <ButtonIcon icon="→" variant="filled" size="sm" />
        <ButtonIcon icon="→" variant="filled" size="md" />
        <ButtonIcon icon="→" variant="filled" size="lg" />
      </div>
      <div className={styles.buttonGroup}>
        <ButtonIcon icon="+" variant="outline" size="md" />
        <ButtonIcon icon="♥" variant="ghost" size="md" />
        <ButtonIcon icon="★" variant="gradient" size="md" />
      </div>
    </div>
  )
}
