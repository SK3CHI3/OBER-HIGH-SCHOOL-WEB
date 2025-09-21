import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Users, Award, Clock, Download, FileText, Calendar, GraduationCap, Target, TrendingUp, BarChart3, BookMarked, Microscope, Calculator, Globe, Palette, Music, Dumbbell, Laptop, Wifi, Shield, CheckCircle, Eye, ExternalLink, Plus, Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Academics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });

  // KCSE Results Data (Managed by Admin)
  const kcseResults = [
    {
      year: "2024",
      totalStudents: 156,
      meanScore: 8.4,
      passRate: 98.1,
      gradeDistribution: {
        A: 12,
        "A-": 18,
        "B+": 25,
        B: 32,
        "B-": 28,
        "C+": 24,
        C: 17
      },
      universityQualified: 95.5,
      topPerformer: "John Mwangi",
      topScore: "A",
      documentUrl: "/documents/kcse-2024-results.pdf",
      published: true
    },
    {
      year: "2023",
      totalStudents: 148,
      meanScore: 8.2,
      passRate: 97.3,
      gradeDistribution: {
        A: 8,
        "A-": 15,
        "B+": 22,
        B: 28,
        "B-": 25,
        "C+": 20,
        C: 15
      },
      universityQualified: 92.6,
      topPerformer: "Peter Otieno",
      topScore: "A",
      documentUrl: "/documents/kcse-2023-results.pdf",
      published: true
    },
    {
      year: "2022",
      totalStudents: 142,
      meanScore: 7.9,
      passRate: 95.8,
      gradeDistribution: {
        A: 6,
        "A-": 12,
        "B+": 20,
        B: 26,
        "B-": 24,
        "C+": 22,
        C: 18
      },
      universityQualified: 89.4,
      topPerformer: "David Kimani",
      topScore: "A",
      documentUrl: "/documents/kcse-2022-results.pdf",
      published: true
    },
    {
      year: "2021",
      totalStudents: 135,
      meanScore: 7.6,
      passRate: 94.1,
      gradeDistribution: {
        A: 4,
        "A-": 10,
        "B+": 18,
        B: 24,
        "B-": 22,
        "C+": 25,
        C: 20
      },
      universityQualified: 86.7,
      topPerformer: "James Ochieng",
      topScore: "A",
      documentUrl: "/documents/kcse-2021-results.pdf",
      published: true
    }
  ];

  const subjects = [
    { 
      name: "Mathematics", 
      icon: Calculator, 
      description: "Pure and Applied Mathematics covering Algebra, Geometry, Calculus, and Statistics",
      topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Number Theory"],
      performance: "Excellent"
    },
    { 
      name: "Sciences", 
      icon: Microscope, 
      description: "Physics, Chemistry, and Biology with practical laboratory work",
      topics: ["Physics", "Chemistry", "Biology", "Laboratory Skills", "Scientific Method", "Research Projects"],
      performance: "Outstanding"
    },
    { 
      name: "Languages", 
      icon: BookOpen, 
      description: "English and Kiswahili literature and communication skills",
      topics: ["English Literature", "Kiswahili", "Creative Writing", "Public Speaking", "Poetry", "Drama"],
      performance: "Very Good"
    },
    { 
      name: "Humanities", 
      icon: Globe, 
      description: "History, Geography, and Christian Religious Education",
      topics: ["Kenyan History", "World Geography", "CRE", "Social Studies", "Civics", "Ethics"],
      performance: "Good"
    },
    { 
      name: "Creative Arts", 
      icon: Palette, 
      description: "Art & Design, Music, and Creative Expression",
      topics: ["Visual Arts", "Design", "Sculpture", "Photography", "Digital Art", "Art History"],
      performance: "Excellent"
    },
    { 
      name: "Technical Studies", 
      icon: Laptop, 
      description: "Computer Studies and Information Technology",
      topics: ["Programming", "Computer Applications", "Web Design", "Database Management", "Digital Literacy"],
      performance: "Very Good"
    }
  ];

  const achievements = [
    { year: "2024", achievement: "98.1% KCSE Pass Rate", category: "Academic Excellence", detail: "Outstanding performance with majority of students qualifying for university" },
    { year: "2024", achievement: "National Science Olympiad Winners", category: "Science Competition", detail: "First place in national science competition with innovative projects" },
    { year: "2023", achievement: "Top 5 Schools in Kenya", category: "Academic Performance", detail: "Ranked among the top performing schools in the country" }
  ];

  const facilities = [
    {
      name: "Science Laboratories",
      description: "Our state-of-the-art science laboratories provide students with hands-on experience in Physics, Chemistry, and Biology. Equipped with modern equipment and safety protocols, these labs foster scientific inquiry and research skills essential for university preparation.",
      features: ["Modern equipment", "Safety protocols", "Research facilities", "Digital microscopes", "Chemistry apparatus", "Physics instruments"],
      status: "Operational",
      image: "/images/facilities/ober boys facility.jpg",
      capacity: "40 students per lab"
    },
    {
      name: "Computer Laboratory",
      description: "Our cutting-edge computer laboratory features 40 high-performance workstations with high-speed internet connectivity. Students learn programming, digital literacy, and modern technology skills that prepare them for the digital future.",
      features: ["40 computers", "High-speed internet", "Programming software", "Multimedia capabilities", "3D printing", "Coding platforms"],
      status: "Operational",
      image: "/images/academics/studensts in class.jpg",
      capacity: "40 students"
    },
    {
      name: "Library & Resource Center",
      description: "Our comprehensive library houses over 5,000 books, digital resources, and quiet study areas. It serves as a hub for research, academic support, and intellectual growth, providing students with access to vast knowledge resources.",
      features: ["5,000+ books", "Digital resources", "Study areas", "Research databases", "E-books", "Quiet zones"],
      status: "Operational",
      image: "/images/facilities/ober boys facility.jpg",
      capacity: "100 students"
    },
    {
      name: "Sports Complex",
      description: "Our multi-purpose sports complex includes a football field, basketball court, athletics track, and gymnasium. These facilities promote physical fitness, teamwork, and healthy competition while developing students' athletic abilities.",
      features: ["Football field", "Basketball court", "Athletics track", "Gymnasium", "Changing rooms", "Equipment storage"],
      status: "Operational",
      image: "/images/gallery/ober boys ruby team.jpg",
      capacity: "200+ students"
    },
    {
      name: "STEM Innovation Center",
      description: "Our newly established STEM Innovation Center features advanced robotics, 3D printing, AI labs, and innovation spaces. This cutting-edge facility prepares students for careers in science, technology, engineering, and mathematics.",
      features: ["Robotics lab", "3D printing", "AI workstations", "Innovation spaces", "Prototyping tools", "Collaboration areas"],
      status: "Operational",
      image: "/images/facilities/ober boys facility.jpg",
      capacity: "30 students"
    },
    {
      name: "Dining Hall & Kitchen",
      description: "Our modern dining hall provides nutritious meals for all students in a clean, comfortable environment. The facility includes a fully equipped kitchen, serving areas, and seating for the entire student body.",
      features: ["Modern kitchen", "Serving areas", "Student seating", "Nutrition planning", "Clean environment", "Meal variety"],
      status: "Operational",
      image: "/images/facilities/ober boys facility.jpg",
      capacity: "1,200 students"
    }
  ];

  const handleViewResults = (year: string) => {
    // In a real app, this would open a modal or navigate to a detailed results page
    window.open(`/documents/kcse-${year}-results.pdf`, '_blank');
  };

  const handleDownloadResults = (year: string, documentUrl: string) => {
    // In a real app, this would trigger a download
    const link = document.createElement('a');
    link.href = documentUrl;
    link.download = `KCSE-Results-${year}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/35 via-primary/25 to-secondary/30">
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

      {/* Main Content with Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="results" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="results">KCSE Results</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="activities">Co-curricular</TabsTrigger>
            </TabsList>

            {/* KCSE Results Tab */}
            <TabsContent value="results" className="mt-8">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">KCSE Results by Year</h2>
                  <p className="text-lg text-muted-foreground">
                    View and download our annual KCSE examination results
                  </p>
                </div>

                {/* Results Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">98.1%</div>
                      <div className="text-sm text-muted-foreground">Average Pass Rate</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">8.4</div>
                      <div className="text-sm text-muted-foreground">Mean Score (2024)</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">95.5%</div>
                      <div className="text-sm text-muted-foreground">University Qualified</div>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">30</div>
                      <div className="text-sm text-muted-foreground">Grade A Students (2024)</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Results Table */}
                <Card className="shadow-school">
                  <CardHeader>
                    <CardTitle>KCSE Results by Year</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Year</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Mean Score</TableHead>
                          <TableHead>Pass Rate</TableHead>
                          <TableHead>University Qualified</TableHead>
                          <TableHead>Top Performer</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {kcseResults.map((result) => (
                          <TableRow key={result.year}>
                            <TableCell className="font-medium">{result.year}</TableCell>
                            <TableCell>{result.totalStudents}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{result.meanScore}/12</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="default">{result.passRate}%</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">{result.universityQualified}%</Badge>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{result.topPerformer}</div>
                                <div className="text-sm text-muted-foreground">Grade {result.topScore}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleViewResults(result.year)}
                                  className="hover:bg-primary hover:text-white"
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDownloadResults(result.year, result.documentUrl)}
                                  className="hover:bg-primary hover:text-white"
                                >
                                  <Download className="h-4 w-4 mr-1" />
                                  PDF
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Grade Distribution Chart Placeholder */}
                <Card className="shadow-school">
                  <CardHeader>
                    <CardTitle>Grade Distribution - 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(kcseResults[0].gradeDistribution).map(([grade, count]) => (
                        <div key={grade} className="flex items-center space-x-4">
                          <div className="w-12 text-sm font-medium">{grade}</div>
                          <div className="flex-1 bg-secondary rounded-full h-6 relative">
                            <div 
                              className="bg-primary h-6 rounded-full flex items-center justify-end pr-2"
                              style={{ width: `${(count / kcseResults[0].totalStudents) * 100}%` }}
                            >
                              <span className="text-xs text-primary-foreground">{count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Subjects Tab */}
            <TabsContent value="subjects" className="mt-8">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Academic Subjects</h2>
                  <p className="text-lg text-muted-foreground">
              Comprehensive curriculum designed to develop critical thinking and practical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject) => (
              <Card key={subject.name} className="shadow-school transition-school hover:shadow-strong">
                <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <subject.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{subject.name}</CardTitle>
                            <Badge variant="outline" className="mt-1">{subject.performance}</Badge>
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
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="mt-8">
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Facilities</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure designed to support effective teaching and learning
            </p>
          </div>

                <div className="space-y-20">
            {facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                        <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{facility.name}</h3>
                            <Badge variant="outline" className="text-primary border-primary/20">
                              {facility.status}
                            </Badge>
                          </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {facility.description}
                          </p>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {facility.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-primary/5 p-4 rounded-lg">
                              <div className="flex items-center text-sm">
                                <Users className="h-4 w-4 text-primary mr-2" />
                                <span className="font-medium text-primary">Capacity:</span>
                                <span className="ml-2 text-muted-foreground">{facility.capacity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <motion.div
                          className="relative overflow-hidden rounded-lg shadow-school"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img
                            src={facility.image}
                            alt={facility.name}
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium">{facility.name}</p>
                            <p className="text-xs opacity-90">{facility.capacity}</p>
                          </div>
                        </motion.div>
                  </div>
                    </motion.div>
            ))}
          </div>
        </div>
            </TabsContent>

            {/* Co-curricular Activities Tab */}
            <TabsContent value="activities" className="mt-8">
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Co-curricular Programs</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developing well-rounded students through diverse extracurricular programs and activities
            </p>
          </div>

                <div className="space-y-20">
                  {[
                    {
                      name: "Sports & Athletics",
                      description: "Our comprehensive sports program promotes physical fitness, teamwork, and healthy competition. Students participate in various athletic activities that build character, discipline, and leadership skills while maintaining academic excellence.",
                      activities: ["Football Team", "Basketball", "Athletics Track", "Table Tennis", "Volleyball", "Swimming", "Rugby", "Tennis"],
                      image: "/images/gallery/ober boys ruby team.jpg",
                      icon: Award,
                      achievements: "Regional Champions 2024"
                    },
                    {
                      name: "Music & Arts",
                      description: "Our vibrant arts program nurtures creativity and self-expression through music, drama, and visual arts. Students develop artistic talents, confidence, and cultural appreciation while showcasing their creativity in various performances and exhibitions.",
                      activities: ["School Choir", "Drama Club", "Traditional Dance", "Art Club", "School Band", "Photography", "Creative Writing", "Cultural Performances"],
                      image: "/images/gallery/students image gruop photo.webp",
                      icon: Music,
                      achievements: "National Arts Festival Winners"
                    },
                    {
                      name: "Academic Clubs",
                      description: "Our academic clubs provide students with opportunities to explore subjects beyond the classroom, engage in intellectual discussions, and develop critical thinking skills. These clubs foster a love for learning and academic excellence.",
                      activities: ["Science Club", "Mathematics Society", "Debate Team", "Quiz Club", "Literature Society", "Robotics Club", "Chess Club", "Research Society"],
                      image: "/images/academics/studensts in class.jpg",
                      icon: Users,
                      achievements: "National Science Olympiad Champions"
                    },
                    {
                      name: "Special Programs",
                      description: "Our special programs focus on character development, leadership, and community service. These programs prepare students to be responsible citizens and future leaders while making a positive impact in their communities.",
                      activities: ["Environmental Club", "Leadership Training", "Community Service", "Peer Counseling", "Career Guidance", "Mentorship Program", "Volunteer Work", "Student Government"],
                      image: "/images/gallery/The 2024 OBER BOYS HIGH SCHOOL STUDENTS COUNCI.jpg",
                      icon: Target,
                      achievements: "Community Service Excellence Award"
                    }
                  ].map((program, index) => (
                    <motion.div
                      key={index}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                              <program.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{program.name}</h3>
                              <p className="text-sm text-primary font-medium">{program.achievements}</p>
                            </div>
                </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {program.description}
                          </p>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-primary mb-3">Activities & Clubs:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {program.activities.map((activity, activityIndex) => (
                                  <div key={activityIndex} className="flex items-center text-sm text-muted-foreground">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                    {activity}
                                  </div>
                                ))}
                              </div>
                </div>
                            
                            <div className="bg-primary/5 p-4 rounded-lg">
                              <div className="flex items-center text-sm">
                                <Award className="h-4 w-4 text-primary mr-2" />
                                <span className="font-medium text-primary">Recent Achievement:</span>
                                <span className="ml-2 text-muted-foreground">{program.achievements}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
                      
                      <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <motion.div
                          className="relative overflow-hidden rounded-lg shadow-school"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img
                            src={program.image}
                            alt={program.name}
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium">{program.name}</p>
                            <p className="text-xs opacity-90">{program.achievements}</p>
                          </div>
                        </motion.div>
                </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CBE Transition Announcement */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Calendar className="h-3 w-3 mr-2" />
              Coming 2026
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Competency-Based Education (CBE) — Arriving in 2026
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We are excited to announce that our school is preparing to welcome the very first cohort of Grade 10 students 
              under the new Competency-Based Curriculum (CBC) starting next year. This marks a historic step as we transition 
              into senior school, building pathways that nurture practical skills, creativity, and lifelong learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* STEM Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="shadow-school border-l-4 border-l-primary h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Microscope className="h-5 w-5 mr-2" />
                    STEM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Pure Sciences Track</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Applied Sciences Track</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Technical Studies Track</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Sciences Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-school border-l-4 border-l-primary h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Globe className="h-5 w-5 mr-2" />
                    Social Sciences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Languages & Literature Track</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Humanities & Business Studies Track</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Arts & Sports Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="shadow-school border-l-4 border-l-primary h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Palette className="h-5 w-5 mr-2" />
                    Arts & Sports Science
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Arts Track</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Sports Track</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <BookOpen className="h-5 w-5 mr-2" />
                Learn More About CBE
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Users className="h-5 w-5 mr-2" />
                Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;