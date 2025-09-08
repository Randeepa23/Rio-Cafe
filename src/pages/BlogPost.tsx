import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "phosphor-react";

const blogPosts = {
  "1": {
    title: "The Rich Tapestry of Negombo Cuisine",
    author: "Chef Chaminda Perera",
    date: "December 15, 2024",
    category: "Local Cuisine",
    readTime: "5 min read",
    content: `
      <p>Negombo's culinary landscape is a fascinating blend of Portuguese, Dutch, and British colonial influences merged with traditional Sri Lankan flavors. This coastal town, once known as "Little Rome" due to its strong Catholic heritage, has developed a unique food culture that reflects its rich multicultural history.</p>
      
      <h3>The Portuguese Legacy</h3>
      <p>The Portuguese introduced ingredients like chili, tomatoes, and cashews to Sri Lankan cuisine. Their influence is still evident in dishes like "isso curry" (prawn curry) and the liberal use of coconut milk in local preparations. The famous Negombo crab curry, which has become our signature dish, traces its roots to Portuguese-inspired cooking techniques.</p>
      
      <h3>Dutch Innovations</h3>
      <p>During the Dutch period, new spice combinations were introduced, and the art of preserving fish and meat was refined. The Dutch also influenced the local bread-making traditions, which is why you'll find unique varieties of bread in Negombo that differ from other parts of Sri Lanka.</p>
      
      <h3>Modern Interpretations</h3>
      <p>At Rio Cafe, we honor these traditions while adding our contemporary touch. Our chef's approach involves understanding the historical context of each dish and then elevating it with modern presentation and refined techniques. This philosophy allows us to serve authentic flavors in an elegant, contemporary setting.</p>
      
      <p>Every dish we serve tells a story of Negombo's past while looking forward to its culinary future. When you dine with us, you're not just enjoying a meal – you're experiencing centuries of cultural exchange and culinary evolution.</p>
    `
  },
  "2": {
    title: "Sustainable Sourcing: Our Commitment to the Ocean",
    author: "Maria Santos",
    date: "December 10, 2024",
    category: "Sustainability", 
    readTime: "4 min read",
    content: `
      <p>At Rio Cafe, sustainability isn't just a buzzword – it's the foundation of our operations. Our commitment to sustainable sourcing goes beyond environmental responsibility; it's about building lasting relationships with our local fishing community and ensuring the future of Negombo's marine ecosystem.</p>
      
      <h3>Direct Partnerships with Fishermen</h3>
      <p>We work directly with five local fishing families who have been operating in these waters for generations. This direct relationship ensures that our seafood is not only the freshest possible but also caught using traditional, sustainable methods that have minimal impact on the marine environment.</p>
      
      <h3>Seasonal Menu Approach</h3>
      <p>Our menu changes seasonally to reflect the natural fishing cycles of the Indian Ocean. During monsoon months, when certain fish species migrate, we adjust our offerings accordingly. This approach supports the natural regeneration of fish populations while ensuring our guests always enjoy peak-quality seafood.</p>
      
      <h3>Supporting Local Livelihoods</h3>
      <p>By sourcing directly from local fishermen, we ensure fair pricing that supports their families and communities. We also provide advance payments during off-seasons, helping fishing families maintain stable incomes throughout the year.</p>
      
      <h3>Ocean Conservation Initiatives</h3>
      <p>Beyond sourcing, we actively participate in beach cleanup programs and coral reef restoration projects. A portion of our profits goes directly to marine conservation efforts in the Negombo lagoon area.</p>
      
      <p>Sustainable sourcing is not just about doing the right thing – it results in better flavors, fresher ingredients, and a dining experience that connects our guests to the natural bounty of our beautiful coastline.</p>
    `
  },
  "3": {
    title: "Crafting the Perfect Sunset Martini",
    author: "Rohan Silva",
    date: "December 5, 2024",
    category: "Cocktails",
    readTime: "3 min read",
    content: `
      <p>The Sunset Martini has become Rio Cafe's most requested cocktail, and for good reason. This signature drink captures the essence of a Negombo sunset in a glass, combining premium spirits with local tropical flavors to create something truly extraordinary.</p>
      
      <h3>The Inspiration</h3>
      <p>The idea came to me during a particularly spectacular sunset service on our terrace. The sky was painted in shades of gold, orange, and deep purple, and I wanted to create a drink that would embody those colors and the peaceful feeling of that moment.</p>
      
      <h3>The Perfect Balance</h3>
      <p>Our Sunset Martini combines premium vodka with passion fruit liqueur, fresh lime juice, and a secret ingredient – a house-made cinnamon syrup infused with Sri Lankan cinnamon bark. The drink is then garnished with a dehydrated pineapple wheel and a single passion fruit seed, creating the visual effect of a setting sun.</p>
      
      <h3>The Technique</h3>
      <p>The key to the perfect Sunset Martini lies in the layering technique. We carefully float the passion fruit mixture over the vodka base, creating a beautiful gradient that mimics the tropical sunset sky. The drink must be served immediately while the layers are distinct.</p>
      
      <h3>Local Ingredients</h3>
      <p>All our passion fruit comes from local farms in the hill country, ensuring peak ripeness and flavor. The cinnamon bark is sourced from sustainable spice gardens, and we make our syrups fresh daily to maintain the bright, vibrant flavors that make this cocktail special.</p>
      
      <p>When you sip a Sunset Martini at Rio Cafe, you're not just enjoying a cocktail – you're experiencing a moment of Sri Lankan paradise, crafted with passion and served with love.</p>
    `
  },
  "4": {
    title: "Chef's Special: A Story of Innovation",
    author: "Chef Chaminda Perera",
    date: "November 28, 2024",
    category: "Chef's Special",
    readTime: "6 min read",
    content: `
      <p>This month's Chef's Special – Pan-Seared Sea Bass with Curry Leaf Chimichurri and Coconut Rice Pearls – represents everything I love about modern Sri Lankan cuisine. It's a dish that honors our culinary heritage while embracing contemporary techniques and presentation.</p>
      
      <h3>The Inspiration Behind the Dish</h3>
      <p>Growing up in a fishing village near Galle, I remember my grandmother preparing simple but incredibly flavorful fish dishes. She would pan-fry the daily catch and serve it with coconut rice and a fragrant herb sauce made from whatever was growing in her garden. This dish is my tribute to her, elevated with modern culinary techniques.</p>
      
      <h3>The Star: Local Sea Bass</h3>
      <p>We source our sea bass from the waters just off Negombo's coast. The fish is caught daily using traditional handlines, ensuring the highest quality and minimal environmental impact. The delicate, sweet flavor of our local sea bass is perfectly suited to the gentle pan-searing technique we employ.</p>
      
      <h3>Curry Leaf Chimichurri: East Meets West</h3>
      <p>The curry leaf chimichurri is where tradition meets innovation. Taking the concept of Argentina's beloved herb sauce, I've replaced the traditional parsley with fresh curry leaves, added aromatic pandan, and finished it with Sri Lankan black pepper and sea salt. The result is intensely aromatic and uniquely Sri Lankan.</p>
      
      <h3>Coconut Rice Pearls: A Modern Technique</h3>
      <p>The coconut rice pearls are created using spherification – a modern gastronomy technique that turns coconut rice into small, caviar-like spheres. Each "pearl" bursts with rich coconut and jasmine rice flavor, providing textural contrast and visual appeal.</p>
      
      <h3>The Plating Philosophy</h3>
      <p>I believe that how we present food is as important as how it tastes. This dish is plated to resemble a beautiful seascape – the sea bass represents the ocean, the chimichurri mirrors sea plants, and the coconut pearls suggest sea foam. It's edible art that tells the story of our coastal heritage.</p>
      
      <p>Creating this dish involves multiple techniques and takes considerable preparation, but the result is a harmony of flavors that speaks to both our past and our future. It's contemporary Sri Lankan cuisine at its finest – rooted in tradition, elevated by technique, and presented with modern elegance.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center justify-between mb-6">
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                {post.category}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-light text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-muted-foreground">
              <div className="flex items-center mr-6">
                <User size={16} className="mr-2" weight="light" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" weight="light" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <div 
                className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-medium prose-p:text-muted-foreground prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </GlassCard>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="neomorphic border-0">
                <Link to="/blog">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}