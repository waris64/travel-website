import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destinations from '../Components/Destinations';
import Footer from '../Components/Footer';
const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero heroImg="/src/assets/jeep.jpg"  title="Your Journey Your Story" text="Choose Your Favourite Destination" btnText="Travel Plan" />
            <Destinations/>    
            <Footer/>
        </main>

    )
}
export default Home;