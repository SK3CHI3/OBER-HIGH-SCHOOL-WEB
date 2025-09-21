import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });

  const testimonials = [
    {
      name: "Michael Otieno",
      role: "Alumni - Software Engineer at Microsoft",
      content: "The foundation I received at Ober Boys prepared me well for university and my career. The teachers genuinely cared about our success and pushed us to excel beyond our limits. The discipline and academic rigor here shaped me into the professional I am today.",
      rating: 5,
      year: "Class of 2019 - Now at Microsoft"
    },
    {
      name: "Mrs. Sarah Wanjiku",
      role: "Teacher - Mathematics Department",
      content: "Teaching at Ober Boys has been incredibly rewarding. The students are motivated, respectful, and eager to learn. The school's commitment to academic excellence and character development creates an environment where both students and teachers can thrive.",
      rating: 5,
      year: "Teacher since 2018"
    },
    {
      name: "Dr. James Ochieng",
      role: "Parent & Medical Doctor",
      content: "Ober Boys High School transformed my son into a confident, disciplined young man. The academic excellence and character development programs are exceptional. He's now thriving at university and I credit much of his success to the solid foundation he received here.",
      rating: 5,
      year: "Parent of 2024 Graduate"
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

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="shadow-school transition-school hover:shadow-strong h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    </motion.div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;