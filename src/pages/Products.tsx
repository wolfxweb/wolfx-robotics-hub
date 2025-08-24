import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Zap,
  Cpu,
  Wrench,
  Wifi,
  BookOpen,
  Microscope,
  Eye
} from "lucide-react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedPriceRange, setSelectedPriceRange] = useState("todos");
  const [sortBy, setSortBy] = useState("relevancia");
  const [viewMode, setViewMode] = useState("grid");
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [wishlist, setWishlist] = useState<number[]>([]);

  const categories = [
    { id: "todos", name: "Todos os Produtos", icon: <Grid3X3 className="h-4 w-4" /> },
    { id: "kits-didaticos", name: "Kits Didáticos", icon: <Cpu className="h-4 w-4" /> },
    { id: "componentes", name: "Componentes", icon: <Zap className="h-4 w-4" /> },
    { id: "ferramentas", name: "Ferramentas", icon: <Wrench className="h-4 w-4" /> },
    { id: "sensores", name: "Sensores & IoT", icon: <Wifi className="h-4 w-4" /> },
    { id: "educacao", name: "Educação", icon: <BookOpen className="h-4 w-4" /> },
    { id: "robotica", name: "Robótica", icon: <Microscope className="h-4 w-4" /> }
  ];

  const priceRanges = [
    { id: "todos", name: "Todos os Preços" },
    { id: "0-50", name: "Até R$ 50" },
    { id: "50-100", name: "R$ 50 - R$ 100" },
    { id: "100-200", name: "R$ 100 - R$ 200" },
    { id: "200+", name: "Acima de R$ 200" }
  ];

  const sortOptions = [
    { id: "relevancia", name: "Mais Relevantes" },
    { id: "preco-menor", name: "Menor Preço" },
    { id: "preco-maior", name: "Maior Preço" },
    { id: "avaliacao", name: "Melhor Avaliação" },
    { id: "vendidos", name: "Mais Vendidos" }
  ];

  const products = [
    {
      id: 1,
      name: "Kit Arduino Uno R3 Completo",
      description: "Kit completo com Arduino Uno, sensores, LEDs, display LCD e componentes para 15 projetos",
      category: "kits-didaticos",
      price: 89.90,
      originalPrice: 129.90,
      rating: 4.8,
      reviews: 342,
      sold: 1250,
      image: "/api/placeholder/300/300",
      tags: ["Arduino", "Iniciante", "Kit Completo"],
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Raspberry Pi 4 Model B 4GB",
      description: "Microcomputador de placa única com 4GB RAM, ideal para projetos IoT e robótica",
      category: "kits-didaticos",
      price: 299.90,
      originalPrice: 349.90,
      rating: 4.9,
      reviews: 567,
      sold: 890,
      image: "/api/placeholder/300/300",
      tags: ["Raspberry Pi", "IoT", "Computação"],
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Sensor de Umidade e Temperatura DHT22",
      description: "Sensor digital de alta precisão para medição de umidade e temperatura",
      category: "sensores",
      price: 15.90,
      originalPrice: 22.90,
      rating: 4.7,
      reviews: 234,
      sold: 2100,
      image: "/api/placeholder/300/300",
      tags: ["Sensor", "IoT", "Precisão"],
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: "Kit Robô Seguidor de Linha",
      description: "Kit completo para montar um robô autônomo que segue linha usando sensores IR",
      category: "robotica",
      price: 159.90,
      originalPrice: 199.90,
      rating: 4.6,
      reviews: 189,
      sold: 456,
      image: "/api/placeholder/300/300",
      tags: ["Robótica", "Automação", "Educacional"],
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "Ferro de Solda Profissional 60W",
      description: "Ferro de solda com controle de temperatura e ponta intercambiável",
      category: "ferramentas",
      price: 45.90,
      originalPrice: 65.90,
      rating: 4.5,
      reviews: 156,
      sold: 789,
      image: "/api/placeholder/300/300",
      tags: ["Ferramenta", "Solda", "Profissional"],
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "Módulo WiFi ESP32",
      description: "Módulo WiFi e Bluetooth com microcontrolador dual-core para projetos IoT",
      category: "sensores",
      price: 29.90,
      originalPrice: 39.90,
      rating: 4.8,
      reviews: 445,
      sold: 1670,
      image: "/api/placeholder/300/300",
      tags: ["WiFi", "Bluetooth", "IoT"],
      inStock: true,
      featured: false
    },
    {
      id: 7,
      name: "Livro Arduino para Iniciantes",
      description: "Guia completo com 25 projetos práticos para aprender Arduino do zero",
      category: "educacao",
      price: 39.90,
      originalPrice: 49.90,
      rating: 4.7,
      reviews: 278,
      sold: 634,
      image: "/api/placeholder/300/300",
      tags: ["Livro", "Arduino", "Educação"],
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Kit Braço Robótico 6DOF",
      description: "Braço robótico com 6 graus de liberdade, controlado por Arduino",
      category: "robotica",
      price: 399.90,
      originalPrice: 499.90,
      rating: 4.9,
      reviews: 89,
      sold: 234,
      image: "/api/placeholder/300/300",
      tags: ["Robótica", "Braço", "Avançado"],
      inStock: true,
      featured: true
    },
    {
      id: 9,
      name: "Multímetro Digital Profissional",
      description: "Multímetro com display LCD, teste de continuidade e proteção contra sobrecarga",
      category: "ferramentas",
      price: 79.90,
      originalPrice: 99.90,
      rating: 4.6,
      reviews: 123,
      sold: 567,
      image: "/api/placeholder/300/300",
      tags: ["Multímetro", "Medição", "Profissional"],
      inStock: true,
      featured: false
    },
    {
      id: 10,
      name: "Kit micro:bit V2",
      description: "Microcontrolador educacional com display LED, sensores e conectividade",
      category: "kits-didaticos",
      price: 129.90,
      originalPrice: 159.90,
      rating: 4.8,
      reviews: 201,
      sold: 445,
      image: "/api/placeholder/300/300",
      tags: ["micro:bit", "Educação", "Programação"],
      inStock: true,
      featured: false
    },
    {
      id: 11,
      name: "Módulo Relé 5V 4 Canais",
      description: "Módulo relé para controle de dispositivos de alta potência via Arduino",
      category: "componentes",
      price: 12.90,
      originalPrice: 18.90,
      rating: 4.4,
      reviews: 167,
      sold: 890,
      image: "/api/placeholder/300/300",
      tags: ["Relé", "Controle", "Alta Potência"],
      inStock: true,
      featured: false
    },
    {
      id: 12,
      name: "Impressora 3D Ender 3 V2",
      description: "Impressora 3D FDM com volume de impressão 220x220x250mm",
      category: "ferramentas",
      price: 899.90,
      originalPrice: 1199.90,
      rating: 4.7,
      reviews: 89,
      sold: 123,
      image: "/api/placeholder/300/300",
      tags: ["3D", "Impressão", "Prototipagem"],
      inStock: true,
      featured: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== "todos") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      if (selectedPriceRange === "200+") {
        matchesPrice = product.price >= 200;
      } else {
        matchesPrice = product.price >= min && product.price <= max;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "preco-menor":
        return a.price - b.price;
      case "preco-maior":
        return b.price - a.price;
      case "avaliacao":
        return b.rating - a.rating;
      case "vendidos":
        return b.sold - a.sold;
      default:
        return 0;
    }
  });

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartItemCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const cartTotal = Object.entries(cart).reduce((total, [productId, count]) => {
    const product = products.find(p => p.id === parseInt(productId));
    return total + (product?.price || 0) * count;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Loja WolfX
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Encontre tudo o que precisa para seus projetos de robótica e eletrônica
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Pesquise por produtos, categorias ou marcas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-4 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Categorias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.icon}
                      {category.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Price Range */}
              <Card>
                <CardHeader>
                  <CardTitle>Faixa de Preço</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {priceRanges.map(range => (
                    <Button
                      key={range.id}
                      variant={selectedPriceRange === range.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedPriceRange(range.id)}
                    >
                      {range.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Cart Summary */}
              {cartItemCount > 0 && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Carrinho ({cartItemCount})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Object.entries(cart).map(([productId, count]) => {
                        const product = products.find(p => p.id === parseInt(productId));
                        return product ? (
                          <div key={productId} className="flex items-center justify-between text-sm">
                            <span className="truncate">{product.name}</span>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => removeFromCart(product.id)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{count}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addToCart(product.id)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ) : null;
                      })}
                      <div className="border-t pt-2 mt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>R$ {cartTotal.toFixed(2)}</span>
                        </div>
                        <Button className="w-full mt-2">
                          Finalizar Compra
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{sortedProducts.length} produtos encontrados</span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md px-3 py-2 text-sm"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
                  <p className="text-gray-600 mb-4">
                    Tente ajustar os filtros ou usar termos de busca diferentes
                  </p>
                  <Button onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("todos");
                    setSelectedPriceRange("todos");
                  }}>
                    Limpar Filtros
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {sortedProducts.map(product => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center">
                        <Eye className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {product.featured && (
                        <Badge className="absolute top-2 left-2 bg-yellow-500 text-white">
                          Destaque
                        </Badge>
                      )}
                      {product.originalPrice > product.price && (
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find(c => c.id === product.category)?.name}
                        </Badge>
                        {!product.inStock && (
                          <Badge variant="destructive" className="text-xs">
                            Esgotado
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2 text-sm">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium text-sm">{product.rating}</span>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{product.sold} vendidos</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-green-600">
                          R$ {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full"
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Adicionar ao Carrinho' : 'Esgotado'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Para compras acima de R$ 99</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Garantia</h3>
              <p className="text-gray-600">1 ano de garantia em todos os produtos</p>
            </Card>
            <Card className="text-center p-6">
              <RotateCcw className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Devolução</h3>
              <p className="text-gray-600">30 dias para troca ou devolução</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 