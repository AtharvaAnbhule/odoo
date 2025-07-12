import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Recycle,
  Users,
  Shield,
  Camera,
  Smartphone,
  Heart,
  Eye,
  Leaf,
  TreePine,
  Droplets,
  Wind,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const categories = [
    { id: "all", name: "All Items", icon: "👗", count: 1250 },
    { id: "dresses", name: "Dresses", icon: "👗", count: 320 },
    { id: "tops", name: "Tops", icon: "👕", count: 450 },
    { id: "bottoms", name: "Bottoms", icon: "👖", count: 280 },
    { id: "outerwear", name: "Outerwear", icon: "🧥", count: 180 },
    { id: "shoes", name: "Shoes", icon: "👠", count: 220 },
    { id: "accessories", name: "Accessories", icon: "👜", count: 150 },
    { id: "formal", name: "Formal", icon: "🤵", count: 90 },
    { id: "casual", name: "Casual", icon: "👔", count: 380 },
    { id: "vintage", name: "Vintage", icon: "🕰️", count: 120 },
  ];

  const featuredItems = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      points: 250,
      originalPoints: 400,
      image: "https://i.etsystatic.com/17006794/r/il/dfb6f4/5539431563/il_1080xN.5539431563_ivs8.jpg",
      condition: "Like New",
      size: "M",
      likes: 24,
      views: 156,
      category: "Outerwear",
      ecoScore: 95,
      carbonSaved: "2.5kg CO2",
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      points: 180,
      originalPoints: 300,
      image: "https://i.pinimg.com/originals/5e/3e/31/5e3e31b7bb4551381175272826b6f2d0.jpg",
      condition: "Excellent",
      size: "S",
      likes: 18,
      views: 89,
      category: "Dresses",
      ecoScore: 92,
      carbonSaved: "1.8kg CO2",
    },
    {
      id: 3,
      title: "Recycled Material Boots",
      brand: "EcoStep",
      points: 320,
      originalPoints: 500,
      image: "https://i.pinimg.com/originals/7c/08/68/7c0868c70f71cdbc7cf59de3ee86d3c9.jpg",
      condition: "Good",
      size: "9",
      likes: 31,
      views: 203,
      category: "Shoes",
      ecoScore: 88,
      carbonSaved: "3.2kg CO2",
    },
    {
      id: 4,
      title: "Bamboo Fiber Sweater",
      brand: "Natural Wear",
      points: 160,
      originalPoints: 280,
      image: "https://tse2.mm.bing.net/th/id/OIP.us5B3IldhiVmOZmEjI8DSgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      condition: "Like New",
      size: "L",
      likes: 15,
      views: 67,
      category: "Tops",
      ecoScore: 96,
      carbonSaved: "2.1kg CO2",
    },
  ];

  const features = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Smart Swap System",
      description:
        "AI-powered matching algorithm finds perfect clothing exchanges based on your preferences and environmental impact.",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "AR Virtual Try-On",
      description:
        "Revolutionary AR technology lets you virtually try clothes before exchanging - see how they look on you!",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Carbon Footprint Tracker",
      description:
        "Track your environmental impact and see how much CO2 you've saved through sustainable fashion choices.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Eco Community",
      description:
        "Join thousands of eco-warriors building a sustainable future together, one exchange at a time.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description:
        "AI-powered quality checks and community verification ensure every item meets our eco-standards.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Green Rewards",
      description:
        "Earn eco-points for sustainable choices and unlock exclusive green benefits and achievements.",
    },
  ];

  const environmentalImpact = {
    totalCO2Saved: "12,450",
    waterSaved: "2.3M",
    wasteReduced: "8,750",
    treesPlanted: "1,200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoWear
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/signup"
                className="text-gray-600 hover:text-green-600 transition-colors">
                Sign Up
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-green-600 transition-colors">
                Shop
              </Link>
              <Link
                href="/sell"
                className="text-gray-600 hover:text-green-600 transition-colors">
                Sell
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </Link>
                     <Link href="/ai-recommendations">
  <Button
    variant="outline"
    className="border-green-300 text-green-700 hover:bg-green-100"
  >
    AI Recommendations
  </Button>
</Link>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-green-600">
                  Dashboard
                </Button>
              </Link>
              <Link href="/admin">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered Sustainable Fashion
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Sustainable Fashion{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the eco-friendly fashion movement! Exchange pre-loved
              clothes, reduce carbon footprint, and earn green rewards. Try
              before you buy with our AR technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-3">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sell">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-green-200 hover:bg-green-50 bg-transparent">
                  <Camera className="mr-2 h-5 w-5" />
                  Sell Your Clothes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-green-100">
              Together, we're making a real difference for our planet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Wind className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {environmentalImpact.totalCO2Saved}kg
              </div>
              <div className="text-green-100">CO2 Emissions Saved</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Droplets className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {environmentalImpact.waterSaved}L
              </div>
              <div className="text-green-100">Water Conserved</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {environmentalImpact.wasteReduced}kg
              </div>
              <div className="text-green-100">Textile Waste Reduced</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <TreePine className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {environmentalImpact.treesPlanted}
              </div>
              <div className="text-green-100">Trees Planted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600">
              Find sustainable fashion in every category
            </p>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.id}`}
                  className="group">
                  <Card className="w-32 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group-hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} items
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Eco-Friendly Featured Items
            </h2>
            <p className="text-gray-600">
              Discover amazing sustainable fashion pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-t-lg relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                      {item.condition}
                    </Badge>
                    <div className="absolute top-2 right-2 flex flex-col space-y-1">
                      <Badge className="bg-emerald-100 text-emerald-800 text-xs">
                        <Leaf className="h-3 w-3 mr-1" />
                        {item.ecoScore}% Eco
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Heart className="h-3 w-3 mr-1" />
                        {item.likes}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-green-600 text-white text-xs">
                        -{item.carbonSaved}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.brand} • Size {item.size}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-green-600">
                          {item.points} Points
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {item.originalPoints} Points
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {Math.round(
                          ((item.originalPoints - item.points) /
                            item.originalPoints) *
                            100
                        )}
                        % OFF
                      </Badge>
                    </div>
                    <Link href={`/products/${item.id}`}>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-green-200 hover:bg-green-50 bg-transparent">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by AI, Built for{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Sustainability
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of sustainable fashion with cutting-edge
              technology and eco-friendly features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Level Up Your Eco Journey
            </h2>
            <p className="text-gray-600">
              Earn rewards, unlock achievements, and compete with friends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Eco Achievements
                </h3>
                <p className="text-gray-600">
                  Unlock badges for sustainable actions and milestones
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Green Challenges
                </h3>
                <p className="text-gray-600">
                  Complete weekly eco-challenges and earn bonus points
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Leaderboards
                </h3>
                <p className="text-gray-600">
                  Compete with friends and climb the sustainability rankings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Sustainable Fashion Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of eco-warriors building a sustainable future, one
            exchange at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-3">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/sell">
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 text-green-600 hover:bg-green-50 text-lg px-8 py-3 bg-transparent">
                <Smartphone className="mr-2 h-5 w-5" />
                Sell Your Items
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">EcoWear</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing fashion through sustainable marketplace and AI
                technology for a greener planet.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/products?category=women"
                    className="hover:text-white transition-colors">
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=men"
                    className="hover:text-white transition-colors">
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=accessories"
                    className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=shoes"
                    className="hover:text-white transition-colors">
                    Shoes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sustainability"
                    className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 EcoWear. All rights reserved. Built with 💚 for
              sustainable fashion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
