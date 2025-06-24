"use client"

import Link from "next/link"
import { Phone, Video, Mail } from "lucide-react"

interface ProductContactOptionsProps {
  productName: string
  productId: string
}

export default function ProductContactOptions({ productName, productId }: ProductContactOptionsProps) {
  const encodedProductName = encodeURIComponent(productName)

  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 mt-6">
      <h4 className="text-xl font-semibold text-blue-900 mb-4 text-center">Interested in {productName}?</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href={`/contact?type=call&product=${encodedProductName}&productId=${productId}`}
          className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-lg p-4 transition-all duration-200 group"
        >
          <Phone className="text-blue-600 group-hover:text-blue-700" size={20} />
          <span className="font-medium text-blue-800 group-hover:text-blue-900">Schedule Call</span>
        </Link>

        <Link
          href={`/contact?type=video&product=${encodedProductName}&productId=${productId}`}
          className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-lg p-4 transition-all duration-200 group"
        >
          <Video className="text-blue-600 group-hover:text-blue-700" size={20} />
          <span className="font-medium text-blue-800 group-hover:text-blue-900">Video Call</span>
        </Link>

        <Link
          href={`/contact?type=email&product=${encodedProductName}&productId=${productId}`}
          className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-lg p-4 transition-all duration-200 group"
        >
          <Mail className="text-blue-600 group-hover:text-blue-700" size={20} />
          <span className="font-medium text-blue-800 group-hover:text-blue-900">Email Us</span>
        </Link>
      </div>
    </div>
  )
}
