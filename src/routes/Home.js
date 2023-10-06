import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Homeimg from '../assets/image.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero"
        img={Homeimg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btntext="Travel Plan"
        url="/"
        btnclass="show"
    />
    <Destination />
    <Trip />
    <Footer />
        
    </>
  )
}

export default Home
