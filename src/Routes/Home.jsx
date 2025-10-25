import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destinations from '../Components/Destinations';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const gotoPlans =()=>{
        navigate('/trips')
    }
    return (
        <main>
            <Navbar />
            <Hero onClick={gotoPlans} heroImg="/src/assets/jeep.jpg"  title="Your Journey Your Story" text="Choose Your Favourite Destination" btnText="Travel Plan" />
            <Destinations/>    
            <Footer/>
        </main>

    )
}
export default Home;