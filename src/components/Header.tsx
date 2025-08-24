import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logoWolfX from "@/assets/logo-sem-fundo-wolfx.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-wolf-dark text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoWolfX} 
              alt="WolfX" 
              className="h-8 object-contain"
            />
          </Link>

          {/* Navigation - Temporariamente oculto para deploy institucional */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link to="/produtos" className="text-white hover:text-energy-orange transition-colors">
              Produtos
            </Link>
            <Link to="/tutoriais" className="text-white hover:text-energy-orange transition-colors">
              Tutoriais
            </Link>
            <Link to="/suporte" className="text-white hover:text-energy-orange transition-colors">
              Suporte
            </Link>
            <Link to="/blog" className="text-white hover:text-energy-orange transition-colors">
              Blog
            </Link>
          </nav> */}

          {/* Actions - Temporariamente oculto para deploy institucional */}
          {/* <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-white hover:text-energy-orange hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-energy-orange hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-energy-orange hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-energy-orange hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;