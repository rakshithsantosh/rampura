"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ProductOfferings() { // Renamed conceptually to "The Ritual of A2 Ghee"
    const sectionRef = useRef<HTMLDivElement>(null)
    const jarRef = useRef<HTMLDivElement>(null)
    const shimmerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !jarRef.current || !shimmerRef.current) return

        const ctx = gsap.context(() => {
            // Text fade-in
            gsap.fromTo(
                ".reveal-ritual",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    },
                }
            )

            // Jar rotation on scroll
            gsap.to(jarRef.current, {
                rotation: 10,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            })

            // Golden shimmer effect passing over
            gsap.fromTo(
                shimmerRef.current,
                { x: "-150%", opacity: 0 },
                {
                    x: "150%",
                    opacity: 0.6,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 40%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="the-ritual"
            className="py-32 md:py-48 bg-[#11100e] relative overflow-hidden"
        >
            {/* Ambient Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-t from-[#c9a75e]/10 to-[#e8e4db]/5 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-center max-w-3xl mb-20">
                    <span className="reveal-ritual font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-[#c9a75e] block mb-6">
                        The Sacred Process
                    </span>
                    <h2 className="reveal-ritual font-heading text-4xl md:text-5xl lg:text-7xl font-normal text-[#e8e4db] leading-[1.1]">
                        The Ritual of <br />
                        <span className="italic text-[#c9a75e] font-light">A2 Ghee</span>
                    </h2>
                </div>

                {/* Product Focus Area */}
                <div className="relative w-full max-w-4xl mx-auto px-4 flex items-center justify-center">
                    <div ref={jarRef} className="relative w-full aspect-[16/9] z-20 will-change-transform shadow-2xl rounded-2xl overflow-hidden border border-white/5">
                        {/* Actual Product Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <Image
                                src="/ghee-jar.jpeg"
                                alt="Rampura Bilona Ghee Jar"
                                fill
                                className="object-cover"
                            />

                            {/* Inner Vignette to blend edges */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none z-10" />

                            {/* Shimmer Mask Overlay remains on top for animation */}
                            <div
                                ref={shimmerRef}
                                className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-[150%] mix-blend-overlay pointer-events-none z-20"
                            />
                        </div>
                    </div>

                    {/* Pedestal Shadow */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/60 rounded-[100%] blur-md z-10" />
                </div>

                <div className="reveal-ritual mt-20 text-center max-w-2xl px-4">
                    <p className="text-lg md:text-2xl text-[#e8e4db]/80 font-light leading-relaxed">
                        Slowly simmered over firewords, nurtured in glass. We don't just make ghee; we preserve an ancient Ayurvedic tradition.
                    </p>
                </div>
            </Container>
        </section>
    )
}

