import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Play, 
  Clock, 
  User, 
  Star, 
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
  Eye,
  Download
} from "lucide-react";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedLevel, setSelectedLevel] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos", icon: <BookOpen className="h-4 w-4" /> },
    { id: "arduino", name: "Arduino", icon: <Cpu className="h-4 w-4" /> },
    { id: "raspberry", name: "Raspberry Pi", icon: <Microchip className="h-4 w-4" /> },
    { id: "robotica", name: "Robótica", icon: <Bot className="h-4 w-4" /> },
    { id: "iot", name: "IoT", icon: <Zap className="h-4 w-4" /> },
    { id: "programacao", name: "Programação", icon: <Code className="h-4 w-4" /> }
  ];

  const levels = [
    { id: "todos", name: "Todos os Níveis" },
    { id: "iniciante", name: "Iniciante" },
    { id: "intermediario", name: "Intermediário" },
    { id: "avancado", name: "Avançado" }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Primeiros Passos com Arduino",
      description: "Aprenda os conceitos básicos do Arduino e crie seu primeiro projeto com LED piscante.",
      category: "arduino",
      level: "iniciante",
      duration: "45 min",
      author: "Prof. Silva",
      rating: 4.8,
      views: 15420,
      thumbnail: "/api/placeholder/300/200",
      tags: ["Arduino", "LED", "Básico"],
      featured: true
    },
    {
      id: 2,
      title: "Robô Seguidor de Linha",
      description: "Construa um robô autônomo que segue uma linha usando sensores infravermelhos.",
      category: "robotica",
      level: "intermediario",
      duration: "2h 30min",
      author: "Eng. Santos",
      rating: 4.9,
      views: 8920,
      thumbnail: "/api/placeholder/300/200",
      tags: ["Robótica", "Sensores", "Automação"],
      featured: true
    },
    {
      id: 3,
      title: "Sistema de Irrigação Inteligente",
      description: "Crie um sistema de irrigação automático usando sensores de umidade e Arduino.",
      category: "iot",
      level: "intermediario",
      duration: "1h 45min",
      author: "Dr. Costa",
      rating: 4.7,
      views: 6780,
      thumbnail: "/api/placeholder/300/200",
      tags: ["IoT", "Sensores", "Automação"],
      featured: false
    },
    {
      id: 4,
      title: "Programação Python para Robótica",
      description: "Aprenda Python aplicado à robótica com exemplos práticos e projetos reais.",
      category: "programacao",
      level: "iniciante",
      duration: "3h 15min",
      author: "Prof. Oliveira",
      rating: 4.6,
      views: 12340,
      thumbnail: "/api/placeholder/300/200",
      tags: ["Python", "Robótica", "Programação"],
      featured: false
    },
    {
      id: 5,
      title: "Servidor Web com Raspberry Pi",
      description: "Configure um servidor web completo usando Raspberry Pi e Apache.",
      category: "raspberry",
      level: "avancado",
      duration: "2h 45min",
      author: "Eng. Ferreira",
      rating: 4.5,
      views: 4560,
      thumbnail: "/api/placeholder/300/200",
      tags: ["Raspberry Pi", "Servidor", "Web"],
      featured: false
    },
    {
      id: 6,
      title: "Braço Robótico Controlado por Voz",
      description: "Desenvolva um braço robótico controlado por comandos de voz usando Arduino e Bluetooth.",
      category: "robotica",
      level: "avancado",
      duration: "4h 20min",
      author: "Dr. Lima",
      rating: 4.9,
      views: 5670,
      thumbnail: "/api/placeholder/300/200",
      tags: ["Robótica", "Voz", "Bluetooth"],
      featured: true
    },
    {
      id: 7,
      title: "Sistema de Monitoramento de Energia",
      description: "Monitore o consumo de energia em tempo real usando sensores e IoT.",
      category: "iot",
      level: "intermediario",
      duration: "2h 10min",
      author: "Prof. Almeida",
      rating: 4.4,
      views: 3890,
      thumbnail: "/api/placeholder/300/200",
      tags: ["IoT", "Energia", "Monitoramento"],
      featured: false
    },
    {
      id: 8,
      title: "Interface Gráfica para Arduino",
      description: "Crie interfaces gráficas para controlar projetos Arduino usando Processing.",
      category: "arduino",
      level: "intermediario",
      duration: "1h 55min",
      author: "Eng. Rodrigues",
      rating: 4.3,
      views: 7120,
      thumbnail: "/api/placeholder/300/200",
      tags: ["Arduino", "Interface", "Processing"],
      featured: false
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "todos" || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === "todos" || tutorial.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Tutoriais WolfX
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Aprenda robótica, eletrônica e programação com nossos tutoriais passo a passo
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Pesquise por tutoriais, tecnologias ou projetos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Tutorials */}
        {featuredTutorials.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-8 w-8 text-yellow-500" />
              Tutoriais em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTutorials.map(tutorial => (
                <Card key={tutorial.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center">
                      <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">
                      Destaque
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{tutorial.category}</Badge>
                      <Badge variant="outline">{tutorial.level}</Badge>
                    </div>
                    <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                    <CardDescription>{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {tutorial.author}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{tutorial.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{tutorial.views.toLocaleString()}</span>
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
              <span className="font-medium text-gray-700">Filtros:</span>
            </div>
            
            {/* Category Filter */}
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

            {/* Level Filter */}
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <Button
                  key={level.id}
                  variant={selectedLevel === level.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level.id)}
                >
                  {level.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* All Tutorials */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Todos os Tutoriais</h2>
            <span className="text-gray-600">{filteredTutorials.length} tutoriais encontrados</span>
          </div>
          
          {filteredTutorials.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum tutorial encontrado</h3>
                <p className="text-gray-600 mb-4">
                  Tente ajustar os filtros ou usar termos de busca diferentes
                </p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("todos");
                  setSelectedLevel("todos");
                }}>
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTutorials.map(tutorial => (
                <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {tutorial.featured && (
                      <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {categories.find(c => c.id === tutorial.category)?.name}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {tutorial.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-base line-clamp-2">{tutorial.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {tutorial.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {tutorial.author}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-medium text-sm">{tutorial.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span className="text-sm">{tutorial.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {tutorial.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Tem uma ideia para tutorial?</h3>
              <p className="text-lg mb-6 opacity-90">
                Compartilhe seu conhecimento com a comunidade WolfX e ajude outros entusiastas
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Users className="h-4 w-4 mr-2" />
                  Enviar Proposta
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Recursos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 