import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Microscope, Globe, Palette, Music, Trophy, Users, Award, Target } from "lucide-react";

const Academics = () => {
  const subjects = [
    { 
      name: "Mathematics", 
      icon: Calculator, 
      description: "Pure and Applied Mathematics covering Algebra, Geometry, Calculus, and Statistics",
      topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Number Theory"]
    },
    { 
      name: "Sciences", 
      icon: Microscope, 
      description: "Physics, Chemistry, and Biology with practical laboratory work",
      topics: ["Physics", "Chemistry", "Biology", "Laboratory Skills", "Scientific Method", "Research Projects"]
    },
    { 
      name: "Languages", 
      icon: BookOpen, 
      description: "English and Kiswahili literature and communication skills",
      topics: ["English Literature", "Kiswahili", "Creative Writing", "Public Speaking", "Poetry", "Drama"]
    },
    { 
      name: "Humanities", 
      icon: Globe, 
      description: "History, Geography, and Christian Religious Education",
      topics: ["Kenyan History", "World Geography", "CRE", "Social Studies", "Civics", "Ethics"]
    },
    { 
      name: "Creative Arts", 
      icon: Palette, 
      description: "Art & Design, Music, and Creative Expression",
      topics: ["Visual Arts", "Design", "Sculpture", "Photography", "Digital Art", "Art History"]
    },
    { 
      name: "Technical Studies", 
      icon: Music, 
      description: "Computer Studies and Information Technology",
      topics: ["Programming", "Computer Applications", "Web Design", "Database Management", "Digital Literacy"]
    },
  ];

  const achievements = [
    { year: "2023", achievement: "95% KCSE Pass Rate", category: "Academic Excellence", detail: "Outstanding performance with majority of students qualifying for university" },
    { year: "2023", achievement: "County Science Fair Winners", category: "Science Competition", detail: "First place in regional science fair with innovative water purification project" },
    { year: "2022", achievement: "Regional Drama Festival Champions", category: "Co-curricular", detail: "Won regional drama competition and represented county at national level" },
    { year: "2022", achievement: "Top 10 Schools in Homa Bay County", category: "Academic Performance", detail: "Ranked among the top performing schools in the county" },
    { year: "2021", achievement: "Mathematics Olympiad Champions", category: "Mathematics", detail: "Students excelled in national mathematics competition" },
    { year: "2021", achievement: "Environmental Conservation Award", category: "Environmental", detail: "Recognized for outstanding environmental conservation initiatives" }
  ];

  const facilities = [
    {
      name: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs with modern equipment",
      features: ["Modern equipment", "Safety protocols", "Research facilities", "Digital microscopes"]
    },
    {
      name: "Computer Laboratory",
      description: "State-of-the-art computer lab with 40 workstations and high-speed internet",
      features: ["40 computers", "High-speed internet", "Programming software", "Multimedia capabilities"]
    },
    {
      name: "Library & Resource Center",
      description: "Comprehensive library with over 5,000 books and digital resources",
      features: ["5,000+ books", "Digital resources", "Study areas", "Research databases"]
    },
    {
      name: "Sports Complex",
      description: "Multi-purpose sports facilities for various athletic activities",
      features: ["Football field", "Basketball court", "Athletics track", "Gymnasium"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Academics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Academic Excellence Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive academic program follows the Kenyan 8-4-4 system, providing students 
              with a solid foundation for university education and career success.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Subjects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Subjects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed to develop critical thinking and practical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject) => (
              <Card key={subject.name} className="shadow-school transition-school hover:shadow-strong">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <subject.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{subject.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{subject.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{topic}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Performance */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Academic Performance</h2>
              <div className="space-y-6">
                <Card className="shadow-school">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">KCSE Mean Score (2023)</span>
                      <Badge variant="default" className="text-lg">8.2/12</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-school">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">University Qualification Rate</span>
                      <Badge variant="default" className="text-lg">88%</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-school">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Students Pursuing STEM</span>
                      <Badge variant="default" className="text-lg">65%</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-school">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Teacher-Student Ratio</span>
                      <Badge variant="default" className="text-lg">1:25</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Academic Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="shadow-school border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">{achievement.achievement}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.detail}</p>
                          <Badge variant="outline">{achievement.category}</Badge>
                        </div>
                        <Badge variant="secondary">{achievement.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure designed to support effective teaching and learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="shadow-school transition-school hover:shadow-strong">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities Expanded */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Co-curricular Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developing well-rounded students through diverse extracurricular programs and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Sports & Athletics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Football Team</li>
                  <li>Basketball</li>
                  <li>Athletics Track</li>
                  <li>Table Tennis</li>
                  <li>Volleyball</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Music & Arts</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>School Choir</li>
                  <li>Drama Club</li>
                  <li>Traditional Dance</li>
                  <li>Art Club</li>
                  <li>School Band</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Academic Clubs</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Science Club</li>
                  <li>Mathematics Society</li>
                  <li>Debate Team</li>
                  <li>Quiz Club</li>
                  <li>Literature Society</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Special Programs</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Environmental Club</li>
                  <li>Leadership Training</li>
                  <li>Community Service</li>
                  <li>Peer Counseling</li>
                  <li>Career Guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;