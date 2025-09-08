import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Check } from "phosphor-react";

const experiences = [
  {
    name: "À La Carte Dining",
    description: "Join us for lunch or dinner from our extensive main menu.",
    features: [
      "Ocean views",
      "Full menu access", 
      "Romantic ambiance"
    ]
  },
  {
    name: "Chef's Tasting Menu",
    description: "A curated journey through our chef's finest creations.",
    features: [
      "7 courses",
      "Wine pairing available",
      "A truly immersive experience"
    ],
    popular: true
  },
  {
    name: "Private Events",
    description: "Host your special occasion in an exclusive setting.",
    features: [
      "Customized menu",
      "Dedicated staff",
      "Seating for up to 30 guests"
    ]
  }
];

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4 scroll-fade">
            Curated Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-fade">
            Choose the perfect dining experience for your occasion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <GlassCard key={index} className="relative text-center hover scroll-fade" hover>
              {experience.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-primary mb-4">
                  {experience.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experience.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {experience.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm">
                      <Check size={16} className="text-accent mr-2" weight="bold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full neomorphic border-0 text-primary hover:text-accent"
                >
                  Learn More
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}