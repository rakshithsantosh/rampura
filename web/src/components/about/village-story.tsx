import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"

export function VillageStory() {
    return (
        <Section id="village-story" background="white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Narrative */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div>
                            <Badge variant="earthy" className="mb-4">The Soil We Stand On</Badge>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)] mb-6">
                                The Story of <span className="text-[var(--color-earth-brown)]">Rampura</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                <p>
                                    Generations ago, our ancestors settled on the fertile lands near the river Cauvery.
                                    They didn't just farm the land; they listened to it. They understood the rhythm of the seasons
                                    and the language of the soil.
                                </p>
                                <p>
                                    Today, Rampura is more than just a village on a map. It is a living testament to
                                    communal strength and agricultural heritage. Every grain we grow carries the
                                    blessings of the river and the hard work of a community that treats farming as a sacred duty.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                            <div>
                                <h4 className="font-heading font-bold text-lg text-[var(--color-primary-green)] mb-2">Heritage</h4>
                                <p className="text-sm text-slate-500">Farming practices preserved and perfected over decades.</p>
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-[var(--color-primary-green)] mb-2">Community</h4>
                                <p className="text-sm text-slate-500">Built by families who support and sustain each other.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative order-1 lg:order-2">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-stone-100 relative group">
                            {/* Placeholder */}
                            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-500">
                                [Authentic Village/Farmer Image]
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute inset-0 border-[1px] border-white/20 m-4 rounded-xl pointer-events-none" />
                        </div>
                        {/* Background Splashes */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-[var(--color-earth-brown)]/10 rounded-full blur-3xl opacity-60" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-[var(--color-fresh-leaf)]/10 rounded-full blur-3xl opacity-60" />
                    </div>
                </div>
            </Container>
        </Section>
    )
}
