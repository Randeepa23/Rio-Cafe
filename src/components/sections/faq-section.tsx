import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";

const faqs = [
  {
    question: "What is the dress code?",
    answer: "We maintain a smart casual dress code. We recommend elegant attire that complements our upscale atmosphere. Beachwear and flip-flops are not permitted in the dining areas."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely. Our chefs are experienced in creating exceptional dishes for various dietary needs including vegetarian, vegan, gluten-free, and other specific requirements. Please inform us when making your reservation."
  },
  {
    question: "What are your hours of operation?",
    answer: "We're open daily from 11:00 AM to 11:00 PM. Our bar service extends until midnight. We recommend making reservations, especially for dinner service and weekends."
  },
  {
    question: "Is valet parking available?",
    answer: "Yes, complimentary valet parking is available for all guests. Our valet service operates during all business hours for your convenience."
  },
  {
    question: "Can I make special arrangements for celebrations?",
    answer: "Certainly! We offer personalized service for birthdays, anniversaries, and other special occasions. Contact our events team to discuss custom arrangements, special menu options, and decorations."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4 scroll-fade">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <GlassCard className="scroll-fade">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}