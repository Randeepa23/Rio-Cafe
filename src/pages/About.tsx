import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Heart, Users, Trophy, ShieldCheck, Star, CurrencyDollar, MapPin, Storefront } from "phosphor-react";
import { AnimatedOrbs } from "@/components/ui/animated-orbs";
import { Sparkles } from "@/components/ui/sparkles";
import { useChildrenReveal } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import outsideRio from "@/assets/outside rio.jpg";
import insideRio from "@/assets/rio cafe inside.jpg";
import insideRio2 from "@/assets/rio cafe inside 2.jpg";
import riocafenameImg from "@/assets/riocafename.jpg";
import riocafelooby2Img from "@/assets/riocafelooby2.jpg";
import riocafelobby3Img from "@/assets/riocafelobby3.jpg";
import riocafeFallback from "@/assets/riocafename.jpg";

function CountUp({ end, duration = 1200, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(end * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  const formatted = value.toLocaleString();
  return <span>{formatted}{suffix}</span>;
}

export default function About() {
  const { containerRef } = useChildrenReveal();
  const uberEatsUrl = (import.meta.env.VITE_UBER_EATS_URL as string | undefined)
    ?? "https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q?srsltid=AfmBOoqn3kZV0gf4xLytSWZ9-KEyYY0NERJLcIgOpD9_GlNhDt7BD35du";
  const yearsOfCraft = new Date().getFullYear() - 2019;
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #CD7F32, #8B5E3C)' }}>
        <AnimatedOrbs className="absolute inset-0" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-md mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Born from a passion for Sri Lankan flavors and international hospitality,
              Rio Cafe blends tradition with modern culinary artistry.
            </p>
            
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-28 w-64 h-28 pointer-events-none">
            <Sparkles count={24} className="relative w-full h-full" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="order-1">
              <GlassCard>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Nestled along the pristine shores, Rio Cafe was born from a dream
                    to create something extraordinary—where Sri Lanka’s vibrant culinary heritage
                    meets the sophistication of modern dining.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Since 2019.07.18, our team has celebrated local ingredients and warm hospitality,
                    crafting memorable experiences for every guest who walks through our doors.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every dish tells a story of our island’s rich flavors, while our sustainable
                    sourcing supports fishing and farming communities we’re proud to call neighbors.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                    Today, Rio Cafe is a beloved daily ritual for many—craft bakery by morning,
                    spirited cafe by noon, and a cozy spot to unwind by evening. From slow‑brewed
                    coffee and freshly baked pastries to celebratory cakes and hearty savories, we
                    obsess over the details so you can simply relax and enjoy.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/60 p-4 border border-white/40">
                      <p className="text-sm text-muted-foreground">Owner / Founder</p>
                      <p className="text-xl font-semibold" style={{ color: '#CD7F32' }}>D M N C Dissanayake</p>
                    </div>
                    <div className="rounded-xl bg-white/60 p-4 border border-white/40">
                      <p className="text-sm text-muted-foreground">Started Date</p>
                      <p className="text-xl font-semibold" style={{ color: '#CD7F32' }}>2019.07.18</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-sm border" style={{ backgroundColor: 'rgba(205, 127, 50, 0.1)', color: '#CD7F32', borderColor: 'rgba(205, 127, 50, 0.2)' }}>Tagline: Happy tea time</span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-4" style={{ color: '#CD7F32' }}>Key Milestones</h4>
                    <div className="relative pl-6">
                      <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: 'rgba(205, 127, 50, 0.3)' }} />
                      <ol className="space-y-6 text-muted-foreground">
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>2019.07.18 — Opening day</p>
                          <p>Rio Cafe started in Dankotuwa. First branch opens its doors to the community.</p>
                        </li>
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>2020.08.19 — Second branch & pastry section</p>
                          <p>Second branch launches in Kochchikade. A new pastry section begins to produce cakes and desserts for distribution across stores.</p>
                        </li>
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>2022.09.18 — Third branch</p>
                          <p>Negombo branch opens, bringing Rio Cafe closer to the seaside community.</p>
                        </li>
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>2023 — Incorporated</p>
                          <p>Registered as <span className="font-semibold" style={{ color: '#CD7F32' }}>Rio Bakery & Cafe Private Limited (LTD)</span>.</p>
                        </li>
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>2023.07.28 — Central bakery</p>
                          <p>Opened a dedicated bakery in Kirimatiyana to supply all stores efficiently.</p>
                        </li>
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>2024.09.03 — Fourth branch</p>
                          <p>Wennappuwa branch opens, expanding our neighborhood presence.</p>
                        </li>
                        <li className="relative">
                          <p className="font-semibold" style={{ color: '#CD7F32' }}>Now — Packaged bread line</p>
                          <p>Launched a separate section to make packaged sandwich bread for all stores.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div className="relative order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
                  <img src={outsideRio} onError={(e) => { (e.currentTarget as HTMLImageElement).src = riocafeFallback; }} alt="Outside Rio Cafe" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
                  <img src={insideRio} onError={(e) => { (e.currentTarget as HTMLImageElement).src = riocafeFallback; }} alt="Inside Rio Cafe" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
                  <img src={insideRio2} onError={(e) => { (e.currentTarget as HTMLImageElement).src = riocafeFallback; }} alt="Inside Rio Cafe 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
                  <img src={riocafenameImg} onError={(e) => { (e.currentTarget as HTMLImageElement).src = riocafeFallback; }} alt="Rio Cafe Name" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
                  <img src={riocafelooby2Img} onError={(e) => { (e.currentTarget as HTMLImageElement).src = riocafeFallback; }} alt="Rio Cafe Lobby 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
                  <img src={riocafelobby3Img} onError={(e) => { (e.currentTarget as HTMLImageElement).src = riocafeFallback; }} alt="Rio Cafe Lobby 3" className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* Removed RIOCAFELOBBY.webp as requested */}
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <GlassCard className="flex items-start gap-4 p-6 bg-muted/40 border-white/40">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CurrencyDollar size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-primary">Value For Money</h3>
                <p className="text-muted-foreground">Savories at the lowest price</p>
              </div>
            </GlassCard>
            <GlassCard className="flex items-start gap-4 p-6 bg-muted/40 border-white/40">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Star size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-primary">Satisfied Customers</h3>
                <p className="text-muted-foreground">Guaranteed product quality</p>
              </div>
            </GlassCard>
            <GlassCard className="flex items-start gap-4 p-6 bg-muted/40 border-white/40">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldCheck size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-primary">Secure Payments</h3>
                <p className="text-muted-foreground">Safest payment technologies</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Locations</h2>
            <p className="text-muted-foreground">Find us across the region</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <GlassCard className="p-6">
              <div className="flex items-start gap-3">
                <Storefront size={28} className="text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Dankotuwa — Main Branch</h3>
                  <p className="text-muted-foreground">Our flagship store serving you since 2019</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rio+Cafe+Dankotuwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:underline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-start gap-3">
                <MapPin size={28} className="text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Kochchikade</h3>
                  <p className="text-muted-foreground">Conveniently located for your daily cravings</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rio+Cafe+Kochchikade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:underline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-start gap-3">
                <MapPin size={28} className="text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Negombo</h3>
                  <p className="text-muted-foreground">Seaside cafe ambience with signature bakes and coffee</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rio+Cafe+Negombo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:underline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-start gap-3">
                <MapPin size={28} className="text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Wennappuwa</h3>
                  <p className="text-muted-foreground">Your neighborhood Rio Cafe experience</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rio+Cafe+Wennappuwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:underline"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values Section removed as requested */}

      {/* CTA + Stats Section to fill bottom blue area */}
      <section className="py-20" id="contact-section" style={{ background: 'linear-gradient(to bottom, #CD7F32, #8B5E3C)' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <GlassCard className="p-8 bg-white/90">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3" style={{ color: '#CD7F32' }}>Come Experience Rio Cafe</h3>
            <p className="text-muted-foreground mb-6">Book your visit or order online to enjoy our flavors at home.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="group text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-[#8B5E3C]" style={{ background: '#CD7F32' }}>Contact Us</a>
                <a href={uberEatsUrl} target="_blank" rel="noopener noreferrer" className="group bg-[#06C167] hover:bg-[#16A34A] text-white px-8 py-3 rounded-full font-semibold transition-all">Order on Uber Eats</a>
              </div>
            </GlassCard>

            <div className="grid grid-cols-3 gap-4">
              <GlassCard className="bg-white text-black text-center p-6">
                <p className="text-xs uppercase tracking-wide opacity-80">Years</p>
                <p className="text-4xl font-extrabold mt-1"><CountUp end={yearsOfCraft} suffix="+" /></p>
              </GlassCard>
              <GlassCard className="bg-white text-black text-center p-6">
                <p className="text-xs uppercase tracking-wide opacity-80">Branches</p>
                <p className="text-4xl font-extrabold mt-1"><CountUp end={4} /></p>
              </GlassCard>
              <GlassCard className="bg-white text-black text-center p-6">
                <p className="text-xs uppercase tracking-wide opacity-80">Guests</p>
                <p className="text-4xl font-extrabold mt-1"><CountUp end={5000} suffix="+" /></p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}