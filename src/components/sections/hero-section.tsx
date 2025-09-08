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
    // Trigger initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-2000 ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          style={{
            backgroundImage: `url('${riocafefoodarea}')`,
            backgroundPositionY: `calc(50% + ${parallaxY}px)`
          }}
        />
        
        {/* Dynamic gradient overlay */}
        <div className={`absolute inset-0 transition-all duration-2000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
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

      {/* Content Overlay with Enhanced Animations */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <AnimatedOrbs className="pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute left-1/2 -translate-x-1/2 top-40 w-72 h-36 pointer-events-none">
          <Sparkles count={28} className="relative w-full h-full" />
        </div>

        {/* Animated Sub-headline */}
        <div className={`mb-12 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Experience the taste of fresh, local ingredients in our welcoming atmosphere
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button 
            onClick={() => window.location.href = '/Menu'}
            className="group bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Explore Our Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          
          {/* Uber Eats button intentionally removed from hero */}
        </div>

        {/* Feature Highlights */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {[
            { icon: "🏠", title: "Cozy Atmosphere", desc: "Warm and welcoming dining space" },
            { icon: "🍽️", title: "Fresh Cuisine", desc: "Locally sourced ingredients" },
            { icon: "✨", title: "Premium Service", desc: "Exceptional dining experience" }
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-2000 delay-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Floating food icons */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <div className="text-3xl">🍕</div>
        </div>
        <div className="absolute top-40 right-20 animate-float-slow" style={{ animationDelay: '1s' }}>
          <div className="text-3xl">🍰</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float-slow" style={{ animationDelay: '2s' }}>
          <div className="text-3xl">☕</div>
        </div>
      </div>
    </section>
  );
}
