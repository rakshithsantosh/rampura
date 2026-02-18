import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-[var(--color-neutral-dark)] text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-2xl font-bold text-white">
                            Rampura Organics
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Certified trust from Indian soil. Bringing the purest organic produce from our family farms to your table.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[var(--color-primary-green)] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[var(--color-primary-green)] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="bg-slate-800 p-2 rounded-full hover:bg-[var(--color-primary-green)] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Shop", "Our Story", "Farming Process", "Wholesale"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-400 hover:text-[var(--color-fresh-leaf)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-[var(--color-fresh-leaf)] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="h-5 w-5 mt-0.5 text-[var(--color-fresh-leaf)] shrink-0" />
                                <span>
                                    Rampura Organics India Pvt Ltd,<br />
                                    Rampura village, Srirangapatna Taluk,<br />
                                    Mandya District, Karnataka - 571427
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone className="h-5 w-5 text-[var(--color-fresh-leaf)] shrink-0" />
                                <span>+91 87624 47427</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail className="h-5 w-5 text-[var(--color-fresh-leaf)] shrink-0" />
                                <span>hello@rampuraorganics.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Certifications (Visual placeholders) */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Certified By</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs text-slate-400">
                                [USDA Organic]
                            </div>
                            <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs text-slate-400">
                                [India Organic]
                            </div>
                            <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs text-slate-400">
                                [Jaivik Bharat]
                            </div>
                            <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs text-slate-400">
                                [FSSAI]
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Rampura Organics. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
