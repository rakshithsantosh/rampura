"use client"

import React, { useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const pillars = [
    {
        id: "01",
        title: "100% Chemical Free",
        description: "Zero tolerance for synthetic pesticides or fertilizers. Pure nature."
    },
    {
        id: "02",
        title: "Eco-Certified",
        description: "Rigorous standards met for organic certification and sustainability."
    },
    {
        id: "03",
        title: "Direct From Farm",
        description: "No middlemen. From our soil directly to your kitchen shelf."
    },
    {
        id: "04",
        title: "Nutrient Dense",
        description: "Grown in enriched soil for maximum flavor and health benefits."
    }
]

export function WhyChooseUsSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const pillarsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            )

            gsap.fromTo(textRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            )

            gsap.fromTo(pillarsRef.current,
                { opacity: 0, x: 20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <Section
            ref={sectionRef}
            className="relative overflow-hidden py-24 lg:py-36 bg-[#FCFBF8]"
        >
            <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Top Heading */}
                <div ref={headingRef} className="mb-16 lg:mb-24 will-change-transform opacity-0">
                    <h2 className="font-heading font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                        Why Choose Rampura<span className="text-[var(--color-primary-green)]">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Brand Statement */}
                    <div ref={textRef} className="lg:col-span-5 will-change-transform opacity-0">
                        <div className="prose prose-lg">
                            <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed mb-8 font-light">
                                "We don't just grow food; we cultivate trust. Every grain tells a story of absolute purity and uncompromising quality."
                            </p>
                            <div className="w-12 h-px bg-[var(--color-primary-green)] mb-8 opacity-40"></div>
                            <p className="text-gray-500 leading-relaxed font-light text-[15px] lg:text-base">
                                For generations, we have honored the land, working in harmony with nature to bring you produce that is as authentic as its origins. Our commitment goes beyond organic farming—it is a dedication to your health, the environment, and the timeless traditions of pure agriculture.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Stacked Pillars */}
                    <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-0">
                        <div className="border-t border-gray-200/60 hidden lg:block mb-2"></div>
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) pillarsRef.current[index] = el
                                }}
                                className="group block will-change-transform opacity-0 border-b border-gray-200/60"
                            >
                                <div className="py-8 relative overflow-hidden flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                                    <div className="text-xs font-bold text-gray-400 tracking-widest pt-1.5 sm:w-12">
                                        {pillar.id}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[var(--color-primary-green)] transition-colors duration-500">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-gray-500 font-light leading-relaxed max-w-lg text-[15px] lg:text-base">
                                            {pillar.description}
                                        </p>
                                    </div>

                                    {/* Hover slide line animation (green to subtle gold) */}
                                    <div className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-gradient-to-r from-[var(--color-primary-green)] to-[#D4AF37] transform scale-x-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
