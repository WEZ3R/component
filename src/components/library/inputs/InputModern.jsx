import { useState, useId } from 'react'
import styles from './InputModern.module.css'

/**
 * InputModern - Input avec label flottant
 */
export function InputModern({
  label = 'Email',
  type = 'text',
  value,
  onChange,
  variant = 'default',
  icon = null,
  className = '',
}) {
  const [internal, setInternal] = useState('')
  const [focused, setFocused] = useState(false)
  const val = onChange ? value : internal
  const hasValue = val && val.length > 0
  const id = useId()

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    } else {
      setInternal(e.target.value)
    }
  }

  return (
    <div className={`${styles.inputWrap} ${styles[`input_${variant}`]} ${focused ? styles.inputFocused : ''} ${hasValue ? styles.inputFilled : ''} ${className}`}>
      {icon && <span className={styles.inputIcon}>{icon}</span>}
      <input
        id={id}
        type={type}
        value={val}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={styles.input}
        placeholder=" "
      />
      <label htmlFor={id} className={styles.inputLabel}>{label}</label>
      <div className={styles.inputLine} />
    </div>
  )
}
