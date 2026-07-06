import { HiCreditCard, HiShieldCheck, HiBanknotes } from 'react-icons/hi2'

const benefits = [
  { title: 'Loan eligibility help', description: 'Find the best lending option for your profile and budget.', icon: HiCreditCard },
  { title: 'Interest guidance', description: 'Compare rates and repayment plans from trusted banks.', icon: HiBanknotes },
  { title: 'Pre-approved offers', description: 'Get matched with home loan offers quickly and securely.', icon: HiShieldCheck },
]

export default function HomeLoanAssistance() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Home loan assistance</p>
          <h2 className='mt-4 text-3xl font-semibold text-slate-950'>Get expert financing support for your purchase</h2>
          <p className='mt-5 max-w-xl text-base leading-8 text-slate-600'>We connect you to home loan advisers and lenders with fast approvals, transparent guidance, and tailored paperwork support.</p>
          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className='rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5'>
                  <div className='inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='mt-4 font-semibold text-slate-950'>{item.title}</h3>
                  <p className='mt-2 text-sm leading-7 text-slate-600'>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20'>
          <p className='text-sm uppercase tracking-[0.35em] text-orange-300'>Finance made easy</p>
          <h3 className='mt-4 text-3xl font-semibold'>Home loan help in 3 simple steps</h3>
          <ul className='mt-6 space-y-4 text-sm leading-7 text-slate-200'>
            <li>1. Submit your lending details for fast assessment.</li>
            <li>2. Compare curated home loan offers from trusted banks.</li>
            <li>3. Complete the application with expert document support.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
