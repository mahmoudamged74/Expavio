import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { HiEye, HiFlag, HiHandRaised } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './VisionMission.module.css'

const CARDS = [
  { key: 'vision', Icon: HiEye, tone: 'blue' },
  { key: 'mission', Icon: HiFlag, tone: 'teal' },
  { key: 'promise', Icon: HiHandRaised, tone: 'gold' },
]

export function VisionMission() {
  const { t } = useTranslation('about')

  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-vision-title">
      <div className={styles.glow} aria-hidden="true" />
      <Container className={styles.container}>
        <SectionHeading
          eyebrow={t('visionMission.eyebrow')}
          title={t('visionMission.title')}
          align="center"
        />

        <div className={styles.grid}>
          {CARDS.map(({ key, Icon, tone }, index) => (
            <article
              key={key}
              className={`${styles.card} ${styles[tone]}`}
              style={{ '--i': index }}
            >
              <span className={styles.iconWrap} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={styles.cardTitle}>{t(`visionMission.${key}.label`)}</h3>
              <p className={styles.cardBody}>{t(`visionMission.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
