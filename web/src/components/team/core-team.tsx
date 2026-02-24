"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const teamMembers = [
    {
        name: "Santhosh Kumar",
        role: "Core Team",
        description: "An intense personality having grown in the cradle of agricultural environs with a clear understanding of being able to identify the missing link of the past with present and rejuvenate the same."
    },
    {
        name: "Nanda Kumar",
        role: "Core Team",
        description: "Abundant corporate experience...very passionate in all that he takes up whether for support or living....tremendous control on process, compliance and procurement."
    },
    {
        name: "Suhas Archak",
        role: "Core Team",
        description: "Value enhancer being the back end analytic arm"
    },
    {
        name: "Sateesh CP",
        role: "Core Team",
        description: "Heads the specialty in Jaggery division"
    },
    {
        name: "Gururaju",
        role: "Core Team",
        description: "Staying in the midst of Rampura. He is insightful individual towards a cohesive bonding of all offerings made by this entity."
    },
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
        <section ref={sectionRef} id="core-team" className="py-24 md:py-32 bg-gradient-to-b from-[var(--background)] to-[var(--color-primary-green)]/5 relative overflow-hidden">
            <Container>
                <div className="reveal-team text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="font-sans text-4xl font-bold text-[var(--foreground)] tracking-tight">
                        The Core Team
                    </h2>
                    <p className="text-[var(--foreground)]/70 mt-4 text-lg font-light">
                        United by a passion for purity and a commitment to the land.
                    </p>
                </div>

                {/* Core Team - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="reveal-team relative bg-[var(--color-warm-off-white)] rounded-xl border border-[var(--color-primary-green)]/10 shadow-sm motion-safe:hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out px-8 pb-8 pt-16 mt-12 text-center group flex flex-col items-center">

                            {/* Elevated Image */}
                            <div className="absolute -top-14 w-28 h-28 rounded-full overflow-hidden border-4 border-[var(--color-warm-off-white)] shadow-sm bg-[var(--foreground)]/5 flex items-center justify-center text-[var(--foreground)]/30 text-xs transition-all duration-300 ease-out group-hover:saturate-[1.05]">
                                [Photo]
                            </div>

                            <h3 className="font-sans font-bold text-xl text-[var(--foreground)] mt-2 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-[var(--color-primary-green)] text-xs font-semibold tracking-wider mb-4 uppercase">
                                {member.role}
                            </p>
                            <p className="text-[var(--foreground)]/70 text-sm font-light leading-relaxed line-clamp-3">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
