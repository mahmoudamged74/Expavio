import { AboutHero } from '@/components/sections/about/AboutHero/AboutHero'
import { CompanyStory } from '@/components/sections/about/CompanyStory/CompanyStory'
import { VisionMission } from '@/components/sections/about/VisionMission/VisionMission'
import { ValuesGrid } from '@/components/sections/about/ValuesGrid/ValuesGrid'
import { WorkMethodology } from '@/components/sections/about/WorkMethodology/WorkMethodology'
import { LeadershipSection } from '@/components/sections/about/LeadershipSection/LeadershipSection'
import { AboutCTA } from '@/components/sections/about/AboutCTA/AboutCTA'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <ValuesGrid />
      <WorkMethodology />
      <LeadershipSection />
      <AboutCTA />
    </>
  )
}
