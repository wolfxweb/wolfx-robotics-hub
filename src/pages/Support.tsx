import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  MessageCircle, 
  FileText, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Users,
  Settings,
  Zap
} from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "Como configurar meu primeiro kit de robótica?",
      answer: "Para configurar seu primeiro kit, siga o guia passo a passo incluído na embalagem. Você também pode acessar nossos tutoriais em vídeo na seção de documentação. Recomendamos começar com o kit básico antes de avançar para projetos mais complexos.",
      category: "Configuração"
    },
    {
      question: "Quais são os requisitos de sistema para os softwares?",
      answer: "Nossos softwares são compatíveis com Windows 10+, macOS 10.15+ e Ubuntu 18.04+. Recomendamos pelo menos 4GB de RAM e 2GB de espaço livre em disco. Para melhor performance, use 8GB de RAM ou mais.",
      category: "Sistema"
    },
    {
      question: "Como solicitar suporte técnico?",
      answer: "Você pode solicitar suporte através do chat ao vivo, email (suporte@wolfx.com) ou telefone (0800-123-4567). Nossa equipe está disponível de segunda a sexta, das 8h às 18h.",
      category: "Suporte"
    },
    {
      question: "Qual a política de garantia dos produtos?",
      answer: "Oferecemos garantia de 1 ano para todos os produtos. Para kits educacionais, a garantia cobre defeitos de fabricação. Consulte nossos termos de garantia para mais detalhes.",
      category: "Garantia"
    },
    {
      question: "Como participar da comunidade WolfX?",
      answer: "Junte-se ao nosso Discord, participe dos fóruns online ou inscreva-se em nossos workshops mensais. A comunidade é um ótimo lugar para compartilhar projetos e aprender com outros entusiastas.",
      category: "Comunidade"
    },
    {
      question: "Existe suporte para escolas e instituições?",
      answer: "Sim! Oferecemos programas especiais para escolas, universidades e instituições educacionais. Entre em contato conosco para conhecer nossos pacotes educacionais e condições especiais.",
      category: "Educacional"
    }
  ];

  const supportCategories = [
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "FAQ",
      description: "Perguntas frequentes",
      color: "bg-blue-500"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Documentação",
      description: "Guias e tutoriais",
      color: "bg-green-500"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Chat ao Vivo",
      description: "Suporte instantâneo",
      color: "bg-purple-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidade",
      description: "Fórum e Discord",
      color: "bg-orange-500"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      value: "0800-123-4567",
      description: "Segunda a Sexta, 8h-18h"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "suporte@wolfx.com",
      description: "Resposta em até 24h"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horário de Atendimento",
      value: "8h às 18h",
      description: "Segunda a Sexta-feira"
    }
  ];

  const filteredFaq = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Central de Suporte
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Estamos aqui para ajudar você a explorar o mundo da robótica
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Pesquise por perguntas, problemas ou tópicos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mx-auto mb-4`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Perguntas Frequentes
                </CardTitle>
                <CardDescription>
                  Encontre respostas para as dúvidas mais comuns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredFaq.map((faq, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{faq.category}</Badge>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Entre em contato conosco através dos canais abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-lg font-semibold text-blue-600">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva sua dúvida ou problema..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="h-4 w-4 mr-2" />
                  Iniciar Chat ao Vivo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Ver Documentação
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Entrar na Comunidade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 