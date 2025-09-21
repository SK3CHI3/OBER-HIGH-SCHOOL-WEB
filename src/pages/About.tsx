import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Trophy, Users, BookOpen, Award, Clock, MapPin, Phone, Quote, GraduationCap, Microscope, Calculator, Globe, Palette, Music, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const programs = [
    {
      title: "Academic Excellence Program",
      description: "Our comprehensive academic program follows the Kenyan 8-4-4 curriculum with enhanced teaching methods and modern facilities. We maintain a 98% KCSE pass rate through rigorous academic standards, personalized attention, and continuous assessment.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Mathematics", "Sciences", "Languages", "Humanities", "Business Studies"]
    },
    {
      title: "Character Development Program",
      description: "We focus on building strong moral character, leadership skills, and ethical values. Our program includes mentorship, community service, and leadership training to develop well-rounded individuals who contribute positively to society.",
      image: "https://images.unsplash.com/photo-1523240798034-6c5a0c4a4c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Leadership Training", "Mentorship", "Community Service", "Ethics Education"]
    },
    {
      title: "Co-curricular Activities",
      description: "Our diverse co-curricular program includes sports, music, drama, debate, and academic clubs. These activities help students discover their talents, build teamwork skills, and develop confidence outside the classroom.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Sports", "Music & Drama", "Debate Club", "Science Club", "Environmental Club"]
    },
    {
      title: "STEM Innovation Program",
      description: "Our cutting-edge STEM program prepares students for the future with modern laboratories, computer studies, robotics, and innovation projects. We have a dedicated STEM Innovation Center with 3D printing and AI labs.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Computer Studies", "Robotics", "3D Printing", "AI Labs", "Innovation Projects"]
    }
  ];

  const faqs = [
    {
      question: "What makes Ober Boys High School unique?",
      answer: "Ober Boys High School stands out for its combination of academic excellence (98% KCSE pass rate), character development programs, modern facilities including a STEM Innovation Center, and a strong alumni network. We focus on developing well-rounded individuals who excel both academically and personally."
    },
    {
      question: "What are the admission requirements?",
      answer: "We require a completed KCPE certificate with minimum 300 marks, birth certificate, primary school leaving certificate, medical examination form, four passport-size photographs, fee payment receipt, and parent/guardian identification documents. We also conduct interviews to assess character and potential."
    },
    {
      question: "What facilities does the school have?",
      answer: "Our facilities include 32 modern classrooms, fully equipped science laboratories (Physics, Chemistry, Biology), a comprehensive library with over 5,000 books, computer laboratories, STEM Innovation Center, sports facilities (football field, basketball court, athletics track), and well-maintained dormitories."
    },
    {
      question: "What co-curricular activities are available?",
      answer: "We offer a wide range of activities including football, basketball, athletics, swimming, music and drama clubs, debate society, science club, environmental club, leadership training, and academic competitions. These activities help students develop talents and build character."
    },
    {
      question: "How do you ensure student safety and discipline?",
      answer: "We maintain a safe and disciplined environment through strict security measures, 24/7 supervision, clear behavioral guidelines, regular counseling sessions, and a strong partnership with parents. Our discipline system focuses on positive reinforcement and character building."
    },
    {
      question: "What support do you provide for struggling students?",
      answer: "We offer personalized tutoring, remedial classes, counseling services, peer mentoring programs, and regular progress monitoring. Our teachers provide individual attention and work closely with parents to ensure every student reaches their potential."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/35 via-primary/25 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Principal's Message</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Welcome to Ober Boys High School
            </h1>
              <div className="bg-white/50 p-6 rounded-lg shadow-sm mb-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "At Ober Boys High School, we believe that every young man has the potential to achieve greatness. 
                  Our mission is to provide not just academic excellence, but to nurture character, leadership, and 
                  a sense of responsibility that will serve our students throughout their lives. We are committed 
                  to creating an environment where students can discover their talents, develop their skills, and 
                  prepare for a successful future."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Mr. David Otieno</h3>
                  <p className="text-primary font-semibold">Principal</p>
                  <p className="text-sm text-muted-foreground">M.Ed Educational Leadership</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-school"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Principal Mr. David Otieno"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Mr. David Otieno</p>
                  <p className="text-xs opacity-90">Principal - Ober Boys High School</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* School History - Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three decades of excellence, growth, and transformation in education
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* 1994 - Foundation */}
              <motion.div
                className="flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2 lg:pr-12 text-right">
                  <div className="bg-background rounded-2xl p-8 shadow-school">
                    <div className="flex items-center justify-end mb-4">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">1994</div>
                        <div className="text-sm text-muted-foreground font-medium">Foundation</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">The Beginning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ober Boys High School was established under the Ministry of Education with 120 students and 8 teaching staff. 
                      Founded by Mr. James Ochieng, the school began with basic facilities and a commitment to academic excellence.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 hidden lg:block"></div>
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="School Foundation 1994"
                      className="w-full h-64 object-cover rounded-lg shadow-school"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 2000-2010 - Growth */}
              <motion.div
                className="flex flex-col lg:flex-row-reverse items-center gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2 lg:pl-12 text-left">
                  <div className="bg-background rounded-2xl p-8 shadow-school">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">2000-2010</div>
                        <div className="text-sm text-muted-foreground font-medium">Growth Phase</div>
                      </div>
                </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Expansion & Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                      The school expanded significantly with new dormitories, library expansion, and first computer laboratory in 2005. 
                      Received Ministry recognition for academic excellence and introduced co-curricular activities.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 hidden lg:block"></div>
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="School Growth 2000-2010"
                      className="w-full h-64 object-cover rounded-lg shadow-school"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 2010-2020 - Modernization */}
              <motion.div
                className="flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2 lg:pr-12 text-right">
                  <div className="bg-background rounded-2xl p-8 shadow-school">
                    <div className="flex items-center justify-end mb-4">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">2010-2020</div>
                        <div className="text-sm text-muted-foreground font-medium">Modernization</div>
                      </div>
                </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Infrastructure Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                      Major upgrades including modern laboratories, sports facilities, and computer studies. 
                      Achieved 90%+ KCSE pass rates and established university partnerships for scholarships.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 hidden lg:block"></div>
                    <img
                      src="https://images.unsplash.com/photo-1523240798034-6c5a0c4a4c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="School Modernization 2010-2020"
                      className="w-full h-64 object-cover rounded-lg shadow-school"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 2020-Present - Excellence */}
              <motion.div
                className="flex flex-col lg:flex-row-reverse items-center gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2 lg:pl-12 text-left">
                  <div className="bg-background rounded-2xl p-8 shadow-school">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">2020-Present</div>
                        <div className="text-sm text-muted-foreground font-medium">Excellence Era</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Current Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Today we accommodate 1,200+ students with 45 qualified teachers. Achieved 98% KCSE pass rate, 
                      established STEM Innovation Center, and continue producing outstanding graduates worldwide.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 hidden lg:block"></div>
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Current Excellence 2020-Present"
                      className="w-full h-64 object-cover rounded-lg shadow-school"
                    />
                </div>
                </div>
              </motion.div>
          </div>
          </div>

          {/* Key Statistics */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Current Students</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Qualified Teachers</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">KCSE Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs We Offer - Alternating Layout */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Programs We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational programs designed to develop well-rounded individuals
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
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
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{program.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="secondary" className="text-sm">
                        {subject}
                      </Badge>
                    ))}
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
                      alt={program.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about Ober Boys High School
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-school">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-primary transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;