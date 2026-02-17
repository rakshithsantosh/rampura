"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[var(--color-primary-green)] bg-white flex items-center justify-center">
                            <span className="text-[var(--color-primary-green)] font-bold text-xl">R</span>
                        </div>
                        <span
                            className={cn(
                                "font-heading text-xl font-bold tracking-tight",
                                isScrolled ? "text-[var(--color-neutral-dark)]" : "text-white"
                            )}
                        >
                            Rampura Organics
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {["Our Story", "Shop", "Farming", "Wholesale"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-[var(--color-fresh-leaf)]",
                                    isScrolled ? "text-slate-600" : "text-white/90"
                                )}
                            >
                                {item}
                            </Link>
                        ))}
                        <Button
                            variant={isScrolled ? "default" : "secondary"}
                            size="sm"
                            className="gap-2"
                        >
                            <ShoppingBag className="h-4 w-4" />
                            Shop Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? "text-slate-900" : "text-white"} />
                        ) : (
                            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-2">
                    {["Our Story", "Shop", "Farming", "Wholesale"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-slate-600 font-medium py-2 border-b border-slate-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Button className="w-full gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Shop Now
                    </Button>
                </div>
            )}
        </header>
    )
}
