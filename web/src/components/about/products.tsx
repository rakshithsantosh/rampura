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
                <div className="relative w-full max-w-md mx-auto aspect-[3/4] flex items-center justify-center perspective-[1000px]">
                    <div ref={jarRef} className="relative w-64 h-80 z-20 will-change-transform">
                        {/* Placeholder for actual Glass Jar Image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4db]/20 to-transparent rounded-t-[3rem] rounded-b-[2rem] border border-[#e8e4db]/30 backdrop-blur-md shadow-[0_0_50px_rgba(201,167,94,0.15)] overflow-hidden flex flex-col items-center">

                            {/* Gold Lid Placeholder */}
                            <div className="w-40 h-10 mt-2 rounded bg-gradient-to-r from-[#b38d45] via-[#f1d582] to-[#b38d45] shadow-lg" />

                            {/* Jar Body Effect */}
                            <div className="flex-1 w-full bg-gradient-to-b from-transparent to-[#c9a75e]/20 mt-4 rounded-b-[2rem] flex items-center justify-center p-4">
                                <div className="text-[#e8e4db] font-heading font-light tracking-widest text-sm opacity-60 text-center uppercase">Rampura<br />Bilona Ghee</div>
                            </div>

                            {/* Shimmer Mask Overlay */}
                            <div
                                ref={shimmerRef}
                                className="absolute inset-0 w-full h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform -translate-y-1/2 mix-blend-overlay pointer-events-none"
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

