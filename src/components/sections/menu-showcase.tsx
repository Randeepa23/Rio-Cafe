import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import riocafeburger2 from "@/assets/riocafeburger2.jpg";
import riocafepizza from "@/assets/riocafepizza.jpg";
import riocafechocolatecake from "@/assets/riocafechocolatecake.jpg";
import riocafedounut from "@/assets/riocafedounut.jpg";
import riocafecake from "@/assets/riocafecake.jpg";
import riochocolatecafe3 from "@/assets/riochocolatecafe3.jpg";
import riocafeicecream from "@/assets/riocafeicecream.jpg";

export function MenuShowcase() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const signatureDishes = [
    {
      name: "Rio Cafe Burger",
      description: "Juicy beef burger with fresh vegetables, melted cheese, and our signature sauce, served with crispy fries.",
      image: riocafeburger2
    },
    {
      name: "Wood-Fired Pizza",
      description: "Authentic Italian pizza with fresh mozzarella, basil, and premium toppings, baked in our traditional wood-fired oven.",
      image: riocafepizza
    },
    {
      name: "Chocolate Cake",
      description: "Rich and decadent chocolate cake layered with creamy frosting, topped with chocolate shavings and fresh berries.",
      image: riocafechocolatecake
    },
    {
      name: "Fresh Donuts",
      description: "Handcrafted donuts with a variety of glazes and toppings, made fresh daily in our kitchen.",
      image: riocafedounut
    },
    {
      name: "Delicious Cake",
      description: "Light and fluffy cake with smooth frosting, perfect for any celebration or sweet treat.",
      image: riochocolatecafe3
    },
    {
      name: "Ice Cream Selection",
      description: "Premium ice cream in various flavors, served with fresh toppings and homemade waffle cones.",
      image: riocafeicecream
    }
  ];

  return (
    <section id="menu-showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0A2342] mb-6">
            Signature Dishes
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Discover our most beloved creations, each crafted with passion and the finest local ingredients
          </p>
        </div>

        {/* Dish Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {signatureDishes.map((dish, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift">
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#0A2342] mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#FF8C42] transition-colors duration-300"
                aria-label="Close image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <img 
                src={signatureDishes[selectedImage].image}
                alt={signatureDishes[selectedImage].name}
                className="w-full h-full object-contain rounded-lg"
                style={{ maxHeight: '80vh' }}
              />

              {/* Navigation Arrows */}
              <button 
                onClick={() => setSelectedImage(prev => prev === null ? 0 : prev === 0 ? signatureDishes.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FF8C42] transition-colors duration-300"
                aria-label="Previous image"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={() => setSelectedImage(prev => prev === null ? 0 : (prev + 1) % signatureDishes.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FF8C42] transition-colors duration-300"
                aria-label="Next image"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {signatureDishes.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <a href="/menu" className="inline-block bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-[#F5F5F5] px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-professional">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
