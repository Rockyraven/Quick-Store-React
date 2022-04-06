import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from 'component'
import { Product, LandingPage, Login, WishList } from 'pages'
import './app.css'

export const App = () => {
  return (
    <>
   <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
      <Footer />
      
    </>
  )
}
