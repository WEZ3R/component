import { useState } from 'react'
import styles from './RadioGroup.module.css'

/**
 * RadioGroup - Boutons radio animes
 */
export function RadioGroup({
  options = [],
  value,
  onChange,
  name = 'radio',
  className = '',
}) {
  const [internal, setInternal] = useState(options[0]?.value || '')
  const selected = onChange ? value : internal

  const handleChange = (val) => {
    if (onChange) {
      onChange(val)
    } else {
      setInternal(val)
    }
  }

  return (
    <div className={`${styles.radioGroup} ${className}`}>
      {options.map((opt) => (
        <label key={opt.value} className={styles.radioItem}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => handleChange(opt.value)}
            className={styles.radioInput}
          />
          <div className={`${styles.radioCircle} ${selected === opt.value ? styles.radioSelected : ''}`}>
            <div className={styles.radioDot} />
          </div>
          <span className={styles.radioLabel}>{opt.label}</span>
        </label>
      ))}
    </div>
  )
}
