import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LandingPageSection from "@/components/LandingPageSection";
import PortfolioSection from "@/components/PortfolioSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LandingPageSection />
      <PortfolioSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
