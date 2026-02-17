import { useState, useRef, useCallback, useEffect } from 'react'
import styles from './ImageGridFlip.module.css'

/**
 * ImageGridFlip Component
 * Divise une image en grille de cases carrées qui se retournent au survol
 */
export function ImageGridFlip({
  src,
  alt = '',
  columns = 10,
  gap = 4,
  backColor = '#ccff00',
  flipDuration = 0.5,
  className = '',
}) {
  const [flippedCells, setFlippedCells] = useState(new Set())
  const [size, setSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleCellEnter = useCallback((index) => {
    setFlippedCells(prev => {
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [])

  const handleCellLeave = useCallback((index) => {
    setFlippedCells(prev => {
      const next = new Set(prev)
      next.delete(index)
      return next
    })
  }, [])

  const { width, height } = size
  const cellSize = width > 0 ? (width - gap * (columns - 1)) / columns : 0
  const rows = cellSize > 0 ? Math.ceil((height + gap) / (cellSize + gap)) : 0

  const cells = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const index = row * columns + col
      const isFlipped = flippedCells.has(index)

      const bgPosX = columns > 1 ? (col / (columns - 1)) * 100 : 0
      const bgPosY = rows > 1 ? (row / (rows - 1)) * 100 : 0

      cells.push(
        <div
          key={index}
          className={styles.cellWrapper}
          style={{ perspective: '600px' }}
          onMouseEnter={() => handleCellEnter(index)}
          onMouseLeave={() => handleCellLeave(index)}
        >
          <div
            className={`${styles.cellInner} ${isFlipped ? styles.flipped : ''}`}
            style={{
              '--flip-duration': `${flipDuration}s`,
            }}
          >
            <div
              className={styles.cellFront}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${width}px ${height}px`,
                backgroundPosition: `${bgPosX}% ${bgPosY}%`,
              }}
            />
            <div
              className={styles.cellBack}
              style={{ backgroundColor: backColor }}
            />
          </div>
        </div>
      )
    }
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.grid} ${className}`}
      style={{
        gap,
        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
      role="img"
      aria-label={alt}
    >
      {cells}
    </div>
  )
}

export default ImageGridFlip
