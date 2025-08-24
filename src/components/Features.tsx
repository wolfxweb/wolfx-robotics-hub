import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Headphones, 
  Truck, 
  CreditCard, 
  GraduationCap, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Todos os produtos passam por rigoroso controle de qualidade para garantir durabilidade e desempenho."
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Equipe especializada para ajudar na escolha dos produtos e resolução de dúvidas técnicas."
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Envio em até 24h para todo o Brasil com rastreamento em tempo real do seu pedido."
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Múltiplas formas de pagamento com parcelamento em até 12x e total segurança."
  },
  {
    icon: GraduationCap,
    title: "Peças de Reposição",
    description: "Ampla variedade de componentes eletrônicos e peças para manutenção e reparos."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Atendimento humanizado para encontrar exatamente o que você precisa para seu projeto."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-wolf-dark">
            Por Que Escolher a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              WolfX?
            </span>
          </h2>
          <p className="text-xl text-wolf-gray max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em robótica e eletrônica, oferecendo produtos de qualidade 
            e o melhor atendimento para seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-wolf-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-wolf-gray leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;