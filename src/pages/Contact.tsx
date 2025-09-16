import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-school">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <MapPin className="h-6 w-6 mr-3" />
                    Visit Our School
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Physical Address:</h4>
                    <p className="text-muted-foreground">
                      Ober Boys High School<br />
                      Along Homa Bay-Mbita Road<br />
                      Homa Bay County, Kenya
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Postal Address:</h4>
                    <p className="text-muted-foreground">
                      P.O. Box 123<br />
                      Homa Bay - 40300<br />
                      Kenya
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-school">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Phone className="h-6 w-6 mr-3" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Main Office</p>
                      <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Admissions</p>
                      <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-school">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Mail className="h-6 w-6 mr-3" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-muted-foreground">info@oberboyshigh.ac.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Admissions</p>
                      <p className="text-muted-foreground">admissions@oberboyshigh.ac.ke</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-school">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Clock className="h-6 w-6 mr-3" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-muted-foreground">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-school">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 XXX XXX XXX" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-5 w-5 mr-2" />
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
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map will be embedded here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;