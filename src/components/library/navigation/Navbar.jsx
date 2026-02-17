import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './Navbar.module.css'

/*
 * Navbar – Mega-menu header responsive
 *
 * Props:
 *   logo        – { src, alt, href }
 *   menus       – [{ label, color, items: [{ title, url, target?, children? }] }]
 *   cta         – { label, href }
 *   socials     – [{ icon: ReactNode, href, label }]
 *   height      – number (px, défaut 72)
 *   className   – string
 */

// ─── Chevron SVG ─────────────────────────────────────────
function ChevronDown({ size = 6 }) {
  return (
    <svg width={size * 2} height={size * 2} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// ─── Desktop : sous-menu niveau 3 ───────────────────────
function SubMenu({ items, color }) {
  if (!items?.length) return null
  return (
    <div className={styles.sub} style={{ background: color }}>
      {items.map((child, k) => (
        <div key={k}>
          <a href={child.url} target={child.target} className={styles.subLink}>{child.title}</a>
          {child.children?.map((lvl4, l) => (
            <a key={l} href={lvl4.url} target={lvl4.target} className={styles.lvl4}>{lvl4.title}</a>
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Mobile : section accordion ─────────────────────────
function MobileSection({ menu, onNavigate }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)

  return (
    <div className={styles.mobSection}>
      <button
        className={`${styles.mobHeader} ${open ? styles.mobHeaderActive : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span>{menu.label}</span>
        <span className={`${styles.mobArrow} ${open ? styles.mobArrowUp : ''}`} />
      </button>
      <div
        className={styles.mobBody}
        style={{ maxHeight: open ? (bodyRef.current?.scrollHeight || 1000) : 0, background: menu.color }}
        ref={bodyRef}
      >
        {menu.items.map((item, i) => (
          <MobileItem key={i} item={item} onNavigate={onNavigate} parentBody={bodyRef} />
        ))}
      </div>
    </div>
  )
}

function MobileItem({ item, onNavigate, parentBody }) {
  const [open, setOpen] = useState(false)
  const subRef = useRef(null)
  const hasChildren = item.children?.length > 0

  const handleToggle = () => {
    setOpen(!open)
    // Ajuste le parent
    if (parentBody.current) {
      parentBody.current.style.transition = 'none'
      parentBody.current.style.maxHeight = parentBody.current.scrollHeight + 'px'
      parentBody.current.offsetHeight // force reflow
      parentBody.current.style.transition = ''
    }
  }

  if (!hasChildren) {
    return (
      <a href={item.url} target={item.target} className={styles.mobLink} onClick={onNavigate}>
        {item.title}
      </a>
    )
  }

  return (
    <div>
      <button className={`${styles.mobSubHeader} ${open ? styles.mobHeaderActive : ''}`} onClick={handleToggle}>
        <span>{item.title}</span>
        <span className={`${styles.mobArrowSm} ${open ? styles.mobArrowUp : ''}`} />
      </button>
      <div
        ref={subRef}
        className={styles.mobSubBody}
        style={{ maxHeight: open ? (subRef.current?.scrollHeight || 500) : 0 }}
      >
        {item.children.map((child, k) => (
          <div key={k}>
            <a href={child.url} target={child.target} className={styles.mobLvl3} onClick={onNavigate}>
              {child.title}
            </a>
            {child.children?.map((lvl4, l) => (
              <a key={l} href={lvl4.url} target={lvl4.target} className={styles.mobLvl4} onClick={onNavigate}>
                {lvl4.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Composant principal ────────────────────────────────
export function Navbar({
  logo = { src: '', alt: 'Logo', href: '/' },
  menus = [],
  cta = null,
  socials = [],
  height = 72,
  className = '',
}) {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [lockedIdx, setLockedIdx] = useState(-1)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [overflowVisible, setOverflowVisible] = useState(false)
  const hoverTimer = useRef(null)
  const overflowTimer = useRef(null)
  const headerRef = useRef(null)

  // --- Desktop dropdown ---
  const showMenu = useCallback((index) => {
    clearTimeout(overflowTimer.current)
    setActiveIdx(index)
    setOverflowVisible(false)
    overflowTimer.current = setTimeout(() => setOverflowVisible(true), 350)
  }, [])

  const hideMenu = useCallback(() => {
    if (lockedIdx >= 0) {
      showMenu(lockedIdx)
      return
    }
    clearTimeout(overflowTimer.current)
    setActiveIdx(-1)
    setOverflowVisible(false)
  }, [lockedIdx, showMenu])

  const handleNavEnter = useCallback((i) => {
    clearTimeout(hoverTimer.current)
    showMenu(i)
  }, [showMenu])

  const handleNavClick = useCallback((i) => {
    if (lockedIdx === i) {
      setLockedIdx(-1)
      hideMenu()
    } else {
      setLockedIdx(i)
      showMenu(i)
    }
  }, [lockedIdx, hideMenu, showMenu])

  const handleHeaderLeave = useCallback(() => {
    hoverTimer.current = setTimeout(() => hideMenu(), 300)
  }, [hideMenu])

  const handleDropdownEnter = useCallback(() => {
    clearTimeout(hoverTimer.current)
  }, [])

  // Clic en dehors
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target) && lockedIdx >= 0) {
        setLockedIdx(-1)
        setActiveIdx(-1)
        setOverflowVisible(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [lockedIdx])

  // Fermer mobile si retour desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 1024) setMobileOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Bloquer scroll quand mobile ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Séparer les menus : les N-1 premiers à gauche, le dernier à droite
  const leftMenus = menus.slice(0, -1)
  const rightMenu = menus.length > 0 ? menus[menus.length - 1] : null
  const rightMenuIdx = menus.length - 1

  return (
    <div ref={headerRef} className={`${styles.header} ${className}`} style={{ '--h': `${height}px` }} onMouseLeave={handleHeaderLeave}>
      {/* === BAR === */}
      <div className={styles.bar}>
        <div className={styles.barInner}>
          {/* Left */}
          <div className={styles.left}>
            <a href={logo.href} className={styles.logo}>
              {logo.src ? <img src={logo.src} alt={logo.alt} /> : <span className={styles.logoText}>{logo.alt}</span>}
            </a>
            <nav className={styles.nav}>
              {leftMenus.map((menu, i) => (
                <div
                  key={i}
                  className={styles.navItem}
                  style={{ background: activeIdx === i ? menu.color : undefined }}
                  onMouseEnter={() => handleNavEnter(i)}
                  onClick={(e) => { e.stopPropagation(); handleNavClick(i) }}
                >
                  <span className={styles.navLabel}>{menu.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className={styles.right}>
            {rightMenu && (
              <div
                className={`${styles.navItem} ${styles.navItemRight}`}
                style={{ background: activeIdx === rightMenuIdx ? rightMenu.color : undefined }}
                onMouseEnter={() => handleNavEnter(rightMenuIdx)}
                onClick={(e) => { e.stopPropagation(); handleNavClick(rightMenuIdx) }}
              >
                <span className={styles.navLabel}>{rightMenu.label}</span>
              </div>
            )}

            {cta && (
              <a href={cta.href} className={styles.cta}>{cta.label}</a>
            )}

            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label={s.label}>
                {s.icon}
              </a>
            ))}

            {/* Burger */}
            <button
              className={`${styles.burger} ${mobileOpen ? styles.burgerActive : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* === DROPDOWN === */}
      <div
        className={`${styles.dropdown} ${activeIdx >= 0 ? styles.dropdownOpen : ''}`}
        style={{
          background: activeIdx >= 0 ? menus[activeIdx]?.color : undefined,
          overflow: overflowVisible ? 'visible' : undefined,
        }}
        onMouseEnter={handleDropdownEnter}
      >
        {menus.map((menu, i) => (
          <div key={i} className={`${styles.ddPanel} ${activeIdx === i ? styles.ddPanelActive : ''}`}>
            <div className={styles.ddInner}>
              {menu.items.map((item, j) => {
                const hasSub = item.children?.length > 0
                return (
                  <div key={j} className={`${styles.ddItem} ${hasSub ? styles.ddHasSub : ''}`}>
                    <a href={item.url} target={item.target}>
                      {item.title}
                      {hasSub && <ChevronDown size={5} />}
                    </a>
                    {hasSub && <SubMenu items={item.children} color={menu.color} />}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* === MOBILE DRAWER === */}
      <div className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ''}`}>
        {menus.map((menu, i) => (
          <MobileSection key={i} menu={menu} onNavigate={() => setMobileOpen(false)} />
        ))}

        <div className={styles.mobActions}>
          {cta && <a href={cta.href} className={styles.cta} style={{ justifyContent: 'center' }}>{cta.label}</a>}
          {socials.length > 0 && (
            <div className={styles.mobBottom}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Configuration démo ─────────────────────────────────
const DEMO_MENUS = [
  {
    label: 'PRODUITS',
    color: '#E8EEFD',
    items: [
      {
        title: 'Solutions Cloud',
        url: '#',
        children: [
          { title: 'Hébergement Web', url: '#' },
          { title: 'Serveurs Dédiés', url: '#' },
          { title: 'Stockage Object', url: '#' },
        ],
      },
      {
        title: 'Services Réseau',
        url: '#',
        children: [
          { title: 'CDN Global', url: '#' },
          { title: 'Load Balancer', url: '#' },
          { title: 'DNS Managé', url: '#' },
        ],
      },
      { title: 'Sécurité', url: '#' },
      { title: 'Base de données', url: '#' },
    ],
  },
  {
    label: 'SOLUTIONS',
    color: '#FDF3E7',
    items: [
      {
        title: 'Par secteur',
        url: '#',
        children: [
          { title: 'E-commerce', url: '#' },
          { title: 'SaaS', url: '#' },
          { title: 'Fintech', url: '#' },
          { title: 'Santé', url: '#' },
        ],
      },
      {
        title: 'Par besoin',
        url: '#',
        children: [
          { title: 'Migration Cloud', url: '#' },
          { title: 'Haute Disponibilité', url: '#' },
          { title: 'Conformité RGPD', url: '#' },
        ],
      },
      { title: 'Cas clients', url: '#' },
    ],
  },
  {
    label: 'ENTREPRISE',
    color: '#FFE5F3',
    items: [
      { title: 'À propos', url: '#' },
      { title: 'Équipe', url: '#' },
      { title: 'Carrières', url: '#' },
      {
        title: 'Actualités',
        url: '#',
        children: [
          { title: 'Blog', url: '#' },
          { title: 'Communiqués', url: '#' },
          { title: 'Événements', url: '#' },
        ],
      },
    ],
  },
]

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export function NavbarDemo() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar
        logo={{ src: '', alt: 'ACME Corp', href: '#' }}
        menus={DEMO_MENUS}
        cta={{ label: 'Prendre Contact', href: '#' }}
        socials={[{ icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' }]}
      />
      {/* Contenu démo sous le header */}
      <div style={{ paddingTop: 72, maxWidth: 800, margin: '0 auto', padding: '120px 24px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '1rem' }}>
          Mega Menu Header
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '2rem' }}>
          Survolez les liens de navigation pour voir les menus déroulants avec sous-menus multi-niveaux.
          Le header est entièrement responsive avec un menu hamburger sur mobile/tablette.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {['Dropdowns colorés', 'Multi-niveaux (4)', 'Click to lock', 'Mobile accordion', 'CTA intégré', 'Responsive'].map((f) => (
            <div key={f} style={{ padding: '1.25rem', background: 'white', borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, color: '#1a1a2e', fontSize: '0.9rem' }}>{f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
