import { useState, useId } from 'react'
import styles from './Toggle.module.css'

/**
 * Toggle - Interrupteur anime
 */
export function Toggle({
  checked = false,
  onChange,
  size = 'md',
  color = 'primary',
  label = '',
  className = '',
}) {
  const [internal, setInternal] = useState(checked)
  const isOn = onChange ? checked : internal
  const id = useId()

  const handleChange = () => {
    if (onChange) {
      onChange(!isOn)
    } else {
      setInternal(!internal)
    }
  }

  return (
    <label className={`${styles.toggle} ${className}`} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={handleChange}
        className={styles.toggleInput}
      />
      <div className={`${styles.toggleTrack} ${styles[size]} ${styles[color]} ${isOn ? styles.toggleOn : ''}`}>
        <div className={styles.toggleThumb} />
      </div>
      {label && <span className={styles.toggleLabel}>{label}</span>}
    </label>
  )
}
