import { Navigation } from "@/components/navigation";
import { GallerySection } from "@/components/sections/gallery-section";
import { Footer } from "@/components/footer";
import { Sparkles } from "@/components/ui/sparkles";
import riocafelooby2 from "@/assets/riocafelooby2.jpg";

const Gallery = () => {
  return (
    <div>
      <Navigation />
      {/* Gallery Hero */}
      <section className="relative pt-28 pb-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${riocafelooby2}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow mb-4">Our Gallery</h1>
            <p className="text-white/90 text-lg">A glimpse into the flavors, spaces, and moments at Rio Cafe.</p>
          </div>
          <div className="mx-auto mt-6 w-64 h-28 pointer-events-none">
            <Sparkles count={24} className="relative w-full h-full" />
          </div>
        </div>
      </section>

      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;
