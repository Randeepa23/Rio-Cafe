import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import rio2 from "@/assets/rio2.webp";
import riocafesmoothies from "@/assets/riocafesmoothies.jpg";
import riocafelobby3 from "@/assets/riocafelobby3.jpg";
import riocafejuice2 from "@/assets/riocafejuice2.jpg";
import riocafehotdog from "@/assets/riocafehotdog.jpg";
import riocafechocoake4 from "@/assets/riocafechocoake4.jpg";
import riocafeburgur from "@/assets/riocafeburgur.jpg";
import bun7 from "@/assets/bun7.jpg";
import juice5 from "@/assets/juice5.jpg";
import juice6 from "@/assets/juice6.jpg";
import juice7 from "@/assets/juice7.jpg";
import ocafejuice3 from "@/assets/ocafejuice3.jpg";
import Riocafe from "@/assets/Riocafe.webp";
import riocafebun2 from "@/assets/riocafebun2.jpg";
import riocafeicecoffee from "@/assets/riocafeicecoffee.jpg";
import riocafejuice from "@/assets/riocafejuice.jpg";
import riocafejuice1 from "@/assets/riocafejuice1.jpg";
import riocafejuice8 from "@/assets/riocafejuice8.jpg";
import riocafename from "@/assets/riocafename.jpg";
import riocafesweetcake from "@/assets/riocafesweetcake.jpg";

export function GallerySection({ showViewAllButton = false, limit, excludeAlts }: { showViewAllButton?: boolean; limit?: number; excludeAlts?: string[] }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  const galleryImages = [
    { src: rio2, alt: "Tea", category: "drinks" },
    { src: riocafesmoothies, alt: "Smoothies", category: "drinks" },
    { src: riocafelobby3, alt: "Cafe Lobby", category: "interior" },
    { src: riocafejuice2, alt: "Fresh Juice", category: "drinks" },
    { src: riocafeburgur, alt: "Burger", category: "food" },
    { src: juice6, alt: "Juice 6", category: "drinks" },
    { src: riocafehotdog, alt: "Hot Dog", category: "food" },
    { src: riocafechocoake4, alt: "Chocolate Cake", category: "food" },
    { src: bun7, alt: "Fresh Buns", category: "food" },
    { src: juice5, alt: "Juice 5", category: "drinks" },
    { src: juice7, alt: "Juice 7", category: "drinks" },
    { src: ocafejuice3, alt: "Cafe Juice", category: "drinks" },
    { src: Riocafe, alt: "Rio Cafe", category: "interior" },
    { src: riocafebun2, alt: "Buns", category: "food" },
    { src: riocafeicecoffee, alt: "Ice Coffee", category: "drinks" },
    { src: riocafejuice, alt: "Juice", category: "drinks" },
    { src: riocafejuice1, alt: "Juice 1", category: "drinks" },
    { src: riocafejuice8, alt: "Juice 8", category: "drinks" },
    { src: riocafename, alt: "Rio Cafe Name", category: "brand" },
    { src: riocafesweetcake, alt: "Sweet Cake", category: "food" }
  ];

  const filtered = Array.isArray(excludeAlts) && excludeAlts.length > 0
    ? galleryImages.filter(img => !excludeAlts.includes(img.alt))
    : galleryImages;
  const imagesToShow = typeof limit === 'number' ? filtered.slice(0, Math.max(0, limit)) : filtered;

  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage(prev => prev === null ? 0 : (prev + 1) % imagesToShow.length);
  const prevImage = () => setSelectedImage(prev => prev === null ? 0 : prev === 0 ? imagesToShow.length - 1 : prev - 1);

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0A2342] mb-6">
            Gallery
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Experience the beauty of Rio Cafe through our carefully curated collection of moments
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {imagesToShow.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 bg-black/5 rounded-2xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA (configurable) */}
        {showViewAllButton && (
          <div className="text-center mt-12">
            <a href="/gallery.html" className="inline-block bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View Full Gallery
            </a>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-[#FF8C42] transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <img 
                src={imagesToShow[selectedImage].src}
                alt={imagesToShow[selectedImage].alt}
                className="mx-auto rounded-lg object-contain"
                style={{ maxHeight: '85vh', maxWidth: '92vw', width: 'auto', height: 'auto' }}
              />

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FF8C42] transition-colors duration-300"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FF8C42] transition-colors duration-300"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {imagesToShow.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
