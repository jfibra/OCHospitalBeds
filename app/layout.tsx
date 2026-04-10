import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import PageTransition from "./components/PageTransition"
import { GoogleTagManagerBody, GoogleTagManagerHead } from "./components/GoogleTagManager"
import { Suspense } from "react"
import { SITE } from "@/lib/site"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Hospital Bed Rental in Southern California",
    template: "%s | OCHospitalBeds.com",
  },
  applicationName: "OCHospitalBeds.com",
  description: SITE.description,
  keywords: [
    "hospital bed rental",
    "medical equipment rental",
    "Southern California",
    "Orange County",
    "Los Angeles",
    "San Diego",
    "home healthcare",
    "senior care",
    "medical bed rental",
    "adjustable bed rental",
    "pressure relief mattress",
    "overbed table",
    "trapeze bar",
    "mobility aids",
  ].join(", "),
  authors: [{ name: "OCHospitalBeds Team" }],
  creator: "OCHospitalBeds.com",
  publisher: "OCHospitalBeds.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "Hospital Bed Rental in Southern California",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "OCHospitalBeds - Medical Equipment Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Bed Rental in Southern California",
    description: SITE.description,
    images: ["/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Healthcare",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerHead />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Southern California" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
      </head>
      <body className={`${poppins.className} bg-white text-gray-900`}>
        <GoogleTagManagerBody />
        <PageTransition />
        <Header />
        <Suspense>
          <main className="min-h-screen">{children}</main>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
