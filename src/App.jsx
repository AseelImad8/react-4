import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/*' element={<h2>Page Not Found</h2>} />
            </Routes>
        </div>
    )
}
