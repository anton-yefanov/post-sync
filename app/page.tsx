import Navbar from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import FaqSection from "@/components/landing/faq-section";
import Footer from "@/components/landing/footer";
import { PricingController } from "@/components/pricing/pricing-controller";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingController />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
