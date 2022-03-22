import React from 'react'
import { Link } from 'react-router-dom'
import { brandBanner, kidShoe, menShoe, womenShoe } from '../../assets'
import './landingpage.css'

export const LandingPage = () => {
    return (
        
        <main>
              <div class="brand-banner">
                  <img src={brandBanner} alt="" class="banner"/>
                  <div class="search-wrapper">
                      <p class="banner-heading">GET YOURSLEF A NEW BEAST PAIRS!</p>
                              <Link to="/ProductPage" class="shop-link">Shop Now</Link>
                  </div>
              </div>
              <p class="category-heading">Category of Shoes</p>
              <div class="category-wrapper">
                  <div class="category-men">
                      <img src={menShoe} alt="" class="shoe-category"/>
                      <p class="category-text">Men</p>
                  </div>
                  <div class="category-women">
                      <img src={womenShoe} alt="" class="shoe-category"/>
                      <p class="category-text">women</p>
                  </div>
                  <div class="category-kid">
                      <img src={kidShoe} alt="" class="shoe-category"/>
                      <p class="category-text">Kid</p>
                  </div>
              </div>
          </main>
  
       
    )
  }
  
