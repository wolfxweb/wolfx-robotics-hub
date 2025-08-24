import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Zap, 
  Wrench, 
  Wifi, 
  BookOpen, 
  ArrowRight,
  Microscope
} from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "Kits Didáticos",
    description: "Arduino, Raspberry Pi, micro:bit e muito mais para aprender na prática",
    color: "tech-blue"
  },
  {
    icon: Zap,
    title: "Componentes Eletrônicos",
    description: "Resistores, capacitores, microcontroladores e módulos especializados",
    color: "energy-orange"
  },
  {
    icon: Wrench,
    title: "Ferramentas & Prototipagem",
    description: "Ferros de solda, multímetros, impressoras 3D e kits de bancada",
    color: "tech-blue"
  },
  {
    icon: Wifi,
    title: "Sensores & IoT",
    description: "Módulos de conectividade, sensores inteligentes e automação",
    color: "energy-orange"
  },
  {
    icon: BookOpen,
    title: "Educação & Tutoriais",
    description: "Livros, guias práticos e recursos para dominar novas habilidades",
    color: "tech-blue"
  },
  {
    icon: Microscope,
    title: "Robótica Avançada",
    description: "Sistemas complexos, IA embarcada e automação industrial",
    color: "energy-orange"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-wolf-dark">
            Nossos Produtos e Soluções
          </h2>
          <p className="text-xl text-wolf-gray max-w-3xl mx-auto leading-relaxed">
            Um catálogo abrangente que abrange desde o básico até as tecnologias mais avançadas. 
            Encontre tudo o que precisa para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl ${
                    category.color === 'tech-blue' ? 'bg-tech-blue' : 'bg-energy-orange'
                  } mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-wolf-dark">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-wolf-gray mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group-hover:text-tech-blue transition-colors"
                  >
                    Explorar categoria
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;