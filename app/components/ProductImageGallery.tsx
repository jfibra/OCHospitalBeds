"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import ImageZoom from "./ImageZoom"

interface ProductImage {
  src: string
  alt: string
  caption?: string
}

interface ProductImageGalleryProps {
  images: ProductImage[]
  productName: string
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showZoom, setShowZoom] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const currentImage = images[currentImageIndex]

  return (
    <div className="relative">
      {/* Main Image Container - Square Aspect Ratio */}
      <div className="relative aspect-square w-full bg-gray-100 rounded-t-2xl overflow-hidden group">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={currentImageIndex === 0}
        />

        {/* Zoom Button */}
        <button
          onClick={() => setShowZoom(true)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Zoom image"
        >
          <ZoomIn className="h-4 w-4" />
        </button>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation - Only show if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-2 p-4 bg-gray-50 rounded-b-2xl overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentImageIndex
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}

      {/* Image Caption */}
      {currentImage.caption && (
        <div className="px-4 py-2 bg-gray-50 text-sm text-gray-600 text-center border-t">{currentImage.caption}</div>
      )}

      {/* Zoom Modal */}
      {showZoom && (
        <ImageZoom
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          onClose={() => setShowZoom(false)}
        />
      )}
    </div>
  )
}
