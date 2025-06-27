import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"

export const metadata: Metadata = {
  title: "Medical Equipment Rentals | OC Hospital Beds - Hospital Beds & Accessories",
  description:
    "Rent quality hospital beds, medical mattresses, and accessories for home care. Professional delivery and setup throughout Orange County. Call (949) 298-6651 for pricing.",
  keywords: [
    "hospital bed rental",
    "medical equipment rental",
    "home care beds",
    "pressure relief mattress",
    "overbed table rental",
    "Orange County medical equipment",
    "hospital bed delivery",
    "medical bed rental",
  ],
  openGraph: {
    title: "Medical Equipment Rentals | OC Hospital Beds",
    description:
      "Quality hospital beds and medical equipment rentals for home care. Professional delivery and setup in Orange County.",
    type: "website",
    url: "https://ochospitalbeds.com/products",
    images: [
      {
        url: "/comfio-bundle-primary.png",
        width: 1200,
        height: 630,
        alt: "Medical equipment rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Equipment Rentals | OC Hospital Beds",
    description:
      "Quality hospital beds and medical equipment rentals for home care. Professional delivery and setup in Orange County.",
    images: ["/comfio-bundle-primary.png"],
  },
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
