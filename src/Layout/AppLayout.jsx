import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Footer, Navbar } from '../components/shared'
import Service from '../pages/Service/Service'

const AppLayout = () => {
    return (

        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Service />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppLayout