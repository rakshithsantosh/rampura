import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-[var(--color-primary-green)] text-white hover:bg-[var(--color-primary-green)]/80",
                secondary:
                    "border-transparent bg-[var(--color-fresh-leaf)] text-white hover:bg-[var(--color-fresh-leaf)]/80",
                destructive:
                    "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
                outline: "text-[var(--color-neutral-dark)]",
                earthy: "border-transparent bg-[var(--color-earth-brown)] text-white hover:bg-[var(--color-earth-brown)]/80",
                trust: "border-transparent bg-white text-[var(--color-primary-green)] border-[var(--color-primary-green)] border shadow-sm",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
