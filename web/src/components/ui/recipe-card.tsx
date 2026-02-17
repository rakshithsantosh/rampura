import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { urlFor } from "@/lib/sanity/client"
import { Clock, Users } from "lucide-react"

interface RecipeCardProps {
    title: string
    slug: string
    heroImage: any
    excerpt: string
    category: string
    date: string
}

export function RecipeCard({ title, slug, heroImage, excerpt, category, date }: RecipeCardProps) {
    return (
        <Link href={`/kitchen/${slug}`} className="group h-full">
            <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                    {heroImage ? (
                        <Image
                            src={urlFor(heroImage).width(600).height(450).url()}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[var(--color-earth-brown)]/20 flex items-center justify-center text-slate-500">
                            No Image
                        </div>
                    )}
                    <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-[var(--color-primary-green)] backdrop-blur-sm shadow-sm hover:bg-white">
                            {category}
                        </Badge>
                    </div>
                </div>

                <CardContent className="flex-grow p-6">
                    <h3 className="font-heading text-xl font-bold text-[var(--color-neutral-dark)] mb-3 line-clamp-2 group-hover:text-[var(--color-primary-green)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
                        {excerpt}
                    </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
