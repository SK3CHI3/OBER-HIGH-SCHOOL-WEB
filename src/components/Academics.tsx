import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Microscope, Globe, Palette, Music, Trophy, Users } from "lucide-react";

const Academics = () => {
  const subjects = [
    { name: "Mathematics", icon: Calculator, description: "Pure and Applied Mathematics" },
    { name: "Sciences", icon: Microscope, description: "Physics, Chemistry, Biology" },
    { name: "Languages", icon: BookOpen, description: "English, Kiswahili" },
    { name: "Humanities", icon: Globe, description: "History, Geography, CRE" },
    { name: "Creative Arts", icon: Palette, description: "Art & Design" },
    { name: "Technical", icon: Music, description: "Computer Studies" },
  ];

  const achievements = [
    { year: "2023", achievement: "95% KCSE Pass Rate", category: "Academic Excellence" },
    { year: "2023", achievement: "County Science Fair Winners", category: "Science Competition" },
    { year: "2022", achievement: "Regional Drama Festival Champions", category: "Co-curricular" },
    { year: "2022", achievement: "Top 10 Schools in Homa Bay County", category: "Academic Performance" },
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Academics</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Academic Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our curriculum follows the Kenyan 8-4-4 system, providing a solid foundation 
            for university education and career development.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject) => (
            <Card key={subject.name} className="shadow-school transition-school hover:shadow-strong">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <subject.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Academic Performance</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                <span className="font-medium">KCSE Mean Score (2023)</span>
                <Badge variant="secondary">8.2/12</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                <span className="font-medium">University Qualification Rate</span>
                <Badge variant="secondary">88%</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                <span className="font-medium">Students Pursuing STEM</span>
                <Badge variant="secondary">65%</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                <span className="font-medium">Teacher-Student Ratio</span>
                <Badge variant="secondary">1:25</Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Recent Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold mb-1">{achievement.achievement}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.category}</p>
                      </div>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Co-curricular Activities */}
        <Card className="shadow-school bg-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Co-curricular Activities</CardTitle>
            <p className="text-muted-foreground">
              Developing well-rounded students through diverse extracurricular programs
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Sports</h4>
                <p className="text-sm text-muted-foreground">Football, Basketball, Athletics</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Music & Drama</h4>
                <p className="text-sm text-muted-foreground">Choir, Drama Club, Band</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Clubs</h4>
                <p className="text-sm text-muted-foreground">Science, Debate, Environmental</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Academic</h4>
                <p className="text-sm text-muted-foreground">Mathematics, Science Olympiad</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Academics;