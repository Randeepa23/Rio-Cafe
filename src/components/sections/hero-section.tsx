import { useState, useEffect } from "react";
import riocafefoodarea from "@/assets/riocafefoodarea.jpg";
import uberEatsLogo from "@/assets/uber eates.png";
import { AnimatedOrbs } from "@/components/ui/animated-orbs";
import { Sparkles } from "@/components/ui/sparkles";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const uberEatsUrl = (import.meta.env.VITE_UBER_EATS_URL as string | undefined)
    ?? "https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q?srsltid=AfmBOoqn3kZV0gf4xLytSWZ9-KEyYY0NERJLcIgOpD9_GlNhDt7BD35du";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Parallax state for background
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setParallaxY(y * 0.2); // 20% parallax factor
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: `translateY(${parallaxY}px)`,
          backgroundImage: `url(${riocafefoodarea})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <AnimatedOrbs className="pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute left-1/2 -translate-x-1/2 top-40 w-72 h-36 pointer-events-none">
          <Sparkles count={28} className="relative w-full h-full" />
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight text-glow">
            A Culinary Journey at Rio Cafe
          </h1>
        </div>

        {/* Sub-headline */}
        <div className="mb-12">
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Experience the taste of fresh, local ingredients in our welcoming atmosphere
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Menu Button */}
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
              text-white font-medium hover:bg-white/20 transition-colors duration-300
              flex items-center gap-2 group"
          >
            View Our Menu
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

          {/* Uber Eats Button */}
          <a
            href={uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full 
              text-white font-medium hover:bg-black/90 transition-colors duration-300
              flex items-center gap-3"
          >
            <img src={uberEatsLogo} alt="Uber Eats" className="h-6 w-auto" />
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
