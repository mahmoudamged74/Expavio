import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { HiUser, HiBuildingOffice, HiGlobeAlt, HiBuildingOffice2 } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './InvestorAudience.module.css'

const ICONS = [HiUser, HiBuildingOffice, HiGlobeAlt, HiBuildingOffice2]

export function InvestorAudience() {
  const { t } = useTranslation('investor')
  const items = t('audience.items', { returnObjects: true })
  const list = Array.isArray(items) ? items : []

  return (
    <section className={`section ${styles.section}`} aria-labelledby="investor-audience-title">
      <Container>
        <SectionHeading
          eyebrow={t('audience.eyebrow')}
          title={t('audience.title')}
          subtitle={t('audience.subtitle')}
          align="center"
        />

        <ul className={styles.grid}>
          {list.map((item, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <li key={item.title} className={styles.card} style={{ '--i': index }}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon />
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
