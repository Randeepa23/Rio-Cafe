import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { MenuShowcase } from "@/components/sections/menu-showcase";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuShowcase />
      <GallerySection showViewAllButton={true} limit={9} excludeAlts={["Juice 5"]} />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;