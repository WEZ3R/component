import { IconStar } from '../../ui/Icons'
import styles from './CardTestimonial.module.css'

/**
 * CardTestimonial - Carte de temoignage
 */
export function CardTestimonial({
  quote = 'This product has completely transformed how we work. Highly recommended!',
  author = 'Jane Doe',
  role = 'CEO at Company',
  avatar = null,
  rating = 5,
  className = '',
}) {
  return (
    <div className={`${styles.testimonial} ${className}`}>
      <div className={styles.testimonialStars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}><IconStar size={16} /></span>
        ))}
      </div>
      <blockquote className={styles.testimonialQuote}>"{quote}"</blockquote>
      <div className={styles.testimonialAuthor}>
        <div className={styles.testimonialAvatar}>
          {avatar ? <img src={avatar} alt={author} /> : author.charAt(0)}
        </div>
        <div>
          <div className={styles.testimonialName}>{author}</div>
          <div className={styles.testimonialRole}>{role}</div>
        </div>
      </div>
    </div>
  )
}
