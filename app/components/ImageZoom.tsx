"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, RotateCcw, Move } from "lucide-react"
import { createPortal } from "react-dom"

interface ImageZoomProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageZoom({ src, alt, width, height, className = "" }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = useCallback(() => {
    setIsOpen(true)
    setScale(1)
    setPosition({ x: 0, y: 0 })
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setIsDragging(false)
    // Restore body scroll
    document.body.style.overflow = "unset"
  }, [])

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.5, 5))
  }, [])

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.5, 0.5))
  }, [])

  const resetZoom = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale > 1) {
        setIsDragging(true)
        setDragStart({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        })
        e.preventDefault()
      }
    },
    [scale, position],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && scale > 1) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    },
    [isDragging, scale, dragStart],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      if (e.deltaY < 0) {
        zoomIn()
      } else {
        zoomOut()
      }
    },
    [zoomIn, zoomOut],
  )

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeModal()
          break
        case "+":
        case "=":
          e.preventDefault()
          zoomIn()
          break
        case "-":
          e.preventDefault()
          zoomOut()
          break
        case "0":
          e.preventDefault()
          resetZoom()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, closeModal, zoomIn, zoomOut, resetZoom])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const lightboxContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center"
      style={{ backdropFilter: "blur(2px)" }}
    >
      {/* Controls Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-50 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Image info */}
          <div className="text-white">
            <h3 className="text-lg font-semibold">{alt}</h3>
            <p className="text-sm opacity-75">Click and drag to move • Scroll to zoom</p>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-3">
            {/* Zoom Level */}
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1">
              <span className="text-white text-sm font-medium">{Math.round(scale * 100)}%</span>
            </div>

            {/* Zoom Out */}
            <button
              onClick={zoomOut}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all duration-200"
              aria-label="Zoom out"
              title="Zoom out (-)"
            >
              <ZoomOut className="text-white" size={20} />
            </button>

            {/* Zoom In */}
            <button
              onClick={zoomIn}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all duration-200"
              aria-label="Zoom in"
              title="Zoom in (+)"
            >
              <ZoomIn className="text-white" size={20} />
            </button>

            {/* Reset */}
            <button
              onClick={resetZoom}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all duration-200"
              aria-label="Reset zoom"
              title="Reset zoom (0)"
            >
              <RotateCcw className="text-white" size={20} />
            </button>

            {/* Close */}
            <button
              onClick={closeModal}
              className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 rounded-lg p-2 transition-all duration-200"
              aria-label="Close"
              title="Close (Esc)"
            >
              <X className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
        }}
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
          }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={Math.min(width * 2, 1200)}
            height={Math.min(height * 2, 800)}
            className="max-w-none select-none"
            priority
            draggable={false}
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Drag hint */}
        {scale > 1 && !isDragging && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2">
            <Move size={16} />
            Drag to move around
          </div>
        )}
      </div>

      {/* Keyboard shortcuts help */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-lg text-xs">
        <div className="space-y-1">
          <div>
            <kbd className="bg-white bg-opacity-20 px-1 rounded">+/-</kbd> Zoom
          </div>
          <div>
            <kbd className="bg-white bg-opacity-20 px-1 rounded">0</kbd> Reset
          </div>
          <div>
            <kbd className="bg-white bg-opacity-20 px-1 rounded">Esc</kbd> Close
          </div>
        </div>
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModal()
          }
        }}
      />
    </div>
  )

  return (
    <>
      {/* Clickable Image */}
      <div className="relative group cursor-pointer" onClick={openModal}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`${className} transition-all duration-300 group-hover:brightness-110 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
            <ZoomIn className="text-blue-600" size={24} />
          </div>
        </div>
        {/* Click to view text */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view full size
        </div>
      </div>

      {/* Portal for full-screen lightbox */}
      {mounted && isOpen && createPortal(lightboxContent, document.body)}
    </>
  )
}
