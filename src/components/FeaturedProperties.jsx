import PropertyCard from './PropertyCard.jsx'
import { properties } from '../Data/properties.js'

export default function FeaturedProperties() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Featured properties</p>
        <h2>Homes ready for a new family</h2>
      </div>
      <div className="property-grid">
        {properties.slice(0, 3).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
