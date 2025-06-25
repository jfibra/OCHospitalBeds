import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    // Check if API key exists
    if (!process.env.NEXT_RESEND_API_KEY) {
      console.error("NEXT_RESEND_API_KEY environment variable is not set")
      return NextResponse.json(
        {
          error: "Email service configuration error",
          debug: "NEXT_RESEND_API_KEY not found in environment variables",
        },
        { status: 500 },
      )
    }

    // Create Resend client
    const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

    const body = await request.json()
    const { name, email, phone, contactMethod, message, inquiryType, product, currentUrl } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Name, email, and message are required",
          debug: "Missing required fields in request body",
        },
        { status: 400 },
      )
    }

    // Create email content
    const emailSubject = `New ${inquiryType || "General"} Inquiry from ${name}`

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Inquiry Type:</strong> ${inquiryType || "General Inquiry"}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Preferred Contact Method:</strong> ${contactMethod || "Email"}</p>
      ${product ? `<p><strong>Product Interest:</strong> ${product}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      ${currentUrl ? `<p><strong>Page URL:</strong> ${currentUrl}</p>` : ""}
      <hr>
      <p><em>Sent from OCHospitalBeds.com contact form</em></p>
    `

    console.log("Attempting to send email with Resend...")
    console.log("Subject:", emailSubject)

    // Send email using Resend's verified domain (temporary solution)
    const { data, error } = await resend.emails.send({
      from: "OCHospitalBeds <onboarding@resend.dev>", // Using Resend's verified domain
      to: ["info@ochospitalbeds.com"],
      subject: emailSubject,
      html: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email",
          debug: {
            resendError: error,
            apiKeyExists: !!process.env.NEXT_RESEND_API_KEY,
            apiKeyLength: process.env.NEXT_RESEND_API_KEY?.length || 0,
            note: "Using Resend's default domain (onboarding@resend.dev) - verify ochospitalbeds.com domain for custom sender",
          },
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: data?.id,
        debug: {
          success: true,
          emailId: data?.id,
          timestamp: new Date().toISOString(),
          note: "Email sent from onboarding@resend.dev - verify ochospitalbeds.com domain for custom sender",
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        debug: {
          errorMessage: error instanceof Error ? error.message : "Unknown error",
          errorStack: error instanceof Error ? error.stack : null,
          apiKeyExists: !!process.env.NEXT_RESEND_API_KEY,
        },
      },
      { status: 500 },
    )
  }
}

// Add a GET endpoint for testing Resend connection
export async function GET() {
  try {
    if (!process.env.NEXT_RESEND_API_KEY) {
      return NextResponse.json({
        status: "error",
        message: "NEXT_RESEND_API_KEY not found",
        debug: {
          envVarExists: false,
          timestamp: new Date().toISOString(),
        },
      })
    }

    const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

    // Test the connection by attempting to get domains
    try {
      const domains = await resend.domains.list()
      return NextResponse.json({
        status: "success",
        message: "Resend API connection successful",
        debug: {
          apiKeyExists: true,
          apiKeyLength: process.env.NEXT_RESEND_API_KEY.length,
          domainsCount: domains.data?.length || 0,
          domains: domains.data?.map((d) => ({ name: d.name, status: d.status })) || [],
          timestamp: new Date().toISOString(),
          note: "Using onboarding@resend.dev for now - add ochospitalbeds.com domain for custom sender",
        },
      })
    } catch (apiError) {
      return NextResponse.json({
        status: "error",
        message: "Resend API connection failed",
        debug: {
          apiKeyExists: true,
          apiKeyLength: process.env.NEXT_RESEND_API_KEY.length,
          error: apiError instanceof Error ? apiError.message : "Unknown API error",
          timestamp: new Date().toISOString(),
        },
      })
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Server error during connection test",
      debug: {
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
    })
  }
}
