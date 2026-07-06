const steps = [
  { title: 'Search properties', description: 'Find verified homes and plots that match your lifestyle and budget.' },
  { title: 'Visit & evaluate', description: 'Schedule site visits and review neighbourhood, amenities, and value.' },
  { title: 'Book with confidence', description: 'Get assistance with paperwork, pricing, and legal checks.' },
]

export default function Process() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='mb-10 space-y-3'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Property buying process</p>
        <h2 className='text-3xl font-semibold text-slate-950'>A seamless home purchase journey</h2>
      </div>
      <div className='grid gap-6 md:grid-cols-3'>
        {steps.map((step, index) => (
          <article key={step.title} className='rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6'>
            <div className='flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500 text-white'>
              <span className='text-lg font-semibold'>{index + 1}</span>
            </div>
            <h3 className='mt-6 text-xl font-semibold text-slate-950'>{step.title}</h3>
            <p className='mt-3 text-sm leading-7 text-slate-600'>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
