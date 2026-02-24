import Image from "next/image"
// @ts-ignore
import { groq } from "next-sanity"
import { sanityFetch } from "@/lib/sanity/fetch"
import { Container } from "@/components/ui/container"
import { RecipeCard } from "@/components/ui/recipe-card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { Recipe } from "@/types/sanity"

export const revalidate = 60

export default async function KitchenPage() {
    const recipes = await sanityFetch<Recipe[]>({
        query: groq`*[_type == "recipe"] | order(date desc) {
      title,
      "slug": slug.current,
      heroImage,
      excerpt,
      date,
      "category": category->title
    }`,
        tags: ["recipe"]
    })

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            {/* Kitchen Hero - Cinematic Edition */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center bg-[var(--background)]">
                {/* Layered Earthy Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-[var(--color-primary)]/30 to-[var(--background)]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                <Container className="relative z-10 text-center text-[var(--foreground)] space-y-8 pt-16">
                    <div className="inline-flex animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span className="px-5 py-2 rounded-full border border-[var(--color-primary)]/20 bg-white/40 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-[var(--foreground)]/80 shadow-sm">
                            From Farm to Fork
                        </span>
                    </div>

                    <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
                        The Rampura <br />
                        <span className="font-heading italic text-[var(--color-primary)]">Kitchen.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[var(--foreground)]/80 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                        Wholesome recipes celebrating the purity and rhythm of Indian organic produce.
                    </p>
                </Container>
            </div>

            <section className="py-24 md:py-32 bg-[var(--background)] relative z-20">
                <Container>
                    {recipes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {recipes.map((recipe) => (
                                <RecipeCard
                                    key={recipe.slug}
                                    title={recipe.title}
                                    slug={recipe.slug}
                                    heroImage={recipe.heroImage}
                                    excerpt={recipe.excerpt}
                                    category={recipe.category}
                                    date={recipe.date}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-white/40 rounded-[2.5rem] border border-[var(--foreground)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <h3 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-4">No recipes found yet.</h3>
                            <p className="text-[var(--foreground)]/60 text-lg font-light">The kitchen is quiet today. Check back soon for new recipes!</p>
                        </div>
                    )}
                </Container>
            </section>

            <Footer />
        </main>
    )
}
