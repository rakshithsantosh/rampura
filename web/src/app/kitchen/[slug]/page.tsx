import Image from "next/image"
import { notFound } from "next/navigation"
// @ts-ignore
import { groq } from "next-sanity"
import { sanityFetch } from "@/lib/sanity/fetch"
import { urlFor } from "@/lib/sanity/client"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
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
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            {/* Recipe Hero */}
            <div className="relative h-[65vh] w-full bg-[var(--color-primary)]">
                {recipe.heroImage && (
                    <Image
                        src={urlFor(recipe.heroImage).url()}
                        alt={recipe.title}
                        fill
                        className="object-cover opacity-80 mix-blend-multiply"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-black/30" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                <Container className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-16 text-[var(--foreground)] w-full">
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="flex flex-wrap gap-4">
                            <Badge variant="outline" className="border-[var(--color-primary)]/20 bg-white/40 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-[var(--foreground)]/80 shadow-sm py-1.5 px-4">
                                {recipe.category || "Organic"}
                            </Badge>
                            {recipe.date && (
                                <Badge variant="outline" className="border-[var(--color-primary)]/20 bg-white/40 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-[var(--foreground)]/80 shadow-sm py-1.5 px-4 flex items-center gap-2">
                                    <Calendar className="h-3 w-3" />
                                    {new Date(recipe.date).toLocaleDateString()}
                                </Badge>
                            )}
                        </div>

                        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1]">
                            {recipe.title}
                        </h1>

                        {recipe.courtesy && (
                            <div className="flex items-center gap-4 pt-4">
                                <div className="h-12 w-12 rounded-full border border-[var(--foreground)]/10 overflow-hidden relative bg-[var(--foreground)]/5 shadow-sm">
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
                                    <p className="font-medium text-[var(--foreground)] text-lg">{recipe.courtesy.name}</p>
                                    <p className="text-xs text-[var(--color-primary)] font-semibold tracking-wider uppercase">{recipe.courtesy.designation}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </div>

            <section className="py-24 bg-[var(--background)] relative z-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">

                        {/* Left Column: Ingredients */}
                        <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
                            <div className="bg-white/40 rounded-[2rem] p-8 md:p-10 sticky top-32 border border-[var(--foreground)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                                <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-8 flex items-center gap-3">
                                    <ChefHat className="h-6 w-6 text-[var(--color-primary)]" />
                                    Ingredients
                                </h3>
                                <ul className="space-y-4">
                                    {recipe.ingredients?.map((ingredient: any, i: number) => (
                                        <li key={i} className="flex justify-between items-baseline border-b border-[var(--foreground)]/10 pb-4 last:border-0 last:pb-0">
                                            <span className="font-light text-[var(--foreground)]/80 text-lg">{ingredient.name}</span>
                                            <span className="text-sm font-semibold tracking-wide text-[var(--color-primary)] ml-4">{ingredient.quantity}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 pt-6 border-t border-[var(--foreground)]/10">
                                    <p className="text-sm text-[var(--foreground)]/50 italic text-center font-light">
                                        Pro Tip: Use Rampura Organics ingredients for the truest flavor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Method */}
                        <div className="lg:col-span-8 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                            <div>
                                <h3 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-8 pb-4 border-b border-[var(--foreground)]/10">
                                    The Process
                                </h3>
                                <div className="prose prose-lg prose-headings:font-heading prose-headings:text-[var(--foreground)] prose-p:text-[var(--foreground)]/80 prose-p:font-light prose-p:leading-relaxed prose-li:text-[var(--foreground)]/80 prose-li:font-light max-w-none">
                                    {recipe.method ? <PortableText value={recipe.method} /> : <p>No method details available.</p>}
                                </div>
                            </div>

                            {/* Related Products */}
                            {recipe.relatedProducts && recipe.relatedProducts.length > 0 && (
                                <div className="pt-12 mt-12 border-t border-[var(--foreground)]/10">
                                    <h3 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-10">
                                        Cook it with Rampura Organics
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {recipe.relatedProducts.map((product: any, idx: number) => (
                                            <div key={idx} className="flex items-center gap-6 p-6 rounded-[1.5rem] border border-[var(--foreground)]/5 hover:border-[var(--color-primary)]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group bg-white/40">
                                                <div className="h-24 w-24 rounded-[1rem] bg-[var(--foreground)]/5 relative overflow-hidden flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                                                    {product.productImage ? (
                                                        <Image
                                                            src={urlFor(product.productImage).width(200).height(200).url()}
                                                            alt={product.productName}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] text-[var(--foreground)]/30 uppercase tracking-widest font-semibold">No Image</div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <h4 className="font-bold text-[var(--foreground)] mb-2 text-lg">{product.productName}</h4>
                                                    <a
                                                        href={product.shopifyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button size="sm" variant="outline" className="h-10 rounded-full px-5 text-sm font-medium tracking-wide gap-2 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)] transition-all duration-300">
                                                            <ShoppingBag className="h-4 w-4" />
                                                            Shop Now
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
            </section>

            <Footer />
        </main>
    )
}
