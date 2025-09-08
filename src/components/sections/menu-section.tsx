import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, ChefHat, Award, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import riocafepizza from "@/assets/riocafepizza.jpg";
import riocafeburgur from "@/assets/riocafeburgur.jpg";
import riocafedounut from "@/assets/riocafedounut.jpg";
import riocafechocolatecake from "@/assets/riocafechocolatecake.jpg";
import riocafeicecoffee from "@/assets/riocafeicecoffee.jpg";
import riocafesmoothies from "@/assets/riocafesmoothies.jpg";
import riocafeicecream from "@/assets/riocafeicecream.jpg";
import riocafecake from "@/assets/riocafecake.jpg";
import riocafesweetcake from "@/assets/riocafesweetcake.jpg";
import riocafejuice from "@/assets/riocafejuice.jpg";
import riocafetea from "@/assets/riocafetea.jpg";
import soup from "@/assets/soup.jpg";
import blueberryGateau from "@/assets/cakes/IMG-20250903-WA0039.jpg";

type PriceOption = { size: string; price: string };
type Dish = {
  name: string;
  image: string;
  description: string;
  rating: number;
  prepTime: string;
  spiceLevel: string;
  category: string;
  featured: boolean;
  chef: string;
  awards: string[];
  prices?: PriceOption[];
};

const dishes: Dish[] = [
  {
    name: "Wood-Fired Pizza",
    image: riocafepizza,
    description: "Artisan pizzas with locally sourced ingredients, hand-stretched dough, and our signature tomato sauce in our traditional wood oven.",
    rating: 4.9,
    prepTime: "18 min",
    spiceLevel: "Mild",
    category: "Main Course",
    featured: true,
    chef: "Chef Marco",
    awards: ["Artisan Pizza Award", "Chef's Choice"]
  },
  {
    name: "Blueberry Gateau",
    image: blueberryGateau,
    description: "Layers of fluffy sponge, blueberry compote, and whipped cream.",
    rating: 4.9,
    prepTime: "6 hr",
    spiceLevel: "Mild",
    category: "Desserts",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Seasonal Favorite"],
    prices: [
      { size: "Large", price: "Rs. 4500" },
      { size: "Small", price: "Rs. 3599" },
      { size: "Mini", price: "Rs. 2800" }
    ]
  },
  {
    name: "Gourmet Burger", 
    image: riocafeburgur,
    description: "Premium beef patty with fresh vegetables, melted cheese, and our special sauce, served with golden fries.",
    rating: 4.8,
    prepTime: "15 min",
    spiceLevel: "Mild",
    category: "Main Course",
    featured: false,
    chef: "Chef Priya",
    awards: ["Best Burger"]
  },
  {
    name: "Fresh Donuts",
    image: riocafedounut,
    description: "Handcrafted donuts with various glazes and toppings, made fresh daily in our kitchen.",
    rating: 4.7,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Desserts",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Fresh Choice"]
  },
  {
    name: "Chocolate Cake",
    image: riocafechocolatecake,
    description: "Rich chocolate cake with layers of chocolate ganache and fresh berries, perfect for celebrations.",
    rating: 4.9,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Desserts",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Best Dessert"]
  },
  {
    name: "Iced Coffee",
    image: riocafeicecoffee,
    description: "Premium coffee served over ice with your choice of milk and sweeteners, perfect for hot days.",
    rating: 4.8,
    prepTime: "8 min",
    spiceLevel: "Mild",
    category: "Beverages",
    featured: false,
    chef: "Barista Raj",
    awards: ["Customer Favorite"]
  },
  {
    name: "Fresh Smoothies",
    image: riocafesmoothies,
    description: "Blended fresh fruits with yogurt and natural sweeteners, a healthy and refreshing choice.",
    rating: 4.6,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Beverages",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Healthy Choice"]
  },
  {
    name: "Artisan Ice Cream",
    image: riocafeicecream,
    description: "Homemade ice cream with premium ingredients and unique flavors, churned fresh daily.",
    rating: 4.7,
    prepTime: "3 min",
    spiceLevel: "Mild",
    category: "Desserts",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Artisan Award"]
  },
  {
    name: "Classic Cake",
    image: riocafecake,
    description: "Traditional cake with light sponge and delicate frosting, a timeless favorite.",
    rating: 4.6,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Desserts",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Classic Choice"]
  },
  {
    name: "Sweet Cake",
    image: riocafesweetcake,
    description: "Decadent sweet cake with rich frosting and decorative elements, perfect for special occasions.",
    rating: 4.8,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Desserts",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Special Occasion"]
  },
  {
    name: "Fresh Juice",
    image: riocafejuice,
    description: "Freshly squeezed juices from seasonal fruits, served cold and refreshing.",
    rating: 4.5,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Beverages",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Fresh Choice"]
  },
  {
    name: "Premium Tea",
    image: riocafetea,
    description: "Selection of premium teas from around the world, served with traditional accompaniments.",
    rating: 4.7,
    prepTime: "5 min",
    spiceLevel: "Mild",
    category: "Beverages",
    featured: false,
    chef: "Chef Anjali",
    awards: ["Premium Selection"]
  },
  {
    name: "Homemade Soup",
    image: soup,
    description: "Warm and comforting soup made with fresh vegetables and herbs, perfect for any meal.",
    rating: 4.6,
    prepTime: "10 min",
    spiceLevel: "Mild",
    category: "Appetizers",
    featured: false,
    chef: "Chef Priya",
    awards: ["Comfort Food"]
  }
];

export function MenuSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToImage = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const cardWidth = 400; // Fixed card width for consistent scrolling
    const gap = 24; // Gap between cards
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'left') {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : Math.floor(dishes.length / 3) - 1);
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      setCurrentIndex(prev => prev < Math.floor(dishes.length / 3) - 1 ? prev + 1 : 0);
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    
    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <section id="menu" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-b from-muted/5 via-muted/20 to-muted/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Professional Header - Mobile responsive */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-bold mb-6 sm:mb-8 lg:mb-10 border border-amber-400/30 shadow-lg">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Signature Dishes</span>
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary mb-6 sm:mb-8 lg:mb-10 scroll-fade leading-tight px-4">
            Culinary Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto scroll-fade leading-relaxed px-4">
            Experience the finest flavors of Rio Cafe, crafted with passion and the freshest local ingredients. 
            Each dish tells a story of tradition and innovation, prepared by our award-winning culinary team.
          </p>
        </div>

        {/* Enhanced Menu Grid with Horizontal Scrolling - Mobile responsive */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows for horizontal scrolling */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToImage('left')}
            disabled={isScrolling}
            className="hidden lg:flex absolute left-2 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 border border-white/30 bg-slate-800/80 backdrop-blur-sm shadow-2xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToImage('right')}
            disabled={isScrolling}
            className="hidden lg:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 border border-white/30 bg-slate-800/80 backdrop-blur-sm shadow-2xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </Button>

          {/* Horizontal Scrolling Menu Grid */}
          <div 
            ref={scrollContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto scrollbar-hide scroll-smooth lg:overflow-x-visible"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {dishes.map((dish, index) => (
              <GlassCard key={index} className="overflow-hidden p-0 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 border border-white/30 bg-white/5 backdrop-blur-sm w-full min-w-[350px] lg:min-w-0" hover>
                <div className="relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Professional overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Featured badge */}
                  {dish.featured && (
                    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow-2xl border border-white/30">
                      ⭐ Featured Dish
                    </div>
                  )}
                  
                  {/* Rating badge */}
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-black/90 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold flex items-center gap-1 sm:gap-2 border border-white/30 shadow-xl">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-400" />
                    {dish.rating}
                  </div>
                  
                  {/* Dish info */}
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-20 sm:right-24 md:right-28 text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{dish.name}</h3>
                    <p className="text-xs sm:text-sm opacity-90 font-semibold">{dish.category}</p>
                    <p className="text-xs opacity-75 mt-1 font-medium">by {dish.chef}</p>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    {dish.description}
                  </p>
                  
                  {/* Awards section - Mobile responsive */}
                  {dish.awards && dish.awards.length > 0 && (
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {dish.awards.map((award, awardIndex) => (
                          <div key={awardIndex} className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border border-amber-400/30">
                            🏆 {award}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Professional details - Mobile responsive */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                    <div className="text-center p-2 sm:p-3 md:p-4 bg-muted/40 rounded-lg sm:rounded-xl border border-white/20">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 text-primary" />
                      <span className="text-xs sm:text-sm text-muted-foreground font-semibold">{dish.prepTime}</span>
                    </div>
                    <div className="text-center p-2 sm:p-3 md:p-4 bg-muted/40 rounded-lg sm:rounded-xl border border-white/20">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 sm:mb-2 text-primary" />
                      <span className="text-xs sm:text-sm text-muted-foreground font-semibold">1-2 people</span>
                    </div>
                    <div className="text-center p-2 sm:p-3 md:p-4 bg-muted/40 rounded-lg sm:rounded-xl border border-white/20">
                      <span className="text-xs sm:text-sm text-muted-foreground font-semibold">{dish.spiceLevel}</span>
                    </div>
                  </div>
                  
                  {/* Prices chips if available */}
                  {dish.prices && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dish.prices.map((p, i) => (
                        <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-800">
                          <span className="bg-amber-500 text-white rounded-full px-2 py-0.5">{p.size}</span>
                          {p.price}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Professional CTA - Mobile responsive */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base"
                      size="lg"
                    >
                      Order Now
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary/30 text-primary hover:bg-primary/5 font-semibold py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          {/* Scroll indicator dots for horizontal scrolling */}
          <div className="flex justify-center mt-8 gap-2 lg:hidden">
            {Array.from({ length: Math.ceil(dishes.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 400;
                    const gap = 24;
                    const scrollAmount = (cardWidth + gap) * index;
                    scrollContainerRef.current.scrollTo({
                      left: scrollAmount,
                      behavior: 'smooth'
                    });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Professional Footer - Mobile responsive */}
        <div className="text-center mt-16 sm:mt-18 md:mt-20 lg:mt-24">
          <div className="bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl lg:max-w-4xl mx-auto border border-white/40 shadow-2xl lg:shadow-3xl mx-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">Ready to Experience Excellence?</h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl leading-relaxed">
              Join us for an unforgettable dining experience that combines traditional hospitality with modern culinary innovation. 
              Our team of expert chefs and baristas are ready to create a memorable experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
              <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold w-full sm:w-auto">
                View Full Menu
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold w-full sm:w-auto">
                Make Reservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}