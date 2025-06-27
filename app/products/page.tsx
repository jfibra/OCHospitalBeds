import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"

export const metadata: Metadata = {
  title: "Medical Equipment Rentals | Hospital Beds & Accessories | OC Hospital Beds",
  description:
    "Rent quality hospital beds, medical mattresses, and accessories for home care. Professional delivery, setup, and 24/7 support throughout Orange County and surrounding areas.",
  keywords: [
    "hospital bed rental",
    "medical equipment rental",
    "home care beds",
    "pressure relief mattress",
    "overbed table",
    "Orange County",
    "medical supplies",
    "patient care equipment",
  ],
  openGraph: {
    title: "Medical Equipment Rentals | Hospital Beds & Accessories",
    description:
      "Quality hospital beds and medical equipment rentals for your home care needs. Professional delivery and setup included.",
    type: "website",
    url: "https://ochospitalbeds.com/products",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Medical Equipment Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Equipment Rentals | Hospital Beds & Accessories",
    description:
      "Quality hospital beds and medical equipment rentals for your home care needs. Professional delivery and setup included.",
    images: ["/hero-image.png"],
  },
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
