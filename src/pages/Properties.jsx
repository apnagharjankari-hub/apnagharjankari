import { properties } from '../Data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'

export default function Properties() {
  return (
    <section className="section property-page">
      <div className="section-head">
        <p className="eyebrow">Property listings</p>
        <h2>Available homes for sale</h2>
      </div>
      <div className="property-grid full-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
