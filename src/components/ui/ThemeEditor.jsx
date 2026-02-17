import { useState, useCallback } from 'react'
import { DEFAULT_THEME, PRESETS, RADIUS_OPTIONS, RADIUS_SCALES, FONT_OPTIONS } from '../../utils/themePresets'
import { hexToRgb, darken, lighten } from '../../utils/colorUtils'
import styles from './ThemeEditor.module.css'

/**
 * ThemeEditor - Panneau de personnalisation du thème en temps réel
 * @param {{ colors, radius, fontSans }} themeConfig
 * @param {function} onThemeChange
 */
export function ThemeEditor({ themeConfig, onThemeChange }) {
  const [openSections, setOpenSections] = useState({ colors: true, appearance: true })
  const [copied, setCopied] = useState(false)

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleColorChange = useCallback((key, value) => {
    onThemeChange({
      ...themeConfig,
      colors: { ...themeConfig.colors, [key]: value },
    })
  }, [themeConfig, onThemeChange])

  const handleRadiusChange = useCallback((value) => {
    onThemeChange({ ...themeConfig, radius: value })
  }, [themeConfig, onThemeChange])

  const handleFontChange = useCallback((value) => {
    onThemeChange({ ...themeConfig, fontSans: value })
  }, [themeConfig, onThemeChange])

  const handlePreset = useCallback((preset) => {
    onThemeChange({
      colors: { ...preset.config.colors },
      radius: preset.config.radius,
      fontSans: preset.config.fontSans,
    })
  }, [onThemeChange])

  const handleReset = useCallback(() => {
    onThemeChange({
      colors: { ...DEFAULT_THEME.colors },
      radius: DEFAULT_THEME.radius,
      fontSans: DEFAULT_THEME.fontSans,
    })
  }, [onThemeChange])

  // Detect which preset is currently active
  const activePreset = PRESETS.find(p =>
    p.config.colors.primary === themeConfig.colors.primary &&
    p.config.colors.secondary === themeConfig.colors.secondary &&
    p.config.radius === themeConfig.radius
  )

  // Build CSS string for copy
  const buildCssVars = () => {
    const { colors, radius, fontSans } = themeConfig
    const lines = [':root {']

    lines.push(`  --color-primary: ${colors.primary};`)
    lines.push(`  --color-primary-dark: ${darken(colors.primary, 12)};`)
    lines.push(`  --color-primary-light: ${lighten(colors.primary, 12)};`)
    lines.push(`  --color-primary-rgb: ${hexToRgb(colors.primary)};`)
    lines.push(`  --color-secondary: ${colors.secondary};`)
    lines.push(`  --color-secondary-rgb: ${hexToRgb(colors.secondary)};`)
    lines.push(`  --color-accent: ${colors.accent};`)
    lines.push(`  --color-accent-rgb: ${hexToRgb(colors.accent)};`)
    lines.push(`  --color-success: ${colors.success};`)
    lines.push(`  --color-dark: ${colors.dark};`)
    lines.push(`  --color-dark-secondary: ${lighten(colors.dark, 6)};`)
    lines.push(`  --color-dark-tertiary: ${lighten(colors.dark, 14)};`)

    if (radius !== 'default') {
      const scale = RADIUS_SCALES[radius]
      if (scale) {
        lines.push(`  --radius-sm: ${scale.sm};`)
        lines.push(`  --radius-md: ${scale.md};`)
        lines.push(`  --radius-lg: ${scale.lg};`)
        lines.push(`  --radius-xl: ${scale.xl};`)
        lines.push(`  --radius-2xl: ${scale['2xl']};`)
        lines.push(`  --radius-3xl: ${scale['3xl']};`)
      }
    }

    if (fontSans !== 'default') {
      const font = FONT_OPTIONS.find(f => f.key === fontSans)
      if (font) {
        lines.push(`  --font-sans: ${font.value};`)
      }
    }

    lines.push('}')
    return lines.join('\n')
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildCssVars())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const COLOR_FIELDS = [
    { key: 'primary', label: 'Primary' },
    { key: 'secondary', label: 'Secondary' },
    { key: 'accent', label: 'Accent' },
    { key: 'success', label: 'Success' },
    { key: 'dark', label: 'Dark' },
  ]

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>Theme</span>
        <button className={styles.resetBtn} onClick={handleReset}>Reset</button>
      </div>

      {/* Presets */}
      <div className={styles.presets}>
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            className={`${styles.presetBtn} ${activePreset?.name === preset.name ? styles.active : ''}`}
            onClick={() => handlePreset(preset)}
          >
            <div className={styles.presetSwatch}>
              <span style={{ background: preset.config.colors.primary }} />
              <span style={{ background: preset.config.colors.secondary }} />
              <span style={{ background: preset.config.colors.accent }} />
              <span style={{ background: preset.config.colors.dark }} />
            </div>
            <span className={styles.presetName}>{preset.name}</span>
          </button>
        ))}
      </div>

      {/* Colors Section */}
      <div className={styles.section}>
        <button className={styles.sectionHeader} onClick={() => toggleSection('colors')}>
          <span className={styles.sectionLabel}>Colors</span>
          <span className={`${styles.chevron} ${openSections.colors ? styles.open : ''}`}>▼</span>
        </button>
        {openSections.colors && (
          <div className={styles.sectionContent}>
            {COLOR_FIELDS.map(({ key, label }) => (
              <div key={key} className={styles.colorRow}>
                <input
                  type="color"
                  className={styles.colorInput}
                  value={themeConfig.colors[key]}
                  onChange={(e) => handleColorChange(key, e.target.value)}
                />
                <div className={styles.colorInfo}>
                  <div className={styles.colorLabel}>{label}</div>
                  <div className={styles.colorValue}>{themeConfig.colors[key]}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Appearance Section */}
      <div className={styles.section}>
        <button className={styles.sectionHeader} onClick={() => toggleSection('appearance')}>
          <span className={styles.sectionLabel}>Appearance</span>
          <span className={`${styles.chevron} ${openSections.appearance ? styles.open : ''}`}>▼</span>
        </button>
        {openSections.appearance && (
          <div className={styles.sectionContent}>
            {/* Radius */}
            <div>
              <div className={styles.colorLabel} style={{ marginBottom: 6 }}>Border Radius</div>
              <div className={styles.radiusGroup}>
                {RADIUS_OPTIONS.map(opt => (
                  <button
                    key={opt.key}
                    className={`${styles.radiusBtn} ${themeConfig.radius === opt.key ? styles.active : ''}`}
                    onClick={() => handleRadiusChange(opt.key)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font */}
            <div>
              <div className={styles.colorLabel} style={{ marginBottom: 6 }}>Font Family</div>
              <select
                className={styles.fontSelect}
                value={themeConfig.fontSans}
                onChange={(e) => handleFontChange(e.target.value)}
              >
                {FONT_OPTIONS.map(opt => (
                  <option key={opt.key} value={opt.key}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button
          className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
        >
          {copied ? '✓ Copied!' : 'Copy CSS Variables'}
        </button>
      </div>
    </div>
  )
}
