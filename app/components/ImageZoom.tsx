"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import { createPortal } from "react-dom"

interface ProductImage {
  src: string
  alt: string
  caption?: string
}

interface ImageZoomProps {
  images: ProductImage[]
  initialIndex: number
  productName: string
  onClose: () => void
}

export default function ImageZoom({ images, initialIndex, productName, onClose }: ImageZoomProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  const currentImage = images[currentIndex]

  useEffect(() => {
    setMounted(true)
    // Lock body scroll
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          if (images.length > 1) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
            resetZoom()
          }
          break
        case "ArrowRight":
          if (images.length > 1) {
            setCurrentIndex((prev) => (prev + 1) % images.length)
            resetZoom()
          }
          break
        case "+":
        case "=":
          zoomIn()
          break
        case "-":
          zoomOut()
          break
        case "0":
          resetZoom()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [images.length, onClose])

  const zoomIn = () => {
    setScale((prev) => Math.min(prev * 1.5, 5))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev / 1.5, 0.5))
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      resetZoom()
    }
  }

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      resetZoom()
    }
  }

  if (!mounted) return null

  const modal = (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between p-6">
          <div className="text-white">
            <h3 className="text-xl font-semibold">{currentImage.alt}</h3>
            {currentImage.caption && <p className="text-gray-300 text-sm mt-1">{currentImage.caption}</p>}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white text-sm bg-black/30 px-3 py-1 rounded-full">{Math.round(scale * 100)}%</div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-20 right-6 z-10 flex flex-col gap-2">
        <button
          onClick={zoomIn}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          title="Zoom In (+)"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button
          onClick={zoomOut}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          title="Zoom Out (-)"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={resetZoom}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          title="Reset Zoom (0)"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            title="Previous Image (←)"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            title="Next Image (→)"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}
      >
        <div
          ref={imageRef}
          className={`relative transition-transform duration-200 ease-out ${
            scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
          }`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          onClick={scale === 1 ? zoomIn : undefined}
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={800}
            height={600}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            crossOrigin="anonymous"
            priority
          />
        </div>
      </div>

      {/* Drag Hint */}
      {scale > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {isDragging ? "Dragging..." : "Click and drag to pan"}
        </div>
      )}

      {/* Keyboard Shortcuts */}
      <div className="absolute bottom-6 right-6 z-10 bg-black/50 text-white p-3 rounded-lg text-xs space-y-1">
        <div>ESC: Close</div>
        <div>+/-: Zoom</div>
        <div>0: Reset</div>
        {images.length > 1 && <div>←/→: Navigate</div>}
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-6 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} of {images.length}
        </div>
      )}
    </div>
  )

  return createPortal(modal, document.body)
}
