import { useState } from 'react'
import { TestZone } from './components/ui/TestZone'
import { ComponentGallery } from './components/ui/ComponentGallery'
import { ThemeEditor } from './components/ui/ThemeEditor'
import { DEFAULT_THEME } from './utils/themePresets'
import {
  IconArrowRight, IconPlus, IconHeart, IconStar,
  IconBolt, IconShield, IconPalette,
  IconMail, IconLock, IconSearch,
  IconSmartphone, IconTablet, IconLaptop, IconMonitor,
} from './components/ui/Icons'

// Landings
import { HeroModern, HeroGTR, HeroSplit, LandingCans } from './components/library/landings'

// Effects
import {
  TextGradient,
  TextReveal,
  TextTypewriter,
  TextGlitch,
  TextShimmer,
  TextWave,
  TextCounter,
  ImageGridFlip,
  LoaderSpinner,
  LoaderDots,
  LoaderBars,
  LoaderRing,
  LoaderPulse,
  Skeleton,
  Marquee,
} from './components/library/effects'
import {
  PreviewTextGradient,
  PreviewTextReveal,
  PreviewTextTypewriter,
  PreviewTextGlitch,
  PreviewTextShimmer,
  PreviewTextWave,
  PreviewTextCounter,
  PreviewImageGridFlip,
  PreviewLoaderSpinner,
  PreviewLoaderDots,
  PreviewLoaderBars,
  PreviewLoaderRing,
  PreviewLoaderPulse,
  PreviewSkeleton,
  PreviewMarquee,
} from './components/library/effects/EffectPreviews'

// Cards
import { CardGlass, CardPricing, CardTestimonial, CardProduct, SpotlightCard } from './components/library/cards'
import {
  PreviewCardGlass,
  PreviewCardPricing,
  PreviewCardTestimonial,
  PreviewCardProduct,
  PreviewSpotlightCard,
} from './components/library/cards/CardPreviews'

// Navigation
import { Tabs, Accordion, NavbarDemo } from './components/library/navigation'
import { PreviewTabs, PreviewAccordion, PreviewNavbar } from './components/library/navigation/NavigationPreviews'

// Feedback
import { ToastDemo, ProgressBar } from './components/library/feedback'
import { PreviewToast, PreviewProgressBar } from './components/library/feedback/FeedbackPreviews'

// Inputs
import { Toggle, InputModern, Checkbox, RadioGroup } from './components/library/inputs'
import {
  PreviewToggle,
  PreviewInputModern,
  PreviewCheckbox,
  PreviewRadioGroup,
} from './components/library/inputs/InputPreviews'

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
  ButtonMagnetic,
  ButtonNeon,
  ButtonRipple,
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
  PreviewButtonMagnetic,
  PreviewButtonNeon,
  PreviewButtonRipple,
} from './components/library/buttons/ButtonPreviews'

// Code snippets des boutons pour copie rapide
const buttonCodes = {
  primary: `import { IconArrowRight } from './components/ui/Icons'

<ButtonPrimary size="md" icon={<IconArrowRight size={16} />}>
  Get Started
</ButtonPrimary>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - icon: ReactNode (composant icône SVG)
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

  icon: `import { IconArrowRight } from './components/ui/Icons'

<ButtonIcon icon={<IconArrowRight size={16} />} variant="filled" size="md" />

// Props disponibles:
// - icon: ReactNode (composant icône SVG)
// - size: "sm" | "md" | "lg"
// - variant: "filled" | "outline" | "ghost" | "gradient"
// - onClick: function
// - ariaLabel: string
// - className: string`,

  magnetic: `<ButtonMagnetic size="md">
  Hover Me
</ButtonMagnetic>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - onClick: function
// - className: string`,

  neon: `<ButtonNeon color="pink" size="md">
  NEON
</ButtonNeon>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - color: "pink" | "cyan" | "green" | "yellow"
// - onClick: function
// - className: string`,

  ripple: `<ButtonRipple color="indigo" size="md">
  Click Me
</ButtonRipple>

// Props disponibles:
// - children: texte du bouton
// - size: "sm" | "md" | "lg"
// - color: "indigo" | "rose" | "teal"
// - onClick: function
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

  imageGridFlip: `<ImageGridFlip
  src="/R35.jpg"
  alt="Description"
  columns={10}
  gap={4}
  backColor="#ccff00"
/>

// Props disponibles:
// - src: chemin de l'image
// - alt: texte alternatif
// - columns: nombre de colonnes (défaut 10)
// - gap: espace entre les cases en px (défaut 4)
// - backColor: couleur du dos des cases (défaut "#ccff00")
// - flipDuration: durée du flip en secondes (défaut 0.5)
// - className: string`,

  wave: `<TextWave speed={2} as="span">
  Wave Text
</TextWave>

// Props disponibles:
// - children: texte à afficher
// - speed: number (durée du cycle en secondes)
// - as: string (tag HTML, défaut "span")
// - className: string`,

  counter: `<TextCounter
  end={1000}
  duration={2}
  suffix="+"
/>

// Props disponibles:
// - end: number (valeur cible)
// - start: number (valeur initiale, défaut 0)
// - duration: number (durée en secondes)
// - prefix: string
// - suffix: string
// - as: string (tag HTML, défaut "span")
// - className: string`,

  loaderSpinner: `<LoaderSpinner size="md" color="primary" />

// Props disponibles:
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "accent" | "white"
// - className: string`,

  loaderDots: `<LoaderDots size="md" color="primary" />

// Props disponibles:
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "accent" | "white"
// - className: string`,

  loaderBars: `<LoaderBars size="md" color="accent" />

// Props disponibles:
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "accent" | "white"
// - className: string`,

  loaderRing: `<LoaderRing size="md" color="primary" />

// Props disponibles:
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "accent" | "white"
// - className: string`,

  loaderPulse: `<LoaderPulse size="md" color="secondary" />

// Props disponibles:
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "accent" | "white"
// - className: string`,

  skeleton: `<Skeleton variant="card" width={300} />

// Props disponibles:
// - variant: "text" | "circle" | "card" | "image"
// - width: number | string
// - height: number | string
// - lines: number (pour variant "text")
// - className: string`,
}

// Code snippets des cartes
const cardCodes = {
  glass: `import { IconBolt } from './components/ui/Icons'

<CardGlass
  icon={<IconBolt size={24} />}
  title="Lightning Fast"
  description="Optimized for speed."
/>

// Props disponibles:
// - title: string
// - description: string
// - icon: ReactNode (composant icône SVG)
// - className: string`,

  pricing: `<CardPricing
  plan="Pro"
  price="29"
  features={['10 Projects', 'Unlimited Users']}
  highlight
  badge="Popular"
/>

// Props disponibles:
// - plan: string
// - price: string
// - period: string (défaut "/mo")
// - features: string[]
// - highlight: boolean
// - badge: string | null
// - onSelect: function
// - className: string`,

  testimonial: `<CardTestimonial
  quote="Incredible product!"
  author="Jane Doe"
  role="CEO at Company"
  rating={5}
/>

// Props disponibles:
// - quote: string
// - author: string
// - role: string
// - avatar: string (url image)
// - rating: number (1-5)
// - className: string`,

  product: `<CardProduct
  image="/R35.jpg"
  title="Product Name"
  subtitle="Category"
  price="$99"
/>

// Props disponibles:
// - image: string (url)
// - title: string
// - subtitle: string
// - price: string
// - className: string`,
}

// Code snippets des inputs
const inputCodes = {
  toggle: `<Toggle
  size="md"
  color="primary"
  label="Dark Mode"
  checked={false}
  onChange={(val) => console.log(val)}
/>

// Props disponibles:
// - checked: boolean
// - onChange: function
// - size: "sm" | "md" | "lg"
// - color: "primary" | "secondary" | "accent" | "success"
// - label: string
// - className: string`,

  input: `import { IconMail } from './components/ui/Icons'

<InputModern
  label="Email"
  type="email"
  variant="default"
  icon={<IconMail size={18} />}
/>

// Props disponibles:
// - label: string
// - type: string
// - value: string
// - onChange: function
// - variant: "default" | "underline" | "filled"
// - icon: ReactNode (composant icône SVG)
// - className: string`,

  checkbox: `<Checkbox
  label="Accept terms"
  checked={false}
  onChange={(val) => console.log(val)}
/>

// Props disponibles:
// - checked: boolean
// - onChange: function
// - label: string
// - variant: "default" | "rounded"
// - className: string`,

  radio: `<RadioGroup
  options={[
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
  ]}
  name="choice"
  onChange={(val) => console.log(val)}
/>

// Props disponibles:
// - options: { value: string, label: string }[]
// - value: string
// - onChange: function
// - name: string
// - className: string`,
}

// Code snippets des nouveaux composants
const newCodes = {
  marquee: `<Marquee speed={40} direction="left" pauseOnHover gap={48}>
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</Marquee>

// Props disponibles:
// - children: contenu à défiler
// - speed: number (pixels/seconde, défaut 40)
// - direction: "left" | "right"
// - pauseOnHover: boolean (défaut true)
// - gap: number (espace en px, défaut 48)
// - className: string`,

  spotlightCard: `import { IconBolt } from './components/ui/Icons'

<SpotlightCard
  icon={<IconBolt size={24} />}
  title="Feature Title"
  description="Feature description text."
  spotlightColor="rgba(99, 102, 241, 0.15)"
/>

// Props disponibles:
// - title: string
// - description: string
// - icon: ReactNode
// - spotlightColor: string (couleur rgba du halo)
// - children: ReactNode (contenu custom)
// - className: string`,

  tabs: `<Tabs
  variant="underline"
  tabs={[
    { label: 'Tab 1', content: <p>Content 1</p> },
    { label: 'Tab 2', content: <p>Content 2</p> },
  ]}
  onChange={(index) => console.log(index)}
/>

// Props disponibles:
// - tabs: { label: string, icon?: ReactNode, content: ReactNode }[]
// - defaultIndex: number (défaut 0)
// - variant: "underline" | "pill"
// - onChange: function
// - className: string`,

  accordion: `<Accordion
  items={[
    { title: 'Question 1', content: 'Answer 1' },
    { title: 'Question 2', content: 'Answer 2' },
  ]}
  allowMultiple={false}
  defaultOpen={[0]}
/>

// Props disponibles:
// - items: { title: string, content: ReactNode }[]
// - allowMultiple: boolean (défaut false)
// - defaultOpen: number[] (indices ouverts par défaut)
// - className: string`,

  toast: `import { ToastContainer } from './components/library/feedback'

// State
const [toasts, setToasts] = useState([])

// Ajouter un toast
setToasts(prev => [...prev, {
  id: Date.now(),
  type: 'success', // success | error | warning | info
  message: 'Operation completed!',
}])

// Composant
<ToastContainer
  toasts={toasts}
  onDismiss={(id) => setToasts(prev => prev.filter(t => t.id !== id))}
  position="top-right"
/>

// Positions: "top-right" | "top-left" | "bottom-right" | "bottom-left"`,

  progressBar: `<ProgressBar
  value={75}
  label="Storage"
  showValue
  color="primary"
  size="md"
/>

// Props disponibles:
// - value: number (valeur actuelle)
// - max: number (défaut 100)
// - variant: "default" | "striped" | "gradient"
// - color: "primary" | "secondary" | "accent" | "success"
// - size: "sm" | "md" | "lg"
// - label: string
// - showValue: boolean (afficher le %)
// - animate: boolean (animation à l'entrée)
// - className: string`,

  navbar: `<Navbar
  logo={{ src: '/logo.svg', alt: 'MonSite', href: '/' }}
  menus={[
    {
      label: 'PRODUITS',
      color: '#E8EEFD',
      items: [
        { title: 'Cloud', url: '/cloud', children: [
          { title: 'Hébergement', url: '/hosting' },
          { title: 'CDN', url: '/cdn' },
        ]},
        { title: 'Sécurité', url: '/security' },
      ],
    },
    { label: 'ENTREPRISE', color: '#FFE5F3', items: [...] },
  ]}
  cta={{ label: 'Contact', href: '/contact' }}
  height={72}
/>

// Props disponibles:
// - logo: { src: string, alt: string, href: string }
// - menus: { label, color, items: { title, url, target?, children? }[] }[]
// - cta: { label: string, href: string }
// - socials: { icon: ReactNode, href: string, label: string }[]
// - height: number (px, défaut 72)
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
    theme: {
      colors: { primary: '#6366f1', secondary: '#ec4899', accent: '#06b6d4', success: '#10b981', dark: '#0f0c29' },
      radius: 'default',
      fontSans: 'default',
    },
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
        <ButtonPrimary icon={<IconArrowRight size={16} />}>With Icon</ButtonPrimary>
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
          <ButtonIcon icon={<IconArrowRight size={14} />} variant="filled" size="sm" />
          <ButtonIcon icon={<IconArrowRight size={16} />} variant="filled" size="md" />
          <ButtonIcon icon={<IconArrowRight size={18} />} variant="filled" size="lg" />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ButtonIcon icon={<IconPlus size={16} />} variant="outline" size="md" />
          <ButtonIcon icon={<IconHeart size={16} />} variant="ghost" size="md" />
          <ButtonIcon icon={<IconStar size={16} />} variant="gradient" size="md" />
        </div>
      </div>
    ),
    preview: PreviewButtonIcon,
  },

  {
    id: 'btn-magnetic',
    name: 'Button Magnetic',
    description: 'Bouton avec effet magnétique qui suit le curseur au survol.',
    category: 'Buttons',
    code: buttonCodes.magnetic,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '1.5rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonMagnetic size="sm">Small</ButtonMagnetic>
        <ButtonMagnetic size="md">Hover Me</ButtonMagnetic>
        <ButtonMagnetic size="lg">Large</ButtonMagnetic>
      </div>
    ),
    preview: PreviewButtonMagnetic,
  },
  {
    id: 'btn-neon',
    name: 'Button Neon',
    description: 'Bouton style enseigne néon avec 4 couleurs disponibles.',
    category: 'Buttons',
    code: buttonCodes.neon,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', gap: '1.5rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonNeon color="pink">Pink</ButtonNeon>
        <ButtonNeon color="cyan">Cyan</ButtonNeon>
        <ButtonNeon color="green">Green</ButtonNeon>
        <ButtonNeon color="yellow">Yellow</ButtonNeon>
      </div>
    ),
    preview: PreviewButtonNeon,
  },
  {
    id: 'btn-ripple',
    name: 'Button Ripple',
    description: 'Bouton avec effet ripple Material Design au clic.',
    category: 'Buttons',
    code: buttonCodes.ripple,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1.5rem', flexWrap: 'wrap', padding: '2rem' }}>
        <ButtonRipple color="indigo">Indigo</ButtonRipple>
        <ButtonRipple color="rose">Rose</ButtonRipple>
        <ButtonRipple color="teal">Teal</ButtonRipple>
      </div>
    ),
    preview: PreviewButtonRipple,
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

  {
    id: 'text-wave',
    name: 'Text Wave',
    description: 'Animation de vague lettre par lettre sur le texte.',
    category: 'Effects',
    code: effectCodes.wave,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, color: 'white' }}>
          <TextWave speed={2}>Wave Effect</TextWave>
        </h1>
      </div>
    ),
    preview: PreviewTextWave,
  },
  {
    id: 'text-counter',
    name: 'Text Counter',
    description: 'Compteur animé qui s\'incrémente jusqu\'à la valeur cible.',
    category: 'Effects',
    code: effectCodes.counter,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: 800, color: 'white' }}>
            <TextCounter end={12000} duration={2.5} suffix="+" />
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Utilisateurs</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: 800, color: 'white' }}>
            <TextCounter end={99} duration={2} suffix="%" />
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Satisfaction</div>
        </div>
      </div>
    ),
    preview: PreviewTextCounter,
  },

  // === IMAGE EFFECTS ===
  {
    id: 'image-grid-flip',
    name: 'Image Grid Flip',
    description: 'Image découpée en grille dont chaque case se retourne au survol.',
    category: 'Effects',
    code: effectCodes.imageGridFlip,
    component: () => (
      <div style={{ height: '100vh', background: '#0f172a' }}>
        <ImageGridFlip
          src="/R35.jpg"
          alt="Nissan R35 GTR"
          columns={12}
          gap={4}
          backColor="#ccff00"
        />
      </div>
    ),
    preview: PreviewImageGridFlip,
  },

  // === LANDINGS (suite) ===
  {
    id: 'hero-gtr',
    name: 'Hero GTR',
    description: 'Landing page Nissan GT-R avec grille flip, titre kanji animé et bouton interactif.',
    category: 'Landings',
    component: () => (
      <div style={{ height: '100vh' }}>
        <HeroGTR />
      </div>
    ),
    preview: () => (
      <div style={{ width: '100%', height: '480px' }}>
        <HeroGTR />
      </div>
    ),
    theme: {
      colors: { primary: '#6366f1', secondary: '#ec4899', accent: '#ccff00', success: '#10b981', dark: '#0f172a' },
      radius: 'default',
      fontSans: 'default',
    },
  },
  {
    id: 'hero-split',
    name: 'Hero Split',
    description: 'Landing page en écran partagé avec contenu à gauche et visuel code à droite.',
    category: 'Landings',
    component: () => (
      <div style={{ height: '100vh' }}>
        <HeroSplit />
      </div>
    ),
    preview: () => (
      <div style={{ width: '100%', height: '480px' }}>
        <HeroSplit />
      </div>
    ),
    theme: {
      colors: { primary: '#6366f1', secondary: '#ec4899', accent: '#06b6d4', success: '#10b981', dark: '#0a0a0a' },
      radius: 'default',
      fontSans: 'default',
    },
  },
  {
    id: 'landing-cans',
    name: 'Landing Cans',
    description: 'Slider plein écran avec cannettes rotatives pour Coca-Cola, Fanta et Sprite.',
    category: 'Landings',
    component: () => (
      <div style={{ height: '100vh' }}>
        <LandingCans />
      </div>
    ),
    preview: () => (
      <div style={{ width: '100%', height: '480px' }}>
        <LandingCans />
      </div>
    ),
    theme: {
      colors: { primary: '#e53935', secondary: '#ff8f00', accent: '#43a047', success: '#10b981', dark: '#0a0101' },
      radius: 'default',
      fontSans: 'default',
    },
  },

  // === CARDS ===
  {
    id: 'card-glass',
    name: 'Card Glass',
    description: 'Carte glassmorphisme avec fond flou et bordure translucide.',
    category: 'Cards',
    code: cardCodes.glass,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '2rem', gap: '1.5rem', flexWrap: 'wrap' }}>
        <CardGlass icon={<IconBolt size={24} />} title="Lightning Fast" description="Optimized for speed with sub-second load times." />
        <CardGlass icon={<IconShield size={24} />} title="Secure" description="Enterprise-grade security built right in." />
        <CardGlass icon={<IconPalette size={24} />} title="Customizable" description="Full control over every aspect of the design." />
      </div>
    ),
    preview: PreviewCardGlass,
  },
  {
    id: 'card-pricing',
    name: 'Card Pricing',
    description: 'Carte de tarification avec mise en avant, badge et bouton CTA.',
    category: 'Cards',
    code: cardCodes.pricing,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem', gap: '1.5rem', flexWrap: 'wrap' }}>
        <CardPricing plan="Starter" price="9" features={['3 Projects', '1 User', 'Email Support']} />
        <CardPricing plan="Pro" price="29" features={['10 Projects', 'Unlimited Users', 'Priority Support', 'Custom Domain', 'Analytics']} highlight badge="Popular" />
        <CardPricing plan="Enterprise" price="99" features={['Unlimited', 'Dedicated Support', 'SLA 99.9%', 'Custom Integrations', 'Audit Logs']} />
      </div>
    ),
    preview: PreviewCardPricing,
  },
  {
    id: 'card-testimonial',
    name: 'Card Testimonial',
    description: 'Carte de témoignage avec note étoiles, citation et avatar.',
    category: 'Cards',
    code: cardCodes.testimonial,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem', gap: '1.5rem', flexWrap: 'wrap' }}>
        <CardTestimonial quote="Incredible product! Saved us hours every week." author="Marc D." role="CTO at StartupX" rating={5} />
        <CardTestimonial quote="The best tool we've integrated this year. Our team loves it." author="Sophie L." role="Design Lead at Agency" rating={5} />
        <CardTestimonial quote="Simple, elegant and powerful. Exactly what we needed." author="Alex R." role="Founder at DevCo" rating={4} />
      </div>
    ),
    preview: PreviewCardTestimonial,
  },
  {
    id: 'card-product',
    name: 'Card Product',
    description: 'Carte produit avec image hover reveal et overlay action.',
    category: 'Cards',
    code: cardCodes.product,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem', gap: '1.5rem', flexWrap: 'wrap' }}>
        <CardProduct image="/R35.jpg" title="GT-R Nismo" subtitle="Nissan" price="$212,000" />
        <CardProduct image="/R35.jpg" title="GT-R Premium" subtitle="Nissan" price="$115,000" />
      </div>
    ),
    preview: PreviewCardProduct,
  },

  // === INPUTS ===
  {
    id: 'input-toggle',
    name: 'Toggle',
    description: 'Interrupteur animé avec bounce, plusieurs tailles et couleurs.',
    category: 'Inputs',
    code: inputCodes.toggle,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '2rem', padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Toggle size="sm" color="primary" label="Small" />
          <Toggle size="md" color="primary" label="Medium" />
          <Toggle size="lg" color="primary" label="Large" />
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Toggle size="md" color="primary" label="Primary" />
          <Toggle size="md" color="secondary" label="Secondary" />
          <Toggle size="md" color="accent" label="Accent" />
          <Toggle size="md" color="success" label="Success" />
        </div>
      </div>
    ),
    preview: PreviewToggle,
  },
  {
    id: 'input-modern',
    name: 'Input Modern',
    description: 'Champ de saisie avec label flottant animé et variantes.',
    category: 'Inputs',
    code: inputCodes.input,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: 700, width: '100%' }}>
          <InputModern label="Email" type="email" icon={<IconMail size={18} />} />
          <InputModern label="Password" type="password" icon={<IconLock size={18} />} />
          <InputModern label="Username" variant="underline" />
          <InputModern label="Search" variant="filled" icon={<IconSearch size={18} />} />
        </div>
      </div>
    ),
    preview: PreviewInputModern,
  },
  {
    id: 'input-checkbox',
    name: 'Checkbox',
    description: 'Case à cocher animée avec check SVG et variante arrondie.',
    category: 'Inputs',
    code: inputCodes.checkbox,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', gap: '1.5rem', padding: '2rem' }}>
        <Checkbox label="Accept terms and conditions" />
        <Checkbox label="Subscribe to newsletter" />
        <Checkbox label="Remember me" variant="rounded" />
      </div>
    ),
    preview: PreviewCheckbox,
  },
  {
    id: 'input-radio',
    name: 'Radio Group',
    description: 'Boutons radio avec animation bounce sur sélection.',
    category: 'Inputs',
    code: inputCodes.radio,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem' }}>
        <RadioGroup
          options={[
            { value: 'startup', label: 'Startup Plan - $9/mo' },
            { value: 'pro', label: 'Pro Plan - $29/mo' },
            { value: 'enterprise', label: 'Enterprise Plan - $99/mo' },
          ]}
          name="plan"
        />
      </div>
    ),
    preview: PreviewRadioGroup,
  },

  // === LOADERS ===
  {
    id: 'loader-spinner',
    name: 'Loader Spinner',
    description: 'Animation de chargement circulaire classique.',
    category: 'Effects',
    code: effectCodes.loaderSpinner,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem' }}>
        <LoaderSpinner size="sm" color="white" />
        <LoaderSpinner size="md" color="primary" />
        <LoaderSpinner size="lg" color="secondary" />
      </div>
    ),
    preview: PreviewLoaderSpinner,
  },
  {
    id: 'loader-dots',
    name: 'Loader Dots',
    description: 'Animation de chargement avec points rebondissants.',
    category: 'Effects',
    code: effectCodes.loaderDots,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem' }}>
        <LoaderDots size="sm" color="white" />
        <LoaderDots size="md" color="primary" />
        <LoaderDots size="lg" color="secondary" />
      </div>
    ),
    preview: PreviewLoaderDots,
  },
  {
    id: 'loader-bars',
    name: 'Loader Bars',
    description: 'Animation de chargement avec barres oscillantes.',
    category: 'Effects',
    code: effectCodes.loaderBars,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem' }}>
        <LoaderBars size="sm" color="white" />
        <LoaderBars size="md" color="accent" />
        <LoaderBars size="lg" color="primary" />
      </div>
    ),
    preview: PreviewLoaderBars,
  },
  {
    id: 'loader-ring',
    name: 'Loader Ring',
    description: 'Animation de chargement avec anneau rotatif.',
    category: 'Effects',
    code: effectCodes.loaderRing,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem' }}>
        <LoaderRing size="sm" color="white" />
        <LoaderRing size="md" color="primary" />
        <LoaderRing size="lg" color="accent" />
      </div>
    ),
    preview: PreviewLoaderRing,
  },
  {
    id: 'loader-pulse',
    name: 'Loader Pulse',
    description: 'Animation de chargement avec cercles pulsants.',
    category: 'Effects',
    code: effectCodes.loaderPulse,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem' }}>
        <LoaderPulse size="sm" color="white" />
        <LoaderPulse size="md" color="secondary" />
        <LoaderPulse size="lg" color="primary" />
      </div>
    ),
    preview: PreviewLoaderPulse,
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'Placeholder de chargement animé pour contenu : texte, cercle, carte, image.',
    category: 'Effects',
    code: effectCodes.skeleton,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem', gap: '2rem', flexWrap: 'wrap' }}>
        <Skeleton variant="card" width={300} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: 320 }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Skeleton variant="circle" width={48} height={48} />
            <Skeleton variant="text" lines={2} width={220} />
          </div>
          <Skeleton variant="text" lines={4} />
          <Skeleton variant="image" height={140} />
        </div>
      </div>
    ),
    preview: PreviewSkeleton,
  },

  // === MARQUEE ===
  {
    id: 'marquee',
    name: 'Marquee',
    description: 'Ticker défilant infini avec pause au survol, bidirectionnel.',
    category: 'Effects',
    code: newCodes.marquee,
    component: () => {
      const logos = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Astro', 'Remix', 'Solid', 'Qwik']
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0f172a', gap: '3rem', padding: '2rem 0' }}>
          <Marquee speed={30} gap={48}>
            {logos.map((name) => (
              <span key={name} style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {name}
              </span>
            ))}
          </Marquee>
          <Marquee speed={25} direction="right" gap={32}>
            {logos.map((name) => (
              <span key={name} style={{ padding: '10px 24px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                {name}
              </span>
            ))}
          </Marquee>
          <Marquee speed={35} gap={40}>
            {logos.map((name) => (
              <span key={name} style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(236,72,153,0.5)', letterSpacing: '0.1em' }}>
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      )
    },
    preview: PreviewMarquee,
  },

  // === SPOTLIGHT CARD ===
  {
    id: 'card-spotlight',
    name: 'Spotlight Card',
    description: 'Carte avec effet spotlight qui suit le curseur et bordure lumineuse.',
    category: 'Cards',
    code: newCodes.spotlightCard,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '2rem', gap: '1.5rem', flexWrap: 'wrap' }}>
        <SpotlightCard icon={<IconBolt size={24} />} title="Lightning Fast" description="Optimized for speed with sub-second load times across all devices." spotlightColor="rgba(99, 102, 241, 0.12)" />
        <SpotlightCard icon={<IconShield size={24} />} title="Secure by Default" description="Enterprise-grade security with end-to-end encryption." spotlightColor="rgba(236, 72, 153, 0.12)" />
        <SpotlightCard icon={<IconPalette size={24} />} title="Fully Customizable" description="Complete control over every aspect of your design system." spotlightColor="rgba(6, 182, 212, 0.12)" />
      </div>
    ),
    preview: PreviewSpotlightCard,
  },

  // === TABS ===
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'Navigation par onglets avec indicateur animé, variantes underline et pill.',
    category: 'Navigation',
    code: newCodes.tabs,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Underline</div>
            <Tabs
              variant="underline"
              tabs={[
                { label: 'Overview', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Welcome to the overview panel. Here you will find general information about the product and its core features.</p> },
                { label: 'Features', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Explore all the powerful features including real-time collaboration, advanced analytics, and custom workflows.</p> },
                { label: 'Pricing', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Start free, then upgrade when you need more. Plans start at $9/month for individuals.</p> },
                { label: 'FAQ', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Find answers to the most commonly asked questions about setup, billing, and support.</p> },
              ]}
            />
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Pill</div>
            <Tabs
              variant="pill"
              tabs={[
                { label: 'All', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Showing all items in your collection, sorted by most recent.</p> },
                { label: 'Active', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Currently active items that are being processed or monitored.</p> },
                { label: 'Archived', content: <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Previously completed items that have been moved to archive.</p> },
              ]}
            />
          </div>
        </div>
      </div>
    ),
    preview: PreviewTabs,
  },

  // === ACCORDION ===
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Panneaux dépliables avec animation fluide et chevron rotatif.',
    category: 'Navigation',
    code: newCodes.accordion,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: 600 }}>
          <Accordion
            defaultOpen={[0]}
            items={[
              { title: 'What is this component library?', content: 'A collection of beautifully crafted, ready-to-use React components with smooth animations and modern design patterns. Every component is built with accessibility in mind.' },
              { title: 'Is it free to use?', content: 'Yes! All components are completely free and open source. You can copy and paste them directly into your project without any licensing concerns.' },
              { title: 'How do I customize the styles?', content: 'Each component uses CSS Modules and CSS custom properties (variables), making it easy to customize colors, sizes, border-radius, and other visual properties to match your brand.' },
              { title: 'Does it support dark mode?', content: 'Absolutely. All components are designed with dark mode in mind and automatically adapt to your theme configuration through CSS variables.' },
              { title: 'Can I use it with Next.js or Remix?', content: 'Yes, the components are framework-agnostic React components. They work seamlessly with Next.js, Remix, Vite, and any other React-based framework.' },
            ]}
          />
        </div>
      </div>
    ),
    preview: PreviewAccordion,
  },

  // === NAVBAR ===
  {
    id: 'navbar',
    name: 'Navbar Mega Menu',
    description: 'Header fixe avec mega-menu multi-niveaux, dropdowns colorés et drawer mobile.',
    category: 'Headers',
    code: newCodes.navbar,
    component: NavbarDemo,
    preview: PreviewNavbar,
  },

  // === TOAST ===
  {
    id: 'toast',
    name: 'Toast',
    description: 'Notifications toast animées avec 4 variantes : success, error, warning, info.',
    category: 'Feedback',
    code: newCodes.toast,
    component: () => (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <ToastDemo />
      </div>
    ),
    preview: PreviewToast,
  },

  // === PROGRESS BAR ===
  {
    id: 'progress-bar',
    name: 'Progress Bar',
    description: 'Barre de progression animée avec variantes default, striped et gradient.',
    category: 'Feedback',
    code: newCodes.progressBar,
    component: () => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <ProgressBar value={87} label="Storage" showValue color="primary" size="md" />
          <ProgressBar value={65} label="Bandwidth" showValue color="secondary" size="md" />
          <ProgressBar value={42} label="CPU Usage" showValue color="accent" size="md" />
          <ProgressBar value={95} label="Uptime" showValue color="success" size="md" />
          <ProgressBar value={70} label="Upload" showValue color="primary" size="md" variant="striped" />
          <ProgressBar value={55} variant="gradient" size="lg" showValue label="Overall" />
        </div>
      </div>
    ),
    preview: PreviewProgressBar,
  },
]

const VIEWPORTS = [
  { label: 'Mobile', width: 375, icon: <IconSmartphone size={14} /> },
  { label: 'Tablet', width: 768, icon: <IconTablet size={14} /> },
  { label: 'Laptop', width: 1024, icon: <IconLaptop size={14} /> },
  { label: 'Full', width: null, icon: <IconMonitor size={14} /> },
]

const controlBtn = (active) => ({
  padding: '8px 12px',
  background: active ? 'var(--color-primary)' : 'white',
  color: active ? 'white' : 'var(--color-dark)',
  border: '1px solid var(--color-gray-200)',
  borderRadius: 8,
  fontSize: 12,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.15s ease',
})

function App() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(null)
  const [showThemeEditor, setShowThemeEditor] = useState(false)
  const [themeConfig, setThemeConfig] = useState({ ...DEFAULT_THEME })

  const handleSelectComponent = (component) => {
    setActiveComponent(component)
    if (component.theme) {
      setThemeConfig({ colors: { ...component.theme.colors }, radius: component.theme.radius, fontSans: component.theme.fontSans })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderActiveComponent = () => {
    if (!activeComponent) return null
    const Component = activeComponent.component
    return <Component />
  }

  const isThemeCustomized = JSON.stringify(themeConfig) !== JSON.stringify(DEFAULT_THEME)

  return (
    <div className="app">
      {/* Zone de Test (pleine hauteur viewport) */}
      <TestZone
        darkMode={darkMode}
        showGrid={showGrid}
        viewportWidth={viewportWidth}
        themeConfig={themeConfig}
      >
        {renderActiveComponent()}
      </TestZone>

      {/* Controls flottants */}
      <div style={{
        position: 'fixed',
        top: 50,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 8,
        zIndex: 1000,
      }}>
        {/* Row 1: Main controls */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setShowGrid(!showGrid)} style={controlBtn(showGrid)}>
            Grid
          </button>
          <button onClick={() => setDarkMode(!darkMode)} style={controlBtn(darkMode)}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={() => setShowThemeEditor(!showThemeEditor)}
            style={controlBtn(showThemeEditor || isThemeCustomized)}
          >
            Theme
          </button>
          {activeComponent && (
            <button
              onClick={() => { setActiveComponent(null); setViewportWidth(null); setThemeConfig({ colors: { ...DEFAULT_THEME.colors }, radius: DEFAULT_THEME.radius, fontSans: DEFAULT_THEME.fontSans }) }}
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

        {/* Row 2: Responsive viewport buttons */}
        {activeComponent && (
          <div style={{
            display: 'flex',
            gap: 4,
            background: 'white',
            padding: 4,
            borderRadius: 10,
            border: '1px solid var(--color-gray-200)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            {VIEWPORTS.map(vp => (
              <button
                key={vp.label}
                onClick={() => setViewportWidth(vp.width)}
                style={{
                  padding: '6px 10px',
                  background: viewportWidth === vp.width ? 'var(--color-dark)' : 'transparent',
                  color: viewportWidth === vp.width ? 'white' : 'var(--color-gray-600)',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
                title={vp.width ? `${vp.width}px` : 'Pleine largeur'}
              >
                {vp.icon}
                {vp.label}
              </button>
            ))}
          </div>
        )}

        {/* Row 3: Theme Editor Panel */}
        {showThemeEditor && (
          <ThemeEditor
            themeConfig={themeConfig}
            onThemeChange={setThemeConfig}
          />
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
