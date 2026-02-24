"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
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
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-11/12 max-w-7xl rounded-full",
                isScrolled
                    ? "bg-[var(--background)]/80 backdrop-blur-xl shadow-sm border border-[var(--foreground)]/5 py-2 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    : "bg-transparent py-4 border border-transparent px-4"
            )}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--color-primary)]/20 bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="Rampura Organics Logo"
                            fill
                            className="object-cover p-1"
                        />
                    </div>
                    <span
                        className={cn(
                            "font-heading text-[1.1rem] font-bold tracking-tight transition-colors duration-500",
                            isScrolled ? "text-[var(--foreground)]" : "text-[var(--foreground)]/90"
                        )}
                    >
                        Rampura Organics
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {[
                        { label: "About", href: "/about" },
                        { label: "Kitchen", href: "/kitchen" },
                        { label: "Team", href: "/team" },
                        { label: "Contact", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                                isScrolled ? "text-[var(--foreground)]/80" : "text-[var(--foreground)]/90"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "default" : "outline"}
                        size="sm"
                        className={cn("gap-2 rounded-full px-5 transition-all duration-500", !isScrolled && "border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5")}
                        asChild
                    >
                        <Link href="https://rampura-organics-india-pvt-ltd.myshopify.com/" target="_blank" rel="noopener noreferrer">
                            <ShoppingBag className="h-4 w-4" />
                            Shop Now
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-[var(--foreground)]/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="text-[var(--foreground)]" />
                    ) : (
                        <Menu className="text-[var(--foreground)]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[105%] left-0 right-0 bg-[var(--background)]/95 backdrop-blur-xl shadow-lg rounded-2xl p-4 md:hidden flex flex-col space-y-2 border border-[var(--foreground)]/5 animate-in fade-in slide-in-from-top-2">
                    {[
                        { label: "About", href: "/about" },
                        { label: "Kitchen", href: "/kitchen" },
                        { label: "Team", href: "/team" },
                        { label: "Contact", href: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-[var(--foreground)]/80 font-medium py-3 px-4 rounded-xl hover:bg-[var(--primary)]/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="pt-2 px-2">
                        <Button className="w-full gap-2 rounded-full h-12 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90" asChild>
                            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                                <ShoppingBag className="h-4 w-4" />
                                Shop Now
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

