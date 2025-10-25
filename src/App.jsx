import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Services from './Routes/Services'
import Register from './Routes/Register'
import Login from './Components/Login'
import TripForm from './Components/TripForm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Booking from './Routes/Booking'

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/service' element={<Services/>}/>
        <Route path = '/register' element={<Register/>}/>
        <Route path = '/Tripform' element={<TripForm/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/booking' element={<Booking/>}/>
      </Routes>      
    </div>
    )
}

export default App
