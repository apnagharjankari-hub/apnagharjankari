export default function GoogleMaps() {
  return (
    <section className='rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg shadow-slate-900/5'>
      <div className='mb-8 space-y-3'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-orange-500'>Explore locations</p>
        <h2 className='text-3xl font-semibold text-slate-950'>Find properties near Uttam Nagar and Dwarka</h2>
      </div>
      <div className='overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm'>
        <iframe
          title='Delhi property search map'
          className='h-[420px] w-full border-0'
          loading='lazy'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14049.901611438436!2d76.9665373161427!3d28.59867958360231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dc02de177f%3A0x25aeae3569d257f7!2sUttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1711111111111!5m2!1sen!2sin'
        />
      </div>
    </section>
  )
}
