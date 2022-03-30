import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="nav-heading">

            <Link to="/"><h1 className="home-heading">QuickStore</h1></Link>
            <div className="search-bar">
                <input type="text" className="search-input-box" placeholder=" Seach for latest" />
                <div className="search-button">
                    <Link to="#"><i className="fa fa-search"></i></Link>
                </div>
            </div>
            <div className="login-section">
                <Link to="/signin"><i className="badge-icon fa fa-user"></i><p>Login</p></Link>
                <div className="wishlist-badge badge">
                    <Link to="/wishlist"> <i className="badge-icon fa fa-heart"></i>
                        <p className="names">wishlist</p>
                        <span className="badge-symbol">3</span></Link>
                </div>
                <div className="cart-badge badge">
                    <Link to="/cart"> <i className="badge-icon fa fa-shopping-cart"></i>
                        <p className="names">Cart</p>
                        <span className="badge-symbol ">5</span></Link>
                </div>
            </div>
        </nav>
    )
}
