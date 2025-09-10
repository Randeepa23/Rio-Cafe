import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import riocafelogo from "@/assets/riocafeLogo-fotor-bg-remover-20250903115122.png";
import uberEatsLogo from "@/assets/uber eates.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const uberEatsUrl = (import.meta.env.VITE_UBER_EATS_URL as string | undefined)
    ?? "https://www.ubereats.com/lk/store/rio-cafe-negombo/G_SBflqwVuyswJYNgM7z2Q?srsltid=AfmBOoqn3kZV0gf4xLytSWZ9-KEyYY0NERJLcIgOpD9_GlNhDt7BD35du";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
        isScrolled
          ? "bg-[#F1E0C5] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 overflow-x-clip">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={riocafelogo} 
              alt="Rio Cafe Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className={`text-xl sm:text-2xl font-serif font-bold text-glow transition-colors duration-400 ${
              isScrolled ? "text-[#333333]" : "text-[#F5F5F5]"
            }`}>
              Rio Cafe
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 xl:space-x-10">
            {[
              { name: "Home", href: "/" },
              { name: "Menu", href: "/menu" },
              { name: "About Us", href: "/about" },
              { name: "Gallery", href: "/gallery" },
              { name: "Outlets", href: "/outlets" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base lg:text-[1.05rem] font-medium transition-colors duration-300 hover:text-[#FF8C42] ${
                  isScrolled ? "text-[#333333]" : "text-[#F5F5F5]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Facebook */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://web.facebook.com/riocafeneg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rio Cafe on Facebook"
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all border ${
                  isScrolled
                    ? 'text-[#333333] border-[#333333]/30 hover:bg-[#333333]/10'
                    : 'text-white border-white/30 hover:bg-white/10'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073C24 5.446 18.627.073 12 .073 5.373.073 0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_theriocafe_?igsh=NXFzbW1yZTlxdzdh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rio Cafe on Instagram"
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all border ${
                  isScrolled
                    ? 'text-[#333333] border-[#333333]/30 hover:bg-[#333333]/10'
                    : 'text-white border-white/30 hover:bg-white/10'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@theriocafe?_t=ZS-8wfKUAC2zoG&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rio Cafe on TikTok"
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all border ${
                  isScrolled
                    ? 'text-[#333333] border-[#333333]/30 hover:bg-[#333333]/10'
                    : 'text-white border-white/30 hover:bg-white/10'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2h3c.2 2 1.4 3.6 3.5 4.3V9c-1.6-.1-3.1-.6-4.5-1.4v6.1c0 3.8-3.1 6.9-6.9 6.9S1.2 17.5 1.2 13.7 4.3 6.8 8.1 6.8c.6 0 1.1.1 1.6.2v3a4 4 0 00-1.6-.3c-2.2 0-3.9 1.8-3.9 3.9s1.8 3.9 3.9 3.9 3.9-1.8 3.9-3.9V2z"/>
                </svg>
              </a>
            </div>

            {uberEatsUrl && (
              <a
                href={uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 relative overflow-hidden group text-white px-5 py-2 rounded-full text-sm md:text-base font-extrabold shadow-xl transition-all flex items-center bg-gradient-to-r from-[#06C167] to-[#16A34A] hover:from-[#16A34A] hover:to-[#06C167] ring-2 ring-white/60 hover:ring-white/80 drop-shadow-[0_8px_24px_rgba(6,193,103,.45)] backdrop-blur-sm hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  <img src={uberEatsLogo} alt="Uber Eats" className="h-5 w-5 mr-2 object-contain transform transition-transform duration-300 group-hover:scale-110" />
                  Uber Eats
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                <div className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={`p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? "text-[#333333]" : "text-[#F5F5F5]"
            }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden
            />
            <nav className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-[#F1E0C5] shadow-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-serif font-bold text-[#333333]">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-[#333333]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Menu", href: "/menu" },
                  { name: "About Us", href: "/about" },
                  { name: "Gallery", href: "/gallery" },
                  { name: "Outlets", href: "/outlets" },
                  { name: "Contact", href: "/contact" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-[#333333] hover:text-[#FF8C42] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                {uberEatsUrl && (
                  <a
                    href={uberEatsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center relative overflow-hidden group text-white px-5 py-3 rounded-full text-base font-extrabold shadow-xl transition-all flex items-center bg-gradient-to-r from-[#06C167] to-[#16A34A] hover:from-[#16A34A] hover:to-[#06C167]"
                  >
                    <span className="relative z-10">Uber Eats</span>
                    <div className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </a>
                )}
              </div>

              <div className="mt-auto pt-6 flex items-center gap-3">
                <a href="https://web.facebook.com/riocafeneg" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#333333]/30 text-[#333333] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.446 18.627.073 12 .073 5.373.073 0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/_theriocafe_?igsh=NXFzbW1yZTlxdzdh" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#333333]/30 text-[#333333] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@theriocafe?_t=ZS-8wfKUAC2zoG&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-[#333333]/30 text-[#333333] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2h3c.2 2 1.4 3.6 3.5 4.3V9c-1.6-.1-3.1-.6-4.5-1.4v6.1c0 3.8-3.1 6.9-6.9 6.9S1.2 17.5 1.2 13.7 4.3 6.8 8.1 6.8c.6 0 1.1.1 1.6.2v3a4 4 0 00-1.6-.3c-2.2 0-3.9 1.8-3.9 3.9s1.8 3.9 3.9 3.9 3.9-1.8 3.9-3.9V2z"/>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
