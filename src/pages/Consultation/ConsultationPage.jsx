import { Container } from 'react-bootstrap'
import { ConsultationHero } from '@/components/sections/consultation/ConsultationHero/ConsultationHero'
import { MultiStepForm } from '@/components/sections/consultation/MultiStepForm/MultiStepForm'
import styles from './ConsultationPage.module.css'

export function ConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <section className={`section ${styles.content}`}>
        <Container>
          <MultiStepForm />
        </Container>
      </section>
    </>
  )
}
