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
    title: "Qualidade e Confiabilidade",
    description: "Seleção rigorosa de produtos com controle de qualidade criterioso para garantir durabilidade e alto desempenho."
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Especializado",
    description: "Equipe de especialistas sempre disponível para auxiliar em montagens, programação e resolução de problemas."
  },
  {
    icon: Truck,
    title: "Envio Rápido e Eficiente",
    description: "Sistema logístico otimizado com processamento no mesmo dia útil para não atrasar seus projetos."
  },
  {
    icon: CreditCard,
    title: "Pagamento Flexível",
    description: "Parcelamento em até 3x sem juros para tornar a tecnologia mais acessível ao seu orçamento."
  },
  {
    icon: GraduationCap,
    title: "Conteúdo Educacional",
    description: "Tutoriais, artigos e guias desenvolvidos por especialistas para acelerar seu aprendizado."
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros entusiastas, compartilhe experiências e colabore em projetos inovadores."
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
            Nossos diferenciais são a base do nosso compromisso com o seu sucesso. 
            Oferecemos uma experiência completa que impulsiona sua inovação.
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