export default function FeaturedImages() {
  const featuredImages = [
    {
      title: 'Premium Apartments',
      description: 'Luxurious flats in Uttam Nagar with modern amenities',
      image: 'https://images.unsplash.com/photo-1512917774080-9b274b3d0facb?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Builder Floors',
      description: 'Spacious builder floors designed for growing families',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Independent Houses',
      description: 'Standalone homes with private gardens in Dwarka',
      image: 'https://images.unsplash.com/photo-1494145904049-0dca7dc18a88?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Residential Plots',
      description: 'Prime locations available for personalized construction',
      image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section className="featured-section">
      <div className="section-head">
        <p className="eyebrow">Investment opportunities</p>
        <h2>Featured Properties & Locations</h2>
      </div>
      <div className="featured-grid">
        {featuredImages.map((item) => (
          <div key={item.title} className="featured-image-card">
            <img src={item.image} alt={item.title} />
            <div className="featured-image-overlay">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
