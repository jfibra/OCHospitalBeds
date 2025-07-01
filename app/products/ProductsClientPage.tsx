"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, Grid, List, Filter, X } from "lucide-react"
import ProductContactOptions from "../components/ProductContactOptions"
import ProductImageGallery from "../components/ProductImageGallery"

const products = [
  {
    id: "hospital-bed-bundles",
    category: "Complete Care Bundles",
    featured: true,
    items: [
      {
        id: "comfio-bundle",
        name: "Comfio Home Care Bundle",
        description:
          "Complete home care solution with the Evenda Comfio bed designed to blend seamlessly into your home environment. Perfect for long-term care and recovery with everything you need.",
        price: 450,
        isBundle: true,
        keywords: ["home care", "comfio", "bundle", "bed", "mattress", "table", "wood finish", "evenda"],
        specifications: {
          bedSize: '36" Wide x 80" Long',
          maxWeight: "350 lbs",
        },
        images: [
          { src: "/comfio-bundle-primary-new.png", alt: "Comfio Home Care Bundle", caption: "Complete bundle package" },
          { src: "/evenda-bed-main.jpg", alt: "Evenda Comfio bed with mattress", caption: "Evenda Comfio bed setup" },
          {
            src: "/dual-layer-mattress-main.webp",
            alt: "Dual-layer pressure relief mattress",
            caption: "Medical-grade dual-layer mattress",
          },
          {
            src: "/new-overbed-table.jpg",
            alt: "Adjustable overbed table",
            caption: "Height adjustable overbed table",
          },
        ],
        features: [
          "Evenda Comfio Home Care Bed with wood finish",
          "Dual-Layer Pressure Relief Mattress included",
          "Adjustable Overbed Table included",
          "Simplified hand control for easy operation",
          "Home-friendly design that blends with decor",
          "Free delivery, setup, and 24/7 support",
        ],
      },
      {
        id: "professional-bundle",
        name: "Professional Care Bundle",
        description:
          "Advanced hospital care solution with cutting-edge technology including iBed Awareness system and precision side rails. Complete package for maximum safety and comfort.",
        price: 600,
        isBundle: true,
        keywords: ["professional", "hospital", "bundle", "ibed", "awareness", "stryker", "advanced", "clinical"],
        specifications: {
          bedSize: '36" Wide x 84" Long',
          maxWeight: "450 lbs",
        },
        images: [
          {
            src: "/professional-bundle-primary-new.png",
            alt: "Professional Care Bundle",
            caption: "Complete professional bundle",
          },
          {
            src: "/professional-hospital-bed-main.png",
            alt: "Professional hospital bed with mattress",
            caption: "Advanced hospital bed setup",
          },
          {
            src: "/dual-layer-mattress-main.webp",
            alt: "Dual-layer pressure relief mattress",
            caption: "Medical-grade dual-layer mattress",
          },
          {
            src: "/new-overbed-table.jpg",
            alt: "Adjustable overbed table",
            caption: "Height adjustable overbed table",
          },
        ],
        features: [
          "Professional Hospital Bed with iBed Awareness",
          "Dual-Layer Pressure Relief Mattress included",
          "Adjustable Overbed Table included",
          "Precision side rails with intermediate positions",
          "Advanced patient monitoring system",
          "Free delivery, setup, and 24/7 priority support",
        ],
      },
    ],
  },
  {
    id: "hospital-beds",
    category: "Hospital Beds",
    hidden: true, // Hide this category
    items: [
      {
        id: "evenda-comfio",
        name: "Evenda Comfio Home Care Bed",
        description:
          "Designed for home care with a warm wood finish that blends seamlessly into your home environment. Perfect for long-term care and recovery.",
        price: 275,
        bundleId: "comfio-bundle",
        keywords: ["evenda", "comfio", "home care", "bed", "wood finish", "quiet", "operation"],
        specifications: {
          bedSize: '36" Wide x 80" Long',
          maxWeight: "350 lbs",
        },
        images: [
          { src: "/evenda-bed-main.jpg", alt: "Evenda Comfio bed frame", caption: "Wood-finished home care bed frame" },
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
        price: 425,
        bundleId: "professional-bundle",
        keywords: ["stryker", "professional", "hospital", "bed", "ibed", "awareness", "precision", "rails"],
        specifications: {
          bedSize: '36" Wide x 84" Long',
          maxWeight: "450 lbs",
        },
        images: [
          {
            src: "/professional-hospital-bed-main.png",
            alt: "Professional hospital bed frame",
            caption: "Medical-grade hospital bed frame",
          },
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
        price: 350,
        bundleAddon: true, // This is an add-on to bundles, not included
        keywords: ["atmosair", "velaris", "pressure", "relief", "mattress", "alternating", "therapy"],
        specifications: {
          dimensions: '36" x 80" x 8"',
          weight: "25 lbs",
          weightCapacity: "350 lbs",
        },
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
        id: "dual-layer-mattress",
        name: "Dual-Layer Pressure Relief Mattress",
        description:
          "The dual-layer foam construction of this mattress is specifically designed for patient comfort and pressure injury prevention. It helps reduce and redistribute weight on pressure ulcers, making it ideal when preventing further skin damage is a priority.",
        price: 125,
        bundleId: "comfio-bundle",
        keywords: ["dual-layer", "foam", "mattress", "pressure", "relief", "medical", "grade", "antimicrobial"],
        specifications: {
          dimensions: '36" x 80" x 6"',
          weight: "20 lbs",
          weightCapacity: "350 lbs",
        },
        images: [
          {
            src: "/foam-mattress-main.png",
            alt: "High-density foam mattress",
            caption: "Medical-grade foam construction",
          },
          {
            src: "/dual-layer-mattress-main.webp",
            alt: "Dual-layer pressure relief mattress",
            caption: "Anti-Microbial Cover Included",
          },
        ],
        features: [
          "Dual-layer foam provides effective pressure reduction",
          "Convoluted top layer enhances comfort and airflow",
          "Ultra-soft nylon cover offers a smooth sleep surface",
          "Fluid-resistant cover protects against moisture and spills",
          "Antimicrobial properties help reduce the risk of infections",
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
        price: 65,
        bundleId: "comfio-bundle",
        keywords: ["overbed", "table", "adjustable", "height", "tilt", "rolling", "casters"],
        specifications: {
          dimensions: '30" x 15" surface',
          weight: "22 lbs",
          weightCapacity: "50 lbs",
        },
        images: [
          {
            src: "/new-overbed-table.jpg",
            alt: "Adjustable overbed table",
            caption: "Height and tilt adjustable design",
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
    ],
  },
]

function BundleIncludedButton({ bundleId }: { bundleId: string }) {
  const handleClick = () => {
    const element = document.getElementById(bundleId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold rounded-lg transition-colors duration-200 text-sm"
    >
      View Bundle →
    </button>
  )
}

function AddToBundleButton() {
  return (
    <button className="inline-flex items-center px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 font-semibold rounded-lg transition-colors duration-200 text-sm">
      Add to Bundle +
    </button>
  )
}

function GridProductContactOptions({ productName, productId }: { productName: string; productId: string }) {
  const encodedProductName = encodeURIComponent(productName)

  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4 mt-6">
      <h4 className="text-lg font-semibold text-blue-900 mb-3 text-center">Interested in {productName}?</h4>
      <div className="space-y-2">
        <Link
          href={`/contact?type=call&product=${encodedProductName}&productId=${productId}`}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-lg p-3 transition-all duration-200 group"
        >
          <span className="font-medium text-blue-800 group-hover:text-blue-900">📞 Schedule Call</span>
        </Link>

        <Link
          href={`/contact?type=video&product=${encodedProductName}&productId=${productId}`}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-lg p-3 transition-all duration-200 group"
        >
          <span className="font-medium text-blue-800 group-hover:text-blue-900">📹 Video Call</span>
        </Link>

        <Link
          href={`/contact?type=email&product=${encodedProductName}&productId=${productId}`}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300 rounded-lg p-3 transition-all duration-200 group"
        >
          <span className="font-medium text-blue-800 group-hover:text-blue-900">✉️ Email Us</span>
        </Link>
      </div>
    </div>
  )
}

function ProductCard({ item, category, viewMode }: { item: any; category: any; viewMode: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <div
        id={item.id}
        className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
          category.featured ? "ring-2 ring-blue-200" : ""
        }`}
      >
        {/* Bundle Ribbon - Horizontal from left to right */}
        {item.isBundle && (
          <div className="absolute top-0 left-0 right-0 z-10">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-bold text-center shadow-lg">
              BUNDLE DEAL
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/3 flex-shrink-0">
            <ProductImageGallery
              images={item.images || [{ src: item.image || "/placeholder.svg", alt: item.name }]}
              productName={item.name}
            />
          </div>

          {/* Content Section */}
          <div className={`lg:w-2/3 p-6 ${item.isBundle ? "pt-12" : ""}`}>
            {/* Product Name - Full Width */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.name}</h3>

              {/* Price and Status Tags - Full Width Below Name */}
              <div className="flex flex-wrap gap-2">
                {item.bundleAddon ? (
                  // Bundle Add-on Tags
                  <>
                    <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                      ${item.price} additional/month
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      Add to Bundle +
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      Bundle Add-on
                    </span>
                  </>
                ) : item.bundleId ? (
                  // Included in Bundle Tags
                  <>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      Included in Bundle
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      Individual: ${item.price}/month
                    </span>
                  </>
                ) : typeof item.price === "number" ? (
                  // Regular Pricing Tags
                  <>
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      ${item.price}/month
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      Rental Price
                    </span>
                  </>
                ) : null}
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Specifications */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">Specifications:</h4>
                <div className="space-y-2 text-sm">
                  {item.specifications.bedSize && (
                    <div>
                      <span className="font-medium text-gray-700">Bed Size:</span>
                      <span className="ml-2 text-gray-600">{item.specifications.bedSize}</span>
                    </div>
                  )}
                  {item.specifications.maxWeight && (
                    <div>
                      <span className="font-medium text-gray-700">Max Weight:</span>
                      <span className="ml-2 text-gray-600">{item.specifications.maxWeight}</span>
                    </div>
                  )}
                  {item.specifications.dimensions && (
                    <div>
                      <span className="font-medium text-gray-700">Dimensions:</span>
                      <span className="ml-2 text-gray-600">{item.specifications.dimensions}</span>
                    </div>
                  )}
                  {item.specifications.weight && (
                    <div>
                      <span className="font-medium text-gray-700">Weight:</span>
                      <span className="ml-2 text-gray-600">{item.specifications.weight}</span>
                    </div>
                  )}
                  {item.specifications.weightCapacity && (
                    <div>
                      <span className="font-medium text-gray-700">Weight Capacity:</span>
                      <span className="ml-2 text-gray-600">{item.specifications.weightCapacity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">Key Features:</h4>
                <ul className="space-y-2">
                  {item.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <ProductContactOptions productName={item.name} productId={item.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view - Normal readable sizes
  return (
    <div
      id={item.id}
      className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
        category.featured ? "ring-2 ring-blue-200" : ""
      }`}
    >
      {/* Bundle Ribbon - Horizontal from left to right */}
      {item.isBundle && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-bold text-center shadow-lg">
            BUNDLE DEAL
          </div>
        </div>
      )}

      <ProductImageGallery
        images={item.images || [{ src: item.image || "/placeholder.svg", alt: item.name }]}
        productName={item.name}
      />

      <div className={`p-6 ${item.isBundle ? "pt-8" : ""}`}>
        {/* Product Name - Full Width */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.name}</h3>

          {/* Price and Status Tags - Full Width Below Name */}
          <div className="flex flex-wrap gap-2">
            {item.bundleAddon ? (
              // Bundle Add-on Tags
              <>
                <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                  ${item.price} additional/month
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  Add to Bundle +
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Bundle Add-on
                </span>
              </>
            ) : item.bundleId ? (
              // Included in Bundle Tags
              <>
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  Included in Bundle
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Individual: ${item.price}/month
                </span>
              </>
            ) : typeof item.price === "number" ? (
              // Regular Pricing Tags
              <>
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  ${item.price}/month
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  Rental Price
                </span>
              </>
            ) : null}
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>

        {/* Specifications */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-3 text-lg">Specifications:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {item.specifications.bedSize && (
              <div>
                <span className="font-medium text-gray-700">Bed Size:</span>
                <span className="ml-2 text-gray-600">{item.specifications.bedSize}</span>
              </div>
            )}
            {item.specifications.maxWeight && (
              <div>
                <span className="font-medium text-gray-700">Max Weight:</span>
                <span className="ml-2 text-gray-600">{item.specifications.maxWeight}</span>
              </div>
            )}
            {item.specifications.dimensions && (
              <div>
                <span className="font-medium text-gray-700">Dimensions:</span>
                <span className="ml-2 text-gray-600">{item.specifications.dimensions}</span>
              </div>
            )}
            {item.specifications.weight && (
              <div>
                <span className="font-medium text-gray-700">Weight:</span>
                <span className="ml-2 text-gray-600">{item.specifications.weight}</span>
              </div>
            )}
            {item.specifications.weightCapacity && (
              <div>
                <span className="font-medium text-gray-700">Weight Capacity:</span>
                <span className="ml-2 text-gray-600">{item.specifications.weightCapacity}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-800 mb-3 text-lg">Key Features:</h4>
          <ul className="space-y-2">
            {item.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="text-gray-600 flex items-start">
                <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <GridProductContactOptions productName={item.name} productId={item.id} />
      </div>
    </div>
  )
}

export default function ProductsClientPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Get all categories for dropdown (excluding hidden ones)
  const categories = [
    { value: "all", label: "All Products" },
    { value: "hospital-bed-bundles", label: "Complete Care Bundles" },
    // { value: "hospital-beds", label: "Hospital Beds" }, // Hidden
    { value: "mattresses", label: "Medical Mattresses" },
    { value: "accessories", label: "Bed Accessories" },
  ]

  // Filter products based on search and category (excluding hidden categories)
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((category) => !category.hidden) // Filter out hidden categories

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((category) => category.id === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              item.name.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query) ||
              item.keywords?.some((keyword) => keyword.toLowerCase().includes(query)) ||
              item.features.some((feature) => feature.toLowerCase().includes(query)),
          ),
        }))
        .filter((category) => category.items.length > 0)
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const resetFilters = () => {
    setSelectedCategory("all")
    setSearchQuery("")
    setViewMode("grid")
  }

  const hasActiveFilters = selectedCategory !== "all" || searchQuery.trim() !== ""

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

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-900">Filter Products</h2>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
              >
                <X className="h-4 w-4" />
                Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* View Mode Toggle - Hidden on mobile */}
            <div className="hidden md:block">
              <label className="block text-sm font-semibold text-gray-700 mb-3">View Mode</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-colors duration-200 ${
                    viewMode === "grid" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-colors duration-200 ${
                    viewMode === "list" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <List className="h-5 w-5" />
                  List
                </button>
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Search Products</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, features, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {hasActiveFilters && (
          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              {filteredProducts.reduce((total, category) => total + category.items.length, 0)} product(s) found
              {selectedCategory !== "all" && (
                <span> in {categories.find((c) => c.value === selectedCategory)?.label}</span>
              )}
              {searchQuery.trim() && <span> matching "{searchQuery}"</span>}
            </p>
          </div>
        )}

        {/* Product Categories */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((category) => (
            <section key={category.id} id={category.id} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 relative inline-block">
                  {category.category}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"></div>
                </h2>
                {category.featured && (
                  <p className="text-lg text-blue-600 font-semibold mt-4">
                    🎯 Best Value - Everything You Need in One Package
                  </p>
                )}
              </div>

              <div
                className={
                  viewMode === "list"
                    ? "space-y-8"
                    : `grid gap-8 ${category.featured ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 xl:grid-cols-3"}`
                }
              >
                {category.items.map((item, index) => (
                  <ProductCard key={index} item={item} category={category} viewMode={viewMode} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

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
