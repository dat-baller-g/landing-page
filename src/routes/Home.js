import React from 'react'
import About from '../components/About'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Home