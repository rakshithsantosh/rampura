import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

const leaders = [
    {
        name: "Krishna Prasad",
        role: "Founder",
        bio: "A passionate individual wanting to link the right cords of availability with requirement. Available in abundance, is the roots of natural farming with not wanting to use hazardous chemicals in all agricultural produce. Requirement by all humans at large is food consumed being safe, healthy and hearty.",
        imageFromColor: "bg-emerald-100", // Placeholder
        align: "right"
    }
]

export function LeadershipSection() {
    return (
        <section id="leadership" className="py-24 md:py-32 bg-gradient-to-b from-[var(--color-primary-green)]/5 to-[var(--background)] relative overflow-hidden">
            <Container>
                <div className="space-y-24">
                    {leaders.map((leader, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image Column */}
                            <div className="w-full lg:w-5/12">
                                <div className={`aspect-[4/5] w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-sm ${leader.imageFromColor} relative group`}>
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-[var(--foreground)]/30 font-medium">
                                        [{leader.name}]
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full lg:w-7/12 space-y-6 text-center lg:text-left">
                                <div className="space-y-2">
                                    <h2 className="font-sans text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight">
                                        {leader.name}
                                    </h2>
                                    <p className="text-[var(--color-primary-green)] font-semibold tracking-wide uppercase text-sm">
                                        {leader.role}
                                    </p>
                                </div>

                                <blockquote className="font-heading italic text-xl lg:text-2xl text-[var(--foreground)]/90 leading-relaxed border-l-2 border-[var(--color-primary-green)]/30 pl-6 py-2 my-8">
                                    "A passionate individual wanting to link the right cords of availability with requirement."
                                </blockquote>

                                <p className="text-lg text-[var(--foreground)]/70 leading-relaxed font-light max-w-2xl">
                                    Available in abundance, is the roots of natural farming with not wanting to use hazardous chemicals in all agricultural produce. Requirement by all humans at large is food consumed being safe, healthy and hearty.
                                </p>

                                {/* Socials Placeholder */}
                                <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6">
                                    <Link href="#" className="p-3 bg-white/50 border border-[var(--foreground)]/5 rounded-full hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
                                        <Linkedin className="h-5 w-5 text-[var(--foreground)]/60" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Subtle divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent mt-24 md:mt-32" />
            </Container>
        </section>
    )
}
