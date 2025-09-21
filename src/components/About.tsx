import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Trophy, GraduationCap, Users, Wifi, Shield, FileText, Award, BookOpen, Clock, MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });
  
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });

  const schoolImages = [
    "/school-hero.jpg", // Main school building
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Students in classroom
    "https://images.unsplash.com/photo-1523240798034-6c5a0c4a4c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Library
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Science lab
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // School campus
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Sports field
  ];

  const stats = [
    { label: "Years of Excellence", value: "30+", icon: Award },
    { label: "Current Students", value: "1,200+", icon: Users },
    { label: "Qualified Teachers", value: "45+", icon: GraduationCap },
    { label: "KCSE Pass Rate", value: "98%", icon: Trophy },
  ];

  const partners = [
    { 
      name: "Ministry of Education", 
      description: "Government Oversight", 
      logo: "/partners/MOE logo.png",
      alt: "Ministry of Education"
    },
    { 
      name: "Kenya National Examinations Council", 
      description: "Examinations Council", 
      logo: "/partners/knec2 logo.png",
      alt: "Kenya National Examinations Council"
    },
    { 
      name: "Kenya Institute of Curriculum Development", 
      description: "Curriculum Development", 
      logo: "/partners/kicd logo.png",
      alt: "Kenya Institute of Curriculum Development"
    },
    { 
      name: "Teachers Service Commission", 
      description: "Teachers Service", 
      logo: "/partners/tsc logo.png",
      alt: "Teachers Service Commission"
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Excellence in Education Since 1994
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ober Boys High School has been a beacon of academic excellence and character development in Kenya, 
            consistently producing outstanding graduates who excel in universities and professional careers worldwide.
          </p>
          
          {/* Official School Information */}
          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-primary mb-1">School Code</div>
                <div className="text-muted-foreground">12345678</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary mb-1">Registration No.</div>
                <div className="text-muted-foreground">MOE/123/456/789</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary mb-1">Ministry of Education</div>
                <div className="text-muted-foreground">Registered & Compliant</div>
              </div>
            </div>
          </div>
        </div>

        {/* School Overview with Images */}
        <motion.div 
          ref={ref1}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our School at a Glance</h3>
              <p className="text-muted-foreground mb-6">
                Ober Boys High School is a public secondary school located in Homa Bay County, Kenya. 
                Established in 1994 under the Ministry of Education, we have grown from a small institution 
                with 120 students to one of the most respected boys' schools in the region.
              </p>
              <p className="text-muted-foreground mb-6">
                Our school is committed to providing quality education that develops critical thinking, 
                creativity, and character. We follow the Kenyan 8-4-4 curriculum while incorporating 
                modern teaching methods and technology to prepare our students for the challenges of the 21st century.
              </p>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 bg-background rounded-lg shadow-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
            </div>
                <div className="grid grid-cols-2 gap-4">
                  {schoolImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg shadow-school"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={image}
                        alt={`School facility ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                  ))}
                </div>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div 
          ref={ref2}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Partners</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We work closely with key educational institutions and government bodies to ensure 
                  the highest standards of education and compliance.
          </p>
        </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 overflow-hidden">
                        <img 
                          src={partner.logo} 
                          alt={partner.alt}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm text-primary mb-1">{partner.name}</h4>
                    <p className="text-xs text-muted-foreground">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div 
          ref={ref3}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="shadow-school transition-school hover:shadow-strong h-full">
            <CardContent className="p-8 text-center">
                <motion.div 
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                <Target className="h-8 w-8 text-primary" />
                </motion.div>
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                  To provide world-class education that develops critical thinking, creativity, and character, 
                  empowering young men to become ethical leaders and global citizens who contribute meaningfully to society.
              </p>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="shadow-school transition-school hover:shadow-strong h-full">
            <CardContent className="p-8 text-center">
                <motion.div 
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                <Eye className="h-8 w-8 text-primary" />
                </motion.div>
              <h3 className="text-xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                  To be the premier boys' high school in East Africa, renowned for academic excellence, 
                  innovative teaching methods, and producing transformative leaders who shape the future of our continent.
              </p>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="shadow-school transition-school hover:shadow-strong h-full">
            <CardContent className="p-8 text-center">
                <motion.div 
                  className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                <Heart className="h-8 w-8 text-primary" />
                </motion.div>
              <h3 className="text-xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-muted-foreground">
                  Excellence, Integrity, Respect, Innovation, and Service guide everything we do. 
                  We foster a culture of continuous learning, ethical leadership, and commitment to community development.
              </p>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>

        {/* Brief School History */}
        <motion.div 
          ref={ref4}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-background rounded-2xl p-8 shadow-school">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Our Story</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Established in 1994 under the Ministry of Education, Ober Boys High School began as a small institution 
                  with 120 students and 8 teaching staff. Over the past three decades, we have grown into one of Kenya's 
                  most respected boys' schools, now accommodating over 1,200 students with 45 qualified teachers. 
                  Our journey has been marked by consistent academic excellence, character development, and the production 
                  of outstanding graduates who excel in universities and professional careers across Kenya and internationally.
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Link to="/about">
                      Read Complete History
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-school"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Ober Boys High School Main Gate"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Ober Boys High School Main Gate</p>
                    <p className="text-xs opacity-90">Established 1994</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default About;