"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Leaf, X, Plus, Minus, ShoppingCart, Tag, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  // Mock cart data - replace with actual cart data
  const mockCartItems = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      size: "M",
      condition: "Like New",
      points: 250,
      originalPoints: 400,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      seller: "Sarah Chen",
      inStock: true,
      ecoScore: 95,
      carbonSaved: "2.5kg CO2",
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      size: "S",
      condition: "Excellent",
      points: 180,
      originalPoints: 300,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      seller: "Emma Wilson",
      inStock: true,
      ecoScore: 92,
      carbonSaved: "1.8kg CO2",
    },
  ]

  useEffect(() => {
    // Simulate loading cart data
    setTimeout(() => {
      setCartItems(mockCartItems)
      setLoading(false)
    }, 1000)
  }, [])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toLowerCase() === "eco10") {
      setDiscount(10) // 10% discount
      alert("Promo code 'ECO10' applied! You get 10% off your points total.")
    } else if (promoCode.toLowerCase() === "green20") {
      setDiscount(20) // 20% discount
      alert("Promo code 'GREEN20' applied! You get 20% off your points total.")
    } else {
      alert("Invalid promo code. Try 'ECO10' or 'GREEN20'.")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.points * item.quantity, 0)
  const discountAmount = (subtotal * discount) / 100
  const deliveryCharges = subtotal > 300 ? 0 : 50 // Example: Free delivery over 300 points, otherwise 50 points
  const total = subtotal - discountAmount + deliveryCharges

  const totalCarbonSaved = cartItems.reduce((sum, item) => {
    const carbonValue = Number.parseFloat(item.carbonSaved.replace("kg CO2", ""))
    return sum + carbonValue * item.quantity
  }, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your eco-cart...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/products" className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoWear
              </span>
            </Link>
            <div className="w-24" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Eco-Cart</h1>
          <p className="text-gray-600">Review your sustainable selections before exchange</p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-4">Start adding some amazing sustainable fashion finds!</p>
              <Link href="/products">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Shop Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                          <X className="h-4 w-4 text-gray-500" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {item.brand} • Size {item.size} • {item.condition}
                      </p>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold text-green-600">{item.points} Points</span>
                        <span className="text-sm text-gray-500 line-through">{item.originalPoints} Points</span>
                        <Badge variant="outline" className="text-xs">
                          {Math.round(((item.originalPoints - item.points) / item.originalPoints) * 100)}% OFF
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                        {!item.inStock && (
                          <Badge variant="destructive" className="ml-4">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Promo Code */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Apply Promo Code
                  </h3>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={applyPromoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {discount}% discount applied!
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Environmental Impact Summary */}
              <Card className="border-0 bg-green-50/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Your Environmental Impact
                  </h3>
                  <p className="text-green-700 text-sm mb-2">
                    By choosing these pre-loved items, you're making a real difference!
                  </p>
                  <div className="flex items-center justify-between text-lg font-bold text-green-800">
                    <span>Total CO2 Saved:</span>
                    <span>{totalCarbonSaved.toFixed(1)}kg CO2</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    This is equivalent to planting {Math.floor(totalCarbonSaved / 20)} trees!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Order Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                      <span className="font-medium">{subtotal} Points</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span className="font-medium">Discount ({discount}%)</span>
                        <span className="font-medium">- {discountAmount} Points</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery Charges</span>
                      <span className="font-medium">
                        {deliveryCharges === 0 ? "FREE" : `${deliveryCharges} Points`}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-green-600">{total} Points</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    size="lg"
                  >
                    <Link href="/checkout">Proceed to Exchange</Link>
                  </Button>
                  <p className="text-xs text-gray-500 text-center">You're one step closer to a greener wardrobe!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
