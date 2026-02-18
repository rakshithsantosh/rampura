import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image - Fallback Gradient */}
            <div
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a472a] via-[#2E7D32] to-[#558b2f]"
            >
                <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" /> {/* Texture */}
            </div>

            <Container className="relative z-10 flex h-full flex-col justify-center text-white">
                <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center space-x-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-[var(--color-fresh-leaf)] animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">100% Chemical-Free Farming</span>
                    </div>

                    <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl md:text-7xl drop-shadow-lg">
                        Certified Trust from <br />
                        <span className="text-[var(--color-soft-golden)]">Indian Soil.</span>
                    </h1>

                    <p className="max-w-xl text-lg text-white/90 md:text-xl font-light">
                        Pure, authentic, and lab-tested organic produce directly from our farms to your table. Experience the taste of true purity.
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pt-4">
                        <Button size="lg" className="rounded-full text-base font-semibold px-8 h-14" asChild>
                            <Link href="https://rampura-organics-india-pvt-ltd.myshopify.com/" target="_blank" rel="noopener noreferrer">
                                Explore Products
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-white text-white hover:bg-white hover:text-[var(--color-primary-green)] px-8 h-14"
                        >
                            Our Farming Story
                            <Leaf className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
                <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="24" height="40" rx="12" stroke="currentColor" strokeWidth="2" />
                    <circle cx="13" cy="11" r="3" fill="var(--color-fresh-leaf)" className="animate-scroll" />
                </svg>
            </div>
        </section>
    )
}
