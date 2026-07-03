const steps = [
  {
    title: 'Share your requirements',
    description: 'Tell us your budget, location preference, and property type.',
  },
  {
    title: 'Receive curated options',
    description: 'We match you with suitable properties and provide transparent details.',
  },
  {
    title: 'Schedule a visit',
    description: 'Book site visits with our local team for the properties you like.',
  },
  {
    title: 'Complete the purchase',
    description: 'Get expert guidance through paperwork, negotiation, and closing.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="section-head">
        <p className="eyebrow">How it works</p>
        <h2>Buy your home with confidence</h2>
      </div>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="card step-card">
            <span className="step-number">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
