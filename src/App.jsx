import { useState } from 'react'
import { LangProvider } from './i18n.jsx'
import Header from './components/Header.jsx'
import Loader from './components/Loader.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Categories from './components/Categories.jsx'
import TrustBanner from './components/TrustBanner.jsx'
import Brands from './components/Brands.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFAB from './components/WhatsAppFAB.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <LangProvider>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="min-h-screen bg-void">
        <Header />
        <main>
          <Categories />
          <Hero />
          <Gallery />
          <Brands />
          <TrustBanner />
          <Testimonials />
        </main>
        <ContactForm />
        <Footer />
        <WhatsAppFAB />
        <ScrollToTop />
      </div>
    </LangProvider>
  )
}
