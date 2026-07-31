import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { HiSparkles } from 'react-icons/hi2'
import styles from './LeadershipSection.module.css'

export function LeadershipSection() {
  const { t } = useTranslation('about')
  const pillars = t('leadership.pillars', { returnObjects: true })
  const list = Array.isArray(pillars) ? pillars : []

  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-leadership-title">
      <Container>
        <Row className="g-4 g-xl-5 align-items-center">
          <Col xs={12} lg={5}>
            <p className={styles.eyebrow}>{t('leadership.eyebrow')}</p>
            <h2 id="about-leadership-title" className={`font-display ${styles.title}`}>
              {t('leadership.title')}
            </h2>
            <p className={styles.description}>{t('leadership.description')}</p>

            <p className={styles.note}>
              <span className={styles.noteIcon} aria-hidden="true">
                <HiSparkles />
              </span>
              {t('leadership.note')}
            </p>
          </Col>

          <Col xs={12} lg={7}>
            <ul className={styles.pillars}>
              {list.map((pillar, index) => (
                <li key={pillar.title} className={styles.pillar} style={{ '--i': index }}>
                  <span className={styles.bar} aria-hidden="true" />
                  <div className={styles.pillarBody}>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarText}>{pillar.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
