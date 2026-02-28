import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
    return (
        <Section id="our-story" background="white">
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square bg-slate-100 group">
                        {/* 
                          * TO ADD AN IMAGE:
                          * 1. Place your image file (e.g., "about-farm.jpg") inside the "public" folder.
                          * 2. Delete the placeholder <div> below.
                          * 3. Uncomment the <Image> tag below and adjust the 'src' to match your file name.
                          */}

                        {/*<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-green)]/10 to-[var(--color-earth-brown)]/20 flex flex-col items-center justify-center text-[var(--color-neutral-dark)]/60 font-medium px-4 text-center">
                            <span>[Authentic Farming Image]</span>
                            <span className="text-sm font-normal mt-2 opacity-80">See code for instructions</span>
                        </div>*/}

                        <Image
                            src="/about-farm.jpeg"
                            alt="Rampura Organics farming legacy"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-[var(--color-primary-green)]/10 blur-3xl z-10 pointer-events-none" />
                        <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-[var(--color-earth-brown)]/10 blur-3xl z-10 pointer-events-none" />
                    </div>

                    <div className="space-y-6">
                        <Badge variant="earthy" className="px-4 py-1 text-sm">
                            Our Legacy
                        </Badge>
                        <h2 className="font-heading text-4xl font-bold text-[var(--color-neutral-dark)]">
                            Rooted in Tradition, <br />
                            <span className="text-[var(--color-primary-green)]">Grown with Care.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            At Rampura Organics, we believe that true nourishment comes from the earth,
                            untouched by chemicals. Our farming practices are a tribute to Indian agricultural
                            wisdom—using natural fertilizers, traditional seeds, and the purest water sources.
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-4">
                            {[
                                "100% Organic Certified",
                                "Direct From Farmers",
                                "Chemical Free",
                                "Lab Tested Quality"
                            ].map((item) => (
                                <div key={item} className="flex items-center space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-[var(--color-fresh-leaf)]" />
                                    <span className="font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="default" size="lg" className="px-8" asChild>
                            <Link href="/about">
                                Read Our Full Story
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
