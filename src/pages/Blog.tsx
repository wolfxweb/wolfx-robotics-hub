import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Filter,
  BookOpen,
  Code,
  Cpu,
  Zap,
  Bot,
  Microchip,
  Settings,
  Lightbulb,
  TrendingUp,
  Users,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: "todos", name: "Todos os Artigos", icon: <BookOpen className="h-4 w-4" /> },
    { id: "arduino", name: "Arduino", icon: <Cpu className="h-4 w-4" /> },
    { id: "raspberry", name: "Raspberry Pi", icon: <Microchip className="h-4 w-4" /> },
    { id: "robotica", name: "Robótica", icon: <Bot className="h-4 w-4" /> },
    { id: "iot", name: "IoT", icon: <Zap className="h-4 w-4" /> },
    { id: "programacao", name: "Programação", icon: <Code className="h-4 w-4" /> },
    { id: "dicas", name: "Dicas & Tutoriais", icon: <Lightbulb className="h-4 w-4" /> }
  ];

  const articles = [
    {
      id: 1,
      title: "Primeiros Passos com Arduino: Guia Completo para Iniciantes",
      excerpt: "Aprenda os conceitos básicos do Arduino e crie seu primeiro projeto com LED piscante. Este guia completo vai te ajudar a dar os primeiros passos no mundo da eletrônica.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "arduino",
      author: "Prof. Silva",
      date: "2024-01-15",
      readTime: "8 min",
      views: 15420,
      image: "/api/placeholder/400/250",
      tags: ["Arduino", "Iniciante", "LED", "Eletrônica"],
      featured: true
    },
    {
      id: 2,
      title: "Como Construir um Robô Seguidor de Linha com Sensores IR",
      excerpt: "Descubra como criar um robô autônomo que segue uma linha usando sensores infravermelhos. Projeto completo com código e esquemas.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "robotica",
      author: "Eng. Santos",
      date: "2024-01-12",
      readTime: "12 min",
      views: 8920,
      image: "/api/placeholder/400/250",
      tags: ["Robótica", "Sensores", "Automação"],
      featured: true
    },
    {
      id: 3,
      title: "Sistema de Irrigação Inteligente com Arduino e Sensores",
      excerpt: "Crie um sistema de irrigação automático usando sensores de umidade e Arduino. Ideal para projetos de agricultura urbana.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "iot",
      author: "Dr. Costa",
      date: "2024-01-10",
      readTime: "10 min",
      views: 6780,
      image: "/api/placeholder/400/250",
      tags: ["IoT", "Sensores", "Agricultura"],
      featured: false
    },
    {
      id: 4,
      title: "Programação Python para Robótica: Do Básico ao Avançado",
      excerpt: "Aprenda Python aplicado à robótica com exemplos práticos e projetos reais. Do controle básico até algoritmos complexos.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "programacao",
      author: "Prof. Oliveira",
      date: "2024-01-08",
      readTime: "15 min",
      views: 12340,
      image: "/api/placeholder/400/250",
      tags: ["Python", "Robótica", "Programação"],
      featured: false
    },
    {
      id: 5,
      title: "Configurando um Servidor Web com Raspberry Pi",
      excerpt: "Configure um servidor web completo usando Raspberry Pi e Apache. Ideal para projetos de IoT e desenvolvimento web.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "raspberry",
      author: "Eng. Ferreira",
      date: "2024-01-05",
      readTime: "14 min",
      views: 4560,
      image: "/api/placeholder/400/250",
      tags: ["Raspberry Pi", "Servidor", "Web"],
      featured: false
    },
    {
      id: 6,
      title: "10 Dicas Essenciais para Projetos de Eletrônica",
      excerpt: "Confira as melhores práticas e dicas para evitar erros comuns em projetos de eletrônica e robótica.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "dicas",
      author: "Dr. Lima",
      date: "2024-01-03",
      readTime: "6 min",
      views: 5670,
      image: "/api/placeholder/400/250",
      tags: ["Dicas", "Eletrônica", "Projetos"],
      featured: false
    },
    {
      id: 7,
      title: "Monitoramento de Energia em Tempo Real com IoT",
      excerpt: "Monitore o consumo de energia em tempo real usando sensores e IoT. Projeto completo com dashboard web.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "iot",
      author: "Prof. Almeida",
      date: "2024-01-01",
      readTime: "11 min",
      views: 3890,
      image: "/api/placeholder/400/250",
      tags: ["IoT", "Energia", "Monitoramento"],
      featured: false
    },
    {
      id: 8,
      title: "Interface Gráfica para Arduino com Processing",
      excerpt: "Crie interfaces gráficas para controlar projetos Arduino usando Processing. Tutorial passo a passo.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      category: "arduino",
      author: "Eng. Rodrigues",
      date: "2023-12-28",
      readTime: "9 min",
      views: 7120,
      image: "/api/placeholder/400/250",
      tags: ["Arduino", "Interface", "Processing"],
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "todos" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Blog WolfX
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Conhecimento, dicas e tutoriais sobre robótica e eletrônica
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Pesquise por artigos, tutoriais ou tópicos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              Artigos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map(article => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
                      Destaque
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{categories.find(c => c.id === article.category)?.name}</Badge>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Categorias:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* All Articles */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Todos os Artigos</h2>
            <span className="text-gray-600">{filteredArticles.length} artigos encontrados</span>
          </div>
          
          {filteredArticles.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                <p className="text-gray-600 mb-4">
                  Tente ajustar os filtros ou usar termos de busca diferentes
                </p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("todos");
                }}>
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentArticles.map(article => (
                  <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {article.featured && (
                        <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
                          Destaque
                        </Badge>
                      )}
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(c => c.id === article.category)?.name}
                        </Badge>
                      </div>
                      <CardTitle className="text-base line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-3 text-sm">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span className="font-medium text-sm">{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span className="text-sm">{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {article.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Próxima
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog; 