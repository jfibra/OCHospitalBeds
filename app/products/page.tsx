import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"
import ProductCatalogStructuredData from "../components/ProductCatalogStructuredData"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Hospital Bed Rental Products in Southern California",
  description:
    "Compare hospital bed rental bundles, professional home care beds, medical mattresses, and bedside accessories with delivery and setup across Southern California.",
  path: "/products",
  image: "/comfio-bundle-offer-primary.png",
  keywords: [
    "hospital bed rental products southern california",
    "hospital bed rental orange county",
    "medical mattress rental los angeles",
    "overbed table rental southern california",
    "hospital bed delivery and setup",
  ],
})

export default function ProductsPage() {
  return (
    <>
      <ProductCatalogStructuredData />
      <ProductsClientPage />
    </>
  )
}
