import { motion } from 'framer-motion'
import { HiMagnifyingGlass, HiMapPin, HiBuildingOffice2 } from 'react-icons/hi2'

export default function Hero() {
  return (
    <section className='relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16'>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500 blur-3xl'></div>
        <div className='absolute right-0 top-24 h-64 w-64 rounded-full bg-sky-500 blur-3xl'></div>
      </div>
      <div className='relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='space-y-8'>
          <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100'>
            Premium Homes
          </div>
          <div className='space-y-6'>
            <h1 className='max-w-3xl text-4xl font-semibold leading-tight drop-shadow-sm sm:text-5xl'>Find your dream home in Uttam Nagar, Dwarka, and Delhi</h1>
            <p className='max-w-2xl text-base text-slate-200 sm:text-lg'>Browse verified properties, get home loan guidance, and book expert consultations for your next move in Delhi.</p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <a href='/properties' className='inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400'>
              Explore Properties
            </a>
            <a href='/contact' className='inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20'>
              Get Consultation
            </a>
          </div>
          <div className='rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20'>
            <h2 className='text-sm font-semibold uppercase tracking-[0.35em] text-slate-200'>Quick search</h2>
            <div className='mt-5 grid gap-4 sm:grid-cols-3'>
              <label className='flex flex-col gap-2 text-sm font-medium text-slate-200'>
                Location
                <div className='flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3'>
                  <HiMapPin className='h-5 w-5 text-orange-400' />
                  <input className='w-full bg-transparent text-slate-100 placeholder:text-slate-500 outline-none' placeholder='Uttam Nagar' />
                </div>
              </label>
              <label className='flex flex-col gap-2 text-sm font-medium text-slate-200'>
                Property type
                <div className='flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3'>
                  <HiBuildingOffice2 className='h-5 w-5 text-sky-400' />
                  <select className='w-full bg-transparent text-slate-100 outline-none'>
                    <option>Any type</option>
                    <option>Flats</option>
                    <option>Builder floors</option>
                    <option>Independent houses</option>
                  </select>
                </div>
              </label>
              <label className='flex flex-col gap-2 text-sm font-medium text-slate-200'>
                Budget
                <div className='flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3'>
                  <HiMagnifyingGlass className='h-5 w-5 text-emerald-400' />
                  <input className='w-full bg-transparent text-slate-100 placeholder:text-slate-500 outline-none' placeholder='₹50L - ₹1.5Cr' />
                </div>
              </label>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className='relative overflow-hidden rounded-[2rem] bg-slate-950/90 p-2 shadow-2xl shadow-slate-950/40'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.28),_transparent_40%)]'></div>
          <div className='relative overflow-hidden rounded-[1.75rem] bg-slate-900 p-6 sm:p-8'>
            <img src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1100&q=80' alt='Luxury property' className='h-[420px] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-slate-950/40 sm:h-[520px]' />
            <div className='absolute bottom-6 left-6 rounded-3xl bg-slate-950/80 px-5 py-4 text-slate-100 backdrop-blur'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-300'>Featured listing</p>
              <h3 className='mt-2 text-xl font-semibold'>Premium 3BHK Apartment</h3>
              <p className='mt-1 text-sm text-slate-300'>Uttam Nagar East, Delhi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
