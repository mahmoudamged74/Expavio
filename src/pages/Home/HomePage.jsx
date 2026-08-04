import { HeroSection } from '@/components/sections/HeroSection/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar/TrustBar'
import { ServicesSection } from '@/components/sections/ServicesSection/ServicesSection'
import { FullServicesSection } from '@/components/sections/FullServicesSection/FullServicesSection'
import { JourneySection } from '@/components/sections/JourneySection/JourneySection'
import { ForeignInvestorSection } from '@/components/sections/ForeignInvestorSection/ForeignInvestorSection'
import { WhyExpavio } from '@/components/sections/WhyExpavio/WhyExpavio'
import { FAQSection } from '@/components/sections/FAQSection/FAQSection'
import { CTASection } from '@/components/sections/CTASection/CTASection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <FullServicesSection />
      <JourneySection />
      <ForeignInvestorSection />
      <WhyExpavio />
      <FAQSection />
      <CTASection />
    </>
  )
}
