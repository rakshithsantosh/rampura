import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Leaf, Droplets, Users, ShieldCheck } from "lucide-react"

const values = [
    {
        icon: Leaf,
        title: "Sustainable Farming",
        description: "We give back to the soil more than we take, ensuring the land remains fertile for generations."
    },
    {
        icon: Droplets,
        title: "Chemical-Free",
        description: "Zero pesticides, zero synthetic fertilizers. Just pure, clean water and natural compost."
    },
    {
        icon: Users,
        title: "Community First",
        description: "Empowering local farmers with fair wages and a supportive ecosystem for growth."
    },
    {
        icon: ShieldCheck,
        title: "Transparency",
        description: "From seed to shelf, we maintain complete honesty about our processes and sourcing."
    }
]

export function OurValues() {
    return (
        <Section id="values" background="muted">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)]">
                        The Values That Guide Us
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        We believe that how we grow food matters just as much as what we grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col items-center text-center">
                            <div className="h-14 w-14 rounded-full bg-[var(--color-primary-green)]/10 flex items-center justify-center mb-6 text-[var(--color-primary-green)]">
                                <value.icon className="h-7 w-7" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-[var(--color-neutral-dark)] mb-3">
                                {value.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
