import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TransparencySection() {
    return (
        <Section background="default" className="py-20">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
                        <Badge variant="trust" className="px-4 py-1">Farm Transparency</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-neutral-dark)]">
                            See Where Your <br />
                            <span className="text-[var(--color-earth-brown)]">Food Comes From.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We believe you have the right to know what's in your food. That's why we open our farm gates to you.
                            From seed selection to harvest, every step is documented and open for verification.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-[var(--color-primary-green)]" />
                                <span className="text-slate-700 font-medium">GPS Tagged Fields</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-[var(--color-primary-green)]" />
                                <span className="text-slate-700 font-medium">Open Farm Visits on Weekends</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="h-2 w-2 rounded-full bg-[var(--color-primary-green)]" />
                                <span className="text-slate-700 font-medium">Regular Soil Health Reports</span>
                            </li>
                        </ul>

                        <Button variant="outline" className="mt-4 border-[var(--color-earth-brown)] text-[var(--color-earth-brown)] hover:bg-[var(--color-earth-brown)] hover:text-white">
                            Schedule a Farm Visit
                        </Button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 order-1 lg:order-2">
                        <div className="space-y-4 mt-8">
                            <div className="aspect-[3/4] rounded-2xl bg-stone-200 overflow-hidden relative group">
                                <Image src="/transparency-farmer.jpeg" alt="Farmer Working" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                            </div>
                            <div className="aspect-square rounded-2xl bg-stone-200 overflow-hidden relative group">
                                <Image src="/transparency-soil.jpeg" alt="Soil Close-up" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-square rounded-2xl bg-stone-200 overflow-hidden relative group">
                                <Image src="/transparency-crops.jpeg" alt="Fresh Crops" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="aspect-[3/4] rounded-2xl bg-stone-200 overflow-hidden relative group">
                                <Image src="/transparency-sunlight.jpeg" alt="Sunlight on Fields" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
