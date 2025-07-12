"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Leaf,
  User,
  Bell,
  Shield,
  CreditCard,
  Camera,
  Save,
  Trash2,
  Eye,
  EyeOff,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Coins,
  TreePine,
  Recycle,
  Wind,
  Droplets,
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)

  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    bio: "Eco-warrior and sustainable fashion enthusiast. Love finding unique pieces and giving them new life while protecting our planet! 🌱",
    location: "Mumbai, India",
    dateOfBirth: "1995-06-15",
    avatar: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=200&width=600",
    socialLinks: {
      instagram: "@johndoe_eco",
      twitter: "@johndoe_green",
      website: "johndoe-sustainable.com",
    },
    stats: {
      points: 1250,
      level: "Eco Champion",
      rating: 4.8,
      totalExchanges: 45,
      joinDate: "2023-06-15",
      carbonSaved: "125.5kg",
      treesPlanted: 12,
      waterSaved: "2,340L",
    },
    preferences: {
      sustainabilityGoals: "carbon-neutral",
      favoriteCategories: ["outerwear", "dresses", "accessories"],
      ecoScore: 92,
    },
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    newMessages: true,
    exchangeUpdates: true,
    pointsUpdates: true,
    weeklyDigest: true,
    ecoTips: true,
    sustainabilityAlerts: true,
    communityUpdates: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    showOnlineStatus: true,
    dataSharing: false,
    showEcoStats: true,
    shareAchievements: true,
  })

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
    loginAlerts: true,
    deviceTracking: true,
  })

  const [sustainabilitySettings, setSustainabilitySettings] = useState({
    carbonGoal: 500, // kg CO2 to save this year
    monthlyExchangeGoal: 5,
    ecoScoreTarget: 95,
    autoPlantTrees: true,
    offsetCarbon: true,
    sustainabilityReminders: true,
  })

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleProfileUpdate = async () => {
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      setSaving(false)
      alert("Profile updated successfully! 🌱")
    }, 2000)
  }

  const handleNotificationUpdate = async () => {
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      alert("Notification settings updated!")
    }, 1000)
  }

  const handlePrivacyUpdate = async () => {
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      alert("Privacy settings updated!")
    }, 1000)
  }

  const handleSecurityUpdate = async () => {
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setSecuritySettings({
        ...securitySettings,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      alert("Security settings updated!")
    }, 1000)
  }

  const handleSustainabilityUpdate = async () => {
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      alert("Sustainability goals updated! Keep making a difference! 🌍")
    }, 1000)
  }

  const handleDeleteAccount = () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone and will remove all your eco-achievements.",
      )
    ) {
      alert("Account deletion requested. You will receive an email with further instructions.")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading settings...</p>
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
            <Link href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and sustainability goals</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="flex items-center space-x-2">
              <TreePine className="h-4 w-4" />
              <span>Sustainability</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Stats */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Eco Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={profileData.avatar || "/placeholder.svg"} />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0 bg-green-600 hover:bg-green-700"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold text-gray-900 mt-2">
                      {profileData.firstName} {profileData.lastName}
                    </h3>
                    <Badge className="bg-green-100 text-green-800">{profileData.stats.level}</Badge>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Coins className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">Eco Points</span>
                      </div>
                      <span className="font-semibold text-green-600">{profileData.stats.points}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-gray-600">Rating</span>
                      </div>
                      <span className="font-semibold">{profileData.stats.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Recycle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">Exchanges</span>
                      </div>
                      <span className="font-semibold">{profileData.stats.totalExchanges}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Wind className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-gray-600">CO2 Saved</span>
                      </div>
                      <span className="font-semibold text-sm">{profileData.stats.carbonSaved}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TreePine className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">Trees Planted</span>
                      </div>
                      <span className="font-semibold">{profileData.stats.treesPlanted}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Eco Score</span>
                      <span>{profileData.preferences.ecoScore}%</span>
                    </div>
                    <Progress value={profileData.preferences.ecoScore} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Profile Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        placeholder="Tell us about your sustainability journey..."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sustainabilityGoals">Sustainability Goals</Label>
                      <Select
                        value={profileData.preferences.sustainabilityGoals}
                        onValueChange={(value) =>
                          setProfileData({
                            ...profileData,
                            preferences: { ...profileData.preferences, sustainabilityGoals: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="carbon-neutral">Carbon Neutral</SelectItem>
                          <SelectItem value="zero-waste">Zero Waste</SelectItem>
                          <SelectItem value="circular-fashion">Circular Fashion</SelectItem>
                          <SelectItem value="eco-minimalist">Eco Minimalist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      onClick={handleProfileUpdate}
                      disabled={saving}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      {saving ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : (
                        <Save className="h-4 w-4 mr-2" />
                      )}
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Sustainability Settings */}
          <TabsContent value="sustainability" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TreePine className="h-5 w-5" />
                  <span>Sustainability Goals & Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Annual Goals</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="carbonGoal">Carbon Savings Goal (kg CO2)</Label>
                        <Input
                          id="carbonGoal"
                          type="number"
                          value={sustainabilitySettings.carbonGoal}
                          onChange={(e) =>
                            setSustainabilitySettings({
                              ...sustainabilitySettings,
                              carbonGoal: Number.parseInt(e.target.value),
                            })
                          }
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Progress: {Number.parseFloat(profileData.stats.carbonSaved)}kg</span>
                          <span>
                            {Math.round(
                              (Number.parseFloat(profileData.stats.carbonSaved) / sustainabilitySettings.carbonGoal) *
                                100,
                            )}
                            %
                          </span>
                        </div>
                        <Progress
                          value={
                            (Number.parseFloat(profileData.stats.carbonSaved) / sustainabilitySettings.carbonGoal) * 100
                          }
                          className="h-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="monthlyExchangeGoal">Monthly Exchange Goal</Label>
                        <Input
                          id="monthlyExchangeGoal"
                          type="number"
                          value={sustainabilitySettings.monthlyExchangeGoal}
                          onChange={(e) =>
                            setSustainabilitySettings({
                              ...sustainabilitySettings,
                              monthlyExchangeGoal: Number.parseInt(e.target.value),
                            })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ecoScoreTarget">Eco Score Target (%)</Label>
                        <Input
                          id="ecoScoreTarget"
                          type="number"
                          min="0"
                          max="100"
                          value={sustainabilitySettings.ecoScoreTarget}
                          onChange={(e) =>
                            setSustainabilitySettings({
                              ...sustainabilitySettings,
                              ecoScoreTarget: Number.parseInt(e.target.value),
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Impact Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Wind className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">{profileData.stats.carbonSaved}</div>
                        <div className="text-sm text-gray-600">CO2 Saved</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">{profileData.stats.waterSaved}</div>
                        <div className="text-sm text-gray-600">Water Saved</div>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 rounded-lg">
                        <TreePine className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-emerald-600">{profileData.stats.treesPlanted}</div>
                        <div className="text-sm text-gray-600">Trees Planted</div>
                      </div>
                      <div className="text-center p-4 bg-green-100 rounded-lg">
                        <Recycle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">{profileData.stats.totalExchanges}</div>
                        <div className="text-sm text-gray-600">Items Recycled</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Eco Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="autoPlantTrees">Auto Plant Trees</Label>
                        <p className="text-sm text-gray-600">Automatically plant trees with your eco points</p>
                      </div>
                      <Switch
                        id="autoPlantTrees"
                        checked={sustainabilitySettings.autoPlantTrees}
                        onCheckedChange={(checked) =>
                          setSustainabilitySettings({ ...sustainabilitySettings, autoPlantTrees: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="offsetCarbon">Carbon Offset</Label>
                        <p className="text-sm text-gray-600">Offset your carbon footprint automatically</p>
                      </div>
                      <Switch
                        id="offsetCarbon"
                        checked={sustainabilitySettings.offsetCarbon}
                        onCheckedChange={(checked) =>
                          setSustainabilitySettings({ ...sustainabilitySettings, offsetCarbon: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sustainabilityReminders">Sustainability Reminders</Label>
                        <p className="text-sm text-gray-600">Get reminders about your eco goals</p>
                      </div>
                      <Switch
                        id="sustainabilityReminders"
                        checked={sustainabilitySettings.sustainabilityReminders}
                        onCheckedChange={(checked) =>
                          setSustainabilitySettings({ ...sustainabilitySettings, sustainabilityReminders: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSustainabilityUpdate}
                  disabled={saving}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {saving ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Save Sustainability Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">General Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushNotifications">Push Notifications</Label>
                        <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, pushNotifications: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Eco & Activity Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="ecoTips">Daily Eco Tips</Label>
                        <p className="text-sm text-gray-600">Get daily sustainability tips and advice</p>
                      </div>
                      <Switch
                        id="ecoTips"
                        checked={notificationSettings.ecoTips}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, ecoTips: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sustainabilityAlerts">Sustainability Alerts</Label>
                        <p className="text-sm text-gray-600">Alerts about your environmental impact</p>
                      </div>
                      <Switch
                        id="sustainabilityAlerts"
                        checked={notificationSettings.sustainabilityAlerts}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, sustainabilityAlerts: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="newMessages">New Messages</Label>
                        <p className="text-sm text-gray-600">Get notified when you receive new messages</p>
                      </div>
                      <Switch
                        id="newMessages"
                        checked={notificationSettings.newMessages}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, newMessages: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="exchangeUpdates">Exchange Updates</Label>
                        <p className="text-sm text-gray-600">Updates about your exchanges and trades</p>
                      </div>
                      <Switch
                        id="exchangeUpdates"
                        checked={notificationSettings.exchangeUpdates}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, exchangeUpdates: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleNotificationUpdate}
                  disabled={saving}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {saving ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Profile Visibility</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="profileVisibility">Who can see your profile?</Label>
                      <Select
                        value={privacySettings.profileVisibility}
                        onValueChange={(value) => setPrivacySettings({ ...privacySettings, profileVisibility: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Everyone</SelectItem>
                          <SelectItem value="members">EcoWear Members Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showEcoStats">Show Eco Statistics</Label>
                        <p className="text-sm text-gray-600">Allow others to see your environmental impact</p>
                      </div>
                      <Switch
                        id="showEcoStats"
                        checked={privacySettings.showEcoStats}
                        onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, showEcoStats: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="shareAchievements">Share Achievements</Label>
                        <p className="text-sm text-gray-600">Share your eco achievements with the community</p>
                      </div>
                      <Switch
                        id="shareAchievements"
                        checked={privacySettings.shareAchievements}
                        onCheckedChange={(checked) =>
                          setPrivacySettings({ ...privacySettings, shareAchievements: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePrivacyUpdate}
                  disabled={saving}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {saving ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Save Privacy Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        value={securitySettings.currentPassword}
                        onChange={(e) => setSecuritySettings({ ...securitySettings, currentPassword: e.target.value })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={securitySettings.newPassword}
                      onChange={(e) => setSecuritySettings({ ...securitySettings, newPassword: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={securitySettings.confirmPassword}
                      onChange={(e) => setSecuritySettings({ ...securitySettings, confirmPassword: e.target.value })}
                    />
                  </div>
                  <Button
                    onClick={handleSecurityUpdate}
                    disabled={saving}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    {saving ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Save className="h-4 w-4 mr-2" />
                    )}
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Security Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <Switch
                      id="twoFactorAuth"
                      checked={securitySettings.twoFactorAuth}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="loginAlerts">Login Alerts</Label>
                      <p className="text-sm text-gray-600">Get notified of new logins</p>
                    </div>
                    <Switch
                      id="loginAlerts"
                      checked={securitySettings.loginAlerts}
                      onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, loginAlerts: checked })}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Danger Zone */}
            <Card className="border-0 bg-red-50/80 backdrop-blur-sm border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-red-800">Delete Account</h3>
                    <p className="text-sm text-red-600">Permanently delete your account and all eco-achievements</p>
                  </div>
                  <Button variant="destructive" onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
