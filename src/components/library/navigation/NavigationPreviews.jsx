import { Tabs } from './Tabs'
import { Accordion } from './Accordion'
import { NavbarDemo } from './Navbar'
import styles from './NavigationPreviews.module.css'

export function PreviewTabs() {
  const tabs = [
    { label: 'Overview', content: <p>This is the overview panel with general information about the product.</p> },
    { label: 'Features', content: <p>Explore all the powerful features that make this product stand out.</p> },
    { label: 'Pricing', content: <p>Choose the plan that best fits your needs and budget.</p> },
    { label: 'FAQ', content: <p>Find answers to the most commonly asked questions.</p> },
  ]

  return (
    <div className={styles.previewDark}>
      <div className={styles.tabsContainer}>
        <div style={{ marginBottom: '2rem' }}>
          <h4 className={styles.variantLabel}>Underline</h4>
          <Tabs tabs={tabs} variant="underline" />
        </div>
        <div>
          <h4 className={styles.variantLabel}>Pill</h4>
          <Tabs tabs={tabs} variant="pill" />
        </div>
      </div>
    </div>
  )
}

export function PreviewAccordion() {
  const items = [
    { title: 'What is this component library?', content: 'A collection of beautifully crafted, ready-to-use React components with smooth animations and modern design.' },
    { title: 'Is it free to use?', content: 'Yes! All components are completely free and open source. You can copy and paste them directly into your project.' },
    { title: 'How do I customize the styles?', content: 'Each component uses CSS Modules and CSS custom properties, making it easy to customize colors, sizes, and other properties.' },
    { title: 'Does it support dark mode?', content: 'Absolutely. All components are designed with dark mode in mind and adapt to your theme configuration.' },
  ]

  return (
    <div className={styles.previewDark}>
      <div className={styles.accordionContainer}>
        <Accordion items={items} defaultOpen={[0]} />
      </div>
    </div>
  )
}

export function PreviewNavbar() {
  return (
    <div style={{ width: '100%', height: '480px', position: 'relative', overflow: 'hidden' }}>
      <NavbarDemo />
    </div>
  )
}
