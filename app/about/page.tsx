import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About OC Hospital Beds | Medical Equipment Rental Experts",
  description:
    "Learn about OC Hospital Beds, Orange County's trusted medical equipment rental company. Professional service, quality equipment, and compassionate care since our founding.",
  keywords: [
    "about OC Hospital Beds",
    "medical equipment rental company",
    "Orange County healthcare",
    "hospital bed rental experts",
    "medical equipment professionals",
    "home care specialists",
  ],
  openGraph: {
    title: "About OC Hospital Beds | Medical Equipment Rental Experts",
    description:
      "Orange County's trusted medical equipment rental company providing quality hospital beds and home care solutions.",
    type: "website",
    url: "https://ochospitalbeds.com/about",
    images: [
      {
        url: "/about-mission.png",
        width: 1200,
        height: 630,
        alt: "OC Hospital Beds team and mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About OC Hospital Beds | Medical Equipment Rental Experts",
    description:
      "Orange County's trusted medical equipment rental company providing quality hospital beds and home care solutions.",
    images: ["/about-mission.png"],
  },
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About OC Hospital Beds</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in medical equipment rentals, providing quality hospital beds and home care solutions
            throughout Orange County and Southern California.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OC Hospital Beds, we believe that quality medical care should be accessible and comfortable in the
                familiar surroundings of home. Our mission is to provide top-tier medical equipment rentals that enable
                patients to recover with dignity and comfort.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that every patient's needs are unique, which is why we offer personalized consultations
                and professional setup services to ensure the perfect fit for your specific situation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about-mission.png"
                alt="OC Hospital Beds mission - providing quality medical equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards for all our medical equipment, ensuring safety, reliability, and
                comfort for every patient.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We treat every patient and family with empathy, understanding the challenges they face during recovery
                and healing.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Responsive Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team is available 24/7 to address any concerns, provide support, and ensure your equipment is
                working perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/healthcare-team.png"
                alt="Healthcare professionals and patients we serve"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Who We Help</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Patients Recovering at Home</h3>
                    <p className="text-gray-600">Post-surgery recovery, chronic conditions, and long-term care needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Senior Care Facilities</h3>
                    <p className="text-gray-600">Assisted living, nursing homes, and adult day care centers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Healthcare Professionals</h3>
                    <p className="text-gray-600">Doctors, nurses, and therapists providing home care services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Family Caregivers</h3>
                    <p className="text-gray-600">Supporting loved ones with the right equipment and guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Service Area</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We proudly serve patients and healthcare facilities throughout Southern California with professional
                delivery and setup services.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Counties We Serve:</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow duration-200">
                  <span className="font-semibold text-blue-900">Orange County</span>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow duration-200">
                  <span className="font-semibold text-blue-900">Los Angeles County</span>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow duration-200">
                  <span className="font-semibold text-blue-900">San Diego County</span>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow duration-200">
                  <span className="font-semibold text-blue-900">Riverside County</span>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow duration-200">
                  <span className="font-semibold text-blue-900">San Bernardino County</span>
                </div>
              </div>
              <p className="text-gray-600">
                Need service in another area?{" "}
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                  Contact us
                </Link>{" "}
                to discuss your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose OC Hospital Beds?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference that professional service and quality equipment can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Free Delivery & Setup</h3>
              <p className="text-gray-600">Professional installation and training included with every rental</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and emergency assistance</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Quality Equipment</h3>
              <p className="text-gray-600">Top-brand medical equipment maintained to the highest standards</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Fair, transparent pricing with flexible rental terms</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Contact our team today for a free consultation. We'll help you find the perfect medical equipment solution
            for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+1-949-298-6651"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200"
            >
              Call (949) 298-6651
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
