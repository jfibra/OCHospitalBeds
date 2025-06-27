"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function FeaturedBundles() {
  const bundles = [
    {
      id: "basic",
      name: "Basic Bundle",
      price: 350,
      popular: false,
      image: "/basic-bundle-showcase.png",
      description: "Perfect for basic home care needs",
      includes: [
        "Evenda Comfio Home Care Bed",
        "High-Density Foam Mattress",
        "Adjustable Overbed Table",
        "Free Delivery & Setup",
        "24/7 Support",
      ],
    },
    {
      id: "advanced",
      name: "Advanced Bundle",
      price: 550,
      popular: true,
      image: "/advanced-bundle-showcase.png",
      description: "Complete care solution with premium features",
      includes: [
        "Professional Hospital Bed with iBed Awareness",
        "AtmosAir Velaris Pressure Relief Mattress",
        "Adjustable Overbed Table",
        "Hospital Bed Trapeze Bar",
        "Free Delivery & Setup",
        "24/7 Priority Support",
        "Monthly Equipment Check",
      ],
    },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Featured Bundles</h3>
        <p className="text-gray-600">Complete care packages at great value</p>
      </div>

      <div className="space-y-6">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className={`relative rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-lg ${
              bundle.popular ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
            }`}
          >
            {bundle.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} className="fill-current" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="relative mb-4">
              <Image
                src={bundle.image || "/placeholder.svg"}
                alt={`${bundle.name} - Hospital bed rental package showing all included equipment`}
                width={300}
                height={200}
                className="w-full h-40 object-contain rounded-lg bg-gray-50"
              />
            </div>

            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-blue-900 mb-1">{bundle.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{bundle.description}</p>
              <div className="text-3xl font-bold text-blue-600">
                ${bundle.price}
                <span className="text-lg text-gray-500 font-normal">/month</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <h5 className="font-semibold text-gray-800 text-sm">Includes:</h5>
              {bundle.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/contact?type=bundle&product=${encodeURIComponent(bundle.name)}&price=${bundle.price}`}
              className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                bundle.popular
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              Get This Bundle
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Why Choose Our Bundles?</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Save up to 30% vs individual rentals</li>
          <li>• Everything you need in one package</li>
          <li>• Professional setup included</li>
          <li>• Flexible rental terms</li>
        </ul>
      </div>
    </div>
  )
}
