import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Leaf, Award, Sun, FlaskConical } from "lucide-react"

const features = [
    {
        icon: FlaskConical,
        title: "100% Chemical Free",
        description: "Zero tolerance for synthetic pesticides or fertilizers. Pure nature."
    },
    {
        icon: Award,
        title: "Eco-Certified",
        description: "Rigorous standards met for organic certification and sustainability."
    },
    {
        icon: Sun,
        title: "Direct From Farm",
        description: "No middlemen. From our soil directly to your kitchen shelf."
    },
    {
        icon: Leaf,
        title: "Nutrient Dense",
        description: "Grown in enriched soil for maximum flavor and health benefits."
    }
]

export function WhyChooseUsSection() {
    return (
        <Section background="brand" className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay" />

            <Container className="relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-heading text-4xl font-bold text-white">
                        Why Choose Rampura?
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        We don't just grow food; we cultivate trust. Every grain tells a story of purity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors duration-300"
                        >
                            <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <feature.icon className="h-8 w-8 text-[var(--color-primary-green)]" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
