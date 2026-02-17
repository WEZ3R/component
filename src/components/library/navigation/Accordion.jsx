import { useState, useRef, useEffect } from 'react'
import styles from './Accordion.module.css'

function AccordionItem({ title, children, isOpen, onToggle, index }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen, children])

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className={styles.triggerText}>{title}</span>
        <svg
          className={styles.chevron}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={styles.content}
        style={{ height }}
      >
        <div ref={contentRef} className={styles.contentInner}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}) {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen))

  const handleToggle = (index) => {
    setOpenItems((prev) => {
      const next = new Set(allowMultiple ? prev : [])
      if (prev.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          index={i}
          title={item.title}
          isOpen={openItems.has(i)}
          onToggle={handleToggle}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
