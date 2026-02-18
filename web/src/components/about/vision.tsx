import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Quote } from "lucide-react"

export function VisionSection() {
    return (
        <Section id="vision" background="brand" className="text-center relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern-leaves.png')] bg-repeat opacity-10" />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Quote className="h-12 w-12 mx-auto text-white/40" />

                    <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                        Our Vision for the <br />
                        <span className="text-[var(--color-neutral-dark)]">Future of Farming</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                        "We dream of a world where food is not just a commodity, but a connection.
                        A connection between the hands that grow it and the families that consume it.
                        Where every meal starts with soil, ensuring health for the planet and purity for the plate."
                    </p>

                    <div className="pt-8">
                        <span className="font-heading font-bold text-lg tracking-widest uppercase text-white/80">
                            — The Rampura Collective
                        </span>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
