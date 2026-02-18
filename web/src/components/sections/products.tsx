import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"

const products = [
    {
        id: 1,
        name: "Premium Organic Wheat",
        price: "₹450",
        weight: "5kg",
        image: "bg-amber-100",
        tag: "Bestseller"
    },
    {
        id: 2,
        name: "Cold Pressed Mustard Oil",
        price: "₹280",
        weight: "1L",
        image: "bg-yellow-100",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Authentic Basmati Rice",
        price: "₹650",
        weight: "5kg",
        image: "bg-stone-100",
        tag: null
    },
    {
        id: 4,
        name: "Raw Wild Honey",
        price: "₹380",
        weight: "500g",
        image: "bg-orange-100",
        tag: "Limited Stock"
    }
]

export function FeaturedProducts() {
    return (
        <Section id="shop" background="default">
            <Container>
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <Badge variant="secondary" className="px-4 py-1 text-sm">Fresh Harvest</Badge>
                    <h2 className="font-heading text-4xl font-bold text-[var(--color-neutral-dark)]">
                        Explore Our <span className="text-[var(--color-primary-green)]">Purest Produce</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl">
                        Harvested at peak ripeness and delivered directly from our fields.
                        Experience the difference of truly natural flavors.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                            <div className={`relative aspect-[4/5] ${product.image} flex items-center justify-center`}>
                                <span className="text-stone-400 font-medium">[Product Image]</span>
                                {product.tag && (
                                    <div className="absolute top-3 right-3">
                                        <Badge variant="trust" className="bg-white/90 backdrop-blur-sm">
                                            {product.tag}
                                        </Badge>
                                    </div>
                                )}
                                {/* Overlay with Quick Add */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button variant="secondary" className="rounded-full">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-4 pt-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-heading font-bold text-lg text-slate-800 line-clamp-1">{product.name}</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">{product.weight}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-xl text-[var(--color-primary-green)]">{product.price}</span>
                                    <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0">
                                        <ShoppingCart className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="https://rampura-organics-india-pvt-ltd.myshopify.com/" target="_blank" rel="noopener noreferrer">
                            View All Products
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
