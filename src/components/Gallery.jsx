import { motion } from 'framer-motion'

const items = [
  { title: 'Luxury interiors', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { title: 'Contemporary kitchens', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
  { title: 'Elegant bedrooms', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80' },
  { title: 'Outdoor terraces', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
]

export default function Gallery() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='mb-10 space-y-3'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Gallery</p>
        <h2 className='text-3xl font-semibold text-slate-950'>See the homes and lifestyle</h2>
      </div>
      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className='group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm'
          >
            <div className='overflow-hidden'>
              <img src={item.image} alt={item.title} className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />
            </div>
            <div className='space-y-2 p-5'>
              <h3 className='text-xl font-semibold text-slate-950'>{item.title}</h3>
              <p className='text-sm leading-7 text-slate-600'>Beautifully designed interiors and premium finishes curated for modern family living.</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
