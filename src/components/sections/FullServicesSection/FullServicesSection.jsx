import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard'
import { useServiceCatalog } from '@/hooks/useServiceCatalog'
import styles from './FullServicesSection.module.css'

export function FullServicesSection() {
  const { t } = useTranslation('home')
  const { services } = useServiceCatalog()

  return (
    <section className={`section ${styles.section}`} aria-label={t('fullServices.title')}>
      <Container>
        <SectionHeading
          eyebrow={t('fullServices.eyebrow')}
          title={t('fullServices.title')}
          subtitle={t('fullServices.subtitle')}
          align="center"
        />

        <Row className="g-3 g-lg-4">
          {services.map((service) => (
            <Col key={service.slug} xs={12} md={6} xl={4}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
