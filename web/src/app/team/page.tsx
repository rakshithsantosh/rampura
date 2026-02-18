import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TeamHero } from "@/components/team/hero"
import { LeadershipSection } from "@/components/team/leadership"
import { CoreTeamSection } from "@/components/team/core-team"
import { ClosingSection } from "@/components/team/closing"

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[var(--color-warm-off-white)]">
            <Navbar />
            <TeamHero />
            <LeadershipSection />
            <CoreTeamSection />
            <ClosingSection />
            <Footer />
        </main>
    )
}
