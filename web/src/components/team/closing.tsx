import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Sprout } from "lucide-react"

export function ClosingSection() {
    return (
        <Section id="closing" background="brand" className="text-center">
            <Container className="max-w-3xl">
                <Sprout className="h-12 w-12 mx-auto text-white/40 mb-8" />
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                    Rooted in Soil. United in Purpose.
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    From the hands that sow the seeds to the hearts that deliver the harvest,
                    every member of our team is dedicated to one simple promise:
                    <span className="font-semibold text-white"> Purity you can trust.</span>
                </p>
            </Container>
        </Section>
    )
}
