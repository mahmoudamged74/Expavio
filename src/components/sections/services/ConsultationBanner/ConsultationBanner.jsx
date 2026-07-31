import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './ConsultationBanner.module.css'

export function ConsultationBanner() {
  const { t } = useTranslation('services')

  return (
    <section className={`section ${styles.section}`} aria-labelledby="services-banner-title">
      <Container>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <h2 id="services-banner-title" className={`font-display ${styles.title}`}>
              {t('page.banner.title')}
            </h2>
            <p className={styles.subtitle}>{t('page.banner.subtitle')}</p>
            <div className={styles.actions}>
              <Button to="/consultation" variant="primary" size="lg">
                {t('page.banner.primaryCta')}
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className={styles.secondaryCta}
              >
                {t('page.banner.secondaryCta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
