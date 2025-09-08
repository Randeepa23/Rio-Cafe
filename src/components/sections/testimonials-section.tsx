import { GlassCard } from "@/components/ui/glass-card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles } from "@/components/ui/sparkles";

export function TestimonialsSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Don Anton",
      quote:
        "The food, place, and staff were excellent. We enjoyed quality food in a cosy environment. It appeared to me that food was made using quality ingredients. The prices were affordable.",
      meta: "Dine in · Brunch · Rs 500–1,000",
      rating: 5
    },
    {
      name: "Aravinda Aponsu",
      quote:
        "A nice cafe to enjoy a cup of tea or coffee. The ice coffee is really good. A good variety of snacks available. Usually made in smaller quantities so that they keep replenishing the selection. Prices are moderate.",
      meta: "Dine in · Rs 1,000–1,500",
      rating: 5,
      subMeta: "Food 5/5 | Service 5/5 | Atmosphere 5/5"
    },
    {
      name: "Kavinda Domenico",
      quote:
        "Food is so good and fresh. Staff is so friendly and quick. There was a washroom for customers. There was a large sitting area. They also serve soft drinks. They have different types of cakes.",
      meta: "Takeaway · Brunch",
      rating: 5,
      subMeta: "Kid‑friendliness · Very Clean Place."
    },
    {
      name: "Dahami Kumarasiri",
      quote:
        "I tried chocolate moose cake just now. It's very creamy and super delicious.",
      meta: undefined,
      rating: 5,
      subMeta: "Food 5/5 | Service 5/5 | Atmosphere 5/5"
    }
  ];

  const getInitials = (fullName: string): string => {
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts[parts.length - 1]?.[0] ?? "";
    return (first + last).toUpperCase();
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-background to-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <Sparkles count={18} className="w-full h-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0A2342] mb-6">
            What Our Guests Are Saying
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Discover why our guests keep coming back for more
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30">
              <span className="text-amber-600 font-semibold">⭐ 5.0</span>
              <span className="mx-2 text-amber-700/50">|</span>
              <span className="text-amber-600">average rating</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 border border-primary/30">
              <span className="text-primary font-semibold">150+</span>
              <span className="mx-2 text-primary/50">|</span>
              <span className="text-primary">verified reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <GlassCard
              key={index}
              className={`p-7 h-full rounded-2xl border border-white/40 bg-gradient-to-b from-white/80 to-white/60 dark:from-white/10 dark:to-white/5 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center font-bold shadow-lg ring-2 ring-primary/20">
                  {getInitials(t.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < (t.rating ?? 5) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'} drop-shadow-sm`}
                      />
                    ))}
                  </div>
                  {t.meta && (
                    <p className="text-sm text-muted-foreground px-2 py-1 rounded-full bg-muted/50 inline-block">
                      {t.meta}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative mt-2">
                <svg className="w-8 h-8 text-[#FF8C42] opacity-60 absolute -left-1 -top-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-[15px] leading-relaxed text-foreground/90 pl-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-primary/10">
                <p className="font-semibold text-primary text-base flex items-center gap-2">
                  {t.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20"></span>
                </p>
                {t.subMeta && (
                  <p className="text-muted-foreground text-sm mt-1.5 font-medium">
                    {t.subMeta}
                  </p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}