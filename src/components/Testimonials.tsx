import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. James Ochieng",
      role: "Parent & Medical Doctor",
      content: "Ober Boys High School transformed my son into a confident, disciplined young man. The academic excellence and character development programs are exceptional.",
      rating: 5,
      year: "Parent of 2023 Graduate"
    },
    {
      name: "Michael Otieno",
      role: "University Student",
      content: "The foundation I received at Ober Boys prepared me well for university life. The teachers genuinely cared about our success and pushed us to excel.",
      rating: 5,
      year: "Class of 2022 - Pursuing Engineering"
    },
    {
      name: "Grace Akinyi",
      role: "Parent",
      content: "Choosing Ober Boys was the best decision we made for our son's education. The school's values and commitment to excellence are truly remarkable.",
      rating: 5,
      year: "Current Parent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from parents, students, and alumni about their experience at Ober Boys High School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-school transition-school hover:shadow-strong animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;