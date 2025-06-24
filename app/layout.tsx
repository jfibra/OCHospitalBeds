import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import PageTransition from "./components/PageTransition"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "OCHospitalBeds.com - Hospital Bed Rentals in Chicago, IL",
  description:
    "Reliable hospital bed and home medical equipment rentals delivered to your home in Chicago, Illinois. Serving seniors, caregivers, and families with quality medical equipment.",
  keywords: "hospital bed rental, medical equipment rental, Chicago, Illinois, home healthcare, senior care",
  openGraph: {
    title: "OCHospitalBeds.com - Hospital Bed Rentals in Chicago, IL",
    description:
      "Reliable hospital bed and home medical equipment rentals delivered to your home in Chicago, Illinois.",
    url: "https://ochospitalbeds.com",
    siteName: "OCHospitalBeds.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCHospitalBeds.com - Hospital Bed Rentals in Chicago, IL",
    description:
      "Reliable hospital bed and home medical equipment rentals delivered to your home in Chicago, Illinois.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-900`}>
        <PageTransition />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
