import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Sprout, Tractor, Factory, PackageCheck, HeartHandshake } from "lucide-react"

const timelineSteps = [
    {
        icon: Sprout,
        title: "The Roots",
        description: "Selecting traditional seeds suited for our native soil."
    },
    {
        icon: Tractor,
        title: "Sustainable Farming",
        description: "Nurturing crops with natural fertilizers and river water."
    },
    {
        icon: Factory,
        title: "Honest Processing",
        description: "Minimal processing to retain natural nutrients and flavor."
    },
    {
        icon: PackageCheck,
        title: "Quality Promise",
        description: "Rigorous testing to ensure 100% chemical-free produce."
    },
    {
        icon: HeartHandshake,
        title: "From Us to You",
        description: "Delivering the purity of Rampura directly to your kitchen."
    }
]

export function BrandTimeline() {
    return (
        <Section id="timeline" background="default" className="py-20">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold text-[var(--color-neutral-dark)]">
                        From Our Village to Your Home
                    </h2>
                    <div className="h-1 w-24 bg-[var(--color-earth-brown)] mx-auto mt-4 rounded-full" />
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary-green)]/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {timelineSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-50 shadow-lg flex items-center justify-center mb-6 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--color-fresh-leaf)]">
                                    <step.icon className="h-10 w-10 text-[var(--color-primary-green)]" />
                                </div>
                                <h3 className="font-heading font-bold text-lg text-[var(--color-neutral-dark)] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 max-w-[200px]">
                                    {step.description}
                                </p>

                                {/* Mobile/Tablet Connector Line - Vertical */}
                                {index !== timelineSteps.length - 1 && (
                                    <div className="lg:hidden h-12 w-0.5 bg-[var(--color-primary-green)]/30 my-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
