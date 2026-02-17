import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-[var(--color-primary-green)] text-white hover:bg-[var(--color-fresh-leaf)] shadow-md hover:shadow-lg transition-all duration-300",
                destructive:
                    "bg-red-500 text-slate-50 hover:bg-red-500/90",
                outline:
                    "border border-[var(--color-primary-green)] text-[var(--color-primary-green)] bg-transparent hover:bg-[var(--color-primary-green)] hover:text-white transition-all duration-300",
                secondary:
                    "bg-[var(--color-fresh-leaf)] text-white hover:bg-[var(--color-fresh-leaf)]/80",
                ghost: "hover:bg-slate-100 hover:text-slate-900",
                link: "text-[var(--color-primary-green)] underline-offset-4 hover:underline",
                earthy: "bg-[var(--color-earth-brown)] text-white hover:bg-[var(--color-earth-brown)]/90 shadow-md",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
