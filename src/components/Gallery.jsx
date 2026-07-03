const galleryItems = [
  { title: 'Modern living room', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Elegant kitchen', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Cozy bedroom', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Open balcony', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
]

export default function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="section-head">
        <p className="eyebrow">Explore our spaces</p>
        <h2>See the homes and lifestyle</h2>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
