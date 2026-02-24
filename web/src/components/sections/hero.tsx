"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import gsap from "gsap";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reveal-text",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.12,
                    ease: "power1.out",
                }
            );

            gsap.fromTo(
                ".reveal-bg",
                { opacity: 0 },
                { opacity: 1, duration: 2, ease: "power1.inOut" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[var(--background)]">
            {/* Cinematic Background Layering */}
            <div className="reveal-bg absolute inset-0 z-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-[var(--color-earth-brown)]/10 mix-blend-multiply opacity-0" />

            {/* Subtle Texture Layer */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')] mix-blend-overlay" />

            <Container className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 text-[var(--foreground)]">
                <div className="max-w-3xl space-y-8 mx-auto md:mx-0 text-center md:text-left">
                    <div className="reveal-text inline-flex items-center space-x-2 rounded-full border border-[var(--foreground)]/10 bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">Rampura Organics</span>
                    </div>

                    <h1 className="reveal-text font-heading text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
                        Rooted in Rampura.
                        <br />
                        <span className="font-heading italic text-[var(--color-primary)]">Built on Trust.</span>
                    </h1>

                    <p className="reveal-text max-w-xl mx-auto md:mx-0 text-lg md:text-xl font-light text-[var(--foreground)]/80">
                        Generational farming near the Cauvery. Honoring the soil, delivering integrity to your kitchen.
                    </p>

                    <div className="reveal-text flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 pt-4 justify-center md:justify-start">
                        <Button size="lg" className="rounded-full text-base font-medium px-8 h-14 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white transition-all duration-700 hover:tracking-wide w-full sm:w-auto" asChild>
                            <Link href="https://rampura-organics-india-pvt-ltd.myshopify.com/" target="_blank" rel="noopener noreferrer">
                                Shop Organic Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--foreground)]/30">
                <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="24" height="40" rx="12" stroke="currentColor" strokeWidth="2" />
                    <circle cx="13" cy="11" r="3" fill="var(--color-primary)" className="animate-scroll" />
                </svg>
            </div>
        </section>
    );
}
