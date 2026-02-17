import { useState, useEffect, useCallback } from 'react'
import styles from './Toast.module.css'

const ICONS = {
  success: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  error: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  info: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
}

function ToastItem({ id, type = 'info', message, onDismiss, duration = 4000 }) {
  const [exiting, setExiting] = useState(false)

  const dismiss = useCallback(() => {
    setExiting(true)
    setTimeout(() => onDismiss(id), 300)
  }, [id, onDismiss])

  useEffect(() => {
    if (duration <= 0) return
    const timer = setTimeout(dismiss, duration)
    return () => clearTimeout(timer)
  }, [duration, dismiss])

  return (
    <div className={`${styles.toast} ${styles[type]} ${exiting ? styles.exit : ''}`}>
      <div className={styles.icon}>{ICONS[type]}</div>
      <span className={styles.message}>{message}</span>
      <button className={styles.close} onClick={dismiss} aria-label="Dismiss">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {duration > 0 && (
        <div className={styles.progress} style={{ animationDuration: `${duration}ms` }} />
      )}
    </div>
  )
}

export function ToastContainer({ toasts = [], onDismiss, position = 'top-right' }) {
  return (
    <div className={`${styles.container} ${styles[position.replace('-', '')]}`}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} onDismiss={onDismiss} />
      ))}
    </div>
  )
}

/* Demo component for the gallery */
export function ToastDemo() {
  const [toasts, setToasts] = useState([])
  const counterRef = { current: 0 }

  const addToast = (type) => {
    const messages = {
      success: 'Operation completed successfully!',
      error: 'Something went wrong. Please try again.',
      warning: 'Please review your input before proceeding.',
      info: 'New update is available for download.',
    }
    counterRef.current++
    setToasts((prev) => [...prev, { id: counterRef.current, type, message: messages[type] }])
  }

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <div className={styles.demo}>
      <div className={styles.demoButtons}>
        <button className={`${styles.demoBtn} ${styles.successBtn}`} onClick={() => addToast('success')}>
          Success
        </button>
        <button className={`${styles.demoBtn} ${styles.errorBtn}`} onClick={() => addToast('error')}>
          Error
        </button>
        <button className={`${styles.demoBtn} ${styles.warningBtn}`} onClick={() => addToast('warning')}>
          Warning
        </button>
        <button className={`${styles.demoBtn} ${styles.infoBtn}`} onClick={() => addToast('info')}>
          Info
        </button>
      </div>
      <ToastContainer toasts={toasts} onDismiss={dismissToast} position="top-right" />
    </div>
  )
}

export default ToastContainer
