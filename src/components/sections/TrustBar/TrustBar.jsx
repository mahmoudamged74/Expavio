import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { HiOutlineCheckBadge } from 'react-icons/hi2'
import styles from './TrustBar.module.css'

export function TrustBar() {
  const { t } = useTranslation('home')
  const items = t('trustBar.items', { returnObjects: true })

  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className={styles.bar} aria-label={t('trustBar.items.0')}>
      <Container>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              <HiOutlineCheckBadge className={styles.icon} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
