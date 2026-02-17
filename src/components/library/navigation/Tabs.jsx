import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './Tabs.module.css'

export function Tabs({
  tabs = [],
  defaultIndex = 0,
  variant = 'underline',
  onChange,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const tabRefs = useRef([])
  const containerRef = useRef(null)

  const updateIndicator = useCallback(() => {
    const tab = tabRefs.current[activeIndex]
    const container = containerRef.current
    if (!tab || !container) return
    const containerRect = container.getBoundingClientRect()
    const tabRect = tab.getBoundingClientRect()
    setIndicator({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    })
  }, [activeIndex])

  useEffect(() => {
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [updateIndicator])

  const handleTabClick = (index) => {
    setActiveIndex(index)
    onChange?.(index)
  }

  return (
    <div className={`${styles.tabs} ${styles[variant]} ${className}`}>
      <div ref={containerRef} className={styles.tabList} role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            ref={(el) => (tabRefs.current[i] = el)}
            role="tab"
            aria-selected={i === activeIndex}
            className={`${styles.tab} ${i === activeIndex ? styles.active : ''}`}
            onClick={() => handleTabClick(i)}
          >
            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
        <div
          className={styles.indicator}
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />
      </div>
      <div className={styles.panel} role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  )
}

export default Tabs
