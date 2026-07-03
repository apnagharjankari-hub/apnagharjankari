import Hero from '../components/Hero.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Categories from '../components/Categories.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import PropertyTypes from '../components/PropertyTypes.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedProperties />
      <PropertyTypes />
      <HowItWorks />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
    </>
  )
}
