"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="bg-blue-50 py-2 px-4 -mx-4 mb-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <a
              href="tel:+1-312-555-0123"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium"
            >
              <Phone size={16} />
              Call: (312) 555-0123
            </a>
            <a
              href="mailto:info@ochospitalbeds.com"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium"
            >
              <Mail size={16} />
              info@ochospitalbeds.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="OCHospitalBeds.com Logo" width={50} height={50} className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-blue-800">OCHospitalBeds</h1>
              <p className="text-sm text-gray-600">Chicago Medical Rentals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact" className="btn-primary mt-2" onClick={() => setIsMenuOpen(false)}>
                Get Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
