import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  HiDocumentCheck,
  HiBuildingLibrary,
  HiBuildingStorefront,
  HiGlobeAmericas,
  HiIdentification,
  HiBanknotes,
  HiClipboardDocumentCheck,
  HiCalculator,
  HiUserGroup,
} from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './InvestorServices.module.css'

const ICONS = [
  HiDocumentCheck,
  HiBuildingLibrary,
  HiBuildingStorefront,
  HiGlobeAmericas,
  HiIdentification,
  HiBanknotes,
  HiClipboardDocumentCheck,
  HiCalculator,
  HiUserGroup,
]

export function InvestorServices() {
  const { t } = useTranslation('investor')
  const items = t('services.items', { returnObjects: true })
  const list = Array.isArray(items) ? items : []

  return (
    <section className={`section ${styles.section}`} aria-labelledby="investor-services-title">
      <Container>
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
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
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
