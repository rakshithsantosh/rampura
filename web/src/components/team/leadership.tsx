import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

const leaders = [
    {
        name: "Rajesh Kumar",
        role: "Founder & Lead Culturalist",
        bio: "A third-generation farmer with a degree in Agricultural Science. Rajesh combines traditional wisdom with modern organic techniques to ensure every harvest is better than the last.",
        imageFromColor: "bg-emerald-100", // Placeholder
        align: "right"
    },
    {
        name: "Lakshmi Devi",
        role: "Head of Operations",
        bio: "The backbone of Rampura. Lakshmi manages the intricate logistics of farm-to-table delivery, ensuring that our produce reaches your kitchen as fresh as it left the soil.",
        imageFromColor: "bg-amber-100", // Placeholder
        align: "left"
    }
]

export function LeadershipSection() {
    return (
        <Section id="leadership" background="white" className="py-24">
            <Container>
                <div className="space-y-24">
                    {leaders.map((leader, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image Column */}
                            <div className="w-full lg:w-1/2">
                                <div className={`aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl ${leader.imageFromColor} relative group`}>
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                                        [{leader.name}]
                                    </div>
                                    <div className="absolute inset-0 border-[1px] border-white/20 m-4 rounded-2xl pointer-events-none" />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                                <Badge variant="secondary" className="bg-[var(--color-primary-green)]/10 text-[var(--color-primary-green)] border-none px-4 py-1.5">
                                    {leader.role}
                                </Badge>
                                <h2 className="font-heading text-4xl font-bold text-[var(--color-neutral-dark)]">
                                    {leader.name}
                                </h2>
                                <div className="w-16 h-1 bg-[var(--color-earth-brown)] mx-auto lg:mx-0 rounded-full" />
                                <p className="text-lg text-slate-600 leading-relaxed font-light">
                                    {leader.bio}
                                </p>

                                {/* Socials Placeholder */}
                                <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                                    <Link href="#" className="p-2 bg-slate-100 rounded-full hover:bg-[var(--color-primary-green)] hover:text-white transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                    <Link href="#" className="p-2 bg-slate-100 rounded-full hover:bg-[var(--color-primary-green)] hover:text-white transition-colors">
                                        <Twitter className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
