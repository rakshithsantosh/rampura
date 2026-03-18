"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { ProductCardV2 } from "@/components/ui/product-card-v2"

const products = [
    {
        id: 1,
        name: "Premium Organic Wheat",
        price: "₹450",
        mrp: "₹550",
        weight: "5kg",
        image: "bg-amber-100",
        tag: "Bestseller",
        rating: 4.9,
        benefit: "Pure Stone-Ground Whole Wheat"
    },
    {
        id: 2,
        name: "Cold Pressed Mustard Oil",
        price: "₹280",
        mrp: "₹320",
        weight: "1L",
        image: "bg-yellow-100",
        tag: "New Arrival",
        rating: 4.8,
        benefit: "Traditional Wood-Pressed Purity"
    },
    {
        id: 3,
        name: "Authentic Basmati Rice",
        price: "₹650",
        mrp: "₹750",
        weight: "5kg",
        image: "bg-stone-100",
        tag: "Limited Harvest",
        rating: 4.7,
        benefit: "Long-Grain Aged Fragrance"
    },
    {
        id: 4,
        name: "Raw Wild Honey",
        price: "₹380",
        mrp: "₹450",
        weight: "500g",
        image: "bg-orange-100",
        tag: "Limited Stock",
        rating: 4.9,
        benefit: "Unprocessed Forest Nectar"
    }
]

export function FeaturedProducts() {
    const handleAddToCart = (productId: number) => {
        console.log(`Adding product ${productId} to cart`)
        // Keep existing logic placeholder - currently no logic existed in original file
    }

    return (
        <Section id="shop" background="default">
            <Container>
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <Badge variant="secondary" className="px-5 py-1.5 text-xs font-bold uppercase tracking-widest bg-[var(--color-primary-green)]/10 text-[var(--color-primary-green)] border-none">
                        Direct From Rural India
                    </Badge>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
                        Explore Our <span className="text-[var(--color-primary-green)] italic">Purest Produce</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
                        Harvested at peak ripeness and delivered directly from our fields.
                        Experience the difference of truly natural flavors.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    {products.map((product) => (
                        <ProductCardV2 
                            key={product.id} 
                            {...product} 
                            onAddToCart={() => handleAddToCart(product.id)}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button size="lg" className="rounded-full px-10 py-7 bg-slate-900 hover:bg-[var(--color-primary-green)] text-white font-bold transition-all duration-300 shadow-xl hover:shadow-[var(--color-primary-green)]/20" asChild>
                        <Link href="https://rampura-organics-india-pvt-ltd.myshopify.com/" target="_blank" rel="noopener noreferrer">
                            View Full Catalog
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
