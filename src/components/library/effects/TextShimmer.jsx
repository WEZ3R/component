import styles from './TextEffects.module.css'

/**
 * TextShimmer Component
 * Effet de brillance qui passe sur le texte
 */
export function TextShimmer({
  children,
  baseColor = '#1e293b',
  shimmerColor = '#6366f1',
  duration = 2,
  className = '',
  as: Tag = 'span'
}) {
  return (
    <Tag
      className={`${styles.shimmer} ${className}`}
      style={{
        '--shimmer-base': baseColor,
        '--shimmer-highlight': shimmerColor,
        '--shimmer-duration': `${duration}s`,
      }}
    >
      {children}
    </Tag>
  )
}

export default TextShimmer
