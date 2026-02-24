"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";

export function TeamHero() {
    const sectionRef = useRef<HTMLElement>(null);

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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 bg-[var(--background)] overflow-hidden">
            <Container className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="reveal-text mb-8">
                    <Badge variant="outline" className="border-[var(--color-primary)]/20 text-[var(--color-primary)]">Our Guardians</Badge>
                </div>
                <h1 className="reveal-text font-heading text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-8 leading-[1.1]">
                    People Behind <br />
                    <span className="font-heading italic text-[var(--color-primary)]">The Promise.</span>
                </h1>
                <p className="reveal-text text-lg md:text-2xl text-[var(--foreground)]/80 leading-relaxed font-light max-w-3xl mx-auto">
                    Farming isn't just a job for us; it's a sacred duty passed down through generations.
                    Meet the hands that nurture the soil and the hearts that uphold our legacy of trust.
                </p>
            </Container>

            {/* Subtle Splashes */}
            <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[100px]" />
            <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-[var(--color-earth-brown)]/5 rounded-full blur-[100px]" />
        </section>
    );
}
