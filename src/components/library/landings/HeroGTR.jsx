import { useState, useEffect, useRef } from 'react'
import { ImageGridFlip } from '../effects'
import styles from './HeroGTR.module.css'

/**
 * HeroGTR Component
 * Landing page avec image grid flip et titre kanji animé
 */
export function HeroGTR({
  image = '/R35.jpg',
  title = 'NISSAN GT-R R35',
  description = "Surnommée Godzilla, la GT-R R35 est une supercar japonaise légendaire. Son V6 biturbo de 3.8L développe 570 chevaux, couplés à la transmission intégrale ATTESA E-TS et à un double embrayage ultra-rapide.",
  ctaText = 'Voir plus',
  ctaKanji = 'もっと見る',
  ctaOnClick = () => {},
  columns = 12,
  gap = 4,
  backColor = '#ccff00',
  className = '',
}) {
  const [displayChars, setDisplayChars] = useState([])
  const [showContent, setShowContent] = useState(false)
  const settled = useRef([])
  const current = useRef([])

  const kanjiPool = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン日産車速力風雷龍神鬼戦闘機械技術道夢光影空海山火水金銀鉄'

  useEffect(() => {
    const chars = title.split('')
    const s = new Array(chars.length).fill(false)
    const c = chars.map((ch) =>
      ch === ' ' || ch === '-' ? ch : kanjiPool[Math.floor(Math.random() * kanjiPool.length)]
    )

    chars.forEach((ch, i) => {
      if (ch === ' ' || ch === '-') s[i] = true
    })

    settled.current = s
    current.current = c
    setDisplayChars([...c])

    const scrambleInterval = setInterval(() => {
      let changed = false
      for (let i = 0; i < chars.length; i++) {
        if (!settled.current[i]) {
          current.current[i] = kanjiPool[Math.floor(Math.random() * kanjiPool.length)]
          changed = true
        }
      }
      if (changed) setDisplayChars([...current.current])
    }, 60)

    const timers = []
    let delay = 1200
    chars.forEach((char, i) => {
      if (settled.current[i]) return
      timers.push(setTimeout(() => {
        settled.current[i] = true
        current.current[i] = char
        setDisplayChars([...current.current])
      }, delay))
      delay += 100
    })

    const contentTimer = setTimeout(() => setShowContent(true), delay + 400)
    const cleanupTimer = setTimeout(() => clearInterval(scrambleInterval), delay + 100)

    return () => {
      clearInterval(scrambleInterval)
      timers.forEach(clearTimeout)
      clearTimeout(contentTimer)
      clearTimeout(cleanupTimer)
    }
  }, [title])

  return (
    <section className={`${styles.hero} ${className}`}>
      <div className={styles.gridBg}>
        <ImageGridFlip
          src={image}
          alt={title}
          columns={columns}
          gap={gap}
          backColor={backColor}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          {displayChars.map((char, i) => (
            <span key={i} className={styles.titleChar}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p className={`${styles.description} ${showContent ? styles.visible : ''}`}>
          {description}
        </p>

        <button
          className={`${styles.cta} ${showContent ? styles.visible : ''}`}
          onClick={ctaOnClick}
        >
          <span className={styles.ctaLatin}>{ctaText}</span>
          <span className={styles.ctaKanji}>{ctaKanji}</span>
        </button>
      </div>
    </section>
  )
}

export default HeroGTR
