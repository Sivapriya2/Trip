import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Serviceimg from '../assets/services.webp'

const Services = () => {
  return (
    <>
      <Navbar/>
      <Hero 
         cName="services"
         img="Serviceimg"
         url="/"
      />
      <Footer />
    </>
  )
}

export default Services
