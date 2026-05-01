import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyWorkWithUs from './components/WhyWorkWithUs'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <WhyWorkWithUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
