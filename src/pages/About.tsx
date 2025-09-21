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
      
      {/* Principal's Message Section */}
      <section className="py-20 bg-primary/5">
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

      {/* School History - One Paragraph */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our History</h2>
          </div>
          <div className="bg-background rounded-2xl p-8 shadow-school max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Established in 1994 under the Ministry of Education, Ober Boys High School began as a small institution 
              with 120 students and 8 teaching staff in Homa Bay County. Over the past three decades, we have grown 
              into one of Kenya's most respected boys' schools, now accommodating over 1,200 students with 45 qualified 
              teachers. Our journey has been marked by consistent academic excellence, character development, and the 
              production of outstanding graduates who excel in universities and professional careers across Kenya and 
              internationally. Today, we maintain a 98% KCSE pass rate and continue to innovate with modern facilities 
              including our STEM Innovation Center, while staying true to our founding values of discipline, integrity, 
              and service to the community.
            </p>
          </div>
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