import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Trophy, Users, BookOpen, Award, Clock, MapPin, Phone } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1998", event: "School founded with 120 students" },
    { year: "2005", event: "First computer laboratory established" },
    { year: "2010", event: "Science laboratories upgraded" },
    { year: "2015", event: "New dormitories constructed" },
    { year: "2020", event: "Digital learning platform launched" },
    { year: "2023", event: "Achieved 95% KCSE pass rate" }
  ];

  const leadership = [
    {
      name: "Mr. David Otieno",
      position: "Principal",
      qualification: "M.Ed Educational Leadership",
      experience: "15 years in education"
    },
    {
      name: "Mrs. Grace Achieng",
      position: "Deputy Principal",
      qualification: "M.Sc Mathematics Education",
      experience: "12 years in education"
    },
    {
      name: "Mr. Peter Ouma",
      position: "Director of Studies",
      qualification: "B.Ed Science Education",
      experience: "10 years in education"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Excellence in Education Since 1998
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ober Boys High School has been a beacon of quality secondary education in Homa Bay County, 
              transforming lives and building futures for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Detailed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="shadow-school transition-school hover:shadow-strong">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality, holistic education that nurtures intellectual, moral, and social development 
                  of our students, preparing them to be responsible citizens and leaders who can contribute 
                  meaningfully to society through excellence in academics, character, and service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-school transition-school hover:shadow-strong">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading institution in secondary education within Kenya and the East African region, 
                  recognized for academic excellence, character development, innovation in teaching, and 
                  producing well-rounded graduates ready for higher education and leadership roles.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-school transition-school hover:shadow-strong">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Excellence:</strong> Striving for the highest standards</p>
                  <p><strong className="text-foreground">Integrity:</strong> Honesty and moral uprightness</p>
                  <p><strong className="text-foreground">Respect:</strong> Valuing diversity and dignity</p>
                  <p><strong className="text-foreground">Responsibility:</strong> Accountability in all actions</p>
                  <p><strong className="text-foreground">Innovation:</strong> Embracing creative solutions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School History & Milestones */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, achievement, and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="shadow-school transition-school hover:shadow-strong animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">{milestone.year}</div>
                      <p className="text-sm text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced educators dedicated to student success and institutional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-school transition-school hover:shadow-strong text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                  <p className="text-primary font-semibold mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground mb-1">{leader.qualification}</p>
                  <p className="text-sm text-muted-foreground">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure designed to support comprehensive learning and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-school text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Modern Classrooms</h4>
                <p className="text-sm text-muted-foreground">32 well-equipped classrooms with modern furniture and teaching aids</p>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Science Labs</h4>
                <p className="text-sm text-muted-foreground">Fully equipped Physics, Chemistry, and Biology laboratories</p>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Library</h4>
                <p className="text-sm text-muted-foreground">Comprehensive library with over 5,000 books and digital resources</p>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Sports Facilities</h4>
                <p className="text-sm text-muted-foreground">Football field, basketball court, and athletics track</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;