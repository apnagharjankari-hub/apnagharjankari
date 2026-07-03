import heroImage from '../assets/hero.png'
import logo from '../assets/logo.svg'

export default function Hero() {
  return (
    <section className="hero-section hero-promo">
      <div className="hero-copy">
        <img src={logo} alt="Apna Ghar Jankari logo" className="hero-logo" />
        <span className="eyebrow">Buy • Sell • Rent • Home Loan Assistance • Property Consultation</span>
        <h1>Find Your Dream Home in Uttam Nagar &amp; Dwarka, Delhi</h1>
        <p>
          Looking for a flat, builder floor, independent house, or plot in{' '}
          <strong>Uttam Nagar</strong> or <strong>Dwarka, Delhi</strong>?{' '}
          <strong>Apna Ghar Jankari.com</strong> helps you discover residential
          properties that match your budget and preferences, along with guidance
          throughout the buying process.
        </p>
        <div className="hero-badges">
          <span>Verified property information</span>
          <span>Affordable housing options</span>
          <span>Local property experts</span>
        </div>
        <div className="hero-actions">
          <a href="/properties" className="button button-primary">
            Explore Properties
          </a>
          <a href="/contact" className="button button-secondary">
            Get Consultation
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Modern home interior" />
      </div>
    </section>
  )
}
