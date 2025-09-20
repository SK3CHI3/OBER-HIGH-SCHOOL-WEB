import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Microscope, Globe, Palette, Music, Trophy, Users, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DataVisualization from "./DataVisualization";

const Academics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const subjects = [
    { name: "Mathematics", icon: Calculator, description: "Pure and Applied Mathematics" },
    { name: "Sciences", icon: Microscope, description: "Physics, Chemistry, Biology" },
    { name: "Languages", icon: BookOpen, description: "English, Kiswahili" },
    { name: "Humanities", icon: Globe, description: "History, Geography, CRE" },
    { name: "Creative Arts", icon: Palette, description: "Art & Design" },
    { name: "Technical", icon: Music, description: "Computer Studies" },
  ];

      const achievements = [
        { year: "2024", achievement: "98% KCSE Pass Rate", category: "Academic Excellence" },
        { year: "2024", achievement: "National Science Olympiad Winners", category: "Science Competition" },
        { year: "2023", achievement: "Top 5 Schools in Kenya", category: "Academic Performance" },
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
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="shadow-school transition-school hover:shadow-strong h-full">
                <CardContent className="p-6">
                  <motion.div 
                    className="flex items-center space-x-4 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <subject.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Data Visualization */}
        <DataVisualization />

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">Recent Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="border-l-4 border-l-primary h-full">
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
              </motion.div>
            ))}
          </div>
        </motion.div>

            {/* Academic Calendar Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="shadow-school bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">Academic Calendar 2024/2025</h3>
                        <p className="text-sm text-muted-foreground">Download the complete academic calendar with term dates and holidays</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Co-curricular Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>
      </div>
    </section>
  );
};

export default Academics;