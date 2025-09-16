import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import schoolHero from "@/assets/school-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${schoolHero})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <br />
            <span className="text-accent">Ober Boys High School</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Nurturing Excellence, Building Character, and Shaping Leaders for Tomorrow
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">800+</div>
              <div className="text-lg opacity-90">Students</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">KCSE Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;