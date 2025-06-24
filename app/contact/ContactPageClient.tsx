"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import ContactForm from "../components/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

function ContactPageContent() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get the medical equipment you need? We're here to help. Choose how you'd like to connect with us.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our team directly</p>
            <a href="tel:+1-312-555-0123" className="btn-primary">
              (949) 555-0123
            </a>
          </div>

          <div className="card text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your questions</p>
            <a href="mailto:info@ochospitalbeds.com" className="btn-primary">
              Send Email
            </a>
          </div>

          <div className="card text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Service Area</h3>
            <p className="text-gray-600 mb-4">Chicago & surrounding areas</p>
            <span className="text-blue-600 font-medium">Free Delivery</span>
          </div>

          <div className="card text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Hours</h3>
            <p className="text-gray-600 mb-2">Mon-Fri: 8AM-6PM</p>
            <p className="text-gray-600">24/7 Emergency Support</p>
          </div>
        </div>

        {/* Contact Form */}
        <Suspense fallback={<div className="text-center">Loading contact form...</div>}>
          <ContactFormWrapper />
        </Suspense>
      </div>
    </div>
  )
}

export function ContactFormWrapper() {
  const search = useSearchParams()
  const type = search.get("type") ?? undefined
  const product = search.get("product") ?? undefined

  return <ContactForm initialType={type} initialProduct={product} />
}

export default function ContactPageClient() {
  return <ContactPageContent />
}
