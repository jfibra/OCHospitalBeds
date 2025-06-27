import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"

export const metadata: Metadata = {
  title: "Medical Equipment Rentals | Hospital Beds & Accessories | OC Hospital Beds",
  description:
    "Rent quality hospital beds, medical mattresses, and accessories for home care. Professional delivery and setup in Orange County. Call (949) 298-6651 for free consultation.",
  keywords: [
    "hospital bed rental",
    "medical equipment rental",
    "home care beds",
    "pressure relief mattress",
    "overbed table",
    "Orange County medical rentals",
  ],
  openGraph: {
    title: "Medical Equipment Rentals | OC Hospital Beds",
    description:
      "Quality hospital beds and medical equipment rentals for your home care needs. Professional delivery and setup.",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Medical equipment rentals",
      },
    ],
  },
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
