export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "OCHospitalBeds",
    description: "Professional hospital bed and medical equipment rentals in Southern California",
    url: "https://ochospitalbeds.com",
    telephone: "+1-949-298-6651",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
      addressLocality: "Southern California",
    },
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
    logo: "https://ochospitalbeds.com/logo.png",
    image: "https://ochospitalbeds.com/hero-image.png",
    sameAs: ["https://www.facebook.com/ochospitalbeds", "https://www.linkedin.com/company/ochospitalbeds"],
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Medical Equipment Rental",
    provider: {
      "@type": "MedicalBusiness",
      name: "OCHospitalBeds",
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
