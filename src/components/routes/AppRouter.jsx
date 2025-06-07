import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import About from '../pages/About'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
