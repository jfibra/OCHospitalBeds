import ContactForm from "../components/ContactForm"
import ResendDebugger from "../components/ResendDebugger"

const ContactPageClient = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">We'd love to hear from you! Please use the form below to get in touch.</p>
      <ContactForm />
      <ResendDebugger />
    </div>
  )
}

export default ContactPageClient
