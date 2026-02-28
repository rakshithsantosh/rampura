"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function VillageStory() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const imageContainerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !imageContainerRef.current || !imageRef.current) return

        const ctx = gsap.context(() => {
            // Text Reveal
            gsap.fromTo(
                ".reveal-story",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            )

            // Image Parallax Effect
            gsap.to(imageRef.current, {
                yPercent: 20, // Move image slightly slower than scroll
                ease: "none",
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="village-story"
            className="py-32 md:py-48 bg-[#1a1815] relative overflow-hidden"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left: Image with Parallax Depth */}
                    <div className="lg:col-span-5 order-2 lg:order-1 h-[60vh] lg:h-[80vh] w-full relative">
                        <div
                            ref={imageContainerRef}
                            className="w-full h-full overflow-hidden rounded-[2rem] bg-[#22211e] relative shadow-2xl"
                        >
                            <Image
                                ref={imageRef}
                                src="https://images.unsplash.com/photo-1596704017254-9b121068fba0?q=80&w=2574&auto=format&fit=crop"
                                alt="Authentic Village Life"
                                fill
                                className="object-cover scale-[1.2] opacity-80"
                            />
                            {/* Inner vignette for depth */}
                            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1815]/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right: Narrative */}
                    <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12 flex flex-col justify-center">
                        <div className="max-w-xl">
                            <span className="reveal-story font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-[#c9a75e] block mb-6">
                                The Soil We Stand On
                            </span>

                            <h2 className="reveal-story font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-[#e8e4db] mb-10 leading-[1.2]">
                                The Story of <br />
                                <span className="italic text-[#c9a75e] font-light">Rampura</span>
                            </h2>

                            <div className="reveal-story space-y-8 text-lg md:text-xl text-[#e8e4db]/70 leading-relaxed font-light">
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

                        <div className="reveal-story grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 pt-10 border-t border-[#e8e4db]/10 max-w-xl">
                            <div>
                                <h4 className="font-heading font-normal italic text-2xl text-[#c9a75e] mb-3">Heritage</h4>
                                <p className="text-base text-[#e8e4db]/60 font-light leading-relaxed">
                                    Farming practices preserved and perfected over decades in harmony with nature.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-heading font-normal italic text-2xl text-[#c9a75e] mb-3">Community</h4>
                                <p className="text-base text-[#e8e4db]/60 font-light leading-relaxed">
                                    Built by families who support and sustain each other through every harvest.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}

