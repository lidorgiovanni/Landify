import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LandingPageSection from "@/components/LandingPageSection";
import PortfolioSection from "@/components/PortfolioSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import TrustBar from "@/components/TrustBar";

const Index = () => {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
        }),
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => observer.observe(el));
      return observer;
    };
    // slight delay so DOM is fully painted
    const t = setTimeout(() => { const obs = observe(); return () => obs.disconnect(); }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <LandingPageSection />
      <PortfolioSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
