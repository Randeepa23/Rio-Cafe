import { Link } from "react-router-dom";
import riocafelogo from "@/assets/riocafeLogo-fotor-bg-remover-20250903115122.png";

export function Footer() {
  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16" style={{ background: 'linear-gradient(to bottom, #CD7F32, #8B5E3C)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={riocafelogo} 
                alt="Rio Cafe Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="text-3xl font-serif font-bold block text-white drop-shadow-md">Rio Cafe</span>
                <span className="font-semibold tracking-wide text-sm" style={{ color: '#FFE5B4', textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
                  Happy Tea Time
                </span>
              </div>
            </div>
            <div className="relative mt-2 py-3">
              <div className="absolute left-0 top-0 w-12 h-[1px] bg-gradient-to-r from-[#CD7F32] to-transparent"></div>
              <p className="text-white text-base leading-relaxed max-w-xs font-medium" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
                A culinary sanctuary where ocean views meet exceptional dining experiences, creating memories that last a lifetime.
              </p>
              <div className="absolute right-0 bottom-0 w-12 h-[1px] bg-gradient-to-l from-[#CD7F32] to-transparent"></div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white drop-shadow-md">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-[#FFE5B4] hover:text-white font-medium transition-colors duration-300"
                    style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}
                    onClick={() => handleNavigation(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media and Copyright */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-white drop-shadow-md">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href="https://web.facebook.com/riocafeneg" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rio Cafe on Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#8B5E3C]"
                style={{ background: '#CD7F32' }}
              >
                <svg className="w-5 h-5 text-[#F5F5F5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/_theriocafe_?igsh=NXFzbW1yZTlxdzdh" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rio Cafe on Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#8B5E3C]"
                style={{ background: '#CD7F32' }}
              >
                <svg className="w-5 h-5 text-[#F5F5F5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@theriocafe?_t=ZS-8wfKUAC2zoG&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rio Cafe on TikTok"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#8B5E3C]"
                style={{ background: '#CD7F32' }}
              >
                <svg className="w-5 h-5 text-[#F5F5F5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2h3c.2 2 1.4 3.6 3.5 4.3V9c-1.6-.1-3.1-.6-4.5-1.4v6.1c0 3.8-3.1 6.9-6.9 6.9S1.2 17.5 1.2 13.7 4.3 6.8 8.1 6.8c.6 0 1.1.1 1.6.2v3a4 4 0 00-1.6-.3c-2.2 0-3.9 1.8-3.9 3.9s1.8 3.9 3.9 3.9 3.9-1.8 3.9-3.9V2z"/>
                </svg>
              </a>
            </div>

            <div className="pt-4 border-t border-[#F1E0C5]/20">
              <p className="text-white text-sm mb-2 font-medium" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
                © 2025 Rio Cafe. All Rights Reserved.
              </p>
              <p className="text-[#FFE5B4] text-sm font-medium" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
                Images and content are property of Rio Cafe
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-[#F1E0C5]/20">
          <div className="text-center">
            <p className="text-white text-base font-medium tracking-wide" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
              Crafted with passion for exceptional dining experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}