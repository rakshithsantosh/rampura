"use client"

import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProductCardV2Props {
  id: number | string
  name: string
  price: string
  mrp?: string
  weight: string
  image: string
  tag?: string | null
  rating?: number
  benefit?: string
  onAddToCart?: () => void
}

export function ProductCardV2({
  name,
  price,
  mrp,
  weight,
  image,
  tag,
  rating = 4.8,
  benefit = "100% Organic & Pure",
  onAddToCart
}: ProductCardV2Props) {
  // Map tags to requested badges
  const getBadge = (tag: string | null | undefined) => {
    if (!tag) return null
    if (tag.toLowerCase().includes("bestseller") || tag.toLowerCase().includes("most ordered")) {
      return { text: "🔥 Most Ordered", variant: "secondary" as const }
    }
    if (tag.toLowerCase().includes("new") || tag.toLowerCase().includes("fresh")) {
      return { text: "🌾 Farm Fresh", variant: "outline" as const }
    }
    if (tag.toLowerCase().includes("limited")) {
      return { text: "Limited Harvest", variant: "destructive" as const }
    }
    return { text: tag, variant: "secondary" as const }
  }

  const badge = getBadge(tag)

  // Calculate discount percentage if MRP is available
  const getDiscount = () => {
    if (!mrp || !price) return null
    const mrpVal = parseFloat(mrp.replace(/[^\d.]/g, ""))
    const priceVal = parseFloat(price.replace(/[^\d.]/g, ""))
    if (isNaN(mrpVal) || isNaN(priceVal) || mrpVal <= priceVal) return null
    const discount = Math.round(((mrpVal - priceVal) / mrpVal) * 100)
    return `${discount}% OFF`
  }

  const discount = getDiscount()

  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <div className={cn(
          "w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
          image.startsWith("bg-") ? image : ""
        )}>
          {image.startsWith("bg-") ? (
            <span className="text-slate-400 font-medium text-xs text-center px-4">[ {name} ]</span>
          ) : (
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover"
            />
          )}
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <Badge 
              variant={badge.variant} 
              className="bg-white/95 text-slate-900 border-none shadow-sm font-bold backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-wider"
            >
              {badge.text}
            </Badge>
          )}
          {discount && (
            <Badge className="bg-[var(--color-primary-green)] text-white border-none font-bold text-[10px] px-2.5 py-1 uppercase tracking-wider">
              {discount}
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-5">
        {/* Rating & Trust */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "h-3 w-3 fill-current",
                  i < Math.floor(rating) ? "text-yellow-400" : "text-slate-200"
                )} 
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter ml-1">
            {rating} (120+)
          </span>
        </div>

        {/* Product Info */}
        <div className="space-y-1 mb-4">
          <h3 className="font-heading font-bold text-xl text-slate-800 line-clamp-1 group-hover:text-[var(--color-primary-green)] transition-colors">
            {name}
          </h3>
          <p className="text-xs text-[var(--color-primary-green)] font-medium italic opacity-85">
            {benefit}
          </p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-1">
            {weight}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="font-bold text-2xl text-slate-900">
            {price}
          </span>
          {mrp && mrp !== price && (
            <span className="text-sm text-slate-400 line-through decoration-slate-300">
              {mrp}
            </span>
          )}
        </div>

        {/* Action */}
        <Button 
          onClick={onAddToCart}
          className="w-full bg-slate-900 hover:bg-[var(--color-primary-green)] text-white font-bold py-6 rounded-xl transition-all duration-300 group/btn shadow-lg hover:shadow-[var(--color-primary-green)]/20"
        >
          <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
