import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ServiceDetailsHero } from '@/components/sections/serviceDetails/ServiceDetailsHero/ServiceDetailsHero'
import { ServiceOverview } from '@/components/sections/serviceDetails/ServiceOverview/ServiceOverview'
import { SubServicesList } from '@/components/sections/serviceDetails/SubServicesList/SubServicesList'
import { TargetAudience } from '@/components/sections/serviceDetails/TargetAudience/TargetAudience'
import { ServiceProcess } from '@/components/sections/serviceDetails/ServiceProcess/ServiceProcess'
import { ServiceDeliverables } from '@/components/sections/serviceDetails/ServiceDeliverables/ServiceDeliverables'
import { RelatedServices } from '@/components/sections/serviceDetails/RelatedServices/RelatedServices'
import { ServiceFAQ } from '@/components/sections/serviceDetails/ServiceFAQ/ServiceFAQ'
import { ServiceInquiryForm } from '@/components/sections/serviceDetails/ServiceInquiryForm/ServiceInquiryForm'
import { StickyConsultationCard } from '@/components/sections/serviceDetails/StickyConsultationCard/StickyConsultationCard'
import { useServiceDetails } from '@/hooks/useServiceCatalog'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'
import styles from './ServiceDetailsPage.module.css'

export function ServiceDetailsPage() {
  const { slug } = useParams()
  const { service } = useServiceDetails(slug)

  if (!service) return <NotFoundPage />

  const items = Array.isArray(service.items) ? service.items : []

  return (
    <>
      <ServiceDetailsHero service={service} />

      <section className={`section ${styles.content}`}>
        <Container>
          <Row className="g-4 g-xl-5">
            <Col xs={12} lg={8} className="order-2 order-lg-1">
              <div className={styles.main}>
                <ServiceOverview service={service} />
                <SubServicesList items={items} />
                <TargetAudience audience={service.audience} />
                <ServiceProcess steps={service.process} />
                <ServiceDeliverables deliverables={service.deliverables} />
                <RelatedServices services={service.related} />
                <ServiceFAQ items={service.faq} />
                <ServiceInquiryForm
                  serviceId={service.id}
                  serviceSlug={service.slug}
                  serviceTitle={service.title}
                />
              </div>
            </Col>

            <Col xs={12} lg={4} className="order-1 order-lg-2">
              <StickyConsultationCard service={service} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
