"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  Leaf,
  User,
  ShoppingBag,
  MessageCircle,
  Heart,
  Star,
  Package,
  Clock,
  Award,
  Wind,
  Droplets,
  TreePine,
  Recycle,
  MapPin,
  ShoppingCart,
  Eye,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Separator from "@/components/ui/separator"

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const mockUser = {
    name: "John Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    joinDate: "2023-06-15",
    location: "Mumbai, India",
    points: 1250,
    level: "Eco Champion",
    ecoScore: 92,
    rating: 4.8,
    totalExchanges: 45,
    carbonSaved: "125.5kg CO2",
    waterSaved: "2,340L",
    treesPlanted: 12,
    achievements: [
      { id: 1, name: "First Exchange", icon: "♻️", description: "Completed your first sustainable exchange" },
      { id: 2, name: "Eco Explorer", icon: "🌍", description: "Explored 10+ eco-friendly categories" },
      { id: 3, name: "Carbon Saver", icon: "💨", description: "Saved over 50kg of CO2 emissions" },
    ],
  }

  // Mock recent activity
  const mockRecentActivity = [
    {
      id: 1,
      type: "exchange",
      description: "Exchanged 'Organic Cotton Dress'",
      date: "2024-01-20",
      points: -180,
      itemImage: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      type: "listing",
      description: "Listed 'Eco-Friendly Denim Jacket'",
      date: "2024-01-18",
      points: 0,
      itemImage: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      type: "points",
      description: "Earned 50 points for 'Eco Explorer' achievement",
      date: "2024-01-17",
      points: 50,
      itemImage: null,
    },
    {
      id: 4,
      type: "message",
      description: "New message from Sarah Chen",
      date: "2024-01-16",
      points: 0,
      itemImage: null,
    },
  ]

  // Mock listings
  const mockListings = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      status: "active",
      points: 250,
      views: 156,
      likes: 24,
      image: "/placeholder.svg?height=100&width=100",
      condition: "Like New",
      ecoScore: 95,
    },
    {
      id: 2,
      title: "Bamboo Fiber Sweater",
      status: "pending",
      points: 160,
      views: 67,
      likes: 15,
      image: "/placeholder.svg?height=100&width=100",
      condition: "Like New",
      ecoScore: 96,
    },
    {
      id: 3,
      title: "Upcycled Designer Handbag",
      status: "sold",
      points: 499,
      views: 298,
      likes: 42,
      image: "/placeholder.svg?height=100&width=100",
      condition: "Excellent",
      ecoScore: 90,
    },
  ]

  // Mock exchanges
  const mockExchanges = [
    {
      id: 1,
      item: "Organic Cotton Dress",
      seller: "Emma Wilson",
      points: 180,
      date: "2024-01-20",
      status: "completed",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      item: "Recycled Material Boots",
      seller: "Mike Johnson",
      points: 320,
      date: "2024-01-10",
      status: "shipped",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your eco-dashboard...</p>
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
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoWear
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/messages">
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <Link href="/settings">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
              <Link href="/sell">
                <Button
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  size="sm"
                >
                  List Item
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {mockUser.name}!</h1>
            <p className="text-gray-600">Your sustainable fashion journey at a glance</p>
          </div>
          <Link href="/settings">
            <Button variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
              Edit Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* User Stats & Eco Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={mockUser.avatar || "/placeholder.svg"} />
                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold text-gray-900">{mockUser.name}</h2>
              <Badge className="bg-green-100 text-green-800 mt-2">{mockUser.level}</Badge>
              <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm mt-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>{mockUser.rating} Rating</span>
                <span>•</span>
                <span>{mockUser.totalExchanges} Exchanges</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm mt-1">
                <MapPin className="h-4 w-4" />
                <span>{mockUser.location}</span>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Eco Score</span>
                  <span className="font-semibold">{mockUser.ecoScore}%</span>
                </div>
                <Progress value={mockUser.ecoScore} className="h-2 bg-green-200" />
                <div className="flex justify-between text-sm mt-4">
                  <span className="text-gray-600">Eco Points</span>
                  <span className="font-bold text-green-600 text-xl">{mockUser.points}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TreePine className="h-5 w-5" />
                <span>Your Environmental Impact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Wind className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{mockUser.carbonSaved}</div>
                <div className="text-sm text-gray-600">CO2 Saved</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{mockUser.waterSaved}</div>
                <div className="text-sm text-gray-600">Water Saved</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <Recycle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-600">{mockUser.totalExchanges}</div>
                <div className="text-sm text-gray-600">Items Recycled</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Dashboard Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="listings" className="flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4" />
              <span>My Listings</span>
            </TabsTrigger>
            <TabsTrigger value="exchanges" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>My Exchanges</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Achievements</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRecentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3">
                        {activity.itemImage && (
                          <Image
                            src={activity.itemImage || "/placeholder.svg"}
                            alt="Item"
                            width={40}
                            height={40}
                            className="rounded-md object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.description}</p>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                        {activity.points !== 0 && (
                          <Badge
                            className={activity.points > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                          >
                            {activity.points > 0 ? "+" : ""}
                            {activity.points} Points
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/products">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                      >
                        <ShoppingBag className="h-6 w-6" />
                        <span className="text-sm">Shop Items</span>
                      </Button>
                    </Link>
                    <Link href="/sell">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                      >
                        <Package className="h-6 w-6" />
                        <span className="text-sm">List New Item</span>
                      </Button>
                    </Link>
                    <Link href="/messages">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                      >
                        <MessageCircle className="h-6 w-6" />
                        <span className="text-sm">My Messages</span>
                      </Button>
                    </Link>
                    <Link href="/cart">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                      >
                        <ShoppingCart className="h-6 w-6" />
                        <span className="text-sm">My Cart</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Sustainable Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockListings.map((item) => (
                <Card key={item.id} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-green-500 text-white">{item.condition}</Badge>
                      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs">
                        <Leaf className="h-3 w-3 mr-1" />
                        {item.ecoScore}% Eco
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">Status: {item.status}</p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-green-600">{item.points} Points</span>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {item.views}
                          </span>
                          <span className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {item.likes}
                          </span>
                        </div>
                      </div>
                      <Link href={`/item/${item.id}`}>
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
            <div className="text-center mt-6">
              <Link href="/add-item">
                <Button variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                  Add New Item
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* My Exchanges Tab */}
          <TabsContent value="exchanges" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Sustainable Exchanges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockExchanges.map((exchange) => (
                <Card key={exchange.id} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={exchange.image || "/placeholder.svg"}
                        alt={exchange.item}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{exchange.item}</h3>
                      <p className="text-sm text-gray-600 mb-1">Exchanged with: {exchange.seller}</p>
                      <p className="text-sm text-gray-600 mb-2">Date: {exchange.date}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">{exchange.points} Points</span>
                        <Badge className="bg-green-100 text-green-800">{exchange.status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/products">
                <Button variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                  Find More Items
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Eco Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUser.achievements.map((achievement) => (
                <Card key={achievement.id} className="border-0 bg-white/80 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.name}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/achievements">
                <Button variant="outline" className="border-green-200 hover:bg-green-50 bg-transparent">
                  View All Achievements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
