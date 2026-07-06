import { HiMapPin, HiPhone, HiEnvelope, HiArrowRight } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className='bg-slate-950 text-slate-200'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid gap-10 xl:grid-cols-[1.2fr_0.8fr]'>
          <div className='space-y-4'>
            <p className='inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300'>Apna Ghar Jankari</p>
            <h2 className='max-w-2xl text-3xl font-semibold text-white'>A premium real estate portal for Delhi property buyers and investors.</h2>
            <p className='max-w-xl text-sm leading-7 text-slate-400'>Find verified homes, get home loan assistance, and work with local experts for the smoothest property journey.</p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.32em] text-slate-500'>Contact</h3>
              <div className='space-y-3 text-sm text-slate-400'>
                <div className='flex items-start gap-3'>
                  <HiMapPin className='mt-1 h-5 w-5 text-orange-500' />
                  <span>Uttam Nagar, Dwarka & Nearby Areas, Delhi</span>
                </div>
                <div className='flex items-start gap-3'>
                  <HiPhone className='mt-1 h-5 w-5 text-orange-500' />
                  <span>+91 84488 44840</span>
                </div>
                <div className='flex items-start gap-3'>
                  <HiEnvelope className='mt-1 h-5 w-5 text-orange-500' />
                  <span>contact@apnagharjankari.com</span>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.32em] text-slate-500'>Quick links</h3>
              <div className='grid gap-3 text-sm text-slate-400'>
                <a href={import.meta.env.BASE_URL} className='inline-flex items-center gap-2 hover:text-white'>
                  <HiArrowRight className='h-4 w-4 text-orange-500' /> Home
                </a>
                <a href={`${import.meta.env.BASE_URL}properties`} className='inline-flex items-center gap-2 hover:text-white'>
                  <HiArrowRight className='h-4 w-4 text-orange-500' /> Properties
                </a>
                <a href={`${import.meta.env.BASE_URL}about`} className='inline-flex items-center gap-2 hover:text-white'>
                  <HiArrowRight className='h-4 w-4 text-orange-500' /> About
                </a>
                <a href={`${import.meta.env.BASE_URL}contact`} className='inline-flex items-center gap-2 hover:text-white'>
                  <HiArrowRight className='h-4 w-4 text-orange-500' /> Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-slate-800 pt-6 text-center text-sm text-slate-500'>
          © 2026 Apna Ghar Jankari. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
