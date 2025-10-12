import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import PortfolioGrid from '@/components/PortfolioGrid'
import ProcessSteps from '@/components/ProcessSteps'
import PricingBands from '@/components/PricingBands'
import FAQ from '@/components/FAQ'
import { organizationJsonLd } from '@/lib/structuredData'

export default function HomePage() {
  const orgJson = organizationJsonLd()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />
      <Hero />
      <TrustBar />
      <PortfolioGrid />
      <ProcessSteps />
      <PricingBands />
      <FAQ />
    </>
  )
}
