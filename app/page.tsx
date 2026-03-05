import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { CoreFeaturesCarousel } from "@/components/core-features-carousel"
import { RevolutCarousel } from "@/components/revolut-carousel"
import { PerspectiveCarousel } from "@/components/perspective-carousel"
import { ParallaxCarousel } from "@/components/parallax-carousel"
import { CardFanCarousel } from "@/components/card-fan-carousel"
import { PresenceCarousel } from "@/components/presence-carousel"
import { GalleryCarousel } from "@/components/gallery-carousel"
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
      <CoreFeaturesCarousel />
      <RevolutCarousel />
      <PerspectiveCarousel />
      <ParallaxCarousel />
      <CardFanCarousel />
      <PresenceCarousel />
      <GalleryCarousel />
      <TrailerSection />
      <WhySection />
      <RequirementsSection />
      <CountriesSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
