import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Footer, Navbar } from '../components/shared'

const AppLayout = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppLayout