import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPreview = () => {
  const news = [
    {
      id: 1,
      title: "Ober Boys Wins Regional Science Fair Competition",
      excerpt: "Our Form 3 students took first place in the regional science fair with their innovative water purification project.",
      date: "2024-03-15",
      category: "Achievement"
    },
    {
      id: 2, 
      title: "New Computer Laboratory Officially Opened",
      excerpt: "The school inaugurated a state-of-the-art computer lab equipped with 40 modern computers to enhance digital learning.",
      date: "2024-03-10",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Form 4 Students Excel in Mock Examinations", 
      excerpt: "Our KCSE candidates showed impressive performance in the mock examinations with 92% scoring above average.",
      date: "2024-03-05",
      category: "Academic"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Latest News</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Happening at Ober Boys
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest achievements, events, and announcements from our school community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card key={item.id} className="shadow-school transition-school hover:shadow-strong hover-scale">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/news">
              View All News & Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;