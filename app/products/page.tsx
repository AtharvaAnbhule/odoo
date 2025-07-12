"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Heart,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Eye,
  Leaf,
  ArrowLeft,
  ShoppingCart,
  Camera,
  Wind,
  Droplets,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCondition, setSelectedCondition] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState("grid")
  const [loading, setLoading] = useState(true)

  // Mock data - replace with API call
  const mockProducts = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      points: 250,
      originalPoints: 400,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Like New",
      size: "M",
      likes: 24,
      views: 156,
      category: "Outerwear",
      seller: "Sarah Chen",
      rating: 4.8,
      description: "Classic denim jacket made from organic cotton, in excellent condition.",
      ecoScore: 95,
      carbonSaved: "2.5kg CO2",
      waterSaved: "450L",
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      points: 180,
      originalPoints: 300,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Excellent",
      size: "S",
      likes: 18,
      views: 89,
      category: "Dresses",
      seller: "Emma Wilson",
      rating: 4.9,
      description: "Beautiful vintage silk dress made with sustainable practices.",
      ecoScore: 92,
      carbonSaved: "1.8kg CO2",
      waterSaved: "300L",
    },
    {
      id: 3,
      title: "Recycled Material Boots",
      brand: "EcoStep",
      points: 320,
      originalPoints: 500,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Good",
      size: "9",
      likes: 31,
      views: 203,
      category: "Shoes",
      seller: "Mike Johnson",
      rating: 4.7,
      description: "High-quality boots made from recycled materials.",
      ecoScore: 88,
      carbonSaved: "3.2kg CO2",
      waterSaved: "600L",
    },
    {
      id: 4,
      title: "Bamboo Fiber Sweater",
      brand: "Natural Wear",
      points: 160,
      originalPoints: 280,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Like New",
      size: "L",
      likes: 15,
      views: 67,
      category: "Tops",
      seller: "Lisa Brown",
      rating: 4.6,
      description: "Soft cashmere sweater made from sustainable bamboo fiber.",
      ecoScore: 96,
      carbonSaved: "2.1kg CO2",
      waterSaved: "350L",
    },
    {
      id: 5,
      title: "Upcycled Designer Handbag",
      brand: "ReFashion",
      points: 499,
      originalPoints: 899,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Excellent",
      size: "One Size",
      likes: 42,
      views: 298,
      category: "Accessories",
      seller: "Anna Davis",
      rating: 4.9,
      description: "Authentic designer handbag, beautifully upcycled.",
      ecoScore: 90,
      carbonSaved: "1.5kg CO2",
      waterSaved: "200L",
    },
    {
      id: 6,
      title: "Linen Formal Blazer",
      brand: "EcoChic",
      points: 219,
      originalPoints: 399,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Good",
      size: "M",
      likes: 19,
      views: 134,
      category: "Formal",
      seller: "John Smith",
      rating: 4.5,
      description: "Professional blazer made from breathable linen.",
      ecoScore: 85,
      carbonSaved: "1.2kg CO2",
      waterSaved: "180L",
    },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = products

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category.toLowerCase() === selectedCategory)
    }

    // Condition filter
    if (selectedCondition !== "all") {
      filtered = filtered.filter((product) => product.condition.toLowerCase().replace(" ", "-") === selectedCondition)
    }

    // Price filter (using points)
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered.filter((product) => {
        if (max) {
          return product.points >= min && product.points <= max
        } else {
          return product.points >= min
        }
      })
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.points - b.points)
        break
      case "price-high":
        filtered.sort((a, b) => b.points - a.points)
        break
      case "popular":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case "newest":
      default:
        filtered.sort((a, b) => b.id - a.id)
        break
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory, selectedCondition, priceRange, sortBy])

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "outerwear", label: "Outerwear" },
    { value: "dresses", label: "Dresses" },
    { value: "tops", label: "Tops" },
    { value: "bottoms", label: "Bottoms" },
    { value: "shoes", label: "Shoes" },
    { value: "accessories", label: "Accessories" },
    { value: "formal", label: "Formal" },
  ]

  const conditions = [
    { value: "all", label: "All Conditions" },
    { value: "like-new", label: "Like New" },
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
  ]

  const priceRanges = [
    { value: "all", label: "All Points" },
    { value: "0-100", label: "Under 100 Points" },
    { value: "100-250", label: "100 - 250 Points" },
    { value: "250-500", label: "250 - 500 Points" },
    { value: "500", label: "Above 500 Points" },
  ]

  const handleARTryOn = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const arWindow = window.open("", "_blank", "width=800,height=600")
          arWindow.document.write(`
            <html>
              <head>
                <title>AR Try-On - EcoWear</title>
                <style>
                  body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background: linear-gradient(135deg, #10b981, #059669); }
                  .ar-container { background: white; border-radius: 12px; padding: 20px; text-align: center; }
                  video { width: 100%; max-width: 400px; border-radius: 8px; }
                  .controls { margin-top: 20px; }
                  button { background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; padding: 10px 20px; border-radius: 6px; margin: 5px; cursor: pointer; }
                </style>
              </head>
              <body>
                <div class="ar-container">
                  <h2>🌱 AR Try-On - Eco-Friendly Item</h2>
                  <video id="video" autoplay></video>
                  <div class="controls">
                    <button onclick="capturePhoto()">📸 Capture</button>
                    <button onclick="window.close()">✅ Done</button>
                  </div>
                  <p>Move around to see how the item looks on you!</p>
                </div>
                <script>
                  navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => {
                      document.getElementById('video').srcObject = stream;
                    });
                  
                  function capturePhoto() {
                    alert('Photo captured! This would save to your gallery in a real implementation.');
                  }
                </script>
              </body>
            </html>
          `)
        })
        .catch((err) => {
          alert("Camera access required for AR try-on feature.")
        })
    } else {
      alert("AR try-on not supported on this device.")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading amazing fashion finds...</p>
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
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoWear
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Sustainable Fashion</h1>
          <p className="text-gray-600">Find your next favorite eco-friendly piece from our curated collection</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </h3>

                {/* Search */}
                <div className="space-y-2 mb-6">
                  <Label>Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2 mb-6">
                  <Label>Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Condition */}
                <div className="space-y-2 mb-6">
                  <Label>Condition</Label>
                  <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition.value} value={condition.value}>
                          {condition.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <Label>Points Range</Label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{filteredProducts.length} sustainable products found</span>
              </div>
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Points: Low to High</SelectItem>
                    <SelectItem value="price-high">Points: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No sustainable products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                }`}
              >
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                      <div
                        className={`relative overflow-hidden ${
                          viewMode === "list" ? "w-48 h-48" : "aspect-square"
                        } ${viewMode === "grid" ? "rounded-t-lg" : "rounded-l-lg"}`}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-2 left-2 bg-green-500 text-white">{product.condition}</Badge>
                        <div className="absolute top-2 right-2 flex flex-col space-y-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-white/80 backdrop-blur-sm hover:bg-white p-2 h-auto"
                            onClick={handleARTryOn}
                          >
                            <Camera className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-white/80 backdrop-blur-sm hover:bg-white p-2 h-auto"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 left-2 flex space-x-1">
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                            <Leaf className="h-3 w-3 mr-1" />
                            {product.ecoScore}% Eco
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            {product.views}
                          </Badge>
                        </div>
                      </div>
                      <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{product.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {product.brand} • Size {product.size}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{product.rating}</span>
                          </div>
                        </div>

                        {viewMode === "list" && (
                          <>
                            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                              <Wind className="h-4 w-4 text-green-600" />
                              <span>Saves {product.carbonSaved}</span>
                              <Droplets className="h-4 w-4 text-blue-600 ml-2" />
                              <span>Saves {product.waterSaved}</span>
                            </div>
                          </>
                        )}

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-green-600">{product.points} Points</span>
                            <span className="text-sm text-gray-500 line-through">{product.originalPoints} Points</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {Math.round(((product.originalPoints - product.points) / product.originalPoints) * 100)}%
                            OFF
                          </Badge>
                        </div>

                        <div className="flex space-x-2">
                          <Link href={`/products/${product.id}`} className="flex-1">
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                            >
                              View Details
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
