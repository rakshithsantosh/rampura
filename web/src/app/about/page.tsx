import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/hero"
import { VillageStory } from "@/components/about/village-story"
import { BrandTimeline } from "@/components/about/timeline"
import { OurValues } from "@/components/about/values"
import { ProductOfferings } from "@/components/about/products"
import { TrustCTA } from "@/components/about/trust-cta"
import { FilmGrain } from "@/components/ui/film-grain"
import { AmbientParticles } from "@/components/ui/ambient-particles"

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#1a1815] text-[#e8e4db] selection:bg-[#c9a75e] selection:text-[#1a1815]">
            <FilmGrain />
            <AmbientParticles />

            <Navbar />

            <div className="relative z-10 w-full overflow-hidden">
                <AboutHero />
                <VillageStory />
                <ProductOfferings />
                <BrandTimeline />
                <OurValues />
                <TrustCTA />
            </div>

            <div className="relative z-20">
                <Footer />
            </div>
        </main>
    )
}
