import React from 'react'
import valcano from '../assets/taalvalcano.jpeg'
import taal from '../assets/taal.jpeg'
import './Destination.css'
import DestinationData from './DestinationData'
import Mexico from '../assets/mexico.jpg'
import Beach from '../assets/water.jpeg'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to explore a lot, within a time frame</p>
       
       <DestinationData 
            cName="first-des"
            heading="Taal Valcano, Batangas"
            text="Taal Volcano is sometimes described as the world's smallest volcano, or as a lake within a volcano within a lake. It is an active volcano, with 34 recorded eruptions since 1572. It is the second most active volcano in the Philippines, after Mount Mayon, and is the country's only Decade Volcano, one of a group that scientists consider particularly dangerous because they are both quite active and quite close to cities.

            The Philippine Institute of Volcanology and Seismology (PHIVOLCS) is the authority responsible for issuing warnings.
            Taal Volcano is part of a chain of volcanoes that have existed since prehistoric times, resulting from the subduction of the Eurasian Plate and Pacific Plate. The lake is formed by the calderas of several other volcanoes, none of which have erupted for several thousand years. The last eruption of one of them was a VEI 6 event in 3580 BCE.
            
            Trips to the volcano usually start from Tagaytay, a highland city in Cavite with other picturesque landscapes nearby. In the satellite image, it is in the mountainous area north of the lake. Package tours to Taal Volcano are available from the city."
            img1={valcano}
            img2={taal}
       />
       <DestinationData 
            cName="first-des-reverse"
            heading="Mexico Beach, Florida"
            text="Hurricane Michael made landfall near Mexico Beach on October 10, 2018, just before 1 p.m. local time with maximum sustained winds of 160 miles per hour (260 km/h), the first Category 5 hurricane to make landfall in the United States since Hurricane Andrew in 1992.Michael made history as the third strongest (by pressure) and fourth strongest (by wind speed) landfalling storm in the continental United States. The storm caused extensive damage to the community, and to the nearby Tyndall Air Force Base. Nearly all homes were totally destroyed. Brock Long, the FEMA administrator, told CNN that Mexico Beach was wiped out and referred to the community as ground zero. The elementary school and city hall were among the buildings devastated; the pier washed away, and the water tower was knocked down.

            A report by the State indicated that roughly 285 people in Mexico Beach had declined to evacuate the area, although some of those may have left before the peak of the storm. Three people from Mexico Beach were listed among the deaths due to the hurricane. At that time, Mayor Al Cathey told residents it might be months before electricity, water, and plumbing were restored."
            img1={Mexico}
            img2={Beach}
        />
    </div>
  )
}

export default Destination
