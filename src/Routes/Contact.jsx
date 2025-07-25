import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
const Contact =()=>{
return (
    <main>
         <Navbar/>
         <Hero heroImg="/src/assets/2.jpg" title="Contact Us" />
         <ContactForm/>
         <Footer/>
    </main>
)
} 
export default Contact;