import React from 'react'
import { Link } from 'react-router-dom'
import { brandBanner, kidShoe, menShoe, womenShoe } from '../../assets'
import './landingpage.css'

export const LandingPage = () => {
    return (
        
        <main>
              <div className="brand-banner">
                  <img src={brandBanner} alt="brandBanner" className="banner"/>
                  <div className="search-wrapper">
                      <p className="banner-heading">GET YOURSLEF A NEW BEAST PAIRS!</p>
                              <Link to="/ProductPage" className="shop-link">Shop Now</Link>
                  </div>
              </div>
              <p className="category-heading">Category of Shoes</p>
              <div className="category-wrapper">
                  <div className="category-men">
                      <img src={menShoe} alt="menShoe" className="shoe-category"/>
                      <p className="category-text">Men</p>
                  </div>
                  <div className="category-women">
                      <img src={womenShoe} alt="womenShoe" className="shoe-category"/>
                      <p className="category-text">women</p>
                  </div>
                  <div className="category-kid">
                      <img src={kidShoe} alt="kidShoe" class="shoe-category"/>
                      <p class="category-text">Kid</p>
                  </div>
              </div>
          </main>
  
       
    )
  }
  
