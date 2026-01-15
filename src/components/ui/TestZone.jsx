import { useState } from 'react'
import styles from './TestZone.module.css'

/**
 * TestZone Component
 * Zone de développement en haut de la page (pleine hauteur viewport)
 * Permet de tester les composants en cours de développement
 */
export function TestZone({ children, showGrid = false, darkMode = false }) {
  const [viewportInfo, setViewportInfo] = useState(getViewportInfo())

  function getViewportInfo() {
    const width = window.innerWidth
    let device = 'desktop'
    if (width < 640) device = 'mobile'
    else if (width < 768) device = 'tablet-sm'
    else if (width < 1024) device = 'tablet'
    else if (width < 1280) device = 'laptop'
    return { width, device }
  }

  // Update viewport info on resize
  useState(() => {
    const handleResize = () => setViewportInfo(getViewportInfo())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      className={`${styles.testZone} ${darkMode ? styles.dark : ''} ${showGrid ? styles.showGrid : ''}`}
    >
      {/* Info Bar */}
      <div className={styles.infoBar}>
        <span className={styles.badge}>TEST ZONE</span>
        <span className={styles.viewport}>
          {viewportInfo.width}px • {viewportInfo.device}
        </span>
      </div>

      {/* Content Area */}
      <div className={styles.content}>
        {children || (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>🧪</div>
            <p>Zone de test</p>
            <span>Insérez un composant à tester ici</span>
          </div>
        )}
      </div>

      {/* Breakpoint indicators */}
      <div className={styles.breakpoints}>
        <span className={`${styles.bp} ${styles.bpMobile}`}>Mobile</span>
        <span className={`${styles.bp} ${styles.bpTablet}`}>Tablet</span>
        <span className={`${styles.bp} ${styles.bpLaptop}`}>Laptop</span>
        <span className={`${styles.bp} ${styles.bpDesktop}`}>Desktop</span>
      </div>
    </section>
  )
}

export default TestZone
