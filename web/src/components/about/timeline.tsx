"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/container"

gsap.registerPlugin(ScrollTrigger)

const milestones = [
    {
        title: "Seed Selection",
        description: "Selecting indigenous heirloom seeds uniquely suited for the Cauvery basin soil.",
        year: "01"
    },
    {
        title: "Traditional Bilona",
        description: "Churning A2 curd in earthen pots using wooden dashers at dawn, before the sun rises.",
        year: "02"
    },
    {
        title: "Slow Heating",
        description: "Simmering Makkhan over cow dung cake fire to infuse a distinct smoky, caramelised aroma.",
        year: "03"
    },
    {
        title: "Lab Testing",
        description: "Rigorous testing to ensure 100% purity, zero preservatives, and no chemical traces.",
        year: "04"
    },
    {
        title: "Glass Packing",
        description: "Hand-poured into premium glass jars to preserve the prana (life force) of the ghee.",
        year: "05"
    }
]

export function BrandTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !trackRef.current) return

        const ctx = gsap.context(() => {
            const track = trackRef.current
            if (!track) return

            // Get total scroll width
            const getScrollAmount = () => {
                let trackWidth = track.scrollWidth
                return -(trackWidth - window.innerWidth)
            }

            const tween = gsap.to(trackRef.current, {
                x: getScrollAmount,
                ease: "none"
            })

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="bg-[#1a1815] h-screen overflow-hidden flex flex-col justify-center relative">
            <Container className="absolute top-20 left-0 w-full z-20 pointer-events-none">
                <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-[#c9a75e] block mb-2 px-4">
                    The Craft
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-normal text-[#e8e4db] px-4">
                    Artisanal Mastery
                </h2>
            </Container>

            <div ref={trackRef} className="flex items-center w-max px-[10vw] md:px-[20vw] h-full pt-20 pb-10 gap-20 md:gap-40 will-change-transform">
                {milestones.map((milestone, i) => (
                    <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] flex gap-6 md:gap-10 opacity-90 hover:opacity-100 transition-opacity">

                        {/* Numeral */}
                        <div className="font-heading text-6xl md:text-8xl font-light text-transparent" style={{ WebkitTextStroke: '1px rgba(201, 167, 94, 0.4)' }}>
                            {milestone.year}
                        </div>

                        {/* Content */}
                        <div className="pt-4 md:pt-6 space-y-4">
                            <h3 className="font-heading text-2xl md:text-4xl text-[#e8e4db] font-normal">
                                {milestone.title}
                            </h3>
                            <p className="text-base md:text-lg text-[#e8e4db]/60 font-light leading-relaxed max-w-[280px]">
                                {milestone.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Connecting Line along the bottom of the timeline items conceptually */}
            <div className="absolute top-[60%] lg:top-[55%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a75e]/30 to-transparent pointer-events-none -z-10" />

        </section>
    )
}

