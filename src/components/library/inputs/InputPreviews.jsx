import { Toggle } from './Toggle'
import { InputModern } from './InputModern'
import { Checkbox } from './Checkbox'
import { RadioGroup } from './RadioGroup'
import { IconMail, IconLock, IconSearch } from '../../ui/Icons'
import styles from './InputPreviews.module.css'

export function PreviewToggle() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.col}>
        <div className={styles.row}>
          <Toggle size="sm" color="primary" label="Small" />
          <Toggle size="md" color="primary" label="Medium" />
          <Toggle size="lg" color="primary" label="Large" />
        </div>
        <div className={styles.row}>
          <Toggle size="md" color="primary" label="Primary" />
          <Toggle size="md" color="secondary" label="Secondary" />
          <Toggle size="md" color="accent" label="Accent" />
          <Toggle size="md" color="success" label="Success" />
        </div>
      </div>
    </div>
  )
}

export function PreviewInputModern() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.inputGrid}>
        <InputModern label="Email" type="email" icon={<IconMail size={18} />} />
        <InputModern label="Password" type="password" icon={<IconLock size={18} />} />
        <InputModern label="Username" variant="underline" />
        <InputModern label="Search" variant="filled" icon={<IconSearch size={18} />} />
      </div>
    </div>
  )
}

export function PreviewCheckbox() {
  return (
    <div className={styles.previewLight}>
      <div className={styles.col}>
        <Checkbox label="Accept terms and conditions" />
        <Checkbox label="Subscribe to newsletter" />
        <Checkbox label="Remember me" variant="rounded" />
      </div>
    </div>
  )
}

export function PreviewRadioGroup() {
  return (
    <div className={styles.previewLight}>
      <RadioGroup
        options={[
          { value: 'startup', label: 'Startup Plan - $9/mo' },
          { value: 'pro', label: 'Pro Plan - $29/mo' },
          { value: 'enterprise', label: 'Enterprise Plan - $99/mo' },
        ]}
        name="plan"
      />
    </div>
  )
}
