import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-robotics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="WolfX Robotics Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            WolfX: Inovação em{" "}
            <span className="bg-gradient-to-r from-tech-blue to-energy-orange bg-clip-text text-transparent">
              Robótica
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Transformamos ideias em realidade tecnológica. Sua parceira ideal para explorar 
            as fronteiras da inteligência artificial, automação e conectividade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="tech-primary"
              size="xl"
            >
              Explorar Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline-white"
              size="xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-energy-orange mb-2">1000+</div>
              <div className="text-gray-300">Produtos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-energy-orange mb-2">50k+</div>
              <div className="text-gray-300">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-energy-orange mb-2">24h</div>
              <div className="text-gray-300">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-energy-orange/20 rounded-lg animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;