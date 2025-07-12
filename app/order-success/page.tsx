"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  const [orderDetails, setOrderDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock order data - replace with actual order data from URL params or API
  const mockOrderDetails = {
    orderId: "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    item: {
      title: "Designer Denim Jacket",
      brand: "Levi's",
      size: "M",
      price: 2499,
      image: "/placeholder.svg?height=100&width=100",
    },
    seller: {
      name: "Sarah Chen",
      rating: 4.9,
      location: "Mumbai, India",
    },
    shipping: {
      address: "123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001",
      estimatedDelivery: "3-5 business days",
      trackingId: "TRK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    },
    payment: {
      method: "Razorpay",
      amount: 2499,
      status: "completed",
    },
    orderDate: new Date().toISOString(),
  }

  useEffect(() => {
    // Simulate loading order details
    setTimeout(() => {
      setOrderDetails(mockOrderDetails)
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your exchange...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Exchange Successful! 🌱</h1>
          <p className="text-gray-600 mb-6">
            Your sustainable fashion exchange has been successfully placed. You've made a positive impact!
          </p>
          <div className="space-y-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                View My Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full border-green-200 hover:bg-green-50 bg-transparent">
                Continue Shopping
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="ghost" className="w-full text-green-600 hover:bg-green-50">
                Back to Homepage
                <Home className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
