import React from 'react'
import { Link } from 'react-router-dom'
import { brandBanner } from 'assets'
import './landingpage.css'
import { useProduct } from 'context/ProductContext'
import { CategoryCard } from 'component/card/CategoryCard'

export const LandingPage = () => {
    const { category } = useProduct()
    return (
        
        <main>
              <div className="brand-banner">
                  <img src={brandBanner} alt="brandBanner" className="banner"/>
                  <div className="search-wrapper">
                      <p className="banner-heading">GET YOURSLEF A NEW BEAST PAIRS!</p>
                              <Link to="/Product" className="shop-link">Shop Now</Link>
                  </div>
              </div>
              <p className="category-heading">Category of Shoes</p>
              <div className="category-wrapper">
            {category.map(item=><CategoryCard key={item._id} Image={item.Image} categoryName={item.categoryName} />)}
            </div>
          </main>
          
  
       
    )
  }
  
