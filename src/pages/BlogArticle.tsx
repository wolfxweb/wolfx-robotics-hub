import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Share2,
  Heart,
  MessageCircle,
  ArrowLeft,
  BookOpen,
  Code,
  Cpu,
  Zap,
  Bot,
  Microchip,
  Lightbulb
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogArticle = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  const categories = [
    { id: "arduino", name: "Arduino", icon: <Cpu className="h-4 w-4" /> },
    { id: "raspberry", name: "Raspberry Pi", icon: <Microchip className="h-4 w-4" /> },
    { id: "robotica", name: "Robótica", icon: <Bot className="h-4 w-4" /> },
    { id: "iot", name: "IoT", icon: <Zap className="h-4 w-4" /> },
    { id: "programacao", name: "Programação", icon: <Code className="h-4 w-4" /> },
    { id: "dicas", name: "Dicas & Tutoriais", icon: <Lightbulb className="h-4 w-4" /> }
  ];

  // Simular dados do artigo baseado no ID
  const article = {
    id: parseInt(id || "1"),
    title: "Primeiros Passos com Arduino: Guia Completo para Iniciantes",
    excerpt: "Aprenda os conceitos básicos do Arduino e crie seu primeiro projeto com LED piscante. Este guia completo vai te ajudar a dar os primeiros passos no mundo da eletrônica.",
    content: `
      <h2>Introdução ao Arduino</h2>
      <p>O Arduino é uma plataforma de prototipagem eletrônica que permite criar projetos interativos de forma simples e acessível. Com sua placa de desenvolvimento e ambiente de programação integrado, você pode dar vida a suas ideias de forma rápida e eficiente.</p>
      
      <h3>O que você vai aprender</h3>
      <ul>
        <li>Conceitos básicos de eletrônica</li>
        <li>Programação em C/C++ para Arduino</li>
        <li>Uso de sensores e atuadores</li>
        <li>Criação de projetos práticos</li>
      </ul>

      <h2>Materiais Necessários</h2>
      <p>Para começar com Arduino, você precisará dos seguintes materiais:</p>
      <ul>
        <li>Arduino Uno R3 (ou similar)</li>
        <li>Cabo USB tipo A-B</li>
        <li>LEDs (pelo menos 3 cores diferentes)</li>
        <li>Resistores de 220Ω</li>
        <li>Protoboard</li>
        <li>Jumpers macho-macho</li>
      </ul>

      <h2>Primeiro Projeto: LED Piscante</h2>
      <p>Vamos começar com um projeto clássico: fazer um LED piscar. Este é o "Hello World" da eletrônica e vai te ensinar os conceitos fundamentais.</p>

      <h3>Esquema de Conexão</h3>
      <p>Conecte o LED ao pino 13 do Arduino através de um resistor de 220Ω. O terminal positivo (ânodo) do LED deve estar conectado ao pino 13, e o terminal negativo (cátodo) ao GND.</p>

      <h3>Código do Projeto</h3>
      <pre><code>
// Primeiro projeto Arduino - LED Piscante
// Pino onde o LED está conectado
const int ledPin = 13;

void setup() {
  // Configura o pino como saída
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Liga o LED
  digitalWrite(ledPin, HIGH);
  // Aguarda 1 segundo
  delay(1000);
  // Desliga o LED
  digitalWrite(ledPin, LOW);
  // Aguarda 1 segundo
  delay(1000);
}
      </code></pre>

      <h3>Explicação do Código</h3>
      <p><strong>setup():</strong> Esta função é executada uma vez quando o Arduino é ligado. Aqui configuramos o pino 13 como saída.</p>
      <p><strong>loop():</strong> Esta função é executada continuamente. Aqui fazemos o LED piscar alternando entre ligado e desligado.</p>

      <h2>Próximos Passos</h2>
      <p>Agora que você criou seu primeiro projeto, que tal experimentar algumas variações:</p>
      <ul>
        <li>Alterar a velocidade do pisca-pisca</li>
        <li>Usar múltiplos LEDs</li>
        <li>Criar sequências de luz</li>
        <li>Adicionar um botão para controlar o LED</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Parabéns! Você deu seus primeiros passos no mundo do Arduino. Este é apenas o começo de uma jornada incrível de descobertas e projetos. Continue praticando e experimentando com novos componentes e ideias.</p>
    `,
    category: "arduino",
    author: "Prof. Silva",
    date: "2024-01-15",
    readTime: "8 min",
    views: 15420,
    likes: 342,
    comments: [
      {
        id: 1,
        author: "João Silva",
        date: "2024-01-16",
        content: "Excelente tutorial! Consegui fazer o LED piscar na primeira tentativa. Muito bem explicado."
      },
      {
        id: 2,
        author: "Maria Santos",
        date: "2024-01-16",
        content: "Gostaria de saber se posso usar um LED RGB no lugar do LED simples. Alguém pode ajudar?"
      }
    ],
    image: "/api/placeholder/800/400",
    tags: ["Arduino", "Iniciante", "LED", "Eletrônica"],
    relatedArticles: [
      {
        id: 2,
        title: "Como Construir um Robô Seguidor de Linha",
        excerpt: "Descubra como criar um robô autônomo que segue uma linha usando sensores infravermelhos.",
        category: "robotica",
        date: "2024-01-12"
      },
      {
        id: 8,
        title: "Interface Gráfica para Arduino com Processing",
        excerpt: "Crie interfaces gráficas para controlar projetos Arduino usando Processing.",
        category: "arduino",
        date: "2023-12-28"
      }
    ]
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // Aqui você adicionaria a lógica para salvar o comentário
      console.log("Comentário:", comment);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Blog
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {categories.find(c => c.id === article.category)?.name}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{article.views.toLocaleString()} visualizações</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-8">
                <BookOpen className="h-24 w-24 text-white opacity-80" />
              </div>

              {/* Article Content */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </CardContent>
              </Card>

              {/* Article Actions */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Button
                        variant={liked ? "default" : "outline"}
                        size="sm"
                        onClick={handleLike}
                        className="flex items-center gap-2"
                      >
                        <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                        {article.likes + (liked ? 1 : 0)} curtidas
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Compartilhar
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Comentários ({article.comments.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add Comment */}
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Adicione seu comentário..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                    />
                    <Button onClick={handleComment} disabled={!comment.trim()}>
                      Enviar Comentário
                    </Button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {article.comments.map(comment => (
                      <div key={comment.id} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{comment.author}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(comment.date).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Artigos Relacionados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {article.relatedArticles.map(related => (
                    <div key={related.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <Link to={`/blog/${related.id}`} className="block hover:text-blue-600 transition-colors">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Badge variant="outline" className="text-xs">
                            {categories.find(c => c.id === related.category)?.name}
                          </Badge>
                          <span>{new Date(related.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categorias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/blog?category=${category.id}`}
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition-colors"
                    >
                      {category.icon}
                      <span className="text-sm">{category.name}</span>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle; 