import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Heart, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - OCHospitalBeds.com | Medical Equipment Rentals",
  description:
    "Learn about OCHospitalBeds.com and our mission to provide quality medical equipment rentals to families, seniors, and caregivers.",
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About OCHospitalBeds</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to helping families and caregivers provide the best possible care at home with quality
            medical equipment rentals.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OCHospitalBeds, we believe that quality healthcare should be accessible in the comfort of your own
                home. Since 2020, we've been serving the community by providing clean, reliable, and affordable medical
                equipment rentals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team understands the challenges that come with caring for loved ones, especially seniors who prefer
                to recover and age in place. That's why we've made it our mission to remove the barriers to accessing
                quality medical equipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Shield className="text-blue-600" size={24} />
                  </div>
                  <span className="text-lg font-medium text-blue-900">Quality Assured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Heart className="text-blue-600" size={24} />
                  </div>
                  <span className="text-lg font-medium text-blue-900">Compassionate Care</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/healthcare-team.jpg"
                alt="Professional healthcare team at OCHospitalBeds"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're proud to serve diverse members of the community with their medical equipment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Seniors & Families</h3>
              <p className="text-lg text-gray-600">
                Supporting seniors who want to age in place and families caring for elderly loved ones at home.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Caregivers</h3>
              <p className="text-lg text-gray-600">
                Helping professional and family caregivers provide the best possible care with proper equipment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Recovery Patients</h3>
              <p className="text-lg text-gray-600">
                Supporting patients recovering from surgery or illness who need temporary medical equipment.
              </p>
            </div>
          </div>

          {/* Additional image showing senior care */}
          <div className="text-center">
            <Image
              src="/senior-care-home.jpg"
              alt="Healthcare professional providing compassionate care to senior patient at home"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mx-auto"
            />
            <p className="text-sm text-gray-500 mt-2 italic">Comfortable care at home with our medical equipment</p>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              <MapPin className="inline-block mr-3 text-blue-600" size={36} />
              Service Area
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              We proudly serve Southern California and the surrounding metropolitan area. Our delivery team knows the
              area well and can typically provide same-day or next-day delivery and setup.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Counties We Serve:</h3>
              <div className="grid grid-cols-2 gap-4 text-lg text-gray-600 mb-6">
                <div>• Orange County</div>
                <div>• Los Angeles County</div>
                <div>• San Diego County</div>
                <div>• Riverside County</div>
                <div>• San Bernardino County</div>
              </div>
              <p className="text-lg text-gray-600">
                Don't see your area listed?{" "}
                <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  Contact us
                </a>{" "}
                - we may still be able to help!
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-2xl border-2 border-blue-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at OCHospitalBeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Shield className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Every piece of equipment is thoroughly cleaned, sanitized, and inspected before delivery to ensure
                  your safety and peace of mind.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Heart className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Compassionate Service</h3>
                <p className="text-gray-600">
                  We understand that medical equipment needs often come during difficult times. Our team approaches
                  every interaction with empathy and care.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  As a local business, we're committed to serving our community and building lasting relationships with
                  our customers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Reliable Delivery</h3>
                <p className="text-gray-600">
                  When you need medical equipment, timing matters. We pride ourselves on prompt, reliable delivery and
                  setup service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
