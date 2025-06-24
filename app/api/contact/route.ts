import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    // Lazily create the Resend client – avoids build-time crash if the env
    // var isn’t injected during static compilation.
    const resend = new Resend(process.env.NEXT_RESEND_API_KEY!)

    const body = await request.json()
    const { name, email, phone, contactMethod, message, inquiryType, product, currentUrl } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "OCHospitalBeds <noreply@ochospitalbeds.com>",
      to: ["info@ochospitalbeds.com"],
      subject: emailSubject,
      html: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
