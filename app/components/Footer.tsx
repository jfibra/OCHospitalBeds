import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="OCHospitalBeds.com Logo" width={40} height={40} className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">OCHospitalBeds</h3>
                <p className="text-blue-200">Hospital Bed Rentals</p>
              </div>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              Providing reliable hospital bed and medical equipment rentals to families and caregivers since
              2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-blue-100 hover:text-white text-lg transition-colors">
                Home
              </Link>
              <Link href="/products" className="block text-blue-100 hover:text-white text-lg transition-colors">
                Products
              </Link>
              <Link href="/about" className="block text-blue-100 hover:text-white text-lg transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-blue-100 hover:text-white text-lg transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-300" />
                <a href="tel:+1-312-555-0123" className="text-blue-100 hover:text-white text-lg transition-colors">
                  (949) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-300" />
                <a
                  href="mailto:info@ochospitalbeds.com"
                  className="text-blue-100 hover:text-white text-lg transition-colors"
                >
                  info@ochospitalbeds.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-300 mt-1" />
                <div className="text-blue-100 text-lg">
                  <p>Serving All of Southern California (SoCal)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-lg">© {new Date().getFullYear()} OCHospitalBeds.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
