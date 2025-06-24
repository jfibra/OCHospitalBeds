"use client"

import { useState } from "react"
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
  const [selectedImage, setSelectedImage] = useState(0)

  if (images.length === 1) {
    return (
      <div className="relative">
        <ImageZoom
          src={images[0].src || "/placeholder.svg"}
          alt={images[0].alt}
          width={400}
          height={250}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        {images[0].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm font-medium">{images[0].caption}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative">
        <ImageZoom
          src={images[selectedImage].src || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          width={400}
          height={250}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        {images[selectedImage].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm font-medium">{images[selectedImage].caption}</p>
          </div>
        )}
        {/* Image counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="px-6 pb-4">
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === index
                    ? "border-blue-500 ring-2 ring-blue-200 scale-105"
                    : "border-gray-200 hover:border-blue-300 hover:scale-102"
                }`}
              >
                <ImageZoom
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={100}
                  height={60}
                  className="w-full h-16 object-cover"
                />
                {/* Selected indicator */}
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
