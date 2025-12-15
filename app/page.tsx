import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { PlansSection } from "@/components/home/plans-section"
import { ChannelsSection } from "@/components/home/channels-section"
import { LiveRadioSection } from "@/components/home/live-radio-section"
import { ArtistsSpotlightSection } from "@/components/home/artists-spotlight-section"
import { NewReleasesSection } from "@/components/home/new-releases-section"
import { AudioQualitySection } from "@/components/home/audio-quality-section"
import { PremiumContentSection } from "@/components/home/premium-content-section"
import { DevicesSection } from "@/components/home/devices-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <PlansSection />
      <ChannelsSection />
      <LiveRadioSection />
      <ArtistsSpotlightSection />
      <NewReleasesSection />
      <AudioQualitySection />
      <PremiumContentSection />
      <DevicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}



