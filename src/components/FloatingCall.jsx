import { HiPhone } from 'react-icons/hi2'

export default function FloatingCall() {
  return (
    <a
      href='tel:+918448844840'
      className='fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-950/30 transition hover:bg-slate-800'
    >
      <HiPhone className='h-5 w-5' />
      Call Now
    </a>
  )
}
