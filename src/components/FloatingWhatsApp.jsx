import { HiChatBubbleLeftRight } from 'react-icons/hi2'

export default function FloatingWhatsApp() {
  return (
    <a
      href='https://wa.me/918448844840'
      target='_blank'
      rel='noreferrer'
      className='fixed bottom-28 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/20 transition hover:bg-emerald-400'
    >
      <HiChatBubbleLeftRight className='h-5 w-5' />
      WhatsApp
    </a>
  )
}
