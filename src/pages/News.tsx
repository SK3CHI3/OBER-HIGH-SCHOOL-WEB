import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Ober Boys Wins Regional Science Fair Competition",
      content: "Our Form 3 students took first place in the regional science fair with their innovative water purification project. The team, led by students John Ochieng and Peter Otieno, impressed judges with their solution to provide clean drinking water for rural communities.",
      date: "2024-03-15",
      category: "Achievement",
      author: "School Administration"
    },
    {
      id: 2, 
      title: "New Computer Laboratory Officially Opened",
      content: "The school inaugurated a state-of-the-art computer lab equipped with 40 modern computers to enhance digital learning. The laboratory features high-speed internet connectivity and modern software to prepare students for the digital age.",
      date: "2024-03-10",
      category: "Infrastructure",
      author: "Principal's Office"
    },
    {
      id: 3,
      title: "Form 4 Students Excel in Mock Examinations", 
      content: "Our KCSE candidates showed impressive performance in the mock examinations with 92% scoring above average. This outstanding performance demonstrates the quality of education and preparation at Ober Boys High School.",
      date: "2024-03-05",
      category: "Academic",
      author: "Academic Office"
    },
    {
      id: 4,
      title: "Annual Sports Day 2024 Successfully Held",
      content: "The school held its annual sports day with great enthusiasm. Students participated in various athletic events including track and field, football, and basketball competitions. The event promoted physical fitness and school spirit.",
      date: "2024-02-28",
      category: "Sports",
      author: "Sports Department"
    },
    {
      id: 5,
      title: "Drama Club Wins County Festival",
      content: "Our drama club emerged victorious at the county drama festival with their outstanding performance of 'The River and the Source'. The students will now represent the county at the regional level competition.",
      date: "2024-02-20",
      category: "Co-curricular",
      author: "Arts Department"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">News & Events</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest News & Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest happenings, achievements, and events at Ober Boys High School
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news.map((article) => (
              <Card key={article.id} className="shadow-school transition-school hover:shadow-strong">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{article.content}</p>
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

export default News;