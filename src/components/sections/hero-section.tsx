import { useState, useEffect } from "react";
// Social media icons will be simple text/Unicode for now
import { AnimatedOrbs } from "@/components/ui/animated-orbs";
import { Sparkles } from "@/components/ui/sparkles";

// Import images for carousel
import riocafefoodarea from "@/assets/riocafefoodarea.jpg";
import outsideRio from "@/assets/outside rio.jpg";
import riocafeInside from "@/assets/rio cafe inside.jpg";
import riocafeInside2 from "@/assets/rio cafe inside 2.jpg";
import riocafeLobby from "@/assets/RIOCAFELOBBY.webp";

const carouselImages = [
  riocafefoodarea,
  outsideRio,
  riocafeInside,
  riocafeInside2,
  riocafeLobby,
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setParallaxY(y * 0.2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-2000 ${
                  isLoaded ? 'scale-100' : 'scale-110'
                }`}
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundPositionY: `calc(50% + ${parallaxY}px)`
                }}
              />
            </div>
          ))}
          
          {/* Light overlays to keep cafe interior visible */}
          <div className={`absolute inset-0 transition-all duration-2000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16">
          <AnimatedOrbs className="pointer-events-none absolute inset-0 -z-10" />
          <div className="absolute left-1/2 -translate-x-1/2 top-40 w-80 h-40 pointer-events-none">
            <Sparkles count={30} className="relative w-full h-full" />
          </div>



          {/* Image Carousel Indicators */}
          <div className={`flex justify-center space-x-3 mt-12 transition-all duration-1000 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-orange-400 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
  );
}
