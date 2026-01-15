import { useState } from 'react'
import { TestZone } from './components/ui/TestZone'
import { ComponentGallery } from './components/ui/ComponentGallery'

// Landings
import { HeroModern } from './components/library/landings'

// Effects
import {
  TextGradient,
  TextReveal,
  TextTypewriter,
  TextGlitch,
  TextShimmer
} from './components/library/effects'
import {
  PreviewTextGradient,
  PreviewTextReveal,
  PreviewTextTypewriter,
  PreviewTextGlitch,
  PreviewTextShimmer,
} from './components/library/effects/EffectPreviews'

// Buttons
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonGhost,
  ButtonGlow,
  ButtonOutlineGradient,
  ButtonPill,
  Button3D,
  ButtonIcon,
} from './components/library/buttons'
import {
  PreviewButtonPrimary,
  PreviewButtonSecondary,
  PreviewButtonGhost,
  PreviewButtonGlow,
  PreviewButtonOutlineGradient,
  PreviewButtonPill,
  PreviewButton3D,
  PreviewButtonIcon,
} from './components/library/buttons/ButtonPreviews'

// Code snippets des boutons pour copie rapide
const buttonCodes = {
  primary: `<ButtonPrimary size="md" icon="→">
  Get Started
</ButtonPrimary>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - icon: string (emoji ou caractère)
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  secondary: `<ButtonSecondary size="md">
  Learn More
</ButtonSecondary>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - icon: string
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  ghost: `<ButtonGhost size="md">
  Explore
</ButtonGhost>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - icon: string
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  glow: `<ButtonGlow color="primary" size="md">
  Discover
</ButtonGlow>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "cyan" | "green"
// - icon: string
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  outlineGradient: `<ButtonOutlineGradient size="md">
  Join Now
</ButtonOutlineGradient>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - icon: string
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  pill: `<ButtonPill variant="filled" size="md">
  Subscribe
</ButtonPill>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - variant: "filled" | "outline" | "soft"
// - icon: string
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  btn3d: `<Button3D color="primary" size="md">
  Press Me
</Button3D>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "success" | "dark"
// - icon: string
// - iconPosition: "left" | "right"
// - onClick: function
// - className: string`,

  icon: `<ButtonIcon icon="→" variant="filled" size="md" />

// Props disponibles:
// - icon: string (emoji ou caractère)
// - size: "sm" | "md" | "lg"
// - variant: "filled" | "outline" | "ghost" | "gradient"
// - onClick: function
// - ariaLabel: string
// - className: string`,
}

// Code snippets des effets de texte
const effectCodes = {
  gradient: `<TextGradient
  colors={['#6366f1', '#ec4899', '#06b6d4']}
  animate
>
  Gradient Text
</TextGradient>

// Props disponibles:
// - children: texte à afficher
// - colors: array de couleurs hex
// - animate: boolean (animation du dégradé)
// - duration: number (durée en secondes)
// - className: string`,

  typewriter: `<TextTypewriter
  texts={['Hello', 'Bonjour', 'Hola']}
  typingSpeed={80}
  deletingSpeed={40}
/>

// Props disponibles:
// - texts: array de strings à afficher
// - typingSpeed: number (ms par caractère)
// - deletingSpeed: number (ms par caractère)
// - pauseDuration: number (pause entre les textes)
// - className: string`,

  glitch: `<TextGlitch intensity="medium" continuous>
  GLITCH
</TextGlitch>

// Props disponibles:
// - children: texte à afficher
// - intensity: "light" | "medium" | "heavy"
// - continuous: boolean (animation continue)
// - className: string`,

  shimmer: `<TextShimmer
  baseColor="#1e293b"
  shimmerColor="#6366f1"
  duration={2.5}
>
  Shimmer Effect
</TextShimmer>

// Props disponibles:
// - children: texte à afficher
// - baseColor: couleur de base
// - shimmerColor: couleur du shimmer
// - duration: number (durée en secondes)
// - className: string`,

  reveal: `<TextReveal
  mode="words"
  stagger={80}
  direction="up"
>
  Texte révélé progressivement
</TextReveal>

// Props disponibles:
// - children: texte à afficher
// - mode: "words" | "chars"
// - stagger: number (délai entre éléments en ms)
// - direction: "up" | "down" | "left" | "right"
// - className: string`,
}

// Catalogue des composants disponibles
const componentsLibrary = [
  // === LANDINGS ===
  {
    id: 'hero-modern',
    name: 'Hero Modern',
    description: 'Section hero avec dégradés vibrants et éléments flottants animés.',
    category: 'Landings',
    component: HeroModern,
    preview: HeroModern,
  },

  // === BUTTONS ===
  {
    id: 'btn-primary',
    name: 'Button Primary',
    description: 'Bouton principal avec gradient et effet glow au survol.',
    category: 'Buttons',
    code: buttonCodes.primary,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonPrimary size="sm">Small</ButtonPrimary>
        <ButtonPrimary size="md">Medium</ButtonPrimary>
        <ButtonPrimary size="lg">Large</ButtonPrimary>
        <ButtonPrimary icon="→">With Icon</ButtonPrimary>
      </div>
    ),
    preview: PreviewButtonPrimary,
  },
  {
    id: 'btn-secondary',
    name: 'Button Secondary',
    description: 'Bouton secondaire avec bordure, remplissage au survol.',
    category: 'Buttons',
    code: buttonCodes.secondary,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonSecondary size="sm">Small</ButtonSecondary>
        <ButtonSecondary size="md">Medium</ButtonSecondary>
        <ButtonSecondary size="lg">Large</ButtonSecondary>
      </div>
    ),
    preview: PreviewButtonSecondary,
  },
  {
    id: 'btn-ghost',
    name: 'Button Ghost',
    description: 'Bouton transparent avec backdrop blur, idéal sur fond sombre.',
    category: 'Buttons',
    code: buttonCodes.ghost,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonGhost size="sm">Small</ButtonGhost>
        <ButtonGhost size="md">Medium</ButtonGhost>
        <ButtonGhost size="lg">Large</ButtonGhost>
      </div>
    ),
    preview: PreviewButtonGhost,
  },
  {
    id: 'btn-glow',
    name: 'Button Glow',
    description: 'Bouton avec effet néon lumineux, plusieurs couleurs disponibles.',
    category: 'Buttons',
    code: buttonCodes.glow,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '1.5rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonGlow color="primary">Primary Glow</ButtonGlow>
        <ButtonGlow color="secondary">Secondary Glow</ButtonGlow>
        <ButtonGlow color="cyan">Cyan Glow</ButtonGlow>
        <ButtonGlow color="green">Green Glow</ButtonGlow>
      </div>
    ),
    preview: PreviewButtonGlow,
  },
  {
    id: 'btn-outline-gradient',
    name: 'Button Outline Gradient',
    description: 'Bouton avec bordure en dégradé, remplissage au survol.',
    category: 'Buttons',
    code: buttonCodes.outlineGradient,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonOutlineGradient size="sm">Small</ButtonOutlineGradient>
        <ButtonOutlineGradient size="md">Medium</ButtonOutlineGradient>
        <ButtonOutlineGradient size="lg">Large</ButtonOutlineGradient>
      </div>
    ),
    preview: PreviewButtonOutlineGradient,
  },
  {
    id: 'btn-pill',
    name: 'Button Pill',
    description: 'Bouton arrondi style pill avec variantes filled, outline et soft.',
    category: 'Buttons',
    code: buttonCodes.pill,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonPill variant="filled">Filled</ButtonPill>
        <ButtonPill variant="outline">Outline</ButtonPill>
        <ButtonPill variant="soft">Soft</ButtonPill>
      </div>
    ),
    preview: PreviewButtonPill,
  },
  {
    id: 'btn-3d',
    name: 'Button 3D',
    description: 'Bouton avec effet 3D pressable, plusieurs couleurs.',
    category: 'Buttons',
    code: buttonCodes.btn3d,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
        <Button3D color="primary">Primary</Button3D>
        <Button3D color="secondary">Secondary</Button3D>
        <Button3D color="success">Success</Button3D>
        <Button3D color="dark">Dark</Button3D>
      </div>
    ),
    preview: PreviewButton3D,
  },
  {
    id: 'btn-icon',
    name: 'Button Icon',
    description: 'Boutons icône carrés avec différentes variantes.',
    category: 'Buttons',
    code: buttonCodes.icon,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1.5rem', padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ButtonIcon icon="→" variant="filled" size="sm" />
          <ButtonIcon icon="→" variant="filled" size="md" />
          <ButtonIcon icon="→" variant="filled" size="lg" />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ButtonIcon icon="+" variant="outline" size="md" />
          <ButtonIcon icon="♥" variant="ghost" size="md" />
          <ButtonIcon icon="★" variant="gradient" size="md" />
        </div>
      </div>
    ),
    preview: PreviewButtonIcon,
  },

  // === TEXT EFFECTS ===
  {
    id: 'text-gradient',
    name: 'Text Gradient',
    description: 'Effet de dégradé animé sur le texte.',
    category: 'Effects',
    code: effectCodes.gradient,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1.1 }}>
          <TextGradient colors={['#6366f1', '#ec4899', '#06b6d4']} animate>
            Gradient Text
          </TextGradient>
        </h1>
        <p style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 600, marginTop: '1rem' }}>
          <TextGradient colors={['#f59e0b', '#ef4444']} animate>
            Multiple color combinations
          </TextGradient>
        </p>
      </div>
    ),
    preview: PreviewTextGradient,
  },
  {
    id: 'text-typewriter',
    name: 'Text Typewriter',
    description: 'Effet machine à écrire avec curseur clignotant.',
    category: 'Effects',
    code: effectCodes.typewriter,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: 'white', padding: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
          <TextTypewriter
            texts={['Hello World', 'Bienvenue', 'Welcome', 'Willkommen', 'こんにちは']}
            typingSpeed={80}
            deletingSpeed={40}
          />
        </h1>
      </div>
    ),
    preview: PreviewTextTypewriter,
  },
  {
    id: 'text-glitch',
    name: 'Text Glitch',
    description: 'Effet glitch/distortion style cyberpunk.',
    category: 'Effects',
    code: effectCodes.glitch,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 12vw, 8rem)', fontWeight: 900, color: 'white', letterSpacing: '0.1em' }}>
          <TextGlitch intensity="heavy" continuous>
            GLITCH
          </TextGlitch>
        </h1>
      </div>
    ),
    preview: PreviewTextGlitch,
  },
  {
    id: 'text-shimmer',
    name: 'Text Shimmer',
    description: 'Effet de brillance qui parcourt le texte.',
    category: 'Effects',
    code: effectCodes.shimmer,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', padding: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 800 }}>
          <TextShimmer baseColor="#1e293b" shimmerColor="#6366f1" duration={2.5}>
            Shimmer Effect
          </TextShimmer>
        </h1>
      </div>
    ),
    preview: PreviewTextShimmer,
  },
  {
    id: 'text-reveal',
    name: 'Text Reveal',
    description: 'Animation de révélation mot par mot ou lettre par lettre.',
    category: 'Effects',
    code: effectCodes.reveal,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e293b', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.2, maxWidth: '900px' }}>
          <TextReveal mode="words" stagger={80} direction="up">
            Animation de texte révélé progressivement mot par mot
          </TextReveal>
        </h1>
      </div>
    ),
    preview: PreviewTextReveal,
  },
]

function App() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showGrid, setShowGrid] = useState(false)

  const handleSelectComponent = (component) => {
    setActiveComponent(component)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderActiveComponent = () => {
    if (!activeComponent) return null
    const Component = activeComponent.component
    return <Component />
  }

  return (
    <div className="app">
      {/* Zone de Test (pleine hauteur viewport) */}
      <TestZone darkMode={darkMode} showGrid={showGrid}>
        {renderActiveComponent()}
      </TestZone>

      {/* Controls flottants */}
      <div style={{
        position: 'fixed',
        top: 50,
        right: 16,
        display: 'flex',
        gap: 8,
        zIndex: 1000,
      }}>
        <button
          onClick={() => setShowGrid(!showGrid)}
          style={{
            padding: '8px 12px',
            background: showGrid ? 'var(--color-primary)' : 'white',
            color: showGrid ? 'white' : 'var(--color-dark)',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Grid
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 12px',
            background: darkMode ? 'var(--color-dark)' : 'white',
            color: darkMode ? 'white' : 'var(--color-dark)',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        {activeComponent && (
          <button
            onClick={() => setActiveComponent(null)}
            style={{
              padding: '8px 12px',
              background: 'var(--color-error)',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Galerie de composants */}
      <ComponentGallery
        components={componentsLibrary}
        onSelect={handleSelectComponent}
      />
    </div>
  )
}

export default App
