import { useState, useEffect, useMemo } from 'react'
import { IconFlask } from './Icons'
import { hexToRgb, darken, lighten } from '../../utils/colorUtils'
import { DEFAULT_THEME, RADIUS_SCALES, FONT_OPTIONS } from '../../utils/themePresets'
import styles from './TestZone.module.css'

/**
 * TestZone Component
 * Zone de développement en haut de la page (pleine hauteur viewport)
 * Supporte la simulation de viewport et la personnalisation complète du thème
 */
export function TestZone({ children, showGrid = false, darkMode = false, viewportWidth = null, themeConfig }) {
  const [viewportInfo, setViewportInfo] = useState(getViewportInfo())

  function getViewportInfo() {
    const width = viewportWidth || window.innerWidth
    let device = 'desktop'
    if (width < 640) device = 'mobile'
    else if (width < 768) device = 'tablet-sm'
    else if (width < 1024) device = 'tablet'
    else if (width < 1280) device = 'laptop'
    return { width, device }
  }

  useEffect(() => {
    if (viewportWidth) {
      setViewportInfo(getViewportInfo())
      return
    }
    const handleResize = () => setViewportInfo(getViewportInfo())
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [viewportWidth])

  // Build CSS variable overrides from themeConfig
  const themeOverrides = useMemo(() => {
    if (!themeConfig) return null
    const { colors, radius, fontSans } = themeConfig

    const vars = {
      '--color-primary': colors.primary,
      '--color-primary-dark': darken(colors.primary, 12),
      '--color-primary-light': lighten(colors.primary, 12),
      '--color-primary-rgb': hexToRgb(colors.primary),
      '--color-secondary': colors.secondary,
      '--color-secondary-rgb': hexToRgb(colors.secondary),
      '--color-accent': colors.accent,
      '--color-accent-rgb': hexToRgb(colors.accent),
      '--color-success': colors.success,
      '--color-dark': colors.dark,
      '--color-dark-secondary': lighten(colors.dark, 6),
      '--color-dark-tertiary': lighten(colors.dark, 14),
    }

    // Radius overrides
    if (radius !== 'default') {
      const scale = RADIUS_SCALES[radius]
      if (scale) {
        vars['--radius-sm'] = scale.sm
        vars['--radius-md'] = scale.md
        vars['--radius-lg'] = scale.lg
        vars['--radius-xl'] = scale.xl
        vars['--radius-2xl'] = scale['2xl']
        vars['--radius-3xl'] = scale['3xl']
      }
    }

    // Font override
    if (fontSans !== 'default') {
      const font = FONT_OPTIONS.find(f => f.key === fontSans)
      if (font) {
        vars['--font-sans'] = font.value
      }
    }

    return vars
  }, [themeConfig])

  const isConstrained = viewportWidth !== null

  return (
    <section
      className={`${styles.testZone} ${darkMode ? styles.dark : ''} ${showGrid ? styles.showGrid : ''}`}
      style={themeOverrides || undefined}
    >
      {/* Info Bar */}
      <div className={styles.infoBar}>
        <span className={styles.badge}>TEST ZONE</span>
        <span className={styles.viewport}>
          {viewportInfo.width}px • {viewportInfo.device}
          {isConstrained && ' (simulated)'}
        </span>
      </div>

      {/* Content Area */}
      <div className={styles.content}>
        {isConstrained ? (
          <div className={styles.deviceFrame}>
            <div
              className={styles.deviceContent}
              style={{ width: viewportWidth }}
            >
              {children || (
                <div className={styles.placeholder}>
                  <div className={styles.placeholderIcon}><IconFlask size={32} /></div>
                  <p>Zone de test</p>
                  <span>Insérez un composant à tester ici</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          children || (
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}><IconFlask size={32} /></div>
              <p>Zone de test</p>
              <span>Insérez un composant à tester ici</span>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default TestZone
