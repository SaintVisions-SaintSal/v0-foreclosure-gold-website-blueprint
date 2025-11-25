import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { LeadCategories } from "@/components/lead-categories"
import { HowItWorksMini } from "@/components/how-it-works-mini"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhySection />
      <LeadCategories />
      <HowItWorksMini />
      <Testimonials />
      <Footer />
      <SaintSalAssistant />
    </main>
  )
}
