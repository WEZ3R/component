import { useState, useEffect } from 'react'

const STORAGE_KEY = 'component-library-tags'

/**
 * Hook pour gérer les tags personnalisés des composants
 * Stocke les tags dans localStorage pour persistence
 */
export function useComponentTags() {
  const [tagsMap, setTagsMap] = useState({})

  // Charger les tags depuis localStorage au montage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setTagsMap(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse stored tags:', e)
      }
    }
  }, [])

  // Sauvegarder dans localStorage à chaque modification
  const saveTags = (newTagsMap) => {
    setTagsMap(newTagsMap)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTagsMap))
  }

  // Obtenir les tags d'un composant
  const getTags = (componentId) => {
    return tagsMap[componentId] || []
  }

  // Définir les tags d'un composant
  const setTags = (componentId, tags) => {
    const newTagsMap = {
      ...tagsMap,
      [componentId]: tags.filter(t => t.trim() !== '')
    }
    saveTags(newTagsMap)
  }

  // Ajouter un tag à un composant
  const addTag = (componentId, tag) => {
    const currentTags = getTags(componentId)
    const normalizedTag = tag.trim().toLowerCase()
    if (normalizedTag && !currentTags.includes(normalizedTag)) {
      setTags(componentId, [...currentTags, normalizedTag])
    }
  }

  // Supprimer un tag d'un composant
  const removeTag = (componentId, tag) => {
    const currentTags = getTags(componentId)
    setTags(componentId, currentTags.filter(t => t !== tag))
  }

  // Obtenir tous les tags uniques utilisés
  const getAllTags = () => {
    const allTags = new Set()
    Object.values(tagsMap).forEach(tags => {
      tags.forEach(tag => allTags.add(tag))
    })
    return Array.from(allTags).sort()
  }

  // Rechercher des composants par tags
  const findComponentsByTags = (searchTags, componentIds) => {
    if (!searchTags || searchTags.length === 0) return componentIds

    return componentIds.filter(id => {
      const componentTags = getTags(id)
      return searchTags.some(searchTag =>
        componentTags.some(tag => tag.includes(searchTag.toLowerCase()))
      )
    })
  }

  return {
    getTags,
    setTags,
    addTag,
    removeTag,
    getAllTags,
    findComponentsByTags,
    tagsMap
  }
}

export default useComponentTags
