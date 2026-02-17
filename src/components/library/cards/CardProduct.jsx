import { useState } from 'react'
import styles from './CardProduct.module.css'

/**
 * CardProduct - Carte produit avec hover reveal
 */
export function CardProduct({
  image = '/R35.jpg',
  title = 'Product Name',
  subtitle = 'Category',
  price = '$99',
  className = '',
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`${styles.product} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.productImageWrap}>
        <img src={image} alt={title} className={styles.productImage} />
        <div className={`${styles.productOverlay} ${hovered ? styles.productOverlayVisible : ''}`}>
          <button className={styles.productAction}>View Details</button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productSubtitle}>{subtitle}</span>
        <h3 className={styles.productTitle}>{title}</h3>
        <span className={styles.productPrice}>{price}</span>
      </div>
    </div>
  )
}
