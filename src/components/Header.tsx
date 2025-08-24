import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
              W
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              WolfX
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Kits Didáticos
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Tutoriais
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Suporte
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Comunidade
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;