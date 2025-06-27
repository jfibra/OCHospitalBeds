import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | OC Hospital Beds - Medical Equipment Rental Experts",
  description:
    "Learn about OC Hospital Beds, your trusted partner for medical equipment rentals in Orange County. Professional service, quality equipment, and compassionate care since our founding.",
  keywords: [
    "about OC Hospital Beds",
    "medical equipment rental company",
    "Orange County healthcare",
    "hospital bed rental experts",
    "medical equipment service",
  ],
  openGraph: {
    title: "About OC Hospital Beds | Medical Equipment Rental Experts",
    description:
      "Your trusted partner for medical equipment rentals in Orange County. Professional service and quality equipment.",
    images: [
      {
        url: "/about-mission.png",
        width: 1200,
        height: 630,
        alt: "OC Hospital Beds team",
      },
    ],
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
            Your trusted partner for quality medical equipment rentals in Orange County. We're committed to providing
            compassionate care and professional service when you need it most.
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
                families throughout Orange County.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves access to professional-grade medical equipment in the comfort of their
                own home. That's why we've dedicated ourselves to providing not just equipment, but complete care
                solutions that include delivery, setup, and ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+1-949-298-6651"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Call (949) 298-6651
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-mission.png"
                alt="OC Hospital Beds mission - providing quality medical equipment"
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every interaction we have with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide only the highest quality, professionally maintained medical equipment that meets or exceeds
                hospital standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the challenges of recovery and provide empathetic, personalized service to every family we
                serve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Rapid Response</h3>
              <p className="text-gray-600 leading-relaxed">
                When you need medical equipment, time matters. We provide same-day delivery and setup throughout Orange
                County.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Professional Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our trained technicians handle delivery, setup, and training to ensure you're comfortable with your
                equipment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Affordable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality medical equipment shouldn't break the bank. We offer competitive pricing and flexible rental
                terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Medical needs don't follow business hours. Our support team is available around the clock for
                emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Service Area</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We proudly serve families throughout Orange County with professional medical equipment delivery and
                setup.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Orange County Communities We Serve</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div className="space-y-2">
                    <p>• Anaheim</p>
                    <p>• Brea</p>
                    <p>• Buena Park</p>
                    <p>• Costa Mesa</p>
                    <p>• Cypress</p>
                    <p>• Dana Point</p>
                    <p>• Fountain Valley</p>
                    <p>• Fullerton</p>
                    <p>• Garden Grove</p>
                    <p>• Huntington Beach</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Irvine</p>
                    <p>• Laguna Beach</p>
                    <p>• Lake Forest</p>
                    <p>• Mission Viejo</p>
                    <p>• Newport Beach</p>
                    <p>• Orange</p>
                    <p>• San Clemente</p>
                    <p>• Santa Ana</p>
                    <p>• Tustin</p>
                    <p>• Westminster</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Local?</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>
                      <strong>Same-Day Delivery:</strong> Being local means we can respond quickly to your needs, often
                      providing same-day service.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>
                      <strong>Personal Service:</strong> We're not a faceless corporation - we're your neighbors who
                      care about your recovery.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>
                      <strong>Local Knowledge:</strong> We understand Orange County's unique needs and can navigate
                      local healthcare systems.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>
                      <strong>Community Investment:</strong> We're invested in our community's health and well-being for
                      the long term.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Commitment to You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every member of our team is dedicated to providing exceptional service and support during your time of
              need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/healthcare-team.jpg"
                alt="Professional healthcare team providing medical equipment services"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Professional Excellence</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>
                    <strong>Trained Technicians:</strong> All our delivery and setup technicians are professionally
                    trained and certified.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>
                    <strong>Equipment Expertise:</strong> We know our equipment inside and out, ensuring proper setup
                    and operation.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>
                    <strong>Patient Education:</strong> We take time to ensure you and your caregivers are comfortable
                    with the equipment.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>
                    <strong>Ongoing Support:</strong> Our relationship doesn't end at delivery - we're here for the
                    duration of your rental.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join thousands of Orange County families who have trusted us with their medical equipment needs. Contact us
            today for a free consultation.
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
