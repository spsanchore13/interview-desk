import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from '../pages/UserPage';
import AboutPage from '../pages/AboutPage';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    )
}

export default AllRoutes