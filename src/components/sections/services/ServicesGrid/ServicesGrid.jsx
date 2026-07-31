import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard'
import { ServiceFilters } from '@/components/sections/services/ServiceFilters/ServiceFilters'
import styles from './ServicesGrid.module.css'

export function ServicesGrid({
  services,
  filters,
  activeFilter,
  onFilterChange,
}) {
  const { t } = useTranslation('services')

  return (
    <section
      id="services-grid"
      className={`section ${styles.section}`}
      aria-label={t('page.grid.title')}
    >
      <Container>
        <SectionHeading
          eyebrow={t('page.grid.eyebrow')}
          title={t('page.grid.title')}
          subtitle={t('page.grid.subtitle')}
          align="center"
        />

        <div className={styles.filters}>
          <ServiceFilters
            filters={filters}
            activeId={activeFilter}
            onChange={onFilterChange}
            resultCount={services.length}
          />
        </div>

        {services.length > 0 ? (
          <Row className="g-3 g-lg-4">
            {services.map((service) => (
              <Col key={service.slug} xs={12} md={6} xl={4}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        ) : (
          <p className={styles.empty}>{t('page.filters.empty')}</p>
        )}
      </Container>
    </section>
  )
}
