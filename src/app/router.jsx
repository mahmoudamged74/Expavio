import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { LegalLayout } from '@/layouts/LegalLayout'
import { HomePage } from '@/pages/Home/HomePage'
import { AboutPage } from '@/pages/About/AboutPage'
import { ServicesPage } from '@/pages/Services/ServicesPage'
import { ServiceDetailsPage } from '@/pages/ServiceDetails/ServiceDetailsPage'
import { ForeignInvestorPage } from '@/pages/ForeignInvestor/ForeignInvestorPage'
import { ConsultationPage } from '@/pages/Consultation/ConsultationPage'
import { ContactPage } from '@/pages/Contact/ContactPage'
import { PrivacyPage } from '@/pages/Privacy/PrivacyPage'
import { TermsPage } from '@/pages/Terms/TermsPage'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailsPage />} />
          <Route path="foreign-investor" element={<ForeignInvestorPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>

        <Route element={<LegalLayout />}>
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
