"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leadership = [
    {
        name: "Amit Singh",
        role: "Soil Health Expert",
        description: "Ensures the nutrient balance of our lands using natural composting methods."
    },
    {
        name: "Priya Gowda",
        role: "Quality Control",
        description: "Meticulously checks every batch of produce before it's packed."
    }
];

const teamMembers = [
    {
        name: "Ravi Kumar",
        role: "Logistics Manager",
        description: "Coordinates the smooth flow of goods from our village to the city centers."
    },
    {
        name: "Dr. Ananya Reddy",
        role: "Sustainability Advisor",
        description: "Guiding our transition to zero-waste farming and renewable energy use."
    },
    {
        name: "Suresh & Team",
        role: "Harvest Technicians",
        description: "The hands that pick your food at the peak of freshness."
    },
    {
        name: "Meera Krishnan",
        role: "Customer Experience",
        description: "Listening to your feedback to help us serve you better every day."
    }
];

export function CoreTeamSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".reveal-team",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="core-team" className="py-24 md:py-32 bg-[var(--background)]">
            <Container>
                <div className="reveal-team text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="font-heading text-4xl font-bold text-[var(--foreground)]">
                        The Core Team
                    </h2>
                    <p className="text-[var(--foreground)]/70 mt-4 text-lg font-light">
                        United by a passion for purity and a commitment to the land.
                    </p>
                </div>

                {/* Leadership - Horizontal Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {leadership.map((leader, index) => (
                        <div key={index} className="reveal-team flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white/40 border border-[var(--foreground)]/5 p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="h-32 w-32 shrink-0 bg-[var(--foreground)]/5 rounded-full mb-6 sm:mb-0 sm:mr-8 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-[var(--foreground)]/30 text-xs">
                                [Photo]
                            </div>
                            <div className="flex-1">
                                <h3 className="font-heading font-bold text-2xl text-[var(--foreground)] mb-1">
                                    {leader.name}
                                </h3>
                                <p className="text-[var(--color-primary)] text-sm font-semibold tracking-wide mb-4 uppercase">
                                    {leader.role}
                                </p>
                                <p className="text-[var(--foreground)]/70 text-base font-light leading-relaxed">
                                    {leader.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Team - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="reveal-team bg-white/40 p-8 rounded-[2rem] hover:-translate-y-1 transition-all duration-500 border border-[var(--foreground)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] text-center group">
                            <div className="h-24 w-24 mx-auto bg-[var(--foreground)]/5 rounded-full mb-6 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-[var(--foreground)]/30 text-xs transition-transform duration-500 group-hover:scale-105">
                                [Photo]
                            </div>

                            <h3 className="font-heading font-bold text-xl text-[var(--foreground)] mb-1">
                                {member.name}
                            </h3>
                            <p className="text-[var(--color-primary)] text-xs font-semibold tracking-wider mb-4 uppercase">
                                {member.role}
                            </p>
                            <p className="text-[var(--foreground)]/70 text-sm font-light leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
