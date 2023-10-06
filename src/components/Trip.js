import React from 'react'
import './Trip.css'
import TripData from './TripData'
import indo from '../assets/indonesia.jpg'
import mala from '../assets/malaysia.webp'
import paris from '../assets/paris.jpeg'
function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className='tripcard'>
        <TripData
            image={indo}
            heading="Trip in Indonesia"
            text="Indonesia is a vast archipelago comprising thousands of islands located to the south of Malaysia. It is known for its rich cultural diversity, stunning natural landscapes, including lush rainforests and beautiful beaches, and vibrant cities like Jakarta and Bali. The two countries share maritime boundaries and have historical and economic ties due to their proximity in Southeast Asia. Both nations are part of the Association of Southeast Asian Nations (ASEAN) and maintain diplomatic relations, but they are separate sovereign states."
        />
        <TripData
            image={mala}
            heading="Trip in Malaysia"
            text="Malaysia is a diverse and beautiful destination for tourists. One of its iconic places is the Petronas Twin Towers in Kuala Lumpur, the tallest twin towers in the world, offering breathtaking cityscape views. The historic city of Malacca boasts colonial architecture and a rich cultural heritage. Langkawi, an archipelago of stunning islands, offers pristine beaches and lush rainforests. Penang is famous for its vibrant street art, heritage buildings, and delectable street food. For nature enthusiasts, the Borneo rainforest is a haven for wildlife, including orangutans. And, not to be missed, the Cameron Highlands provide a cool escape with tea plantations and scenic landscapes."
        />
        <TripData
            image={paris}
            heading="Trip in Paris"
            text="France is renowned for its captivating tourist destinations. The Eiffel Tower in Paris stands as an iconic symbol of the country, offering breathtaking views of the city. The Palace of Versailles showcases opulent royal history with its stunning architecture and gardens. The picturesque countryside of Provence boasts lavender fields and charming villages. The French Riviera allures with its glamorous beaches and vibrant nightlife. Mont Saint-Michel, a medieval abbey perched on a rocky island, is a marvel of architecture. France's diverse landscapes, rich culture, and world-class cuisine make it a top global tourist destination."
        />
      </div>
    </div>
  )
}

export default Trip
