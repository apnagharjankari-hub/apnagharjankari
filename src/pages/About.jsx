import WhyChooseUs from '../components/WhyChooseUs.jsx'

export default function About() {
  return (
    <section className="section about-page">
      <div className="section-head">
        <p className="eyebrow">About us</p>
        <h2>Local experts, trusted service</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>
            Apna Ghar Jankari is a Delhi-based residential real estate partner
            for buyers, investors, and families. We focus on Uttam Nagar,
            Dwarka and neighboring neighborhoods to provide verified listings and
            clear property guidance.
          </p>
          <p>
            Our priority is helping you move into a home that fits your lifestyle,
            budget, and long-term goals.
          </p>
        </div>
        <div>
          <h3>What sets us apart</h3>
          <ul>
            <li>Experienced local agents in West Delhi</li>
            <li>Transparent negotiation &amp; paperwork help</li>
            <li>Verified listings with immediate availability</li>
            <li>Personalized home tours and follow-up service</li>
          </ul>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  )
}
