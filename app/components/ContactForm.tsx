"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Phone, Video, Mail, Send } from "lucide-react"

interface ContactFormProps {
  initialType?: string
  initialProduct?: string
}

export default function ContactForm({ initialType, initialProduct }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "email",
    message: "",
    inquiryType: initialType || "general",
    product: initialProduct || "",
    currentUrl: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get("type")
    const product = urlParams.get("product")
    const productId = urlParams.get("productId")

    setFormData((prev) => ({
      ...prev,
      currentUrl: window.location.href,
      inquiryType: type || initialType || "general",
      product: product || initialProduct || "",
    }))
  }, [initialType, initialProduct])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          contactMethod: "email",
          message: "",
          inquiryType: initialType || "general",
          product: initialProduct || "",
          currentUrl: window.location.href,
        })

        // Track successful form submission with Google Analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "form_submit", {
            event_category: "Contact",
            event_label: formData.inquiryType || "general",
            value: 1,
          })
        }
      } else {
        setSubmitStatus("error")
        console.error("Form submission failed:", data.message || data.error)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const getFormTitle = () => {
    if (formData.product) {
      switch (initialType) {
        case "call":
          return `Schedule a Call About ${formData.product}`
        case "video":
          return `Video Consultation for ${formData.product}`
        case "email":
          return `Email About ${formData.product}`
        default:
          return `Contact Us About ${formData.product}`
      }
    }
    switch (initialType) {
      case "call":
        return "Schedule a Phone Call"
      case "video":
        return "Schedule a Video Consultation"
      case "email":
        return "Send Us an Email"
      default:
        return "Contact Us"
    }
  }

  const getFormIcon = () => {
    switch (initialType) {
      case "call":
        return <Phone className="text-blue-600" size={32} />
      case "video":
        return <Video className="text-blue-600" size={32} />
      case "email":
        return <Mail className="text-blue-600" size={32} />
      default:
        return <Send className="text-blue-600" size={32} />
    }
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {getFormIcon()}
        </div>
        <h2 className="text-3xl font-bold text-blue-900 mb-2">{getFormTitle()}</h2>
        <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully! ✅</h3>
          <p className="text-green-700">
            Thank you for contacting OCHospitalBeds! We've received your message and will respond within 24 hours. For
            urgent needs, please call us at (949) 298-6651.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Send Message</h3>
          <p className="text-red-700 mb-3">
            We're experiencing technical difficulties with our contact form. Please try one of these alternatives:
          </p>
          <div className="space-y-2">
            <p className="text-red-700">
              📞 <strong>Call us directly:</strong>{" "}
              <a href="tel:+1-949-298-6651" className="underline">
                (949) 298-6651
              </a>
            </p>
            <p className="text-red-700">
              ✉️ <strong>Email us:</strong>{" "}
              <a href="mailto:info@ochospitalbeds.com" className="underline">
                info@ochospitalbeds.com
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="(949) 298-6651"
            />
          </div>

          <div>
            <label htmlFor="contactMethod" className="block text-lg font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="either">Either</option>
            </select>
          </div>
        </div>

        {initialProduct && (
          <div>
            <label htmlFor="product" className="block text-lg font-medium text-gray-700 mb-2">
              Product Interest
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Product you're interested in"
            />
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us about your needs or ask any questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
