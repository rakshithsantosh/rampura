import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { BadgeCheck, FlaskConical, Award } from "lucide-react"

export function TrustCTA() {
    return (
        <Section id="trust-cta" background="white" className="py-24">
            <Container>
                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-slate-100 pb-12">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="h-16 w-16 bg-[var(--color-soft-golden)]/10 rounded-full flex items-center justify-center text-[var(--color-soft-golden)]">
                            <Award className="h-8 w-8" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-[var(--color-neutral-dark)]">Certified Organic</h3>
                        <p className="text-slate-600 text-sm max-w-xs">Officially certified to meet the highest organic farming standards.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                            <FlaskConical className="h-8 w-8" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-[var(--color-neutral-dark)]">Lab Tested Purity</h3>
                        <p className="text-slate-600 text-sm max-w-xs">Every batch undergoes rigorous testing for chemicals and heavy metals.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="h-16 w-16 bg-[var(--color-fresh-leaf)]/10 rounded-full flex items-center justify-center text-[var(--color-fresh-leaf)]">
                            <BadgeCheck className="h-8 w-8" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-[var(--color-neutral-dark)]">Quality Guaranteed</h3>
                        <p className="text-slate-600 text-sm max-w-xs">If it's not good enough for our family, it's not good enough for yours.</p>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-[var(--color-warm-off-white)] rounded-3xl p-8 md:p-16 text-center shadow-inner">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)] mb-6">
                        Ready to Taste the Difference?
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
                        Bring the purity of Rampura to your kitchen table today.
                        Experience food as nature intended.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="px-8 w-full sm:w-auto" asChild>
                            <Link href="/shop">Explore Our Products</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 w-full sm:w-auto" asChild>
                            <Link href="/kitchen">Visit Our Kitchen</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
