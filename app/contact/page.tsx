import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Our Southern California Hospital Bed Rental Team",
  description:
    "Contact OCHospitalBeds for hospital bed rental pricing, delivery and setup questions, and medical equipment availability across Southern California.",
  path: "/contact",
  image: "/hero-image.png",
  keywords: [
    "contact hospital bed rental orange county",
    "hospital bed pricing southern california",
    "medical equipment delivery contact",
    "hospital bed setup support",
  ],
})


export default function ContactPage() {
  return <ContactPageClient />
}
