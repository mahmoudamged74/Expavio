import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './WhyExpavio.module.css'

export function WhyExpavio() {
  const { t } = useTranslation('home')
  const points = t('why.points', { returnObjects: true })
  const list = Array.isArray(points) ? points : []

  return (
    <section className={styles.section} aria-labelledby="why-expavio-title">
      <div className={styles.glow} aria-hidden="true" />
      <Container>
        <Row className={`${styles.row} g-4 g-xl-5`}>
          <Col xs={12} lg={5}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>{t('why.eyebrow')}</p>
              <h2 id="why-expavio-title" className={`font-display ${styles.heading}`}>
                {t('why.title')}
              </h2>
              <p className={styles.lede}>{t('why.subtitle')}</p>
              <span className={styles.mark} aria-hidden="true" />

              <div className={styles.logoCard}>
                <img
                  src="/assets/expavio.png"
                  alt="Expavio"
                  className={styles.logo}
                  width={480}
                  height={320}
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
