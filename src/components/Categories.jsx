const categories = [
  {
    title: 'Flats & Apartments',
    description: 'Find 1 BHK, 2 BHK, 3 BHK, and premium apartments in Uttam Nagar and Dwarka.',
  },
  {
    title: 'Builder Floors',
    description: 'Explore newly constructed builder floors in prime residential areas.',
  },
  {
    title: 'Independent Houses',
    description: 'Choose from ready-to-move and resale independent homes.',
  },
  {
    title: 'Residential Plots',
    description: 'Discover plots suitable for residential construction and investment.',
  },
  {
    title: 'Home Loan Assistance',
    description: 'Support for financing options through leading banks and institutions.',
  },
]

export default function Categories() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Our services</p>
        <h2>Your one-stop property partner</h2>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article key={category.title} className="card card-light">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
