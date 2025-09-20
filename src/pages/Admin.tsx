import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Download, 
  Upload, 
  Save, 
  X, 
  Calendar, 
  User, 
  FileText, 
  Image as ImageIcon,
  BarChart3,
  TrendingUp,
  Award,
  BookOpen,
  Settings
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState(false);
  const [isResultsDialogOpen, setIsResultsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Sample News Data (In real app, this would come from Supabase)
  const [news, setNews] = useState([
    {
      id: "1",
      title: "Ober Boys Wins National Science Olympiad Championship",
      content: "Our students secured first place in the National Science Olympiad with their groundbreaking renewable energy project, earning international recognition and a scholarship opportunity for the winning team.",
      excerpt: "Our students secured first place in the National Science Olympiad with their groundbreaking renewable energy project...",
      image_url: "/school-hero.jpg",
      category: "Achievement",
      author: "School Administration",
      published_at: "2024-12-15T10:00:00Z",
      featured: true,
      status: "published"
    },
    {
      id: "2",
      title: "New STEM Innovation Center Opens",
      content: "The school inaugurated a cutting-edge STEM Innovation Center with advanced robotics, AI labs, and 3D printing facilities to prepare students for the future of technology and innovation.",
      excerpt: "The school inaugurated a cutting-edge STEM Innovation Center with advanced robotics, AI labs...",
      image_url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Infrastructure",
      author: "Principal's Office",
      published_at: "2024-12-10T14:30:00Z",
      featured: true,
      status: "published"
    },
    {
      id: "3",
      title: "Record-Breaking KCSE Results Achieved",
      content: "Our 2024 KCSE candidates achieved a remarkable 98% pass rate with 15 students scoring A grades, setting a new school record and placing us among the top-performing schools in the region.",
      excerpt: "Our 2024 KCSE candidates achieved a remarkable 98% pass rate with 15 students scoring A grades...",
      image_url: "https://images.unsplash.com/photo-1523240798034-6c5a0c4a4c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Academic",
      author: "Academic Office",
      published_at: "2024-12-05T09:15:00Z",
      featured: false,
      status: "published"
    }
  ]);

  // Sample KCSE Results Data
  const [kcseResults, setKcseResults] = useState([
    {
      id: "1",
      year: "2024",
      totalStudents: 156,
      meanScore: 8.4,
      passRate: 98.1,
      universityQualified: 95.5,
      topPerformer: "John Mwangi",
      topScore: "A",
      documentUrl: "/documents/kcse-2024-results.pdf",
      published: true
    },
    {
      id: "2",
      year: "2023",
      totalStudents: 148,
      meanScore: 8.2,
      passRate: 97.3,
      universityQualified: 92.6,
      topPerformer: "Peter Otieno",
      topScore: "A",
      documentUrl: "/documents/kcse-2023-results.pdf",
      published: true
    }
  ]);

  // Form states
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "",
    author: "",
    image_url: "",
    featured: false,
    status: "draft"
  });

  const [resultsForm, setResultsForm] = useState({
    year: "",
    totalStudents: "",
    meanScore: "",
    passRate: "",
    universityQualified: "",
    topPerformer: "",
    topScore: "",
    documentUrl: ""
  });

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNews = {
      id: Date.now().toString(),
      ...newsForm,
      published_at: new Date().toISOString()
    };
    setNews([newNews, ...news]);
    setNewsForm({
      title: "",
      content: "",
      excerpt: "",
      category: "",
      author: "",
      image_url: "",
      featured: false,
      status: "draft"
    });
    setIsNewsDialogOpen(false);
  };

  const handleResultsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newResults = {
      id: Date.now().toString(),
      ...resultsForm,
      totalStudents: parseInt(resultsForm.totalStudents),
      meanScore: parseFloat(resultsForm.meanScore),
      passRate: parseFloat(resultsForm.passRate),
      universityQualified: parseFloat(resultsForm.universityQualified),
      published: true
    };
    setKcseResults([newResults, ...kcseResults]);
    setResultsForm({
      year: "",
      totalStudents: "",
      meanScore: "",
      passRate: "",
      universityQualified: "",
      topPerformer: "",
      topScore: "",
      documentUrl: ""
    });
    setIsResultsDialogOpen(false);
  };

  const handleDeleteNews = (id: string) => {
    setNews(news.filter(item => item.id !== id));
  };

  const handleDeleteResults = (id: string) => {
    setKcseResults(kcseResults.filter(item => item.id !== id));
  };

  const handleEditNews = (item: any) => {
    setEditingItem(item);
    setNewsForm({
      title: item.title,
      content: item.content,
      excerpt: item.excerpt,
      category: item.category,
      author: item.author,
      image_url: item.image_url,
      featured: item.featured,
      status: item.status
    });
    setIsNewsDialogOpen(true);
  };

  const handleEditResults = (item: any) => {
    setEditingItem(item);
    setResultsForm({
      year: item.year,
      totalStudents: item.totalStudents.toString(),
      meanScore: item.meanScore.toString(),
      passRate: item.passRate.toString(),
      universityQualified: item.universityQualified.toString(),
      topPerformer: item.topPerformer,
      topScore: item.topScore,
      documentUrl: item.documentUrl
    });
    setIsResultsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Admin Panel</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Content Management System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage news articles, academic results, and school content from this centralized admin panel
            </p>
          </div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="news">News Management</TabsTrigger>
              <TabsTrigger value="results">KCSE Results</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* News Management Tab */}
            <TabsContent value="news" className="mt-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">News Articles</h2>
                  <Dialog open={isNewsDialogOpen} onOpenChange={setIsNewsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add News Article
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          {editingItem ? "Edit News Article" : "Add New News Article"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleNewsSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={newsForm.title}
                            onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="excerpt">Excerpt</Label>
                          <Textarea
                            id="excerpt"
                            value={newsForm.excerpt}
                            onChange={(e) => setNewsForm({...newsForm, excerpt: e.target.value})}
                            rows={3}
                          />
                        </div>
                        <div>
                          <Label htmlFor="content">Content</Label>
                          <Textarea
                            id="content"
                            value={newsForm.content}
                            onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                            rows={6}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="category">Category</Label>
                            <Select value={newsForm.category} onValueChange={(value) => setNewsForm({...newsForm, category: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Achievement">Achievement</SelectItem>
                                <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                                <SelectItem value="Academic">Academic</SelectItem>
                                <SelectItem value="Sports">Sports</SelectItem>
                                <SelectItem value="Community">Community</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="author">Author</Label>
                            <Input
                              id="author"
                              value={newsForm.author}
                              onChange={(e) => setNewsForm({...newsForm, author: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="image_url">Image URL</Label>
                          <Input
                            id="image_url"
                            value={newsForm.image_url}
                            onChange={(e) => setNewsForm({...newsForm, image_url: e.target.value})}
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="featured"
                              checked={newsForm.featured}
                              onChange={(e) => setNewsForm({...newsForm, featured: e.target.checked})}
                            />
                            <Label htmlFor="featured">Featured Article</Label>
                          </div>
                          <div>
                            <Label htmlFor="status">Status</Label>
                            <Select value={newsForm.status} onValueChange={(value) => setNewsForm({...newsForm, status: value})}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">Published</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button type="button" variant="outline" onClick={() => setIsNewsDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="submit">
                            <Save className="h-4 w-4 mr-2" />
                            {editingItem ? "Update" : "Create"} Article
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Author</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Featured</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {news.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell className="font-medium max-w-xs truncate">
                              {article.title}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{article.category}</Badge>
                            </TableCell>
                            <TableCell>{article.author}</TableCell>
                            <TableCell>
                              <Badge variant={article.status === "published" ? "default" : "secondary"}>
                                {article.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {article.featured ? (
                                <Badge variant="default">Yes</Badge>
                              ) : (
                                <Badge variant="outline">No</Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              {new Date(article.published_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleEditNews(article)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleDeleteNews(article.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* KCSE Results Tab */}
            <TabsContent value="results" className="mt-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">KCSE Results</h2>
                  <Dialog open={isResultsDialogOpen} onOpenChange={setIsResultsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Results
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          {editingItem ? "Edit KCSE Results" : "Add New KCSE Results"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleResultsSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="year">Year</Label>
                            <Input
                              id="year"
                              value={resultsForm.year}
                              onChange={(e) => setResultsForm({...resultsForm, year: e.target.value})}
                              placeholder="2024"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="totalStudents">Total Students</Label>
                            <Input
                              id="totalStudents"
                              type="number"
                              value={resultsForm.totalStudents}
                              onChange={(e) => setResultsForm({...resultsForm, totalStudents: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="meanScore">Mean Score</Label>
                            <Input
                              id="meanScore"
                              type="number"
                              step="0.1"
                              value={resultsForm.meanScore}
                              onChange={(e) => setResultsForm({...resultsForm, meanScore: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="passRate">Pass Rate (%)</Label>
                            <Input
                              id="passRate"
                              type="number"
                              step="0.1"
                              value={resultsForm.passRate}
                              onChange={(e) => setResultsForm({...resultsForm, passRate: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="universityQualified">University Qualified (%)</Label>
                            <Input
                              id="universityQualified"
                              type="number"
                              step="0.1"
                              value={resultsForm.universityQualified}
                              onChange={(e) => setResultsForm({...resultsForm, universityQualified: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="topPerformer">Top Performer</Label>
                            <Input
                              id="topPerformer"
                              value={resultsForm.topPerformer}
                              onChange={(e) => setResultsForm({...resultsForm, topPerformer: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="topScore">Top Score</Label>
                            <Select value={resultsForm.topScore} onValueChange={(value) => setResultsForm({...resultsForm, topScore: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="A-">A-</SelectItem>
                                <SelectItem value="B+">B+</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="documentUrl">Document URL</Label>
                          <Input
                            id="documentUrl"
                            value={resultsForm.documentUrl}
                            onChange={(e) => setResultsForm({...resultsForm, documentUrl: e.target.value})}
                            placeholder="/documents/kcse-2024-results.pdf"
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button type="button" variant="outline" onClick={() => setIsResultsDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="submit">
                            <Save className="h-4 w-4 mr-2" />
                            {editingItem ? "Update" : "Create"} Results
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Year</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Mean Score</TableHead>
                          <TableHead>Pass Rate</TableHead>
                          <TableHead>University Qualified</TableHead>
                          <TableHead>Top Performer</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {kcseResults.map((result) => (
                          <TableRow key={result.id}>
                            <TableCell className="font-medium">{result.year}</TableCell>
                            <TableCell>{result.totalStudents}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{result.meanScore}/12</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="default">{result.passRate}%</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">{result.universityQualified}%</Badge>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{result.topPerformer}</div>
                                <div className="text-sm text-muted-foreground">Grade {result.topScore}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleEditResults(result)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleDeleteResults(result.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Subjects Tab */}
            <TabsContent value="subjects" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Subject Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Mathematics", performance: "Excellent", students: 156 },
                    { name: "Sciences", performance: "Outstanding", students: 148 },
                    { name: "Languages", performance: "Very Good", students: 142 },
                    { name: "Humanities", performance: "Good", students: 135 },
                    { name: "Creative Arts", performance: "Excellent", students: 128 },
                    { name: "Technical Studies", performance: "Very Good", students: 120 }
                  ].map((subject, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{subject.name}</span>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Performance:</span>
                            <Badge variant="outline">{subject.performance}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Students:</span>
                            <span className="text-sm font-medium">{subject.students}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">System Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="h-5 w-5 mr-2" />
                        General Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="schoolName">School Name</Label>
                        <Input id="schoolName" defaultValue="Ober Boys High School" />
                      </div>
                      <div>
                        <Label htmlFor="schoolCode">School Code</Label>
                        <Input id="schoolCode" defaultValue="12345678" />
                      </div>
                      <div>
                        <Label htmlFor="registrationNumber">Registration Number</Label>
                        <Input id="registrationNumber" defaultValue="MOE/123/456/789" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total News Articles:</span>
                        <span className="font-medium">{news.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Published Articles:</span>
                        <span className="font-medium">{news.filter(n => n.status === 'published').length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">KCSE Results Years:</span>
                        <span className="font-medium">{kcseResults.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Featured Articles:</span>
                        <span className="font-medium">{news.filter(n => n.featured).length}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;