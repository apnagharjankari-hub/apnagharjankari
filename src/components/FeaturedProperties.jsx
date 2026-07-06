import { motion } from 'framer-motion'
import { HiCheckBadge, HiHomeModern } from 'react-icons/hi2'

const properties = [
  {
    id: 1,
    title: 'Sunrise Luxury Apartment',
    location: 'Uttam Nagar East',
    price: '₹ 2.1 Cr',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Modern Builder Floor',
    location: 'Dwarka Sector 21',
    price: '₹ 1.75 Cr',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Independent House',
    location: 'Mohan Garden',
    price: '₹ 3.4 Cr',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
]

export default function FeaturedProperties() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Featured properties</p>
          <h2 className='mt-3 text-3xl font-semibold text-slate-950'>Premium homes for every lifestyle</h2>
        </div>
        <div className='inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3'>
          <HiCheckBadge className='h-5 w-5 text-orange-500' />
          <span className='text-sm font-medium text-slate-700'>Verified listings</span>
        </div>
      </div>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {properties.map((property, index) => (
          <motion.article
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className='group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm'
          >
            <div className='relative overflow-hidden'>
              <img src={property.image} alt={property.title} className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 py-4 text-white'>
                <p className='text-sm font-medium uppercase tracking-[0.24em] text-slate-200'>4 BHK</p>
              </div>
            </div>
            <div className='space-y-4 p-6'>
              <div className='flex items-center gap-3 text-slate-500'>
                <HiHomeModern className='h-5 w-5 text-orange-500' />
                <span className='text-sm font-medium'>{property.location}</span>
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold text-slate-950'>{property.title}</h3>
                <p className='text-sm text-slate-500'>A modern residence near parks and transit in the heart of the city.</p>
              </div>
              <div className='flex items-center justify-between text-slate-900'>
                <p className='text-lg font-semibold'>{property.price}</p>
                <button className='rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800'>View Details</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
