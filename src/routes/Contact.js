import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import contactimg from '../assets/contact.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero 
         cName="contact"
         img={contactimg}
         title="Contact"
         url="/"
      />
      <ContactForm/>
      <Footer />
    </>
  )
}

export default Contact
