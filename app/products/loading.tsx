"use client"

import { Leaf } from "lucide-react"

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 flex items-center justify-center">
          <Leaf className="h-5 w-5 mr-2 text-green-600" />
          Loading amazing sustainable fashion finds...
        </p>
      </div>
    </div>
  )
}
