"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import {
  Heart,
  Share2,
  MessageCircle,
  Star,
  MapPin,
  Shield,
  ArrowLeft,
  Leaf,
  Camera,
  ShoppingCart,
  Plus,
  Minus,
  Truck,
  CreditCard,
  Eye,
  Sparkles,
  TreePine,
  Wind,
  Droplets,
  Check,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [recommendations, setRecommendations] = useState([])

  // Mock product data with eco-friendly features
  const mockProduct = {
    id: Number.parseInt(params.id),
    title: "Eco-Friendly Denim Jacket",
    description:
      "Beautiful sustainable denim jacket made from 100% organic cotton. This eco-conscious piece features a timeless design with recycled hardware and a comfortable fit. Perfect for adding an environmentally-friendly touch to any outfit. The denim is soft, well-maintained, and produced using water-saving techniques. Originally from a certified sustainable brand, this jacket represents the future of fashion.",
    category: "Outerwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSize: "M",
    condition: "Like New",
    brand: "EcoFashion Co.",
    color: "Sustainable Blue",
    material: "100% Organic Cotton Denim",
    points: 250,
    originalPoints: 400,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    tags: ["sustainable", "organic", "eco-friendly", "denim", "jacket", "blue", "classic"],
    ecoScore: 95,
    carbonSaved: "2.5kg CO2",
    waterSaved: "450L",
    sustainabilityFeatures: [
      "Made from 100% organic cotton",
      "Water-saving production process",
      "Recycled metal hardware",
      "Carbon-neutral shipping",
      "Biodegradable packaging",
    ],
    seller: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      totalSales: 47,
      joinDate: "2023-06-15",
      location: "Mumbai, India",
      responseTime: "Usually responds within 2 hours",
      verified: true,
      ecoRating: 4.8,
      carbonSaved: "125kg CO2",
    },
    stats: {
      views: 156,
      likes: 34,
      watchers: 12,
    },
    shipping: {
      freeShipping: true,
      estimatedDays: "3-5 business days",
      returnPolicy: "30-day return policy",
      carbonNeutral: true,
    },
    reviews: [
      {
        id: 1,
        user: "Priya Sharma",
        rating: 5,
        comment: "Amazing sustainable quality! Exactly as described. Love supporting eco-friendly fashion.",
        date: "2024-01-10",
        verified: true,
        ecoRating: 5,
      },
      {
        id: 2,
        user: "Rahul Kumar",
        rating: 4,
        comment: "Good condition and great eco-credentials. Happy to contribute to sustainable fashion.",
        date: "2024-01-08",
        verified: true,
        ecoRating: 4,
      },
    ],
  }

  // AI-powered recommendations
  const mockRecommendations = [
    {
      id: 2,
      title: "Organic Cotton T-Shirt",
      image: "/placeholder.svg?height=200&width=200",
      points: 120,
      originalPoints: 200,
      condition: "Excellent",
      ecoScore: 93,
      reason: "Similar sustainable materials",
    },
    {
      id: 3,
      title: "Recycled Denim Skirt",
      image: "/placeholder.svg?height=200&width=200",
      points: 180,
      originalPoints: 300,
      condition: "Like New",
      ecoScore: 91,
      reason: "Matches your style preferences",
    },
    {
      id: 4,
      title: "Hemp Fiber Cardigan",
      image: "/placeholder.svg?height=200&width=200",
      points: 220,
      originalPoints: 350,
      condition: "Good",
      ecoScore: 89,
      reason: "Complements this jacket",
    },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(mockProduct)
      setSelectedSize(mockProduct.availableSize)
      setRecommendations(mockRecommendations)
      setLoading(false)
    }, 1000)
  }, [params.id])

  const handleARTryOn = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          // Create enhanced AR try-on interface
          const arWindow = window.open("", "_blank", "width=900,height=700")
          arWindow.document.write(`
            <html>
              <head>
                <title>AR Try-On - ${product.title}</title>
                <style>
                  body { 
                    margin: 0; 
                    padding: 20px; 
                    font-family: Arial, sans-serif; 
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                  }
                  .ar-container { 
                    background: rgba(255,255,255,0.95); 
                    border-radius: 16px; 
                    padding: 30px; 
                    text-align: center;
                    color: #1f2937;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                  }
                  video { 
                    width: 100%; 
                    max-width: 500px; 
                    border-radius: 12px; 
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                  }
                  .controls { 
                    margin-top: 20px; 
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    flex-wrap: wrap;
                  }
                  button { 
                    background: linear-gradient(135deg, #10b981, #059669); 
                    color: white; 
                    border: none; 
                    padding: 12px 24px; 
                    border-radius: 8px; 
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s;
                  }
                  button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
                  }
                  .eco-badge {
                    background: #d1fae5;
                    color: #065f46;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    margin: 10px 5px;
                    display: inline-block;
                  }
                  .ar-overlay {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: rgba(16, 185, 129, 0.9);
                    color: white;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 14px;
                  }
                </style>
              </head>
              <body>
                <div class="ar-container">
                  <h2>🌱 AR Try-On - ${product.title}</h2>
                  <div class="eco-badge">Eco Score: ${product.ecoScore}%</div>
                  <div class="eco-badge">Saves: ${product.carbonSaved}</div>
                  <div style="position: relative; display: inline-block;">
                    <video id="video" autoplay></video>
                    <div class="ar-overlay">AR Active 📱</div>
                  </div>
                  <div class="controls">
                    <button onclick="capturePhoto()">📸 Capture Look</button>
                    <button onclick="sharePhoto()">📤 Share</button>
                    <button onclick="addToWishlist()">💚 Add to Wishlist</button>
                    <button onclick="window.close()">✅ Done</button>
                  </div>
                  <p style="margin-top: 20px; color: #6b7280;">Move around to see how this sustainable piece looks on you!</p>
                  <div style="margin-top: 15px;">
                    <strong>🌍 Environmental Impact:</strong><br>
                    By choosing this item, you're saving ${product.carbonSaved} and ${product.waterSaved} of water!
                  </div>
                </div>
                <script>
                  navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => {
                      document.getElementById('video').srcObject = stream;
                    });
                  
                  function capturePhoto() {
                    alert('📸 Eco-look captured! This would save to your sustainable fashion gallery.');
                  }
                  
                  function sharePhoto() {
                    alert('📤 Sharing your sustainable style! #EcoFashion #SustainableStyle');
                  }
                  
                  function addToWishlist() {
                    alert('💚 Added to your eco-wishlist! You\'ll earn bonus points for sustainable choices.');
                  }
                </script>
              </body>
            </html>
          `)
        })
        .catch((err) => {
          alert(
            "Camera access required for AR try-on feature. Enable camera permissions to virtually try sustainable fashion!",
          )
        })
    } else {
      alert("AR try-on not supported on this device. Try on desktop or mobile with camera support.")
    }
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", { productId: product.id, quantity, size: selectedSize })
    alert(`Added ${product.title} to your eco-cart! 🌱 You'll save ${product.carbonSaved} with this purchase.`)
  }

  const handleBuyNow = () => {
    window.location.href = `/checkout?productId=${product.id}&quantity=${quantity}&size=${selectedSize}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading sustainable product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product not found</h2>
          <p className="text-gray-600 mb-4">The sustainable product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/products" className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Products</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoWear
              </span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsWishlisted(!isWishlisted)}>
                <Heart className={`h-4 w-4 ${isWishlisted ? "text-red-500 fill-current" : ""}`} />
              </Button>
              <Link href="/cart">
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-xl bg-white shadow-lg">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/80 backdrop-blur-sm hover:bg-white"
                  onClick={handleARTryOn}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  AR Try-On
                </Button>
                <Badge className="bg-green-100 text-green-800">
                  <Leaf className="h-3 w-3 mr-1" />
                  {product.ecoScore}% Eco
                </Badge>
                <Badge className="bg-white/80 backdrop-blur-sm text-gray-700">
                  <Eye className="h-3 w-3 mr-1" />
                  {product.stats.views}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <Badge className="bg-green-600 text-white">
                  <Wind className="h-3 w-3 mr-1" />-{product.carbonSaved}
                </Badge>
                <Badge className="bg-blue-600 text-white">
                  <Droplets className="h-3 w-3 mr-1" />-{product.waterSaved}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? "border-green-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-green-100 text-green-800">{product.condition}</Badge>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {product.stats.views} views
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {product.stats.likes} likes
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <span>{product.brand}</span>
                <span>•</span>
                <span>{product.color}</span>
                <span>•</span>
                <span>{product.material}</span>
              </div>

              {/* Eco Score */}
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-green-800">Sustainability Score</h3>
                  <Badge className="bg-green-600 text-white text-lg px-3 py-1">{product.ecoScore}%</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-green-700">
                    <Wind className="h-4 w-4 mr-2" />
                    <span>Saves {product.carbonSaved}</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Droplets className="h-4 w-4 mr-2" />
                    <span>Saves {product.waterSaved}</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-green-600">{product.points} Points</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPoints} Points</span>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {Math.round(((product.originalPoints - product.points) / product.originalPoints) * 100)}% OFF
                </Badge>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-green-100 text-green-800">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Size</Label>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    disabled={size !== product.availableSize}
                    className={`${selectedSize === size ? "bg-green-600 hover:bg-green-700" : ""} ${size === product.availableSize ? "" : "opacity-50"}`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-600">Available in size: {product.availableSize}</p>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Quantity</Label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleAddToCart}
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  onClick={handleBuyNow}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Exchange for {product.points} Points
                </Button>
              </div>
              <Button size="lg" variant="outline" className="w-full bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Seller
              </Button>
            </div>

            {/* Sustainability Features */}
            <Card className="border-0 bg-green-50/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                  <TreePine className="h-5 w-5 mr-2" />
                  Sustainability Features
                </h3>
                <ul className="space-y-2">
                  {product.sustainabilityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-green-700">
                      <Sparkles className="h-3 w-3 mr-2 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Carbon-Neutral Shipping</p>
                      <p className="text-sm text-gray-600">{product.shipping.estimatedDays}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Eco-Friendly Packaging</p>
                      <p className="text-sm text-gray-600">100% recyclable materials</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">{product.shipping.returnPolicy}</p>
                      <p className="text-sm text-gray-600">Easy returns & exchanges</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={product.seller.avatar || "/placeholder.svg"} />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{product.seller.name}</h3>
                        {product.seller.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">Eco Verified</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span>{product.seller.rating}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center">
                          <Leaf className="h-4 w-4 text-green-500 mr-1" />
                          <span>{product.seller.ecoRating} eco-rating</span>
                        </div>
                        <span>•</span>
                        <span>{product.seller.totalSales} sales</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{product.seller.location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Wind className="h-4 w-4 mr-1 text-green-500" />
                      <span>{product.seller.carbonSaved} saved</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Category</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Brand</p>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Material</p>
                      <p className="text-sm text-gray-600">{product.material}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Condition</p>
                      <p className="text-sm text-gray-600">{product.condition}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sustainability" className="mt-6">
              <Card className="border-0 bg-green-50/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center">
                    <TreePine className="h-5 w-5 mr-2" />
                    Detailed Sustainability Information
                  </h3>
                  <p className="text-green-700 leading-relaxed mb-6">
                    This item is a testament to sustainable fashion. Here's a breakdown of its environmental impact and
                    eco-friendly features:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
                      <Wind className="h-6 w-6 text-green-700" />
                      <div>
                        <p className="font-medium text-green-800">Carbon Footprint Saved</p>
                        <p className="text-lg font-bold text-green-900">{product.carbonSaved}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-100 rounded-lg">
                      <Droplets className="h-6 w-6 text-blue-700" />
                      <div>
                        <p className="font-medium text-blue-800">Water Saved</p>
                        <p className="text-lg font-bold text-blue-900">{product.waterSaved}</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-green-800 mb-3">Key Eco-Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {product.sustainabilityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-green-700">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-green-700">
                    By choosing this item, you're actively contributing to a more sustainable future and reducing your
                    environmental impact. Thank you for being an EcoWear champion!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-900">{review.user}</h4>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">Verified Purchase</Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{new Date(review.date).toLocaleDateString()}</span>
                          {review.ecoRating && (
                            <>
                              <span>•</span>
                              <span className="flex items-center text-green-600">
                                <Leaf className="h-3 w-3 mr-1" />
                                {review.ecoRating} Eco-Rating
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Shipping Information</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">• Free shipping on all orders</p>
                        <p className="text-gray-600">• Estimated delivery: {product.shipping.estimatedDays}</p>
                        <p className="text-gray-600">• Carbon-neutral delivery</p>
                        <p className="text-gray-600">• Secure, eco-friendly packaging guaranteed</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Return Policy</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">• {product.shipping.returnPolicy}</p>
                        <p className="text-gray-600">• Items must be in original condition</p>
                        <p className="text-gray-600">• Free return shipping for sustainable choices</p>
                        <p className="text-gray-600">• Refund processed within 5-7 business days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* AI Product Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-green-600" />
            AI-Powered Eco Recommendations
          </h2>
          <p className="text-gray-600 mb-6">
            Based on your preferences and this item, here are some other sustainable pieces you might love:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((recProduct) => (
              <Card
                key={recProduct.id}
                className="border-0 bg-white/80 backdrop-blur-sm group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={recProduct.image || "/placeholder.svg"}
                      alt={recProduct.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white">{recProduct.condition}</Badge>
                    <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs">
                      <Leaf className="h-3 w-3 mr-1" />
                      {recProduct.ecoScore}% Eco
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{recProduct.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{recProduct.reason}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-green-600">{recProduct.points} Points</span>
                        <span className="text-sm text-gray-500 line-through">{recProduct.originalPoints} Points</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {Math.round(
                          ((recProduct.originalPoints - recProduct.points) / recProduct.originalPoints) * 100,
                        )}
                        % OFF
                      </Badge>
                    </div>
                    <Link href={`/products/${recProduct.id}`}>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
