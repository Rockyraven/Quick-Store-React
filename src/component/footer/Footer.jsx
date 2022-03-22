import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer class="footer">
                
    <div class="category-section">
        <h2 class="footer-heading">Category</h2>
        <ul>
            <li><a href="#" class="category-link">Sneaker</a></li>
            <li><a href="#" class="category-link">Loafer</a></li>
            <li><a href="#" class="category-link">Sports</a></li>
            <li><a href="#" class="category-link">Casual</a></li>
        </ul>
    </div>
    <div class="Account">
        <h2 class="footer-heading">Account</h2>
        <ul>
            <li><a href="#" class="account-link">My Account</a></li>
            <li><a href="#" class="account-link">My Order</a></li>
            <li><a href="#" class="account-link">Wishlist</a></li>
            <li><a href="#" class="account-link">Track Order</a></li>
        </ul>
    </div>
    <div class="contact">
        <h2 class="footer-heading">Contact Us</h2>
        <ul>
            <li><a href="#" class="contact-link">Location: Howarh, Kolkata West Bengal - 722101</a></li>
            <li><a href="#" class="contact-link">Call Us: +91 0000 000000</a></li>
            <li><a href="#" class="contact-link">Email: rocky23012001@gmail.com</a></li>
        </ul>
    </div>
    <div class="made-by">
        <h2 class="footer-heading">Made with ❤️ by ROCKY </h2>
            <p class="copyright"> © 2021, All rights reserved</p>
            <div class="social-symbol">
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-twitter"></i> </a>
                <a href="#"><i class="fa fa-github"> </i></a>
            </div>
    </div>

</footer>

  )
}

export { Footer }