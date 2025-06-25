import type { Metadata } from "next"
import Link from "next/link"
import ProductContactOptions from "../components/ProductContactOptions"
import ProductImageGallery from "../components/ProductImageGallery"

export const metadata: Metadata = {
  title: "Medical Equipment Rentals - Hospital Beds & More | OCHospitalBeds.com",
  description:
    "Browse our selection of hospital beds, medical mattresses, accessories, and mobility aids available for rent.",
}

const products = [
  {
    id: "hospital-beds",
    category: "Hospital Beds",
    items: [
      {
        id: "evenda-comfio",
        name: "Evenda Comfio Home Care Bed",
        description:
          "Designed for home care with a warm wood finish that blends seamlessly into your home environment. Perfect for long-term care and recovery.",
        images: [
          { src: "/evenda-bed-angle.jpg", alt: "Evenda Comfio side view", caption: "Side view showing controls" },
          { src: "/evenda-remote.jpg", alt: "Evenda remote control", caption: "Easy-to-use remote control" },
        ],
        features: [
          "Simplified hand control for easy operation",
          "Compatible with AtmosAir Velaris mattress system",
          "Under bed clearance for lifting aids",
          "Home-friendly wood finish design",
          "Quiet operation for peaceful rest",
        ],
      },
      {
        id: "stryker-hospital-bed",
        name: "Professional Hospital Bed",
        description:
          "Premium hospital bed with cutting-edge technology including iBed Awareness system and precision side rails for maximum safety and comfort.",
        images: [
          { src: "/stryker-hospital-bed.jpg", alt: "Stryker hospital bed", caption: "Advanced Stryker hospital bed" },
          {
            src: "/ibed-awareness-panel.jpg",
            alt: "iBed Awareness control panel",
            caption: "iBed Awareness monitoring system",
          },
          {
            src: "/precision-side-rails.jpg",
            alt: "Precision side rails",
            caption: "Precision side rails with intermediate positions",
          },
          { src: "/open-architecture-bed.jpg", alt: "Open architecture design", caption: "Open architecture platform" },
        ],
        features: [
          "iBed Awareness monitoring system",
          "Precision side rails with intermediate positions",
          "Open architecture platform",
          "Advanced patient monitoring",
          "Professional clinical features",
        ],
      },
    ],
  },
  {
    id: "mattresses",
    category: "Medical Mattresses",
    items: [
      {
        id: "pressure-relief-mattress",
        name: "AtmosAir Velaris Pressure Relief Mattress",
        description:
          "Advanced alternating pressure mattress system that provides instant setup for pressure therapy without moving the patient.",
        images: [
          {
            src: "/pressure-relief-mattress-main.png",
            alt: "AtmosAir Velaris pressure relief mattress",
            caption: "Advanced alternating pressure system",
          },
          {
            src: "/pressure-relief-mattress-setup.png",
            alt: "Pressure mattress home setup",
            caption: "Complete home care installation",
          },
          {
            src: "/pressure-relief-mattress-detail.png",
            alt: "Pressure mattress surface detail",
            caption: "Alternating pressure cells",
          },
        ],
        features: [
          "Instant alternating therapy setup",
          "No need to move patient for installation",
          "Advanced pressure redistribution",
          "Quiet pump operation",
          "Easy-to-clean antimicrobial cover",
        ],
      },
      {
        id: "foam-mattress",
        name: "High-Density Foam Mattress",
        description:
          "Premium foam mattress designed specifically for hospital beds with pressure-relieving properties.",
        images: [
          {
            src: "/foam-mattress-main.png",
            alt: "High-density foam mattress",
            caption: "Medical-grade foam construction",
          },
          {
            src: "/foam-mattress-cover.png",
            alt: "Waterproof mattress cover",
            caption: "Easy-clean antimicrobial cover",
          },
        ],
        features: [
          "High-density medical-grade foam",
          "Pressure point relief",
          "Waterproof, antimicrobial cover",
          "Multiple firmness options",
          "Easy maintenance and cleaning",
        ],
      },
    ],
  },
  {
    id: "accessories",
    category: "Bed Accessories",
    items: [
      {
        id: "overbed-table",
        name: "Adjustable Overbed Table",
        description:
          "Height and tilt adjustable table that rolls smoothly over the bed for eating, reading, and activities.",
        images: [
          {
            src: "/overbed-table-main.png",
            alt: "Adjustable overbed table",
            caption: "Height and tilt adjustable design",
          },
          {
            src: "/overbed-table-adjustment.png",
            alt: "Overbed table adjustment mechanism",
            caption: "Easy height and tilt controls",
          },
          {
            src: "/overbed-table-use.png",
            alt: "Patient using overbed table",
            caption: "Comfortable dining and activities",
          },
          {
            src: "/overbed-table-storage.png",
            alt: "Overbed table with storage",
            caption: "Built-in storage compartment",
          },
        ],
        features: [
          "Height adjustable design",
          "Tilting surface for comfort",
          "Smooth-rolling casters",
          "Easy-to-clean surface",
          "Sturdy construction",
        ],
      },
      {
        id: "bed-trapeze",
        name: "Bed Trapeze Bar",
        description: "Overhead support bar to help patients reposition themselves in bed and transfer safely.",
        images: [
          {
            src: "/trapeze-bar-main.png",
            alt: "Bed trapeze bar system",
            caption: "Overhead support system",
          },
          {
            src: "/trapeze-bar-mounting.png",
            alt: "Trapeze bar mounting system",
            caption: "Secure bed frame attachment",
          },
          {
            src: "/trapeze-bar-use.png",
            alt: "Patient using trapeze bar",
            caption: "Assisted repositioning support",
          },
          {
            src: "/trapeze-bar-adjustment.png",
            alt: "Trapeze bar adjustment details",
            caption: "Adjustable chain and grip handle",
          },
        ],
        features: [
          "Sturdy overhead support",
          "Adjustable chain length",
          "Easy-grip handle design",
          "Universal mounting system",
          "Weight-tested for safety",
        ],
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Medical Equipment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quality hospital beds and medical equipment rentals for your home care needs. All equipment is
            professionally cleaned and maintained.
          </p>
        </div>

        {/* Product Categories */}
        {products.map((category) => (
          <section key={category.id} id={category.id} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 relative inline-block">
                {category.category}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <ProductImageGallery
                    images={item.images || [{ src: item.image || "/placeholder.svg", alt: item.name }]}
                    productName={item.name}
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.name}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-800 mb-3 text-lg">Key Features:</h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ProductContactOptions productName={item.name} productId={item.id} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Equipment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Our experienced team understands that every patient's needs are unique. We'll help you select the perfect
            equipment and ensure proper setup in your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+1-312-555-0123"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200"
            >
              Call (949) 555-0123
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
