import { SITE, SITE_CONTACT } from "@/lib/site"

const schemaProducts = [
  {
    id: "comfio-bundle",
    name: "Comfio Home Care Bundle",
    description:
      "Complete home care bundle with hospital bed rental, pressure relief mattress, and adjustable overbed table for long-term care and recovery.",
    category: "Hospital Bed Rental Bundle",
    image: "/comfio-bundle-offer-primary.png",
    price: 450,
  },
  {
    id: "professional-bundle",
    name: "Professional Care Bundle",
    description:
      "Advanced hospital bed rental bundle with pressure relief mattress, overbed table, and premium safety features for home recovery.",
    category: "Hospital Bed Rental Bundle",
    image: "/professional-bundle-primary-new.png",
    price: 600,
  },
  {
    id: "evenda-comfio",
    name: "Evenda Comfio Home Care Bed",
    description:
      "Home-style hospital bed rental with quiet operation, wood-finish design, and easy positioning for caregivers and patients.",
    category: "Hospital Bed Rental",
    image: "/evenda-bed-main.jpg",
    price: 275,
  },
  {
    id: "stryker-hospital-bed",
    name: "Professional Hospital Bed",
    description:
      "Medical-grade hospital bed rental with advanced safety features, side rails, and professional patient support for home care.",
    category: "Hospital Bed Rental",
    image: "/professional-hospital-bed-main.png",
    price: 425,
  },
  {
    id: "pressure-relief-mattress",
    name: "AtmosAir Velaris Pressure Relief Mattress",
    description:
      "Pressure relief mattress rental designed for comfort, skin protection, and low-friction patient support in home care settings.",
    category: "Medical Mattress Rental",
    image: "/pressure-relief-mattress-main.png",
    price: 350,
  },
  {
    id: "dual-layer-mattress",
    name: "Dual-Layer Pressure Relief Mattress",
    description:
      "Medical mattress rental with dual-layer foam support and pressure redistribution for recovery, elderly care, and extended use.",
    category: "Medical Mattress Rental",
    image: "/dual-layer-mattress-main.webp",
    price: 125,
  },
  {
    id: "overbed-table",
    name: "Adjustable Overbed Table",
    description:
      "Adjustable overbed table rental for meals, reading, and bedside use during home recovery and long-term care.",
    category: "Hospital Bed Accessory Rental",
    image: "/new-overbed-table.jpg",
    price: 65,
  },
]

export default function ProductCatalogStructuredData() {
  const url = `${SITE.url}/products`

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hospital Bed Rental and Medical Equipment Catalog",
    url,
    itemListElement: schemaProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${url}#${product.id}`,
      item: {
        "@type": "Product",
        name: product.name,
        category: product.category,
        description: product.description,
        image: `${SITE.url}${product.image}`,
      },
    })),
  }

  const productSchemas = schemaProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    description: product.description,
    image: `${SITE.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: SITE.shortName,
    },
    offers: {
      "@type": "Offer",
      url: `${url}#${product.id}`,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "MedicalBusiness",
        name: SITE.shortName,
        telephone: SITE_CONTACT.phonePlain,
      },
    },
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([itemListSchema, ...productSchemas]),
      }}
    />
  )
}