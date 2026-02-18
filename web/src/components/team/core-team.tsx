import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const teamMembers = [
    {
        name: "Amit Singh",
        role: "Soil Health Expert",
        description: "Ensures the nutrient balance of our lands using natural composting methods."
    },
    {
        name: "Priya Gowda",
        role: "Quality Control",
        description: "Meticulously checks every batch of produce before it's packed."
    },
    {
        name: "Ravi Kumar",
        role: "Logistics Manager",
        description: "Coordinates the smooth flow of goods from our village to the city centers."
    },
    {
        name: "Dr. Ananya Reddy",
        role: "Sustainability Advisor",
        description: "Guiding our transition to zero-waste farming and renewable energy use."
    },
    {
        name: "Suresh & Team",
        role: "Harvest Technicians",
        description: "The hands that pick your food at the peak of freshness."
    },
    {
        name: "Meera Krishnan",
        role: "Customer Experience",
        description: "Listening to your feedback to help us serve you better every day."
    }
]

export function CoreTeamSection() {
    return (
        <Section id="core-team" background="muted" className="py-24">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold text-[var(--color-neutral-dark)]">
                        The Core Team
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        United by a passion for purity and a commitment to the land.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center group">
                            <div className="h-24 w-24 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden border-2 border-white shadow-inner group-hover:border-[var(--color-fresh-leaf)] transition-colors">
                                {/* Placeholder Avatar */}
                                <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
                                    [Photo]
                                </div>
                            </div>

                            <h3 className="font-heading font-bold text-lg text-[var(--color-neutral-dark)] mb-1">
                                {member.name}
                            </h3>
                            <p className="text-[var(--color-primary-green)] text-xs font-bold uppercase tracking-wider mb-4">
                                {member.role}
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
