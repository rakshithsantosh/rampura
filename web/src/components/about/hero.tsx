"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";

export function AboutHero() {
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
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Deep Green to Warm Off-White Transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-[var(--color-primary)]/30 to-[var(--background)]" />

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            {/* Seal Watermark (Subtle Background) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none flex items-center justify-center">
                <div className="w-[600px] h-[600px] rounded-full border border-[var(--color-primary)] flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="absolute inset-8 rounded-full border border-[var(--color-primary)]" />
                    <span className="font-heading font-medium tracking-[0.6em] text-[var(--color-primary)] uppercase text-sm">Rampura Organics • Est 2024 •</span>
                </div>
            </div>

            <Container className="relative z-10 text-center space-y-8 max-w-4xl px-4 pt-12 pb-12 md:pb-24">
                <div className="reveal-text">
                    <Badge
                        variant="outline"
                        className="mx-auto border-[var(--color-primary)]/20 text-[var(--foreground)] bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium tracking-wide text-xs uppercase shadow-sm"
                    >
                        Est. 2024
                    </Badge>
                </div>

                <h1 className="reveal-text font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-[var(--foreground)]">
                    <span className="block">Rooted in Rampura.</span>
                    <span className="block font-heading italic text-[var(--color-primary)] mt-2">Built on Trust.</span>
                </h1>

                <p className="reveal-text text-lg md:text-2xl text-[var(--foreground)]/80 max-w-2xl mx-auto leading-relaxed font-light">
                    Nestled near the banks of river Cauvery, our village is more than a location—it is a legacy of sustainable farming passed down through generations.
                </p>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-medium">Scroll to Explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
            </div>
        </section>
    );
}
