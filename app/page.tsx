import { Hero } from "@/components/home/hero"
import { Ticker } from "@/components/ticker"
import { AboutPreview } from "@/components/home/about-preview"
import { OffersPreview } from "@/components/home/offers-preview"
import { Personas } from "@/components/home/personas"
import { SystemPillars } from "@/components/home/system-pillars"
import { Testimonials } from "@/components/home/testimonials"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <AboutPreview />
      <OffersPreview />
      <Personas />
      <SystemPillars />
      <Testimonials />
      <FinalCta />
    </>
  )
}
