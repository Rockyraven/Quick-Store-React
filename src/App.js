import React from 'react'
import { CartCard, Footer, Navbar } from 'component'
import { Product, LandingPage, Login, WishList, CartPage } from 'pages'
import './app.css'
import { Route, Routes } from 'react-router-dom'

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
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </div>
      <Footer />
      
    </>
  )
}
