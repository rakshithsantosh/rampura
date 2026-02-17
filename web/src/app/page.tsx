import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { FeaturedProducts } from "@/components/sections/products";
import { WhyChooseUsSection } from "@/components/sections/why-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TransparencySection } from "@/components/sections/transparency";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <TransparencySection />
      <CTASection />
      <Footer />
    </main>
  );
}
