"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Separator from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  Leaf,
  ShoppingCart,
  Truck,
  CreditCard,
  MapPin,
  User,
  Phone,
  Mail,
  Coins,
  Sparkles,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CheckoutPage() {
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    phone: "",
    email: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("points")
  const [useSavedAddress, setUseSavedAddress] = useState(false)
  const [useSavedPayment, setUseSavedPayment] = useState(false)
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] = useState(true)
  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
  })
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  // Mock data
  const mockCartItems = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      size: "M",
      points: 250,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      carbonSaved: "2.5kg CO2",
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      size: "S",
      points: 180,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      carbonSaved: "1.8kg CO2",
    },
  ]

  const mockSavedAddress = {
    fullName: "John Doe",
    addressLine1: "123 Eco Street",
    addressLine2: "Apt 4B",
    city: "Greenville",
    state: "GA",
    zipCode: "30303",
    country: "India",
    phone: "+91 9876543210",
    email: "john.doe@example.com",
  }

  const mockSavedCard = {
    cardNumber: "•••• •••• •••• 1234",
    cardName: "John Doe",
    expiryDate: "12/25",
    cvv: "•••",
  }

  useEffect(() => {
    // Simulate loading cart and user data
    setTimeout(() => {
      setCartItems(mockCartItems)
      setLoading(false)
      // Pre-fill if saved address is available
      if (useSavedAddress) {
        setShippingAddress(mockSavedAddress)
      }
      if (useSavedPayment) {
        setCardDetails(mockSavedCard)
      }
    }, 1000)
  }, [useSavedAddress, useSavedPayment])

  const subtotal = cartItems.reduce((sum, item) => sum + item.points * item.quantity, 0)
  const deliveryCharges = subtotal > 300 ? 0 : 50 // Example: Free delivery over 300 points, otherwise 50 points
  const totalPoints = subtotal + deliveryCharges

  const handlePlaceOrder = () => {
    // Simulate order placement
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Exchange placed successfully! Redirecting to success page.")
      window.location.href = "/order-success"
    }, 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Preparing your eco-exchange...</p>
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
            <Link href="/cart" className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Cart</span>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Exchange</h1>
          <p className="text-gray-600">Just a few more steps to a greener wardrobe!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping & Payment Details */}
          <div className="space-y-8">
            {/* Shipping Address */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Shipping Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="useSavedAddress"
                    checked={useSavedAddress}
                    onCheckedChange={(checked) => {
                      setUseSavedAddress(checked as boolean)
                      if (checked) setShippingAddress(mockSavedAddress)
                      else
                        setShippingAddress({
                          fullName: "",
                          addressLine1: "",
                          addressLine2: "",
                          city: "",
                          state: "",
                          zipCode: "",
                          country: "India",
                          phone: "",
                          email: "",
                        })
                    }}
                  />
                  <Label htmlFor="useSavedAddress">Use saved address</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullName"
                        value={shippingAddress.fullName}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, fullName: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={shippingAddress.email}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressLine1">Address Line 1</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="addressLine1"
                      value={shippingAddress.addressLine1}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine1: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                  <Input
                    id="addressLine2"
                    value={shippingAddress.addressLine2}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine2: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={shippingAddress.city}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={shippingAddress.state}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      id="zipCode"
                      value={shippingAddress.zipCode}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" value={shippingAddress.country} disabled />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Method</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="points" id="points" />
                    <Label htmlFor="points" className="flex items-center space-x-2">
                      <Coins className="h-5 w-5 text-green-600" />
                      <span>Eco Points (Current Balance: 1250)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <span>Credit/Debit Card</span>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="useSavedPayment"
                        checked={useSavedPayment}
                        onCheckedChange={(checked) => {
                          setUseSavedPayment(checked as boolean)
                          if (checked) setCardDetails(mockSavedCard)
                          else
                            setCardDetails({
                              cardNumber: "",
                              cardName: "",
                              expiryDate: "",
                              cvv: "",
                            })
                        }}
                      />
                      <Label htmlFor="useSavedPayment">Use saved card</Label>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                        placeholder="•••• •••• •••• ••••"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        value={cardDetails.cardName}
                        onChange={(e) => setCardDetails({ ...cardDetails, cardName: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          value={cardDetails.expiryDate}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          placeholder="•••"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="billingAddressSameAsShipping"
                    checked={billingAddressSameAsShipping}
                    onCheckedChange={(checked) => setBillingAddressSameAsShipping(checked as boolean)}
                  />
                  <Label htmlFor="billingAddressSameAsShipping">Billing address same as shipping</Label>
                </div>

                {!billingAddressSameAsShipping && (
                  <div className="space-y-4 mt-4">
                    <h3 className="font-semibold text-gray-900">Billing Address</h3>
                    <div className="space-y-2">
                      <Label htmlFor="billingFullName">Full Name</Label>
                      <Input
                        id="billingFullName"
                        value={billingAddress.fullName}
                        onChange={(e) => setBillingAddress({ ...billingAddress, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingAddressLine1">Address Line 1</Label>
                      <Input
                        id="billingAddressLine1"
                        value={billingAddress.addressLine1}
                        onChange={(e) => setBillingAddress({ ...billingAddress, addressLine1: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingAddressLine2">Address Line 2 (Optional)</Label>
                      <Input
                        id="billingAddressLine2"
                        value={billingAddress.addressLine2}
                        onChange={(e) => setBillingAddress({ ...billingAddress, addressLine2: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billingCity">City</Label>
                        <Input
                          id="billingCity"
                          value={billingAddress.city}
                          onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingState">State</Label>
                        <Input
                          id="billingState"
                          value={billingAddress.state}
                          onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billingZipCode">Zip Code</Label>
                        <Input
                          id="billingZipCode"
                          value={billingAddress.zipCode}
                          onChange={(e) => setBillingAddress({ ...billingAddress, zipCode: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingCountry">Country</Label>
                      <Input id="billingCountry" value={billingAddress.country} disabled />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Order Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">
                          {item.brand} • {item.size} • Qty: {item.quantity}
                        </p>
                        <p className="text-sm text-green-600">{item.points} Points</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">{subtotal} Points</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Charges</span>
                    <span className="font-medium">{deliveryCharges === 0 ? "FREE" : `${deliveryCharges} Points`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Points</span>
                    <span className="text-green-600">{totalPoints} Points</span>
                  </div>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  size="lg"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Sparkles className="h-5 w-5 mr-2" />
                  )}
                  Place Exchange
                </Button>
                <p className="text-xs text-gray-500 text-center flex items-center justify-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Secure & Eco-Friendly Exchange
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
