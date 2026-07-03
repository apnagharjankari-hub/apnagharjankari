const benefits = [
  'Verified property information',
  'Affordable housing options',
  'Site visit support and local expertise',
  'Transparent property guidance from start to finish',
]

const locations = [
  'Uttam Nagar East',
  'Uttam Nagar West',
  'Dwarka Sector 1',
  'Dwarka Sector 2',
  'Dwarka Sector 3',
  'Dwarka Sector 4',
  'Dwarka Sector 5',
  'Dwarka Sector 6',
  'Dwarka Sector 7',
  'Dwarka Sector 8',
  'Dwarka Sector 9',
  'Dwarka Sector 10',
  'Dwarka Sector 11',
  'Dwarka Sector 12',
  'Dwarka Sector 13',
  'Dwarka Sector 14',
  'Dwarka Sector 16',
  'Dwarka Sector 17',
  'Dwarka Sector 18',
  'Dwarka Sector 19',
  'Dwarka Sector 21',
  'Nawada',
  'Kakrola',
  'Matiala',
  'Mohan Garden',
  'Bindapur',
]

export default function WhyChooseUs() {
  return (
    <section className="section reasons-section">
      <div className="section-head">
        <p className="eyebrow">Why choose Apna Ghar Jankari.com</p>
        <h2>Local property experts for Uttam Nagar and Dwarka</h2>
      </div>
      <div className="reasons-grid">
        {benefits.map((item) => (
          <article key={item} className="card reason-card">
            <p>{item}</p>
          </article>
        ))}
      </div>
      <div className="section-head location-head">
        <h3>Popular locations we cover</h3>
      </div>
      <div className="locations-grid">
        {locations.map((location) => (
          <span key={location} className="location-chip">
            {location}
          </span>
        ))}
      </div>
    </section>
  )
}
