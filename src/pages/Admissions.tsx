import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Calendar, DollarSign, User, Phone, Mail, Clock, GraduationCap, Users, Wifi, Shield, Eye, Download } from "lucide-react";

const Admissions = () => {
  const requirements = [
    "Completed KCPE certificate with minimum 300 marks",
    "Birth certificate (original and copy)",
    "Primary school leaving certificate", 
    "Medical examination form (completed by registered doctor)",
    "Four recent passport-size photographs",
    "Fee payment receipt (admission fee)",
    "Parent/Guardian identification documents"
  ];

  const process = [
    {
      step: 1,
      title: "Application Submission",
      description: "Complete and submit the application form with required documents",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Verification",
      description: "School reviews and verifies all submitted documents",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Interview & Assessment",
      description: "Student and parent interview with school administration",
      icon: User
    },
    {
      step: 4,
      title: "Admission Decision", 
      description: "School communicates admission decision within 2 weeks",
      icon: Calendar
    }
  ];

  const feeStructure = [
    { item: "Tuition Fee (per term)", amount: "KSh 25,000" },
    { item: "Boarding Fee (per term)", amount: "KSh 15,000" },
    { item: "Meals (per term)", amount: "KSh 12,000" },
    { item: "Transport (per term)", amount: "KSh 8,000" },
    { item: "Books & Stationery (per year)", amount: "KSh 10,000" },
    { item: "Uniform (one-time)", amount: "KSh 5,000" },
    { item: "Registration Fee (one-time)", amount: "KSh 3,000" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Admissions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Ober Boys High School
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Begin your journey to academic excellence and character development. 
              Applications are now open for the 2025 academic year.
            </p>
            <Button size="lg" variant="default">
              Download Application Form
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ensure you have all necessary documents and meet the criteria for admission
            </p>
          </div>

          <Card className="shadow-school max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">
                Required Documents & Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined four-step process ensures fair and thorough evaluation of all applicants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <Card key={step.step} className="shadow-school transition-school hover:shadow-strong text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent and competitive fees for quality education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fee Structure Summary */}
            <Card className="shadow-school">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-primary flex items-center justify-center">
                  <DollarSign className="h-6 w-6 mr-2" />
                  Academic Year 2025 Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feeStructure.map((fee, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                      <span className="font-medium">{fee.item}</span>
                      <Badge variant="secondary" className="text-lg">{fee.amount}</Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                  <h4 className="font-semibold text-primary mb-2">Payment Information</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fees are payable at the beginning of each term</li>
                    <li>• 10% discount available for annual payments</li>
                    <li>• Scholarships available for exceptional students</li>
                    <li>• Payment plans can be arranged for qualified families</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* PDF Download/View Section */}
            <Card className="shadow-school bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Complete Fee Structure</CardTitle>
                <p className="text-muted-foreground">
                  Download or view the detailed fee structure document with all terms, payment schedules, and additional information.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="bg-white/50 p-6 rounded-lg border-2 border-dashed border-primary/30 mb-4">
                    <FileText className="h-16 w-16 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Fee Structure 2025.pdf</h3>
                    <p className="text-sm text-muted-foreground">Complete fee breakdown and payment terms</p>
                    <p className="text-xs text-muted-foreground mt-2">File size: 2.1 MB</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      // In a real app, this would open the PDF
                      window.open('/documents/fee-structure-2025.pdf', '_blank');
                    }}
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    View PDF Online
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => {
                      // In a real app, this would download the PDF
                      const link = document.createElement('a');
                      link.href = '/documents/fee-structure-2025.pdf';
                      link.download = 'Ober-Boys-Fee-Structure-2025.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </Button>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Important Notes
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fees are subject to Ministry of Education guidelines</li>
                    <li>• Payment schedules are outlined in the PDF</li>
                    <li>• Contact admissions for payment plan options</li>
                    <li>• All fees are in Kenyan Shillings (KSh)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Important Dates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Application Deadline</h3>
                <p className="text-2xl font-bold text-primary mb-2">December 15, 2024</p>
                <p className="text-sm text-muted-foreground">Submit all required documents</p>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Interview Period</h3>
                <p className="text-2xl font-bold text-primary mb-2">Jan 8-15, 2025</p>
                <p className="text-sm text-muted-foreground">Student & parent interviews</p>
              </CardContent>
            </Card>

            <Card className="shadow-school text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">School Opens</h3>
                <p className="text-2xl font-bold text-primary mb-2">February 5, 2025</p>
                <p className="text-sm text-muted-foreground">Term 1 begins</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Ober Boys High School?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive educational experience that goes beyond academics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-school transition-school hover:shadow-strong text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Consistently high KCSE performance and university placement rates with 98% pass rate
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-school transition-school hover:shadow-strong text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Experienced Faculty</h3>
                <p className="text-muted-foreground">
                  Qualified and dedicated teachers committed to student success and character development
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-school transition-school hover:shadow-strong text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
                <p className="text-muted-foreground">
                  Well-equipped laboratories, library, sports facilities, and STEM innovation center
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-school transition-school hover:shadow-strong text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Character Development</h3>
                <p className="text-muted-foreground">
                  Strong emphasis on moral values, leadership skills, and ethical decision making
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-school bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Have questions about the admission process? Our admissions team is here to help you every step of the way.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <span className="text-lg">+254 XXX XXX XXX</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <span className="text-lg">admissions@oberboyshigh.ac.ke</span>
                </div>
              </div>
              
              <div className="space-x-4">
                <Button variant="secondary" size="lg">
                  Download Application Form
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Schedule Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;