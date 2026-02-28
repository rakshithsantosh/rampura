"use client"

import { useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const principles = [
    {
        title: "Soil Stewardship",
        description: "We give back to the earth more than we take, honoring the intricate balance of the local ecosystem."
    },
    {
        title: "Absolute Purity",
        description: "Zero synthetic interference. Just pure water, natural compost, and unadulterated sunshine."
    },
    {
        title: "Community Sustenance",
        description: "Empowering rural farmers with fair livelihoods and preserving ancient agricultural wisdom."
    },
    {
        title: "Radical Transparency",
        description: "Every harvest is traceable, every process is open. Honesty is our primary ingredient."
    }
]

export function OurValues() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reveal-principle",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            )

            // Animated check mark paths
            gsap.fromTo(
                ".check-path",
                { strokeDasharray: 100, strokeDashoffset: 100 },
                {
                    strokeDashoffset: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="values" className="py-32 relative overflow-hidden bg-gradient-to-b from-[#1a1815] to-[#22211e]">
            {/* Ambient Background Warmth */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#c9a75e]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 max-w-5xl">
                <div className="text-center mb-24 reveal-principle">
                    <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-[#c9a75e] block mb-4">
                        Our Philosophy
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-[#e8e4db] leading-[1.2]">
                        Rooted in Trust. <br />
                        <span className="italic text-[#c9a75e] font-light">Driven by Truth.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {principles.map((principle, index) => (
                        <div key={index} className="reveal-principle flex items-start gap-6 group">
                            {/* Animated Checkmark */}
                            <div className="flex-shrink-0 mt-1">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14" cy="14" r="13" stroke="rgba(201, 167, 94, 0.2)" strokeWidth="1" className="group-hover:stroke-[rgba(201,167,94,0.5)] transition-colors duration-500" />
                                    <path
                                        className="check-path"
                                        d="M9 14.5L12.5 18L19 10"
                                        stroke="#c9a75e"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h3 className="font-heading font-normal text-2xl text-[#e8e4db] mb-3 group-hover:text-[#c9a75e] transition-colors duration-300">
                                    {principle.title}
                                </h3>
                                <p className="text-[#e8e4db]/60 leading-relaxed font-light text-base md:text-lg">
                                    {principle.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

