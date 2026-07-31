import { InvestorHero } from '@/components/sections/foreignInvestor/InvestorHero/InvestorHero'
import { InvestorAudience } from '@/components/sections/foreignInvestor/InvestorAudience/InvestorAudience'
import { InvestorServices } from '@/components/sections/foreignInvestor/InvestorServices/InvestorServices'
import { InvestorJourney } from '@/components/sections/foreignInvestor/InvestorJourney/InvestorJourney'
import { InvestorInquiryForm } from '@/components/sections/foreignInvestor/InvestorInquiryForm/InvestorInquiryForm'

export function ForeignInvestorPage() {
  return (
    <>
      <InvestorHero />
      <InvestorAudience />
      <InvestorServices />
      <InvestorJourney />
      <InvestorInquiryForm />
    </>
  )
}
