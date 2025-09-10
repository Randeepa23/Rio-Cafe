import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { MapPin, Phone } from "phosphor-react";
import { AnimatedOrbs } from "@/components/ui/animated-orbs";
import { Sparkles } from "@/components/ui/sparkles";
import screenshotImage from "@/assets/Screenshot 2025-08-28 193748.png";
import riocafeInside from "@/assets/rio cafe inside.jpg";
import riocafeInside2 from "@/assets/rio cafe inside 2.jpg";
import riocafeLobby from "@/assets/RIOCAFELOBBY.webp";
import riocafeFoodArea from "@/assets/riocafefoodarea.jpg";

const outlets = [
  {
    id: "dankotuwa",
    name: "DANKOTUWA",
    address: "Nattandiya Road, Dankotuwa",
    phone: "074 3279384",
    isMain: true,
    mapUrl: "https://www.google.com/maps/place/Rio+Cafe/@7.301209,79.8817011,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2e96cdbb8cba1:0xbef884207647b8e0!8m2!3d7.301209!4d79.884276!16s%2Fg%2F11h52qk5bc?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
    image: riocafeInside
  },
  {
    id: "kochchikade",
    name: "KOCHCHIKADE",
    address: "Chilaw Road, Daluwakotuwa, Kochchikade",
    phone: "076 9388947",
    mapUrl: "https://www.google.com/maps/place/Rio+Cafe/@7.2585407,79.8534738,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2e9a2ebd922ef:0x6ef3a591ea2425de!8m2!3d7.2585407!4d79.8560487!16s%2Fg%2F11ky4465ks?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
    image: riocafeInside2
  },
  {
    id: "negombo",
    name: "NEGOMBO",
    address: "Galkanda Junction, Colombo Road, Negombo",
    phone: "076 0683630",
    mapUrl: "https://www.google.com/maps/place/Rio+Cafe/@7.1978448,79.7784283,13z/data=!4m10!1m2!2m1!1srio+cafe+negombo!3m6!1s0x3ae2ef6c153b5cad:0xbc66cd859730a820!8m2!3d7.1978448!4d79.854646!15sChByaW8gY2FmZSBuZWdvbWJvIgOIAQFaEiIQcmlvIGNhZmUgbmVnb21ib5IBBGNhZmWqAXAKDS9nLzExa3k0NDY1a3MKDC9nLzFoZF84cmgwMwoKL20vMDNneDl2ZhABKgwiCHJpbyBjYWZlKAAyHxABIhu8nKS721GBbFZv33KO0Lw07MiVyIc4VZtNfgoyFBACIhByaW8gY2FmZSBuZWdvbWJv4AEA!16s%2Fg%2F11t9wlcxtc?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
    image: riocafeLobby
  },
  {
    id: "wennappuwa",
    name: "WENNAPPUWA",
    address: "Negombo Road, Wennappuwa",
    phone: "077 7139038",
    mapUrl: "https://www.google.com/maps/place/Rio+Cafe/@7.3344055,79.8419375,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2c30006655f17:0xc28ba05e9be922ee!8m2!3d7.3344055!4d79.8445124!16s%2Fg%2F11lnmtr2f2?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
    image: riocafeFoodArea
  }
];

export default function Outlets() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${screenshotImage}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <AnimatedOrbs className="absolute inset-0" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow mb-4 text-glow">
              Our Outlets
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Experience the authentic taste of Rio Cafe at any of our convenient locations across Sri Lanka.
            </p>
            <p className="text-white/80 text-base">
              Four branches serving delicious food with the same quality and passion.
            </p>
          </div>
          <div className="mx-auto mt-6 w-64 h-28 pointer-events-none">
            <Sparkles count={24} className="relative w-full h-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#CD7F32]/10 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#CD7F32] mb-2">4</div>
              <div className="text-gray-600 font-medium">Outlets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#CD7F32] mb-2">12+</div>
              <div className="text-gray-600 font-medium">Hours Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#CD7F32] mb-2">100+</div>
              <div className="text-gray-600 font-medium">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#CD7F32] mb-2">7</div>
              <div className="text-gray-600 font-medium">Days a Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#CD7F32] mb-4">
              Visit Our Branches
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each of our outlets offers the same high-quality food and exceptional service that Rio Cafe is known for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {outlets.map((outlet) => (
              <GlassCard 
                key={outlet.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {outlet.isMain && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#CD7F32] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Main Branch
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                      {outlet.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Address */}
                  <div className="flex items-start mb-4">
                    <MapPin size={20} className="text-[#CD7F32] mt-1 mr-3 flex-shrink-0" weight="light" />
                    <div>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {outlet.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center mb-6">
                    <Phone size={20} className="text-[#CD7F32] mr-3 flex-shrink-0" weight="light" />
                    <div>
                      <a 
                        href={`tel:${outlet.phone.replace(/\s/g, '')}`}
                        className="text-gray-700 font-medium hover:text-[#CD7F32] transition-colors"
                      >
                        {outlet.phone}
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={outlet.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#CD7F32] hover:bg-[#B8722C] text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-center"
                    >
                      View on Map
                    </a>
                    <a
                      href={`tel:${outlet.phone.replace(/\s/g, '')}`}
                      className="flex-1 border border-[#CD7F32] text-[#CD7F32] hover:bg-[#CD7F32] hover:text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#CD7F32] to-[#B8722C]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Can't Visit Us?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Order online through Uber Eats and enjoy Rio Cafe's delicious food from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q?srsltid=AfmBOoqn3kZV0gf4xLytSWZ9-KEyYY0NERJLcIgOpD9_GlNhDt7BD35du"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#CD7F32] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Order on Uber Eats
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#CD7F32] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
