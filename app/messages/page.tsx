"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ArrowLeft,
  Leaf,
  Search,
  Paperclip,
  Send,
  Smile,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Check,
  CheckCheck,
  CircleDotDashed,
} from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const [conversations, setConversations] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef(null)

  // Mock data
  const mockConversations = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        online: true,
        lastActive: "online",
      },
      lastMessage: "Is the denim jacket still available?",
      lastMessageTime: "10:30 AM",
      unreadCount: 2,
      messages: [
        { id: 1, sender: "Sarah Chen", text: "Hi! Is the denim jacket still available?", time: "10:28 AM", read: true },
        { id: 2, sender: "You", text: "Yes, it is! What size are you looking for?", time: "10:29 AM", read: true },
        {
          id: 3,
          sender: "Sarah Chen",
          text: "Great! I'm interested in size M. Can you tell me more about its condition?",
          time: "10:30 AM",
          read: false,
        },
        {
          id: 4,
          sender: "Sarah Chen",
          text: "Also, is the AR try-on feature working for this item?",
          time: "10:30 AM",
          read: false,
        },
      ],
    },
    {
      id: 2,
      user: {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        online: false,
        lastActive: "2 hours ago",
      },
      lastMessage: "Thanks for the recycled boots!",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      messages: [
        {
          id: 1,
          sender: "Mike Johnson",
          text: "Hey, just received the recycled boots. They're great!",
          time: "Yesterday 3:00 PM",
          read: true,
        },
        {
          id: 2,
          sender: "You",
          text: "Awesome! Glad you like them. Enjoy your sustainable steps! 🌱",
          time: "Yesterday 3:05 PM",
          read: true,
        },
      ],
    },
    {
      id: 3,
      user: {
        name: "EcoWear Support",
        avatar: "/placeholder.svg?height=40&width=40",
        online: true,
        lastActive: "online",
      },
      lastMessage: "Your new achievement 'Eco Champion' is unlocked!",
      lastMessageTime: "Jan 15",
      unreadCount: 1,
      messages: [
        {
          id: 1,
          sender: "EcoWear Support",
          text: "Congratulations! Your new achievement 'Eco Champion' is unlocked! Keep up the great work!",
          time: "Jan 15 9:00 AM",
          read: true,
        },
        {
          id: 2,
          sender: "EcoWear Support",
          text: "You've earned 100 bonus points for your dedication to sustainable fashion!",
          time: "Jan 15 9:01 AM",
          read: false,
        },
      ],
    },
  ]

  useEffect(() => {
    // Simulate loading conversations
    setTimeout(() => {
      setConversations(mockConversations)
      setSelectedConversation(mockConversations[0]) // Select the first conversation by default
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    // Scroll to bottom of messages when conversation changes or new message is added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedConversation])

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === selectedConversation.id) {
          const newMsg = {
            id: conv.messages.length + 1,
            sender: "You",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            read: false, // Will be marked as read by recipient
          }
          return {
            ...conv,
            messages: [...conv.messages, newMsg],
            lastMessage: newMessage,
            lastMessageTime: newMsg.time,
            unreadCount: 0, // Reset unread count for sender
          }
        }
        return conv
      })
      setConversations(updatedConversations)
      setSelectedConversation(updatedConversations.find((conv) => conv.id === selectedConversation.id))
      setNewMessage("")
    }
  }

  const markAsRead = (conversationId) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? { ...conv, unreadCount: 0, messages: conv.messages.map((msg) => ({ ...msg, read: true })) }
          : conv,
      ),
    )
    if (selectedConversation && selectedConversation.id === conversationId) {
      setSelectedConversation((prev) => ({
        ...prev,
        unreadCount: 0,
        messages: prev.messages.map((msg) => ({ ...msg, read: true })),
      }))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your eco-conversations...</p>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Connect with other eco-conscious fashion lovers</p>
        </div>

        <Card className="h-[calc(100vh-250px)] flex border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          {/* Conversation List */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>
            <ScrollArea className="flex-1">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`flex items-center p-4 cursor-pointer hover:bg-green-50 transition-colors ${
                    selectedConversation?.id === conv.id ? "bg-green-100" : ""
                  }`}
                  onClick={() => {
                    setSelectedConversation(conv)
                    markAsRead(conv.id)
                  }}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conv.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{conv.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conv.user.online && (
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{conv.user.name}</h3>
                      <span className="text-xs text-gray-500">{conv.lastMessageTime}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unreadCount > 0 && (
                    <Badge className="ml-2 bg-green-600 text-white rounded-full px-2 py-0.5 text-xs">
                      {conv.unreadCount}
                    </Badge>
                  )}
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Message Thread */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {selectedConversation.user.online && (
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedConversation.user.name}</h3>
                      <p className="text-sm text-gray-600">{selectedConversation.user.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-5 w-5 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-5 w-5 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4 space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.sender === "You"
                            ? "bg-green-600 text-white rounded-br-none"
                            : "bg-gray-100 text-gray-900 rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <div
                          className={`text-xs mt-1 ${message.sender === "You" ? "text-green-200" : "text-gray-500"} flex items-center justify-end`}
                        >
                          <span>{message.time}</span>
                          {message.sender === "You" &&
                            (message.read ? (
                              <CheckCheck className="h-3 w-3 ml-1" />
                            ) : (
                              <Check className="h-3 w-3 ml-1" />
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Smile className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    className="flex-1"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <CircleDotDashed className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">Select a conversation to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
