export const DEFAULT_THEME = {
  colors: {
    primary: '#6366f1',
    secondary: '#ec4899',
    accent: '#06b6d4',
    success: '#10b981',
    dark: '#0f172a',
  },
  radius: 'default',
  fontSans: 'default',
}

export const PRESETS = [
  {
    name: 'Default',
    config: { ...DEFAULT_THEME },
  },
  {
    name: 'Ocean',
    config: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#6366f1',
        accent: '#14b8a6',
        success: '#22c55e',
        dark: '#0c1524',
      },
      radius: 'lg',
      fontSans: 'default',
    },
  },
  {
    name: 'Sunset',
    config: {
      colors: {
        primary: '#f97316',
        secondary: '#ef4444',
        accent: '#fbbf24',
        success: '#84cc16',
        dark: '#1c1108',
      },
      radius: 'default',
      fontSans: 'default',
    },
  },
  {
    name: 'Forest',
    config: {
      colors: {
        primary: '#22c55e',
        secondary: '#10b981',
        accent: '#84cc16',
        success: '#14b8a6',
        dark: '#0a1a0f',
      },
      radius: 'xl',
      fontSans: 'default',
    },
  },
  {
    name: 'Neon',
    config: {
      colors: {
        primary: '#a855f7',
        secondary: '#ec4899',
        accent: '#06b6d4',
        success: '#22c55e',
        dark: '#09090b',
      },
      radius: 'sm',
      fontSans: 'default',
    },
  },
  {
    name: 'Mono',
    config: {
      colors: {
        primary: '#3b82f6',
        secondary: '#60a5fa',
        accent: '#93c5fd',
        success: '#22c55e',
        dark: '#111827',
      },
      radius: 'default',
      fontSans: 'default',
    },
  },
]

export const RADIUS_OPTIONS = [
  { key: 'none', label: 'None' },
  { key: 'sm', label: 'S' },
  { key: 'default', label: 'M' },
  { key: 'lg', label: 'L' },
  { key: 'xl', label: 'XL' },
  { key: 'full', label: 'Full' },
]

export const RADIUS_SCALES = {
  none: { sm: '0', md: '0', lg: '0', xl: '0', '2xl': '0', '3xl': '0' },
  sm: { sm: '0.125rem', md: '0.25rem', lg: '0.375rem', xl: '0.5rem', '2xl': '0.625rem', '3xl': '0.75rem' },
  default: null,
  lg: { sm: '0.375rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', '2xl': '1.25rem', '3xl': '2rem' },
  xl: { sm: '0.5rem', md: '0.75rem', lg: '1rem', xl: '1.5rem', '2xl': '2rem', '3xl': '3rem' },
  full: { sm: '9999px', md: '9999px', lg: '9999px', xl: '9999px', '2xl': '9999px', '3xl': '9999px' },
}

export const FONT_OPTIONS = [
  { key: 'default', label: 'Inter', value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
  { key: 'system', label: 'System', value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
  { key: 'poppins', label: 'Poppins', value: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" },
  { key: 'dm-sans', label: 'DM Sans', value: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" },
]
