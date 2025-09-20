import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Search, Filter, Eye, ArrowRight, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define NewsArticle type locally
interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  category: string;
  author: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  featured: boolean;
  status: string;
}

const News = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

      // Sample data for development (replace with Supabase data)
      const sampleNews: NewsArticle[] = [
        {
          id: "1",
          title: "Ober Boys Wins National Science Olympiad Championship",
          content: "Our students secured first place in the National Science Olympiad with their groundbreaking renewable energy project, earning international recognition and a scholarship opportunity for the winning team. The project focused on developing solar-powered water purification systems for rural communities, demonstrating both technical innovation and social impact. The team of five students worked for six months under the guidance of our science teachers to create a prototype that can purify 1000 liters of water per day using only solar energy. This achievement not only brings pride to our school but also opens doors for further research opportunities and partnerships with universities and research institutions.",
          excerpt: "Our students secured first place in the National Science Olympiad with their groundbreaking renewable energy project...",
          image_url: "/school-hero.jpg",
      category: "Achievement",
          author: "School Administration",
          published_at: "2024-12-15T10:00:00Z",
          created_at: "2024-12-15T10:00:00Z",
          updated_at: "2024-12-15T10:00:00Z",
          featured: true,
          status: "published"
        },
        {
          id: "2",
          title: "New STEM Innovation Center Opens",
          content: "The school inaugurated a cutting-edge STEM Innovation Center with advanced robotics, AI labs, and 3D printing facilities to prepare students for the future of technology and innovation. The center features state-of-the-art equipment including 3D printers, robotics kits, computer programming stations, and virtual reality learning environments. This investment represents our commitment to providing students with hands-on experience in emerging technologies and preparing them for careers in science, technology, engineering, and mathematics. The center will serve as a hub for innovation, research, and collaboration among students and teachers.",
          excerpt: "The school inaugurated a cutting-edge STEM Innovation Center with advanced robotics, AI labs...",
          image_url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Infrastructure",
          author: "Principal's Office",
          published_at: "2024-12-10T14:30:00Z",
          created_at: "2024-12-10T14:30:00Z",
          updated_at: "2024-12-10T14:30:00Z",
          featured: true,
          status: "published"
        },
        {
          id: "3",
          title: "Record-Breaking KCSE Results Achieved",
          content: "Our 2024 KCSE candidates achieved a remarkable 98% pass rate with 15 students scoring A grades, setting a new school record and placing us among the top-performing schools in the region. This outstanding performance reflects the dedication of both students and teachers, as well as the effectiveness of our academic programs and support systems. The results show significant improvement across all subjects, with particular strength in mathematics, sciences, and languages. These achievements open doors for our graduates to pursue higher education at prestigious universities both locally and internationally.",
          excerpt: "Our 2024 KCSE candidates achieved a remarkable 98% pass rate with 15 students scoring A grades...",
          image_url: "https://images.unsplash.com/photo-1523240798034-6c5a0c4a4c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Academic",
          author: "Academic Office",
          published_at: "2024-12-05T09:15:00Z",
          created_at: "2024-12-05T09:15:00Z",
          updated_at: "2024-12-05T09:15:00Z",
          featured: false,
          status: "published"
        },
        {
          id: "4",
          title: "School Football Team Wins County Championship",
          content: "Our school football team emerged victorious in the Homa Bay County Secondary Schools Football Championship, defeating their opponents 3-1 in the final match. The team displayed exceptional skill, teamwork, and sportsmanship throughout the tournament. This victory marks the third consecutive year our team has won the county championship, establishing our school as a powerhouse in school sports. The players' dedication to training and their commitment to excellence both on and off the field exemplify the values we instill in our students.",
          excerpt: "Our school football team emerged victorious in the Homa Bay County Secondary Schools Football Championship...",
          image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sports",
          author: "Sports Department",
          published_at: "2024-11-28T16:45:00Z",
          created_at: "2024-11-28T16:45:00Z",
          updated_at: "2024-11-28T16:45:00Z",
          featured: false,
          status: "published"
        },
        {
          id: "5",
          title: "Community Service Project: Clean Water Initiative",
          content: "Students from our school successfully completed a community service project that provided clean water access to over 500 families in the surrounding community. The project involved installing water purification systems and educating community members on water conservation and hygiene practices. This initiative demonstrates our commitment to community development and social responsibility. Students gained valuable leadership experience while making a positive impact on the lives of community members. The project was funded through a combination of school resources and community contributions.",
          excerpt: "Students from our school successfully completed a community service project that provided clean water access...",
          image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: "Community",
          author: "Community Service Club",
          published_at: "2024-11-20T11:30:00Z",
          created_at: "2024-11-20T11:30:00Z",
          updated_at: "2024-11-20T11:30:00Z",
          featured: false,
          status: "published"
        },
        {
          id: "6",
          title: "Partnership with Local University Announced",
          content: "We are excited to announce a new partnership with the University of Nairobi that will provide our students with enhanced learning opportunities and research collaboration. The partnership includes joint research projects, guest lectures by university professors, and early admission programs for our top-performing students. This collaboration will strengthen our academic programs and provide students with exposure to university-level research and teaching methods. The partnership also includes teacher training programs to enhance our faculty's teaching capabilities.",
          excerpt: "We are excited to announce a new partnership with the University of Nairobi that will provide our students...",
          image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          category: "Partnership",
          author: "Partnership Office",
          published_at: "2024-11-15T14:20:00Z",
          created_at: "2024-11-15T14:20:00Z",
          updated_at: "2024-11-15T14:20:00Z",
          featured: true,
          status: "published"
        }
      ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Achievement", label: "Achievement" },
    { value: "Infrastructure", label: "Infrastructure" },
    { value: "Academic", label: "Academic" },
    { value: "Partnership", label: "Partnership" },
    { value: "Community", label: "Community" },
    { value: "Recognition", label: "Recognition" },
    { value: "Sports", label: "Sports" },
    { value: "Co-curricular", label: "Co-curricular" }
  ];

  // Load news articles (in production, this would fetch from Supabase)
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        // In production, replace with actual Supabase query:
        // const { data, error } = await supabase
        //   .from('news_articles')
        //   .select('*')
        //   .eq('status', 'published')
        //   .order('published_at', { ascending: false });
        
        // For now, use sample data
        setNews(sampleNews);
        setFilteredNews(sampleNews);
      } catch (error) {
        console.error('Error loading news:', error);
        setNews(sampleNews);
        setFilteredNews(sampleNews);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  // Filter news based on search term and category
  useEffect(() => {
    let filtered = news;

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    setFilteredNews(filtered);
  }, [news, searchTerm, selectedCategory]);

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

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading news articles...</p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
          <div className="space-y-8">
              {filteredNews.map((article, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                  rootMargin: "0px 0px -30px 0px"
                });
                
                return (
                <motion.div
                  key={article.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.05,
                    ease: "easeOut"
                  }}
                >
                  <Card className="shadow-school transition-school hover:shadow-strong overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                      {/* Article Image */}
                      <div className="lg:col-span-1">
                        <div className="relative h-48 sm:h-64 lg:h-full">
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          {article.featured && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary text-primary-foreground">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Article Content */}
                      <div className="lg:col-span-2 p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                              {new Date(article.published_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                  </div>
                        
                        <CardTitle className="text-2xl leading-tight mb-4">
                          {article.title}
                        </CardTitle>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <Button 
                            variant="ghost" 
                            className="p-0 h-auto text-primary group"
                            onClick={() => {
                              // In a real app, this would open a detailed article view
                              alert(`Opening full article: "${article.title}"`);
                            }}
                          >
                            Read Full Article
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>View Details</span>
                          </div>
                        </div>
                      </div>
                    </div>
              </Card>
                </motion.div>
                );
              })}
          </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;