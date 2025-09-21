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

      {/* Comprehensive School History */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Complete History</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A detailed journey of growth, achievement, and continuous improvement over three decades
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-school">
            {/* Timeline */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1994</div>
                    <div className="text-sm text-muted-foreground font-medium">Foundation</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Establishment</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ober Boys High School was established under the Ministry of Education, Republic of Kenya, 
                    as a public secondary school. The school began with 120 students and 8 teaching staff, 
                    committed to providing quality education to young men in the Homa Bay region. The initial 
                    infrastructure included basic classrooms, a small library, and essential administrative offices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The founding principal, Mr. James Ochieng, established the school's core values of 
                    academic excellence, discipline, and character development that continue to guide us today.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2000-2010</div>
                    <div className="text-sm text-muted-foreground font-medium">Growth Phase</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Expansion & Recognition</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The school expanded its facilities and student population significantly. We received recognition 
                    from the Ministry of Education for academic excellence and discipline. This period saw the 
                    construction of additional dormitories, expansion of the library, and establishment of strong 
                    partnerships with local communities and educational institutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our first computer laboratory was established in 2005, marking our entry into digital education. 
                    The school also introduced co-curricular activities including sports, music, and debate clubs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2010-2020</div>
                    <div className="text-sm text-muted-foreground font-medium">Modernization</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Infrastructure Development</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Major infrastructure upgrades including modern laboratories, library expansion, and sports facilities. 
                    Introduction of computer studies and enhanced co-curricular programs. Consistent top performance 
                    in KCSE examinations with pass rates exceeding 90%.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The school established partnerships with universities and international organizations, 
                    providing students with opportunities for scholarships and exchange programs. Our alumni 
                    began making significant contributions in various professional fields across Kenya and internationally.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2020-Present</div>
                    <div className="text-sm text-muted-foreground font-medium">Excellence Era</div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Current Status</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Today, Ober Boys High School accommodates over 1,200 students with 45 qualified teachers. 
                    The school continues to maintain high academic standards, producing graduates who excel in 
                    universities and professional careers across Kenya and internationally.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Recent achievements include the establishment of a STEM Innovation Center, implementation 
                    of digital learning platforms, and consistent 98% KCSE pass rates. Our alumni network 
                    continues to grow, with graduates in medicine, engineering, law, business, and other 
                    professional fields.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-16 pt-8 border-t border-border">
              <h4 className="text-2xl font-bold mb-8 text-primary text-center">Key Achievements & Milestones</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                  <h5 className="text-lg font-semibold mb-3">Academic Excellence</h5>
                  <p className="text-sm text-muted-foreground mb-2">Consistently high KCSE performance</p>
                  <p className="text-sm text-muted-foreground">98% pass rate in 2024</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h5 className="text-lg font-semibold mb-3">Alumni Success</h5>
                  <p className="text-sm text-muted-foreground mb-2">Graduates in medicine, engineering, law</p>
                  <p className="text-sm text-muted-foreground">Over 500 university graduates</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h5 className="text-lg font-semibold mb-3">Ministry Recognition</h5>
                  <p className="text-sm text-muted-foreground mb-2">Multiple awards for excellence</p>
                  <p className="text-sm text-muted-foreground">Top 5 schools in Homa Bay County</p>
                </div>
              </div>
            </div>
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