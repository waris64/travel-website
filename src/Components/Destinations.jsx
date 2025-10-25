import React from 'react'
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'
import pic4 from '../assets/4.jpg'
import pic5 from '../assets/5.jpg'
import pic6 from '../assets/6.jpg'
import pic8 from '../assets/8.jpg'
import pic9 from '../assets/9.jpg'
import pic10 from '../assets/10.jpg'
import pic11 from '../assets/11.jpg'
import indonesia from '../assets/indonesia.jpg'
import malaysia from '../assets/malaysia.jpg'
import france from '../assets/france.jpg'
import DestinationData from './DestinationData'
import RecentTrips from './RecentTrips'

const Destinations = () => {
    return (
        <div className="px-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-5xl text-center font-bold mb-4">Popular Destinations</h1>
            <h3 className="text-lg md:text-xl text-center font-medium mb-8">
                Discover the world’s most breathtaking travel spots — handpicked for adventure seekers and dreamers alike.
            </h3>

            <DestinationData
                heading="Bali, Indonesia"
                text="A tropical paradise where emerald rice terraces meet turquoise beaches and sacred temples. Whether you’re surfing in Kuta, chasing waterfalls in Ubud, or watching the sunset at Tanah Lot, Bali wraps you in a rhythm of calm and color that never fades. It’s more than a destination — it’s a feeling that lingers."
                pic1={indonesia}
                pic2={pic1}
                direction="md:flex-row"
            />

            <DestinationData
                heading="Paris, France"
                text="The City of Lights — timeless, romantic, and filled with charm. Wander along the Seine, sip coffee at a Montmartre café, or gaze at the Eiffel Tower sparkling through the night. Paris isn’t just a city to visit; it’s a poem to experience — one pastry, one museum, and one love story at a time."
                pic1={france}
                pic2={pic3}
                direction="md:flex-row-reverse"
            />

            <DestinationData
                heading="Kuala Lumpur, Malaysia"
                text="Where tradition meets modern skyline. The iconic Petronas Towers rise above a city bursting with flavors, festivals, and colors. Explore vibrant street markets, lush rainforests, and sacred temples — all in one unforgettable journey through Malaysia’s heart."
                pic1={malaysia}
                pic2={pic4}
                direction="md:flex-row"
            />

            <RecentTrips />
        </div>
    )
}

export default Destinations
