import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  type WeeklyHour = { day: string; hours?: string; special?: string; note?: string };
  const weeklyHours: WeeklyHour[] = [
    { day: 'Monday', hours: '6:30 AM–8 PM' },
    { day: 'Tuesday', hours: '6:30 AM–8 PM' },
    { day: 'Wednesday', hours: '6:30 AM–8 PM' },
    { day: 'Thursday', special: 'Mawlid', note: 'Hours might differ' },
    { day: 'Friday', special: 'Mawlid', hours: '6:30 AM–8 PM', note: 'Hours might differ' },
    { day: 'Saturday', hours: '6 AM–8 PM' },
    { day: 'Sunday', hours: '6:30 AM–1 PM' },
  ];
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'Asia/Colombo' }).format(new Date());

  return (
    <section id="contact-section" className="py-20 bg-[#0A2342] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Visit Us
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Experience the perfect blend of culinary excellence and warm hospitality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold mb-4">Location</h3>
            
            {/* Google Maps Placeholder */}
            <a
              href="https://www.google.com/maps/search/RIO+BAKERY+AND+CAFE+LTD+V.C.+Road,+Kirimatiyana,+Lunuwila/@7.206209,79.7911805,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F1E0C5] rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center"
            >
              <div className="text-center text-[#333333]">
                <svg className="w-16 h-16 mx-auto mb-4 text-[#FF8C42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium">Open in Google Maps</p>
              </div>
            </a>

            <p className="text-sm opacity-75">
              Click to open in Google Maps for directions and real-time navigation
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            
            {/* Address */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#FF8C42]">Address</h4>
              <p className="leading-relaxed">
                RIO BAKERY AND CAFE (PVT) LTD<br />
                V.C. Road, Kirimatiyana,<br />
                Lunuwila
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#FF8C42]">Phone</h4>
              <a 
                href="tel:+94776371365" 
                className="text-[#F5F5F5] hover:text-[#FF8C42] transition-colors duration-300 block"
              >
                077 6371365
              </a>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#FF8C42]">Email</h4>
              <a 
                href="mailto:theriocafe2019@gmail.com" 
                className="text-[#F5F5F5] hover:text-[#FF8C42] transition-colors duration-300 block"
              >
                theriocafe2019@gmail.com
              </a>
            </div>

            {/* Opening Hours */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#FF8C42]">Hours: <span className="font-semibold text-white/90">{todayName}</span></h4>
              <div className="space-y-1 text-sm">
                {weeklyHours.map((item) => (
                  <div key={item.day} className={`flex items-baseline justify-between py-0.5 ${item.day === todayName ? 'text-white font-semibold' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span>{item.day}</span>
                      {item.special && (
                        <span className="text-xs text-white/70">(Mawlid)</span>
                      )}
                    </div>
                    <div className="text-right">
                      {item.hours ? (
                        <span>{item.hours}</span>
                      ) : (
                        <span className="text-[#FF8C42]">Hours might differ</span>
                      )}
                      {item.note && item.hours && (
                        <div className="text-xs text-[#FF8C42]">{item.note}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q?srsltid=AfmBOoqn3kZV0gf4xLytSWZ9-KEyYY0NERJLcIgOpD9_GlNhDt7BD35du"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-[#F5F5F5] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg btn-professional"
              >
                Make an Online Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
