import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const categories = [
    {
        title: "Heirloom Grains",
        description: "Ancient wheat varieties and traditional millets rich in nutrients.",
        image: "bg-amber-100", // Placeholder color
        link: "/shop?category=grains",
        isReady: true
    },
    {
        title: "Cold-Pressed Oils",
        description: "Extracted using traditional wood-pressed methods to retain aroma.",
        image: "bg-yellow-100", // Placeholder color
        link: "/shop?category=oils",
        isReady: true
    },
    {
        title: "Forest Honey",
        description: "Raw, unfiltered honey collected sustainably from wild hives.",
        image: "bg-orange-100", // Placeholder color
        link: "/shop?category=honey",
        isReady: false
    }
]

export function ProductOfferings() {
    return (
        <Section id="offerings" background="white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <Badge variant="secondary" className="mb-3">Our Harvest</Badge>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-neutral-dark)]">
                            What We Offer
                        </h2>
                    </div>
                    <Button variant="outline" className="hidden md:flex" asChild>
                        <Link href="/shop">
                            View All Products <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Image Area */}
                            <div className={`h-64 ${category.image} relative flex items-center justify-center`}>
                                <span className="text-stone-500 font-medium opacity-50">[Category Image]</span>

                                {!category.isReady && (
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-sm text-slate-600">
                                            Launching Soon
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <h3 className="font-heading font-bold text-xl text-[var(--color-neutral-dark)] mb-2 group-hover:text-[var(--color-primary-green)] transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {category.description}
                                </p>

                                {category.isReady ? (
                                    <Button variant="link" className="p-0 h-auto text-[var(--color-primary-green)]" asChild>
                                        <Link href={category.link}>
                                            Explore Category <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                ) : (
                                    <span className="text-sm text-slate-400 font-medium cursor-not-allowed">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/shop">
                            View All Products
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
