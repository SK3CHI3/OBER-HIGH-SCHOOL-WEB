import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              School Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore life at Ober Boys High School through our photo collection
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
            Photo Gallery Coming Soon
          </h2>
          <p className="text-muted-foreground">
            We're currently updating our photo gallery. Check back soon to see amazing photos 
            of our students, facilities, events, and school life.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;