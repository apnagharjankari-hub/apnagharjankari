import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import FloatingCall from './components/FloatingCall.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Properties from './pages/Properties.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />
      <main className='mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/properties/:id' element={<PropertyDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  )
}
