import Hero from '../components/Hero.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import Categories from '../components/Categories.jsx'
import BuySellRent from '../components/BuySellRent.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import HomeLoanAssistance from '../components/HomeLoanAssistance.jsx'
import Process from '../components/Process.jsx'
import GoogleMaps from '../components/GoogleMaps.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='space-y-24'>
        <FeaturedProperties />
        <Categories />
        <BuySellRent />
        <WhyChooseUs />
        <Gallery />
        <HomeLoanAssistance />
        <Process />
        <Testimonials />
        <GoogleMaps />
        <ContactForm />
      </div>
    </>
  )
}
