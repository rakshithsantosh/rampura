"use client"

import { useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const bgRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !bgRef.current || !textRef.current) return

        const ctx = gsap.context(() => {
            // Very slow background parallax and zoom
            gsap.fromTo(bgRef.current,
                { scale: 1, yPercent: 0 },
                {
                    scale: 1.05,
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            )

            // Text Fade On Scroll (Subtle upward drift + fade)
            gsap.to(textRef.current, {
                y: 80,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            // Initial Staggered Reveal
            gsap.fromTo(
                ".reveal-text",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.6,
                    stagger: 0.25,
                    ease: "power2.out",
                    delay: 0.3,
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#1a1815]"
        >
            {/* Absolute Full-Width Parallax Image */}
            <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform">
                <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2689&auto=format&fit=crop"
                    alt="Cinematic Farmland"
                    fill
                    className="object-cover opacity-75" // increased opacity slightly for better natural contrast
                    priority
                />
            </div>

            {/* Pure atmospheric gradient overlay (no center spotlights or bands) */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Soft edge radial vignette only on the extreme perimeter */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            {/* Bottom Linear Fade to blend seamlessly into next dark section */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#1a1815] pointer-events-none z-10" />

            {/* Content */}
            <Container className="relative z-20 text-center px-4 w-full h-full flex items-center justify-center">
                <div ref={textRef} className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
                    <span className="reveal-text font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#c9a75e]">
                        Our Heritage
                    </span>
                    <h1 className="reveal-text font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-[#e8e4db] leading-[1.1]">
                        Before It Was a Brand, <br />
                        <span className="italic text-white font-light text-4xl md:text-6xl lg:text-[4.5rem] mt-5 block drop-shadow-sm">
                            It Was a Belief.
                        </span>
                    </h1>
                </div>
            </Container>
        </section>
    )
}
