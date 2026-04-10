import { SITE, SITE_CONTACT } from "@/lib/site"

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE_CONTACT.phonePlain,
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
      addressLocality: "Southern California",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONTACT.phonePlain,
      contactType: "customer service",
      areaServed: "Southern California",
      availableLanguage: "English",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "State",
        name: "California",
        containsPlace: [
          { "@type": "AdministrativeArea", name: "Orange County" },
          { "@type": "AdministrativeArea", name: "Los Angeles County" },
          { "@type": "AdministrativeArea", name: "San Diego County" },
          { "@type": "AdministrativeArea", name: "Riverside County" },
          { "@type": "AdministrativeArea", name: "San Bernardino County" },
        ],
      },
    ],
    serviceType: "Medical Equipment Rental",
    medicalSpecialty: "Home Healthcare Equipment",
    priceRange: "$$",
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/hero-image.png`,
    sameAs: ["https://www.facebook.com/ochospitalbeds", "https://www.linkedin.com/company/ochospitalbeds"],
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Medical Equipment Rental",
    provider: {
      "@type": "MedicalBusiness",
      name: SITE.shortName,
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medical Equipment Rentals",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Hospital Bed Rental",
            description: "Professional hospital beds for home care",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Medical Mattress Rental",
            description: "Pressure relief and foam mattresses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Medical Accessories Rental",
            description: "Overbed tables, trapeze bars, and mobility aids",
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
    </>
  )
}
