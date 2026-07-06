import { HiHome, HiBuildingOffice2, HiBuildingOffice, HiSparkles } from 'react-icons/hi2'

const categories = [
  { title: 'Flats & Apartments', icon: HiHome, description: 'Comfortable city living spaces with top amenities.' },
  { title: 'Builder Floors', icon: HiBuildingOffice2, description: 'Large layouts with modern finishes and privacy.' },
  { title: 'Independent Houses', icon: HiBuildingOffice, description: 'Private homes with dedicated open areas and parking.' },
  { title: 'Residential Plots', icon: HiSparkles, description: 'Prime plots for custom homes and future growth.' },
]

export default function Categories() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='mb-10 space-y-3'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Property categories</p>
        <h2 className='text-3xl font-semibold text-slate-950'>Explore the best real estate options</h2>
      </div>
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {categories.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.title} className='group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white'>
              <div className='inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500'>
                <Icon className='h-7 w-7' />
              </div>
              <h3 className='mt-6 text-xl font-semibold text-slate-950'>{item.title}</h3>
              <p className='mt-3 text-sm leading-7 text-slate-600'>{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
