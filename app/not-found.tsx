"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-blue-200 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Page Not Found</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home size={20} />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Need Help?</h3>
          <p className="text-gray-600 mb-4">If you're looking for medical equipment rentals, we're here to help.</p>
          <div className="space-y-2">
            <a href="tel:+1-312-555-0123" className="block text-blue-600 hover:text-blue-800 font-medium">
              Call: (312) 555-0123
            </a>
            <a href="mailto:info@ochospitalbeds.com" className="block text-blue-600 hover:text-blue-800 font-medium">
              Email: info@ochospitalbeds.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
