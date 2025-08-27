import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, Contact, Pricing, ScheduleForm, Services } from "../pages"
import { Footer, Navbar } from '../components/shared'


const AppLayout = () => {
    return (

        <BrowserRouter>
          
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/pickup' element={<ScheduleForm />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppLayout