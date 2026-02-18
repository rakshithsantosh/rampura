import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/hero"
import { VillageStory } from "@/components/about/village-story"
import { BrandTimeline } from "@/components/about/timeline"
import { OurValues } from "@/components/about/values"
import { ProductOfferings } from "@/components/about/products"
import { VisionSection } from "@/components/about/vision"
import { TrustCTA } from "@/components/about/trust-cta"

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[var(--color-warm-off-white)]">
            <Navbar />
            <AboutHero />
            <VillageStory />
            <BrandTimeline />
            <OurValues />
            <ProductOfferings />
            <VisionSection />
            <TrustCTA />
            <Footer />
        </main>
    )
}
