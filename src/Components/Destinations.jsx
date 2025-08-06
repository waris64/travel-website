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
import DestinationData from './DestinationData';
import RecentTrips from './RecentTrips';
const Destinations = () => {
    return (
        <div className="px-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-5xl text-center font-bold mb-4">Popular Destinations</h1>
            <h3 className="text-lg md:text-xl text-center font-medium mb-8">
                Tours give you the opportunity to see a lot, within a time frame
            </h3>
            <DestinationData
                heading="Taal Volcani, Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look,
                            the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and
                            you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty
                            and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                pic1={pic1}
                pic2={pic2}
                direction="md:flex-row"
            />
            <DestinationData
                heading="Taal Volcani, Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look,
                            the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and
                            you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty
                            and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                pic1={pic3}
                pic2={pic4}
                direction="md:flex-row-reverse"

            />
           <RecentTrips />

            
        </div>
    );
};

export default Destinations;
