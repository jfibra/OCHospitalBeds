import Link from "next/link"
import Image from "next/image"
import { Phone, Video, Mail, Shield, Truck, Clock, Star } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                What are you looking for today?
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Quality hospital beds and medical equipment rentals delivered to your home in Chicago, Illinois.
              </p>

              {/* Product Category Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <Link
                  href="/products#hospital-beds"
                  className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-2xl p-8 text-center transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛏️</div>
                  <h3 className="text-2xl font-bold text-blue-800 group-hover:text-blue-900">Hospital Beds</h3>
                  <p className="text-gray-600 mt-2">Professional & home-style beds</p>
                </Link>
                <Link
                  href="/products#accessories"
                  className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-2xl p-8 text-center transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                  <h3 className="text-2xl font-bold text-blue-800 group-hover:text-blue-900">Accessories</h3>
                  <p className="text-gray-600 mt-2">Bedside tables, IV poles & more</p>
                </Link>
                <Link
                  href="/products#mattresses"
                  className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-2xl p-8 text-center transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛌</div>
                  <h3 className="text-2xl font-bold text-blue-800 group-hover:text-blue-900">Mattresses</h3>
                  <p className="text-gray-600 mt-2">Variety of comfort levels</p>
                </Link>
                <Link
                  href="/products#mobility"
                  className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-2xl p-8 text-center transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">♿</div>
                  <h3 className="text-2xl font-bold text-blue-800 group-hover:text-blue-900">Mobility Aids</h3>
                  <p className="text-gray-600 mt-2">Walkers, wheelchairs & more</p>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-center">
                  View All Products
                </Link>
                <Link href="/contact" className="btn-secondary text-center">
                  Get Free Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/hero-image.png"
                alt="Clean living room with hospital bed setup"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose OCHospitalBeds?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing Chicago families with reliable, clean, and affordable medical equipment
              rentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Free Delivery & Setup</h3>
              <p className="text-lg text-gray-600">
                We deliver and set up your equipment at no extra charge throughout the Chicago area.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Sanitized & Safe</h3>
              <p className="text-lg text-gray-600">
                All equipment is thoroughly cleaned and sanitized before each rental for your safety.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">24/7 Support</h3>
              <p className="text-lg text-gray-600">
                Our team is available around the clock to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to connect with us. We're here to help you find the right equipment for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/contact?type=call" className="card hover:bg-blue-50 text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Phone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Schedule a Call</h3>
              <p className="text-gray-600">Talk to our team about your needs</p>
            </Link>

            <Link href="/contact?type=video" className="card hover:bg-blue-50 text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Video className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Video Consultation</h3>
              <p className="text-gray-600">See our products via video call</p>
            </Link>

            <Link href="/contact?type=email" className="card hover:bg-blue-50 text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Email Us</h3>
              <p className="text-gray-600">Send us your questions anytime</p>
            </Link>

            <a href="tel:+1-312-555-0123" className="card hover:bg-blue-50 text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Call Now</h3>
              <p className="text-gray-600">(312) 555-0123</p>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-4">
                "The team at OCHospitalBeds made everything so easy. They delivered the hospital bed the same day and
                set it up perfectly for my mother."
              </p>
              <p className="font-semibold text-blue-900">- Sarah M., Chicago</p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-4">
                "Professional service and clean equipment. The bed was exactly what we needed for dad's recovery at
                home."
              </p>
              <p className="font-semibold text-blue-900">- Michael R., Evanston</p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-4">
                "Great customer service and fair prices. They were available whenever we had questions about the
                equipment."
              </p>
              <p className="font-semibold text-blue-900">- Linda K., Oak Park</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
