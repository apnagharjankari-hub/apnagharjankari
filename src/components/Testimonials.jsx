const reviews = [
  {
    name: 'Priya Sharma',
    quote:
      'Apna Ghar Jankari helped us find a superb home in Dwarka with fast support and transparent pricing.',
  },
  {
    name: 'Ankit Verma',
    quote:
      'The team made the buying process easy and provided excellent guidance for a first-time purchase.',
  },
  {
    name: 'Neha Gupta',
    quote:
      'Their local expertise meant we found the right property close to schools and metro stations.',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-head">
        <p className="eyebrow">Customer stories</p>
        <h2>Trusted by homeowners across West Delhi</h2>
      </div>
      <div className="testimonial-grid">
        {reviews.map((review) => (
          <article key={review.name} className="card card-light testimonial-card">
            <p>“{review.quote}”</p>
            <strong>{review.name}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}
