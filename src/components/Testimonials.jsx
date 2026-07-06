import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'

const testimonials = [
  { name: 'Priya Sharma', role: 'Homeowner', quote: 'The team helped me find a perfect flat in Dwarka with a seamless buying experience.', rating: 5 },
  { name: 'Rohit Verma', role: 'Investor', quote: 'Great listings, excellent response, and true local expertise made the purchase easy.', rating: 5 },
  { name: 'Nisha Gupta', role: 'First-time buyer', quote: 'Their home loan assistance and property advice were exactly what I needed.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='mb-10 space-y-3'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Testimonials</p>
        <h2 className='text-3xl font-semibold text-slate-950'>Trusted by happy homeowners</h2>
      </div>
      <div className='grid gap-6 md:grid-cols-3'>
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className='rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6'
          >
            <div className='flex items-center gap-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white'>
                {item.name.charAt(0)}
              </div>
              <div>
                <p className='font-semibold text-slate-950'>{item.name}</p>
                <p className='text-sm text-slate-500'>{item.role}</p>
              </div>
            </div>
            <div className='mt-5 space-y-3'>
              <p className='text-sm leading-7 text-slate-600'>“{item.quote}”</p>
              <div className='flex items-center gap-1'>
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <HiStar key={idx} className='h-5 w-5 text-orange-500' />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
