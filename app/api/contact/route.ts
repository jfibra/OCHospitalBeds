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
          message: "Email service is not properly configured. Please try calling us directly at (949) 298-6651.",
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
          error: "Missing required fields",
          message: "Please fill in your name, email, and message.",
        },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Invalid email format",
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      )
    }

    // Create email content
    const emailSubject = `New ${inquiryType || "General"} Inquiry from ${name} - OCHospitalBeds.com`

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e40af; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #64748b; margin: 10px 0 0 0;">OCHospitalBeds.com</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Inquiry Type:</td>
                <td style="padding: 8px 0; color: #1f2937;">${inquiryType || "General Inquiry"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Contact Method:</td>
                <td style="padding: 8px 0; color: #1f2937;">${contactMethod || "Email"}</td>
              </tr>
              ${
                product
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Product Interest:</td>
                <td style="padding: 8px 0; color: #1f2937;">${product}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px;">Message:</h3>
            <div style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          ${
            currentUrl
              ? `
          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <strong>Page URL:</strong> <a href="${currentUrl}" style="color: #2563eb;">${currentUrl}</a>
            </p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">
              <strong>Submitted:</strong> ${new Date().toLocaleString("en-US", {
                timeZone: "America/Los_Angeles",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
          </div>
          `
              : ""
          }
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">
            This email was sent from the OCHospitalBeds.com contact form
          </p>
        </div>
      </div>
    `

    console.log("Attempting to send email with Resend...")
    console.log("Subject:", emailSubject)
    console.log("From email: info@ochospitalbeds.com")

    // Send email using your verified domain
    const { data, error } = await resend.emails.send({
      from: "OCHospitalBeds Contact Form <info@ochospitalbeds.com>",
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
          message:
            "We're experiencing technical difficulties. Please call us directly at (949) 298-6651 or email info@ochospitalbeds.com.",
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll get back to you within 24 hours.",
        id: data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Something went wrong. Please try again or call us at (949) 298-6651.",
      },
      { status: 500 },
    )
  }
}

// Health check endpoint
export async function GET() {
  try {
    if (!process.env.NEXT_RESEND_API_KEY) {
      return NextResponse.json({
        status: "error",
        message: "Email service not configured",
      })
    }

    return NextResponse.json({
      status: "success",
      message: "Contact form service is ready",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Service unavailable",
    })
  }
}
