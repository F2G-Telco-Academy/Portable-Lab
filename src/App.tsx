import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import UseCases from './components/sections/UseCases'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import { useReveal } from './lib/useReveal'
import './index.css'

function App() {
  useReveal()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
