import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer , Navbar} from './component'
import { LandingPage } from './pages/landingpage/LandingPage'


export const App = () => {
  return (<>
  <Navbar/>
            <Routes>
                <Route path='/' element={<LandingPage/>}  />

            </Routes>
    <LandingPage/>
      <Footer/>
    </>
  )
}
