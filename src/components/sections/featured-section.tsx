import { GlassCard } from "@/components/ui/glass-card";
import { useChildrenReveal } from "@/hooks/useScrollAnimation";

const awards = [
  "Time Out Colombo",
  "Luxury Travel Guide", 
  "TripAdvisor Excellence",
  "Sri Lanka Tourism Board",
  "Conde Nast Traveler"
];

export function FeaturedSection() {
  const { containerRef } = useChildrenReveal();
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4 scroll-fade">
            Recognized & Acclaimed
          </h2>
        </div>
        
        <GlassCard className="max-w-4xl mx-auto scroll-fade">
          <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
                data-reveal
              >
                <div className="h-16 flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-light">
                  {award}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}