import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './ForeignInvestorSection.module.css'

export function ForeignInvestorSection() {
  const { t } = useTranslation('home')
  const items = t('foreignInvestor.items', { returnObjects: true })
  const list = Array.isArray(items) ? items : []

  return (
    <section className={styles.section} aria-labelledby="foreign-investor-title">
      <Container>
        <Row className={`${styles.row} align-items-center g-4 g-lg-5`}>
          <Col xs={12} lg={6} className={styles.copyCol}>
            <p className={styles.eyebrow}>{t('foreignInvestor.eyebrow')}</p>
            <h2 id="foreign-investor-title" className={`font-display ${styles.title}`}>
              {t('foreignInvestor.title')}
            </h2>
            <p className={styles.description}>{t('foreignInvestor.description')}</p>

            <ul className={styles.list}>
              {list.map((item) => (
                <li key={item} className={styles.item}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button to="/consultation" variant="primary" size="lg">
                {t('foreignInvestor.primaryCta')}
              </Button>
              <Button
                to="/foreign-investor"
                variant="outline"
                size="lg"
                className={styles.secondaryCta}
              >
                {t('foreignInvestor.secondaryCta')}
              </Button>
            </div>
          </Col>

          <Col xs={12} lg={6} className={styles.mediaCol}>
            <figure className={styles.media}>
              <img
                src="/assets/foreign-investor.webp"
                alt={t('foreignInvestor.imageAlt')}
                className={styles.image}
                width={1400}
                height={1080}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
