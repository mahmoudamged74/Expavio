import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  HiShieldCheck,
  HiEyeDropper,
  HiPuzzlePiece,
  HiLightBulb,
  HiCheckBadge,
  HiUsers,
} from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ValuesGrid.module.css'

const ICONS = [
  HiShieldCheck,
  HiEyeDropper,
  HiPuzzlePiece,
  HiLightBulb,
  HiCheckBadge,
  HiUsers,
]

export function ValuesGrid() {
  const { t } = useTranslation('about')
  const items = t('values.items', { returnObjects: true })
  const list = Array.isArray(items) ? items : []

  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-values-title">
      <Container>
        <SectionHeading
          eyebrow={t('values.eyebrow')}
          title={t('values.title')}
          subtitle={t('values.subtitle')}
          align="center"
        />

        <ul className={styles.grid}>
          {list.map((item, index) => {
            const Icon = ICONS[index] ?? HiCheckBadge

            return (
              <li key={item.title} className={styles.card} style={{ '--i': index }}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon />
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
