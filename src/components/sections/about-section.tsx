import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cafeInside from "@/assets/riocafeinside.webp";
import cafeInsideFallback from "@/assets/riocafename.jpg";
import { AnimatedOrbs } from "@/components/ui/animated-orbs";

export function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Left Side - Image */}
          <div className="relative">
            <AnimatedOrbs className="absolute inset-0 -z-10" />
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cafeInside}
                alt="Rio Cafe interior"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = cafeInsideFallback; }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF8C42] rounded-full opacity-20"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary">
              Our Story
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in the heart of our vibrant community, Rio Cafe began as a dream to create more than just a dining experience – we wanted to craft a sanctuary where culinary artistry meets the warmth of local hospitality.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple yet profound: every ingredient tells a story, every dish carries the essence of our local community, and every meal is an opportunity to connect with friends, family, and neighbors. We source our ingredients from local farmers, bakers, and artisans who share our commitment to quality and sustainability.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small family venture has grown into a beloved gathering place where the community comes together to celebrate life's beautiful moments over exceptional food and warm conversations. Our cozy atmosphere and friendly service make every visit feel like coming home.
            </p>
            
            <a 
              href="/about"
              className="inline-block mt-8 bg-[#0A2342] hover:bg-[#0A2342]/90 text-[#F5F5F5] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg btn-professional"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
