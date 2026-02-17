import { ToastDemo } from './Toast'
import { ProgressBar } from './ProgressBar'
import styles from './FeedbackPreviews.module.css'

export function PreviewToast() {
  return (
    <div className={styles.previewDark} style={{ minHeight: 480 }}>
      <ToastDemo />
    </div>
  )
}

export function PreviewProgressBar() {
  return (
    <div className={styles.previewDark}>
      <div className={styles.progressContainer}>
        <ProgressBar value={87} label="Storage" showValue color="primary" size="md" />
        <ProgressBar value={65} label="Bandwidth" showValue color="secondary" size="md" />
        <ProgressBar value={42} label="CPU Usage" showValue color="accent" size="md" />
        <ProgressBar value={95} label="Uptime" showValue color="success" size="md" />
        <ProgressBar value={70} label="Upload" showValue color="primary" size="md" variant="striped" />
        <ProgressBar value={55} variant="gradient" size="lg" showValue label="Overall" />
      </div>
    </div>
  )
}
