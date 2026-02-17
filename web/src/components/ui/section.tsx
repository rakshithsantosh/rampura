import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType
    background?: "default" | "white" | "muted" | "brand"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, as: Component = "section", background = "default", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "py-16 md:py-24",
                    {
                        "bg-[var(--background)]": background === "default",
                        "bg-white": background === "white",
                        "bg-slate-50": background === "muted",
                        "bg-[var(--color-primary-green)] text-white": background === "brand",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Section.displayName = "Section"

export { Section }
