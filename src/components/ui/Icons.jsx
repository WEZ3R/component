/**
 * Icon Library - Icônes SVG dessinées
 * Usage: <Icon name="arrow-right" size={20} />
 * Ou directement: <IconArrowRight size={20} />
 */

const defaultProps = {
  size: 20,
  strokeWidth: 2,
  color: 'currentColor',
}

function svg(props, children) {
  const { size, color, strokeWidth, className, ...rest } = { ...defaultProps, ...props }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      {...rest}
    >
      {children}
    </svg>
  )
}

// Navigation
export function IconArrowRight(props) {
  return svg(props, <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>)
}

export function IconArrowLeft(props) {
  return svg(props, <>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </>)
}

export function IconChevronRight(props) {
  return svg(props, <polyline points="9 18 15 12 9 6" />)
}

export function IconChevronDown(props) {
  return svg(props, <polyline points="6 9 12 15 18 9" />)
}

// Actions
export function IconPlus(props) {
  return svg(props, <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </>)
}

export function IconCheck(props) {
  return svg(props, <polyline points="20 6 9 17 4 12" />)
}

export function IconX(props) {
  return svg(props, <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>)
}

export function IconSearch(props) {
  return svg(props, <>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </>)
}

// Objects
export function IconHeart(props) {
  return svg(props, <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />)
}

export function IconStar(props) {
  return svg(props, <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />)
}

export function IconBolt(props) {
  return svg(props, <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />)
}

export function IconLock(props) {
  return svg(props, <>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>)
}

export function IconMail(props) {
  return svg(props, <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22 4 12 13 2 4" />
  </>)
}

export function IconPalette(props) {
  return svg(props, <>
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" stroke="none" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </>)
}

export function IconSparkle(props) {
  return svg(props, <>
    <path d="M12 3l1.912 5.813L20 10l-6.088 1.187L12 17l-1.912-5.813L4 10l6.088-1.187L12 3z" />
    <path d="M18 14l.944 2.056L21 17l-2.056.944L18 20l-.944-2.056L15 17l2.056-.944L18 14z" />
  </>)
}

// Devices
export function IconSmartphone(props) {
  return svg(props, <>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </>)
}

export function IconTablet(props) {
  return svg(props, <>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </>)
}

export function IconLaptop(props) {
  return svg(props, <>
    <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </>)
}

export function IconMonitor(props) {
  return svg(props, <>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </>)
}

// Misc
export function IconFlask(props) {
  return svg(props, <>
    <path d="M9 3h6" />
    <path d="M10 3v6.3a1 1 0 0 1-.2.6L3.2 19a1 1 0 0 0 .8 1.4h16a1 1 0 0 0 .8-1.4l-6.6-9.1a1 1 0 0 1-.2-.6V3" />
  </>)
}

export function IconShield(props) {
  return svg(props, <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />)
}

export function IconZap(props) {
  return svg(props, <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />)
}

export function IconEye(props) {
  return svg(props, <>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </>)
}

export function IconSettings(props) {
  return svg(props, <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </>)
}

/**
 * Composant Icon générique par nom
 */
const iconMap = {
  'arrow-right': IconArrowRight,
  'arrow-left': IconArrowLeft,
  'chevron-right': IconChevronRight,
  'chevron-down': IconChevronDown,
  'plus': IconPlus,
  'check': IconCheck,
  'x': IconX,
  'search': IconSearch,
  'heart': IconHeart,
  'star': IconStar,
  'bolt': IconBolt,
  'lock': IconLock,
  'mail': IconMail,
  'palette': IconPalette,
  'sparkle': IconSparkle,
  'smartphone': IconSmartphone,
  'tablet': IconTablet,
  'laptop': IconLaptop,
  'monitor': IconMonitor,
  'flask': IconFlask,
  'shield': IconShield,
  'zap': IconZap,
  'eye': IconEye,
  'settings': IconSettings,
}

export function Icon({ name, ...props }) {
  const IconComponent = iconMap[name]
  if (!IconComponent) return null
  return <IconComponent {...props} />
}
