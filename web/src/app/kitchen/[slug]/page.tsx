import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
// @ts-ignore
import { groq } from "next-sanity"
import { sanityFetch } from "@/lib/sanity/fetch"
import { urlFor } from "@/lib/sanity/client"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PortableText } from "@/components/ui/portable-text"
import { Calendar, ChefHat, ShoppingBag } from "lucide-react"

import { Recipe } from "@/types/sanity"

export const revalidate = 60

interface RecipePageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const recipes = await sanityFetch<{ slug: string }[]>({
        query: groq`*[_type == "recipe"]{ "slug": slug.current }`,
    })

    return recipes.map((recipe) => ({
        slug: recipe.slug,
    }))
}

export default async function RecipePage({ params }: RecipePageProps) {
    const { slug } = await params

    const recipe = await sanityFetch<Recipe>({
        query: groq`*[_type == "recipe" && slug.current == $slug][0] {
      title,
      heroImage,
      date,
      "category": category->title,
      "courtesy": courtesy->{name, designation, "image": image},
      ingredients,
      method,
      videoUrl,
      relatedProducts
    }`,
        params: { slug }
    })

    if (!recipe) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Recipe Hero */}
            <div className="relative h-[60vh] w-full">
                {recipe.heroImage ? (
                    <Image
                        src={urlFor(recipe.heroImage).url()}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-[var(--color-primary-green)]/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <Container className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-16 text-white w-full">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="bg-[var(--color-fresh-leaf)] hover:bg-[var(--color-fresh-leaf)] text-white border-none py-1.5 px-4 text-sm">
                                {recipe.category || "Organic"}
                            </Badge>
                            {recipe.date && (
                                <Badge variant="outline" className="text-white border-white/40 bg-black/20 backdrop-blur-md py-1.5 px-4 flex items-center gap-2">
                                    <Calendar className="h-3 w-3" />
                                    {new Date(recipe.date).toLocaleDateString()}
                                </Badge>
                            )}
                        </div>

                        <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">
                            {recipe.title}
                        </h1>

                        {recipe.courtesy && (
                            <div className="flex items-center gap-3 pt-2">
                                <div className="h-10 w-10 rounded-full border border-white/50 overflow-hidden relative bg-white/10">
                                    {recipe.courtesy.image && (
                                        <Image
                                            src={urlFor(recipe.courtesy.image).width(100).height(100).url()}
                                            alt={recipe.courtesy.name}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium text-white">{recipe.courtesy.name}</p>
                                    <p className="text-xs text-white/70 uppercase tracking-wide">{recipe.courtesy.designation}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </div>

            <Section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

                        {/* Left Column: Ingredients */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-[var(--color-warm-off-white)] rounded-2xl p-8 sticky top-24">
                                <h3 className="font-heading text-2xl font-bold text-[var(--color-neutral-dark)] mb-6 flex items-center gap-2">
                                    <ChefHat className="h-6 w-6 text-[var(--color-earth-brown)]" />
                                    Ingredients
                                </h3>
                                <ul className="space-y-4">
                                    {recipe.ingredients?.map((ingredient: any, i: number) => (
                                        <li key={i} className="flex justify-between items-baseline border-b border-stone-200 pb-2 last:border-0">
                                            <span className="font-medium text-slate-700">{ingredient.name}</span>
                                            <span className="text-sm font-bold text-[var(--color-primary-green)] whitespace-nowrap ml-4">{ingredient.quantity}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-stone-200">
                                    <p className="text-xs text-stone-500 italic text-center">
                                        Pro Tip: Use organic ingredients for richer flavor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Method */}
                        <div className="lg:col-span-8 space-y-12">
                            <div>
                                <h3 className="font-heading text-3xl font-bold text-[var(--color-neutral-dark)] mb-8 pb-4 border-b border-stone-100">
                                    Process
                                </h3>
                                <div className="prose prose-lg prose-headings:font-heading prose-headings:text-[var(--color-neutral-dark)] prose-p:text-slate-600 prose-li:text-slate-600 max-w-none">
                                    {recipe.method ? <PortableText value={recipe.method} /> : <p>No method details available.</p>}
                                </div>
                            </div>

                            {/* Related Products */}
                            {recipe.relatedProducts && recipe.relatedProducts.length > 0 && (
                                <div className="pt-12 mt-12 border-t border-stone-100">
                                    <h3 className="font-heading text-2xl font-bold text-[var(--color-neutral-dark)] mb-8">
                                        Cook it with Rampura Organics
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {recipe.relatedProducts.map((product: any, idx: number) => (
                                            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 hover:border-[var(--color-primary-green)] hover:shadow-md transition-all group bg-white">
                                                <div className="h-20 w-20 rounded-lg bg-stone-100 relative overflow-hidden flex-shrink-0">
                                                    {product.productImage ? (
                                                        <Image
                                                            src={urlFor(product.productImage).width(200).height(200).url()}
                                                            alt={product.productName}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-stone-400">No Img</div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <h4 className="font-bold text-slate-800 mb-1">{product.productName}</h4>
                                                    <a
                                                        href={product.shopifyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button size="sm" variant="outline" className="h-8 text-xs gap-2 group-hover:bg-[var(--color-primary-green)] group-hover:text-white group-hover:border-[var(--color-primary-green)]">
                                                            <ShoppingBag className="h-3 w-3" />
                                                            Buy Ingredient
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    )
}
