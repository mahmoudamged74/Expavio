import { Container, Row, Col } from 'react-bootstrap'
import { ContactHero } from '@/components/sections/contact/ContactHero/ContactHero'
import { ContactInformation } from '@/components/sections/contact/ContactInformation/ContactInformation'
import { ContactForm } from '@/components/sections/contact/ContactForm/ContactForm'
import { OfficeLocation } from '@/components/sections/contact/OfficeLocation/OfficeLocation'
import { MapSection } from '@/components/sections/contact/MapSection/MapSection'
import { SocialLinks } from '@/components/sections/contact/SocialLinks/SocialLinks'
import styles from './ContactPage.module.css'

export function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className={`section ${styles.content}`}>
        <Container>
          <Row className="g-4 g-xl-5">
            <Col xs={12} lg={5}>
              <ContactInformation />
            </Col>
            <Col xs={12} lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`section ${styles.location}`}>
        <Container>
          <Row className="g-4 g-xl-5 align-items-start">
            <Col xs={12} lg={4}>
              <OfficeLocation />
            </Col>
            <Col xs={12} lg={8}>
              <MapSection />
            </Col>
          </Row>
        </Container>
      </section>

      <SocialLinks />
    </>
  )
}
