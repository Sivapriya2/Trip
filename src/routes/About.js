import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimg from '../assets/about.jpg'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
const About = () => {
  return (
    <>
        <Navbar/>
        <Hero 
             cName="about"
             img={Aboutimg}
             title="About"
             url="/"
             btnclass="hide"
        />
        <Aboutus />
        <Footer />
    </>
  )
}

export default About
