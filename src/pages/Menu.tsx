import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";

// Cake imports
import blueberryGateau from "@/assets/cakes/IMG-20250903-WA0039.jpg";
import delightGateau from "@/assets/cakes/IMG-20250903-WA0034.jpg";
import pineappleGateau from "@/assets/cakes/IMG-20250903-WA0036.jpg";
import classicGateau from "@/assets/cakes/IMG-20250903-WA0037.jpg";
import chocolateLayerCake from "@/assets/cakes/IMG-20250903-WA0032.jpg";
import blackForest from "@/assets/blackforest rs300.jpg";
import chocolateRoll from "@/assets/chocolateroll rs250.jpg";
import cheeseCake from "@/assets/rio cheesecake rs600.jpg";
import chocolateSucher from "@/assets/rio chocolate sucher rs250.jpg";
import brownie from "@/assets/riobrownie rs200.jpg";
import operaCake from "@/assets/riooperacake rs300.jpg";
import yogurtMoose from "@/assets/rioyogurtmouse rs200.jpg";
import strawberryRoll from "@/assets/strawberryroll rs300.jpg";
import eclears from "@/assets/eclears rs250.jpg";
import chocolateMoose from "@/assets/chocolate moose rs200.jpg";
import strawberryGateau from "@/assets/cakes/IMG-20250903-WA0040.jpg";
import whiteChocolateGateau from "@/assets/cakes/IMG-20250903-WA0035.jpg";
import butterscotchGateau from "@/assets/cakes/IMG-20250903-WA0038.jpg";
import chocolateGateau from "@/assets/cakes/IMG-20250903-WA0031.jpg";

// Bakery Products imports
import eggRoll from "@/assets/Bakery Products/egg roll.jpg";
import fishRoll from "@/assets/Bakery Products/fish roll 100.png";
import chickenRoll from "@/assets/Bakery Products/Chicken roll 120.png";
import chickenCroissant from "@/assets/Bakery Products/Chicken Croissant 300.jpg";
import chickenCroissantCombo from "@/assets/Bakery Products/Chicken Croissant Combo 400.jpg";
import chickenNuggetsBurger from "@/assets/Bakery Products/Chicken nuggets burger 200.jpg";
import chickenPastry from "@/assets/Bakery Products/chicken pastry 150.png";
import chickenPatties from "@/assets/Bakery Products/chicken patties 100.png";
import chickenSubmarine from "@/assets/Bakery Products/Chicken Submarine 450.jpg";
import crispyChickenBurger from "@/assets/Bakery Products/Chrispy Chicken burger 350.jpg";
import crispyPrawnsBun from "@/assets/Bakery Products/Chrispy Prawns 250.jpg";
import creamyVegSaladBun from "@/assets/Bakery Products/Creamy Veg 130.jpg";
import eggHamBun from "@/assets/Bakery Products/Egg and Ham 180.jpg";
import jumboSausageBun from "@/assets/Bakery Products/Jumbo Sausage 250.jpg";
import kochchiSausageBun from "@/assets/Bakery Products/Kochchi Sausage 250.jpg";
import mushroomBun from "@/assets/Bakery Products/Mushroom 180.jpg";
import prawnsSubmarine from "@/assets/Bakery Products/Prawns Submarine 450.jpg";

// Beverage imports
import mangoJuice from "@/assets/beverages/mango-juice.jpg";
import pomegranateJuice from "@/assets/beverages/pomegranate-juice.jpg";
import strawberryBubbleTea from "@/assets/beverages/strawberry-bubble-tea.jpg";
import vanilaMilkshake from "@/assets/beverages/vanilla-milkshake.jpg";
import iceCoffeeBubbleTea from "@/assets/beverages/ice-coffee-bubble-tea.jpg";
import mangoBubbleTea from "@/assets/beverages/mango-bubble-tea.jpg";
import cappuccino from "@/assets/beverages/Cappuccino rs400.jpg";
import avocadoMilkshake from "@/assets/beverages/Avacado Milk Shake  350.jpg";
import bananaMilkshake from "@/assets/beverages/banana milk shake rs350.png";
import chocolateMilkshakeBoba from "@/assets/beverages/chocolate milkshake 800.jpg";
import dateMilkshake from "@/assets/beverages/date milkshake 450.jpg";
import oreoMilkshake from "@/assets/beverages/oreo milkshake 800.jpg";
import papayaMilkshake from "@/assets/beverages/Papaya Milk Shake 350.jpg";
import strawberryMilkshake from "@/assets/beverages/Strawberry Milkshake 350.jpg";
import mangoMilkshake from "@/assets/beverages/mango milkshake rs350.jpg";
import mangoFalooda from "@/assets/beverages/mango falooda 350.png";
import mangoLassi from "@/assets/beverages/Mango Lassi 400.jpg";
import nellyFalooda from "@/assets/beverages/nelly falooda 300.png";
import sweetLassi from "@/assets/beverages/Sweet Lassi 300.jpg";

import { useState } from "react";

type PriceOption = { size: string; price: string };
type MenuItem = {
  id: string;
  name: string;
  price?: string;
  description?: string;
  image?: string;
  tags?: string[];
  prices?: PriceOption[];
};

const bakeryProducts: MenuItem[] = [
  {
    id: "bakery-egg-roll",
    name: "Egg Roll",
    description: "Freshly baked roll with a perfect blend of eggs and spices.",
    image: eggRoll,
    price: "Rs. 120",
    tags: ["Fresh", "Popular"]
  },
  {
    id: "bakery-fish-roll",
    name: "Fish Roll",
    description: "Crispy roll filled with seasoned fish and fresh herbs.",
    image: fishRoll,
    price: "Rs. 100",
    tags: ["Seafood", "Snack"]
  },
  {
    id: "bakery-chicken-roll",
    name: "Chicken Roll",
    description: "Savory roll stuffed with tender chicken and spices.",
    image: chickenRoll,
    price: "Rs. 120",
    tags: ["Popular", "Chicken"]
  },
  {
    id: "bakery-chicken-croissant",
    name: "Chicken Croissant",
    description: "Buttery croissant filled with seasoned chicken.",
    image: chickenCroissant,
    price: "Rs. 300",
    tags: ["Premium", "French"]
  },
  {
    id: "bakery-chicken-croissant-combo",
    name: "Chicken Croissant Combo",
    description: "Deluxe croissant combo with chicken and sides.",
    image: chickenCroissantCombo,
    price: "Rs. 400",
    tags: ["Value", "Combo"]
  },
  {
    id: "bakery-chicken-nuggets-burger",
    name: "Chicken Nuggets Burger",
    description: "Crispy chicken nuggets burger with fresh veggies.",
    image: chickenNuggetsBurger,
    price: "Rs. 200",
    tags: ["Kids Favorite", "Burger"]
  },
  {
    id: "bakery-chicken-pastry",
    name: "Chicken Pastry",
    description: "Flaky pastry filled with seasoned chicken.",
    image: chickenPastry,
    price: "Rs. 150",
    tags: ["Fresh", "Light"]
  },
  {
    id: "bakery-chicken-patties",
    name: "Chicken Patties",
    description: "Golden-brown patties with spiced chicken filling.",
    image: chickenPatties,
    price: "Rs. 100",
    tags: ["Classic", "Snack"]
  },
  {
    id: "bakery-chicken-submarine",
    name: "Chicken Submarine Bun",
    description: "Foot-long submarine with chicken and fresh toppings.",
    image: chickenSubmarine,
    price: "Rs. 450",
    tags: ["Submarine", "Meal"]
  },
  {
    id: "bakery-crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    description: "Crunchy fried chicken burger with special sauce.",
    image: crispyChickenBurger,
    price: "Rs. 350",
    tags: ["Best Seller", "Burger"]
  },
  {
    id: "bakery-crispy-prawns-bun",
    name: "Crispy Prawns Bun",
    description: "Bun filled with crispy fried prawns and tartar sauce.",
    image: crispyPrawnsBun,
    price: "Rs. 250",
    tags: ["Seafood", "Special"]
  },
  {
    id: "bakery-creamy-veg-salad-bun",
    name: "Creamy Veg. Salad Bun",
    description: "Fresh vegetables in creamy dressing on soft bun.",
    image: creamyVegSaladBun,
    price: "Rs. 130",
    tags: ["Vegetarian", "Healthy"]
  },
  {
    id: "bakery-egg-ham-bun",
    name: "Egg and Ham Bun",
    description: "Classic combination of egg and ham on fresh bun.",
    image: eggHamBun,
    price: "Rs. 180",
    tags: ["Breakfast", "Classic"]
  },
  {
    id: "bakery-jumbo-sausage-bun",
    name: "Jumbo Sausage Bun",
    description: "Extra-large sausage in a freshly baked bun.",
    image: jumboSausageBun,
    price: "Rs. 250",
    tags: ["Jumbo", "Popular"]
  },
  {
    id: "bakery-kochchi-sausage-bun",
    name: "Kochchi Sausage Bun",
    description: "Spicy kochchi-flavored sausage in soft bun.",
    image: kochchiSausageBun,
    price: "Rs. 250",
    tags: ["Spicy", "Special"]
  },
  {
    id: "bakery-mushroom-bun",
    name: "Mushroom Bun",
    description: "Sautéed mushrooms in creamy sauce on fresh bun.",
    image: mushroomBun,
    price: "Rs. 180",
    tags: ["Vegetarian", "Creamy"]
  },
  {
    id: "bakery-prawns-submarine",
    name: "Prawns Submarine Bun",
    description: "Foot-long submarine loaded with prawns and veggies.",
    image: prawnsSubmarine,
    price: "Rs. 450",
    tags: ["Seafood", "Premium"]
  }
];

const beverages: MenuItem[] = [
  {
    id: "beverage-mango-juice",
    name: "Mango Juice",
    description: "Fresh and sweet mango juice, perfectly chilled for refreshment.",
    image: mangoJuice,
    price: "Rs. 300",
    tags: ["Fresh", "Fruity"]
  },
  {
    id: "beverage-pomegranate-juice",
    name: "Pomegranate Juice",
    description: "Antioxidant-rich pomegranate juice with a perfect balance of sweet and tart.",
    image: pomegranateJuice,
    price: "Rs. 350",
    tags: ["Healthy", "Fresh"]
  },
  {
    id: "beverage-strawberry-bubble-tea",
    name: "Strawberry Bubble Tea",
    description: "Creamy strawberry milk tea with chewy tapioca pearls.",
    image: strawberryBubbleTea,
    price: "Rs. 800",
    tags: ["Popular", "Bubble Tea"]
  },
  {
    id: "beverage-vanilla-milkshake",
    name: "Vanilla Milkshake",
    description: "Classic vanilla milkshake topped with whipped cream.",
    image: vanilaMilkshake,
    price: "Rs. 800",
    tags: ["Classic", "Creamy"]
  },
  {
    id: "beverage-ice-coffee-bubble-tea",
    name: "Ice Coffee Bubble Tea",
    description: "Rich coffee flavored bubble tea with tapioca pearls.",
    image: iceCoffeeBubbleTea,
    price: "Rs. 800",
    tags: ["Best Seller", "Coffee"]
  },
  {
    id: "beverage-mango-bubble-tea",
    name: "Mango Bubble Tea",
    description: "Tropical mango milk tea with chewy tapioca pearls.",
    image: mangoBubbleTea,
    price: "Rs. 800",
    tags: ["Tropical", "Bubble Tea"]
  },
  {
    id: "beverage-avocado-milkshake",
    name: "Avocado Milk Shake",
    description: "Creamy avocado blended with milk and a touch of sweetness.",
    image: avocadoMilkshake,
    price: "Rs. 350",
    tags: ["Healthy", "Creamy"]
  },
  {
    id: "beverage-banana-milkshake",
    name: "Banana Milk Shake",
    description: "Fresh bananas blended with creamy milk and vanilla.",
    image: bananaMilkshake,
    price: "Rs. 350",
    tags: ["Fresh", "Classic"]
  },
  {
    id: "beverage-chocolate-milkshake-boba",
    name: "Chocolate Milk Shake with Boba",
    description: "Rich chocolate milkshake with chewy tapioca pearls.",
    image: chocolateMilkshakeBoba,
    price: "Rs. 800",
    tags: ["Premium", "Bubble Tea"]
  },
  {
    id: "beverage-date-milkshake",
    name: "Date Milk Shake",
    description: "Sweet dates blended with milk for a natural caramel flavor.",
    image: dateMilkshake,
    price: "Rs. 450",
    tags: ["Natural", "Sweet"]
  },
  {
    id: "beverage-oreo-milkshake",
    name: "Oreo Milk Shake",
    description: "Creamy milkshake blended with Oreo cookies and topped with cream.",
    image: oreoMilkshake,
    price: "Rs. 800",
    tags: ["Popular", "Premium"]
  },
  {
    id: "beverage-papaya-milkshake",
    name: "Papaya Milk Shake",
    description: "Fresh papaya blended with milk for a tropical treat.",
    image: papayaMilkshake,
    price: "Rs. 350",
    tags: ["Healthy", "Tropical"]
  },
  {
    id: "beverage-strawberry-milkshake",
    name: "Strawberry Milk Shake",
    description: "Sweet strawberries blended with creamy milk.",
    image: strawberryMilkshake,
    price: "Rs. 350",
    tags: ["Fresh", "Fruity"]
  },
  {
    id: "beverage-mango-milkshake",
    name: "Mango Milk Shake",
    description: "Fresh mango pulp blended with creamy milk.",
    image: mangoMilkshake,
    price: "Rs. 350",
    tags: ["Seasonal", "Fresh"]
  },
  {
    id: "beverage-mango-falooda",
    name: "Mango Falooda",
    description: "Traditional falooda with mango flavor, vermicelli, and basil seeds.",
    image: mangoFalooda,
    price: "Rs. 350",
    tags: ["Special", "Traditional"]
  },
  {
    id: "beverage-mango-lassi",
    name: "Mango Lassi",
    description: "Creamy yogurt drink blended with sweet mango pulp.",
    image: mangoLassi,
    price: "Rs. 400",
    tags: ["Traditional", "Refreshing"]
  },
  {
    id: "beverage-nelly-falooda",
    name: "Nelly Falooda",
    description: "Classic falooda with rose syrup, vermicelli, and basil seeds.",
    image: nellyFalooda,
    price: "Rs. 300",
    tags: ["Classic", "Traditional"]
  },
  {
    id: "beverage-sweet-lassi",
    name: "Sweet Lassi",
    description: "Traditional yogurt drink sweetened with a hint of cardamom.",
    image: sweetLassi,
    price: "Rs. 300",
    tags: ["Classic", "Traditional"]
  },
  {
    id: "beverage-cappuccino",
    name: "Cappuccino",
    description: "Classic Italian coffee with steamed milk and foam.",
    image: cappuccino,
    price: "Rs. 400",
    tags: ["Coffee", "Classic"]
  }
];

const initialCakes: MenuItem[] = [
  {
    id: "cake-blueberry-gateau",
    name: "Blueberry Gateau",
    description: "Light and fluffy blueberry-flavored cake layers with fresh cream.",
    image: blueberryGateau,
    prices: [
      { size: "Large", price: "Rs. 2500" },
      { size: "Small", price: "Rs. 1800" },
      { size: "Mini", price: "Rs. 1200" }
    ],
    tags: ["Signature", "Fresh Cream"]
  },
  {
    id: "cake-delight-gateau",
    name: "Delight Gateau",
    description: "A delightful combination of vanilla sponge and rich cream.",
    image: delightGateau,
    prices: [
      { size: "Large", price: "Rs. 2200" },
      { size: "Small", price: "Rs. 1600" },
      { size: "Mini", price: "Rs. 1000" }
    ],
    tags: ["Popular", "Classic"]
  },
  {
    id: "cake-pineapple-gateau",
    name: "Pineapple Gateau",
    description: "Tropical pineapple-flavored cake with fresh fruit pieces.",
    image: pineappleGateau,
    prices: [
      { size: "Large", price: "Rs. 2300" },
      { size: "Small", price: "Rs. 1700" },
      { size: "Mini", price: "Rs. 1100" }
    ],
    tags: ["Fruity", "Fresh"]
  },
  {
    id: "cake-classic-gateau",
    name: "Classic Gateau",
    description: "Traditional gateau with rich chocolate and cream layers.",
    image: classicGateau,
    prices: [
      { size: "Large", price: "Rs. 2000" },
      { size: "Small", price: "Rs. 1500" },
      { size: "Mini", price: "Rs. 900" }
    ],
    tags: ["Classic", "Best Seller"]
  },
  {
    id: "cake-chocolate-layer",
    name: "Chocolate Layer Cake",
    description: "Multiple layers of rich chocolate cake with ganache.",
    image: chocolateLayerCake,
    prices: [
      { size: "Large", price: "Rs. 2400" },
      { size: "Small", price: "Rs. 1800" },
      { size: "Mini", price: "Rs. 1200" }
    ],
    tags: ["Premium", "Rich"]
  },
  {
    id: "cake-black-forest",
    name: "Black Forest",
    description: "Classic Black Forest with cherries and chocolate shavings.",
    image: blackForest,
    price: "Rs. 300",
    tags: ["Classic", "Popular"]
  },
  {
    id: "cake-chocolate-roll",
    name: "Chocolate Roll",
    description: "Soft chocolate sponge rolled with cream filling.",
    image: chocolateRoll,
    price: "Rs. 250",
    tags: ["Classic", "Light"]
  },
  {
    id: "cake-cheese-cake",
    name: "Cheese Cake",
    description: "Rich and creamy New York style cheesecake.",
    image: cheeseCake,
    price: "Rs. 600",
    tags: ["Premium", "Rich"]
  },
  {
    id: "cake-chocolate-sucher",
    name: "Chocolate Sacher",
    description: "Austrian chocolate cake with apricot jam.",
    image: chocolateSucher,
    price: "Rs. 250",
    tags: ["Special", "European"]
  },
  {
    id: "cake-brownie",
    name: "Brownie",
    description: "Rich chocolate brownie with nuts.",
    image: brownie,
    price: "Rs. 200",
    tags: ["Classic", "Chocolate"]
  },
  {
    id: "cake-opera",
    name: "Opera Cake",
    description: "French coffee-flavored cake with chocolate layers.",
    image: operaCake,
    price: "Rs. 300",
    tags: ["Premium", "Coffee"]
  },
  {
    id: "cake-yogurt-mousse",
    name: "Yogurt Mousse",
    description: "Light and refreshing yogurt mousse cake.",
    image: yogurtMoose,
    price: "Rs. 200",
    tags: ["Light", "Refreshing"]
  },
  {
    id: "cake-strawberry-roll",
    name: "Strawberry Roll",
    description: "Soft sponge roll with fresh strawberry cream.",
    image: strawberryRoll,
    price: "Rs. 300",
    tags: ["Fruity", "Fresh"]
  },
  {
    id: "cake-eclairs",
    name: "Eclairs",
    description: "Classic French eclairs with chocolate glaze.",
    image: eclears,
    price: "Rs. 250",
    tags: ["French", "Classic"]
  },
  {
    id: "cake-chocolate-mousse",
    name: "Chocolate Mousse",
    description: "Light and airy chocolate mousse cake.",
    image: chocolateMoose,
    price: "Rs. 200",
    tags: ["Light", "Chocolate"]
  },
  {
    id: "cake-strawberry-gateau",
    name: "Strawberry Gateau",
    description: "Fresh strawberry-topped gateau with cream layers.",
    image: strawberryGateau,
    prices: [
      { size: "Large", price: "Rs. 2600" },
      { size: "Small", price: "Rs. 1900" },
      { size: "Mini", price: "Rs. 1300" }
    ],
    tags: ["Premium", "Fresh Fruit"]
  },
  {
    id: "cake-white-chocolate-gateau",
    name: "White Chocolate Gateau",
    description: "Elegant white chocolate gateau with cream layers.",
    image: whiteChocolateGateau,
    prices: [
      { size: "Large", price: "Rs. 2400" },
      { size: "Small", price: "Rs. 1800" },
      { size: "Mini", price: "Rs. 1200" }
    ],
    tags: ["Premium", "White Chocolate"]
  },
  {
    id: "cake-butterscotch-gateau",
    name: "Butterscotch Gateau",
    description: "Rich butterscotch-flavored gateau with caramel.",
    image: butterscotchGateau,
    prices: [
      { size: "Large", price: "Rs. 2300" },
      { size: "Small", price: "Rs. 1700" },
      { size: "Mini", price: "Rs. 1100" }
    ],
    tags: ["Special", "Caramel"]
  },
  {
    id: "cake-chocolate-gateau",
    name: "Chocolate Gateau",
    description: "Classic chocolate gateau with rich ganache.",
    image: chocolateGateau,
    prices: [
      { size: "Large", price: "Rs. 2200" },
      { size: "Small", price: "Rs. 1600" },
      { size: "Mini", price: "Rs. 1000" }
    ],
    tags: ["Classic", "Rich"]
  }
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"cakes" | "bakery" | "beverages">("cakes");

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12" style={{ background: 'linear-gradient(to bottom, #CD7F32, #8B5E3C)' }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg mb-2 sm:mb-3">Our Menu</h1>
          <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto">Discover our handcrafted cakes and desserts, made fresh with premium ingredients.</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 sm:py-6 bg-background sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
            <button
              onClick={() => setActiveTab("cakes")}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${activeTab === "cakes" ? "text-white border-[#CD7F32]" : "border-border text-foreground hover:bg-muted"}`}
              style={activeTab === "cakes" ? { background: '#CD7F32' } : undefined}
            >
              Cakes
            </button>
            <button
              onClick={() => setActiveTab("bakery")}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${activeTab === "bakery" ? "text-white border-[#CD7F32]" : "border-border text-foreground hover:bg-muted"}`}
              style={activeTab === "bakery" ? { background: '#CD7F32' } : undefined}
            >
              Bakery Products
            </button>
            <button
              onClick={() => setActiveTab("beverages")}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${activeTab === "beverages" ? "text-white border-[#CD7F32]" : "border-border text-foreground hover:bg-muted"}`}
              style={activeTab === "beverages" ? { background: '#CD7F32' } : undefined}
            >
              Beverages
            </button>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="pb-12 sm:pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold" style={{ color: '#CD7F32' }}>
              {activeTab === "cakes" ? "Cakes" : activeTab === "bakery" ? "Bakery Products" : "Beverages"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              {activeTab === "cakes" 
                ? "Gateau classics, seasonal specials, and signature slices."
                : activeTab === "bakery"
                ? "Fresh baked goods made daily with premium ingredients."
                : "Refreshing drinks, specialty teas, and artisanal coffee."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(activeTab === "cakes" ? initialCakes : activeTab === "bakery" ? bakeryProducts : beverages)
              .filter((item) => !!item.image)
              .map((item) => (
                <GlassCard 
                  key={item.id} 
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 rounded-xl"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}>
                  <div className="relative">
                    {item.image ? (
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent z-10"></div>
                        <div className="aspect-[4/3] sm:aspect-[5/4] w-full" style={{ 
                          background: 'linear-gradient(to bottom, #f8f8f8, #ffffff)',
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)'
                        }}>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                            style={{
                              padding: '0.5rem',
                              transform: 'scale(0.95)',
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] w-full bg-muted/40 flex items-center justify-center text-muted-foreground">
                        <span className="text-sm">Image coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-serif font-bold tracking-tight" style={{ color: '#CD7F32' }}>{item.name}</h3>
                      {item.price && (
                        <div className="flex items-center">
                          <span className="font-bold text-base sm:text-lg whitespace-nowrap" style={{ color: '#CD7F32' }}>{item.price}</span>
                        </div>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {item.description}
                      </p>
                    )}
                    {item.prices && (
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        {item.prices.map((p, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-[#CD7F32]/10 to-[#CD7F32]/5 border border-[#CD7F32]/20" style={{ color: '#8B5E3C' }}>
                            <span className="bg-[#CD7F32] text-white rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs">{p.size}</span>
                            {p.price}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.tags && (
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
