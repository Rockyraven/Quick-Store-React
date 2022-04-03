import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from 'component'
import { Product, LandingPage, Login } from 'pages'

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}
