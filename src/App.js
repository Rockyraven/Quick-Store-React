import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from 'component'
import { Product, LandingPage } from 'pages'



export const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product' element={<Product />} />

        </Routes>
      <Footer />
    </>
  )
}
