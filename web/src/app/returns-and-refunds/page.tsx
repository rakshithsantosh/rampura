import { Container } from "@/components/ui/container"

export default function ReturnsRefundsPage() {
    return (
        <div className="bg-[var(--color-warm-off-white)] min-h-screen py-16">
            <Container>
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-heading text-4xl font-bold text-[var(--color-primary-green)]">
                            Returns and Refunds
                        </h1>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
                        <section>
                            <p>
                                If it’s not too much trouble contact our help group through Whatsapp or Facebook Messenger for discounts and offer the photos of the things which you need to come back with the bill number, thing subtleties and explanation behind returning.
                            </p>
                        </section>

                        <section>
                            <p>
                                On verification of the grievance our team will get in touch with you inside 24Hrs and affirm the endorsement or dismissal of your discount. In the event that the discount is endorsed, at that point your discount will be prepared inside 7 working days.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-slate-200">
                            <p className="text-sm text-slate-500">
                                In the event that you haven’t got a discount inside 7 working days of your restoring the thing, kindly reach us at <a href="mailto:info@rampura.in" className="text-[var(--color-primary-green)] hover:underline">info@rampura.in</a> with the subject name “grievance” – Bill Number and protest depiction.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}
