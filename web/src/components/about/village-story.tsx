"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VillageStory() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reveal-story",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            gsap.fromTo(
                ".reveal-image",
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="village-story" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: Narrative */}
                    <div className="space-y-10 order-2 lg:order-1 lg:pr-8">
                        <div>
                            <div className="reveal-story">
                                <Badge variant="outline" className="mb-6 border-[var(--color-primary)]/20 text-[var(--color-primary)]">The Soil We Stand On</Badge>
                            </div>
                            <h2 className="reveal-story font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8 leading-tight">
                                The Story of <span className="font-heading italic text-[var(--color-primary)]">Rampura</span>
                            </h2>
                            <div className="reveal-story space-y-6 text-lg text-[var(--foreground)]/80 leading-relaxed font-light">
                                <p>
                                    Generations ago, our ancestors settled on the fertile lands near the river Cauvery.
                                    They didn't just farm the land; they listened to it. They understood the rhythm of the seasons
                                    and the language of the soil.
                                </p>
                                <p>
                                    Today, Rampura is more than just a village on a map. It is a living testament to
                                    communal strength and agricultural heritage. Every grain we grow carries the
                                    blessings of the river and the hard work of a community that treats farming as a sacred duty.
                                </p>
                            </div>
                        </div>

                        <div className="reveal-story grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--foreground)]/5">
                            <div>
                                <h4 className="font-heading font-semibold text-xl text-[var(--foreground)] mb-3">Heritage</h4>
                                <p className="text-[1rem] text-[var(--foreground)]/70 font-light leading-relaxed">Farming practices preserved and perfected over decades.</p>
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-xl text-[var(--foreground)] mb-3">Community</h4>
                                <p className="text-[1rem] text-[var(--foreground)]/70 font-light leading-relaxed">Built by families who support and sustain each other.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="reveal-image relative order-1 lg:order-2">
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[var(--foreground)]/5 relative group">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-[var(--foreground)]/5 flex items-center justify-center text-[var(--foreground)]/40 font-light">
                                [Authentic Village/Farmer Image]
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute inset-0 border border-white/20 m-6 rounded-[2rem] pointer-events-none mix-blend-overlay" />
                        </div>
                        {/* Background Splashes */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-[var(--color-earth-brown)]/10 rounded-full blur-3xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
