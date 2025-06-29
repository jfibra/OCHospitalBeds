import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Award, MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - OC Hospital Beds | Medical Equipment Rental Experts",
  description:
    "Learn about OC Hospital Beds' mission to provide quality medical equipment rentals across Southern California. Family-owned business serving Orange County, Los Angeles, San Diego, Riverside, and San Bernardino counties since 2010.",
  keywords: [
    "about OC Hospital Beds",
    "medical equipment rental company",
    "Southern California medical rentals",
    "hospital bed rental experts",
    "family owned medical equipment",
    "Orange County medical supplies",
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About OC Hospital Beds</h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Your trusted partner in medical equipment rentals across Southern California since 2010
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Bringing Hospital-Quality Care to Your Home
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OC Hospital Beds, we believe that quality healthcare shouldn't be limited to hospital walls. Our
                mission is to provide top-tier medical equipment rentals that enable patients to recover comfortably and
                safely in the familiar surroundings of their own homes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that every patient's journey is unique, which is why we offer personalized service,
                professional setup, and ongoing support to ensure you have everything you need for a successful
                recovery.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about-mission.png"
                alt="Healthcare professional setting up medical equipment in a home environment"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">What Drives Us Every Day</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every interaction and decision we make in serving our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Compassionate Care</h3>
                <p className="text-gray-600">
                  We treat every patient with empathy and understanding, recognizing the challenges they face during
                  recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quality & Safety</h3>
                <p className="text-gray-600">
                  All our equipment meets the highest medical standards and undergoes rigorous cleaning and maintenance
                  protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Family-Centered</h3>
                <p className="text-gray-600">
                  As a family-owned business, we understand the importance of family support during the healing process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We continuously strive to exceed expectations in service quality, equipment reliability, and customer
                  satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Who We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Supporting Every Step of Recovery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're honored to serve diverse communities across Southern California with specialized care solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Patients Include:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Post-Surgical Recovery Patients</h4>
                    <p className="text-gray-600">
                      Supporting recovery after major surgeries with comfortable, adjustable hospital beds and
                      specialized mattresses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Seniors Aging in Place</h4>
                    <p className="text-gray-600">
                      Helping elderly patients maintain independence at home with mobility aids and comfort-enhancing
                      equipment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Chronic Condition Management</h4>
                    <p className="text-gray-600">
                      Providing long-term solutions for patients managing ongoing health conditions requiring
                      specialized care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Rehabilitation Patients</h4>
                    <p className="text-gray-600">
                      Supporting physical therapy and rehabilitation with equipment designed to aid in mobility and
                      recovery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hospice and Palliative Care</h4>
                    <p className="text-gray-600">
                      Ensuring comfort and dignity during end-of-life care with specialized beds and comfort-focused
                      equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/senior-care-home.png"
                alt="Senior patient comfortable in home care setting with family"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Service Area</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Serving Southern California</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly deliver professional medical equipment rental services across five major counties in Southern
              California
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Counties We Serve:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white border-2 border-blue-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Orange County</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Los Angeles County</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">San Diego County</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Riverside County</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">San Bernardino County</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Professional Delivery & Setup</h4>
              <p className="text-gray-600 mb-6">
                Our trained technicians provide free delivery, professional setup, and comprehensive training on all
                equipment. We ensure you're completely comfortable with your medical equipment before we leave.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us Today
                </Link>
                <a
                  href="tel:+1-949-298-6651"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  (949) 298-6651
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Experienced Healthcare Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team combines years of healthcare experience with a genuine commitment to patient care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/healthcare-team.png"
                alt="Professional healthcare team members"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Our Team?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Licensed Healthcare Professionals</h4>
                    <p className="text-gray-600">
                      Our team includes licensed nurses and certified medical equipment technicians with extensive
                      healthcare backgrounds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ongoing Training & Certification</h4>
                    <p className="text-gray-600">
                      We invest in continuous education to stay current with the latest medical equipment technologies
                      and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">24/7 Support Availability</h4>
                    <p className="text-gray-600">
                      Our support team is available around the clock to address any questions or concerns about your
                      equipment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bilingual Services</h4>
                    <p className="text-gray-600">
                      We provide services in both English and Spanish to better serve our diverse Southern California
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the OC Hospital Beds Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of satisfied patients and families who have trusted us with their home healthcare needs.
            Contact us today for a free consultation.
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
        </div>
      </section>
    </div>
  )
}
