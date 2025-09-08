import { Link } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "phosphor-react";

const articles = [
  {
    id: 1,
    title: "The Rich Tapestry of Negombo Cuisine",
    excerpt: "Discover the vibrant flavors and centuries-old traditions that make Negombo's culinary scene truly unique.",
    author: "Chef Chaminda Perera",
    date: "December 15, 2024",
    category: "Local Cuisine",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Sourcing: Our Commitment to the Ocean",
    excerpt: "Learn how Rio Cafe partners with local fishermen to ensure fresh, sustainable seafood while supporting the community.",
    author: "Maria Santos",
    date: "December 10, 2024", 
    category: "Sustainability",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Crafting the Perfect Sunset Martini",
    excerpt: "Behind the scenes with our mixologist as we explore the art and science of creating our signature cocktail.",
    author: "Rohan Silva",
    date: "December 5, 2024",
    category: "Cocktails",
    readTime: "3 min read"
  },
  {
    id: 4,
    title: "Chef's Special: A Story of Innovation",
    excerpt: "This month's featured dish combines traditional Sri Lankan spices with modern culinary techniques.",
    author: "Chef Chaminda Perera", 
    date: "November 28, 2024",
    category: "Chef's Special",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light text-primary mb-6">
              Rio Cafe Journal
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stories from our kitchen, insights into Sri Lankan cuisine, 
              and the passion behind every dish we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <GlassCard key={article.id} className="hover" hover>
                <article className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-medium text-primary mb-3 leading-tight">
                    <Link 
                      to={`/blog/${article.id}`}
                      className="hover:text-accent transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-glass-border">
                    <div className="flex items-center">
                      <User size={16} className="mr-2" weight="light" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" weight="light" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}