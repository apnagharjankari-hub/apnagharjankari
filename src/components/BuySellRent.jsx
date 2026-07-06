import { HiArrowUpRight, HiArrowDownRight, HiBuildingOffice2 } from 'react-icons/hi2'

const actions = [
  { title: 'Buy a home', description: 'Discover premium properties with transparent pricing and local support.', icon: HiBuildingOffice2, color: 'from-sky-500 to-cyan-400' },
  { title: 'Sell quickly', description: 'List your property with expert marketing and fast buyer matches.', icon: HiArrowUpRight, color: 'from-orange-500 to-amber-400' },
  { title: 'Rent smart', description: 'Browse verified rental homes with flexible leasing options.', icon: HiArrowDownRight, color: 'from-violet-500 to-fuchsia-500' },
]

export default function BuySellRent() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='mb-10 space-y-3'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Buy • Sell • Rent</p>
        <h2 className='text-3xl font-semibold text-slate-950'>Simplified property journeys for every requirement</h2>
      </div>
      <div className='grid gap-6 md:grid-cols-3'>
        {actions.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.title} className='rounded-[1.75rem] border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white`}>
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
