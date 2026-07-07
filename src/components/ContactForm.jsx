import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'

export default function ContactForm() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='grid gap-10 lg:grid-cols-[0.95fr_0.85fr]'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Get in touch</p>
          <h2 className='mt-4 text-3xl font-semibold text-slate-950'>Speak with our property experts</h2>
          <p className='mt-5 max-w-xl text-base leading-8 text-slate-600'>Have a question about listings or want a personalized property search? Send us a message and our local team will respond within 24 hours.</p>
          <div className='mt-10 space-y-4 rounded-[2rem] bg-slate-50 p-6'>
            <div className='flex items-center gap-4 text-slate-700'>
              <HiMapPin className='h-6 w-6 text-orange-500' />
              <div>
                <p className='text-sm font-semibold'>Service areas</p>
                <p className='text-sm text-slate-500'>Uttam Nagar • Dwarka • Delhi</p>
              </div>
            </div>
            <div className='flex items-center gap-4 text-slate-700'>
              <HiPhone className='h-6 w-6 text-orange-500' />
              <div>
                <p className='text-sm font-semibold'>Call us</p>
                <a href='tel:+918448844840' className='text-sm text-slate-500 transition hover:text-orange-500'>+91 84488 44840</a>
              </div>
            </div>
            <div className='flex items-center gap-4 text-slate-700'>
              <HiEnvelope className='h-6 w-6 text-orange-500' />
              <div>
                <p className='text-sm font-semibold'>Email</p>
                <a href='mailto:apnagharjankari@gmail.com' className='text-sm text-slate-500 transition hover:text-orange-500'>apnagharjankari@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <form className='space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6'>
          <div className='grid gap-5 sm:grid-cols-2'>
            <label className='block'>
              <span className='mb-2 block text-sm font-medium text-slate-700'>Name</span>
              <input type='text' className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100' placeholder='Your Name' />
            </label>
            <label className='block'>
              <span className='mb-2 block text-sm font-medium text-slate-700'>Phone</span>
              <input type='tel' className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100' placeholder='+91 91234 56789' />
            </label>
          </div>
          <div className='grid gap-5 sm:grid-cols-2'>
            <label className='block'>
              <span className='mb-2 block text-sm font-medium text-slate-700'>Email</span>
              <input type='email' className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100' placeholder='hello@example.com' />
            </label>
            <label className='block'>
              <span className='mb-2 block text-sm font-medium text-slate-700'>Property Type</span>
              <select className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100'>
                <option>Any type</option>
                <option>Flat</option>
                <option>Builder floor</option>
                <option>Plot</option>
              </select>
            </label>
          </div>
          <label className='block'>
            <span className='mb-2 block text-sm font-medium text-slate-700'>Message</span>
            <textarea rows='4' className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100' placeholder='Tell us what you are looking for...' />
          </label>
          <button type='submit' className='w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
