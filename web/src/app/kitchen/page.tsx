import Image from "next/image"
// @ts-ignore
import { groq } from "next-sanity"
import { sanityFetch } from "@/lib/sanity/fetch"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
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
        <main className="min-h-screen bg-[var(--color-warm-off-white)]">
            <Navbar />

            {/* Kitchen Hero */}
            <div className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[var(--color-primary-green)]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                <Container className="relative z-10 text-center text-white space-y-4">
                    <span className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider uppercase mb-2">
                        From Farm to Fork
                    </span>
                    <h1 className="font-heading text-6xl md:text-7xl font-bold drop-shadow-lg">
                        Rampura Kitchen
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-white/90 font-light">
                        Wholesome recipes celebrating the purity of Indian organic produce.
                    </p>
                </Container>
            </div>

            <Section>
                <Container>
                    {recipes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-300">
                            <h3 className="text-2xl font-heading text-stone-400">No recipes found yet.</h3>
                            <p className="text-stone-500 mt-2">Start adding recipes in the Studio!</p>
                        </div>
                    )}
                </Container>
            </Section>

            <Footer />
        </main>
    )
}
