import { motion } from 'framer-motion'
import { HiSparkles, HiShieldCheck, HiUsers, HiBanknotes } from 'react-icons/hi2'

const reasons = [
  { title: 'Verified Insights', description: 'Every listing is reviewed by local experts for trust and transparency.', icon: HiShieldCheck },
  { title: 'Trusted Support', description: 'Dedicated advisors help you evaluate, finance and close on time.', icon: HiUsers },
  { title: 'Curated Properties', description: 'Premium homes selected for quality neighborhoods and future value.', icon: HiSparkles },
  { title: 'Financing Assistance', description: 'Home loan guidance with leading lenders and tailored options.', icon: HiBanknotes },
]

export default function WhyChooseUs() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Why choose us?</p>
          <h2 className='mt-4 text-3xl font-semibold text-slate-950'>A premium real estate experience built for Delhi buyers</h2>
          <p className='mt-5 max-w-xl text-base leading-8 text-slate-600'>Our portal combines curated properties, verified details, and expert guidance so you can move with confidence — whether you are buying, selling, or investing.</p>
        </div>
        <div className='grid gap-6 sm:grid-cols-2'>
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6'
              >
                <div className='inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500'>
                  <Icon className='h-6 w-6' />
                </div>
                <h3 className='mt-5 text-xl font-semibold text-slate-950'>{item.title}</h3>
                <p className='mt-3 text-sm leading-7 text-slate-600'>{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
