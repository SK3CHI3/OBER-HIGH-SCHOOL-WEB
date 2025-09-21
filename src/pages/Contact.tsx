import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Students must have completed primary education (KCPE) and meet the minimum grade requirements. We also consider character references and conduct during the application process."
    },
    {
      question: "What is the school fee structure?",
      answer: "Our fees are set by the Ministry of Education and are very affordable. Please contact our admissions office for the current fee structure and payment plans available."
    },
    {
      question: "Do you offer boarding facilities?",
      answer: "Yes, we have modern boarding facilities for students who live far from the school. Our boarding section provides a safe and conducive environment for learning."
    },
    {
      question: "What subjects are offered?",
      answer: "We offer all subjects in the Kenyan 8-4-4 curriculum including Mathematics, Sciences, Languages, Humanities, and Technical subjects. We also have strong co-curricular programs."
    },
    {
      question: "How can I visit the school?",
      answer: "You can visit during office hours (Monday-Friday 8AM-5PM, Saturday 8AM-12PM). We recommend calling ahead to schedule a guided tour of our facilities."
    },
    {
      question: "What support services are available?",
      answer: "We provide counseling services, career guidance, library resources, computer lab access, and various clubs and societies to support student development."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to answer your questions about Ober Boys High School. 
              Reach out to us for admissions, general information, or any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address - Compressed Side by Side */}
              <Card className="shadow-school">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Visit Our School
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">Physical Address:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ober Boys High School<br />
                        Along Homa Bay-Mbita Road<br />
                        Homa Bay County, Kenya
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-primary">Postal Address:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        P.O. Box 123<br />
                        Homa Bay - 40300<br />
                        Kenya
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call & Email - Combined in One Card */}
              <Card className="shadow-school">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Numbers */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Phone className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-semibold text-primary">Call Us</h4>
                      </div>
                      <div className="space-y-3">
                        <a href="tel:+254201234567" className="flex items-start space-x-3 hover:text-primary transition-colors">
                          <Phone className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Main Office</p>
                            <p className="text-sm text-muted-foreground">+254 20 123 4567</p>
                          </div>
                        </a>
                        <a href="tel:+254201234568" className="flex items-start space-x-3 hover:text-primary transition-colors">
                          <Phone className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Admissions</p>
                            <p className="text-sm text-muted-foreground">+254 20 123 4568</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Email Addresses */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Mail className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-semibold text-primary">Email Us</h4>
                      </div>
                      <div className="space-y-3">
                        <a href="mailto:info@oberboyshigh.ac.ke" className="flex items-start space-x-3 hover:text-primary transition-colors">
                          <Mail className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">General Inquiries</p>
                            <p className="text-sm text-muted-foreground break-all">info@oberboyshigh.ac.ke</p>
                          </div>
                        </a>
                        <a href="mailto:admissions@oberboyshigh.ac.ke" className="flex items-start space-x-3 hover:text-primary transition-colors">
                          <Mail className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Admissions</p>
                            <p className="text-sm text-muted-foreground break-all">admissions@oberboyshigh.ac.ke</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-school">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday:</span>
                      <span className="text-muted-foreground">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-school">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Send us a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 XXX XXX XXX" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-muted-foreground">
              Located along the Homa Bay-Mbita Road for easy access
            </p>
          </div>
          
          <Card className="shadow-school">
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228145.78685845505!2d34.46481036824906!3d-0.5506084607077765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b279d9a7aa9fb%3A0x425c2f6c148724de!2sOber%20Boys%20High%20School!5e0!3m2!1sen!2ske!4v1758374815919!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ober Boys High School Location"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('tel:+254201234567', '_self')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Before Visiting
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Ober+Boys+High+School+Homa+Bay+Kenya', '_blank')}
            >
              <MapPin className="h-5 w-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about Ober Boys High School
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-school">
                <CardContent className="p-0">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="tel:+254201234567">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button asChild>
                <a href="mailto:info@oberboyshigh.ac.ke">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;