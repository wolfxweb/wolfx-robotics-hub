import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-energy-orange/20 rounded-2xl animate-pulse hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pronto para Transformar Suas{" "}
            <span className="bg-gradient-to-r from-energy-orange to-white bg-clip-text text-transparent">
              Ideias?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Junte-se à comunidade WolfX e tenha acesso às melhores ferramentas, 
            componentes e suporte para criar projetos extraordinários.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="energy-primary"
              size="xl"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline-white"
              size="xl"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="h-5 w-5 text-energy-orange" />
              <span>contato@wolfx.com.br</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="h-5 w-5 text-energy-orange" />
              <span>Suporte 24/7 disponível</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;