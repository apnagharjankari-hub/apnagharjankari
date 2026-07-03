import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-copy">
        <div>
          <p className="property-tag">{property.category}</p>
          <h3>{property.title}</h3>
          <p className="property-location">{property.location}</p>
        </div>

        <div className="property-footer">
          <div>
            <strong>{property.price}</strong>
            <p>{property.area}</p>
          </div>
          <Link className="button button-sm" to={`/properties/${property.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
