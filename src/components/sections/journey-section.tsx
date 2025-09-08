import { GlassCard } from "@/components/ui/glass-card";
import { Boat, CookingPot, Wine } from "phosphor-react";

const steps = [
  {
    icon: Boat,
    title: "Locally Sourced",
    description: "We partner with Negombo's fishermen and farmers for the freshest daily catch and produce."
  },
  {
    icon: CookingPot,
    title: "Expertly Crafted", 
    description: "Our master chefs transform the finest ingredients into modern Sri Lankan and international classics."
  },
  {
    icon: Wine,
    title: "Impeccably Served",
    description: "Experience unparalleled service in our breathtaking beachfront setting."
  }
];

export function JourneySection() {
  return (
    <section id="journey" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4 scroll-fade">
            The Rio Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-fade">
            Our commitment to excellence shines through every step of your culinary journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <GlassCard key={index} className="text-center hover scroll-fade" hover>
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={32} className="text-accent" weight="light" />
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}