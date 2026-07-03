import { useParams, Link } from 'react-router-dom'
import { properties } from '../Data/properties.js'

export default function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find((item) => item.id === Number(id))

  if (!property) {
    return (
      <section className="section">
        <h2>Property not found</h2>
        <p>We could not find the home you requested.</p>
        <Link className="button button-secondary" to="/properties">
          Back to listings
        </Link>
      </section>
    )
  }

  return (
    <section className="section property-details">
      <div className="detail-grid">
        <img src={property.image} alt={property.title} />
        <div>
          <p className="eyebrow">{property.category}</p>
          <h2>{property.title}</h2>
          <p className="property-location">{property.location}</p>
          <p className="detail-price">{property.price}</p>
          <p>{property.description}</p>
          <div className="detail-meta">
            <span>{property.beds} beds</span>
            <span>{property.baths} baths</span>
            <span>{property.area}</span>
            <span>{property.parking}</span>
          </div>
          <div className="detail-actions">
            <a
              className="button button-primary"
              href="https://wa.me/918448844840"
              target="_blank"
              rel="noreferrer"
            >
              Request a tour
            </a>
            <Link className="button button-secondary" to="/properties">
              View all properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
