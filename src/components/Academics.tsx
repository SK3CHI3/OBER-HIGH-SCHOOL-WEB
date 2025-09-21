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
    { name: "Business Studies", icon: Users, description: "Commerce, Accounting, Economics" },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
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
              <Card className="shadow-school transition-school hover:shadow-strong h-full border-l-4 border-l-primary/30 hover:border-l-primary">
                <CardContent className="p-6">
                  <motion.div 
                    className="text-center"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <subject.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
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
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">Recent Achievements</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our students' outstanding accomplishments and school milestones
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <Card className="shadow-school hover:shadow-strong h-full border-l-4 border-l-primary bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{achievement.achievement}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.category}</p>
                    <Badge variant="secondary" className="text-primary border-primary/20">
                      {achievement.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Calendar and Co-curriculum Section */}
        <div className="space-y-16">
          {/* Academic Calendar Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="shadow-school bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Academic Calendar 2024/2025</h3>
                      <p className="text-muted-foreground">Download the complete academic calendar with term dates, holidays, and important events</p>
                    </div>
                  </div>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Download className="h-5 w-5 mr-2" />
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
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-primary">Co-curricular Activities</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Developing well-rounded students through diverse extracurricular programs
              </p>
            </div>
            <Card className="shadow-school bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Sports</h4>
                    <p className="text-sm text-muted-foreground">Football, Basketball, Athletics, Swimming</p>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Music className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Music & Drama</h4>
                    <p className="text-sm text-muted-foreground">Choir, Drama Club, Band, Cultural Dance</p>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Clubs & Societies</h4>
                    <p className="text-sm text-muted-foreground">Science, Debate, Environmental, Leadership</p>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Academic Clubs</h4>
                    <p className="text-sm text-muted-foreground">Mathematics, Science Olympiad, Quiz Club</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;