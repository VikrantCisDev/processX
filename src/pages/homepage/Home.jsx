import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import FeaturesSection from '../../components/FeaturesSection'
import WhyProcessXSection from '../../components/WhyProcessXSection'
import Footer from '../../components/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <WhyProcessXSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home