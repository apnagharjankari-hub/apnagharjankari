const propertyTypes = [
  '1 BHK Flats',
  '2 BHK Flats',
  '3 BHK Flats',
  'Builder Floors',
  'Independent Houses',
  'Residential Plots',
  'Ready-to-Move Properties',
  'Under-Construction Projects',
]

export default function PropertyTypes() {
  return (
    <section className="section property-types-section">
      <div className="section-head">
        <p className="eyebrow">Property types available</p>
        <h2>Find the right home for your budget</h2>
      </div>
      <div className="feature-grid">
        {propertyTypes.map((type) => (
          <article key={type} className="card card-light">
            <h3>{type}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
