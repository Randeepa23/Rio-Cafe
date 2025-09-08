import { useState, useEffect } from "react";
import riocafefoodarea from "@/assets/riocafefoodarea.jpg";
import { Coffee, Home, Utensils, Sparkles as SparkleIcon } from "lucide-react";
import { AnimatedOrbs } from "@/components/ui/animated-orbs";
import { Sparkles } from "@/components/ui/sparkles";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const dynamicTexts = [
    "A Culinary Journey at Rio Cafe",
    "Where Taste Meets Excellence",
    "Experience Local Flavors",
    "Taste the Magic of Rio Cafe"
  ];

  const uberEatsUrl =
    (import.meta.env.VITE_UBER_EATS_URL as string | undefined) ??
    "https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setIsTyping(false);
      }, 500);
    }, 4000);
    return () => clearInterval(textTimer);
  }, [dynamicTexts.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Parallax state for background
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY * 0.2);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-2000 ${
            isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
          style={{
            backgroundImage: `url('${riocafefoodarea}')`,
            backgroundPositionY: `calc(50% + ${parallaxY}px)`,
          }}
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 transition-all duration-2000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <AnimatedOrbs className="pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute left-1/2 -translate-x-1/2 top-40 w-72 h-36 pointer-events-none">
          <Sparkles count={28} className="relative w-full h-full" />
        </div>

        {/* Headline */}
        <div
          className={`mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
            {dynamicTexts[currentTextIndex].split(" ").map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-500 ${
                  isTyping ? "opacity-50 scale-95" : "opacity-100 scale-100"
                }`}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        {/* Sub-headline */}
        <p
          className={`mb-12 text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Experience the taste of fresh, local ingredients in our welcoming
          atmosphere
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <button
            onClick={() => scrollToSection("menu-showcase")}
            className="group bg-[#FF8C42] hover:bg-[#FF6B35] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Menu
          </button>
          <a
            href={uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Order on Uber Eats
          </a>
        </div>

        {/* Features */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            {
              icon: <Home className="w-8 h-8 text-[#FF8C42]" />,
              title: "Cozy Atmosphere",
              desc: "Warm and welcoming dining space",
            },
            {
              icon: <Utensils className="w-8 h-8 text-[#FF8C42]" />,
              title: "Fresh Cuisine",
              desc: "Locally sourced ingredients",
            },
            {
              icon: <SparkleIcon className="w-8 h-8 text-[#FF8C42]" />,
              title: "Premium Service",
              desc: "Exceptional dining experience",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
