import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { MapPin, Phone, User } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[var(--color-warm-off-white)]">
            <Navbar />

            {/* Simple Hero */}
            <div className="bg-[var(--color-primary-green)] text-white py-20 text-center mt-16">
                <Container>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold">Get in Touch</h1>
                    <p className="mt-4 text-white/80 text-lg">We'd love to hear from you.</p>
                </Container>
            </div>

            <Section background="white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                        {/* Registered Office */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="h-12 w-12 rounded-full bg-[var(--color-fresh-leaf)]/10 flex items-center justify-center text-[var(--color-fresh-leaf)]">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h2 className="font-heading text-2xl font-bold text-[var(--color-neutral-dark)]">
                                    Registered Office
                                </h2>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
                                <h3 className="font-bold text-lg text-slate-800 mb-4">
                                    Contact us and we'll get back to you.
                                </h3>
                                <div className="space-y-2 text-slate-600 leading-relaxed">
                                    <p className="font-semibold text-slate-800">Rampura Organics India Pvt Ltd,</p>
                                    <p>Rampura village,</p>
                                    <p>Srirangapatna Taluk, Mandya District,</p>
                                    <p>Karnataka, India</p>
                                    <p className="font-medium mt-2">PIN code: 571427</p>
                                </div>
                            </div>
                        </div>

                        {/* Branch Details */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="h-12 w-12 rounded-full bg-[var(--color-earth-brown)]/10 flex items-center justify-center text-[var(--color-earth-brown)]">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h2 className="font-heading text-2xl font-bold text-[var(--color-neutral-dark)]">
                                    Our Branch Details
                                </h2>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
                                <div className="space-y-2 text-slate-600 leading-relaxed mb-6">
                                    <p>Ground floor, No.115, Coles Road,</p>
                                    <p>Frazer town, Bangalore - 560 005,</p>
                                    <p>Karnataka, India</p>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-slate-200">
                                    <div className="flex items-start space-x-3">
                                        <Phone className="h-5 w-5 text-[var(--color-fresh-leaf)] mt-1" />
                                        <div>
                                            <p className="text-sm text-slate-500">Customer Care</p>
                                            <p className="font-bold text-slate-800">+91 87624 47427</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <User className="h-5 w-5 text-[var(--color-fresh-leaf)] mt-1" />
                                        <div>
                                            <p className="text-sm text-slate-500">Grievance Officer</p>
                                            <p className="font-bold text-slate-800">Nanda Kumar R</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
