import { useState, useEffect, useCallback } from 'react'
import styles from './LandingCans.module.css'

/* ========================================
   PSEUDO-RANDOM (deterministic positions)
   ======================================== */

function hash(n) {
  const s = Math.sin(n * 127.1 + n * 311.7) * 43758.5453
  return s - Math.floor(s)
}

function generateElements(count, seed) {
  const elements = []
  for (let i = 0; i < count; i++) {
    let x, y, tries = 0
    do {
      x = hash(seed + i * 7 + tries * 100) * 100
      y = hash(seed + i * 7 + 1 + tries * 100) * 100
      tries++
    } while (x > 30 && x < 70 && y > 20 && y < 80 && tries < 20)

    const size = 28 + hash(seed + i * 7 + 2) * 50
    const rotation = hash(seed + i * 7 + 3) * 360
    const delay = (i / count) * 0.35
    const variant = hash(seed + i * 7 + 4) > 0.55 ? 'leaf' : 'main'

    elements.push({ id: i, x, y, size, rotation, delay, variant })
  }
  return elements
}

/* ========================================
   SLIDE DATA
   ======================================== */

const SLIDES = [
  {
    id: 'coca-cola',
    brand: 'Coca-Cola',
    tagline: 'Taste the Feeling',
    canGradient: 'linear-gradient(180deg, #b71c1c 0%, #d32f2f 15%, #e53935 45%, #d32f2f 55%, #c62828 85%, #8b0000 100%)',
    bgCenter: '#2a0505',
    bgEdge: '#0a0101',
    accentColor: '#e53935',
    elemType: 'bubbles',
    elements: generateElements(18, 42),
  },
  {
    id: 'fanta',
    brand: 'Fanta',
    tagline: 'More Fanta Less Serious',
    canGradient: 'linear-gradient(180deg, #e65100 0%, #ef6c00 15%, #ff8f00 45%, #ef6c00 55%, #e65100 85%, #bf360c 100%)',
    bgCenter: '#1a0d00',
    bgEdge: '#080400',
    accentColor: '#ff8f00',
    elemType: 'oranges',
    elements: generateElements(14, 128),
  },
  {
    id: 'sprite',
    brand: 'Sprite',
    tagline: 'Obey Your Thirst',
    canGradient: 'linear-gradient(180deg, #1b5e20 0%, #2e7d32 15%, #43a047 45%, #2e7d32 55%, #1b5e20 85%, #0d3a12 100%)',
    bgCenter: '#001a0d',
    bgEdge: '#000a05',
    accentColor: '#43a047',
    elemType: 'lemons',
    elements: generateElements(14, 256),
  },
]

/* ========================================
   SVG DECORATIVE ELEMENTS
   ======================================== */

function Bubble({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="14" fill="rgba(255,255,255,0.04)" />
      <circle cx="14" cy="13" r="3.5" fill="rgba(255,255,255,0.35)" />
      <circle cx="22" cy="11" r="1.5" fill="rgba(255,255,255,0.25)" />
    </svg>
  )
}

function OrangeSlice({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="23" fill="#ff8c00" stroke="#e07800" strokeWidth="1.5" />
      <circle cx="25" cy="25" r="17" fill="#ffaa33" />
      <circle cx="25" cy="25" r="3" fill="#ff8c00" />
      <line x1="25" y1="8" x2="25" y2="42" stroke="#e07800" strokeWidth="1.2" opacity="0.5" />
      <line x1="8" y1="25" x2="42" y2="25" stroke="#e07800" strokeWidth="1.2" opacity="0.5" />
      <line x1="13" y1="13" x2="37" y2="37" stroke="#e07800" strokeWidth="1.2" opacity="0.5" />
      <line x1="37" y1="13" x2="13" y2="37" stroke="#e07800" strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

function LemonSlice({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="23" fill="#cddc39" stroke="#afb42b" strokeWidth="1.5" />
      <circle cx="25" cy="25" r="17" fill="#e6ee9c" />
      <circle cx="25" cy="25" r="3" fill="#cddc39" />
      <line x1="25" y1="8" x2="25" y2="42" stroke="#afb42b" strokeWidth="1.2" opacity="0.4" />
      <line x1="8" y1="25" x2="42" y2="25" stroke="#afb42b" strokeWidth="1.2" opacity="0.4" />
      <line x1="13" y1="13" x2="37" y2="37" stroke="#afb42b" strokeWidth="1.2" opacity="0.4" />
      <line x1="37" y1="13" x2="13" y2="37" stroke="#afb42b" strokeWidth="1.2" opacity="0.4" />
    </svg>
  )
}

function Leaf({ size }) {
  return (
    <svg width={size * 0.6} height={size} viewBox="0 0 24 40">
      <path d="M12 2 C22 12 22 30 12 38 C2 30 2 12 12 2Z" fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.8" />
      <path d="M12 8 L12 34" stroke="#1b5e20" strokeWidth="0.8" fill="none" />
      <path d="M12 14 L7 10" stroke="#1b5e20" strokeWidth="0.5" fill="none" />
      <path d="M12 20 L17 16" stroke="#1b5e20" strokeWidth="0.5" fill="none" />
      <path d="M12 26 L8 22" stroke="#1b5e20" strokeWidth="0.5" fill="none" />
    </svg>
  )
}

/* ========================================
   OFFSCREEN TRANSFORM CALCULATOR
   ======================================== */

function getOffscreenTransform(x, y, rotation) {
  const dLeft = x
  const dRight = 100 - x
  const dTop = y
  const dBottom = 100 - y
  const min = Math.min(dLeft, dRight, dTop, dBottom)

  let tx = '-50%'
  let ty = '-50%'

  if (min === dLeft) tx = `calc(-50% - ${x + 15}vw)`
  else if (min === dRight) tx = `calc(-50% + ${100 - x + 15}vw)`
  else if (min === dTop) ty = `calc(-50% - ${y + 15}vh)`
  else ty = `calc(-50% + ${100 - y + 15}vh)`

  return `translate(${tx}, ${ty}) rotate(${rotation + 120}deg)`
}

/* ========================================
   ELEMENT STYLE BUILDER
   ======================================== */

function getElementStyle(el, phase) {
  const base = { left: `${el.x}%`, top: `${el.y}%` }
  const normalTransform = `translate(-50%, -50%) rotate(${el.rotation}deg)`
  const offscreen = getOffscreenTransform(el.x, el.y, el.rotation)

  switch (phase) {
    case 'idle':
      return { ...base, transform: normalTransform, opacity: 1, transition: 'none' }
    case 'exit':
      return {
        ...base,
        transform: offscreen,
        opacity: 0,
        transition: `transform 0.55s cubic-bezier(0.6, 0, 1, 1) ${el.delay}s, opacity 0.35s ease ${el.delay}s`,
      }
    case 'swap':
      return { ...base, transform: offscreen, opacity: 0, transition: 'none' }
    case 'enter':
      return {
        ...base,
        transform: normalTransform,
        opacity: 1,
        transition: `transform 0.65s cubic-bezier(0, 0, 0.2, 1) ${el.delay}s, opacity 0.45s ease ${el.delay}s`,
      }
    default:
      return { ...base, transform: normalTransform, opacity: 1 }
  }
}

/* ========================================
   RENDER ELEMENT BY TYPE
   ======================================== */

function renderElement(type, el) {
  if (type === 'bubbles') return <Bubble size={el.size} />
  if (type === 'oranges') return el.variant === 'leaf' ? <Leaf size={el.size} /> : <OrangeSlice size={el.size} />
  if (type === 'lemons') return el.variant === 'leaf' ? <Leaf size={el.size} /> : <LemonSlice size={el.size} />
  return null
}

/* ========================================
   LANDING CANS COMPONENT
   ======================================== */

export function LandingCans({ className = '' }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [canDisplay, setCanDisplay] = useState(0)
  const [phase, setPhase] = useState('idle')
  const [canFlipping, setCanFlipping] = useState(false)

  const slide = SLIDES[currentSlide]
  const canSlide = SLIDES[canDisplay]

  // Handle entering phase with double-rAF
  useEffect(() => {
    if (phase === 'swap') {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          setPhase('enter')
          setTimeout(() => setPhase('idle'), 750)
        })
        return () => cancelAnimationFrame(raf2)
      })
      return () => cancelAnimationFrame(raf1)
    }
  }, [phase])

  const goTo = useCallback((index) => {
    if (index === currentSlide || phase !== 'idle') return

    // Phase 1: Exit elements + spin can
    setPhase('exit')
    setCanFlipping(true)

    // Can content changes at ~300ms (when can is edge-on)
    setTimeout(() => setCanDisplay(index), 300)

    // Can flip done
    setTimeout(() => setCanFlipping(false), 700)

    // Elements swap after exit animation
    setTimeout(() => {
      setCurrentSlide(index)
      setPhase('swap')
    }, 650)
  }, [currentSlide, phase])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      if (phase === 'idle') {
        goTo((currentSlide + 1) % SLIDES.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide, phase, goTo])

  return (
    <section className={`${styles.landing} ${className}`}>
      {/* Background */}
      <div
        className={styles.bg}
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${canSlide.bgCenter} 0%, ${canSlide.bgEdge} 100%)`,
        }}
      />

      {/* Decorative Elements */}
      <div className={styles.elementsLayer}>
        {slide.elements.map((el) => (
          <div
            key={`${currentSlide}-${el.id}`}
            className={styles.element}
            style={getElementStyle(el, phase)}
          >
            {renderElement(slide.elemType, el)}
          </div>
        ))}
      </div>

      {/* Can */}
      <div className={styles.canWrapper}>
        <div className={`${styles.can} ${canFlipping ? styles.canFlip : ''}`}>
          <div className={styles.canBody}>
            <div className={styles.canColor} style={{ background: canSlide.canGradient }} />
            <div className={styles.canShine} />
            <div className={styles.canTop} />
            <div className={styles.canTab} />
            <div className={styles.canBottom} />
            <div className={styles.canLabel}>
              <div className={styles.canBrand}>{canSlide.brand}</div>
              <div className={styles.canVolume}>330 ML</div>
            </div>
          </div>
        </div>

        {/* Slide info below can */}
        <div className={styles.slideInfo}>
          <div className={`${styles.slideTitle} ${phase === 'exit' || phase === 'swap' ? styles.hidden : ''}`}>
            {canSlide.brand}
          </div>
          <div className={`${styles.slideTagline} ${phase === 'exit' || phase === 'swap' ? styles.hidden : ''}`}>
            {canSlide.tagline}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className={styles.nav}>
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === canDisplay ? styles.active : ''}`}
            onClick={() => goTo(i)}
            aria-label={s.brand}
          />
        ))}
      </div>
    </section>
  )
}

export default LandingCans
