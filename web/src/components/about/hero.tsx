import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

export function AboutHero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-stone-900">
            {/* Option A: Deep Forest Green Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A24] via-[#2E7D32] to-[var(--color-warm-off-white)]" />

            {/* Subtle Grain Texture Overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            {/* Faint Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20 pointer-events-none" />

            {/* Subtle Watermark (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.05] pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full border-[1px] border-white/40 flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
                    <div className="absolute inset-4 rounded-full border-[1px] border-white/20" />
                    <span className="font-heading font-medium tracking-[0.5em] text-white/60 uppercase text-sm">Rampura Organics • Est 2024 •</span>
                </div>
            </div>

            <Container className="relative z-10 text-center space-y-8 max-w-4xl px-4 pb-24 md:pb-32">
                {/* Est. Badge */}
                <Badge
                    variant="outline"
                    className="mx-auto border-[#4CAF50]/30 text-[#4CAF50] bg-[#1B3A24]/50 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium tracking-wide text-xs uppercase shadow-sm"
                >
                    Est. 2024
                </Badge>

                {/* Headline */}
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] opacity-0 animate-[fade-in_1s_ease-out_forwards]">
                    <span className="block text-[#F5F5F0]">Rooted in Rampura.</span>
                    <span className="block text-[#4CAF50] mt-2">Built on Trust.</span>
                </h1>

                {/* Supporting Line */}
                <p className="text-lg md:text-2xl text-[#F5F5F0]/90 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
                    Nestled near the banks of river Cauvery, our village is more than a location—it is a legacy of sustainable farming passed down through generations.
                </p>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest text-[#1B3A24] font-medium">Scroll to Explore</span>
                <div className="w-0.5 h-12 bg-gradient-to-b from-[#1B3A24] to-transparent" />
            </div>
        </section>
    )
}
