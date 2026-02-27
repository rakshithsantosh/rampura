"use client"

import React, { useState, useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"
import { Quote, Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
    {
        text: "Reviewing the quality of vegetables from Rampura Organics has been a revelation. The taste reminds me of my grandmother's cooking. Absolutely authentic.",
        author: "Priya Sharma",
        location: "Jaipur",
        role: "Home Chef",
        rating: 4.9,
        date: "12 Jan, 2025"
    },
    {
        text: "I visited their farm last winter. Seeing the care they put into the soil and crops built so much trust. I've been a subscriber ever since.",
        author: "Rajesh Verma",
        location: "Gurgaon",
        role: "Health Enthusiast",
        rating: 4.9,
        date: "08 Nov, 2024"
    },
    {
        text: "Finally, organic produce that actually lasts and tastes fresh. My kids love the sweetness of their carrots and peas. Highly recommended!",
        author: "Anjali Gupta",
        location: "Delhi",
        role: "Mother of two",
        rating: 4.9,
        date: "22 Sep, 2024"
    },
    {
        text: "The millets from Rampura have transformed our family's diet. You can taste the difference when food is grown with real care and respect for the land.",
        author: "Kavitha Reddy",
        location: "Bangalore",
        role: "Nutritionist",
        rating: 4.8,
        date: "15 Aug, 2024"
    },
    {
        text: "As a restaurant owner, sourcing quality organic produce is everything. Rampura's consistency and freshness have made them our go-to supplier.",
        author: "Arjun Nair",
        location: "Kochi",
        role: "Restaurant Owner",
        rating: 5.0,
        date: "03 Jun, 2024"
    }
]

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const semiCircleRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    // GSAP Scroll Animations
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            )

            // Gentle parallax on semi-circle
            gsap.to(semiCircleRef.current, {
                y: "10px",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            })

            // Card entrance
            gsap.fromTo(cardRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: cardRef.current, start: "top 85%" } }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    // Auto-rotating focus
    useEffect(() => {
        if (isHovered) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [isHovered])

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-40 bg-[#EDEDED] overflow-hidden"
        >
            {/* Green Semi-Circle — left side, overlapping into the white card */}
            <div
                ref={semiCircleRef}
                className="absolute top-1/2 -translate-y-1/2 -left-[140px] md:-left-[170px] lg:-left-[200px] w-[420px] h-[420px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px] rounded-full will-change-transform pointer-events-none z-20"
                style={{
                    background: 'radial-gradient(circle at 60% 50%, var(--color-primary-green), #1B5E20)',
                }}
            />

            <Container className="relative z-30 w-full max-w-6xl mx-auto px-4 md:px-8">
                {/* White Elevated Card */}
                <div
                    ref={cardRef}
                    className="relative bg-white rounded-2xl shadow-[0_8px_40px_-10px_rgba(0,0,0,0.1)] p-8 md:p-12 lg:p-16 will-change-transform"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Heading with green accent bar */}
                    <div className="mb-12 lg:mb-16">
                        <div className="w-12 h-1 bg-[var(--color-primary-green)] rounded-full mb-4" />
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                            Customer Reviews
                        </h2>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">

                        {/* LEFT COLUMN: Vertical reviewer selector with connector */}
                        <div className="hidden lg:block relative">
                            {/* Thin solid connector line between avatars */}
                            <div
                                className="absolute left-[24px] top-[28px] w-[1.5px] bg-gray-300 pointer-events-none z-0"
                                style={{ height: 'calc(100% - 56px)' }}
                            />

                            <div className="relative z-10 flex flex-col space-y-5">
                                {testimonials.map((t, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`relative text-left transition-all duration-500 ease-out flex items-center gap-4 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-75"
                                                }`}
                                        >
                                            {/* Avatar with dark ring like reference */}
                                            <div className={`shrink-0 rounded-full flex items-center justify-center font-heading font-bold transition-all duration-500 ${isActive
                                                ? "h-14 w-14 bg-gradient-to-br from-[var(--color-primary-green)] to-emerald-700 text-white text-lg shadow-[0_4px_15px_rgba(0,0,0,0.25)] ring-[3px] ring-white"
                                                : "h-11 w-11 bg-gray-200 border-[3px] border-gray-700 text-gray-500 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                                                }`}>
                                                {t.author[0]}
                                            </div>

                                            {/* Name + Rating */}
                                            <div className="min-w-0">
                                                <p className={`font-bold tracking-wide transition-all duration-500 ${isActive ? "text-gray-900 text-base" : "text-gray-500 text-sm"
                                                    }`}>
                                                    {t.author}
                                                </p>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <Star className={`fill-[var(--color-primary-green)] text-[var(--color-primary-green)] transition-all duration-500 ${isActive ? "h-3.5 w-3.5" : "h-3 w-3"}`} />
                                                    <span className={`font-medium text-[var(--color-primary-green)] transition-all duration-500 ${isActive ? "text-sm" : "text-xs"}`}>
                                                        {t.rating}
                                                    </span>
                                                    <span className={`text-gray-400 transition-all duration-500 ${isActive ? "text-xs" : "text-[10px]"}`}>
                                                        on {t.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Active Quote Area */}
                        <div className="relative h-[280px] md:h-[220px] lg:h-[280px] w-full flex items-center" aria-live="polite">
                            {testimonials.map((t, index) => {
                                const isActive = index === activeIndex;
                                const isPrev = index < activeIndex || (activeIndex === 0 && index === testimonials.length - 1);

                                let transformClass = "";
                                if (isActive) {
                                    transformClass = "translate-y-0 opacity-100 visible z-20";
                                } else if (isPrev && !(activeIndex === 0 && index === testimonials.length - 1)) {
                                    transformClass = "-translate-y-6 opacity-0 invisible z-10";
                                } else {
                                    transformClass = "translate-y-6 opacity-0 invisible z-10";
                                }

                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 flex flex-col justify-center transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${transformClass} motion-reduce:transition-opacity motion-reduce:duration-500 motion-reduce:translate-y-0`}
                                    >
                                        {/* Oversized quotation mark */}
                                        <Quote className="absolute -top-2 left-0 lg:left-4 h-12 w-12 lg:h-16 lg:w-16 text-gray-200 rotate-180 pointer-events-none" />

                                        <div className="relative z-10 pl-2 lg:pl-8 pt-8">
                                            <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-gray-700 leading-relaxed font-light">
                                                <span className="text-3xl lg:text-4xl font-serif not-italic text-gray-800 leading-none">{t.text.charAt(0)}</span>
                                                {t.text.slice(1)}
                                            </p>
                                        </div>

                                        {/* Mobile Author */}
                                        <div className="lg:hidden flex items-center space-x-3 mt-6 pl-2">
                                            <div className="h-9 w-9 text-sm rounded-full bg-gradient-to-br from-[var(--color-primary-green)] to-emerald-700 flex items-center justify-center text-white font-heading font-bold shadow-md">
                                                {t.author[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm tracking-wide">{t.author}</p>
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-3 w-3 fill-[var(--color-primary-green)] text-[var(--color-primary-green)]" />
                                                    <span className="text-xs text-[var(--color-primary-green)] font-medium">{t.rating}</span>
                                                    <span className="text-[10px] text-gray-400">on {t.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile indicators */}
                <div className="flex lg:hidden justify-center items-center space-x-3 mt-6 z-20 relative">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${i === activeIndex ? "w-8 bg-[var(--color-primary-green)]" : "w-2 bg-gray-400"}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

