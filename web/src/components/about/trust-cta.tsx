"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TrustCTA() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reveal-closing",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="closing-cta"
            className="py-32 md:py-48 bg-[#1a1815] relative overflow-hidden flex items-center justify-center min-h-[80vh]"
        >
            {/* Cinematic Radial Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,167,94,0.08)_0%,transparent_70%)] pointer-events-none" />

            <Container className="relative z-10 text-center max-w-4xl px-4">
                <span className="reveal-closing font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-[#c9a75e] block mb-8">
                    An Invitation
                </span>

                <h2 className="reveal-closing font-heading text-5xl md:text-7xl lg:text-8xl font-normal text-[#e8e4db] leading-[1.1] mb-12">
                    Taste the <span className="italic text-white font-light">Tradition.</span>
                </h2>

                <p className="reveal-closing text-lg md:text-2xl text-[#e8e4db]/70 font-light leading-relaxed max-w-2xl mx-auto mb-16">
                    Our story isn't just told in words; it is experienced in every drop of ghee, every grain of millet, and every drop of honey.
                </p>

                <div className="reveal-closing">
                    <Link
                        href="https://rampura-organics-india-pvt-ltd.myshopify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-10 pt-5 pb-4 font-sans text-sm tracking-[0.15em] uppercase text-[#1a1815] bg-[#c9a75e] overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-[#d4b97a] hover:shadow-[0_0_40px_rgba(201,167,94,0.4)]"
                        style={{ borderRadius: '2px' }}
                    >
                        <span className="relative z-10 font-medium">Experience the Legacy</span>
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    </Link>
                </div>
            </Container>

            {/* Bottom Fade to blend with footer if needed */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#11100e] pointer-events-none" />
        </section>
    )
}

