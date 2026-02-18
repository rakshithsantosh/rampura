import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

export function TeamHero() {
    return (
        <section className="relative py-24 md:py-32 bg-[var(--color-warm-off-white)] overflow-hidden">
            {/* Background Watermark - Abstract Leaf */}
            <div className="absolute -top-20 -right-20 md:-right-40 opacity-[0.03] pointer-events-none text-[var(--color-primary-green)]">
                <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            </div>

            <Container className="relative z-10 text-center max-w-3xl">
                <Badge variant="earthy" className="mb-6">Our Guardians</Badge>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-neutral-dark)] mb-6 leading-tight">
                    People Behind <br />
                    <span className="text-[var(--color-earth-brown)]">The Promise.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                    Farming isn't just a job for us; it's a sacred duty passed down through generations.
                    Meet the hands that nurture the soil and the hearts that uphold our legacy of trust.
                </p>
            </Container>
        </section>
    )
}
