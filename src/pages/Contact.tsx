import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Envelope, Clock } from "phosphor-react";
import { useEffect, useState } from "react";
import { AnimatedOrbs } from "@/components/ui/animated-orbs";
import { Sparkles } from "@/components/ui/sparkles";
import riocafelobby from "@/assets/riocafelobby3.jpg";

export default function Contact() {
  const uberEatsUrl = (import.meta.env.VITE_UBER_EATS_URL as string | undefined)
    ?? "https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q?srsltid=AfmBOoqn3kZV0gf4xLytSWZ9-KEyYY0NERJLcIgOpD9_GlNhDt7BD35du";
  const branches = [
    {
      name: "Dankotuwa",
      url: "https://www.google.com/maps/place/Rio+Cafe/@7.301209,79.8817011,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2e96cdbb8cba1:0xbef884207647b8e0!8m2!3d7.301209!4d79.884276!16s%2Fg%2F11h52qk5bc?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      hours: "Mon–Sun: 11:00 AM – 11:00 PM • Bar until 12:00 AM",
      isMain: true
    },
    {
      name: "Kochchikade",
      url: "https://www.google.com/maps/place/Rio+Cafe/@7.2585407,79.8534738,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2e9a2ebd922ef:0x6ef3a591ea2425de!8m2!3d7.2585407!4d79.8560487!16s%2Fg%2F11ky4465ks?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      hours: "Mon–Sun: 11:00 AM – 11:00 PM • Bar until 12:00 AM"
    },
    {
      name: "Negombo",
      url: "https://www.google.com/maps/place/Rio+Cafe/@7.1978448,79.7784283,13z/data=!4m10!1m2!2m1!1srio+cafe+negombo!3m6!1s0x3ae2ef6c153b5cad:0xbc66cd859730a820!8m2!3d7.1978448!4d79.854646!15sChByaW8gY2FmZSBuZWdvbWJvIgOIAQFaEiIQcmlvIGNhZmUgbmVnb21ib5IBBGNhZmWqAXAKDS9nLzExa3k0NDY1a3MKDC9nLzFoZF84cmgwMwoKL20vMDNneDl2ZhABKgwiCHJpbyBjYWZlKAAyHxABIhu8nKS721GBbFZv33KO0Lw07MiVyIc4VZtNfgoyFBACIhByaW8gY2FmZSBuZWdvbWJv4AEA!16s%2Fg%2F11t9wlcxtc?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      hours: "Mon–Sun: 11:00 AM – 11:00 PM • Bar until 12:00 AM"
    },
    {
      name: "Wennappuwa",
      url: "https://www.google.com/maps/place/Rio+Cafe/@7.3344055,79.8419375,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2c30006655f17:0xc28ba05e9be922ee!8m2!3d7.3344055!4d79.8445124!16s%2Fg%2F11lnmtr2f2?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      hours: "Mon–Sun: 11:00 AM – 11:00 PM • Bar until 12:00 AM"
    }
  ];
  type WeeklyHour = { day: string; hours?: string; special?: string; note?: string };
  const weeklyHours: WeeklyHour[] = [
    { day: 'Monday', hours: '6:30 AM–8 PM' },
    { day: 'Tuesday', hours: '6:30 AM–8 PM' },
    { day: 'Wednesday', hours: '6:30 AM–8 PM' },
    { day: 'Thursday', special: 'Mawlid', note: 'Hours might differ' },
    { day: 'Friday', special: 'Mawlid', hours: '6:30 AM–8 PM', note: 'Hours might differ' },
    { day: 'Saturday', hours: '6 AM–8 PM' },
    { day: 'Sunday', hours: '6:30 AM–1 PM' },
  ] as const;
  const getTodayName = () => new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'Asia/Colombo' }).format(new Date());
  const [todayName, setTodayName] = useState<string>(getTodayName());
  useEffect(() => {
    const interval = setInterval(() => {
      const name = getTodayName();
      setTodayName((prev) => (prev === name ? prev : name));
    }, 30000); // check every 30s to roll over at midnight
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${riocafelobby}')` }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <AnimatedOrbs className="absolute inset-0" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow mb-4 text-glow">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
            </p>
          </div>
          <div className="mx-auto mt-6 w-64 h-28 pointer-events-none">
            <Sparkles count={24} className="relative w-full h-full" />
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+94776371365" className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all">Call Us</a>
            <a href="mailto:theriocafe2019@gmail.com" className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all">Email</a>
            <a href={uberEatsUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#06C167] to-[#16A34A] text-white hover:from-[#16A34A] hover:to-[#06C167] transition-all">Uber Eats</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <GlassCard>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">We'll get in touch with you soon!!</h2>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const name = (data.get('name') || '').toString();
                  const email = (data.get('email') || '').toString();
                  const phone = (data.get('phone') || '').toString();
                  const subject = ((data.get('subject') || '').toString()) || 'Website Inquiry';
                  const message = (data.get('message') || '').toString().trim();

                  const messageErrorEl = form.querySelector('[data-message-error]') as HTMLParagraphElement | null;
                  if (!message) {
                    if (messageErrorEl) {
                      messageErrorEl.textContent = 'Message is required.';
                      messageErrorEl.classList.remove('hidden');
                    }
                    const messageEl = form.querySelector('#message') as HTMLTextAreaElement | null;
                    messageEl?.focus();
                    return;
                  } else if (messageErrorEl) {
                    messageErrorEl.textContent = '';
                    messageErrorEl.classList.add('hidden');
                  }

                  const apiUrl = (import.meta.env.VITE_CONTACT_POST_URL as string | undefined);
                  const payload = { name, email, phone, subject, message };

                  if (apiUrl) {
                    fetch(apiUrl, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload)
                    }).then(() => {
                      alert('Thanks! Your message has been sent.');
                      form.reset();
                    }).catch(() => {
                      // Fallback to mailto if POST fails
                      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
                      const href = `mailto:theriocafe2019@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = href;
                    });
                  } else {
                    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
                    const href = `mailto:theriocafe2019@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = href;
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-serif">Name <span className="text-red-500" aria-hidden>*</span></Label>
                    <Input id="name" name="name" placeholder="Name *" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-serif">Email <span className="text-red-500" aria-hidden>*</span></Label>
                    <Input id="email" name="email" type="email" placeholder="Email *" className="mt-1" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="font-serif">Phone <span className="text-red-600 text-xs align-top">(Mandatory)</span></Label>
                  <Input id="phone" name="phone" placeholder="Mobile *" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="subject" className="font-serif">Company</Label>
                  <Input id="subject" placeholder="Reservation inquiry, event planning, etc." className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="font-serif">Your Message <span className="text-red-500" aria-hidden>*</span></Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="mt-1 min-h-[120px]"
                    required
                  />
                  <p data-message-error className="hidden mt-1 text-sm text-red-600"></p>
                </div>
                <Button type="submit" className="w-full neomorphic border-0 text-primary hover:text-accent">
                  Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Contact Information */}
            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-start">
                  <MapPin size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Company Address</h3>
                    <p className="text-muted-foreground">
                      RIO BAKERY AND CAFE (PVT) LTD<br />
                      V.C. Road, Kirimatiyana,<br />
                      Lunuwila
                    </p>
                    <p className="mt-2">
                      <a
                        href="https://www.google.com/maps/search/RIO+BAKERY+AND+CAFE+LTD+V.C.+Road,+Kirimatiyana,+Lunuwila/@7.206209,79.7911805,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-2"
                      >
                        View on Google Maps
                      </a>
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <Phone size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Hot Line</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+94776371365" className="hover:text-accent underline-offset-2 hover:underline">077 6371365</a>
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <Envelope size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:theriocafe2019@gmail.com" className="hover:text-accent underline-offset-2 hover:underline">theriocafe2019@gmail.com</a>
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <MapPin size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div>
                    <h3 className="font-medium text-primary mb-2">Branches</h3>
                    <ol className="list-decimal pl-5 text-muted-foreground space-y-1 mb-4">
                      {branches.map((b) => (
                        <li key={b.name}>
                          <a href={b.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent underline-offset-2 hover:underline">
                            {b.name}
                          </a>
                        </li>
                      ))}
                    </ol>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {branches.map((b) => (
                        <a
                          key={b.name}
                          href={b.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative rounded-lg overflow-hidden ring-1 ring-black/5 hover:shadow-lg transition-all group"
                        >
                          <div className="aspect-[16/9] bg-gradient-to-br from-muted/80 to-muted/60 flex items-center justify-center">
                            <img src="/placeholder.svg" alt="Map placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                            <div className="relative z-10 text-center">
                              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                                <MapPin size={18} className="text-accent" />
                                <span>{b.name}</span>
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start">
                  <Clock size={24} className="text-accent mt-1 mr-4 flex-shrink-0" weight="light" />
                  <div className="w-full">
                    <h3 className="font-medium text-primary mb-2">Hours: <span className="font-semibold">{todayName}</span></h3>
                    <div className="text-muted-foreground">
                      {weeklyHours.map((item) => (
                        <div key={item.day} className={`flex items-baseline justify-between py-1 ${item.day === todayName ? 'text-primary font-semibold' : ''}`}>
                          <div className="flex items-center gap-2">
                            <span>{item.day}</span>
                            {item.special && (
                              <span className="text-xs text-muted-foreground">({item.special})</span>
                            )}
                          </div>
                          <div className="text-right">
                            {item.hours ? (
                              <span>{item.hours}</span>
                            ) : (
                              <span className="text-accent">Hours might differ</span>
                            )}
                            {item.note && item.hours && (
                              <div className="text-xs text-accent">{item.note}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed - Main Branch */}
      <section className="pb-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <GlassCard className="max-w-6xl mx-auto">
            <h3 className="text-xl font-medium text-primary mb-4">Find Us – Main Branch (Dankotuwa)</h3>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-black/5">
              <iframe
                title="Rio Cafe Dankotuwa Map"
                src="https://www.google.com/maps?q=Rio+Cafe+Dankotuwa&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
