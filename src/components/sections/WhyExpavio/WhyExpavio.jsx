import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useWhyUs } from '@/hooks/useWhyUs'
import styles from './WhyExpavio.module.css'

export function WhyExpavio() {
  const { t } = useTranslation('home')
  const { data: whyUs } = useWhyUs()
  const fallbackPoints = t('why.points', { returnObjects: true })

  const title = whyUs?.title ?? t('why.title')
  const lede = whyUs?.description ?? t('why.subtitle')
  const logoSrc = whyUs?.image_url || '/assets/expavio-logo.webp'

  const list =
    Array.isArray(whyUs?.items) && whyUs.items.length > 0
      ? whyUs.items.map((item) => item.title).filter(Boolean)
      : Array.isArray(fallbackPoints)
        ? fallbackPoints
        : []

  return (
    <section className={styles.section} aria-labelledby="why-expavio-title">
      <div className={styles.glow} aria-hidden="true" />
      <Container>
        <Row className={`${styles.row} g-4 g-xl-5`}>
          <Col xs={12} lg={5}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>{t('why.eyebrow')}</p>
              <h2
                id="why-expavio-title"
                className={`font-display ${styles.heading}`}
              >
                {title}
              </h2>
              <p className={styles.lede}>{lede}</p>
              <span className={styles.mark} aria-hidden="true" />

              <div className={styles.logoCard}>
                <img
                  src={logoSrc}
                  alt="Expavio"
                  className={styles.logo}
                  width={240}
                  height={80}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <ol className={styles.rail}>
              {list.map((point, index) => (
                <li key={point} className={styles.point}>
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className={styles.text}>{point}</p>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
