import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - OCHospitalBeds.com | Chicago Medical Equipment Rentals",
  description:
    "Contact OCHospitalBeds.com for hospital bed and medical equipment rentals in Chicago, Illinois. Schedule a call, video consultation, or send us an email.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
