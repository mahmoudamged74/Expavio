import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { Button } from '@/components/ui/Button/Button'
import { getServiceIcon } from '@/features/services/icons'
import styles from './ServiceDetailsHero.module.css'

export function ServiceDetailsHero({ service }) {
  const { t, i18n } = useTranslation('services')
  const isAr = i18n.language?.startsWith('ar')
  const Chevron = isAr ? HiChevronLeft : HiChevronRight
  const Icon = getServiceIcon(service.icon)

  return (
    <section className={styles.hero} aria-labelledby="service-details-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.pattern} aria-hidden="true" />

      <Container className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">{t('details.breadcrumbHome')}</Link>
          <Chevron className={styles.sep} aria-hidden="true" />
          <Link to="/services">{t('details.breadcrumbServices')}</Link>
          <Chevron className={styles.sep} aria-hidden="true" />
          <span aria-current="page">{service.title}</span>
        </nav>

        <div className={styles.inner}>
          <span className={styles.iconWrap} aria-hidden="true">
            <Icon />
          </span>

          <div className={styles.copy}>
            <h1 id="service-details-title" className={`font-display ${styles.title}`}>
              {service.title}
            </h1>
            <p className={styles.description}>{service.description}</p>

            <div className={styles.actions}>
              <Button href="#service-inquiry" variant="primary" size="lg">
                {t('details.primaryCta')}
              </Button>
              <Button to="/contact" variant="outline" size="lg" className={styles.secondaryCta}>
                {t('details.secondaryCta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
