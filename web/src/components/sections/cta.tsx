import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <Section className="py-24 bg-[var(--color-earth-brown)] relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-20" />

            <Container className="relative z-10 text-center space-y-8">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                    Ready to switch to <br />
                    <span className="text-[var(--color-soft-golden)]">Pure Living?</span>
                </h2>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                    Join thousands of families who trust Rampura Organics for their daily nutrition.
                    Healthy soil, healthy food, healthy you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                    <Button size="lg" className="rounded-full bg-white text-[var(--color-earth-brown)] hover:bg-slate-100 px-8 h-14 font-bold text-lg" asChild>
                        <Link href="https://rampura-organics-india-pvt-ltd.myshopify.com/" target="_blank" rel="noopener noreferrer">
                            Shop Organic Now
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 px-8 h-14 font-semibold">
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
