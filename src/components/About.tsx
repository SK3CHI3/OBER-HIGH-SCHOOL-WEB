import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Excellence in Education Since 1998
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ober Boys High School has been at the forefront of quality secondary education in Homa Bay County, 
            molding young minds and preparing them for a successful future.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-school transition-school hover:shadow-strong">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide quality, holistic education that nurtures intellectual, moral, and social development 
                of our students, preparing them to be responsible citizens and leaders.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-school transition-school hover:shadow-strong">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading institution in secondary education, recognized for academic excellence, 
                character development, and producing well-rounded graduates ready for higher education and life.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-school transition-school hover:shadow-strong">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, Integrity, Respect, Responsibility, and Innovation guide everything we do. 
                We believe in developing the whole person - academically, morally, and socially.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-background rounded-2xl p-8 shadow-school">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Ober Boys High School?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive educational experience that goes beyond academics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Academic Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Consistently high KCSE performance and university placement rates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Experienced Faculty</h4>
              <p className="text-sm text-muted-foreground">
                Qualified and dedicated teachers committed to student success
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Modern Facilities</h4>
              <p className="text-sm text-muted-foreground">
                Well-equipped laboratories, library, and sports facilities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Character Development</h4>
              <p className="text-sm text-muted-foreground">
                Strong emphasis on moral values and leadership skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;