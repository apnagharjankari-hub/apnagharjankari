import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="section-head">
        <p className="eyebrow">Get Free Property Consultation</p>
        <h2>Call or WhatsApp us today to schedule a site visit</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-copy">
          <p>
            <strong>Apna Ghar Jankari.com</strong> serves home buyers across{' '}
            <strong>Uttam Nagar, Dwarka, and nearby areas of Delhi</strong>.
          </p>
          <p>Flat No. 616, GF Akshardham Apartment</p>
          <p>Sector 19, Dwarka, Delhi</p>
          <p>📞 8448844840</p>
          <p>
            Share your budget, preferred location, and property type. We'll
            provide tailored property options and help you complete your purchase.
          </p>
          <p>
            Available services: property search, resale and new home listings,
            home loan guidance, paperwork support, and verified site visits.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
