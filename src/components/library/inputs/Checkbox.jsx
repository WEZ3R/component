import { useState, useId } from 'react'
import styles from './Checkbox.module.css'

/**
 * Checkbox - Case a cocher animee
 */
export function Checkbox({
  checked = false,
  onChange,
  label = '',
  variant = 'default',
  className = '',
}) {
  const [internal, setInternal] = useState(checked)
  const isChecked = onChange ? checked : internal
  const id = useId()

  const handleChange = () => {
    if (onChange) {
      onChange(!isChecked)
    } else {
      setInternal(!internal)
    }
  }

  return (
    <label className={`${styles.checkbox} ${className}`} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.checkboxInput}
      />
      <div className={`${styles.checkboxBox} ${styles[`check_${variant}`]} ${isChecked ? styles.checkboxChecked : ''}`}>
        <svg className={styles.checkboxSvg} viewBox="0 0 12 10">
          <polyline
            points="1.5 6 4.5 9 10.5 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.checkboxPath}
          />
        </svg>
      </div>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  )
}
