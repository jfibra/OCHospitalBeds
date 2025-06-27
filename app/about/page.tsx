import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | OC Hospital Beds - Medical Equipment Rental Experts",
  description:
    "Learn about OC Hospital Beds, your trusted partner for medical equipment rentals in Orange County. Over 15 years of experience providing quality hospital beds and patient care solutions.",
  keywords: [
    "about OC Hospital Beds",
    "medical equipment rental company",
    "Orange County medical supplies",
    "hospital bed rental experts",
    "patient care solutions",
    "medical equipment specialists",
  ],
  openGraph: {
    title: "About Us | OC Hospital Beds - Medical Equipment Rental Experts",
    description:
      "Learn about OC Hospital Beds, your trusted partner for medical equipment rentals in Orange County. Over 15 years of experience providing quality hospital beds and patient care solutions.",
    type: "website",
    url: "https://ochospitalbeds.com/about",
    images: [
      {
        url: "/about-mission.png",
        width: 1200,
        height: 630,
        alt: "About OC Hospital Beds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | OC Hospital Beds - Medical Equipment Rental Experts",
    description:
      "Learn about OC Hospital Beds, your trusted partner for medical equipment rentals in Orange County. Over 15 years of experience providing quality hospital beds and patient care solutions.",
    images: ["/about-mission.png"],
  },
}

export default function AboutPage() {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About OC Hospital Beds</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for quality medical equipment rentals, providing compassionate care and professional
            service to families throughout Orange County and surrounding areas.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OC Hospital Beds, we understand that recovering at home provides the comfort and familiarity that
                promotes healing. Our mission is to make quality medical equipment accessible and affordable for
                families when they need it most.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves dignity, comfort, and the best possible care during their recovery
                journey. That's why we've dedicated ourselves to providing not just equipment, but peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:+1-949-298-6651"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Call (949) 298-6651
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-mission.png"
                alt="Our mission to provide quality medical equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every interaction we have with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We treat every client with empathy, understanding that medical equipment rental often comes during
                challenging times in people's lives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600 leading-relaxed">
                From prompt delivery to 24/7 support, we ensure our equipment and services are always dependable when
                you need them most.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                All our medical equipment is professionally maintained, sanitized, and meets the highest safety and
                quality standards.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Service Areas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We proudly serve families throughout Orange County and surrounding areas with reliable medical equipment
                delivery and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Orange County</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Anaheim</li>
                  <li>Irvine</li>
                  <li>Santa Ana</li>
                  <li>Huntington Beach</li>
                  <li>Newport Beach</li>
                  <li>Costa Mesa</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Los Angeles County</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Long Beach</li>
                  <li>Torrance</li>
                  <li>Carson</li>
                  <li>Lakewood</li>
                  <li>Cerritos</li>
                  <li>Bellflower</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Riverside County</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Corona</li>
                  <li>Riverside</li>
                  <li>Norco</li>
                  <li>Eastvale</li>
                  <li>Chino Hills</li>
                  <li>Jurupa Valley</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see your area listed? We may still be able to serve you.</p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Check Service Availability
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Experienced Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated professionals bring years of experience in medical equipment and patient care to serve you
              better.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Professional Expertise</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team includes certified medical equipment specialists, delivery technicians, and customer service
                representatives who understand the unique needs of home healthcare.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>Certified medical equipment technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>Professional delivery and setup specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>24/7 customer support representatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>Healthcare coordination specialists</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/healthcare-team.jpg"
                alt="Our professional healthcare team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Contact us today to learn more about our medical equipment rental services and how we can support your home
            healthcare needs.
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
