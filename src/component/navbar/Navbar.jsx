import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav class="nav-heading">
     
    <Link to="/"><h1 class="home-heading">QuickStore</h1></Link>
        <div class="search-bar">
            <input type="text" class="search-input-box" placeholder=" Seach for latest"/>
            <div class="search-button">
                <a href="#"><i class="fa fa-search"></i></a>
            </div>
        </div>
        <div class="login-section">
                <Link to="/signin"><i class="badge-icon fa fa-user"></i><p>Login</p></Link>
                <div class="wishlist-badge badge">
                    <Link to="/wishlist"> <i class="badge-icon fa fa-heart"></i> 
                        <p class="names">wishlist</p>
                        <span class="badge-symbol">3</span></Link>
                </div>
                <div class="cart-badge badge">
                    <Link to="/cart"> <i class="badge-icon fa fa-shopping-cart"></i> 
                        <p class="names">Cart</p>
                        <span class="badge-symbol ">5</span></Link>
                </div>
        </div>
</nav>
  )
}
