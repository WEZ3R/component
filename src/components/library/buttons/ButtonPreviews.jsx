import { ButtonPrimary } from './ButtonPrimary'
import { ButtonSecondary } from './ButtonSecondary'
import { ButtonGhost } from './ButtonGhost'
import { ButtonGlow } from './ButtonGlow'
import { ButtonOutlineGradient } from './ButtonOutlineGradient'
import { ButtonPill } from './ButtonPill'
import { Button3D } from './Button3D'
import { ButtonIcon } from './ButtonIcon'
import { ButtonMagnetic } from './ButtonMagnetic'
import { ButtonNeon } from './ButtonNeon'
import { ButtonRipple } from './ButtonRipple'
import { IconArrowRight, IconPlus, IconHeart, IconStar } from '../../ui/Icons'
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
      <ButtonPrimary size="md" icon={<IconArrowRight size={16} />}>
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
        <ButtonIcon icon={<IconArrowRight size={14} />} variant="filled" size="sm" />
        <ButtonIcon icon={<IconArrowRight size={16} />} variant="filled" size="md" />
        <ButtonIcon icon={<IconArrowRight size={18} />} variant="filled" size="lg" />
      </div>
      <div className={styles.buttonGroup}>
        <ButtonIcon icon={<IconPlus size={16} />} variant="outline" size="md" />
        <ButtonIcon icon={<IconHeart size={16} />} variant="ghost" size="md" />
        <ButtonIcon icon={<IconStar size={16} />} variant="gradient" size="md" />
      </div>
    </div>
  )
}

export function PreviewButtonMagnetic() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <ButtonMagnetic size="sm">Small</ButtonMagnetic>
        <ButtonMagnetic size="md">Hover Me</ButtonMagnetic>
        <ButtonMagnetic size="lg">Large</ButtonMagnetic>
      </div>
    </div>
  )
}

export function PreviewButtonNeon() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.buttonGroup}>
        <ButtonNeon color="pink">Pink</ButtonNeon>
        <ButtonNeon color="cyan">Cyan</ButtonNeon>
        <ButtonNeon color="green">Green</ButtonNeon>
        <ButtonNeon color="yellow">Yellow</ButtonNeon>
      </div>
    </div>
  )
}

export function PreviewButtonRipple() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.buttonGroup}>
        <ButtonRipple color="indigo">Indigo</ButtonRipple>
        <ButtonRipple color="rose">Rose</ButtonRipple>
        <ButtonRipple color="teal">Teal</ButtonRipple>
      </div>
    </div>
  )
}
