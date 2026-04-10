import type { Metadata } from "next"
import { SITE } from "@/lib/site"

interface PageMetadataOptions {
  title: string
  description: string
  path: "/" | "/about" | "/contact" | "/products"
  image?: string
  keywords?: string[]
}

export function buildPageMetadata({ title, description, path, image = "/hero-image.png", keywords = [] }: PageMetadataOptions): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}