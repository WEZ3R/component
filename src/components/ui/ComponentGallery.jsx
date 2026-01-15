import { useState } from 'react'
import { useComponentTags } from '../../hooks/useComponentTags'
import styles from './ComponentGallery.module.css'

// Base path for the library
const LIBRARY_BASE_PATH = 'c:\\Users\\marcy\\Documents\\projet persos github\\landing pages\\src\\components\\library'

/**
 * ComponentGallery Component
 * Affiche une galerie de composants avec aperçu visuel réel
 */
export function ComponentGallery({ components = [], onSelect, className = '' }) {
  const [filter, setFilter] = useState('all')
  const [tagFilter, setTagFilter] = useState('')
  const [copiedId, setCopiedId] = useState(null)
  const [copiedCodeId, setCopiedCodeId] = useState(null)
  const [editingTagsId, setEditingTagsId] = useState(null)
  const [newTagInput, setNewTagInput] = useState('')

  const { getTags, addTag, removeTag, getAllTags, tagsMap } = useComponentTags()

  const categories = ['all', ...new Set(components.map(c => c.category))]
  const allUsedTags = getAllTags()

  // Filtrage par catégorie
  let filteredComponents = filter === 'all'
    ? components
    : components.filter(c => c.category === filter)

  // Filtrage par tags
  if (tagFilter) {
    filteredComponents = filteredComponents.filter(c => {
      const componentTags = getTags(c.id)
      return componentTags.some(tag => tag.includes(tagFilter.toLowerCase()))
    })
  }

  const getComponentPath = (component) => {
    const categoryFolder = component.category.toLowerCase()
    const componentName = component.id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    const pathMap = {
      'landings': `${LIBRARY_BASE_PATH}\\landings\\${componentName}.jsx`,
      'buttons': `${LIBRARY_BASE_PATH}\\buttons\\Buttons.jsx`,
      'effects': `${LIBRARY_BASE_PATH}\\effects\\${componentName}.jsx`,
    }

    return pathMap[categoryFolder] || `${LIBRARY_BASE_PATH}\\${categoryFolder}\\${componentName}.jsx`
  }

  const generatePrompt = (component) => {
    const componentPath = getComponentPath(component)
    const componentTags = getTags(component.id)
    const tagsLine = componentTags.length > 0
      ? `\nMots-clés: ${componentTags.join(', ')}`
      : ''

    const prompt = `Utilise le composant "${component.name}" situé dans "${componentPath}" pour le projet en cours.

Description du composant: ${component.description}
Catégorie: ${component.category}${tagsLine}

Lis d'abord le fichier du composant pour comprendre son fonctionnement et ses props disponibles, puis intègre-le dans le projet.`

    return prompt
  }

  const handleCopyPrompt = async (e, component) => {
    e.stopPropagation()

    const prompt = generatePrompt(component)

    try {
      await navigator.clipboard.writeText(prompt)
      setCopiedId(component.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleCopyCode = async (e, component) => {
    e.stopPropagation()

    if (!component.code) {
      console.error('No code available for this component')
      return
    }

    try {
      await navigator.clipboard.writeText(component.code)
      setCopiedCodeId(component.id)
      setTimeout(() => setCopiedCodeId(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const handleToggleEditTags = (e, componentId) => {
    e.stopPropagation()
    if (editingTagsId === componentId) {
      setEditingTagsId(null)
      setNewTagInput('')
    } else {
      setEditingTagsId(componentId)
      setNewTagInput('')
    }
  }

  const handleQuickAddTag = (e, componentId, tag) => {
    e.stopPropagation()
    addTag(componentId, tag)
  }

  // Get available tags for quick add (tags not already on this component)
  const getAvailableTagsForComponent = (componentId) => {
    const componentTags = getTags(componentId)
    return allUsedTags.filter(tag => !componentTags.includes(tag))
  }

  const handleAddTag = (e, componentId) => {
    e.stopPropagation()
    if (newTagInput.trim()) {
      addTag(componentId, newTagInput.trim())
      setNewTagInput('')
    }
  }

  const handleKeyDown = (e, componentId) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag(e, componentId)
    }
  }

  const handleRemoveTag = (e, componentId, tag) => {
    e.stopPropagation()
    removeTag(componentId, tag)
  }

  const handleTagFilterClick = (tag) => {
    setTagFilter(tagFilter === tag ? '' : tag)
  }

  return (
    <section className={`${styles.gallery} ${className}`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Bibliothèque de Composants</h2>
          <p className={styles.subtitle}>
            Cliquez sur un composant pour le prévisualiser, ou copiez le prompt pour l'utiliser dans un autre projet
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filtersSection}>
          {/* Category filters */}
          <div className={styles.filters}>
            <span className={styles.filterLabel}>Catégories:</span>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'Tous' : cat}
              </button>
            ))}
          </div>

          {/* Tag filters */}
          {allUsedTags.length > 0 && (
            <div className={styles.tagFilters}>
              <span className={styles.filterLabel}>Tags:</span>
              {allUsedTags.map(tag => (
                <button
                  key={tag}
                  className={`${styles.tagFilterBtn} ${tagFilter === tag ? styles.active : ''}`}
                  onClick={() => handleTagFilterClick(tag)}
                >
                  {tag}
                </button>
              ))}
              {tagFilter && (
                <button
                  className={styles.clearTagFilter}
                  onClick={() => setTagFilter('')}
                >
                  Effacer filtre
                </button>
              )}
            </div>
          )}

          {/* Search by tag */}
          <div className={styles.tagSearch}>
            <input
              type="text"
              placeholder="Rechercher par mot-clé..."
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
              className={styles.tagSearchInput}
            />
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredComponents.map((component, index) => {
            const componentTags = getTags(component.id)
            const isEditingTags = editingTagsId === component.id

            return (
              <div
                key={component.id || index}
                className={styles.card}
                onClick={() => onSelect?.(component)}
              >
                {/* Live Preview */}
                <div className={styles.previewWrapper}>
                  <div className={styles.previewScaler}>
                    {component.preview ? (
                      <component.preview />
                    ) : component.component ? (
                      <component.component />
                    ) : (
                      <div className={styles.placeholder}>
                        <span>{component.previewIcon || '📦'}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.previewOverlay}>
                    <span className={styles.selectLabel}>Cliquez pour sélectionner</span>
                  </div>
                </div>

                {/* Info */}
                <div className={styles.info}>
                  <div className={styles.infoHeader}>
                    <h3 className={styles.name}>{component.name}</h3>
                    <span className={styles.categoryTag}>{component.category}</span>
                  </div>
                  <p className={styles.description}>{component.description}</p>

                  {/* Tags Section */}
                  <div className={styles.tagsSection}>
                    <div className={styles.tagsHeader}>
                      <span className={styles.tagsLabel}>Tags:</span>
                      <button
                        className={styles.editTagsBtn}
                        onClick={(e) => handleToggleEditTags(e, component.id)}
                      >
                        {isEditingTags ? 'Fermer' : '+ Ajouter'}
                      </button>
                    </div>

                    {/* Display tags */}
                    <div className={styles.tagsList}>
                      {componentTags.length > 0 ? (
                        componentTags.map(tag => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                            {isEditingTags && (
                              <button
                                className={styles.removeTagBtn}
                                onClick={(e) => handleRemoveTag(e, component.id, tag)}
                              >
                                ×
                              </button>
                            )}
                          </span>
                        ))
                      ) : (
                        <span className={styles.noTags}>Aucun tag</span>
                      )}
                    </div>

                    {/* Add tag input */}
                    {isEditingTags && (
                      <>
                        {/* Quick add existing tags */}
                        {getAvailableTagsForComponent(component.id).length > 0 && (
                          <div className={styles.quickAddSection} onClick={(e) => e.stopPropagation()}>
                            <span className={styles.quickAddLabel}>Ajout rapide:</span>
                            <div className={styles.quickAddTags}>
                              {getAvailableTagsForComponent(component.id).map(tag => (
                                <button
                                  key={tag}
                                  className={styles.quickAddTag}
                                  onClick={(e) => handleQuickAddTag(e, component.id, tag)}
                                >
                                  + {tag}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* New tag input */}
                        <div className={styles.addTagForm} onClick={(e) => e.stopPropagation()}>
                          <input
                            type="text"
                            placeholder="Nouveau tag..."
                            value={newTagInput}
                            onChange={(e) => setNewTagInput(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, component.id)}
                            className={styles.addTagInput}
                            autoFocus
                          />
                          <button
                            className={styles.addTagBtn}
                            onClick={(e) => handleAddTag(e, component.id)}
                          >
                            Ajouter
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    {/* Copy Code Button - only show if component has code */}
                    {component.code && (
                      <button
                        className={`${styles.copyCodeBtn} ${copiedCodeId === component.id ? styles.copied : ''}`}
                        onClick={(e) => handleCopyCode(e, component)}
                        title="Copier le code du composant"
                      >
                        {copiedCodeId === component.id ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            Code copié !
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="16 18 22 12 16 6"/>
                              <polyline points="8 6 2 12 8 18"/>
                            </svg>
                            Copier code
                          </>
                        )}
                      </button>
                    )}

                    {/* Copy Prompt Button */}
                    <button
                      className={`${styles.copyBtn} ${copiedId === component.id ? styles.copied : ''}`}
                      onClick={(e) => handleCopyPrompt(e, component)}
                      title="Copier le prompt pour Claude"
                    >
                      {copiedId === component.id ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Copié !
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                          Copier prompt
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredComponents.length === 0 && (
          <div className={styles.empty}>
            <span>Aucun composant trouvé</span>
            {tagFilter && (
              <button className={styles.clearTagFilter} onClick={() => setTagFilter('')}>
                Effacer le filtre
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ComponentGallery
