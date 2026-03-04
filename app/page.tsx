import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TrailerSection } from "@/components/trailer-section"
import { WhySection } from "@/components/why-section"
import { RequirementsSection } from "@/components/requirements-section"
import { CountriesSection } from "@/components/countries-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <FloatingCta />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <FeaturesSection />
      <TrailerSection />
      <WhySection />
      <RequirementsSection />
      <CountriesSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
