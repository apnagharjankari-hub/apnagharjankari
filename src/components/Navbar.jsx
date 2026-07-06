import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiBars3, HiXCircle } from 'react-icons/hi2'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-lg'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <NavLink to='/' className='flex items-center gap-3'>
          <div className='rounded-2xl border border-slate-200 bg-slate-900 p-3 shadow-sm'>
            <span className='text-2xl font-bold text-white'>AG</span>
          </div>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-slate-500'>Apna Ghar</p>
            <h1 className='text-xl font-semibold text-slate-950'>Jankari</h1>
          </div>
        </NavLink>

        <nav className='hidden items-center gap-8 lg:flex'>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className='hidden items-center gap-4 lg:flex'>
          <a href='tel:+918448844840' className='rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800'>
            Call Now
          </a>
        </div>

        <button
          className='inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden'
          type='button'
          aria-label='Toggle navigation'
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiXCircle className='h-6 w-6' /> : <HiBars3 className='h-6 w-6' />}
        </button>
      </div>

      {open && (
        <div className='border-t border-slate-200 bg-white/95 px-4 pb-6 pt-4 shadow-sm backdrop-blur-lg lg:hidden'>
          <div className='flex flex-col gap-4'>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className='text-base font-medium text-slate-700 hover:text-slate-900'
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a href='tel:+918448844840' className='rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm'>
              Call +91 84488 44840
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
