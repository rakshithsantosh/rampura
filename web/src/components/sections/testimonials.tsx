import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        text: "Reviewing the quality of vegetables from Rampura Organics has been a revelation. The taste reminds me of my grandmother's cooking. Absolutely authentic.",
        author: "Priya Sharma",
        location: "Jaipur",
        role: "Home Chef"
    },
    {
        text: "I visited their farm last winter. seeing the care they put into the soil and crops built so much trust. I've been a subscriber ever since.",
        author: "Rajesh Verma",
        location: "Gurgaon",
        role: "Health Enthusiast"
    },
    {
        text: "Finally, organic produce that actually lasts and tastes fresh. My kids love the sweetness of their carrots and peas. Highly recommended!",
        author: "Anjali Gupta",
        location: "Delh",
        role: "Mother of two"
    }
]

export function TestimonialsSection() {
    return (
        <Section background="muted">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl font-bold text-[var(--color-neutral-dark)] mb-4">
                        Stories from <span className="text-[var(--color-primary-green)]">Our Community</span>
                    </h2>
                    <p className="text-slate-600">Join the growing family of conscious eaters.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="border-none shadow-md bg-white">
                            <CardContent className="pt-8 px-8 pb-8 relative">
                                <Quote className="h-10 w-10 text-[var(--color-primary-green)]/20 absolute top-4 left-4" />
                                <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-[var(--color-primary-green)] font-bold">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                                        <p className="text-xs text-slate-500">{t.role}, {t.location}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
